import type { Metadata } from "next";

import { PeopleDirectory } from "@/components/about/PeopleDirectory";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { boardPage as page } from "@/content/leadership";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/board-of-directors" },
  openGraph: {
    ...sharedOpenGraph,
    title: page.meta.title,
    description: page.meta.description,
    url: "/about/board-of-directors",
  },
};

export default function BoardOfDirectorsPage() {
  const { hero, teams } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="board-of-directors"
        imagePosition="50% 40%"
      />
      <div
        className={`container-site ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <PeopleDirectory teams={teams} />
      </div>
    </>
  );
}
