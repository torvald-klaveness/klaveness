import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TitleBand } from "@/components/layout/TitleBand";
import { NewsCardItem } from "@/components/news/NewsCardItem";
import { getNewsArticles, toNewsCard } from "@/lib/news/articles";
import { sharedOpenGraph } from "@/lib/metadata";
import { NEWS_PAGE_SIZE, newsPageHref } from "@/lib/news/shared";

// Articles come from the content repo; see src/lib/news/config.ts.
export const revalidate = 900;

/**
 * Archive pages behind the Newsroom's "Show more news" link (/news/page/2, …),
 * so every article is reachable by following links. In the browser the
 * Newsroom shows more in place; these pages serve search engines and anyone
 * opening the link in a new tab.
 */
export async function generateStaticParams() {
  const pages = Math.ceil((await getNewsArticles()).length / NEWS_PAGE_SIZE);
  return Array.from({ length: Math.max(pages - 1, 0) }, (_, index) => ({
    page: String(index + 2),
  }));
}

async function getPage(params: PageProps<"/news/page/[page]">["params"]) {
  const { page: value } = await params;
  const page = Number(value);
  // Page 1 is /news itself; anything else that isn't a plain number is a 404.
  if (!/^\d+$/.test(value) || page < 2) return null;
  const articles = await getNewsArticles();
  const pages = Math.ceil(articles.length / NEWS_PAGE_SIZE);
  if (page > pages) return null;
  const start = (page - 1) * NEWS_PAGE_SIZE;
  return { page, pages, cards: articles.slice(start, start + NEWS_PAGE_SIZE).map(toNewsCard) };
}

export async function generateMetadata({
  params,
}: PageProps<"/news/page/[page]">): Promise<Metadata> {
  const archive = await getPage(params);
  if (!archive) return {};
  const title = `Newsroom – page ${archive.page}`;
  const description = `News from Torvald Klaveness, page ${archive.page} of ${archive.pages}.`;
  const path = newsPageHref(archive.page);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...sharedOpenGraph, title, description, url: path },
  };
}

export default async function NewsArchivePage({ params }: PageProps<"/news/page/[page]">) {
  const archive = await getPage(params);
  if (!archive) notFound();
  const { page, pages, cards } = archive;

  const pill =
    "rounded-full border border-navy px-8 py-[0.45em] text-body-sm font-light text-copy transition-colors hover:bg-navy hover:text-white focus-visible:outline-offset-2";

  return (
    <>
      <TitleBand
        eyebrow="News"
        title="Newsroom"
        description={`Page ${page} of ${pages}`}
        breadcrumb={[{ label: "News", href: "/news" }, { label: `Page ${page}` }]}
      />

      <section aria-label="Articles" className="pt-[clamp(3rem,5vw,6rem)] pb-32 md:pb-44">
        <div className="container-site">
          <ul className="grid gap-14 md:grid-cols-3 md:gap-x-6 md:gap-y-20 lg:gap-x-8">
            {cards.map((article) => (
              <li key={article.slug}>
                <NewsCardItem article={article} headingLevel="h2" />
              </li>
            ))}
          </ul>

          <nav
            aria-label="More news"
            className="mt-[clamp(3.5rem,5vw,6rem)] flex flex-wrap justify-center gap-3"
          >
            <a href={newsPageHref(page - 1)} rel="prev" className={pill}>
              Newer news
            </a>
            {page < pages ? (
              <a href={newsPageHref(page + 1)} rel="next" className={pill}>
                Older news
              </a>
            ) : null}
          </nav>
        </div>
      </section>
    </>
  );
}
