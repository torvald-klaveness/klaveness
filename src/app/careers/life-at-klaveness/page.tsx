import type { Metadata } from "next";
import Image from "next/image";

import { CareersNav } from "@/components/careers/CareersNav";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkedText } from "@/components/ui/LinkedText";
import { careersPages, lifeAtKlaveness as page } from "@/content/careers";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: careersPages.life.href },
  openGraph: {
    ...sharedOpenGraph,
    title: page.meta.title,
    description: page.meta.description,
    url: careersPages.life.href,
  },
};

export default function LifeAtKlavenessPage() {
  const { hero, impact, equalOpportunities: eo, facts } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="impact"
        imagePosition="40% 40%"
      />

      {/* A place to grow and make an impact */}
      <section
        id="impact"
        aria-label="A place to grow and make an impact"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <p className="font-serif text-quote font-light text-pretty text-copy">{impact.lead}</p>
            <div className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em] text-body font-light text-pretty text-copy">
              {impact.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>
                  <LinkedText text={paragraph} links={impact.links} />
                </p>
              ))}
            </div>
          </div>
          <Photo
            image={impact.image}
            alt={impact.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Equal opportunities — anchor kept for the old /careers/equal-opportunities page */}
      <section
        id="equal-opportunities"
        aria-labelledby="equal-opportunities-title"
        className={`scroll-mt-16 ${sectionY}`}
      >
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo image={eo.image} alt={eo.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
          <div className="reveal">
            <h2 id="equal-opportunities-title" className="heading-display text-section text-copy">
              {eo.title}
            </h2>
            <Paragraphs
              items={eo.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
        </div>
      </section>

      {/* Key facts and figures */}
      <section aria-labelledby="facts-title" className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
        <div className="container-site">
          <div className="reveal rounded-media bg-navy px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(2.5rem,5vw,6rem)] text-white">
            <Eyebrow as="h2" id="facts-title" tone="light">
              {facts.title}
            </Eyebrow>

            {/* Figures share their rows, so the numbers line up across the row. */}
            <ul className="mt-[clamp(2rem,3.6vw,4rem)] grid gap-x-[clamp(1.5rem,3vw,3.5rem)] border-t border-white/20 sm:grid-cols-3">
              {facts.figures.map((figure) => (
                <li
                  key={figure.after}
                  className="row-span-3 grid grid-rows-subgrid gap-y-0 border-b border-white/15 py-[clamp(1.5rem,2.6vw,3rem)] sm:border-b-0"
                >
                  <span className="sr-only">
                    {figure.before} {figure.value}
                    {figure.suffix} {figure.after}
                  </span>
                  <span aria-hidden className="text-body-sm font-light text-white/70">
                    {figure.before || " "}
                  </span>
                  <span
                    aria-hidden
                    className="heading-display text-[clamp(3.25rem,6.2vw,7.5rem)] leading-none"
                  >
                    <CountUp value={figure.value} suffix={figure.suffix} />
                  </span>
                  <span
                    aria-hidden
                    className="mt-[clamp(0.5rem,0.9vw,1rem)] text-body-sm font-light text-white/85"
                  >
                    {figure.after}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid gap-[clamp(1rem,1.6vw,2rem)] border-t border-white/20 pt-[clamp(1.5rem,2.6vw,3rem)] md:grid-cols-2">
              <div className="flex flex-col items-start gap-[clamp(1rem,2vw,2rem)] rounded-xl bg-white/[0.06] p-[clamp(1.25rem,2vw,2rem)] ring-1 ring-white/15 sm:flex-row sm:items-center">
                <span className="shrink-0 rounded-lg bg-white px-3 py-2">
                  <Image
                    src={facts.pledge.logo}
                    alt={facts.pledge.logoAlt}
                    sizes="140px"
                    className="h-auto w-[clamp(6rem,8vw,8.75rem)]"
                  />
                </span>
                <p className="text-body-sm font-light text-pretty text-white/85">
                  {facts.pledge.text}
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.06] p-[clamp(1.25rem,2vw,2rem)] ring-1 ring-white/15">
                <p className="text-body-sm font-light text-white/70">{facts.offices.text}</p>
                <ul className="mt-2 flex flex-wrap gap-x-[clamp(1rem,1.6vw,1.75rem)] gap-y-1">
                  {facts.offices.cities.map((city) => (
                    <li
                      key={city}
                      className="heading-display flex items-center gap-2 text-[clamp(1.25rem,1.8vw,2rem)]"
                    >
                      <span aria-hidden className="size-1.5 rounded-full bg-orange" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareersNav current={careersPages.life.href} />
    </>
  );
}
