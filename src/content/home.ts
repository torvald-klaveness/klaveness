import heroPoster from "@/assets/images/home/hero-video-poster.webp";
import historyImage from "@/assets/images/home/history.webp";
import kccImage from "@/assets/images/home/klaveness-combination-carriers.webp";
import kdImage from "@/assets/images/home/klaveness-digital.webp";
import kdbImage from "@/assets/images/home/klaveness-dry-bulk.webp";
import financeImage from "@/assets/images/companies/klaveness-finance/team.webp";

export const home = {
  hero: {
    // Background video from the old site's homepage: drone footage of MV Ballard
    // (Klaveness Combination Carriers) off Kwinana, October 2023. Files in public/videos.
    video: {
      src: "/videos/home-hero.mp4",
      // Centre crop for phones, where the hero is portrait.
      portraitSrc: "/videos/home-hero-portrait.mp4",
      // First frame, shown while the video loads and instead of it for reduced motion.
      poster: heroPoster,
    },
    // Rendered as three lines; `strong` lines are set in bold.
    title: [
      { text: "Improving", strong: true },
      { text: "the nature of", strong: false },
      { text: "Shipping", strong: true },
    ],
    // Client's corrected text (email, October 2026).
    lead: "Klaveness is a pioneering shipping group delivering a portfolio of physical and digital solutions to the maritime industry. We focus on increasing trading efficiency to support more resilient, decarbonized and cost-effective seaborne supply chains.",
    cta: { label: "Explore Klaveness", href: "#who-we-are" },
  },

  // Client's revised homepage text (October 2026).
  intro: {
    eyebrow: "Who we are",
    title: "For 80 years, Klaveness has challenged the status quo in shipping.",
    body: "Founded in 1946, we’ve built a portfolio of businesses centered on finding better ways to move cargo and improve how shipping works.",
    link: { label: "About us", href: "/about/about-us" },
  },

  // Entry points (client: "News, Trading Efficiency, Sustainability").
  entryPoints: [
    { icon: "news", title: "News", href: "/news" },
    { icon: "chart", title: "Trading Efficiency", href: "/trading-efficiency" },
    { icon: "leaf", title: "Sustainability", href: "/sustainability" },
  ],

  businesses: {
    eyebrow: "Our portfolio companies",
    title:
      "Our portfolio companies combine maritime expertise, innovative business models, and digital capabilities to address some of shipping’s most complex challenges.",
    items: [
      {
        name: "Klaveness Combination Carriers",
        body: "Klaveness Combination Carriers (KCC) is an Oslo Stock Exchange-listed company in which Torvald Klaveness is the main shareholder, operating a fleet of combination carriers designed to reduce ballast voyages and lower emissions.",
        href: "https://www.combinationcarriers.com",
        external: true,
        image: kccImage,
        imageAlt:
          "Aerial view of the combination carrier MV Ballard at sea, with the Klaveness Combination Carriers logo",
      },
      {
        name: "Klaveness Digital",
        body: "Klaveness Digital (KD) is a wholly owned subsidiary of Torvald Klaveness that develops digital solutions to improve decision-making, reduce risk, and increase efficiency across supply chains and commercial operations.",
        href: "https://www.klavenessdigital.com",
        external: true,
        image: kdImage,
        imageAlt: "Developer working on code at a screen, with the Klaveness Digital logo",
      },
      {
        name: "Klaveness Dry Bulk",
        body: "Klaveness Dry Bulk (KDB), 75% owned by Torvald Klaveness, is a leading dry bulk operator and manager of the world’s largest Panamax pool, helping customers optimize performance through innovative freight solutions, strategic partnerships, and digital tools.",
        href: "/companies/klaveness-dry-bulk",
        external: false,
        image: kdbImage,
        imageAlt:
          "Aerial view of bulk carriers moored at a terminal, with the Klaveness Dry Bulk logo",
      },
      {
        name: "Klaveness Finance",
        body: "Klaveness Finance provides strategic direction, capital allocation, and active ownership across the Klaveness portfolio.",
        href: "/companies/klaveness-finance",
        external: false,
        image: financeImage,
        imageAlt: "Two Klaveness colleagues talking in the office, with the Klaveness symbol",
      },
    ],
  },

  history: {
    eyebrow: "Our history",
    title: "80 years of innovation",
    body: "Since 1946, Klaveness has introduced new vessel concepts, business models, and technologies that have helped move the industry forward. Explore the milestones, people, and ideas behind our journey.",
    link: { label: "Discover our history", href: "/about/about-us#history" },
    image: historyImage,
    imageAlt: "Archive photograph of a sailor in a captain’s cap on board a sailing boat",
  },

  presence: {
    eyebrow: "Global presence",
    title: "Five offices. One maritime group.",
  },

  news: {
    eyebrow: "Latest news",
    link: { label: "All news", href: "/news" },
  },
} as const;
