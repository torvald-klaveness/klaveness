import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

import heroImage from "@/assets/images/trading-efficiency/explained-hero.webp";
import { PageHero } from "@/components/layout/PageHero";
import { sectionY } from "@/components/sustainability/blocks";
import { ExplainerEffects } from "@/components/trading-efficiency/ExplainerEffects";
import { Ic } from "@/components/trading-efficiency/ExplainerIcon";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

import "./explained.css";

export const metadata: Metadata = {
  title: "Trading Efficiency Explained",
  // Hidden from search engines: noindex, and not listed in the sitemap or navigation.
  robots: { index: false, follow: false },
};

/*
 * A definition page only: what trading efficiency is, shown step by step.
 * Why it matters, the scale and Klaveness' approach live on /trading-efficiency.
 * Wording follows the report "The cost of trading inefficiency in dry bulk and
 * tanker shipping" (Torvald Klaveness, November 2026).
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

/** Points on a ring around (120, 60), at the given angles in degrees (0 = right). */
const onRing = (r: number, angles: number[]) =>
  angles.map((deg) => [
    120 + r * Math.cos((deg * Math.PI) / 180),
    60 + r * Math.sin((deg * Math.PI) / 180),
  ]);

/** Rings from the ship outwards: the vessel, its voyage between two ports, the trade around it. */
const rings = [
  { r: 20, dots: [] as number[][] },
  { r: 38, dots: onRing(38, [180, 0]) },
  { r: 56, dots: onRing(56, [-90, 0, 50, 130, 180]) },
];

/**
 * "Zoom out": the same three rings around our vessel icon in every card, each
 * card highlighting its own ring in orange. Rings inside it are drawn, rings
 * outside it are faded.
 */
function LevelArt({ level }: { level: number }) {
  return (
    <div className="te-rings" aria-hidden>
      <svg viewBox="0 0 240 120" className="te-art">
        {rings.map((ring, i) => (
          <g
            key={ring.r}
            className={i === level ? "te-art-on" : i > level ? "te-art-faint" : undefined}
          >
            <circle cx="120" cy="60" r={ring.r} />
            {i === level
              ? ring.dots.map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" className="te-art-dot" />
                ))
              : null}
          </g>
        ))}
      </svg>
      <Ic n="ship" className="te-rings-ship" sizes="64px" />
    </div>
  );
}

const levels = [
  {
    title: "Vessel efficiency",
    text: "How efficiently one ship uses energy.",
    focus: "Fuel used for the transport work done",
  },
  {
    title: "Port and voyage efficiency",
    text: "How efficiently a voyage or port call uses time and energy.",
    focus: "Sailing and waiting time, fuel and voyage costs",
  },
  {
    title: "Trading efficiency",
    text: "How decisions across companies affect the total cost of moving cargo.",
    focus: "Vessel use, contracts, coordination and inventory costs",
  },
] as const;

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

const num = (i: number) => String(i + 1).padStart(2, "0");
const delay = (i: number) => (i ? `reveal-delay-${Math.min(i, 2)}` : "");

export default function TradingEfficiencyExplainedPage() {
  return (
    <>
      <PageHero
        eyebrow="Trading efficiency explained"
        statement={[
          { text: "What is " },
          { text: "trading efficiency", strong: true },
          { text: "?" },
        ]}
        image={heroImage}
        nextId="te-definition"
      />

      <div id="te-story">
        {/* Drives the pinned, step-by-step sections below. */}
        <ExplainerEffects />

        {/* 1 The definition */}
        <section
          id="te-definition"
          className={`scroll-mt-16 ${sectionY} pt-[clamp(5rem,9vw,11rem)]`}
        >
          <div className="container-site">
            <div className="reveal te-copy te-copy-wide">
              <Heading eyebrow="The definition" title="Looking beyond the single ship or voyage.">
                Trading efficiency is about how decisions across companies affect the total cost of
                moving cargo by sea. Here, “trading” means moving goods by sea between markets.
              </Heading>
            </div>
            <ol className="te-flow">
              {levels.map((l, i) => (
                <li
                  key={l.title}
                  className={[
                    "te-flow-step reveal",
                    delay(i),
                    i === levels.length - 1 && "is-final",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="num">{num(i)}</span>
                  <LevelArt level={i} />
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

        {/* 2 One shipment, many decisions */}
        <section id="te-journey" className={`scroll-mt-16 ${sectionY}`}>
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
                  <li key={s.title} className="te-stop">
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

        {/* 3 Local vs system — pinned, two steps */}
        <section id="te-problem" className="te-problem scroll-mt-16">
          <div className="te-scrolly" data-scrolly data-steps="2" data-step="0" style={steps(2)}>
            <div className="te-pin">
              <div className="container-site te-grid">
                <div className="te-copy">
                  <Heading
                    eyebrow="Why it is about the system"
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

        {/* 4 What it looks like — pinned, four steps */}
        <section className="te-leaks">
          <div className="te-scrolly" data-scrolly data-steps="4" data-step="0" style={steps(4)}>
            <div className="te-pin">
              <div className="container-site te-grid">
                <div className="te-copy">
                  <Heading
                    eyebrow="What it looks like"
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

        {/* Close: the rest of the story is on the Strategy page */}
        <section className={`${sectionY} pb-[clamp(6rem,10vw,12rem)]`}>
          <div className="container-site">
            <div className="reveal grid gap-[clamp(1.5rem,3vw,3rem)] border-t border-copy pt-[clamp(2rem,3.4vw,4rem)] md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-[5.3%]">
              <p className="max-w-[46rem] font-serif text-quote font-light text-pretty text-copy">
                Trading efficiency looks at the whole chain, not just one part of it. Read why it
                matters and how Klaveness approaches it.
              </p>
              <ArrowLink href="/trading-efficiency">Trading efficiency at Klaveness</ArrowLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
