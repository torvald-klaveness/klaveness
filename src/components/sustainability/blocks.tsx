import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { LinkedText } from "@/components/ui/LinkedText";
import { RichText } from "@/components/ui/RichText";
import type { RichLine } from "@/content/types";

/* Small building blocks shared by the Sustainability, ESG and Stakeholders pages. */

/** Vertical rhythm between sections, as in the XD artboards (~270px at 1920). */
export const sectionY = "py-[clamp(4.5rem,7vw,8.5rem)]";

/** Two-column splits from the XD grid: images take 50%, text ~45%. */
export const split = {
  textImage: "grid gap-12 md:grid-cols-[minmax(0,1fr)_50%] md:gap-[5.3%]",
  imageText: "grid gap-12 md:grid-cols-[50%_minmax(0,1fr)] md:gap-[5.3%]",
} as const;
/* Combine with items-start (most sections) or items-center (balanced pairs). */

/**
 * Body paragraphs. An item can be plain text or a RichLine (bold runs);
 * `links` turns the first mention of each phrase into a link.
 */
export function Paragraphs({
  items,
  className = "",
  links,
}: {
  items: readonly (string | RichLine)[];
  className?: string;
  links?: Record<string, string>;
}) {
  return (
    <div className={`text-body font-light text-pretty text-copy ${className}`}>
      {items.map((item, index) => (
        <p key={index}>
          {typeof item !== "string" ? (
            <RichText line={item} />
          ) : links ? (
            <LinkedText text={item} links={links} />
          ) : (
            item
          )}
        </p>
      ))}
    </div>
  );
}

/** Bold sub-heading that sits directly on top of its paragraph (XD: Source Sans 3 Bold 24px). */
export function SubHeading({
  children,
  as: Tag = "h3",
}: {
  children: ReactNode;
  as?: "h3" | "h4";
}) {
  return <Tag className="text-label font-bold text-copy">{children}</Tag>;
}

export function FocusList({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-[1.6em] text-body text-copy">
      <h4 className="font-bold">Areas of focus:</h4>
      <ul className="list-dots font-light">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Rounded photo with the exact aspect ratio of the XD export (corners are baked in). */
export function Photo({
  image,
  alt,
  sizes,
  className = "",
}: {
  image: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`reveal-image overflow-hidden rounded-media ${className}`}>
      <Image src={image} alt={alt} placeholder="blur" sizes={sizes} className="h-auto w-full" />
    </div>
  );
}

/** Grey panel with “Our targets” and “<year> performance”, split by a hairline. */
export function TargetsCard({
  targets,
  performance,
  year,
}: {
  targets: readonly string[];
  performance: readonly string[];
  year: number;
}) {
  return (
    <div className="reveal mt-[clamp(3rem,4vw,4.75rem)] grid rounded-media bg-panel px-[clamp(1.5rem,3.2vw,3.75rem)] py-[clamp(2rem,3.6vw,4.25rem)] md:grid-cols-2">
      <div className="pb-8 md:pr-[clamp(2rem,5vw,6rem)] md:pb-0">
        <h4 className="font-serif text-label font-bold text-copy">Our targets:</h4>
        <ul className="list-dots mt-[1.4em] text-body font-light text-copy">
          {targets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="border-t border-grey-50/70 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-[clamp(2rem,5vw,6.25rem)]">
        <h4 className="font-serif text-label font-bold text-copy">{year} performance:</h4>
        <ul className="list-dots mt-[1.4em] text-body font-light text-copy">
          {performance.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
