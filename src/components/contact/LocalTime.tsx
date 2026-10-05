"use client";

import { useEffect, useState } from "react";

import { isDaylight } from "@/lib/solar";

type LocalTimeProps = { timeZone: string; lat: number; lon: number };

/** "Local time 10:42" with a day/night dot. Renders after mount to avoid hydration drift. */
export function LocalTime({ timeZone, lat, lon }: LocalTimeProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const timer = window.setInterval(tick, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const day = now ? isDaylight(now, lat, lon) : true;
  const time = now
    ? new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(now)
    : "––:––";

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-panel px-3 py-1.5 text-[clamp(0.8125rem,0.94vw,1.0625rem)] text-copy">
      <span aria-hidden className={`size-2 rounded-full ${day ? "bg-orange" : "bg-blue-light"}`} />
      <span className="font-light">Local time</span>
      <time className="font-semibold tabular-nums">{time}</time>
      {now ? <span className="sr-only">{day ? "(daytime)" : "(night-time)"}</span> : null}
    </span>
  );
}
