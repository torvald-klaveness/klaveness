"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  /** Lighter centre crop, used below the md breakpoint. */
  portraitSrc: string;
  className?: string;
};

/**
 * Muted, looping background video laid over a still of its first frame. It
 * loads only after hydration and never for reduced motion, fades in once it
 * is playing, and pauses while scrolled out of view or in a hidden tab.
 */
export function HeroVideo({ src, portraitSrc, className = "" }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // iOS only autoplays when the property is set, and React may only set the attribute.
    video.muted = true;
    video.src = window.matchMedia("(width < 48rem)").matches ? portraitSrc : src;

    // Play only while on screen in a visible tab; mobile browsers pause hidden
    // video themselves and don't always resume it.
    let inView = false;
    const sync = () => {
      // A refused play (e.g. iOS Low Power Mode) just leaves the still in place.
      if (inView && !document.hidden) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [src, portraitSrc]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      disablePictureInPicture
      onPlaying={() => setPlaying(true)}
      className={`transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
