import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CountUp } from "@/components/ui/CountUp";
import { RichText } from "@/components/ui/RichText";
import { tradingEfficiencyPage as page } from "@/content/trading-efficiency";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: page.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: page.href,
  },
};

export default function TradingEfficiencyPage() {
  const { hero, intro, whyItMatters, opportunity, inefficiencies, whyNow, approach, explore } =
    page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="intro"
        imagePosition="50% 50%"
      />

      {/* Introduction */}
      <section
        id="intro"
        aria-label="Introduction"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <p className="font-serif text-quote font-light text-pretty text-copy">
              {intro.statement}
            </p>
            <Paragraphs
              items={intro.paragraphs}
              className="mt-[clamp(1.5rem,2.4vw,2.75rem)] space-y-[1.15em]"
            />
          </div>
          <Photo image={intro.image} alt={intro.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      {/* Why it matters */}
      <section id="why-it-matters" aria-labelledby="why-it-matters-title" className={sectionY}>
        <div className="container-site">
          <div className="grid gap-[clamp(1.5rem,3vw,3rem)] border-t border-copy pt-[clamp(2rem,3.4vw,4rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-[5.3%]">
            <h2
              id="why-it-matters-title"
              className="reveal heading-display text-section text-balance text-copy"
            >
              {whyItMatters.title}
            </h2>
            <Paragraphs
              items={whyItMatters.paragraphs}
              className="reveal reveal-delay-1 space-y-[1.15em]"
            />
          </div>
        </div>
      </section>

      {/* The opportunity — text with the two headline figures */}
      <section id="the-opportunity" aria-labelledby="opportunity-title" className={sectionY}>
        <div className={`container-site items-start ${split.textImage}`}>
          <div className="reveal">
            <h2 id="opportunity-title" className="heading-display text-section text-copy">
              {opportunity.title}
            </h2>
            <div className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em] text-body font-light text-pretty text-copy">
              {opportunity.paragraphs.map((line, index) => (
                <p key={index}>
                  <RichText line={line} />
                </p>
              ))}
            </div>
            {opportunity.report ? (
              <ArrowLink
                href={opportunity.report.href}
                external
                className="mt-[clamp(1.5rem,2.6vw,3rem)]"
              >
                {opportunity.report.label}
              </ArrowLink>
            ) : null}
          </div>

          <dl className="reveal reveal-delay-1 grid divide-y divide-white/15 rounded-media bg-navy p-[clamp(1.5rem,3.2vw,3.75rem)] text-white">
            {opportunity.figures.map((figure) => (
              <div
                key={figure.label}
                className="flex flex-col-reverse gap-2 py-[clamp(1.25rem,2.6vw,3rem)] first:pt-0 last:pb-0"
              >
                <dt className="text-body-sm font-light text-pretty text-white/80">
                  {figure.label}
                </dt>
                <dd className="heading-display text-[clamp(2.75rem,5.2vw,6rem)] leading-none whitespace-nowrap text-white">
                  {"value" in figure ? (
                    <CountUp value={figure.value} prefix={figure.prefix} suffix={figure.suffix} />
                  ) : (
                    figure.display
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Where inefficiencies exist */}
      <section
        id="where-inefficiencies-exist"
        aria-labelledby="inefficiencies-title"
        className={sectionY}
      >
        <div className="container-site">
          <h2 id="inefficiencies-title" className="reveal heading-display text-section text-copy">
            {inefficiencies.title}
          </h2>
          <ol className="mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-x-[clamp(1.25rem,2.4vw,3rem)] gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {inefficiencies.items.map((item, index) => (
              <li
                key={item}
                className={`reveal ${index ? `reveal-delay-${Math.min(index, 2)}` : ""} border-t border-copy pt-[clamp(1rem,1.6vw,1.75rem)]`}
              >
                <span className="text-eyebrow font-medium text-orange-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-[clamp(0.75rem,1.2vw,1.25rem)] text-label font-bold text-pretty text-copy">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why now */}
      <section id="why-now" aria-labelledby="why-now-title" className={sectionY}>
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo
            image={whyNow.image}
            alt={whyNow.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="reveal">
            <h2 id="why-now-title" className="heading-display text-section text-copy">
              {whyNow.title}
            </h2>
            <Paragraphs
              items={whyNow.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section id="our-approach" aria-labelledby="approach-title" className={sectionY}>
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <h2 id="approach-title" className="heading-display text-section text-copy">
              {approach.title}
            </h2>
            <Paragraphs
              items={approach.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
          <Photo
            image={approach.image}
            alt={approach.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </section>

      {/* Explore trading efficiency — topics, linked once the content exists */}
      <section
        id="explore"
        aria-labelledby="explore-title"
        className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <div className="reveal rounded-media bg-navy px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(2.5rem,5vw,6rem)] text-white">
            <div className="grid gap-[clamp(1.25rem,2.4vw,3rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-end">
              <h2 id="explore-title" className="heading-display text-section text-balance">
                {explore.title}
              </h2>
              <p className="text-body font-light text-pretty text-white/85">{explore.body}</p>
            </div>
            <ul className="mt-[clamp(2rem,3.6vw,4rem)] grid grid-cols-2 gap-[clamp(0.75rem,1.4vw,1.5rem)] lg:grid-cols-4">
              {explore.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex min-h-[clamp(6rem,9vw,10rem)] items-end rounded-xl border border-white/15 bg-white/[0.04] p-[clamp(1rem,1.6vw,1.75rem)]"
                >
                  <span className="heading-display text-[clamp(1.125rem,1.55vw,1.75rem)] text-pretty">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
