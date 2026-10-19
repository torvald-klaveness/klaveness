import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowUpRight } from "@/components/icons";
import { keepRangesTogether } from "@/lib/typography";

type MediaCardProps = {
  href: string;
  /** A static import, or an address (news covers from the content repo). */
  image: StaticImageData | string;
  imageAlt: string;
  /** For addresses next/image is not allowed to optimise. */
  unoptimized?: boolean;
  title: string;
  body?: string;
  meta?: ReactNode;
  cta: string;
  headingLevel?: "h2" | "h3" | "h4";
  /** Another website: opens in a new tab, with an ↗ after the call to action. */
  external?: boolean;
  sizes?: string;
  /**
   * Inside a grid of cards: image, title, body and call to action each take a
   * row of the parent grid (subgrid), so they line up across a row of cards.
   */
  aligned?: boolean;
};

/**
 * Image card where the whole surface is one link (the title's ::after
 * stretches over the card), so screen readers hear a single descriptive link.
 */
export function MediaCard({
  href,
  image,
  imageAlt,
  title,
  body,
  meta,
  cta,
  headingLevel: Heading = "h3",
  external,
  sizes = "(min-width: 1136px) 340px, (min-width: 768px) 30vw, 100vw",
  aligned,
  unoptimized,
}: MediaCardProps) {
  const linkClass = "after:absolute after:inset-0 focus-visible:outline-none";
  return (
    <article
      className={`group relative ${aligned ? "row-span-4 grid grid-rows-subgrid gap-0" : "flex h-full flex-col"}`}
    >
      <div className="relative aspect-[7/5] overflow-hidden rounded-media bg-mist">
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder={typeof image === "string" ? "empty" : "blur"}
          unoptimized={unoptimized}
          sizes={sizes}
          className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-media ring-1 ring-navy/5 transition-colors duration-500 ring-inset group-hover:bg-navy/5"
        />
      </div>

      {meta ? (
        <div className="mt-6 text-[clamp(0.8125rem,0.94vw,1.125rem)] text-ink-muted">{meta}</div>
      ) : null}

      <Heading
        className={`heading-display text-[clamp(1.0625rem,1.15vw,1.375rem)] leading-snug text-copy ${meta ? "mt-2" : "mt-6"}`}
      >
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {keepRangesTogether(title)}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link href={href} className={linkClass}>
            {keepRangesTogether(title)}
          </Link>
        )}
      </Heading>

      {body ? <p className="mt-3 text-body-sm font-light text-copy">{body}</p> : null}

      <span
        aria-hidden
        className="mt-5 inline-flex items-center gap-2 self-end justify-self-start text-body font-light text-orange-ink"
      >
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px]">
          {cta}
        </span>
        {external ? <ArrowUpRight className="size-[0.9em] shrink-0" /> : null}
      </span>

      {/* Focus ring for the stretched link, drawn around the whole card. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[1.25rem] opacity-0 ring-2 ring-orange group-has-[a:focus-visible]:opacity-100"
      />
    </article>
  );
}
