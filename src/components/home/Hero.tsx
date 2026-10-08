import Image from "next/image";

import { HeroVideo } from "@/components/home/HeroVideo";
import { ArrowRight } from "@/components/icons";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex h-[100svh] max-h-[62rem] min-h-[40rem] items-end overflow-hidden bg-navy text-white"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={hero.video.poster}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <HeroVideo
          src={hero.video.src}
          portraitSrc={hero.video.portraitSrc}
          className="absolute inset-0 size-full object-cover"
        />
        {/* Navy veil as in the design (the old site showed the video at 50% over the same navy). */}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(0_12_44/0.45)_100%)]" />
        {/* Extra scrim on phones, where the copy sits over the white superstructure and wake. */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgb(0_12_44/0.55),transparent)] md:hidden" />
      </div>

      <div className="container-site grid gap-12 pb-[clamp(4rem,11svh,6rem)] md:grid-cols-[1.15fr_1fr] md:items-end md:gap-16 md:pb-[clamp(5rem,24svh,14rem)]">
        <h1
          id="hero-title"
          className="motion-safe-only animate-rise border-l-2 border-orange pl-6 text-[clamp(2.25rem,3.45vw,4.25rem)] leading-[1.06] tracking-[0.01em] uppercase md:pl-8 lg:ml-20"
        >
          {hero.title.map((line) => (
            <span key={line.text} className={`block ${line.strong ? "font-bold" : "font-light"}`}>
              {line.text}
            </span>
          ))}
        </h1>

        <div
          className="motion-safe-only max-w-[clamp(24rem,26vw,31rem)] animate-rise md:pb-2"
          style={{ animationDelay: "180ms" }}
        >
          <p className="text-body font-light text-white/90">{hero.lead}</p>
          <a
            href={hero.cta.href}
            className="group mt-8 inline-flex items-center gap-4 text-label font-semibold"
          >
            <span className="relative inline-flex size-11 items-center justify-center rounded-full bg-white text-navy transition-transform duration-500 ease-out-expo group-hover:scale-110">
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-white/60 transition-[scale,opacity] duration-700 ease-out-expo group-hover:scale-150 group-hover:opacity-0"
              />
              <ArrowRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" />
            </span>
            {hero.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
