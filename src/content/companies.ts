import baumarineFleetImage from "@/assets/images/companies/baumarine/fleet.webp";
import baumarineHeroImage from "@/assets/images/companies/baumarine/hero-propeller.webp";
import baumarineTeamImage from "@/assets/images/companies/baumarine/michael-jorgensen-waterfront.webp";
import baumarineImage from "@/assets/images/companies/klaveness-dry-bulk/baumarine-mv-barramundi.webp";
import heroImage from "@/assets/images/companies/klaveness-dry-bulk/hero-operations.webp";
import marketManagerImage from "@/assets/images/companies/klaveness-dry-bulk/market-manager.webp";
import teamImage from "@/assets/images/companies/klaveness-dry-bulk/team-and-logo.webp";
import financeHeroImage from "@/assets/images/companies/klaveness-finance/hero.webp";
import financeInvestmentImage from "@/assets/images/companies/klaveness-finance/investment.webp";
import financeTeamImage from "@/assets/images/companies/klaveness-finance/team.webp";
import type { PersonSlug } from "@/content/leadership";
import type { RichLine } from "@/content/types";

/*
 * Content from the current klaveness.com/businesses/klaveness-dry-bulk page,
 * presented in the new design. Left out until their pages exist on the new
 * site: the VEP calculator banner and the Knowledge hub.
 */
export const dryBulkPage = {
  meta: {
    title: "Klaveness Dry Bulk",
    description:
      "Klaveness Dry Bulk is a leading operator in the global dry bulk industry and manager of the world’s largest Panamax pool — smarter operations through collaboration and innovation.",
  },
  hero: {
    eyebrow: "Klaveness Dry Bulk",
    statement: [
      { text: "Smarter operations through " },
      { text: "collaboration and innovation", strong: true },
    ] satisfies RichLine,
    image: heroImage,
  },
  intro: {
    title: "Much more than your traditional operator",
    paragraphs: [
      "At Klaveness Dry Bulk, we believe that commercial shipping can be smarter, more collaborative, and deliver greater value across the maritime ecosystem.",
      "Yet the reality is that freight markets are highly competitive, where standard contracts and price-driven decisions often dominate. In this environment, differentiation can be limited and value is easily lost.",
    ],
    approach: {
      heading: "Our approach is different.",
      points: [
        "We offer alternative freight structures that go beyond traditional market contracts.",
        "We combine market expertise with digital enablement to reduce trading inefficiencies.",
        "We build partnerships focused on performance across cycles and long-term value creation.",
      ],
    },
    closing:
      "As a leading operator in the global dry bulk industry and manager of the world’s largest Panamax pool, we aim to align cargo and vessel economics through disciplined execution and differentiated structures.",
    image: teamImage,
    imageAlt: "Klaveness Dry Bulk colleagues talking in front of the operations screens",
  },
  services: {
    eyebrow: "Our services",
    title: "Klaveness Chartering",
    paragraphs: [
      "With a proven track record spanning 80 years, we deliver freight solutions to cargo owners and shipowners across the global dry bulk market.",
      "We work to understand each customer’s specific needs, tailoring our approach to unlock new business models and revenue opportunities.",
      "Whether it’s optimizing contract timing for shipowners or enhancing freight efficiency for charterers, we ensure no value is left on the table.",
    ],
    stats: [
      { value: 50, prefix: "≈", suffix: "", label: "Vessels managed" },
      { value: 40, prefix: "", suffix: "M", label: "MT of cargo carried" },
      { value: 500, prefix: "", suffix: "", label: "Fixtures per year" },
    ],
    // The old site sets the five cities in bold.
    teams: [
      { text: "Our teams in " },
      { text: "Oslo", strong: true },
      { text: ", " },
      { text: "Dubai", strong: true },
      { text: ", " },
      { text: "Tokyo", strong: true },
      { text: ", " },
      { text: "Singapore", strong: true },
      { text: ", and " },
      { text: "Manila", strong: true },
      {
        text: " operate around the clock to deliver sustainable, high-performance shipping solutions. We are relationship driven, data informed, and execution focused.",
      },
    ] satisfies RichLine,
  },
  baumarine: {
    title: "Baumarine by Klaveness",
    paragraphs: [
      "Baumarine is our global Panamax and Kamsarmax pool and strategic platform for shipowners in volatile freight markets.",
      "Through scale, collaboration and data driven insight, we offer owners an alternative to traditional employment structures, putting owners back in control of their assets.",
    ],
    link: { label: "Explore Baumarine", href: "/companies/klaveness-dry-bulk/baumarine" },
    image: baumarineImage,
    imageAlt: "A bulk carrier on the horizon at sunset, framed by dark cliffs",
  },
  innovation: {
    title: "Innovation is in our DNA",
    paragraphs: [
      "Klaveness Dry Bulk developed its ‘Market Manager’ initiative to improve freight decision making and increase transparency in bulk shipping markets. What began as an internal innovation soon became a market facing digital solution.",
      "Today, these products are fully owned and developed by Klaveness Digital, the digital arm of Torvald Klaveness that focuses on delivering decision-support software solutions for the global maritime industry.",
      "We are proud of what we built at Klaveness Dry Bulk and the role it has played in strengthening freight decision-making for industrial clients. As ‘Market Manager’ continues to live and evolve within Klaveness Digital, we remain committed to advancing digital innovation across our commercial platform.",
    ],
    link: { label: "Explore Klaveness Digital", href: "https://www.klavenessdigital.com" },
    image: marketManagerImage,
    imageAlt: "Tablet showing the Market Manager dashboard with freight charts",
  },
} as const;

/*
 * Baumarine, Klaveness Dry Bulk's Panamax and Kamsarmax pool. Content from the
 * current klaveness.com/baumarine page, presented in the new design.
 */
export const baumarinePage = {
  meta: {
    title: "Baumarine",
    description:
      "Baumarine, the largest dry bulk Panamax and Kamsarmax pool worldwide, connects shipowners globally. Through close collaboration, scale, and advanced data analytics, we put owners back in control of their assets.",
  },
  hero: {
    eyebrow: "Baumarine",
    statement: [
      { text: "Klaveness is " },
      { text: "the pioneer in pools", strong: true },
      {
        text: ", from designing the first-ever concept in 1963 and through 60 years of successful operations",
      },
    ] satisfies RichLine,
    image: baumarineHeroImage,
  },
  intro: {
    title: "Tradition meets innovation in the world of dry bulk shipping",
    paragraphs: [
      "In 1963, the first shipping pool ever was created by shipping visionary Mr. Torvald Klaveness. The idea was spun out of his belief in providing cost-efficient and predictable transport services to his customers, and finding new and creative ways to do so.",
      "In Klaveness we believe in partnerships and collaboration and Baumarine, the largest dry bulk Panamax and Kamsarmax pool worldwide, is our flagship brand, connecting shipowners globally by leveraging our extensive market and industry expertise. In a volatile market where charterers often dictate timing, we empower owners by offering a compelling alternative.",
      "Through close collaboration, scale, and advanced data analytics, we put owners back in control of their assets. Our dedicated operations team ensures the preservation of your valuable assets and the well-being of your crew. We strive to be your trusted partner and closest ally throughout the decision-making process, providing guidance on purchase, employment alternatives, earnings potential, and asset sales.",
      "Welcome to Baumarine, where we truly believe in being Stronger Together!",
    ],
    image: baumarineTeamImage,
    imageAlt: "Michael Jørgensen walking and laughing with a colleague by the waterfront",
  },
  valueProposition: {
    title: "Our unique value proposition to shipowners",
    // Bold lead phrases as on the current page.
    points: [
      [
        { text: "Flexible commitment", strong: true },
        { text: " and exit options for owners’ convenience" },
      ],
      [
        { text: "Enhancing asset value", strong: true },
        { text: " through well-maintained vessels and strategic scheduling" },
      ],
      [
        { text: "Transparent earnings distribution", strong: true },
        { text: ", prioritizing fairness and equality" },
      ],
      [{ text: "Optimal fleet utilization", strong: true }, { text: " and global exposure" }],
      [
        { text: "Comprehensive support", strong: true },
        { text: " from chartering to legal advice, plus market insights and networking" },
      ],
      [
        { text: "Building a strong ship owner community", strong: true },
        { text: " for mutual success and industry impact" },
      ],
    ] satisfies RichLine[],
    // Background under a navy veil, as on the current page.
    image: baumarineFleetImage,
  },
  closing: {
    statement: [
      {
        text: "Pooling assets provides an easier way to consolidate in the market to become bigger, smarter and ",
      },
      { text: "Stronger Together", strong: true },
    ] satisfies RichLine,
    // Same address as the current page's "contact the team" button.
    contact: { label: "Contact the team", href: "mailto:ipi@klaveness.com" },
  },
} as const;

/*
 * Klaveness Finance (formerly Klaveness Holding, moved from About to Companies).
 * Client's revised text, October 2026.
 */
export const financePage = {
  meta: {
    title: "Klaveness Finance",
    description:
      "Klaveness Finance provides strategic direction, capital allocation, and active ownership across the Klaveness portfolio, and invests across the maritime and energy sectors.",
  },
  hero: {
    eyebrow: "Klaveness Finance",
    statement: [
      { text: "Building " },
      { text: "long-term value", strong: true },
      { text: " through " },
      { text: "strategy, ownership, and investment", strong: true },
    ] satisfies RichLine,
    image: financeHeroImage,
  },
  intro: {
    statement:
      "Klaveness Finance provides strategic direction, capital allocation, and active ownership across the Klaveness portfolio.",
    body: "Through long-term ownership and disciplined investment management, we support the development of businesses and create financial flexibility for future growth.",
    image: financeTeamImage,
    imageAlt: "Two Klaveness colleagues working together in front of a screen",
  },
  strategy: {
    title: "Driving strategy and active ownership",
    paragraphs: [
      "Klaveness Finance is responsible for Group strategy, capital allocation, and investment priorities.",
      "Working closely with our portfolio companies, we provide active ownership and strategic direction to support long-term growth, helping to strengthen their market positions, develop new opportunities, and create sustainable value over time.",
    ],
  },
  investments: {
    title: "Investing for future growth",
    paragraphs: [
      "In addition to our portfolio companies, Klaveness Finance invests in opportunities across the maritime and energy sectors where we can apply our industry expertise and long-term investment approach.",
      "We also manage a diversified portfolio of liquid financial investments, including equity and fixed income funds. These investments support capital preservation, financial resilience, and flexibility for future strategic opportunities.",
    ],
    image: financeInvestmentImage,
    imageAlt: "Members of the Klaveness investment team at work in the office",
  },
  team: {
    title: "Meet our investment team",
    people: [
      { slug: "goran-andreassen", email: "gan@klaveness.com" },
      { slug: "nadia-naess", email: "nan@klaveness.com" },
    ] satisfies { slug: PersonSlug; email: string }[],
  },
} as const;
