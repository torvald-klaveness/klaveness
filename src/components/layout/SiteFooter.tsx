import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/brand/Logo";
import { ArrowUpRight, LinkedInIcon } from "@/components/icons";
import { officeHref, offices } from "@/content/offices";
import { legalNav, mainNav, site } from "@/content/site";
import { NavAnchor } from "@/components/ui/NavAnchor";

export function SiteFooter() {
  // Sections with several built pages get a column of their sub-pages.
  // Contact is covered by the Offices column (cities + team directory).
  const sectionColumns = mainNav.filter(
    (item) => (item.children?.length ?? 0) > 1 && item.href !== "/contact/offices",
  );
  const year = new Date().getFullYear();
  const { headquarters: hq } = site;

  return (
    <footer className="bg-navy text-white">
      {/* Thin orange horizon line — a nod to the hero's vertical rule. */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-orange/70 to-transparent"
      />

      <div className="container-site pt-20 pb-10 md:pt-28">
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-12 md:items-end md:pb-20">
          <div className="md:col-span-7">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Logo variant="stacked" className="h-10 w-auto" />
            </Link>
            <p className="heading-display mt-12 max-w-md text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] text-white">
              {site.tagline}.
            </p>
          </div>
          <address className="text-[0.9375rem] leading-relaxed text-white/60 not-italic md:col-span-4 md:col-start-9">
            <span className="mb-3 block text-eyebrow font-semibold text-white/85 uppercase">
              Headquarters
            </span>
            {hq.street}, {hq.postalCode} {hq.city}, {hq.country}
            <br />
            <a
              href={`tel:${hq.phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-white"
            >
              {hq.phone}
            </a>
            <span aria-hidden className="mx-2 text-orange">
              ·
            </span>
            <a href={`mailto:${hq.email}`} className="transition-colors hover:text-white">
              {hq.email}
            </a>
          </address>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-16 sm:grid-cols-3 lg:auto-cols-[minmax(0,1fr)] lg:grid-flow-col lg:grid-cols-none lg:gap-x-[clamp(2rem,4vw,6rem)]">
          <FooterColumn title="Explore">
            {mainNav.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterColumn>

          {sectionColumns.map((column) => (
            <FooterColumn key={column.href} title={column.label}>
              {column.children!.map((link) => (
                <li key={link.href + link.label}>
                  <FooterLink href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </FooterColumn>
          ))}

          <FooterColumn title="Offices">
            {offices.map((office) => (
              <li key={office.city}>
                <FooterLink href={officeHref(office.city)}>{office.city}</FooterLink>
              </li>
            ))}
            <li className="pt-2">
              <FooterLink href="/contact/team">Team directory</FooterLink>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-[0.8125rem] text-white/50 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <LinkedInIcon className="size-3.5" />
                LinkedIn
                <ArrowUpRight className="size-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-eyebrow font-semibold text-white/85 uppercase">{title}</h2>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <NavAnchor
      href={href}
      external={external}
      className="text-[0.9375rem] text-white/60 transition-colors duration-300 hover:text-white"
    >
      {children}
    </NavAnchor>
  );
}
