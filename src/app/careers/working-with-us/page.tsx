import type { Metadata } from "next";

import { ValuesExplorer } from "@/components/about/ValuesExplorer";
import { CareersNav } from "@/components/careers/CareersNav";
import { benefitIcons } from "@/components/icons/benefits";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, Photo, sectionY, split } from "@/components/sustainability/blocks";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RichText } from "@/components/ui/RichText";
import { aboutPage } from "@/content/about";
import { careersPages, workingWithUs as page } from "@/content/careers";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: careersPages.workingWithUs.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: careersPages.workingWithUs.href,
  },
};

export default function WorkingWithUsPage() {
  const { hero, vision, development, benefits } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="vision-and-values"
        imagePosition="50% 35%"
      />

      {/* Our vision and values */}
      <section
        id="vision-and-values"
        aria-labelledby="vision-eyebrow"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <div className={`items-center ${split.textImage}`}>
            <div className="reveal">
              <Eyebrow as="h2" id="vision-eyebrow">
                {vision.eyebrow}
              </Eyebrow>
              <p className="mt-[clamp(1.5rem,2.6vw,3rem)] font-serif text-quote font-light text-pretty text-copy">
                <RichText line={vision.statement} strongClassName="font-normal text-orange-ink" />
              </p>
            </div>
            <Photo
              image={vision.image}
              alt={vision.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="mt-[clamp(4rem,7vw,8rem)]">
            <ValuesExplorer title={vision.valuesTitle} items={aboutPage.values.items} />
          </div>
        </div>
      </section>

      {/* Personal and professional development */}
      <section aria-labelledby="development-title" className={sectionY}>
        <div className={`container-site items-center ${split.imageText}`}>
          <Photo
            image={development.image}
            alt={development.imageAlt}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="reveal">
            <h2 id="development-title" className="heading-display text-section text-copy">
              {development.title}
            </h2>
            <Paragraphs
              items={development.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
            <aside className="mt-[clamp(1.75rem,2.8vw,3rem)] rounded-xl border-l-2 border-orange bg-panel p-[clamp(1.25rem,2vw,2rem)]">
              <p className="heading-display text-[clamp(1.25rem,1.6vw,1.875rem)] text-copy">
                {development.academy.name}
              </p>
              <p className="mt-2 text-body-sm font-light text-pretty text-copy">
                {development.academy.text}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Employee benefits */}
      <section
        aria-labelledby="benefits-title"
        className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <div className="reveal max-w-[52rem]">
            <h2 id="benefits-title" className="heading-display text-section text-copy">
              {benefits.title}
            </h2>
            <p className="mt-[clamp(1.25rem,2vw,2.25rem)] font-serif text-quote font-light text-pretty text-copy">
              {benefits.intro}
            </p>
          </div>

          <div className={`mt-[clamp(2.5rem,4vw,5rem)] items-center ${split.textImage}`}>
            <div className="reveal">
              <p className="text-body font-medium text-copy">{benefits.listIntro}</p>
              <ul className="mt-[clamp(1rem,1.6vw,1.75rem)] grid gap-px overflow-hidden rounded-xl bg-grey-50/60 sm:grid-cols-2">
                {benefits.items.map((item) => {
                  const Icon = benefitIcons[item.icon];
                  return (
                    <li
                      key={item.text}
                      className="flex flex-col gap-[clamp(0.75rem,1.2vw,1.25rem)] bg-panel p-[clamp(1.25rem,2vw,2rem)]"
                    >
                      <Icon className="size-[clamp(2.25rem,2.6vw,3rem)] text-navy" />
                      <span className="text-body-sm font-light text-pretty text-copy">
                        {item.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Photo
              image={benefits.image}
              alt={benefits.imageAlt}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <CareersNav current={careersPages.workingWithUs.href} />
    </>
  );
}
