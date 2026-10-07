import type { Metadata } from "next";
import Image from "next/image";

import { CareersNav } from "@/components/careers/CareersNav";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, sectionY } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { careersPages, meetOurPeople as page } from "@/content/careers";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: careersPages.people.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: careersPages.people.href,
  },
};

/** Where each photo is cropped, so faces stay in frame in the 4:5 card. */
const focus: Record<string, string> = {
  "tony-elmqvist": "30% 40%",
  "magnus-noodt": "52% 55%",
  "kristina-rep": "50% 35%",
  "martin-wattum": "52% 30%",
  "monica-lauritzen": "50% 25%",
};

export default function MeetOurPeoplePage() {
  const { hero, intro, stories } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="stories"
        imagePosition="50% 45%"
      />

      <section
        id="stories"
        aria-label="Stories from our people"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <div className="reveal max-w-[60rem]">
            <p className="font-serif text-quote font-light text-pretty text-copy">{intro[0]}</p>
            <Paragraphs
              items={intro.slice(1)}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] max-w-[46rem] space-y-[1.15em]"
            />
          </div>

          <ol className="mt-[clamp(4rem,7vw,8rem)] space-y-[clamp(4rem,7vw,8rem)]">
            {stories.map((story, index) => {
              const flip = index % 2 === 1;
              return (
                <li key={story.slug} id={story.slug} className="scroll-mt-24">
                  <figure
                    className={`grid items-center gap-[clamp(1.75rem,4vw,5rem)] ${
                      flip
                        ? "md:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]"
                        : "md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]"
                    }`}
                  >
                    <div
                      className={`reveal-image relative aspect-[4/5] overflow-hidden rounded-media bg-mist ${
                        flip ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={story.image}
                        alt={story.imageAlt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 768px) 38vw, 100vw"
                        style={{ objectPosition: focus[story.slug] }}
                        className="object-cover"
                      />
                    </div>
                    <div className="reveal">
                      <span
                        aria-hidden
                        className="heading-display block text-[clamp(4rem,7vw,8rem)] leading-[0.6] text-orange"
                      >
                        “
                      </span>
                      <blockquote className="mt-[clamp(0.5rem,1vw,1rem)] font-serif text-[clamp(1.375rem,2.1vw,2.5rem)] leading-[1.35] font-light text-pretty text-copy">
                        <p>{story.quote.replace(/^“|”$/g, "")}</p>
                      </blockquote>
                      <figcaption className="mt-[clamp(1.5rem,2.4vw,2.75rem)] border-t border-grey-50/70 pt-[clamp(1rem,1.6vw,1.75rem)]">
                        <span className="block text-body font-semibold text-copy">
                          {story.name}
                        </span>
                        <span className="mt-1 block text-body-sm font-light text-copy">
                          {story.role}
                        </span>
                      </figcaption>
                      <ArrowLink
                        href={story.link.href}
                        external={story.link.external}
                        className="mt-[clamp(1.25rem,2vw,2.25rem)]"
                      >
                        {story.link.label}
                      </ArrowLink>
                    </div>
                  </figure>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CareersNav current={careersPages.people.href} />
    </>
  );
}
