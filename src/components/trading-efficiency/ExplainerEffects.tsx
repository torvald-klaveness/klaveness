"use client";

import { useEffect } from "react";

/**
 * Scroll behaviour for the explainer: steps through each pinned
 * `[data-scrolly]` block by setting its `data-step` from the scroll position.
 */
export function ExplainerEffects() {
  useEffect(() => {
    const root = document.getElementById("te-story");
    if (!root) return;

    const scrollies = Array.from(root.querySelectorAll<HTMLElement>("[data-scrolly]"));

    const update = () => {
      const vh = window.innerHeight;
      for (const el of scrollies) {
        const n = Number(el.dataset.steps) || 1;
        const span = Math.max(1, el.offsetHeight - vh);
        const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
        const step = String(Math.min(n - 1, Math.floor(p * n)));
        if (el.dataset.step !== step) el.dataset.step = step;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
