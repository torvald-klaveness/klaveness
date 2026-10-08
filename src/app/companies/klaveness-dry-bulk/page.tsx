import type { Metadata } from "next";

import { OperationsMap } from "@/components/companies/OperationsMap";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RichText } from "@/components/ui/RichText";
import { dryBulkPage as page } from "@/content/companies";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/companies/klaveness-dry-bulk" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/companies/klaveness-dry-bulk",
  },
};

export default function KlavenessDryBulkPage() {
  const { hero, intro, services, baumarine, innovation } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="intro"
        imagePosition="35% 50%"
      />

      {/* Much more than your traditional operator */}
      <section
        id="intro"
        aria-labelledby="intro-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <div className={`items-center ${split.textImage}`}>
            <div className="reveal">
              <h2 id="intro-title" className="heading-display text-section text-copy">
                {intro.title}
              </h2>
              <Paragraphs
                items={intro.paragraphs}
                className="mt-[clamp(1.5rem,2.4vw,2.75rem)] space-y-[1.15em]"
              />
            </div>
            <Photo
              image={intro.image}
              alt={intro.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Our approach is different — three numbered columns */}
          <div className="mt-[clamp(3.5rem,6vw,7rem)]">
            <h3 className="reveal text-label font-bold text-copy">{intro.approach.heading}</h3>
            <ol className="mt-[clamp(1.25rem,2vw,2.25rem)] grid gap-x-[clamp(2rem,4vw,5rem)] gap-y-8 md:grid-cols-3">
              {intro.approach.points.map((point, index) => (
                <li
                  key={point}
                  className={`reveal ${index ? `reveal-delay-${index}` : ""} border-t border-copy pt-[clamp(1rem,1.6vw,1.75rem)]`}
                >
                  <span className="text-eyebrow font-medium text-orange-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-[clamp(0.75rem,1.2vw,1.25rem)] text-body font-light text-pretty text-copy">
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <p className="reveal mt-[clamp(3.5rem,6vw,7rem)] max-w-[min(100%,60rem)] font-serif text-quote font-light text-pretty text-copy">
            {intro.closing}
          </p>
        </div>
      </section>

      {/* Our services — Klaveness Chartering, key figures and the live operations map */}
      <section aria-labelledby="services-title" className={sectionY}>
        <div className="container-site">
          <Eyebrow as="h2" id="services-title" className="reveal">
            {services.eyebrow}
          </Eyebrow>

          <div className={`mt-[clamp(1.5rem,2.6vw,3rem)] items-start ${split.textImage}`}>
            <div className="reveal">
              <h3 className="heading-display text-section text-copy">{services.title}</h3>
              <Paragraphs
                items={services.paragraphs}
                className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
              />
            </div>

            <dl className="reveal reveal-delay-1 grid grid-cols-3 gap-4 border-t border-grey-50/70 md:grid-cols-1 md:gap-0">
              {services.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse gap-1 pt-6 md:flex-row-reverse md:items-baseline md:justify-between md:border-b md:border-grey-50/70 md:py-[clamp(1.25rem,2vw,2.25rem)]"
                >
                  <dt className="text-body-sm font-light text-copy md:text-right">{stat.label}</dt>
                  <dd className="heading-display text-[clamp(2.25rem,4.4vw,5.25rem)] leading-none text-copy">
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal mt-[clamp(3rem,5vw,6rem)]">
            <OperationsMap
              caption={
                <p className="text-body font-light text-pretty text-copy md:text-white">
                  <RichText line={services.teams} />
                </p>
              }
            />
          </div>
        </div>
      </section>

      {/* Baumarine by Klaveness */}
      <section aria-labelledby="baumarine-title" className={sectionY}>
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo
            image={baumarine.image}
            alt={baumarine.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="reveal">
            <h2 id="baumarine-title" className="heading-display text-section text-copy">
              {baumarine.title}
            </h2>
            <Paragraphs
              items={baumarine.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
            <ArrowLink href={baumarine.link.href} className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              {baumarine.link.label}
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Innovation is in our DNA */}
      <section
        aria-labelledby="innovation-title"
        className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <h2 id="innovation-title" className="heading-display text-section text-copy">
              {innovation.title}
            </h2>
            <Paragraphs
              items={innovation.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
            <ArrowLink
              href={innovation.link.href}
              external
              className="mt-[clamp(1.5rem,2.6vw,3rem)]"
            >
              {innovation.link.label}
            </ArrowLink>
          </div>
          <Photo
            image={innovation.image}
            alt={innovation.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>
    </>
  );
}
