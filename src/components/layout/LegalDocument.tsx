import { TitleBand } from "@/components/layout/TitleBand";
import { ArticleBody } from "@/components/news/ArticleBody";
import type { LegalPage } from "@/content/legal";

const noImages = new Map();

/** A legal page: the navy title band, then its text in the article type styles. */
export function LegalDocument({ page }: { page: LegalPage }) {
  return (
    <>
      <TitleBand eyebrow="Legal" title={page.title} breadcrumb={[{ label: page.title }]}>
        {page.updated ? (
          <p className="mt-8 text-body-sm font-light text-white/75">Last updated {page.updated}</p>
        ) : null}
      </TitleBand>

      <article
        aria-labelledby="page-title"
        className="container-site pt-[clamp(3rem,5vw,6rem)] pb-[clamp(4.5rem,7vw,8.5rem)]"
      >
        <div className="mx-auto max-w-[52rem] space-y-[clamp(4rem,7vw,8rem)]">
          {page.sections.map((section, index) => (
            <section
              key={section.id ?? index}
              id={section.id}
              aria-labelledby={section.title ? `${section.id}-title` : undefined}
              className="scroll-mt-28"
            >
              {section.title ? (
                <div className="mb-[clamp(1.25rem,2vw,2.25rem)]">
                  <h2 id={`${section.id}-title`} className="heading-display text-section text-copy">
                    {section.title}
                  </h2>
                  {section.updated ? (
                    <p className="mt-4 text-body-sm font-light text-ink-muted">
                      Last updated {section.updated}
                    </p>
                  ) : null}
                </div>
              ) : null}
              <ArticleBody markdown={section.markdown} images={noImages} title={page.title} />
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
