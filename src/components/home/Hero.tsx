import Image from "next/image";

import { HeroVideo } from "@/components/home/HeroVideo";
import { home } from "@/content/home";

export function Hero() {
  const { hero } = home;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex h-[74svh] max-h-[56rem] min-h-[32rem] items-end overflow-hidden bg-navy text-white"
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
        {/* Navy (#001446) veil at 50% over the video. */}
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(0_20_70/0.45)_100%)]" />
        {/* Extra scrim on phones, where the copy sits over the white superstructure and wake. */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgb(0_12_44/0.55),transparent)] md:hidden" />
      </div>

      {/* Same 12-column grid as the intro below, so the title lines up with its text. */}
      <div className="container-site grid pb-[clamp(4rem,11svh,6rem)] md:grid-cols-12 md:items-end md:gap-8 md:pb-[clamp(4rem,12svh,8rem)]">
        <h1
          id="hero-title"
          className="motion-safe-only animate-rise border-l-2 border-orange pl-6 text-[clamp(2.25rem,3.45vw,4.25rem)] leading-[1.06] tracking-[0.01em] uppercase md:col-span-7 md:pl-8"
        >
          {hero.title.map((line) => (
            <span key={line.text} className={`block ${line.strong ? "font-bold" : "font-light"}`}>
              {line.text}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
