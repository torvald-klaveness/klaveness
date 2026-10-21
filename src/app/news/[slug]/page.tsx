import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { TitleBand } from "@/components/layout/TitleBand";
import { ArticleBody } from "@/components/news/ArticleBody";
import { NewsCardItem } from "@/components/news/NewsCardItem";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import {
  getArticleImages,
  getNewsArticle,
  getNewsArticles,
  getRelatedNews,
  toNewsCard,
} from "@/lib/news/articles";
import { categorySlug, formatNewsDate } from "@/lib/news/shared";
import { newsArticleJsonLd } from "@/lib/structured-data";

// Articles come from the content repo; new ones render on their first visit.
export const revalidate = 900;

export async function generateStaticParams() {
  return (await getNewsArticles()).map((article) => ({ slug: article.slug }));
}

const absolute = (src: string) => (src.startsWith("/") ? `${site.url}${src}` : src);

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const article = await getNewsArticle((await params).slug);
  if (!article) return {};
  const path = `/news/${article.slug}`;
  const { cover } = await getArticleImages(article);
  return {
    title: article.title,
    description: article.description || undefined,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description || undefined,
      url: path,
      publishedTime: article.date,
      modifiedTime: article.updated,
      images:
        cover && article.cover
          ? [
              {
                url: absolute(cover.src),
                width: cover.width,
                height: cover.height,
                alt: article.cover.alt,
              },
            ]
          : undefined,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/news/[slug]">) {
  const article = await getNewsArticle((await params).slug);
  if (!article) notFound();

  const [images, related] = await Promise.all([getArticleImages(article), getRelatedNews(article)]);
  const { cover } = images;

  return (
    <>
      <JsonLd
        data={newsArticleJsonLd({
          ...article,
          image: cover
            ? { url: absolute(cover.src), width: cover.width, height: cover.height }
            : undefined,
        })}
      />

      <TitleBand
        eyebrow="News"
        title={article.title}
        breadcrumb={[{ label: "News", href: "/news" }, { label: article.title }]}
        image={cover ? { src: cover.src, unoptimized: !cover.optimized } : undefined}
      >
        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-body-sm font-light text-white/75">
          <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
          {article.categories.map((category) => (
            <span key={category} className="flex items-center gap-3">
              <span aria-hidden className="text-orange">
                /
              </span>
              <Link
                href={`/news?category=${categorySlug(category)}`}
                className="transition-colors hover:text-white"
              >
                {category}
              </Link>
            </span>
          ))}
        </p>
      </TitleBand>

      <article
        aria-labelledby="page-title"
        className="container-site pt-[clamp(3rem,5vw,6rem)] pb-[clamp(4.5rem,7vw,8.5rem)]"
      >
        <div className="mx-auto max-w-[52rem]">
          {cover && article.cover ? (
            <figure className="mb-[clamp(2.5rem,4vw,4.5rem)]">
              <Image
                src={cover.src}
                alt={article.cover.alt}
                width={cover.width}
                height={cover.height}
                unoptimized={!cover.optimized}
                sizes="(min-width: 1136px) 52rem, 100vw"
                className="h-auto max-h-[80svh] w-full rounded-media bg-mist object-cover"
              />
              {article.cover.caption ? (
                <figcaption className="mt-3 text-body-sm font-light text-ink-muted">
                  {article.cover.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <ArticleBody markdown={article.body} images={images.body} title={article.title} />

          <ArrowLink href="/news" className="mt-[clamp(3rem,5vw,5.5rem)]">
            All news
          </ArrowLink>
        </div>
      </article>

      {related.length ? (
        <section
          aria-labelledby="more-news-title"
          className="border-t border-line pt-24 pb-32 md:pt-32 md:pb-44"
        >
          <div className="container-site">
            <Eyebrow as="h2" id="more-news-title">
              More news
            </Eyebrow>
            <ul className="mt-10 grid gap-14 md:grid-cols-3 md:gap-6 lg:gap-8">
              {related.map((other) => (
                <li key={other.slug}>
                  <NewsCardItem article={toNewsCard(other)} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
