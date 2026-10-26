"use client";

import { useEffect, useRef } from "react";

import { Ic } from "./ExplainerIcon";

/**
 * Scroll behaviour for the explainer: fades each `.te-reveal` block in as it
 * enters the viewport, and runs the ship down the progress rail on the right.
 */
export function ExplainerEffects() {
  const progressRef = useRef<HTMLElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.getElementById("te-story");
    const progress = progressRef.current;
    const fill = fillRef.current;
    const ship = shipRef.current;
    if (!root || !progress || !fill || !ship) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }),
      { threshold: 0.16 },
    );
    root.querySelectorAll(".te-reveal").forEach((el) => io.observe(el));

    const update = () => {
      const rect = root.getBoundingClientRect();
      const total = Math.max(1, root.offsetHeight - window.innerHeight);
      const p = Math.min(total, Math.max(0, -rect.top)) / total;
      const rail = progress.clientHeight - 80;
      fill.style.height = `${p * rail}px`;
      ship.style.top = `${46 + p * rail}px`;
      progress.style.opacity = rect.bottom < 0 || rect.top > window.innerHeight ? "0" : "1";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside ref={progressRef} className="te-progress" aria-hidden>
      <div ref={fillRef} className="te-progress-fill" />
      <div ref={shipRef} className="te-progress-ship">
        <Ic n="ship" sizes="64px" />
      </div>
    </aside>
  );
}
