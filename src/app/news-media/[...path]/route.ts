import { readFile } from "node:fs/promises";
import path from "node:path";

import { NEWS_ROOT, getNewsSource } from "@/lib/news/config";

const TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

/** Kept by the CDN for an hour, then refreshed in the background (images can be replaced on a push). */
const CACHE_CONTROL = "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400";

/**
 * News images on our own domain, so search engines and link previews credit
 * klaveness.com: from the content repo on GitHub, or from a local checkout
 * when previewing articles before they are pushed (NEWS_CONTENT_DIR).
 */
export async function GET(_request: Request, { params }: RouteContext<"/news-media/[...path]">) {
  const { path: segments } = await params;
  const repoPath = path.posix.normalize(segments.join("/"));
  const type = TYPES[path.posix.extname(repoPath).toLowerCase()];
  if (!type || !repoPath.startsWith(`${NEWS_ROOT}/`)) return new Response(null, { status: 404 });

  const source = getNewsSource();

  if (source.kind === "filesystem") {
    const root = path.join(/*turbopackIgnore: true*/ source.dir, NEWS_ROOT);
    const file = path.resolve(/*turbopackIgnore: true*/ source.dir, ...segments);
    if (!file.startsWith(root + path.sep)) return new Response(null, { status: 404 });
    const data = await readFile(file).catch(() => null);
    if (!data) return new Response(null, { status: 404 });
    return new Response(data, { headers: { "content-type": type, "cache-control": "no-store" } });
  }

  const encoded = repoPath.split("/").map(encodeURIComponent).join("/");
  const upstream = await fetch(
    `https://raw.githubusercontent.com/${source.owner}/${source.repo}/${encodeURIComponent(source.branch)}/${encoded}`,
    {
      headers: source.token ? { authorization: `Bearer ${source.token}` } : {},
      cache: "no-store",
    },
  ).catch(() => null);
  if (!upstream?.ok || !upstream.body) return new Response(null, { status: 404 });
  return new Response(upstream.body, {
    headers: { "content-type": type, "cache-control": CACHE_CONTROL },
  });
}
