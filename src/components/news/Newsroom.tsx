"use client";

import { useSearchParams } from "next/navigation";
import { useState, type MouseEvent } from "react";

import { NewsCardItem } from "@/components/news/NewsCardItem";
import {
  NEWS_PAGE_SIZE as PAGE_SIZE,
  newsPageHref,
  type NewsCard,
  type NewsCategory,
} from "@/lib/news/shared";

type NewsroomProps = { articles: NewsCard[]; categories: NewsCategory[] };

/**
 * Category filters and the article grid. The filter lives in ?category= so it
 * survives "back". Filters and "Show more news" are real links (to ?category=
 * and the archive pages) so search engines can follow them; in the browser
 * they update the grid in place.
 */
export function Newsroom(props: NewsroomProps) {
  const active = useSearchParams().get("category");
  return <NewsroomGrid {...props} active={active} />;
}

/**
 * Also rendered on the server, unfiltered, as the fallback while the filter is
 * read; it then gets only the first page of articles and the `total`.
 */
export function NewsroomGrid({
  articles,
  categories,
  active,
  total,
}: NewsroomProps & { active: string | null; total?: number }) {
  const current = categories.find((category) => category.slug === active) ?? null;
  const filtered = current
    ? articles.filter((article) => article.categories.includes(current.name))
    : articles;

  // How many cards are shown, per filter: switching filters starts again at one page.
  const [shown, setShown] = useState({ filter: current?.slug, count: PAGE_SIZE });
  const count = shown.filter === current?.slug ? shown.count : PAGE_SIZE;
  const visible = filtered.slice(0, count);
  const matching = current ? filtered.length : (total ?? filtered.length);

  const categoryHref = (slug: string | null) => (slug ? `/news?category=${slug}` : "/news");
  const select = (event: MouseEvent, slug: string | null) => {
    event.preventDefault();
    window.history.replaceState(null, "", categoryHref(slug));
  };

  const pill =
    "rounded-full border px-[clamp(0.9rem,1.1vw,1.25rem)] py-[0.45em] text-body-sm font-light transition-colors focus-visible:outline-offset-2";
  const pillState = (on: boolean) =>
    on
      ? "border-navy bg-navy text-white"
      : "border-grey-50 text-copy hover:border-navy hover:text-navy";

  return (
    <>
      <div
        role="group"
        aria-label="Filter news by topic"
        className="flex flex-wrap gap-2.5 md:gap-3"
      >
        <a
          href={categoryHref(null)}
          aria-current={!current ? "true" : undefined}
          onClick={(event) => select(event, null)}
          className={`${pill} ${pillState(!current)}`}
        >
          All news
        </a>
        {categories.map((category) => (
          <a
            key={category.slug}
            href={categoryHref(category.slug)}
            aria-current={current?.slug === category.slug ? "true" : undefined}
            onClick={(event) => select(event, category.slug)}
            className={`${pill} ${pillState(current?.slug === category.slug)}`}
          >
            {category.name}
          </a>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-body-sm font-light text-ink-muted">
        {matching} {matching === 1 ? "article" : "articles"}
        {current ? ` in ${current.name}` : ""}
      </p>

      <ul className="mt-10 grid gap-14 md:grid-cols-3 md:gap-x-6 md:gap-y-20 lg:gap-x-8">
        {visible.map((article) => (
          <li key={article.slug}>
            <NewsCardItem article={article} headingLevel="h2" />
          </li>
        ))}
      </ul>

      {matching > count ? (
        <div className="mt-[clamp(3.5rem,5vw,6rem)] flex justify-center">
          <a
            href={newsPageHref(Math.floor(count / PAGE_SIZE) + 1)}
            onClick={(event) => {
              event.preventDefault();
              setShown({ filter: current?.slug, count: count + PAGE_SIZE });
            }}
            className={`${pill} border-navy px-8 text-copy hover:bg-navy hover:text-white`}
          >
            Show more news
          </a>
        </div>
      ) : null}
    </>
  );
}
