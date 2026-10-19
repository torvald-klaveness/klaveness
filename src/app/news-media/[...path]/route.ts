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

/**
 * Images from a local checkout of the content repo, for previewing articles
 * before they are pushed (NEWS_CONTENT_DIR). Not found everywhere else.
 */
export async function GET(_request: Request, { params }: RouteContext<"/news-media/[...path]">) {
  const source = getNewsSource();
  if (source.kind !== "filesystem") return new Response(null, { status: 404 });

  const { path: segments } = await params;
  const root = path.join(/*turbopackIgnore: true*/ source.dir, NEWS_ROOT);
  const file = path.resolve(/*turbopackIgnore: true*/ source.dir, ...segments);
  const type = TYPES[path.extname(file).toLowerCase()];
  if (!type || !file.startsWith(root + path.sep)) return new Response(null, { status: 404 });

  const data = await readFile(file).catch(() => null);
  if (!data) return new Response(null, { status: 404 });
  return new Response(data, { headers: { "content-type": type, "cache-control": "no-store" } });
}
