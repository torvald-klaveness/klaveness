import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/brand/Logo";
import { Eyebrow } from "@/components/ui/Eyebrow";

export type Crumb = { label: string; href?: string };

type TitleBandProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
  /** Extra lines under the title (an article's date and categories). */
  children?: ReactNode;
  /** Optional photo behind the navy veil and gradient (an article's cover). */
  image?: { src: string; unoptimized?: boolean };
};

/**
 * Navy page header: breadcrumb, label and title, optionally over a photo
 * (articles). Used for the Newsroom, articles and pages still to be designed.
 */
export function TitleBand({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  image,
}: TitleBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-36 pb-20 text-white md:pt-48 md:pb-28">
      {image ? (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={image.src}
            alt=""
            fill
            preload
            unoptimized={image.unoptimized}
            sizes="100vw"
            className="motion-safe-only animate-hero-zoom object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
        </div>
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_85%_0%,rgb(48_80_162/0.55),transparent_70%)]"
      />
      <Logo
        variant="symbol"
        aria-hidden
        title=""
        className="pointer-events-none absolute -right-20 -bottom-20 -z-10 h-72 w-auto text-white/[0.03] md:h-[26rem]"
      />

      <div className="container-site">
        {breadcrumb?.length ? (
          <nav aria-label="Breadcrumb" className="motion-safe-only mb-10 animate-rise">
            <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem] text-white/55">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb) => (
                <li key={crumb.label} className="flex min-w-0 items-center gap-2">
                  <span aria-hidden className="text-orange">
                    /
                  </span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="line-clamp-1 text-white/85">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div
          className="motion-safe-only max-w-3xl animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1
            id="page-title"
            className="heading-display mt-8 text-[clamp(2.25rem,1.4rem+3vw,3.75rem)]"
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed font-light text-white/70">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
