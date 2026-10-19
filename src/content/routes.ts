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
] as const;

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
