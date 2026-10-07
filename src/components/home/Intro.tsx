import Link from "next/link";

import { pillarIcons } from "@/components/icons";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { home } from "@/content/home";

export function Intro() {
  const { intro, entryPoints } = home;

  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-title"
      className="scroll-mt-16 pt-28 pb-24 md:pt-40 md:pb-32"
    >
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="reveal md:col-span-7">
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h2 id="who-we-are-title" className="heading-display mt-8 text-section text-copy">
              {intro.title}
            </h2>
          </div>
          <div className="reveal reveal-delay-1 md:col-span-4 md:col-start-9 md:pt-16">
            <p className="prose-soft text-body">{intro.body}</p>
            <ArrowLink href={intro.link.href} className="mt-6">
              {intro.link.label}
            </ArrowLink>
          </div>
        </div>

        {/* Entry points: News, Trading Efficiency, Sustainability */}
        <ul className="reveal mt-20 grid rounded-media bg-panel px-6 py-4 md:mt-28 md:grid-cols-3 md:px-4 md:py-12">
          {entryPoints.map((entry, index) => {
            const Icon = pillarIcons[entry.icon];
            return (
              <li
                key={entry.title}
                className={`flex flex-col items-center px-4 py-10 text-center md:py-2 lg:px-10 ${
                  index > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""
                }`}
              >
                <Icon className="size-[clamp(2.25rem,2.6vw,3rem)] text-copy" strokeWidth={1.1} />
                <h3 className="mt-5 text-[clamp(1.125rem,1.35vw,1.625rem)] font-medium text-copy">
                  {entry.title}
                </h3>
                <Link
                  href={entry.href}
                  className="mt-6 inline-flex h-[clamp(2.25rem,2.3vw,2.75rem)] items-center rounded-md border border-grey-50 px-5 text-[clamp(0.8125rem,0.94vw,1.125rem)] text-copy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  Read more<span className="sr-only"> about {entry.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
