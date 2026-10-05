"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

import type { TeamGroup, TeamPerson, TeamSection } from "@/content/team";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

type Props = {
  sections: TeamSection[];
  /** Section id → page with bios (e.g. the Executive Committee). */
  bioLinks: Record<string, string>;
  /** Person name → their bio, so leaders' names link to it wherever they appear. */
  bios: Record<string, string>;
  officesHref: string;
};

/**
 * Searchable team directory. Everything is rendered on the server (so it can be
 * indexed); typing or picking an office filters it in place.
 */
export function TeamDirectory({ sections, bioLinks, bios, officesHref }: Props) {
  const [query, setQuery] = useState("");
  const [office, setOffice] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(query);

  const offices = useMemo(() => {
    const all = sections.flatMap((s) =>
      s.departments.flatMap((d) => d.groups.flatMap((g) => g.people.map((p) => p.office))),
    );
    return [...new Set(all.filter((o): o is string => Boolean(o)))];
  }, [sections]);

  const filtered = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    const matches = (p: TeamPerson, context: string) =>
      (!office || p.office === office) &&
      (!q || normalize(`${p.name} ${p.role} ${p.office ?? ""} ${context}`).includes(q));

    return sections
      .map((section) => ({
        ...section,
        departments: section.departments
          .map((dep) => ({
            ...dep,
            groups: dep.groups
              .map((group) => ({
                ...group,
                people: group.people.filter((p) =>
                  matches(p, `${section.title} ${dep.title} ${group.title ?? ""}`),
                ),
              }))
              // Keep team-email-only groups (e.g. Marine Accounting) when not filtering.
              .filter((g) => g.people.length || (!q && !office && g.emails.length)),
          }))
          .filter((d) => d.groups.length),
      }))
      .filter((s) => s.departments.length);
  }, [sections, deferredQuery, office]);

  const total = sections.reduce(
    (n, s) =>
      n + s.departments.reduce((m, d) => m + d.groups.reduce((k, g) => k + g.people.length, 0), 0),
    0,
  );
  const shown = filtered.reduce(
    (n, s) =>
      n + s.departments.reduce((m, d) => m + d.groups.reduce((k, g) => k + g.people.length, 0), 0),
    0,
  );
  const filtering = Boolean(query.trim() || office);

  return (
    <div>
      {/* Toolbar: search, office filter, jump links */}
      <div className="reveal grid gap-[clamp(1rem,1.6vw,1.75rem)] rounded-media bg-panel p-[clamp(1.25rem,2.4vw,2.75rem)]">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search by name, role or department</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-ink-muted"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, role or department"
              className="h-[clamp(3rem,3.4vw,3.75rem)] w-full rounded-full bg-white pr-5 pl-12 text-body-sm text-copy ring-1 ring-grey-50 transition-shadow outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-navy"
            />
          </label>
          <div role="group" aria-label="Filter by office" className="flex flex-wrap gap-2">
            {[null, ...offices].map((value) => {
              const active = office === value;
              return (
                <button
                  key={value ?? "all"}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setOffice(value)}
                  className={`h-10 rounded-full px-4 text-[clamp(0.8125rem,0.94vw,1rem)] font-medium transition-colors ${
                    active
                      ? "bg-navy text-white"
                      : "bg-white text-copy ring-1 ring-grey-50 hover:ring-navy"
                  }`}
                >
                  {value ?? "All offices"}
                </button>
              );
            })}
          </div>
        </div>
        <nav
          aria-label="Jump to"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-grey-50/70 pt-4 text-[clamp(0.8125rem,0.94vw,1rem)]"
        >
          <Link href={officesHref} className="font-medium text-orange-ink hover:underline">
            Head Offices
          </Link>
          {filtered.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-copy hover:underline">
              {section.title}
            </a>
          ))}
        </nav>
      </div>

      <p
        aria-live="polite"
        className="mt-[clamp(1.25rem,2vw,2rem)] text-body-sm font-light text-ink-muted"
      >
        {filtering ? `${shown} of ${total} people shown` : `${total} people listed`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-media border border-dashed border-grey-50 p-10 text-center">
          <p className="text-body text-copy">No one matches your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOffice(null);
            }}
            className="mt-4 text-body-sm font-semibold text-orange-ink underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : null}

      <div className="mt-[clamp(1.5rem,3vw,3.5rem)] space-y-[clamp(3.5rem,6vw,7rem)]">
        {filtered.map((section) => {
          // Leadership lists have no departments: show them as one grid of people.
          const flat = section.departments.every((dep) => !dep.title);
          const bioPage = bioLinks[section.id];
          return (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-24"
            >
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-copy pb-[clamp(0.75rem,1.2vw,1.25rem)]">
                <h2 id={`${section.id}-title`} className="heading-display text-section text-copy">
                  {section.title}
                </h2>
                {bioPage ? (
                  <Link
                    href={bioPage}
                    className="text-body-sm font-semibold text-copy underline decoration-grey-50 underline-offset-4 hover:decoration-orange"
                  >
                    View bios
                  </Link>
                ) : null}
              </div>

              {flat ? (
                <ul
                  className={`mt-[clamp(1.5rem,2.4vw,2.75rem)] sm:grid-cols-2 lg:grid-cols-3 ${peopleGrid}`}
                >
                  {section.departments
                    .flatMap((d) => d.groups.flatMap((g) => g.people))
                    .map((person) => (
                      <PersonRow key={person.name} person={person} bio={bios[person.name]} />
                    ))}
                </ul>
              ) : (
                <div className="divide-y divide-grey-50/70">
                  {section.departments.map((dep) => {
                    // Emails of the department's main (untitled) group sit under its name.
                    const emails = dep.groups.filter((g) => !g.title).flatMap((g) => g.emails);
                    return (
                      <article
                        key={dep.title}
                        className="grid gap-y-5 py-[clamp(1.75rem,3vw,3.5rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-x-[clamp(2rem,4vw,5rem)]"
                      >
                        <header className="md:sticky md:top-28 md:self-start">
                          <h3 className="heading-display text-[clamp(1.375rem,1.8vw,2.125rem)] text-copy">
                            {dep.title}
                          </h3>
                          <Emails emails={emails} className="mt-2" />
                        </header>
                        <div className="space-y-[clamp(1.75rem,2.6vw,2.75rem)]">
                          {dep.groups.map((group, index) => (
                            <Group key={(group.title ?? "") + index} group={group} bios={bios} />
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

const peopleGrid = "grid gap-x-[clamp(1.5rem,3vw,3.5rem)] gap-y-[clamp(1.25rem,1.8vw,2rem)]";

function Emails({ emails, className = "" }: { emails: string[]; className?: string }) {
  if (!emails.length) return null;
  return (
    <p className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {emails.map((email) => (
        <a
          key={email}
          href={`mailto:${email}`}
          className="text-body-sm font-medium [overflow-wrap:anywhere] text-orange-ink underline decoration-orange/40 underline-offset-4 hover:decoration-orange"
        >
          {email}
        </a>
      ))}
    </p>
  );
}

/** A team inside a department: optional sub-heading and email, then its people. */
function Group({ group, bios }: { group: TeamGroup; bios: Record<string, string> }) {
  return (
    <div>
      {group.title ? (
        <div className="mb-[clamp(0.75rem,1.1vw,1.1rem)]">
          <h4 className="text-eyebrow font-semibold tracking-[0.04em] text-orange-ink uppercase">
            {group.title}
          </h4>
          <Emails emails={group.emails} className="mt-1.5" />
        </div>
      ) : null}
      {group.people.length ? (
        <ul className={`sm:grid-cols-2 ${peopleGrid}`}>
          {group.people.map((person) => (
            <PersonRow key={person.name + person.role} person={person} bio={bios[person.name]} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function PersonRow({ person, bio }: { person: TeamPerson; bio?: string }) {
  return (
    <li>
      <div className="flex items-baseline justify-between gap-3">
        {bio ? (
          <Link
            href={bio}
            className="text-body-sm font-semibold text-copy underline decoration-orange/50 underline-offset-4 hover:decoration-orange"
          >
            {person.name}
            <span className="sr-only"> (bio)</span>
          </Link>
        ) : (
          <span className="text-body-sm font-semibold text-copy">{person.name}</span>
        )}
        {person.office ? (
          <span className="shrink-0 text-[clamp(0.75rem,0.86vw,0.9375rem)] font-medium text-ink-muted">
            {person.office}
          </span>
        ) : null}
      </div>
      <p className="mt-0.5 text-body-sm font-light text-pretty text-copy">{person.role}</p>
      {person.email ? (
        <a
          href={`mailto:${person.email}`}
          className="mt-1 inline-block text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-medium [overflow-wrap:anywhere] text-orange-ink underline decoration-orange/40 underline-offset-4 hover:decoration-orange"
        >
          {person.email}
        </a>
      ) : null}
    </li>
  );
}
