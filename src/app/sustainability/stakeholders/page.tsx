import type { Metadata } from "next";

import { stakeholderIcons } from "@/components/icons/sustainability";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, sectionY } from "@/components/sustainability/blocks";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { stakeholdersPage as page } from "@/content/sustainability";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/sustainability/stakeholders" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/sustainability/stakeholders",
  },
};

const columns = [
  { key: "who", label: "Who they are:" },
  { key: "concerns", label: "Their concerns:" },
  { key: "engage", label: "How we engage:" },
] as const;

export default function StakeholdersPage() {
  const { hero, intro, groups } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="working-with-stakeholders"
        imagePosition="50% 30%"
      />

      {/*
       * Working with our stakeholders: intro on the left, the stakeholder groups as
       * collapsible panels on the right (client's reference: norden.com/our-heritage).
       */}
      <section
        id="working-with-stakeholders"
        aria-labelledby="intro-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site grid gap-[clamp(2.5rem,4vw,4rem)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-[5.3%]">
          <div className="reveal md:sticky md:top-28 md:self-start">
            <Eyebrow as="h2" id="intro-title">
              {intro.eyebrow}
            </Eyebrow>
            <Paragraphs
              items={intro.paragraphs}
              className="mt-[clamp(1.75rem,3.3vw,4rem)] space-y-[1.15em]"
            />
          </div>

          <ul aria-label="Our stakeholder groups" className="reveal reveal-delay-1 space-y-3">
            {groups.map((group) => {
              const Icon = stakeholderIcons[group.icon];
              const id = group.name.toLowerCase().replace(/[^a-z]+/g, "-");
              return (
                <li key={group.name}>
                  <details
                    id={id}
                    name="stakeholders"
                    className="disclosure group scroll-mt-28 rounded-xl bg-panel ring-1 ring-transparent transition-[background-color,box-shadow] duration-300 open:bg-white open:shadow-[0_12px_40px_-24px_rgb(0_20_70/0.35)] open:ring-grey-50/70 hover:bg-mist open:hover:bg-white"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-[clamp(1rem,1.6vw,1.75rem)] rounded-xl px-[clamp(1.25rem,2vw,2.25rem)] py-[clamp(1rem,1.5vw,1.6rem)] [&::-webkit-details-marker]:hidden">
                      <Icon className="size-[clamp(2rem,2.4vw,2.75rem)] shrink-0 text-navy" />
                      <h3 className="heading-display flex-1 text-[clamp(1.25rem,1.8vw,2.125rem)] text-copy">
                        {group.name}
                      </h3>
                      {/* Plus that turns into a minus when open */}
                      <span aria-hidden className="relative size-4 shrink-0 text-orange">
                        <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                        <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
                      </span>
                    </summary>
                    <dl className="space-y-[clamp(1.25rem,1.8vw,2rem)] px-[clamp(1.25rem,2vw,2.25rem)] pt-[clamp(0.25rem,0.6vw,0.75rem)] pb-[clamp(1.5rem,2.4vw,2.75rem)] md:pl-[calc(clamp(1.25rem,2vw,2.25rem)+clamp(2rem,2.4vw,2.75rem)+clamp(1rem,1.6vw,1.75rem))]">
                      {columns.map((column) => (
                        <div key={column.key}>
                          <dt className="text-label font-bold text-copy">{column.label}</dt>
                          <dd className="mt-[0.4em] text-body font-light text-pretty text-copy">
                            {group[column.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
