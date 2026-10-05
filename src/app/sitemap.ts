import type { MetadataRoute } from "next";

import { builtPages } from "@/content/routes";
import { site } from "@/content/site";

/**
 * Lists finished pages only. Placeholder ("coming soon") pages are noindex
 * and are added here automatically once they are listed in `builtPages`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return builtPages.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
