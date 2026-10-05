import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  careersHome,
  careersPages,
  lifeAtKlaveness,
  meetOurPeople,
  vacanciesPage,
  workingWithUs,
} from "@/content/careers";

const cards = [
  { ...careersPages.home, image: careersHome.hero.image },
  { ...careersPages.workingWithUs, image: workingWithUs.hero.image },
  { ...careersPages.life, image: lifeAtKlaveness.hero.image },
  { ...careersPages.people, image: meetOurPeople.hero.image },
  { ...careersPages.vacancies, image: vacanciesPage.hero.image },
];

/** "More careers" links to the other Careers pages, shown at the end of each. */
export function CareersNav({ current }: { current: string }) {
  const others = cards.filter((card) => card.href !== current);

  return (
    <nav
      aria-labelledby="careers-nav-title"
      className="border-t border-grey-50/70 bg-panel py-[clamp(4rem,6vw,7rem)]"
    >
      <div className="container-site">
        <Eyebrow as="h2" id="careers-nav-title">
          More about careers
        </Eyebrow>
        <ul className="mt-[clamp(1.5rem,2.6vw,3rem)] grid grid-cols-2 gap-[clamp(1rem,1.6vw,2rem)] lg:grid-cols-4">
          {others.map((card) => (
            <li key={card.href}>
              <Link href={card.href} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-media bg-mist">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 23vw, 46vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-navy/25 transition-colors duration-500 group-hover:bg-navy/10"
                  />
                </span>
                <span className="mt-[clamp(0.75rem,1.2vw,1.25rem)] flex items-center justify-between gap-3">
                  <span className="heading-display text-[clamp(1.125rem,1.55vw,1.75rem)] text-copy">
                    {card.label}
                  </span>
                  <ArrowRight className="size-[clamp(1.1rem,1.3vw,1.5rem)] shrink-0 text-orange transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
