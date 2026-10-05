"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

import { offices } from "@/content/offices";
import { isDaylight, nightPolygon } from "@/lib/solar";
import { LAT_BOTTOM, LAT_TOP, mapCssVars, toMapPercent, worldMap } from "@/lib/world-map";

/**
 * “Around the clock”: the night-lights map with the live day/night line, a
 * soft daylight glow, and the local time at each office. Everything
 * time-based renders after mount, so server and client HTML always match.
 */
export function OperationsMap({
  caption,
  pinLinks,
}: {
  caption: ReactNode;
  /** City → href. When given, each office pin links there (e.g. its section on the Offices page). */
  pinLinks?: Record<string, string>;
}) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const timer = window.setInterval(tick, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const night = now ? nightPolygon(now, LAT_TOP, LAT_BOTTOM) : null;
  const sun = night ? toMapPercent(night.sun.lat, night.sun.lon) : null;

  return (
    <div className="relative">
      {/* Caption: above the map on small screens, overlaid from md up. */}
      <div className="mb-8 md:pointer-events-none md:absolute md:bottom-0 md:left-0 md:z-10 md:mb-0 md:max-w-[min(36rem,55%)] md:p-[clamp(2rem,3.2vw,3.75rem)] md:text-white">
        {caption}
      </div>

      <div
        style={mapCssVars}
        className="relative isolate aspect-[var(--map-aspect-sm)] overflow-hidden rounded-media bg-navy text-white md:aspect-[var(--map-aspect)]"
      >
        <div className="absolute inset-y-0 left-[var(--map-left-sm)] w-[var(--map-width-sm)] md:left-0 md:w-full">
          <Image
            src={worldMap}
            alt=""
            fill
            quality={90}
            placeholder="blur"
            sizes="(min-width: 1136px) 1400px, (min-width: 768px) 94vw, 240vw"
            className="object-cover"
          />

          {night && sun && (
            <>
              {/* Daylight: a soft glow centred on the point where the sun is overhead. */}
              <div
                aria-hidden
                className="absolute aspect-square w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(255_220_170/0.28)_0%,rgb(132_156_219/0.12)_40%,transparent_70%)] mix-blend-screen"
                style={{ left: `${sun.left}%`, top: `${sun.top}%` }}
              />
              {/* Night side, with a blurred twilight edge. */}
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 size-full"
              >
                <defs>
                  <filter id="twilight" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="1.4" />
                  </filter>
                </defs>
                <polygon
                  points={night.points.map(([x, y]) => `${x},${y}`).join(" ")}
                  fill="rgb(0 8 32 / 0.55)"
                  filter="url(#twilight)"
                />
              </svg>
            </>
          )}

          <ul aria-label="Local time at our offices">
            {offices.map((office) => {
              const { left, top } = toMapPercent(office.lat, office.lon);
              const day = now ? isDaylight(now, office.lat, office.lon) : true;
              const time = now
                ? new Intl.DateTimeFormat("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: office.timeZone,
                  }).format(now)
                : null;
              const labelLeft = (office.timeLabelSide ?? office.labelSide) === "left";

              return (
                <li
                  key={office.city}
                  className="absolute"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <PinWrapper href={pinLinks?.[office.city]}>
                    <span
                      aria-hidden
                      className="absolute flex size-2.5 -translate-x-1/2 -translate-y-1/2"
                    >
                      <span
                        className={`motion-safe-only absolute inset-0 animate-ping-soft rounded-full ${
                          day ? "bg-orange" : "bg-blue-light"
                        }`}
                      />
                      <span
                        className={`relative size-2.5 rounded-full ring-[3px] ${
                          day ? "bg-orange ring-orange/25" : "bg-blue-light ring-blue-light/25"
                        }`}
                      />
                    </span>
                    <span
                      className={`absolute top-0 -translate-y-1/2 text-[0.8125rem] leading-tight whitespace-nowrap [text-shadow:0_1px_8px_rgb(0_12_44/0.9)] ${
                        labelLeft ? "right-3.5 text-right" : "left-3.5"
                      }`}
                    >
                      <span className="font-semibold">{office.city}</span>
                      {time && (
                        <>
                          <span aria-hidden className="mx-1.5 text-white/40">
                            ·
                          </span>
                          <time className="font-light text-white/85 tabular-nums">{time}</time>
                          <span className="sr-only">{day ? ", daytime" : ", night-time"}</span>
                        </>
                      )}
                    </span>
                  </PinWrapper>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-3/5 bg-[linear-gradient(0deg,rgb(0_12_44/0.85),transparent)] md:block"
        />
      </div>

      {/* Key: below the map on phones, overlaid top-left from md up */}
      <div className="mt-4 flex flex-wrap items-center gap-x-[clamp(0.875rem,1.4vw,1.5rem)] gap-y-1.5 text-[0.75rem] tracking-[0.04em] text-ink-muted md:absolute md:top-[clamp(1rem,2vw,2rem)] md:left-[clamp(1rem,2.4vw,2.75rem)] md:z-10 md:mt-0 md:pr-4 md:text-white/75">
        <p className="flex items-center gap-2 border-r border-grey-50 pr-[clamp(0.875rem,1.4vw,1.5rem)] font-semibold text-copy md:border-white/20 md:text-white/90">
          <span aria-hidden className="relative flex size-1.5">
            <span className="motion-safe-only absolute inset-0 animate-ping-soft rounded-full bg-navy md:bg-white" />
            <span className="relative size-1.5 rounded-full bg-navy md:bg-white" />
          </span>
          Live
        </p>
        <ul aria-label="Map key" className="contents">
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="size-2 rounded-full bg-orange" />
            Office in daylight
          </li>
          <li className="flex items-center gap-1.5">
            <span aria-hidden className="size-2 rounded-full bg-blue-light" />
            Office at night
          </li>
        </ul>
      </div>
    </div>
  );
}

/** Makes a pin a link when an href is given; the hit area covers dot and label. */
function PinWrapper({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return children;
  return (
    <a
      href={href}
      className="group/pin absolute -top-3 -left-3 block size-6 rounded-full focus-visible:outline-offset-2 hover:[&_.font-semibold]:underline"
    >
      <span className="absolute top-3 left-3">{children}</span>
    </a>
  );
}
