import type { ReactNode } from "react";

import { TitleBand, type Crumb } from "@/components/layout/TitleBand";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/content/site";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
  children?: ReactNode;
};

/** Shared template for pages that are not designed yet, and for 404s. */
export function ComingSoon({ eyebrow, title, description, breadcrumb, children }: ComingSoonProps) {
  return (
    <>
      <TitleBand
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      />

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
