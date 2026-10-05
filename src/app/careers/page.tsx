import type { Metadata } from "next";

import { CareersNav } from "@/components/careers/CareersNav";
import { OfficeClocks } from "@/components/careers/OfficeClocks";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { careersHome as page, careersPages } from "@/content/careers";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: careersPages.home.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: careersPages.home.href,
  },
};

export default function CareersPage() {
  const { hero, intro, joining, students } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="intro"
        imagePosition="50% 45%"
      />

      {/* Intro */}
      <section
        id="intro"
        aria-label="Careers at Klaveness"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <div className="reveal max-w-[60rem]">
            <p className="font-serif text-quote font-light text-pretty text-copy">{intro[0]}</p>
            <Paragraphs
              items={[intro[1]]}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] max-w-[46rem]"
            />
          </div>
        </div>
      </section>

      {/* Joining our team, with the five offices' local time */}
      <section aria-labelledby="joining-title" className={sectionY}>
        <div className="container-site">
          <div className={`items-center ${split.textImage}`}>
            <div className="reveal">
              <h2 id="joining-title" className="heading-display text-section text-copy">
                {joining.title}
              </h2>
              <Paragraphs
                items={joining.paragraphs}
                className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
              />
              <ArrowLink
                href={careersPages.vacancies.href}
                className="mt-[clamp(1.5rem,2.6vw,3rem)] max-w-[32rem]"
              >
                {joining.cta}
              </ArrowLink>
            </div>
            <Photo
              image={joining.image}
              alt={joining.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="reveal mt-[clamp(3rem,5vw,6rem)]">
            <Eyebrow>Our five locations, right now</Eyebrow>
            <div className="mt-[clamp(1rem,1.6vw,1.75rem)]">
              <OfficeClocks />
            </div>
          </div>
        </div>
      </section>

      {/* Students and internships */}
      <section
        id="students-and-internships"
        aria-labelledby="students-title"
        className={`scroll-mt-16 ${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo
            image={students.image}
            alt={students.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="mx-auto w-full max-w-[34rem] md:mx-0"
          />
          <div className="reveal">
            <h2 id="students-title" className="heading-display text-section text-copy">
              {students.title}
            </h2>
            <Paragraphs
              items={students.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
            <ArrowLink href={careersPages.people.href} className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              {careersPages.people.label}
            </ArrowLink>
          </div>
        </div>
      </section>

      <CareersNav current={careersPages.home.href} />
    </>
  );
}
