import fallbackCover from "@/assets/images/home/hero-ocean.webp";
import { MediaCard } from "@/components/ui/MediaCard";
import { formatNewsDate, type NewsCard } from "@/lib/news/shared";

/** An article as a card (homepage, Newsroom, "More news"). */
export function NewsCardItem({
  article,
  headingLevel,
}: {
  article: NewsCard;
  headingLevel?: "h2" | "h3" | "h4";
}) {
  const { cover } = article;
  return (
    <MediaCard
      href={`/news/${article.slug}`}
      image={cover?.src ?? fallbackCover}
      imageAlt={cover?.alt ?? ""}
      unoptimized={cover ? !cover.repoPath : false}
      title={article.title}
      meta={<time dateTime={article.date}>{formatNewsDate(article.date)}</time>}
      cta="Read more"
      headingLevel={headingLevel}
    />
  );
}
