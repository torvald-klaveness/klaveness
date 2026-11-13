import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/seo/JsonLd";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export type Crumb = { label: string; href?: string };

type TitleBandProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
  /** Extra lines under the title (an article's date and categories). */
  children?: ReactNode;
  /**
   * Optional image behind the navy veil and gradient (an article's cover).
   * `veil` is the navy overlay opacity (default 0.75); `position` the crop.
   */
  image?: {
    src: string | StaticImageData;
    unoptimized?: boolean;
    veil?: number;
    position?: string;
  };
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
            quality={typeof image.src === "string" ? undefined : 90}
            style={image.position ? { objectPosition: image.position } : undefined}
            className="motion-safe-only animate-hero-zoom object-cover"
          />
          <div className="absolute inset-0 bg-navy" style={{ opacity: image.veil ?? 0.75 }} />
          {/* Fade the top of the image into navy so the menu always sits on a calm background. */}
          <div className="absolute inset-x-0 top-0 h-2/5 bg-[linear-gradient(180deg,rgb(0_20_70/0.9),transparent)]" />
        </div>
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_85%_0%,rgb(48_80_162/0.55),transparent_70%)]"
      />

      <div className="container-site">
        {breadcrumb?.length ? <JsonLd data={breadcrumbJsonLd(breadcrumb)} /> : null}
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
