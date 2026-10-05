import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import { OperationsMap } from "@/components/companies/OperationsMap";
import { LocalTime } from "@/components/contact/LocalTime";
import { PageHero } from "@/components/layout/PageHero";
import { Paragraphs, sectionY, split } from "@/components/sustainability/blocks";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { type OfficeDetail, contactPages, mapsHref, officesPage as page } from "@/content/contact";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: contactPages.offices.href },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: contactPages.offices.href,
  },
};

const pinLinks = Object.fromEntries(page.offices.map((office) => [office.city, `#${office.id}`]));

export default function OfficesPage() {
  const { hero } = page;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        statement={hero.statement}
        image={hero.image}
        nextId="around-the-clock"
        imagePosition="60% 50%"
      />

      {/* Live map: every pin jumps to its office below */}
      <section
        id="around-the-clock"
        aria-labelledby="map-title"
        className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
      >
        <div className="container-site">
          <Eyebrow as="h2" id="map-title" className="reveal">
            Our offices
          </Eyebrow>
          <div className="reveal mt-[clamp(1.5rem,2.6vw,3rem)]">
            <OperationsMap
              pinLinks={pinLinks}
              caption={
                <p className="text-body font-light text-pretty text-copy md:text-white">
                  <span className="font-semibold">Select a city</span> for its address and contact
                  details.
                </p>
              }
            />
          </div>

          <nav aria-label="Offices" className="reveal mt-[clamp(1.5rem,2.4vw,2.75rem)]">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {page.offices.map((office) => (
                <li key={office.id}>
                  <a
                    href={`#${office.id}`}
                    className="group flex h-full items-center justify-between gap-3 rounded-xl bg-panel px-[clamp(1rem,1.4vw,1.5rem)] py-[clamp(0.85rem,1.2vw,1.25rem)] transition-colors hover:bg-navy hover:text-white"
                  >
                    <span>
                      <span className="block text-body-sm font-semibold">{office.city}</span>
                      <span className="block text-[clamp(0.8125rem,0.94vw,1rem)] font-light opacity-80">
                        {office.area}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="text-orange transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {page.offices.map((office, index) => (
        <OfficeSection
          key={office.id}
          office={office}
          flipped={index % 2 === 1}
          last={index === page.offices.length - 1}
        />
      ))}
    </>
  );
}

function OfficeSection({
  office,
  flipped,
  last,
}: {
  office: OfficeDetail;
  flipped: boolean;
  last: boolean;
}) {
  const place = offices.find((o) => o.city === office.city);
  const titleId = `${office.id}-title`;

  const details = [
    {
      label: "Visiting address",
      value: (
        <address className="not-italic">
          {office.visiting.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      ),
    },
    office.postal && {
      label: "Postal address",
      value: (
        <address className="not-italic">
          {office.postal.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      ),
    },
    office.switchboard && {
      label: "Switchboard",
      value: (
        <ContactLink href={`tel:${office.switchboard.tel}`}>{office.switchboard.label}</ContactLink>
      ),
    },
    office.telefax && { label: "Telefax", value: office.telefax.label },
    office.email && {
      label: "Email",
      value: <ContactLink href={`mailto:${office.email}`}>{office.email}</ContactLink>,
    },
  ].filter((item) => Boolean(item)) as { label: string; value: ReactNode }[];

  return (
    <section
      id={office.id}
      aria-labelledby={titleId}
      className={`scroll-mt-20 ${sectionY} ${last ? "pb-[clamp(6rem,10vw,12rem)]" : ""}`}
    >
      <div className={`container-site items-center ${flipped ? split.imageText : split.textImage}`}>
        <div className={`reveal ${flipped ? "md:order-2" : ""}`}>
          <h2 id={titleId} className="heading-display text-section text-copy">
            {office.title}
          </h2>
          {place ? (
            <div className="mt-[clamp(1rem,1.4vw,1.5rem)]">
              <LocalTime timeZone={place.timeZone} lat={place.lat} lon={place.lon} />
            </div>
          ) : null}

          {office.entities.length ? (
            <ul className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-1 text-body font-semibold text-copy">
              {office.entities.map((entity) => (
                <li key={entity}>{entity}</li>
              ))}
            </ul>
          ) : null}

          {office.paragraphs.length ? (
            <Paragraphs
              items={office.paragraphs}
              className="mt-[clamp(1.25rem,2vw,2.25rem)] space-y-[1.15em]"
            />
          ) : null}

          {/* Label | value rows, like a business card */}
          <dl className="mt-[clamp(1.75rem,2.8vw,3.25rem)] border-t border-copy">
            {details.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 border-b border-grey-50/70 py-[clamp(0.9rem,1.3vw,1.4rem)] sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] sm:gap-6"
              >
                <dt className="pt-[0.3em] text-eyebrow font-medium text-ink-muted uppercase">
                  {item.label}
                </dt>
                <dd className="text-body font-light text-copy">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ArrowLink
            href={mapsHref(office.visiting)}
            external
            srContext={`to the ${office.city} office`}
            className="mt-[clamp(1.75rem,2.8vw,3.25rem)]"
          >
            Get directions
          </ArrowLink>
        </div>

        <div
          className={`reveal-image relative aspect-square overflow-hidden rounded-media bg-mist ${flipped ? "md:order-1" : ""}`}
        >
          <Image
            src={office.image}
            alt={office.imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectPosition: office.imagePosition ?? "50% 50%" }}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium [overflow-wrap:anywhere] text-copy underline decoration-orange/50 underline-offset-4 transition-colors hover:decoration-orange"
    >
      {children}
    </a>
  );
}
