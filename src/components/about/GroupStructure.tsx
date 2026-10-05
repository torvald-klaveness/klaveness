import Link from "next/link";

import { ArrowUpRight } from "@/components/icons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { governancePage } from "@/content/about";

const { structure } = governancePage;

/** Vertical connector between levels, with an orange junction dot. */
function Connector({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative block w-px bg-white/30 ${className}`}>
      <span className="absolute -bottom-[3px] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-orange" />
    </span>
  );
}

function Node({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="w-full max-w-[34rem] rounded-xl bg-white/[0.06] px-[clamp(1.25rem,2vw,2rem)] py-[clamp(1rem,1.6vw,1.5rem)] text-center ring-1 ring-white/15">
      <p className="heading-display text-[clamp(1.25rem,1.7vw,2rem)]">{name}</p>
      <p className="mt-1.5 text-body-sm font-light text-white/70">{detail}</p>
    </div>
  );
}

/** Group structure, drawn from the facts on the Governance page. */
export function GroupStructure() {
  return (
    <figure
      aria-labelledby="structure-title"
      className="rounded-media bg-navy px-[clamp(1.25rem,4vw,5rem)] py-[clamp(2.5rem,5vw,6rem)] text-white"
    >
      <Eyebrow as="h2" id="structure-title" tone="light">
        {structure.eyebrow}
      </Eyebrow>

      <div className="mt-[clamp(2rem,3.6vw,4rem)] flex flex-col items-center">
        <Node {...structure.owner} />
        <Connector className="h-[clamp(1.75rem,3vw,3rem)]" />
        <Node {...structure.holding} />
        <Connector className="h-[clamp(1.75rem,3vw,3rem)]" />

        <ul className="relative grid w-full gap-4 [--gap:clamp(1rem,2vw,2rem)] md:grid-cols-3 md:gap-(--gap)">
          {/* Horizontal bus from the first to the last company's centre (desktop). */}
          <span
            aria-hidden
            className="absolute inset-x-[calc((100%-2*var(--gap))/6)] top-0 hidden h-px bg-white/30 md:block"
          />
          {structure.companies.map((company) => {
            const content = (
              <>
                <span className="heading-display block text-[clamp(2.5rem,4.2vw,4.75rem)] leading-none text-white">
                  {company.share}
                </span>
                <span className="mt-[clamp(0.75rem,1.2vw,1.25rem)] flex items-center gap-2 text-body-sm font-semibold">
                  {company.name}
                  {company.external ? (
                    <ArrowUpRight
                      aria-hidden
                      className="size-[0.9em] shrink-0 text-orange transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  ) : null}
                </span>
                <span className="mt-1 block text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-light text-white/65">
                  {company.detail}
                </span>
                {company.external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </>
            );
            const cardClass =
              "group block h-full rounded-xl bg-white/[0.06] p-[clamp(1.25rem,2vw,2rem)] ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/[0.1]";
            return (
              <li key={company.name} className="flex flex-col items-center">
                {/* On phones the companies stack under the holding connector instead. */}
                <Connector className="hidden h-[clamp(1.5rem,2.6vw,2.75rem)] md:block" />
                <div className="w-full flex-1">
                  {company.external ? (
                    <a
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={company.href} className={cardClass}>
                      {content}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <figcaption className="mt-[clamp(2rem,3.4vw,3.5rem)] flex items-start gap-3 border-t border-white/15 pt-[clamp(1.25rem,2vw,2rem)] text-body-sm font-light text-white/70">
        <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-orange" />
        {structure.footnote}
      </figcaption>
    </figure>
  );
}
