"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import { people, type PersonSlug, type Team } from "@/content/leadership";

const isPerson = (value: string): value is PersonSlug => value in people;

/**
 * Leadership teams as portrait cards. A card opens that person's bio in a
 * side panel (native <dialog>: focus trap, Esc and screen-reader support).
 * The URL hash follows the open bio (#ernst-meyer), so bios can be linked to —
 * the old klaveness.com bio pages redirect here.
 */
export function PeopleDirectory({ teams }: { teams: readonly Readonly<Team>[] }) {
  const dialogs = useRef<Partial<Record<PersonSlug, HTMLDialogElement | null>>>({});

  const open = useCallback((slug: PersonSlug) => {
    const dialog = dialogs.current[slug];
    if (!dialog || dialog.open) return;
    dialog.showModal();
    if (window.location.hash !== `#${slug}`) {
      window.history.replaceState(null, "", `#${slug}`);
    }
  }, []);

  // Open the bio named in the URL hash, on load and when the hash changes.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (isPerson(slug)) open(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [open]);

  const onClose = (slug: PersonSlug) => {
    if (window.location.hash === `#${slug}`) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const slugs = [...new Set(teams.flatMap((team) => team.members))];

  return (
    <>
      {teams.map((team) => {
        const compact = team.layout === "compact";
        return (
          <section
            key={team.id}
            id={team.id}
            aria-labelledby={`${team.id}-title`}
            className="scroll-mt-24 py-[clamp(3rem,5vw,6rem)] first:pt-0 last:pb-0"
          >
            <h2 id={`${team.id}-title`} className="reveal heading-display text-section text-copy">
              {team.title}
            </h2>
            <ul
              // Each card spans three shared rows (photo, name, role), so names and
              // roles line up across a row even when a name wraps to two lines.
              className={`mt-[clamp(1.75rem,3vw,3.5rem)] grid grid-cols-2 gap-x-[clamp(1rem,2vw,2.5rem)] gap-y-[clamp(2rem,3.4vw,4rem)] ${
                compact ? "md:grid-cols-3 lg:grid-cols-5" : "md:grid-cols-3 lg:grid-cols-4"
              }`}
            >
              {team.members.map((slug, index) => {
                const person = people[slug];
                return (
                  <li
                    key={slug}
                    className={`reveal row-span-3 grid grid-rows-subgrid gap-y-0 ${index % 4 ? `reveal-delay-${Math.min(index % 4, 2)}` : ""}`}
                  >
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      onClick={() => open(slug)}
                      className="group row-span-3 grid w-full grid-rows-subgrid gap-y-0 text-left"
                    >
                      <span className="relative block aspect-[4/5] overflow-hidden rounded-media bg-mist">
                        <Image
                          src={person.image}
                          alt=""
                          fill
                          placeholder="blur"
                          sizes={
                            compact
                              ? "(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 46vw"
                              : "(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 46vw"
                          }
                          className="object-cover object-[50%_20%] transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
                        />
                        <span
                          aria-hidden
                          className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-500 ease-out-expo group-hover:rotate-90"
                        >
                          <svg
                            viewBox="0 0 16 16"
                            className="size-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          >
                            <path d="M8 2v12M2 8h12" />
                          </svg>
                        </span>
                      </span>
                      <span
                        className={`heading-display mt-[clamp(0.9rem,1.3vw,1.5rem)] block text-copy ${
                          compact
                            ? "text-[clamp(1.0625rem,1.3vw,1.5rem)]"
                            : "text-[clamp(1.125rem,1.55vw,1.875rem)]"
                        }`}
                      >
                        {person.name}
                      </span>
                      <span className="mt-1.5 block text-body-sm font-light text-pretty text-copy">
                        {person.role}
                      </span>
                      <span className="sr-only">: read bio</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {slugs.map((slug) => {
        const person = people[slug];
        return (
          <dialog
            key={slug}
            id={slug}
            ref={(el) => {
              dialogs.current[slug] = el;
            }}
            aria-labelledby={`${slug}-name`}
            onClose={() => onClose(slug)}
            onClick={(event) => {
              if (event.target === event.currentTarget) event.currentTarget.close();
            }}
            className="fixed inset-0 m-0 ml-auto h-dvh max-h-none w-full max-w-[min(40rem,100%)] translate-x-full bg-white p-0 text-copy shadow-[-24px_0_80px_-20px_rgb(0_20_70/0.35)] transition-[translate,overlay,display] transition-discrete duration-500 ease-out-expo backdrop:bg-navy/55 backdrop:opacity-0 backdrop:backdrop-blur-[2px] backdrop:transition-[opacity,overlay,display] backdrop:transition-discrete backdrop:duration-500 open:translate-x-0 open:backdrop:opacity-100 starting:open:translate-x-full starting:open:backdrop:opacity-0"
          >
            <div className="flex min-h-full flex-col px-[clamp(1.5rem,3.5vw,3.5rem)] pt-[clamp(1.25rem,2vw,2rem)] pb-[clamp(2rem,4vw,4rem)]">
              <form method="dialog" className="flex justify-end">
                <button
                  type="submit"
                  aria-label="Close"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-grey-50 transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="m3 3 10 10M13 3 3 13" />
                  </svg>
                </button>
              </form>

              <div className="mt-[clamp(1rem,2vw,2rem)] grid grid-cols-[clamp(6.5rem,12vw,10rem)_1fr] items-end gap-[clamp(1rem,2vw,2rem)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-media bg-mist">
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    fill
                    placeholder="blur"
                    sizes="160px"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <div>
                  <h2 id={`${slug}-name`} className="heading-display text-title text-copy">
                    {person.name}
                  </h2>
                  <p className="mt-2 flex items-center gap-3 text-body-sm font-medium text-copy">
                    <span aria-hidden className="h-px w-6 shrink-0 bg-orange" />
                    {person.role}
                  </p>
                </div>
              </div>

              <div className="mt-[clamp(1.75rem,3vw,3rem)] space-y-[1em] border-t border-grey-50/70 pt-[clamp(1.5rem,2.6vw,2.5rem)] text-body font-light text-pretty text-copy">
                {person.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </dialog>
        );
      })}
    </>
  );
}
