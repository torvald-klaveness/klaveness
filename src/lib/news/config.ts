import path from "node:path";

/** Every request to the content repo carries this tag; the optional GitHub webhook revalidates it. */
export const NEWS_CACHE_TAG = "news";

/**
 * News pages check the repo at most this often (seconds), so a pushed article
 * appears within 15 minutes without a webhook. The routes repeat the value
 * because `revalidate` must be a literal.
 */
export const NEWS_REVALIDATE_SECONDS = 900;

/** Folder in the content repo that holds the articles (news/<year>/<slug>.md). */
export const NEWS_ROOT = "news";

export type NewsSource =
  | { kind: "github"; owner: string; repo: string; branch: string; token?: string }
  | { kind: "filesystem"; dir: string };

const env = (name: string) => process.env[name]?.trim() || undefined;

/** The articles live in their own repository (github.com/torvald-klaveness/klaveness-content). */
export function getNewsRepo() {
  const [owner, repo] = (env("NEWS_CONTENT_REPO") ?? "torvald-klaveness/klaveness-content").split(
    "/",
  );
  return { owner, repo, branch: env("NEWS_CONTENT_BRANCH") ?? "main" };
}

/**
 * GitHub by default. Set NEWS_CONTENT_DIR to a local checkout of the content
 * repo to preview articles before pushing them (never set it on Vercel).
 */
export function getNewsSource(): NewsSource {
  const dir = env("NEWS_CONTENT_DIR");
  if (dir) return { kind: "filesystem", dir: path.resolve(/*turbopackIgnore: true*/ dir) };
  return { kind: "github", ...getNewsRepo(), token: env("NEWS_CONTENT_GITHUB_TOKEN") };
}
