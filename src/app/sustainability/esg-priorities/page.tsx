import type { Metadata } from "next";

import { esgIconColor, esgIcons } from "@/components/icons/sustainability";
import { PageHero } from "@/components/layout/PageHero";
import {
  FocusList,
  Paragraphs,
  Photo,
  SubHeading,
  TargetsCard,
  sectionY,
  split,
} from "@/components/sustainability/blocks";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { esgPage as page, type EsgPillarKey } from "@/content/sustainability";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/sustainability/esg-priorities" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/sustainability/esg-priorities",
  },
};

function PillarEyebrow({ pillar, label }: { pillar: EsgPillarKey; label: string }) {
  const Icon = esgIcons[pillar];
  return (
    <Eyebrow
      as="h2"
      id={`${pillar}-title`}
      icon={<Icon className={`size-[1.9em] shrink-0 ${esgIconColor[pillar]}`} />}
    >
      {label}
    </Eyebrow>
  );
}

export default function EsgPage() {
  const { hero, environmental: env, social, governance: gov, performanceYear } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="environmental"
        imagePosition="62% 35%"
      />

      {/* Environmental */}
      <section
        id="environmental"
        aria-labelledby="environmental-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <div className={`items-start ${split.textImage}`}>
            <div className="reveal">
              <PillarEyebrow pillar="environmental" label={env.label} />
              <div className="mt-[clamp(1.5rem,2.6vw,3rem)]">
                <SubHeading>{env.heading}</SubHeading>
                <Paragraphs items={env.paragraphs} />
                <FocusList items={env.focus} />
              </div>
            </div>
            <Photo
              image={env.image}
              alt={env.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="md:mt-[clamp(1rem,1.6vw,2rem)]"
            />
          </div>

          <TargetsCard {...env.card} year={performanceYear} />

          <p className="mt-[clamp(1.25rem,1.9vw,2.25rem)] text-body font-light text-copy italic">
            {env.note.text}{" "}
            <a
              href={env.note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-ink underline decoration-orange/40 underline-offset-4 transition-colors hover:decoration-orange"
            >
              {env.note.linkLabel}
              <span className="sr-only"> (Klaveness Combination Carriers, opens in a new tab)</span>
            </a>
            .
          </p>
        </div>
      </section>

      {/* Social */}
      <section id="social" aria-labelledby="social-title" className={`scroll-mt-16 ${sectionY}`}>
        <div className="container-site">
          <div className="reveal md:w-[66.5%]">
            <PillarEyebrow pillar="social" label={social.label} />
            <div className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              <SubHeading>{social.klass.heading}</SubHeading>
              <Paragraphs items={social.klass.paragraphs} />
            </div>
          </div>

          <div className={`mt-[clamp(2.5rem,4.6vw,5.5rem)] items-start ${split.imageText}`}>
            <Photo
              image={social.image}
              alt={social.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="order-2 md:order-none md:mt-[clamp(2rem,3.4vw,4rem)]"
            />
            <div className="reveal">
              <SubHeading>{social.people.heading}</SubHeading>
              <Paragraphs items={social.people.paragraphs} />
              <FocusList items={social.focus} />
            </div>
          </div>

          <TargetsCard {...social.card} year={performanceYear} />
        </div>
      </section>

      {/* Governance */}
      <section
        id="governance"
        aria-labelledby="governance-title"
        className={`scroll-mt-16 ${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <div className={`items-start ${split.textImage}`}>
            <div className="reveal">
              <PillarEyebrow pillar="governance" label={gov.label} />
              <div className="mt-[clamp(1.5rem,2.6vw,3rem)]">
                <SubHeading>{gov.heading}</SubHeading>
                <Paragraphs items={gov.paragraphs} />
                <FocusList items={gov.focus} />
              </div>
            </div>
            <Photo
              image={gov.image}
              alt={gov.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="md:mt-[clamp(1rem,1.6vw,2rem)]"
            />
          </div>

          <TargetsCard {...gov.card} year={performanceYear} />
        </div>
      </section>
    </>
  );
}
