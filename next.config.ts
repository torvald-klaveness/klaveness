import type { NextConfig } from "next";

import newsRedirects from "./src/content/news-redirects.json";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is reserved for the night-lights map, whose tiny city lights soften at 75.
    qualities: [75, 90],
    // Extra steps at common laptop widths so full-bleed images aren't oversized.
    deviceSizes: [640, 750, 828, 1080, 1280, 1440, 1680, 1920, 2048, 2560],
    // News images come through our own /news-media route (src/app/news-media).
  },
  // Keep links to the old Squarespace URLs working.
  async redirects() {
    return [
      { source: "/sustainability/our-approach", destination: "/sustainability", permanent: true },
      { source: "/about-us", destination: "/about/about-us", permanent: true },
      {
        source: "/careers/equal-opportunities",
        destination: "/careers/life-at-klaveness#equal-opportunities",
        permanent: true,
      },
      // Klaveness Holding is now Klaveness Finance, under Companies.
      ...["/businesses/klaveness-holding", "/about/klaveness-holding"].map((source) => ({
        source,
        destination: "/companies/klaveness-finance",
        permanent: true,
      })),
      {
        source: "/sustainability/trading-efficiency",
        destination: "/trading-efficiency",
        permanent: true,
      },
      // Old individual bio pages open the bio panel on the leadership page.
      ...[
        "ernst-meyer",
        "trine-hellum",
        "fabian-flaaten",
        "engebret-dahm",
        "ingrid-kylstad",
        "michael-jorgensen",
        "henrik-semb-ronningen",
        "nadia-naess",
      ].map((slug) => ({
        source: `/${slug}`,
        destination: `/about/executive-committee#${slug}`,
        permanent: true,
      })),
      // Gøran Andreassen has left; his old bio page goes to the team page.
      {
        source: "/goran-andreassen",
        destination: "/about/executive-committee",
        permanent: true,
      },
      // Same for the Board of Directors bios (the old site spelled one slug "trstad").
      ...[
        ["trond-harald-klaveness", "trond-harald-klaveness"],
        ["elisabeth-trstad", "elisabeth-torstad"],
        ["christian-rynning-tonnesen", "christian-rynning-tonnesen"],
        ["rebekka-glasser-herlofsen", "rebekka-glasser-herlofsen"],
        ["mehrdad-amini", "mehrdad-amini"],
      ].map(([from, to]) => ({
        source: `/${from}`,
        destination: `/about/board-of-directors#${to}`,
        permanent: true,
      })),
      {
        source: "/businesses/klaveness-dry-bulk",
        destination: "/companies/klaveness-dry-bulk",
        permanent: true,
      },
      {
        source: "/baumarine",
        destination: "/companies/klaveness-dry-bulk/baumarine",
        permanent: true,
      },
      // The About menu item opens About us; /about may get its own page later.
      { source: "/about", destination: "/about/about-us", permanent: false },
      { source: "/contact", destination: "/contact/offices", permanent: false },
      { source: "/team", destination: "/contact/team", permanent: true },
      // Other pages from the old sitemap, each to its closest new page.
      ...[
        ["/home", "/"],
        ["/homepage-2026", "/"],
        ["/businesses/klaveness-combination-carriers", "https://www.combinationcarriers.com"],
        ["/businesses/klaveness-digital", "https://www.klavenessdigital.com"],
        [
          "/businesses/klaveness-ship-management",
          "/news/torvald-klaveness-sells-klaveness-ship-management-as-to-osm-thome",
        ],
        ["/market-manager", "/companies/klaveness-dry-bulk"],
        ["/vep", "/companies/klaveness-dry-bulk"],
        ["/tellef-thorleifsson", "/about/board-of-directors"],
        ["/sustainability/our-partners", "/sustainability/stakeholders"],
        ["/emergency", "/contact/offices"],
        ["/recruitment-privacy-notice", "/privacy-policy#recruitment-privacy-notice"],
        ["/redefining-shipping-2024", "/news/redefining-shipping-in-geneva-the-journey-to-2050"],
        ["/klaveness-supply-chain-summit-2024", "/news"],
        ["/kcc-naming-ceremony-mv-baltazar-and-klaveness-forum-perth", "/news"],
      ].map(([source, destination]) => ({ source, destination, permanent: true })),
      // Old Newsroom addresses: dated or tidied slugs, and articles from before
      // 2021 that were not brought over (written by scripts/import-old-news.mjs).
      ...Object.entries(newsRedirects.moved).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...newsRedirects.retired.map((source) => ({ source, destination: "/news", permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
