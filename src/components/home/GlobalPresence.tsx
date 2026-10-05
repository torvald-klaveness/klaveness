import Image from "next/image";
import Link from "next/link";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { home } from "@/content/home";
import { offices, type Office, officeHref } from "@/content/offices";
import { mapCssVars, toMapPercent, worldMap } from "@/lib/world-map";

export function GlobalPresence() {
  const { presence } = home;

  return (
    <section aria-labelledby="presence-title" className="py-24 md:py-32">
      <div className="container-site">
        <div className="reveal relative">
          {/* Above the map on small screens; overlaid on the map from md up. */}
          <div className="mb-10 md:pointer-events-none md:absolute md:bottom-0 md:left-0 md:z-10 md:mb-0 md:p-10 lg:p-12">
            <Eyebrow className="md:text-white">{presence.eyebrow}</Eyebrow>
            <h2
              id="presence-title"
              className="heading-display mt-6 max-w-sm text-section text-copy md:mt-5 md:text-white"
            >
              {presence.title}
            </h2>
          </div>

          <div
            style={mapCssVars}
            className="relative isolate aspect-[var(--map-aspect-sm)] overflow-hidden rounded-media bg-navy text-white shadow-[0_40px_80px_-40px_rgb(0_20_70/0.55)] md:aspect-[var(--map-aspect)]"
          >
            <div className="absolute inset-y-0 left-[var(--map-left-sm)] w-[var(--map-width-sm)] md:left-0 md:w-full">
              <Image
                src={worldMap}
                alt=""
                fill
                quality={90}
                placeholder="blur"
                sizes="(min-width: 1136px) 1056px, (min-width: 768px) 94vw, 240vw"
                className="object-cover"
              />
              <ul>
                {offices.map((office) => (
                  <OfficeMarker key={office.city} office={office} />
                ))}
              </ul>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-[linear-gradient(0deg,rgb(0_12_44/0.7),transparent)] md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeMarker({ office }: { office: Office }) {
  const { left, top } = toMapPercent(office.lat, office.lon);
  const labelLeft = office.labelSide === "left";

  return (
    <li className="absolute" style={{ left: `${left}%`, top: `${top}%` }}>
      <Link
        href={officeHref(office.city)}
        className="group/pin absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2 focus-visible:outline-offset-0"
      >
        <span aria-hidden className="relative flex size-2.5">
          <span className="motion-safe-only absolute inset-0 animate-ping-soft rounded-full bg-orange" />
          <span className="relative size-2.5 rounded-full bg-orange ring-[3px] ring-orange/25 transition-transform duration-300 group-hover/pin:scale-125" />
        </span>

        <span
          className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${
            labelLeft ? "right-full mr-1 text-right" : "left-full ml-1"
          }`}
        >
          <span className="block text-[0.8125rem] leading-tight font-semibold tracking-[0.01em] text-white [text-shadow:0_1px_8px_rgb(0_12_44/0.9)]">
            {office.city}
            {office.headquarters ? (
              <span className="ml-2 align-middle text-[0.625rem] font-semibold tracking-[0.14em] text-orange uppercase">
                HQ
              </span>
            ) : null}
          </span>
          <span className="block max-h-0 overflow-hidden text-[0.75rem] leading-snug font-light text-white/75 opacity-0 transition-all duration-500 ease-out-expo [text-shadow:0_1px_8px_rgb(0_12_44/0.9)] group-hover/pin:max-h-10 group-hover/pin:opacity-100 group-focus-visible/pin:max-h-10 group-focus-visible/pin:opacity-100">
            {office.address}
          </span>
        </span>
      </Link>
    </li>
  );
}
