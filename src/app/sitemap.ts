import type { MetadataRoute } from "next";

import { builtPages, pageUpdated } from "@/content/routes";
import { site } from "@/content/site";
import { getNewsArticles } from "@/lib/news/articles";

export const revalidate = 900;

/** Pages that list the latest news change whenever an article is published. */
const listsNews = new Set<string>(["/", "/news"]);

/**
 * Lists finished pages and every news article, with the date each one last
 * changed (Google ignores priority and changefreq). Placeholder ("coming soon")
 * pages are noindex and are added here automatically once they are listed in
 * `builtPages`.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getNewsArticles();
  const newestArticle = articles.reduce(
    (newest, article) =>
      (article.updated ?? article.date) > newest ? (article.updated ?? article.date) : newest,
    "",
  );
  return [
    ...builtPages.map((path) => {
      const updated = pageUpdated[path];
      return {
        url: `${site.url}${path === "/" ? "" : path}`,
        lastModified: listsNews.has(path) && newestArticle > updated ? newestArticle : updated,
      };
    }),
    ...articles.map((article) => ({
      url: `${site.url}/news/${article.slug}`,
      lastModified: article.updated ?? article.date,
    })),
  ];
}
