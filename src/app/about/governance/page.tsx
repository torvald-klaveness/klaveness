import type { Metadata } from "next";

import { GroupStructure } from "@/components/about/GroupStructure";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { LinkedText } from "@/components/ui/LinkedText";
import { governancePage as page } from "@/content/about";
import { bioHref, people, type PersonSlug } from "@/content/leadership";

// People named in the principles link to their bio (board and leadership pages).
const personLinks = Object.fromEntries(
  (Object.keys(people) as PersonSlug[]).map((slug) => [people[slug].name, bioHref(slug)]),
);

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/governance" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/about/governance",
  },
};

export default function GovernancePage() {
  const { hero, principles } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="principles"
        imagePosition="30% 50%"
      />

      {/* Structure and principles: heading stays in view while the list scrolls. */}
      <section
        id="principles"
        aria-labelledby="principles-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site grid gap-[clamp(2rem,4vw,5rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]">
          <h2
            id="principles-title"
            className="reveal self-start font-serif text-quote font-light text-pretty text-copy md:sticky md:top-28"
          >
            {principles.title}
          </h2>
          <ol className="border-b border-grey-50/70">
            {principles.items.map((item, index) => (
              <li
                key={item.slice(0, 32)}
                className="reveal grid grid-cols-[clamp(2rem,3.4vw,3.75rem)_1fr] gap-[clamp(0.75rem,1.4vw,1.5rem)] border-t border-grey-50/70 py-[clamp(1.25rem,2vw,2.25rem)]"
              >
                <span className="pt-[0.35em] text-eyebrow font-medium text-orange-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-body font-light text-pretty text-copy">
                  <LinkedText text={item} links={personLinks} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Group structure" className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
        <div className="reveal container-site">
          <GroupStructure />
        </div>
      </section>
    </>
  );
}
