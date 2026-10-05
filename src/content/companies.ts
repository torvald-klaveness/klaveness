import baumarineImage from "@/assets/images/companies/klaveness-dry-bulk/baumarine-mv-barramundi.webp";
import heroImage from "@/assets/images/companies/klaveness-dry-bulk/hero-operations.webp";
import marketManagerImage from "@/assets/images/companies/klaveness-dry-bulk/market-manager.webp";
import teamImage from "@/assets/images/companies/klaveness-dry-bulk/team-and-logo.webp";
import type { RichLine } from "@/content/types";

/*
 * Content from the current klaveness.com/businesses/klaveness-dry-bulk page,
 * presented in the new design. Left out until their pages exist on the new
 * site: the "Explore Baumarine" button, the VEP calculator banner and the
 * Knowledge hub.
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
