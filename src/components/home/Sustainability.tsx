import Image from "next/image";

import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { home } from "@/content/home";

export function Sustainability() {
  const { sustainability: s } = home;

  return (
    <section aria-labelledby="sustainability-title" className="py-24 md:py-32">
      <div className="container-site grid items-center gap-14 md:grid-cols-[1.08fr_1fr] md:gap-16 lg:gap-20">
        <div className="reveal-image relative overflow-hidden rounded-media">
          <Image
            src={s.image}
            alt={s.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1136px) 540px, (min-width: 768px) 50vw, 100vw"
            className="aspect-[1400/812] w-full object-cover"
          />
        </div>

        <div className="reveal">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 id="sustainability-title" className="heading-display mt-8 text-section text-copy">
            {s.title}
          </h2>
          <figure className="mt-6">
            <blockquote className="prose-soft text-body">
              <p>“{s.quote}”</p>
            </blockquote>
            <figcaption className="mt-6 text-eyebrow font-medium text-copy">
              — {s.author}, {s.role}
            </figcaption>
          </figure>
          <ArrowLink href={s.link.href} className="mt-8">
            {s.link.label}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
