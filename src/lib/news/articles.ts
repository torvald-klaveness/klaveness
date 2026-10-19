import path from "node:path";
import { cache } from "react";
import { parse as parseYaml } from "yaml";

import { NEWS_ROOT } from "@/lib/news/config";
import { readImageSize, type ImageSize } from "@/lib/news/image-size";
import {
  categorySlug,
  type NewsArticle,
  type NewsCard,
  type NewsCategory,
  type NewsImage,
} from "@/lib/news/shared";
import { openNewsSnapshot, type NewsSnapshot } from "@/lib/news/source";

/** Filter order on the Newsroom; categories not listed here follow alphabetically. */
const CATEGORY_ORDER = [
  "Klaveness Dry Bulk",
  "Baumarine",
  "KCC",
  "Klaveness Digital",
  "Klaveness Finance",
  "Company news",
  "Sustainability",
  "People & careers",
];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/* ---------- Parsing ---------- */

/** Image path relative to the article file, or an absolute https address. */
function resolveImage(snapshot: NewsSnapshot, file: string, src: string) {
  if (/^https:\/\//i.test(src)) return { src };
  let decoded = src;
  try {
    decoded = decodeURI(src);
  } catch {}
  const repoPath = path.posix.normalize(path.posix.join(path.posix.dirname(file), decoded));
  if (!repoPath.startsWith(`${NEWS_ROOT}/`)) return null;
  return { src: snapshot.imageUrl(repoPath), repoPath };
}

function parseArticle(raw: string, file: string, snapshot: NewsSnapshot): NewsArticle | null {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) throw new Error("no frontmatter (the --- block at the top)");
  const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;

  const text = (key: string) => {
    const value = data[key];
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    return typeof value === "string" || typeof value === "number" ? String(value).trim() : "";
  };
  const required = (key: string) => {
    const value = text(key);
    if (!value) throw new Error(`"${key}" is missing`);
    return value;
  };

  if (data.draft === true && process.env.NODE_ENV === "production") return null;

  const slug = text("slug") || path.posix.basename(file, ".md");
  if (!SLUG_PATTERN.test(slug)) throw new Error(`"slug" must be lowercase words joined by hyphens`);
  const date = required("publishedAt");
  if (!DATE_PATTERN.test(date)) throw new Error(`"publishedAt" must look like 2026-10-19`);
  const body = match[2].trim();
  if (!body) throw new Error("the article has no text");

  const categories = Array.isArray(data.categories)
    ? [...new Set(data.categories.map((category) => String(category).trim()).filter(Boolean))]
    : [];

  let cover: NewsImage | undefined;
  const coverImage = text("coverImage");
  if (coverImage) {
    const resolved = resolveImage(snapshot, file, coverImage);
    if (!resolved) throw new Error(`"coverImage" points outside the news folder`);
    cover = { ...resolved, alt: text("coverAlt"), caption: text("coverCaption") || undefined };
  }

  return {
    slug,
    title: required("title"),
    description: text("description"),
    date,
    categories,
    cover,
    body,
    file,
  };
}

/* ---------- Loading ---------- */

async function mapLimit<T, R>(items: T[], limit: number, mapper: (item: T) => Promise<R>) {
  const results: R[] = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await mapper(items[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

/**
 * All published articles, newest first. A broken article is skipped (and
 * logged) rather than taking the Newsroom down with it.
 */
const loadNews = cache(async () => {
  const snapshot = await openNewsSnapshot();
  const parsed = await mapLimit(snapshot.markdownFiles, 8, async (file) => {
    try {
      return parseArticle(await snapshot.readText(file), file, snapshot);
    } catch (error) {
      console.error(`News: skipped ${file}: ${error instanceof Error ? error.message : error}`);
      return null;
    }
  });

  const bySlug = new Map<string, NewsArticle>();
  for (const article of parsed) {
    if (!article) continue;
    const existing = bySlug.get(article.slug);
    if (existing) {
      console.error(`News: skipped ${article.file}: same slug as ${existing.file}`);
      continue;
    }
    bySlug.set(article.slug, article);
  }

  const articles = [...bySlug.values()].sort(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
  );
  return { snapshot, articles, bySlug };
});

export async function getNewsArticles() {
  return (await loadNews()).articles;
}

export async function getNewsArticle(slug: string) {
  return (await loadNews()).bySlug.get(slug) ?? null;
}

export const toNewsCard = ({ slug, title, date, categories, cover }: NewsArticle): NewsCard => ({
  slug,
  title,
  date,
  categories,
  cover,
});

export function getNewsCategories(articles: NewsArticle[]): NewsCategory[] {
  const counts = new Map<string, number>();
  for (const article of articles) {
    for (const name of article.categories) counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  const rank = (name: string) => {
    const index = CATEGORY_ORDER.indexOf(name);
    return index === -1 ? CATEGORY_ORDER.length : index;
  };
  return [...counts]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b))
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }));
}

/** Newest articles sharing a category, topped up with the latest news. */
export async function getRelatedNews(article: NewsArticle, count = 3) {
  const articles = await getNewsArticles();
  const others = articles.filter((other) => other.slug !== article.slug);
  const related = others.filter((other) =>
    other.categories.some((category) => article.categories.includes(category)),
  );
  return [...new Set([...related, ...others])].slice(0, count);
}

/* ---------- Images in an article ---------- */

export type SizedImage = ImageSize & {
  src: string;
  /** False for images hosted elsewhere, which next/image may not optimise. */
  optimized: boolean;
};

const FALLBACK_SIZE: ImageSize = { width: 1600, height: 900 };

async function sizeImage(
  snapshot: NewsSnapshot,
  image: { src: string; repoPath?: string },
): Promise<SizedImage> {
  if (!image.repoPath) return { src: image.src, ...FALLBACK_SIZE, optimized: false };
  const head = await snapshot.readImageHead(image.repoPath);
  const size = (head && readImageSize(head)) ?? FALLBACK_SIZE;
  return { src: image.src, ...size, optimized: true };
}

/**
 * The cover and every image in the body, with their dimensions, keyed by the
 * address written in the Markdown.
 */
export async function getArticleImages(article: NewsArticle) {
  const { snapshot } = await loadNews();
  const sources = [
    ...new Set(
      [...article.body.matchAll(/!\[[^\]]*\]\(\s*<?([^\s)>]+)>?/g)].map((match) => match[1]),
    ),
  ];
  const body = new Map<string, SizedImage>();
  await Promise.all(
    sources.map(async (src) => {
      const resolved = resolveImage(snapshot, article.file, src);
      if (resolved) body.set(src, await sizeImage(snapshot, resolved));
    }),
  );
  const cover = article.cover ? await sizeImage(snapshot, article.cover) : null;
  return { cover, body };
}
