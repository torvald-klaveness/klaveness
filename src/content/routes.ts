import { legalNav, mainNav } from "@/content/site";

export type PlaceholderPage = {
  path: string;
  title: string;
  section: string;
  sectionHref?: string;
  description?: string;
};

/** Pages that have their own route. Keep in sync when a placeholder gets built. */
export const builtPages = [
  "/",
  "/about/about-us",
  "/about/governance",
  "/about/executive-committee",
  "/about/board-of-directors",
  "/about/financials",
  "/about/compliance",
  "/companies/klaveness-dry-bulk",
  "/companies/klaveness-dry-bulk/baumarine",
  "/companies/klaveness-finance",
  "/trading-efficiency",
  "/news",
  "/careers",
  "/careers/working-with-us",
  "/careers/life-at-klaveness",
  "/careers/meet-our-people",
  "/careers/vacancies",
  "/contact/offices",
  "/contact/team",
  "/sustainability",
  "/sustainability/esg-priorities",
  "/sustainability/stakeholders",
  "/privacy-policy",
  "/legal-notice",
  "/cookie-policy",
] as const;

/**
 * When each built page's content last changed (YYYY-MM-DD), for the sitemap.
 * Update a page's date when you change its text or images, not for code-only
 * changes; search engines ignore dates that move on every deploy. The homepage
 * and Newsroom also count their newest article.
 */
export const pageUpdated: Record<(typeof builtPages)[number], string> = {
  "/": "2026-10-21",
  "/about/about-us": "2026-10-07",
  "/about/governance": "2026-10-05",
  "/about/executive-committee": "2026-10-05",
  "/about/board-of-directors": "2026-10-05",
  "/about/financials": "2026-10-05",
  "/about/compliance": "2026-10-05",
  "/companies/klaveness-dry-bulk": "2026-10-08",
  "/companies/klaveness-dry-bulk/baumarine": "2026-10-08",
  "/companies/klaveness-finance": "2026-10-07",
  "/trading-efficiency": "2026-10-07",
  "/news": "2026-10-20",
  "/careers": "2026-10-07",
  "/careers/working-with-us": "2026-10-07",
  "/careers/life-at-klaveness": "2026-10-05",
  "/careers/meet-our-people": "2026-10-08",
  "/careers/vacancies": "2026-10-19",
  "/contact/offices": "2026-10-05",
  "/contact/team": "2026-10-05",
  "/sustainability": "2026-10-07",
  "/sustainability/esg-priorities": "2026-10-07",
  "/sustainability/stakeholders": "2026-10-08",
  "/privacy-policy": "2026-10-21",
  "/legal-notice": "2026-10-21",
  "/cookie-policy": "2026-10-21",
};

/**
 * Every page linked from the site that hasn't been designed yet. Each one
 * renders the "coming soon" template (noindex) until it gets its own route.
 */
function buildPlaceholders() {
  const pages = new Map<string, PlaceholderPage>();
  const built = new Set<string>(builtPages);
  const add = (page: PlaceholderPage) => {
    if (built.has(page.path)) return;
    pages.set(page.path, { ...pages.get(page.path), ...page });
  };

  for (const item of mainNav) {
    if (!item.menuOnly)
      add({
        path: item.href,
        title: item.label,
        section: item.label,
        description: item.description,
      });
    for (const child of item.children ?? []) {
      if (child.external) continue;
      add({
        path: child.href,
        title: child.label,
        section: item.label,
        sectionHref: item.href,
        description: child.description ?? pages.get(child.href)?.description,
      });
    }
  }

  for (const link of legalNav) {
    add({ path: link.href, title: link.label, section: "Legal" });
  }

  return pages;
}

export const placeholderPages = buildPlaceholders();
