import type { Metadata } from "next";

import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, sectionY } from "@/components/sustainability/blocks";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { compliancePage as page } from "@/content/about";
import { complianceDocuments, whistleblowingPortal } from "@/content/documents";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/compliance" },
  openGraph: {
    ...sharedOpenGraph,
    title: page.meta.title,
    description: page.meta.description,
    url: "/about/compliance",
  },
};

export default function CompliancePage() {
  const { hero, sections } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="compliance"
        imagePosition="50% 40%"
      />

      <div
        id="compliance"
        className={`container-site scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)] pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="grid gap-[clamp(2.5rem,5vw,6rem)] md:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)]">
          {/* In-page index: stays in view while reading */}
          <nav aria-label="On this page" className="self-start md:sticky md:top-28">
            <ol className="border-t border-grey-50/70">
              {sections.map((section, index) => (
                <li key={section.id} className="border-b border-grey-50/70">
                  <a
                    href={`#${section.id}`}
                    className="group flex items-baseline gap-4 py-[0.9em] text-body-sm text-copy transition-colors hover:text-orange-ink"
                  >
                    <span className="text-eyebrow font-medium text-orange-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-[clamp(4rem,7vw,8rem)]">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="reveal scroll-mt-28"
              >
                <h2 id={`${section.id}-title`} className="heading-display text-section text-copy">
                  {section.title}
                </h2>
                <Paragraphs
                  items={section.paragraphs}
                  className="mt-[clamp(1.25rem,2vw,2.25rem)] max-w-[52rem] space-y-[1.15em]"
                />

                {"document" in section ? (
                  <DocumentCard
                    document={complianceDocuments[section.document]}
                    className="mt-[clamp(1.75rem,2.8vw,3rem)] max-w-[34rem]"
                  />
                ) : null}

                {"portal" in section ? (
                  <a
                    href={whistleblowingPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-[clamp(1.75rem,2.8vw,3rem)] flex max-w-[34rem] items-center gap-[clamp(1rem,1.6vw,1.5rem)] rounded-xl bg-navy p-[clamp(1.25rem,1.8vw,1.75rem)] text-white"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block text-body-sm font-semibold">
                        {section.portal.label}
                      </span>
                      <span className="mt-0.5 block text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-light text-white/70">
                        {section.portal.note}
                      </span>
                    </span>
                    <span className="inline-flex size-[clamp(2.5rem,2.8vw,3.25rem)] shrink-0 items-center justify-center rounded-full bg-orange text-white transition-transform duration-500 ease-out-expo group-hover:scale-110">
                      <ArrowUpRight className="size-[45%]" />
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
