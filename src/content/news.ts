import type { StaticImageData } from "next/image";

import chartingImage from "@/assets/images/news/charting-a-new-course.webp";
import clinkerImage from "@/assets/images/news/clinker-shipment.webp";
import pentaImage from "@/assets/images/news/mv-penta.webp";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: StaticImageData;
  imageAlt: string;
};

/**
 * Seeded from klaveness.com. This will move to a CMS once the newsroom is
 * built; the homepage only needs the latest three.
 */
export const news: NewsArticle[] = [
  {
    slug: "torvald-klaveness-20062016-charting-a-new-course",
    title: "Torvald Klaveness 2006–2016: Charting a new course",
    excerpt: "Part 7 of an 8-part story through the decades to mark our 80th anniversary.",
    date: "2026-09-10",
    image: chartingImage,
    imageAlt: "A workshop wall covered in sticky notes about value, benchmarks and fuel cost",
  },
  {
    slug: "reflections-on-trading-efficiency-after-a-visit-to-mv-penta",
    title: "Reflections on trading efficiency after a visit to M/V Penta",
    excerpt:
      "The Klaveness Japan team visited M/V Penta while the vessel was discharging grain in Mizushima, Japan.",
    date: "2026-09-07",
    image: pentaImage,
    imageAlt: "The Klaveness Japan team on the quayside in front of M/V Penta in Mizushima",
  },
  {
    slug: "klaveness-dry-bulk-completes-milestone-clinker-shipment",
    title: "Klaveness Dry Bulk completes milestone clinker shipment",
    excerpt:
      "In August 2026, Klaveness Dry Bulk completed its first cement clinker shipment in several years, loading in Cam Pha, Vietnam, and discharging in Ivory Coast.",
    date: "2026-09-02",
    image: clinkerImage,
    imageAlt: "Deck view of a bulk carrier loading cement clinker from barges in Cam Pha, Vietnam",
  },
];

export const latestNews = (count = 3) =>
  [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, count);

export const formatNewsDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
