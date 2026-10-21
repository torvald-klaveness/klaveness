import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * Open Graph fields every page shares. A page that sets its own `openGraph`
 * replaces the root layout's entirely (metadata merges shallowly), so each
 * page spreads these in to keep the share image, site name and locale.
 */
export const sharedOpenGraph = {
  type: "website",
  siteName: site.name,
  locale: site.locale,
  // The root opengraph-image.jpg (1200×630).
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: `${site.name} — ${site.tagline}`,
    },
  ],
} satisfies NonNullable<Metadata["openGraph"]>;
