import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaCard } from "@/components/ui/MediaCard";
import { home } from "@/content/home";
import { formatNewsDate, latestNews } from "@/content/news";

export function LatestNews() {
  const articles = latestNews(3);

  return (
    <section aria-labelledby="news-title" className="pt-24 pb-32 md:pt-32 md:pb-44">
      <div className="container-site">
        <div className="reveal flex items-end justify-between gap-6">
          <Eyebrow as="h2" id="news-title">
            {home.news.eyebrow}
          </Eyebrow>
          <ArrowLink href={home.news.link.href} className="-mb-1">
            {home.news.link.label}
          </ArrowLink>
        </div>

        <ul className="mt-10 grid gap-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <li key={article.slug} className={`reveal ${index ? `reveal-delay-${index}` : ""}`}>
              <MediaCard
                href="/news"
                image={article.image}
                imageAlt={article.imageAlt}
                title={article.title}
                meta={<time dateTime={article.date}>{formatNewsDate(article.date)}</time>}
                cta="Read more"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
