import Image, { type StaticImageData } from "next/image";

import type { RichLine } from "@/content/types";

type PageHeroProps = {
  eyebrow: string;
  statement: RichLine;
  image: StaticImageData;
  /** Where the scroll cue points to. */
  nextId: string;
  imagePosition?: string;
};

/**
 * Inner-page hero from the XD design: full-bleed photo under a navy veil,
 * a centred label and a Light/Bold statement, and an orange scroll cue.
 */
export function PageHero({
  eyebrow,
  statement,
  image,
  nextId,
  imagePosition = "50% 50%",
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate flex h-[74svh] max-h-[56rem] min-h-[32rem] items-center overflow-hidden bg-navy text-white"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
          className="motion-safe-only animate-hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-[linear-gradient(180deg,rgb(0_20_70/0.35),transparent)]" />
      </div>

      <div className="container-site pt-[clamp(4rem,6vw,7rem)] text-center">
        {/* The label names the page, so it is the h1; the statement is the design's large line. */}
        <h1
          id="page-title"
          className="motion-safe-only animate-rise text-eyebrow font-semibold uppercase"
        >
          {eyebrow}
        </h1>
        <p
          className="motion-safe-only mx-auto mt-[clamp(0.75rem,1vw,1.25rem)] max-w-[min(66rem,100%)] animate-rise text-lead font-light text-balance"
          style={{ animationDelay: "120ms" }}
        >
          {statement.map((part, index) =>
            part.strong ? (
              <strong key={index} className="font-bold">
                {part.text}
              </strong>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </p>
      </div>

      <a
        href={`#${nextId}`}
        aria-label="Scroll to content"
        className="group absolute bottom-[clamp(1.5rem,4vw,3.75rem)] left-1/2 -translate-x-1/2 p-3 text-orange"
      >
        <svg
          viewBox="0 0 16 28"
          className="motion-safe-only h-7 w-4 animate-[cue_2.4s_var(--ease-in-out-soft)_infinite] transition-transform group-hover:translate-y-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M8 1v25M1.5 19.5 8 26l6.5-6.5" />
        </svg>
      </a>
    </section>
  );
}
