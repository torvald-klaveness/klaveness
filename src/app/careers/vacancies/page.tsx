import type { Metadata } from "next";
import Link from "next/link";

import { CareersNav } from "@/components/careers/CareersNav";
import { ArrowRight, LinkedInIcon } from "@/components/icons";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { careersPages, vacanciesPage as page } from "@/content/careers";
import { formatNewsDate } from "@/lib/news/shared";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: careersPages.vacancies.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: careersPages.vacancies.href,
  },
};

export default function VacanciesPage() {
  const { hero, vacancies } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="current-vacancies"
        imagePosition="50% 50%"
      />

      <section
        id="current-vacancies"
        aria-labelledby="vacancies-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <h2 id="vacancies-title" className="reveal heading-display text-section text-copy">
            {page.title}
          </h2>

          {vacancies.length ? (
            <ul className="reveal mt-[clamp(1.75rem,3vw,3.5rem)] border-t border-copy">
              {vacancies.map((vacancy) => (
                <li key={vacancy.href} className="border-b border-grey-50/70">
                  <Link
                    href={vacancy.href}
                    className="group grid items-center gap-2 py-[clamp(1.25rem,2vw,2rem)] md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-6"
                  >
                    <span className="heading-display text-[clamp(1.25rem,1.8vw,2rem)] text-copy">
                      {vacancy.title}
                    </span>
                    <span className="text-body-sm font-light text-copy">{vacancy.company}</span>
                    <span className="text-body-sm font-light text-copy">
                      {vacancy.location}
                      {vacancy.deadline ? ` · Apply by ${formatNewsDate(vacancy.deadline)}` : ""}
                    </span>
                    <ArrowRight className="hidden size-5 text-orange transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 md:block" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="reveal mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-[clamp(1.5rem,3vw,3rem)] rounded-media bg-panel p-[clamp(1.75rem,4vw,4.5rem)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
              <p className="font-serif text-quote font-light text-pretty text-copy">{page.empty}</p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[clamp(1rem,1.6vw,1.5rem)] rounded-xl bg-white p-[clamp(1.25rem,1.8vw,1.75rem)] ring-1 ring-grey-50/70 transition-colors hover:ring-navy/40"
              >
                <span className="inline-flex size-[clamp(2.75rem,3vw,3.5rem)] shrink-0 items-center justify-center rounded-full bg-navy text-white">
                  <LinkedInIcon className="size-[42%]" />
                </span>
                <span className="text-body-sm font-medium text-pretty text-copy">
                  {page.follow}
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <CareersNav current={careersPages.vacancies.href} />
    </>
  );
}
