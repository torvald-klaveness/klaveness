import type { MetadataRoute } from "next";

import { builtPages } from "@/content/routes";
import { site } from "@/content/site";
import { getNewsArticles } from "@/lib/news/articles";

export const revalidate = 3600;

/**
 * Lists finished pages and every news article. Placeholder ("coming soon")
 * pages are noindex and are added here automatically once they are listed in
 * `builtPages`.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const articles = await getNewsArticles();
  return [
    ...builtPages.map((path) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency:
        path === "/" || path === "/news" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${site.url}/news/${article.slug}`,
      lastModified: new Date(`${article.date}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
