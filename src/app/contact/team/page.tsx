import type { Metadata } from "next";

import { TeamDirectory } from "@/components/contact/TeamDirectory";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { contactPages, teamPage as page } from "@/content/contact";
import { bioHref, bioPages, people, type PersonSlug } from "@/content/leadership";
import { teamSections } from "@/content/team";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: contactPages.team.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: contactPages.team.href,
  },
};

/** Executive Committee names link to their bio panel. */
const bios = Object.fromEntries(
  (Object.keys(people) as PersonSlug[])
    .filter((slug) => people[slug].group === "leadership")
    .map((slug) => [people[slug].name, bioHref(slug)]),
);

export default function TeamPage() {
  const { hero } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="directory"
        imagePosition="50% 50%"
      />

      <section
        id="directory"
        aria-label="Team directory"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <TeamDirectory
            sections={teamSections}
            bioLinks={{ "executive-committee": bioPages.leadership }}
            bios={bios}
            officesHref={contactPages.offices.href}
          />
        </div>
      </section>
    </>
  );
}
