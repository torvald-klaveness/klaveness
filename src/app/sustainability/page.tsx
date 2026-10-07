import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { esgIconColor, esgIcons } from "@/components/icons/sustainability";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sustainabilityPage as page } from "@/content/sustainability";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/sustainability" },
  openGraph: { title: page.meta.title, description: page.meta.description, url: "/sustainability" },
};

export default function SustainabilityPage() {
  const { hero, approach, improving, tradingEfficiency: te, esg } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="approach"
        imagePosition="62% 35%"
      />

      {/* Our approach and strategy — CEO statement */}
      <section
        id="approach"
        aria-labelledby="approach-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_29%] md:gap-[8%]">
          <div className="reveal md:max-w-[87%] md:pt-[clamp(1.5rem,2.9vw,3.5rem)]">
            <Eyebrow as="h2" id="approach-title">
              {approach.eyebrow}
            </Eyebrow>
            <figure className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              <blockquote className="font-serif text-quote font-light text-pretty text-copy">
                <p>{approach.quote}</p>
              </blockquote>
              <figcaption className="mt-[clamp(1.25rem,2.1vw,2.5rem)] text-eyebrow font-medium text-copy">
                {approach.attribution}
              </figcaption>
            </figure>
          </div>
          <Photo
            image={approach.image}
            alt={approach.imageAlt}
            sizes="(min-width: 768px) 29vw, 100vw"
            className="w-full max-w-sm md:max-w-none"
          />
        </div>
      </section>

      {/* Improving the nature of shipping */}
      <section aria-labelledby="improving-title" className={sectionY}>
        <div className={`container-site items-start ${split.imageText}`}>
          <Photo
            image={improving.image}
            alt={improving.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="md:mt-[clamp(1rem,1.5vw,1.75rem)]"
          />
          <div className="reveal">
            <Eyebrow as="h2" id="improving-title">
              {improving.eyebrow}
            </Eyebrow>
            <Paragraphs
              items={improving.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
        </div>
      </section>

      {/* Trading efficiency */}
      <section
        id="trading-efficiency"
        aria-labelledby="trading-title"
        className={`scroll-mt-16 ${sectionY}`}
      >
        <div className="container-site">
          <Eyebrow as="h2" id="trading-title" className="reveal">
            {te.eyebrow}
          </Eyebrow>

          <Photo
            image={te.image}
            alt={te.imageAlt}
            sizes="(min-width: 1136px) 73vw, 100vw"
            className="mt-[clamp(1.5rem,2.6vw,3rem)]"
          />

          <div className="reveal mt-[clamp(2.5rem,4vw,4.75rem)] md:ml-[33.4%]">
            <Paragraphs items={te.paragraphs} className="space-y-[1.15em]" />
            <ArrowLink href={te.link.href} className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              {te.link.label}
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Our ESG priorities — image tucked behind the pillar card */}
      <section aria-labelledby="esg-title" className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
        <div className="container-site">
          <div className={`items-start ${split.textImage}`}>
            <div className="reveal">
              <Eyebrow as="h2" id="esg-title">
                {esg.eyebrow}
              </Eyebrow>
              <Paragraphs
                items={esg.paragraphs}
                className="mt-[clamp(2rem,4.4vw,5.25rem)] space-y-[1.15em] md:pr-[4%]"
              />
            </div>
            <Photo
              image={esg.image}
              alt={esg.imageAlt}
              sizes="(min-width: 768px) 52vw, 100vw"
              className="md:mt-[clamp(0.5rem,0.8vw,1rem)] md:-mr-[5.3%]"
            />
          </div>

          <ul className="reveal relative z-10 mt-10 grid rounded-media bg-panel px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(1.75rem,3.6vw,4.25rem)] md:-mt-[clamp(4rem,7vw,8.5rem)] md:grid-cols-3">
            {esg.pillars.map((pillar, index) => {
              const Icon = esgIcons[pillar.key];
              return (
                <li
                  key={pillar.key}
                  className={`py-8 first:pt-0 last:pb-0 md:py-0 ${
                    index > 0
                      ? "border-t border-grey-50/70 md:border-t-0 md:border-l md:pl-[clamp(1.5rem,4.4vw,5.25rem)]"
                      : ""
                  } ${index < 2 ? "md:pr-[clamp(1rem,3vw,3.5rem)]" : ""}`}
                >
                  <Link
                    href={`/sustainability/esg-priorities#${pillar.key}`}
                    className="group/pillar flex h-full flex-col"
                  >
                    <h3 className="flex items-center gap-[clamp(0.75rem,1.4vw,1.75rem)] text-body-sm font-semibold text-copy uppercase">
                      <Icon className={`size-[1.6em] shrink-0 ${esgIconColor[pillar.key]}`} />
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-[18rem] flex-1 text-body-sm font-light text-copy">
                      {pillar.body}
                    </p>
                    <span className="mt-5 inline-flex text-orange">
                      <ArrowRight className="size-[clamp(1.25rem,1.4vw,1.75rem)] transition-transform duration-500 ease-out-expo group-hover/pillar:translate-x-1.5" />
                      <span className="sr-only">Read more about {pillar.title.toLowerCase()}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
