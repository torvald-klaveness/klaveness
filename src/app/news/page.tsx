import type { Metadata } from "next";
import { Suspense } from "react";

import { TitleBand } from "@/components/layout/TitleBand";
import { Newsroom, NewsroomGrid } from "@/components/news/Newsroom";
import { mainNav } from "@/content/site";
import { getNewsArticles, getNewsCategories, toNewsCard } from "@/lib/news/articles";

// Articles come from the content repo; see src/lib/news/config.ts.
export const revalidate = 900;

const description = mainNav.find((item) => item.href === "/news")?.description;

export const metadata: Metadata = {
  title: "Newsroom",
  description,
  alternates: { canonical: "/news" },
  openGraph: { title: "Newsroom", description, url: "/news" },
};

export default async function NewsPage() {
  const articles = await getNewsArticles();
  const cards = articles.map(toNewsCard);
  const categories = getNewsCategories(articles);

  return (
    <>
      <TitleBand
        eyebrow="News"
        title="Newsroom"
        description={description}
        breadcrumb={[{ label: "News" }]}
      />

      <section aria-label="Articles" className="pt-[clamp(3rem,5vw,6rem)] pb-32 md:pb-44">
        <div className="container-site">
          <Suspense
            fallback={
              <NewsroomGrid
                articles={cards.slice(0, 12)}
                total={cards.length}
                categories={categories}
                active={null}
              />
            }
          >
            <Newsroom articles={cards} categories={categories} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
