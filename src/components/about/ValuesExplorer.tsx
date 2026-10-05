"use client";

import { type KeyboardEvent, useId, useRef, useState } from "react";

import { valueIcons } from "@/components/icons/values";

type Value = {
  name: string;
  lead: string;
  points: readonly string[];
};

/**
 * The four values as a large list (tabs); the selected value's principles
 * show in a panel beside it.
 *
 * Balance: all panels are stacked in one grid cell, so the panel always has
 * the height of the longest value and never jumps; the list rows stretch to
 * that same height, so both columns start and end on the same lines.
 */
export function ValuesExplorer({ title, items }: { title: string; items: readonly Value[] }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const delta = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + items.length) % items.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <>
      <h2
        id="values-title"
        className="reveal max-w-[44rem] font-serif text-quote font-light text-pretty text-copy"
      >
        {title}
      </h2>

      <div className="reveal mt-[clamp(2.5rem,4vw,5rem)] grid gap-8 lg:grid-cols-[minmax(0,1fr)_50%] lg:gap-[5.3%]">
        <div
          role="tablist"
          aria-labelledby="values-title"
          aria-orientation="vertical"
          className="flex flex-col border-t border-grey-50/70"
        >
          {items.map((value, i) => {
            const selected = i === active;
            const Icon = valueIcons[value.name];
            return (
              <button
                key={value.name}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onKeyDown={onKeyDown}
                className="group relative flex flex-1 items-center gap-[clamp(1rem,1.8vw,2.25rem)] border-b border-grey-50/70 py-[clamp(1rem,1.5vw,1.75rem)] text-left"
              >
                <Icon
                  className={`size-[clamp(2.25rem,2.6vw,3.25rem)] shrink-0 transition-colors duration-300 ${
                    selected ? "text-orange" : "text-ink-faint group-hover:text-ink-muted"
                  }`}
                />
                <span
                  className={`heading-display text-section transition-colors duration-300 ${
                    selected ? "text-copy" : "text-ink-faint group-hover:text-ink-muted"
                  }`}
                >
                  {value.name}
                </span>
                {/* Orange rule marks the selected row. */}
                <span
                  aria-hidden
                  className={`absolute bottom-[-1px] left-0 h-px bg-orange transition-[width] duration-500 ease-out-expo ${
                    selected ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="grid">
          {items.map((value, i) => {
            const selected = i === active;
            const Icon = valueIcons[value.name];
            return (
              <div
                key={value.name}
                role="tabpanel"
                id={`${id}-panel-${i}`}
                aria-labelledby={`${id}-tab-${i}`}
                aria-hidden={!selected}
                inert={!selected}
                className={`flex flex-col rounded-media bg-panel p-[clamp(1.75rem,3.6vw,4.25rem)] transition-opacity duration-500 ease-out-expo [grid-area:1/1] ${
                  selected ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-[24rem] font-serif text-quote font-light text-pretty text-copy">
                    {value.lead.replace(/:$/, "")}
                  </p>
                  <Icon className="size-[clamp(3.5rem,4.4vw,5.25rem)] shrink-0 text-navy" />
                </div>
                {/* Flexible spacer: keeps the principles anchored to the bottom. */}
                <div aria-hidden className="min-h-[clamp(1.5rem,2.6vw,3rem)] flex-1" />
                <ul className="divide-y divide-grey-50/70 border-y border-grey-50/70 text-body font-light text-copy">
                  {value.points.map((point) => (
                    <li key={point} className="flex items-baseline gap-4 py-[0.65em]">
                      <span
                        aria-hidden
                        className="h-px w-4 shrink-0 -translate-y-[0.3em] bg-orange"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
