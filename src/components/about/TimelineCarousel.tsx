"use client";

import Image from "next/image";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { ArrowRight } from "@/components/icons";
import type { TimelineEntry } from "@/content/about";

type TimelineCarouselProps = {
  entries: readonly TimelineEntry[];
  /** Section heading, shown on the same row as the previous/next buttons. */
  heading: ReactNode;
  labelledBy: string;
};

/**
 * Horizontal, scroll-snapping timeline. Native scrolling (touch, trackpad,
 * keyboard) does the work; the buttons and progress line are enhancements.
 */
export function TimelineCarousel({ entries, heading, labelledBy }: TimelineCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 1);
    setAtStart(track.scrollLeft <= 2);
    setAtEnd(track.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap) });
  };

  const first = entries[0]?.label;
  const last = entries[entries.length - 1]?.label;

  return (
    <div>
      <div className="container-site flex items-center justify-between gap-6">
        {heading}
        <div className="flex shrink-0 gap-3">
          <CarouselButton direction={-1} disabled={atStart} onClick={() => step(-1)} />
          <CarouselButton direction={1} disabled={atEnd} onClick={() => step(1)} />
        </div>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-labelledby={labelledBy}
        aria-describedby="timeline-hint"
        className="bleed-track mt-[clamp(2rem,3vw,3.5rem)] flex snap-x snap-mandatory gap-[clamp(1.25rem,2.1vw,2.5rem)] overflow-x-auto overscroll-x-contain pb-2 focus-visible:outline-offset-4"
      >
        {entries.map((entry) => (
          <li key={entry.label} className="w-[clamp(17.5rem,27vw,27.5rem)] shrink-0 snap-start">
            <article>
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-media ${
                  entry.framed ? "flex items-center justify-center bg-panel" : "bg-mist"
                }`}
              >
                {entry.framed ? (
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    sizes="182px"
                    className="h-[78%] w-auto rounded-[0.75rem] grayscale"
                  />
                ) : (
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 27vw, 82vw"
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="heading-display mt-[clamp(1.25rem,1.9vw,2.25rem)] text-title text-copy">
                {entry.label}
              </h3>
              <div className="mt-[clamp(0.75rem,1vw,1.25rem)] space-y-[0.9em] text-body-sm font-light text-pretty text-copy">
                {entry.paragraphs.map((text) => (
                  <p key={text.slice(0, 32)}>{text}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="container-site mt-[clamp(2rem,3vw,3.5rem)]">
        <div aria-hidden className="relative h-px w-full bg-grey-50/70">
          <div
            className="absolute inset-y-0 left-0 h-px bg-orange transition-[width] duration-300 ease-out"
            style={{ width: `${Math.max(progress, 0.04) * 100}%` }}
          />
        </div>
        <p id="timeline-hint" className="sr-only">
          Timeline from {first} to {last}. Scroll horizontally or use the previous and next buttons.
        </p>
      </div>
    </div>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 1 | -1;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 1 ? "Next" : "Previous"}
      className="inline-flex size-[clamp(2.75rem,3vw,3.5rem)] items-center justify-center rounded-full border border-grey-50 text-copy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white disabled:pointer-events-none disabled:opacity-35"
    >
      <ArrowRight className={`size-[45%] ${direction === -1 ? "rotate-180" : ""}`} />
    </button>
  );
}
