import { open, readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  NEWS_CACHE_TAG,
  NEWS_REVALIDATE_SECONDS,
  NEWS_ROOT,
  getNewsSource,
  type NewsSource,
} from "@/lib/news/config";

/** Enough of an image file to read its dimensions from the header. */
const IMAGE_HEAD_BYTES = 65_536;

/**
 * One consistent view of the content repo. On GitHub everything is read at
 * the branch's latest commit: files at a commit never change, so they are
 * cached for good, and a push shows up in full as soon as the commit lookup
 * is revalidated (raw.githubusercontent.com caches branch URLs for minutes).
 */
export type NewsSnapshot = {
  /** Repo paths of the article files, e.g. news/2026/some-article.md. */
  markdownFiles: string[];
  readText: (repoPath: string) => Promise<string>;
  /** First bytes of an image, for its dimensions. */
  readImageHead: (repoPath: string) => Promise<Uint8Array | null>;
  /** Address the browser (through next/image) loads the image from. */
  imageUrl: (repoPath: string) => string;
};

const isArticleFile = (repoPath: string) =>
  repoPath.startsWith(`${NEWS_ROOT}/`) &&
  repoPath.endsWith(".md") &&
  !/\/(README|AGENTS)\.md$/i.test(repoPath);

const encodePath = (repoPath: string) => repoPath.split("/").map(encodeURIComponent).join("/");

/* ---------- GitHub ---------- */

type GitHubSource = Extract<NewsSource, { kind: "github" }>;

const apiHeaders = (source: GitHubSource, accept = "application/vnd.github+json"): HeadersInit => ({
  accept,
  "x-github-api-version": "2022-11-28",
  ...(source.token ? { authorization: `Bearer ${source.token}` } : {}),
});

const REQUEST_TIMEOUT_MS = 15_000;
const ATTEMPTS = 3;

/**
 * GitHub now and then leaves a request hanging or answers 5xx; give up after
 * a while and try again rather than stalling the page. (A signal only turns
 * off per-render deduplication; the response is still cached.)
 */
async function fetchWithRetry(url: string, init: RequestInit) {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, {
        ...init,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      const retryable = response.status === 429 || response.status >= 500;
      if (!retryable || attempt === ATTEMPTS) return response;
    } catch (error) {
      if (attempt === ATTEMPTS) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
  }
}

async function checked(response: Response, what: string) {
  if (response.ok || response.status === 206) return response;
  const limited = response.status === 403 || response.status === 429;
  throw new Error(
    `News: could not read ${what} (${response.status}).${limited ? " GitHub rate limit? Set NEWS_CONTENT_GITHUB_TOKEN." : ""}`,
  );
}

async function openGitHub(source: GitHubSource): Promise<NewsSnapshot> {
  const repo = `${source.owner}/${source.repo}`;
  const api = `https://api.github.com/repos/${repo}`;

  // The only request that changes over time: tagged, so the webhook refreshes it.
  const commit = await fetchWithRetry(`${api}/commits/${encodeURIComponent(source.branch)}`, {
    headers: apiHeaders(source, "application/vnd.github.sha"),
    next: { revalidate: NEWS_REVALIDATE_SECONDS, tags: [NEWS_CACHE_TAG] },
  })
    .then((response) => checked(response, `${repo}@${source.branch}`))
    .then((response) => response.text())
    .then((sha) => sha.trim());

  const tree = (await fetchWithRetry(`${api}/git/trees/${commit}?recursive=1`, {
    headers: apiHeaders(source),
    cache: "force-cache",
  })
    .then((response) => checked(response, `the file list of ${repo}`))
    .then((response) => response.json())) as {
    tree: { path: string; type: string }[];
    truncated: boolean;
  };
  if (tree.truncated) console.warn(`News: the file list of ${repo} is truncated by GitHub.`);

  const rawAtCommit = (repoPath: string) =>
    `https://raw.githubusercontent.com/${repo}/${commit}/${encodePath(repoPath)}`;
  const rawHeaders: HeadersInit = source.token ? { authorization: `Bearer ${source.token}` } : {};

  return {
    markdownFiles: tree.tree
      .filter((entry) => entry.type === "blob" && isArticleFile(entry.path))
      .map((entry) => entry.path),
    readText: (repoPath) =>
      fetchWithRetry(rawAtCommit(repoPath), { headers: rawHeaders, cache: "force-cache" })
        .then((response) => checked(response, repoPath))
        .then((response) => response.text()),
    readImageHead: (repoPath) =>
      fetchWithRetry(rawAtCommit(repoPath), {
        headers: { ...rawHeaders, range: `bytes=0-${IMAGE_HEAD_BYTES - 1}` },
        cache: "force-cache",
      })
        .then((response) => (response.ok ? response.arrayBuffer() : null))
        .then((buffer) => (buffer ? new Uint8Array(buffer) : null))
        .catch(() => null),
    // Served from our own domain by src/app/news-media/[...path]/route.ts. The
    // address stays the same between pushes, so optimised images stay cached.
    imageUrl: (repoPath) => `/news-media/${encodePath(repoPath)}`,
  };
}

/* ---------- Local checkout (preview) ---------- */

async function openFilesystem(dir: string): Promise<NewsSnapshot> {
  const entries = await readdir(path.join(/*turbopackIgnore: true*/ dir, NEWS_ROOT), {
    recursive: true,
    withFileTypes: true,
  });
  const toRepoPath = (entry: { parentPath: string; name: string }) =>
    path
      .relative(dir, path.join(/*turbopackIgnore: true*/ entry.parentPath, entry.name))
      .split(path.sep)
      .join("/");

  return {
    markdownFiles: entries
      .filter((entry) => entry.isFile())
      .map(toRepoPath)
      .filter(isArticleFile),
    readText: (repoPath) => readFile(path.join(/*turbopackIgnore: true*/ dir, repoPath), "utf8"),
    readImageHead: async (repoPath) => {
      const file = await open(path.join(/*turbopackIgnore: true*/ dir, repoPath)).catch(() => null);
      if (!file) return null;
      try {
        const buffer = new Uint8Array(IMAGE_HEAD_BYTES);
        const { bytesRead } = await file.read(buffer, 0, IMAGE_HEAD_BYTES, 0);
        return buffer.subarray(0, bytesRead);
      } finally {
        await file.close();
      }
    },
    // Served by src/app/news-media/[...path]/route.ts.
    imageUrl: (repoPath) => `/news-media/${encodePath(repoPath)}`,
  };
}

export function openNewsSnapshot(): Promise<NewsSnapshot> {
  const source = getNewsSource();
  return source.kind === "github" ? openGitHub(source) : openFilesystem(source.dir);
}
