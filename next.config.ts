import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is reserved for the night-lights map, whose tiny city lights soften at 75.
    qualities: [75, 90],
    // Extra steps at common laptop widths so full-bleed images aren't oversized.
    deviceSizes: [640, 750, 828, 1080, 1280, 1440, 1680, 1920, 2048, 2560],
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
      {
        source: "/businesses/klaveness-holding",
        destination: "/about/klaveness-holding",
        permanent: true,
      },
      // Old individual bio pages open the bio panel on the leadership page.
      ...[
        "ernst-meyer",
        "trine-hellum",
        "fabian-flaaten",
        "goran-andreassen",
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
      // The About menu item opens About us; /about may get its own page later.
      { source: "/about", destination: "/about/about-us", permanent: false },
      { source: "/contact", destination: "/contact/offices", permanent: false },
      { source: "/team", destination: "/contact/team", permanent: true },
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
