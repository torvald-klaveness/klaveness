import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { CountUp } from "@/components/ui/CountUp";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { financialsPage as page } from "@/content/about";
import { annualReports } from "@/content/documents";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/about/financials" },
  openGraph: {
    ...sharedOpenGraph,
    title: page.meta.title,
    description: page.meta.description,
    url: "/about/financials",
  },
};

export default function FinancialsPage() {
  const { hero, keyFinancials: kf, reports } = page;
  const [latest, ...earlier] = annualReports;
  const previousYear = kf.years[1];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="key-financials"
        imagePosition="50% 60%"
      />

      {/* Key financials: headline figures, then the full table */}
      <section
        id="key-financials"
        aria-labelledby="key-financials-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <h2 id="key-financials-title" className="heading-display text-section text-copy">
              {kf.title}
            </h2>
            <p className="text-body-sm font-light text-ink-muted">{kf.unit}</p>
          </div>

          {/* Label and figure rows are shared, so figures line up even when a label wraps. */}
          <dl className="reveal mt-[clamp(2rem,3.4vw,4rem)] grid grid-cols-2 border-t border-copy lg:grid-cols-4">
            {kf.highlights.map((item, index) => (
              <div
                key={item.label}
                className={`row-span-2 grid grid-rows-subgrid gap-y-0 border-b border-grey-50/70 py-[clamp(1.25rem,2.2vw,2.5rem)] lg:border-b-0 ${
                  index % 2 === 1 ? "pl-[clamp(1rem,2vw,2.5rem)]" : "pr-[clamp(1rem,2vw,2.5rem)]"
                } ${index > 0 ? "lg:border-l lg:border-grey-50/70 lg:pl-[clamp(1rem,2vw,2.5rem)]" : ""} lg:pr-[clamp(1rem,2vw,2.5rem)]`}
              >
                <dt className="text-body-sm font-medium text-copy">{item.label}</dt>
                <dd className="mt-[clamp(0.75rem,1.4vw,1.5rem)]">
                  <span className="heading-display block text-[clamp(2.5rem,4.6vw,5.5rem)] leading-none text-copy">
                    <CountUp value={item.values[0]} prefix={item.prefix} suffix={item.suffix} />
                  </span>
                  <span className="mt-[clamp(0.5rem,0.9vw,1rem)] block text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-light text-ink-muted">
                    {item.unit ? `${item.unit} · ` : ""}
                    {previousYear}: {item.values[1]}
                    {item.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="reveal mt-[clamp(3rem,5vw,6rem)] overflow-x-auto">
            <table className="w-full border-collapse text-left text-body-sm text-copy">
              <caption className="sr-only">
                {kf.title}, {kf.unit.toLowerCase()}, {kf.years.join(", ")}
              </caption>
              <thead>
                <tr className="border-b border-copy">
                  <th scope="col" className="py-[0.9em] pr-3 font-medium sm:pr-6">
                    {kf.unit}
                  </th>
                  {kf.years.map((year, index) => (
                    <th
                      key={year}
                      scope="col"
                      className={`w-[3.5rem] px-2 py-[0.9em] text-right font-serif text-[1.15em] font-bold sm:w-[clamp(5rem,9vw,9rem)] sm:px-[clamp(0.75rem,1.4vw,1.5rem)] ${
                        index === 0 ? "rounded-t-xl bg-panel" : ""
                      }`}
                    >
                      {year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kf.groups.map((group) => (
                  <Fragment key={group.title}>
                    <tr>
                      <th
                        scope="rowgroup"
                        className="pt-[2em] pb-[0.6em] text-eyebrow font-semibold tracking-[0.04em] text-orange-ink uppercase"
                      >
                        {group.title}
                        {"note" in group ? <sup className="ml-0.5">{group.note}</sup> : null}
                      </th>
                      <td aria-hidden className="bg-panel" />
                      <td aria-hidden />
                      <td aria-hidden />
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-t border-grey-50/70">
                        <th scope="row" className="py-[0.8em] pr-3 font-light sm:pr-6">
                          {row.label}
                          {"note" in row ? <sup className="ml-0.5">{row.note}</sup> : null}
                        </th>
                        {row.values.map((value, index) => (
                          <td
                            key={index}
                            className={`px-2 py-[0.8em] text-right tabular-nums sm:px-[clamp(0.75rem,1.4vw,1.5rem)] ${
                              index === 0 ? "bg-panel font-semibold" : "font-light"
                            }`}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-copy">
                  <td colSpan={4} className="pt-[1.2em]">
                    <ol className="space-y-1 text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-light text-ink-muted">
                      {kf.notes.map((note, index) => (
                        <li key={note}>
                          <sup className="mr-1">{index + 1}</sup>
                          {note}
                        </li>
                      ))}
                    </ol>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Financial reports */}
      <section
        aria-labelledby="reports-title"
        className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
      >
        <div className="container-site">
          <h2 id="reports-title" className="reveal heading-display text-section text-copy">
            {reports.title}
          </h2>

          <div className="mt-[clamp(2rem,3.4vw,4rem)] grid gap-[clamp(1.25rem,2.4vw,2.5rem)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            {/* Latest report, featured with its cover */}
            <a
              href={latest.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group reveal grid h-full grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] items-center gap-[clamp(1.25rem,2vw,2rem)] rounded-media bg-panel p-[clamp(1.25rem,2.4vw,2.75rem)]"
            >
              <span className="relative block overflow-hidden rounded-[0.5rem] shadow-[0_24px_40px_-20px_rgb(0_20_70/0.45)] transition-transform duration-700 ease-out-expo group-hover:-translate-y-1.5">
                <Image
                  src={reports.cover}
                  alt={reports.coverAlt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 18vw, 45vw"
                  className="h-auto w-full"
                />
              </span>
              <span className="block">
                <Eyebrow>Latest</Eyebrow>
                <span className="heading-display mt-[clamp(0.75rem,1.2vw,1.25rem)] block text-[clamp(2.5rem,4.2vw,5rem)] leading-none text-copy">
                  {latest.year}
                </span>
                <span className="mt-[clamp(0.5rem,0.8vw,0.875rem)] block text-body-sm font-light text-copy">
                  Torvald Klaveness Annual Report
                </span>
                <span className="mt-[clamp(1rem,1.6vw,1.75rem)] inline-flex items-center gap-2 text-body-sm font-semibold text-copy">
                  Download PDF
                  <span className="font-light text-ink-muted">· {latest.size}</span>
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </span>
            </a>

            {/* Earlier reports */}
            {/* Two columns of three: same height as the featured report. */}
            <ul className="reveal reveal-delay-1 grid auto-rows-fr gap-3 sm:grid-cols-2">
              {earlier.map((report) => (
                <li key={report.year}>
                  <DocumentCard
                    document={report}
                    label={String(report.year)}
                    kind="Annual Report"
                    tone="light"
                    className="h-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
