/* News types and helpers that are safe to use in the browser (the Newsroom filters). */

export type NewsImage = {
  /** Address for next/image. */
  src: string;
  alt: string;
  caption?: string;
  /** Repo path, when the image lives in the content repo (and can be optimised). */
  repoPath?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  /** Summary for search results and link previews. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  /** ISO date of the last real edit (optional `updatedAt` in the frontmatter). */
  updated?: string;
  categories: string[];
  cover?: NewsImage;
  /** Markdown body. */
  body: string;
  /** Repo path of the Markdown file; images in the body are relative to it. */
  file: string;
};

/** What a card needs; sent to the browser for the Newsroom filters. */
export type NewsCard = Pick<NewsArticle, "slug" | "title" | "date" | "categories" | "cover">;

export type NewsCategory = { name: string; slug: string; count: number };

/** Cards per step of "Show more news", and per archive page (/news/page/2, …). */
export const NEWS_PAGE_SIZE = 12;

/** Address of an archive page; page 1 is the Newsroom itself. */
export const newsPageHref = (page: number) => (page <= 1 ? "/news" : `/news/page/${page}`);

export const categorySlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, " and ")
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const formatNewsDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
