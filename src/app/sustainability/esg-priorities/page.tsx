import type { Metadata } from "next";
import Link from "next/link";

import { esgIconColor, esgIcons } from "@/components/icons/sustainability";
import { PageHero } from "@/components/layout/PageHero";
import {
  FocusList,
  Paragraphs,
  Photo,
  SubHeading,
  sectionY,
  split,
} from "@/components/sustainability/blocks";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { esgPage as page, type EsgPillarKey } from "@/content/sustainability";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/sustainability/esg-priorities" },
  openGraph: {
    ...sharedOpenGraph,
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
  const { hero, environmental: env, social, governance: gov } = page;

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
                <Paragraphs items={env.paragraphs} className="space-y-[1.15em]" />
                <FocusList items={env.focus} title={env.focusTitle} />
              </div>
            </div>
            <Photo
              image={env.image}
              alt={env.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="md:mt-[clamp(1rem,1.6vw,2rem)]"
            />
          </div>
        </div>
      </section>

      {/* Social */}
      <section id="social" aria-labelledby="social-title" className={`scroll-mt-16 ${sectionY}`}>
        <div className="container-site">
          <div className="reveal md:w-[66.5%]">
            <PillarEyebrow pillar="social" label={social.label} />
            <div className="mt-[clamp(1.5rem,2.6vw,3rem)]">
              <SubHeading>{social.working.heading}</SubHeading>
              <Paragraphs items={social.working.paragraphs} className="space-y-[1.15em]" />
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
              <SubHeading>{social.beyond.heading}</SubHeading>
              <Paragraphs items={social.beyond.paragraphs} className="space-y-[1.15em]" />
              <FocusList items={social.focus} />
            </div>
          </div>

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
                <Paragraphs items={gov.paragraphs} className="space-y-[1.15em]" />
                <FocusList items={gov.focus} />
                <p className="mt-[1.6em] text-body font-light text-copy">
                  {gov.structureNote.text}{" "}
                  <Link
                    href={gov.structureNote.href}
                    className="text-orange-ink underline decoration-orange/40 underline-offset-4 transition-colors hover:decoration-orange"
                  >
                    {gov.structureNote.linkLabel}
                    <span className="sr-only"> (Governance)</span>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <Photo
              image={gov.image}
              alt={gov.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="md:mt-[clamp(1rem,1.6vw,2rem)]"
            />
          </div>

        </div>
      </section>
    </>
  );
}
