import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/brand/Logo";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: ReactNode;
};

/** Shared template for pages that are not designed yet, and for 404s. */
export function ComingSoon({ eyebrow, title, description, breadcrumb, children }: ComingSoonProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy pt-36 pb-20 text-white md:pt-48 md:pb-28">
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
                  <li key={crumb.label} className="flex items-center gap-2">
                    <span aria-hidden className="text-orange">
                      /
                    </span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white/85">
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
            <h1 className="heading-display mt-8 text-[clamp(2.25rem,1.4rem+3vw,3.75rem)]">
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed font-light text-white/70">
                {description}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {children ?? (
              <>
                <p className="flex items-center gap-3 text-eyebrow font-semibold text-orange-ink uppercase">
                  <span aria-hidden className="relative flex size-2">
                    <span className="motion-safe-only absolute inset-0 animate-ping-soft rounded-full bg-orange" />
                    <span className="relative size-2 rounded-full bg-orange" />
                  </span>
                  Coming soon
                </p>
                <p className="heading-display mt-6 text-[clamp(1.5rem,1.1rem+1.4vw,2.125rem)] text-ink">
                  This page is being prepared as part of our new website.
                </p>
                <p className="prose-soft mt-5 max-w-lg text-[1.0625rem]">
                  In the meantime, explore the homepage or get in touch with our team in Oslo.
                </p>
              </>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <ArrowLink href="/">Back to the homepage</ArrowLink>
              <a
                href={`mailto:${site.headquarters.email}`}
                className="text-[0.9375rem] font-medium text-ink-soft underline decoration-grey-50 underline-offset-4 transition-colors hover:text-ink hover:decoration-orange"
              >
                {site.headquarters.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
