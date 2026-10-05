"use client";

import { useEffect, useState } from "react";

import { offices } from "@/content/offices";
import { isDaylight } from "@/lib/solar";

/**
 * The five offices with their live local time, west to east. A small sun or
 * moon dot shows whether it is day or night there right now.
 */
export function OfficeClocks() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const timer = window.setInterval(tick, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const sorted = [...offices].sort((a, b) => a.lon - b.lon);

  return (
    <ul
      aria-label="Local time at our offices"
      className="grid grid-cols-3 border-t border-grey-50/70 sm:grid-cols-5"
    >
      {sorted.map((office) => {
        const day = now ? isDaylight(now, office.lat, office.lon) : true;
        const time = now
          ? new Intl.DateTimeFormat("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: office.timeZone,
            }).format(now)
          : "––:––";
        return (
          <li
            key={office.city}
            className="border-b border-grey-50/70 py-[clamp(0.9rem,1.4vw,1.5rem)] pr-3"
          >
            <span className="flex items-center gap-2 text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-medium text-copy">
              <span
                aria-hidden
                className={`size-2 rounded-full ${day ? "bg-orange" : "bg-blue-light"}`}
              />
              {office.city}
            </span>
            <time className="heading-display mt-1 block text-[clamp(1.5rem,2.2vw,2.5rem)] leading-none text-copy tabular-nums">
              {time}
            </time>
            <span className="sr-only">{now ? (day ? "daytime" : "night-time") : ""}</span>
          </li>
        );
      })}
    </ul>
  );
}
