"use client";

import { useEffect, useRef, useState } from "react";

type Chapter = { key: string; label: string; target: string };

/**
 * Scroll behaviour for the explainer:
 * - fades each `.te-reveal` block in as it enters the viewport;
 * - steps through each pinned `[data-scrolly]` block (sets `data-step`);
 * - drives the chapter timeline fixed along the bottom of the screen.
 */
export function ExplainerEffects({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const activeRef = useRef(0);
  const shownRef = useRef(false);

  useEffect(() => {
    const root = document.getElementById("te-story");
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.16 },
    );
    root.querySelectorAll(".te-reveal").forEach((el) => io.observe(el));

    const scrollies = Array.from(root.querySelectorAll<HTMLElement>("[data-scrolly]"));
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));

    const update = () => {
      const vh = window.innerHeight;

      for (const el of scrollies) {
        const n = Number(el.dataset.steps) || 1;
        const span = Math.max(1, el.offsetHeight - vh);
        const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
        const step = String(Math.min(n - 1, Math.floor(p * n)));
        if (el.dataset.step !== step) el.dataset.step = step;
      }

      let current = -1;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= vh * 0.5) {
          current = chapters.findIndex((c) => c.key === section.dataset.chapter);
        }
      }
      if (current >= 0 && current !== activeRef.current) {
        activeRef.current = current;
        setActive(current);
      }

      const rect = root.getBoundingClientRect();
      const visible = rect.top < -vh * 0.4 && rect.bottom > vh * 0.7;
      if (visible !== shownRef.current) {
        shownRef.current = visible;
        setShown(visible);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [chapters]);

  return (
    <nav className={`te-chapters${shown ? " is-shown" : ""}`} aria-label="Chapters">
      {chapters.map((c, i) => (
        <a
          key={c.key}
          href={`#${c.target}`}
          aria-current={i === active ? "true" : undefined}
          className={`te-chapter${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
        >
          <i />
          <span>{c.label}</span>
        </a>
      ))}
    </nav>
  );
}
