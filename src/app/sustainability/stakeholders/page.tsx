import type { Metadata } from "next";

import { stakeholderIcons } from "@/components/icons/sustainability";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
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
  const { hero, intro, groups, closing } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="working-with-stakeholders"
        imagePosition="50% 30%"
      />

      <section
        id="working-with-stakeholders"
        aria-labelledby="intro-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className={`container-site items-start ${split.textImage}`}>
          <div className="reveal">
            <Eyebrow as="h2" id="intro-title">
              {intro.eyebrow}
            </Eyebrow>
            <Paragraphs
              items={intro.paragraphs}
              className="mt-[clamp(1.75rem,3.3vw,4rem)] space-y-[1.15em]"
            />
          </div>
          <Photo image={intro.image} alt={intro.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </section>

      <section aria-label="Our stakeholder groups" className="pb-[clamp(4rem,6vw,7rem)]">
        <div className="container-site space-y-[clamp(4rem,6.4vw,7.75rem)]">
          {groups.map((group) => {
            const Icon = stakeholderIcons[group.icon];
            const id = group.name.toLowerCase().replace(/[^a-z]+/g, "-");
            return (
              <article key={group.name} aria-labelledby={id} className="reveal">
                <header className="flex items-center gap-[clamp(1.25rem,2.3vw,2.75rem)] border-b border-grey-50/70 pb-[clamp(0.75rem,1.1vw,1.25rem)]">
                  <Icon className="size-[clamp(2.75rem,3.4vw,4rem)] shrink-0 text-navy" />
                  <h2 id={id} className="heading-display text-title text-copy">
                    {group.name}
                  </h2>
                </header>
                <dl className="mt-[clamp(1.5rem,2.3vw,2.75rem)] grid gap-8 md:grid-cols-3 md:gap-[clamp(2rem,4.7vw,5.75rem)]">
                  {columns.map((column) => (
                    <div key={column.key}>
                      <dt className="font-serif text-label font-bold text-copy">{column.label}</dt>
                      <dd className="mt-[1.1em] text-body font-light text-pretty text-copy">
                        {group[column.key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section aria-label="Closing" className={`${sectionY} pt-[clamp(2rem,4vw,5rem)]`}>
        <div className="container-site">
          <Paragraphs items={[closing]} className="reveal md:w-[66.5%]" />
        </div>
      </section>
    </>
  );
}
