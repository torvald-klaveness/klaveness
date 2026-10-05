import Image from "next/image";

import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function History() {
  const { history } = home;
  const anniversaryYear = site.foundingYear + 80;

  return (
    <section aria-labelledby="history-title" className="py-24 md:py-32">
      <div className="container-site grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="reveal max-w-[clamp(28rem,32vw,38rem)]">
          <Eyebrow>{history.eyebrow}</Eyebrow>
          <h2 id="history-title" className="heading-display mt-8 text-section text-copy">
            {history.title}
          </h2>
          <p className="prose-soft mt-6 text-body">{history.body}</p>
          <ArrowLink href={history.link.href} className="mt-8">
            {history.link.label}
          </ArrowLink>
        </div>

        <figure className="reveal-image relative overflow-hidden rounded-media">
          <Image
            src={history.image}
            alt={history.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1136px) 520px, (min-width: 768px) 46vw, 100vw"
            className="aspect-[1400/812] w-full object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-[0.8125rem] text-ink shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-orange" aria-hidden />
            <span>
              <span className="font-semibold">{site.foundingYear}</span>
              <span className="mx-1.5 text-ink-muted">—</span>
              <span className="font-semibold">{anniversaryYear}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
