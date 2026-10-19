export const site = {
  name: "Torvald Klaveness",
  shortName: "Klaveness",
  tagline: "Improving the nature of shipping",
  description:
    "Klaveness combines maritime expertise, digital capabilities and long-term ownership to build more resilient, efficient and sustainable seaborne supply chains.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klaveness.com").replace(/\/$/, ""),
  foundingYear: 1946,
  locale: "en_GB",
  linkedin: "https://www.linkedin.com/company/torvald-klaveness",
  headquarters: {
    company: "Torvald Klaveness",
    street: "Drammensveien 260",
    postalCode: "0283",
    city: "Oslo",
    country: "Norway",
    countryCode: "NO",
    postal: "P.O. Box 182 Skøyen, NO-0212 Oslo, Norway",
    phone: "+47 22 52 60 00",
    email: "administration@klaveness.com",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  /** Short line shown in the page placeholder and dropdown. */
  description?: string;
  /** Another website (opens in a new tab). */
  external?: boolean;
};

export type NavItem = NavLink & {
  children?: NavLink[];
  /** Only opens its dropdown: there is no page at `href` (which then just groups the section). */
  menuOnly?: boolean;
};

/**
 * Primary navigation, in the order shown in the header. Only built sections
 * get a dropdown; the others link to a single "coming soon" page for now.
 */
export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about/about-us",
    children: [
      { label: "About us", href: "/about/about-us" },
      { label: "Governance", href: "/about/governance" },
      { label: "Leadership team", href: "/about/executive-committee" },
      { label: "Board of directors", href: "/about/board-of-directors" },
      { label: "Financials", href: "/about/financials" },
      { label: "Compliance", href: "/about/compliance" },
    ],
  },
  {
    label: "Companies",
    href: "/companies",
    menuOnly: true,
    // Same as the current site: these companies have their own websites.
    children: [
      {
        label: "Klaveness Combination Carriers",
        href: "https://www.combinationcarriers.com",
        external: true,
      },
      { label: "Klaveness Digital", href: "https://www.klavenessdigital.com", external: true },
      { label: "Klaveness Dry Bulk", href: "/companies/klaveness-dry-bulk" },
      // Formerly Klaveness Holding (client, Oct 2026).
      { label: "Klaveness Finance", href: "/companies/klaveness-finance" },
    ],
  },
  { label: "Trading Efficiency", href: "/trading-efficiency" },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "ESG priority", href: "/sustainability/esg-priorities" },
      { label: "Our stakeholders", href: "/sustainability/stakeholders" },
    ],
  },
  {
    label: "News",
    href: "/news",
    description: "Stories, announcements and insights from across the group.",
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Careers", href: "/careers" },
      { label: "Working with us", href: "/careers/working-with-us" },
      { label: "Life at Klaveness", href: "/careers/life-at-klaveness" },
      { label: "Meet our people", href: "/careers/meet-our-people" },
      { label: "Vacancies", href: "/careers/vacancies" },
    ],
  },
  {
    label: "Contact",
    href: "/contact/offices",
    children: [
      { label: "Offices", href: "/contact/offices" },
      { label: "Team", href: "/contact/team" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Legal notice", href: "/legal-notice" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie policy", href: "/cookie-policy" },
];
