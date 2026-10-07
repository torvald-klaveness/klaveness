import clinkerImage from "@/assets/images/news/clinker-shipment.webp";
import pentaImage from "@/assets/images/news/mv-penta.webp";
import digitalShipImage from "@/assets/images/sustainability/stakeholders-digital-ship.webp";
import heroImage from "@/assets/images/trading-efficiency/hero.webp";
import type { RichLine } from "@/content/types";

/*
 * Trading Efficiency — client's draft text (Trading Efficiency_NewPage.docx,
 * October 2026, marked "work in progress"). Images are from the current site
 * until the client supplies their own.
 */
export const tradingEfficiencyPage = {
  href: "/trading-efficiency",
  meta: {
    title: "Trading Efficiency",
    description:
      "Improving the nature of shipping through trading efficiency: why it matters, the opportunity, where inefficiencies exist, and Klaveness' approach.",
  },
  hero: {
    eyebrow: "Trading Efficiency",
    statement: [
      { text: "Improving the nature of shipping through " },
      { text: "trading efficiency", strong: true },
    ] satisfies RichLine,
    image: heroImage,
  },
  intro: {
    statement:
      "Shipping moves the world's food, energy, and raw materials. It is one of the most efficient industries in the world. Yet significant inefficiencies remain across the maritime value chain.",
    paragraphs: [
      "Every day, decisions are made about how cargo is bought, sold, transported, stored, and delivered. Too often, those decisions are optimized for individual contracts, vessels, or organizations rather than the wider supply chain.",
      "At Klaveness, we believe greater value can be created when decisions are optimized across the broader shipping ecosystem. Improving trading efficiency is our approach to addressing these inefficiencies and creating better outcomes across the maritime value chain.",
    ],
    image: clinkerImage,
    imageAlt: "Deck view of a bulk carrier loading cement clinker from barges in Cam Pha, Vietnam",
  },
  whyItMatters: {
    title: "Why it matters",
    paragraphs: [
      "The shipping industry is facing growing pressure to reduce emissions, improve resilience, manage volatility, and control costs. At the same time, supply chains are becoming increasingly complex and interconnected.",
      "Many of these challenges cannot be solved by a single company acting alone. They require better coordination, stronger incentives, improved visibility, and smarter decision-making across the wider value chain.",
      "Improving trading efficiency helps create better outcomes for customers while supporting more resilient, decarbonized, and cost-effective supply chains.",
    ],
  },
  opportunity: {
    title: "The opportunity",
    paragraphs: [
      [
        {
          text: "Klaveness analyzed several inefficiencies across global dry bulk and tanker markets to better understand where value is lost and where opportunities exist to improve performance.",
        },
      ],
      [
        {
          text: "The findings confirmed that substantial value remains trapped in the system. Our analysis identified approximately ",
        },
        {
          text: "USD 7 billion in addressable value potential, equivalent to roughly 5–10% of total freight spend.",
          strong: true,
        },
      ],
      [
        {
          text: "This potential is not concentrated in one area or one solution. It is distributed across the shipping ecosystem, creating opportunities for new business models, better incentives, stronger collaboration, and improved use of data and technology.",
        },
      ],
    ] satisfies RichLine[],
    // The two figures from the paragraph above, shown large.
    figures: [
      {
        value: 7,
        prefix: "USD ",
        suffix: "bn",
        label: "Addressable value potential, approximately",
      },
      { display: "5–10%", label: "Of total freight spend" },
    ],
    // Client: "See report here (link)". Shown once the report URL is supplied.
    report: null as { label: string; href: string } | null,
  },
  inefficiencies: {
    title: "Where inefficiencies exist",
    // Client draft: may become a drop-down list once each area has its own text.
    items: [
      "Arrival and port optimization",
      "Asset utilization",
      "Inventory management",
      "Commercial incentives",
      "Data sharing and visibility",
    ],
  },
  whyNow: {
    title: "Why now",
    paragraphs: [
      "Supply chains are becoming increasingly complex, expectations around resilience and transparency are growing, and the transition to lower-emission shipping is accelerating.",
      "At the same time, advances in digital technology, data availability, and connectivity are providing new opportunities to improve how decisions are made across the value chain. Better visibility into cargo flows, vessel movements, and supply chain performance is making inefficiencies easier to identify and address.",
      "Together, these trends are creating a stronger incentive, and a greater ability, for companies to look beyond individual transactions and focus on the performance of the wider system.",
    ],
    image: digitalShipImage,
    imageAlt: "Digital illustration of a cargo ship drawn in lines of blue light on a dark sea",
  },
  approach: {
    title: "Our approach",
    paragraphs: [
      "Trading efficiency sits at the center of Klaveness' corporate direction and our vision to improve the nature of shipping.",
      "We believe it represents one of the largest opportunities for value creation in shipping. While technology and innovation will play an important role, many of the greatest opportunities will require collaboration across the wider industry.",
      "Through our businesses, partnerships, and continued investment in innovation, we aim to contribute to this development and help advance trading efficiency across global seaborne supply chains.",
    ],
    image: pentaImage,
    imageAlt: "The Klaveness Japan team on the quayside in front of M/V Penta in Mizushima",
  },
  explore: {
    title: "Explore trading efficiency",
    body: "Trading efficiency represents one of the largest opportunities for value creation in shipping. Explore our latest research, insights, and industry perspectives on the challenges and opportunities ahead.",
    // Not linked yet: destinations to come from the client.
    topics: ["Research & reports", "Customer stories", "Industry insights", "Thought leadership"],
  },
} as const;
