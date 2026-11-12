import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";

import portImage from "@/assets/images/about/timeline/2026.webp";
import documentsImage from "@/assets/images/about/financials-hero.webp";
import fleetImage from "@/assets/images/companies/baumarine/fleet.webp";
import propellerImage from "@/assets/images/companies/baumarine/hero-propeller.webp";
import operationsImage from "@/assets/images/companies/klaveness-dry-bulk/hero-operations.webp";
import deskImage from "@/assets/images/companies/klaveness-finance/investment.webp";
import clinkerImage from "@/assets/images/news/clinker-shipment.webp";
import icebergImage from "@/assets/images/sustainability/iceberg.webp";
import ladenShipImage from "@/assets/images/sustainability/ship-towards-mountains.webp";
import bulkCarrierImage from "@/assets/images/trading-efficiency/explained-photos/bulk-carrier-aerial.webp";
import heavySeaImage from "@/assets/images/trading-efficiency/explained-photos/heavy-sea.webp";
import heroImage from "@/assets/images/trading-efficiency/explained-photos/hero-wave.webp";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { ExplainerEffects } from "@/components/trading-efficiency/ExplainerEffects";
import { Ic } from "@/components/trading-efficiency/ExplainerIcon";
import { Eyebrow } from "@/components/ui/Eyebrow";

import "./explained.css";

export const metadata: Metadata = {
  title: "Trading Efficiency Explained",
  // Hidden from search engines: noindex, and not listed in the sitemap or navigation.
  robots: { index: false, follow: false },
};

/*
 * An explainer of the problem, not of a solution. Wording and figures follow
 * the report "The cost of trading inefficiency in dry bulk and tanker
 * shipping" (Torvald Klaveness, November 2026).
 */

const steps = (n: number) => ({ "--steps": n }) as CSSProperties;

/** Section heading in the site's style: eyebrow, Literata title and a light lead paragraph. */
function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="heading-display mt-[clamp(1rem,1.6vw,1.75rem)] text-section text-copy">
        {title}
      </h2>
      {children ? (
        <p className="mt-[clamp(1.25rem,2vw,2.25rem)] text-body font-light text-pretty text-copy">
          {children}
        </p>
      ) : null}
    </>
  );
}

/** Photo card: rounded image, bold title and a short line of copy. */
function PhotoCard({
  image,
  title,
  text,
  num,
  className = "",
}: {
  image: StaticImageData;
  title: string;
  text: string;
  num?: string;
  className?: string;
}) {
  return (
    <li className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-media bg-mist">
        <Image
          src={image}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
      {num ? (
        <span className="mt-[clamp(1rem,1.4vw,1.5rem)] block text-eyebrow font-medium text-orange-ink">
          {num}
        </span>
      ) : null}
      <h3
        className={`${num ? "mt-2" : "mt-[clamp(1rem,1.4vw,1.5rem)]"} text-label font-bold text-pretty text-copy`}
      >
        {title}
      </h3>
      <p className="mt-2 text-body-sm font-light text-pretty text-copy">{text}</p>
    </li>
  );
}

/** The five participants, placed on a ring (centre 50,50 / radius 28) for the local-vs-system graphic. */
const ring = [
  { n: "customers", x: 50, y: 22, arrow: [50, 12.5, 50, 5.5] },
  { n: "employees-on-shore", x: 76.6, y: 41.3, arrow: [85.7, 38.4, 92.3, 36.2] },
  { n: "suppliers", x: 66.5, y: 72.7, arrow: [72.1, 80.3, 76.2, 86] },
  { n: "employees-at-sea", x: 33.5, y: 72.7, arrow: [27.9, 80.3, 23.8, 86] },
  { n: "reduced-freight-cost", x: 23.4, y: 41.3, arrow: [14.3, 38.4, 7.7, 36.2] },
] as const;

const journey = [
  { n: "customers", title: "Cargo need", sub: "What must move" },
  { n: "employees-on-shore", title: "Trade", sub: "How it is contracted" },
  { n: "ship", title: "Voyage", sub: "How it is transported" },
  { n: "vessel-position", title: "Arrival", sub: "When it reaches port" },
  { n: "customers", title: "Delivery", sub: "When value is realized" },
] as const;

const leaks = [
  {
    n: "vessel-position",
    title: "Ships rush to wait",
    cap: "cap-a",
    text: "Vessels speed up to arrive early, then wait at anchor for a berth or for cargo.",
  },
  {
    n: "ship",
    title: "Unused capacity",
    cap: "cap-b",
    text: "Vessels do not always load to their full capacity, so more voyages are needed.",
  },
  {
    n: "reduced-freight-cost",
    title: "Buffers grow",
    cap: "cap-c",
    text: "Extra slack in loading windows and extra stock ashore cover for unreliable shipping.",
  },
  {
    n: "trust-and-responsibility",
    title: "Incentives pull apart",
    cap: "cap-d",
    text: "The party able to act is often not the one that benefits.",
  },
] as const;

const pressures = [
  {
    image: icebergImage,
    title: "Reduce emissions",
    text: "Lower the environmental impact of global trade.",
  },
  {
    image: heavySeaImage,
    title: "Improve resilience",
    text: "Make supply chains better able to absorb disruption.",
  },
  {
    image: operationsImage,
    title: "Manage volatility",
    text: "Make decisions with better and more timely information.",
  },
  {
    image: fleetImage,
    title: "Control costs",
    text: "Create more value from the vessels and resources already in the system.",
  },
] as const;

const levels = [
  {
    n: "ship",
    title: "Vessel efficiency",
    text: "How efficiently one ship uses energy.",
    focus: "Fuel used for the transport work done",
  },
  {
    n: "vessel-position",
    title: "Port and voyage efficiency",
    text: "How efficiently a voyage or port call uses time and energy.",
    focus: "Sailing and waiting time, fuel and voyage costs",
  },
  {
    n: "trust-and-responsibility",
    title: "Trading efficiency",
    text: "How decisions across companies affect the total cost of moving cargo.",
    focus: "Vessel use, contracts, coordination and inventory costs",
  },
] as const;

/** The report's seven categories of inefficiency, from the cargo owner's perspective. */
const categories = [
  {
    image: deskImage,
    title: "Freight procurement",
    text: "Contract structures and the timing of freight decisions add cost.",
  },
  {
    image: bulkCarrierImage,
    title: "Cargo and vessel matching",
    text: "Early commitments and simple restrictions shrink the pool of suitable vessels.",
  },
  {
    image: propellerImage,
    title: "Misaligned incentives",
    text: "Contracts give vessel owners little reason to invest in saving fuel.",
  },
  {
    image: portImage,
    title: "Port and terminal coordination",
    text: "Cargo owners, operators, terminals and ports plan apart, so vessels queue.",
  },
  {
    image: ladenShipImage,
    title: "Unrealized economies of scale",
    text: "Unused capacity and smaller ships than a trade allows mean more voyages.",
  },
  {
    image: documentsImage,
    title: "Administration and transactions",
    text: "Ambiguous contracts and many intermediaries create claims, disputes and fees.",
  },
  {
    image: clinkerImage,
    title: "Inventory and working capital",
    text: "Unreliable shipping drives extra safety stock, tying up working capital.",
  },
] as const;

const num = (i: number) => String(i + 1).padStart(2, "0");
const delay = (i: number) => (i ? ` reveal-delay-${Math.min(i, 2)}` : "");

export default function TradingEfficiencyExplainedPage() {
  return (
    <>
      <PageHero
        eyebrow="Trading efficiency explained"
        statement={[{ text: "Shipping " }, { text: "moves the world", strong: true }]}
        image={heroImage}
        nextId="te-intro"
      />

      <div id="te-story">
        <ExplainerEffects
          chapters={[
            { key: "journey", label: "Journey", target: "te-journey" },
            { key: "problem", label: "The problem", target: "te-problem" },
            { key: "pressure", label: "Why now", target: "te-pressure" },
            { key: "definition", label: "Definition", target: "te-definition" },
            { key: "cost", label: "The cost", target: "te-cost" },
          ]}
        />

        {/* Introduction */}
        <section
          id="te-intro"
          aria-label="Introduction"
          className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
        >
          <div className="container-site">
            <p className="reveal max-w-[62rem] font-serif text-quote font-light text-pretty text-copy">
              Food, energy and raw materials cross the oceans every day. Shipping is already highly
              efficient, yet avoidable cost remains in the way cargo moves by sea: in commercial
              decisions, in how vessels are used and in how ports are coordinated.
            </p>
          </div>
        </section>

        {/* Journey */}
        <section id="te-journey" data-chapter="journey" className={`scroll-mt-16 ${sectionY}`}>
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="A connected journey" title="One shipment. Many decisions.">
                A shipment moves through a chain of commercial, operational and delivery decisions,
                each taken by a different party. Each handover affects what happens next.
              </Heading>
            </div>
            <div className="te-route reveal reveal-delay-1">
              {/* An orange marker travels the route and stops at each step. */}
              <div className="te-track" aria-hidden>
                <span className="te-track-fill" />
                <span className="te-runner" />
              </div>
              <ol className="te-stops" aria-label="Shipment journey">
                {journey.map((s) => (
                  <li key={s.title} className="te-stop" tabIndex={0}>
                    <span className="te-stop-ship" aria-hidden>
                      <Ic n="ship" sizes="58px" />
                    </span>
                    <span className="te-stop-dot">
                      <Ic n={s.n} sizes="104px" />
                    </span>
                    <div>
                      <strong className="text-label font-bold text-copy">{s.title}</strong>
                      <span className="text-body-sm font-light text-copy">{s.sub}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Local vs system — pinned, two steps */}
        <section id="te-problem" data-chapter="problem" className="te-problem scroll-mt-16">
          <div className="te-scrolly" data-scrolly data-steps="2" data-step="0" style={steps(2)}>
            <div className="te-pin">
              <div className="container-site te-grid">
                <div className="te-copy">
                  <Heading
                    eyebrow="The core problem"
                    title="Individually sensible. Collectively inefficient."
                  >
                    The same participants can create very different outcomes depending on whether
                    decisions are optimized in isolation or across the wider system.
                  </Heading>
                  <div className="te-steps" aria-hidden>
                    <span className="te-step-pill te-pill-a">Local optimization</span>
                    <span className="te-step-pill te-pill-b">System optimization</span>
                  </div>
                  <div className="te-caption">
                    <p className="te-cap-a">
                      Each participant pulls toward an individual objective, in its own direction.
                    </p>
                    <p className="te-cap-b">
                      Seen as one system, the same decisions would be coordinated around the total
                      cost of moving the cargo.
                    </p>
                  </div>
                </div>

                <div className="te-duo" aria-hidden>
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <marker
                        id="te-ah"
                        viewBox="0 0 6 6"
                        refX="4.5"
                        refY="3"
                        markerWidth="4"
                        markerHeight="4"
                        orient="auto"
                      >
                        <path
                          d="M0.5 0.5 5 3 0.5 5.5"
                          fill="none"
                          stroke="#667290"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </marker>
                    </defs>
                    <g className="arrows">
                      {ring.map((p) => (
                        <line
                          key={p.n}
                          x1={p.arrow[0]}
                          y1={p.arrow[1]}
                          x2={p.arrow[2]}
                          y2={p.arrow[3]}
                          markerEnd="url(#te-ah)"
                        />
                      ))}
                    </g>
                    <g className="links">
                      <polygon points={ring.map((p) => `${p.x},${p.y}`).join(" ")} />
                      {ring.map((p) => (
                        <line key={p.n} x1="50" y1="50" x2={p.x} y2={p.y} />
                      ))}
                    </g>
                  </svg>
                  {ring.map((p) => (
                    <div key={p.n} className="te-node" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                      <Ic n={p.n} sizes="100px" />
                    </div>
                  ))}
                  <div className="te-hub">
                    <Ic n="operational-excellence" sizes="120px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value leaks — pinned, four steps */}
        <section data-chapter="problem" className="te-leaks">
          <div className="te-scrolly" data-scrolly data-steps="4" data-step="0" style={steps(4)}>
            <div className="te-pin">
              <div className="container-site te-grid">
                <div className="te-copy">
                  <Heading
                    eyebrow="Value leaks from the system"
                    title="Local optimization creates system inefficiencies."
                  >
                    Each party makes sensible choices for its own part of the chain. Between the
                    handovers, time, money and emissions are lost.
                  </Heading>
                  <div className="te-caption">
                    {leaks.map((l) => (
                      <p key={l.cap} className={`te-${l.cap}`}>
                        {l.text}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="te-pipe" aria-hidden>
                  <div className="te-pipe-main">
                    <span className="te-pipe-ship">
                      <Ic n="ship" sizes="92px" />
                    </span>
                    <div className="te-pipe-bar">Value moving through the system</div>
                  </div>
                  <div className="te-leak-cols">
                    {leaks.map((l) => (
                      <div key={l.cap} className="te-lk">
                        <span className="te-lk-stem" />
                        <span className="te-lk-drop" />
                        <div className="te-lk-card">
                          <Ic n={l.n} sizes="62px" />
                          <strong>{l.title}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pressure */}
        <section id="te-pressure" data-chapter="pressure" className={`scroll-mt-16 ${sectionY}`}>
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="Why it matters now" title="The pressure is increasing.">
                Supply chains are becoming more complex and interconnected, while shipping is
                expected to reduce emissions, improve resilience, manage volatility and control
                costs.
              </Heading>
            </div>
            <ul className="mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-x-[clamp(1.25rem,2.4vw,3rem)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {pressures.map((p, i) => (
                <PhotoCard key={p.title} {...p} className={`reveal${delay(i)}`} />
              ))}
            </ul>
          </div>
        </section>

        {/* A system challenge */}
        <section data-chapter="pressure" className={sectionY}>
          <div className="container-site">
            <div className="grid gap-[clamp(1.5rem,3vw,3rem)] border-t border-copy pt-[clamp(2rem,3.4vw,4rem)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-[5.3%]">
              <div className="reveal">
                <Eyebrow>A system challenge</Eyebrow>
                <h2 className="heading-display mt-[clamp(1rem,1.6vw,1.75rem)] text-section text-balance text-copy">
                  No single company can solve this alone.
                </h2>
              </div>
              <div className="reveal reveal-delay-1 space-y-[1.15em] text-body font-light text-pretty text-copy md:pt-[clamp(2.25rem,3.4vw,4rem)]">
                <p>
                  Contract structures, fixed timing and fragmented coordination mean that the party
                  able to act is often not the one that benefits.
                </p>
                <p>
                  The friction sits between cargo owners, operators, vessel owners, terminals and
                  ports, so it can only be addressed across the value chain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section
          id="te-definition"
          data-chapter="definition"
          className={`scroll-mt-16 ${sectionY}`}
        >
          <div className="container-site">
            <div className="reveal te-copy te-copy-wide">
              <Heading
                eyebrow="What we mean by trading efficiency"
                title="Looking beyond the single ship or voyage."
              >
                Here, “trading” means moving goods by sea between markets. Trading efficiency is
                about how decisions across companies affect the total cost of moving cargo.
              </Heading>
            </div>
            <ol className="te-flow">
              {levels.map((l, i) => (
                <li
                  key={l.title}
                  className={`te-flow-step reveal${delay(i)}${i === levels.length - 1 ? "is-final" : ""}`}
                >
                  <span className="num">{num(i)}</span>
                  <Ic n={l.n} sizes="92px" />
                  <strong>{l.title}</strong>
                  <span className="sub">{l.text}</span>
                  <span className="focus">
                    <em>Typical focus</em>
                    {l.focus}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* The cost: the report's seven categories and headline figures */}
        <section
          id="te-cost"
          data-chapter="cost"
          className={`scroll-mt-16 ${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
        >
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="Where value is lost" title="Seven areas of friction.">
                Looking at bulk shipping from the cargo owner’s perspective, around 50 possible
                sources of inefficiency were reviewed and 14 assessed in detail. They fall into
                seven categories.
              </Heading>
            </div>
            <ul className="mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-x-[clamp(1.25rem,2.4vw,3rem)] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c, i) => (
                <PhotoCard key={c.title} {...c} num={num(i)} className={`reveal${delay(i % 4)}`} />
              ))}
              <li className="reveal reveal-delay-2 flex flex-col justify-between gap-8 rounded-media bg-navy p-[clamp(1.5rem,2.2vw,2.5rem)] text-white">
                <p className="text-eyebrow font-medium text-white/80 uppercase">The scale</p>
                <div>
                  <p className="heading-display text-[clamp(2.25rem,2.7vw,3.5rem)] leading-none whitespace-nowrap">
                    USD ~7bn
                  </p>
                  <p className="mt-4 text-body-sm font-light text-pretty text-white/85">
                    of avoidable cost identified and quantified so far in dry bulk and product
                    tanker shipping. USD 10–20bn is illustrative of the wider potential, equivalent
                    to 5–10% of total freight spend.
                  </p>
                </div>
              </li>
            </ul>
            <p className="reveal mt-[clamp(2.5rem,4vw,4.5rem)] max-w-[62rem] text-body-sm font-light text-pretty text-ink-muted">
              Source: Torvald Klaveness,{" "}
              <em>The cost of trading inefficiency in dry bulk and tanker shipping</em>, November
              2026. Estimates differ in scope and should not be added together as a net saving.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
