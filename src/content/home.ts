import ceoImage from "@/assets/images/home/ernst-meyer.webp";
import heroImage from "@/assets/images/home/hero-ocean.webp";
import historyImage from "@/assets/images/home/history.webp";
import kccImage from "@/assets/images/home/klaveness-combination-carriers.webp";
import kdImage from "@/assets/images/home/klaveness-digital.webp";
import kdbImage from "@/assets/images/home/klaveness-dry-bulk.webp";

export const home = {
  hero: {
    image: heroImage,
    imageAlt: "Close-up of ocean waves at sunset",
    // Rendered as three lines; `strong` lines are set in bold.
    title: [
      { text: "Improving", strong: true },
      { text: "the nature of", strong: false },
      { text: "Shipping", strong: true },
    ],
    lead: "Klaveness combines maritime expertise, digital capabilities and long-term ownership to build more resilient, efficient and sustainable seaborne supply chains.",
    cta: { label: "Explore Klaveness", href: "#who-we-are" },
  },

  intro: {
    eyebrow: "Who we are",
    title: "For nearly 80 years, we have created maritime solutions that move industries forward.",
    body: "Founded in 1946, Klaveness has grown from a single ship into an international maritime group with a diversified portfolio and strong values.",
    link: { label: "About us", href: "/about/about-us" },
  },

  pillars: [
    {
      icon: "compass",
      title: "Shipping expertise",
      body: "Decades of industry knowledge and operational excellence across global activities.",
      href: "/companies",
    },
    {
      icon: "chart",
      title: "Digital intelligence",
      body: "Data and technology that optimize operations and create durable customer value.",
      href: "/companies",
    },
    {
      icon: "leaf",
      title: "Sustainable transition",
      body: "Committed to decarbonization and developing solutions for a more sustainable future.",
      href: "/sustainability",
    },
  ],

  history: {
    eyebrow: "Our history",
    title: "80 years of innovation",
    body: "From our roots in a single vessel to an international maritime group — our journey has always been driven by people, determination and willingness to shape the future.",
    link: { label: "Discover our history", href: "/about/about-us#history" },
    image: historyImage,
    imageAlt: "Archive photograph of a sailor in a captain’s cap on board a sailing boat",
  },

  businesses: {
    eyebrow: "Our businesses",
    title: "A diversified maritime group",
    items: [
      {
        name: "Klaveness Combination Carriers",
        body: "Global provider of flexible sustainable RoRo and multipurpose shipping.",
        href: "/companies",
        image: kccImage,
        imageAlt:
          "Aerial view of the combination carrier MV Ballard at sea, with the Klaveness Combination Carriers logo",
      },
      {
        name: "Klaveness Digital",
        body: "Digital products and data-driven services that improve efficiency and decision-making.",
        href: "/companies",
        image: kdImage,
        imageAlt: "Developer working on code at a screen, with the Klaveness Digital logo",
      },
      {
        name: "Klaveness Dry Bulk",
        body: "Reliable bulk shipping services with a focus on operational performance and safety.",
        href: "/companies/klaveness-dry-bulk",
        image: kdbImage,
        imageAlt:
          "Aerial view of bulk carriers moored at a terminal, with the Klaveness Dry Bulk logo",
      },
    ],
  },

  sustainability: {
    eyebrow: "Sustainability",
    title: "Decarbonization is not a side topic. It’s our direction.",
    quote:
      "We are committed to making a positive contribution to society by improving the nature of shipping. A best-in-class safety culture that safeguards our people and minimizes our impact on climate and the environment is at the heart of everything we do.",
    author: "Ernst Meyer",
    role: "CEO, Torvald Klaveness",
    link: { label: "Our approach", href: "/sustainability" },
    image: ceoImage,
    imageAlt: "Portrait of Ernst Meyer, CEO of Torvald Klaveness",
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
