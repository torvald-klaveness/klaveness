import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { financePage as page } from "@/content/companies";
import { bioHref, people } from "@/content/leadership";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/companies/klaveness-finance" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/companies/klaveness-finance",
  },
};

export default function KlavenessFinancePage() {
  const { hero, intro, strategy, investments, team } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="finance"
        imagePosition="50% 50%"
      />

      <section
        id="finance"
        aria-label="Klaveness Finance"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-center ${split.textImage}`}>
          <div className="reveal">
            <h2 className="font-serif text-quote font-light text-pretty text-copy">
              {intro.statement}
            </h2>
            <Paragraphs items={[intro.body]} className="mt-[clamp(1.25rem,2vw,2.25rem)]" />
          </div>
          <Photo image={intro.image} alt={intro.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      {/* Driving strategy and active ownership */}
      <section aria-labelledby="strategy-title" className={sectionY}>
        <div className="container-site grid gap-[clamp(1.5rem,3vw,3rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-[5.3%]">
          <h2
            id="strategy-title"
            className="reveal heading-display text-section text-balance text-copy"
          >
            {strategy.title}
          </h2>
          <Paragraphs
            items={strategy.paragraphs}
            className="reveal reveal-delay-1 space-y-[1.15em]"
          />
        </div>
      </section>

      {/* Investing for future growth */}
      <section aria-labelledby="investments-title" className={sectionY}>
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo
            image={investments.image}
            alt={investments.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="reveal">
            <h2 id="investments-title" className="heading-display text-section text-copy">
              {investments.title}
            </h2>
            <Paragraphs
              items={investments.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          </div>
        </div>
      </section>

      {/* Meet our investment team */}
      <section aria-labelledby="team-title" className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
        <div className="container-site">
          <div className="reveal grid gap-[clamp(2rem,4vw,5rem)] rounded-media bg-panel px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(2rem,4.4vw,5.25rem)] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] 2xl:items-center">
            <h2 id="team-title" className="heading-display text-section text-balance text-copy">
              {team.title}
            </h2>

            <ul className="grid gap-[clamp(1.5rem,2.6vw,3rem)] sm:grid-cols-2">
              {team.people.map(({ slug, email }) => {
                const person = people[slug];
                return (
                  <li key={slug} className="flex gap-[clamp(1rem,1.6vw,1.75rem)]">
                    <div className="relative aspect-[4/5] w-[clamp(5.5rem,7.5vw,8.5rem)] shrink-0 overflow-hidden rounded-[clamp(0.75rem,1vw,1.25rem)] bg-mist">
                      <Image
                        src={person.image}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="136px"
                        className="object-cover object-[50%_20%]"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <p className="heading-display text-[clamp(1.125rem,1.55vw,1.75rem)] text-copy">
                        {person.name}
                      </p>
                      <p className="mt-1 text-body-sm font-light text-pretty text-copy">
                        {person.role}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 text-body-sm">
                        <a
                          href={`mailto:${email}?subject=Enquiry`}
                          className="font-medium whitespace-nowrap text-orange-ink underline decoration-orange/40 underline-offset-4 transition-colors hover:decoration-orange"
                        >
                          {email}
                        </a>
                        <Link
                          href={bioHref(slug)}
                          className="font-medium text-copy underline decoration-grey-50 underline-offset-4 transition-colors hover:decoration-navy"
                        >
                          Bio<span className="sr-only"> of {person.name}</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
