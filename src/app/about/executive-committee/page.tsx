import type { Metadata } from "next";

import { PeopleDirectory } from "@/components/about/PeopleDirectory";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { leadershipPage as page } from "@/content/leadership";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/executive-committee" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/about/executive-committee",
  },
};

export default function LeadershipPage() {
  const { hero, teams } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="executive-committee"
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
