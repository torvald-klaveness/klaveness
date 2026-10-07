import type { Metadata } from "next";
import Image from "next/image";

import { TimelineCarousel } from "@/components/about/TimelineCarousel";
import { ValuesExplorer } from "@/components/about/ValuesExplorer";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { aboutPage as page } from "@/content/about";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/about-us" },
  openGraph: { title: page.meta.title, description: page.meta.description, url: "/about/about-us" },
};

export default function AboutUsPage() {
  const { hero, whoWeAre, timeline, vision, values } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="who-we-are"
        imagePosition="50% 60%"
      />

      {/* Who we are */}
      <section
        id="who-we-are"
        aria-labelledby="who-we-are-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <Eyebrow as="h2" id="who-we-are-title">
              {whoWeAre.eyebrow}
            </Eyebrow>
            <p className="mt-[clamp(1.5rem,2.6vw,3rem)] font-serif text-quote font-light text-pretty text-copy">
              {whoWeAre.statement}
            </p>
            <Paragraphs
              items={whoWeAre.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
          <Photo
            image={whoWeAre.image}
            alt={whoWeAre.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Why we exist — anchor kept from the old site (#vision-and-values) */}
      <section
        id="vision-and-values"
        aria-labelledby="vision-title"
        className={`scroll-mt-16 ${sectionY}`}
      >
        <div className="container-site">
          <div>
            <Eyebrow as="h2" id="vision-title" className="reveal">
              {vision.eyebrow}
            </Eyebrow>
            {/* Statement and paragraphs share a row, so their first lines align. */}
            <div className="mt-[clamp(1.5rem,2.6vw,3rem)] grid gap-[clamp(1.25rem,2.4vw,3rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-[5.3%]">
              <p className="reveal font-serif text-quote font-light text-pretty text-copy">
                {vision.statement}
              </p>
              <Paragraphs
                items={vision.paragraphs}
                className="reveal reveal-delay-1 space-y-[1.15em]"
              />
            </div>
          </div>

          <h3 className="reveal mt-[clamp(3rem,5vw,6rem)] text-label font-bold text-copy">
            {vision.dimensionsTitle}
          </h3>

          {/*
           * The three dimensions of the vision, styled after the homepage hero title.
           * From md up the cards share one grid (subgrid): the titles sit on a common
           * row and the descriptions on the next, so "Improving", "The nature" and
           * "Of shipping" always line up, whatever the length of each description.
           */}
          <ul className="mt-[clamp(1.25rem,2vw,2.25rem)] grid gap-[clamp(1rem,1.7vw,2rem)] md:grid-cols-3 md:grid-rows-[minmax(clamp(14rem,23vw,27rem),1fr)_auto_auto] md:gap-y-0">
            {vision.dimensions.map((dimension, index) => (
              <li
                key={dimension.body}
                className={`reveal ${index ? `reveal-delay-${index}` : ""} group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-media bg-navy px-[clamp(1.5rem,2.5vw,3rem)] pb-[clamp(1.5rem,2.5vw,3rem)] text-white md:row-span-3 md:grid md:aspect-auto md:grid-cols-1 md:grid-rows-subgrid md:justify-normal md:gap-y-0`}
              >
                <Image
                  src={dimension.image}
                  alt={dimension.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(0_20_70/0.15)_0%,rgb(0_20_70/0.35)_45%,rgb(0_12_44/0.88)_100%)]"
                />
                <h3 className="self-end border-l-2 border-orange pl-[clamp(1rem,1.4vw,1.5rem)] text-[clamp(1.75rem,2.5vw,3rem)] leading-[1.05] whitespace-nowrap uppercase md:row-start-2">
                  {dimension.words.map((word) => (
                    <span key={word.text} className={word.strong ? "font-bold" : "font-light"}>
                      {word.text}
                    </span>
                  ))}
                </h3>
                <p className="mt-[clamp(0.75rem,1.1vw,1.25rem)] max-w-[22rem] text-body-sm font-light text-white/90 md:row-start-3">
                  {dimension.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work — our values */}
      <section aria-labelledby="values-title" className={sectionY}>
        <div className="container-site">
          <ValuesExplorer eyebrow={values.eyebrow} title={values.title} items={values.items} />
        </div>
      </section>

      {/* 80 years of innovation — anchor kept from the old site (#history) */}
      <section
        id="history"
        aria-labelledby="history-title"
        className={`scroll-mt-16 ${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <Eyebrow as="h2" id="history-title" className="reveal">
            {timeline.eyebrow}
          </Eyebrow>
          {/* Statement and paragraphs share a row, so their first lines align. */}
          <div className="mt-[clamp(1.5rem,2.6vw,3rem)] grid gap-[clamp(1.25rem,2.4vw,3rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-[5.3%]">
            <p className="reveal font-serif text-quote font-light text-pretty text-copy">
              {timeline.statement}
            </p>
            <Paragraphs
              items={timeline.paragraphs}
              className="reveal reveal-delay-1 space-y-[1.15em]"
            />
          </div>
        </div>

        <div className="mt-[clamp(2.5rem,4.4vw,5rem)]">
          {/* The heading row only carries the previous/next buttons here. */}
          <TimelineCarousel
            entries={timeline.entries}
            labelledBy="history-title"
            heading={<span />}
          />
        </div>
      </section>
    </>
  );
}
