import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import { isIndexable } from "@/lib/indexing";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isIndexable ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
