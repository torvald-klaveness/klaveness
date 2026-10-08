import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { RichText } from "@/components/ui/RichText";
import { baumarinePage as page } from "@/content/companies";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/companies/klaveness-dry-bulk/baumarine" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/companies/klaveness-dry-bulk/baumarine",
  },
};

export default function BaumarinePage() {
  const { hero, intro, valueProposition, closing } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="intro"
        imagePosition="68% 40%"
      />

      {/* Tradition meets innovation */}
      <section
        id="intro"
        aria-labelledby="intro-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <h2 id="intro-title" className="heading-display text-section text-balance text-copy">
              {intro.title}
            </h2>
            <Paragraphs
              items={intro.paragraphs}
              className="mt-[clamp(1.5rem,2.4vw,2.75rem)] space-y-[1.15em]"
            />
          </div>
          <Photo image={intro.image} alt={intro.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      {/* Value proposition — navy panel over the fleet photo, as on the current page */}
      <section aria-labelledby="value-title" className={sectionY}>
        <div className="container-site">
          <div className="reveal relative isolate overflow-hidden rounded-media bg-navy px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(2.5rem,5vw,6rem)] text-white">
            <div aria-hidden className="absolute inset-0 -z-10">
              <Image
                src={valueProposition.image}
                alt=""
                fill
                placeholder="blur"
                sizes="(min-width: 1920px) 1760px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/80" />
            </div>

            <h2 id="value-title" className="heading-display text-section text-balance">
              {valueProposition.title}
            </h2>
            <ol className="mt-[clamp(2rem,3.6vw,4rem)] grid gap-x-[clamp(2rem,4vw,5rem)] gap-y-[clamp(1.75rem,3vw,3.5rem)] md:grid-cols-2 lg:grid-cols-3">
              {valueProposition.points.map((point, index) => (
                <li
                  key={point[0].text}
                  className="border-t border-white/25 pt-[clamp(1rem,1.6vw,1.75rem)]"
                >
                  <span className="text-eyebrow font-medium text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-[clamp(0.75rem,1.2vw,1.25rem)] text-body font-light text-pretty text-white/85">
                    <RichText line={point} strongClassName="font-semibold text-white" />
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stronger Together */}
      <section aria-label="Contact" className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
        <div className="reveal container-site flex flex-col items-center text-center">
          <p className="max-w-[min(100%,56rem)] font-serif text-quote font-light text-balance text-copy">
            <RichText line={closing.statement} strongClassName="font-semibold" />
          </p>
          <ArrowLink href={closing.contact.href} className="mt-[clamp(1.5rem,2.6vw,3rem)]">
            {closing.contact.label}
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
