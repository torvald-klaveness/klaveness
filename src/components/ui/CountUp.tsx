"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Milliseconds. */
  duration?: number;
};

/**
 * Number that counts up the first time it scrolls into view. The final value
 * is rendered on the server and kept for reduced motion and screen readers.
 */
export function CountUp({ value, prefix = "", suffix = "", duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let settle = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (time: number) => {
          const t = Math.min(1, (time - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(step);
        };
        // No reset to 0 up front, and a timer that lands on the final value:
        // if the browser pauses frames (background tab), the real figure shows.
        frame = requestAnimationFrame(step);
        settle = window.setTimeout(() => {
          cancelAnimationFrame(frame);
          setDisplay(value);
        }, duration + 150);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}
