import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

import worldAtNight from "@/assets/images/home/world-at-night.webp";
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

const steps = (n: number) => ({ "--steps": n }) as CSSProperties;

/** Section heading in the site's style: eyebrow, Literata title and a light lead paragraph. */
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-[clamp(1rem,1.6vw,1.75rem)] heading-display text-section text-copy">{title}</h2>
      {children ? (
        <p className="mt-[clamp(1.25rem,2vw,2.25rem)] text-body font-light text-pretty text-copy">
          {children}
        </p>
      ) : null}
    </>
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
  { n: "vessel-position", title: "Vessels wait", cap: "cap-a", text: "Vessels wait. Time is lost between handovers." },
  { n: "reduced-freight-cost", title: "Buffers grow", cap: "cap-b", text: "Buffers grow. Extra stock and slack are added to cover uncertainty." },
  { n: "data-smart", title: "Information arrives late", cap: "cap-c", text: "Information arrives late. Decisions rest on what was true yesterday." },
  { n: "trust-and-responsibility", title: "Incentives pull apart", cap: "cap-d", text: "Incentives pull in different directions. Each party optimizes its own part." },
] as const;

const pressures = [
  { n: "decarbonisation", title: "Reduce emissions", text: "Lower the environmental impact of global trade." },
  { n: "resilience-v2", title: "Improve resilience", text: "Make supply chains better able to absorb disruption." },
  { n: "data-smart", title: "Manage volatility", text: "Make decisions with better and more timely information." },
  { n: "cost-effective", title: "Control costs", text: "Create more value from the assets and resources already in the system." },
] as const;

const network = [
  { n: "customers", label: "Customers", x: 17, y: 18 },
  { n: "employees-on-shore", label: "Shore teams", x: 83, y: 18 },
  { n: "employees-at-sea", label: "Crews at sea", x: 17, y: 78 },
  { n: "suppliers", label: "Suppliers", x: 83, y: 78 },
] as const;

const flow = [
  { n: "ship", title: "Cargo flow", sub: "What physically moves" },
  { n: "data-smart", title: "Information flow", sub: "What the system can see" },
  { n: "visionary", title: "Decision flow", sub: "What participants choose" },
  { n: "operational-excellence", title: "Better outcomes", sub: "What the system creates" },
] as const;

const opportunities = [
  { n: "vessel-position", title: "Arrival and port optimization", text: "Reduce avoidable waiting and congestion." },
  { n: "operational-excellence", title: "Asset utilization", text: "Use vessels and infrastructure more effectively." },
  { n: "suppliers", title: "Inventory management", text: "Reduce unnecessary buffers and inventory costs." },
  { n: "trust-and-responsibility", title: "Commercial incentives", text: "Align decisions across participants." },
  { n: "data-smart", title: "Data sharing and visibility", text: "Give the system better information for better decisions." },
] as const;

const outcomes = [
  { n: "reduced-environmental-footprint", title: "More decarbonized", text: "Lower emissions through better use of time, assets and information." },
  { n: "resilience", title: "More resilient", text: "Stronger supply chains that can respond to a changing world." },
  { n: "cost-effective", title: "More cost-effective", text: "Greater value created across the wider maritime ecosystem." },
] as const;

const num = (i: number) => String(i + 1).padStart(2, "0");
const delay = (i: number) => (i ? ` reveal-delay-${Math.min(i, 2)}` : "");

export default function TradingEfficiencyExplainedPage() {
  return (
    <>
      <PageHero
        eyebrow="Trading efficiency explained"
        statement={[{ text: "Shipping " }, { text: "moves the world", strong: true }]}
        image={worldAtNight}
        nextId="te-intro"
      />

      <div id="te-story">
        <ExplainerEffects
          chapters={[
            { key: "journey", label: "Journey", target: "te-journey" },
            { key: "problem", label: "The problem", target: "te-problem" },
            { key: "pressure", label: "Why now", target: "te-pressure" },
            { key: "answer", label: "The answer", target: "te-definition" },
            { key: "opportunity", label: "Opportunity", target: "te-opportunities" },
            { key: "outcome", label: "Outcome", target: "te-outcomes" },
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
              Food, energy and raw materials cross oceans every day. Shipping is already highly
              efficient. Yet significant value is still lost across the wider maritime system.
            </p>
          </div>
        </section>

        {/* Journey */}
        <section id="te-journey" data-chapter="journey" className={`scroll-mt-16 ${sectionY}`}>
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="A connected journey" title="One shipment. Many decisions.">
                A shipment moves through a chain of commercial, operational and delivery decisions.
                Each handover affects what happens next.
              </Heading>
            </div>
            <ol className="te-stops reveal reveal-delay-1" aria-label="Shipment journey">
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
        </section>

        {/* Local vs system — pinned, two steps */}
        <section id="te-problem" data-chapter="problem" className="te-problem scroll-mt-16">
          <div className="te-scrolly" data-scrolly data-steps="2" data-step="0" style={steps(2)}>
            <div className="te-pin">
              <div className="container-site te-grid">
                <div className="te-copy">
                  <Heading eyebrow="The core problem" title="Individually sensible. Collectively inefficient.">
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
                      Participants share visibility and coordinate around the wider outcome.
                    </p>
                  </div>
                </div>

                <div className="te-duo" aria-hidden>
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <marker id="te-ah" viewBox="0 0 6 6" refX="4.5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
                        <path d="M0.5 0.5 5 3 0.5 5.5" fill="none" stroke="#667290" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </marker>
                    </defs>
                    <g className="arrows">
                      {ring.map((p) => (
                        <line key={p.n} x1={p.arrow[0]} y1={p.arrow[1]} x2={p.arrow[2]} y2={p.arrow[3]} markerEnd="url(#te-ah)" />
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
                  <Heading eyebrow="Value leaks from the system" title="Local optimization creates system inefficiencies.">
                    The system loses time, money and emissions performance between the handovers.
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
                      <div key={l.n} className="te-lk">
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
                <li key={p.title} className={`reveal${delay(i)} te-item`}>
                  <Ic n={p.n} sizes="96px" />
                  <h3 className="text-label font-bold text-pretty text-copy">{p.title}</h3>
                  <p className="mt-2 text-body-sm font-light text-pretty text-copy">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* A system challenge */}
        <section data-chapter="pressure" className={sectionY}>
          <div className="container-site te-grid">
            <div className="reveal te-copy">
              <Heading eyebrow="A system challenge" title="No single company can solve this alone.">
                Better outcomes require coordination across the value chain: stronger visibility,
                better-aligned incentives and smarter decisions between participants.
              </Heading>
            </div>
            <div className="te-network reveal reveal-delay-1" aria-hidden>
              <svg viewBox="0 0 100 100">
                {network.map((p) => (
                  <line key={p.label} x1="50" y1="50" x2={p.x} y2={p.y} />
                ))}
              </svg>
              {network.map((p) => (
                <figure key={p.label} className="te-net-node" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                  <div className="disc">
                    <Ic n={p.n} sizes="110px" />
                  </div>
                  <figcaption>{p.label}</figcaption>
                </figure>
              ))}
              <div className="te-net-hub">
                <Ic n="trust-and-responsibility" sizes="150px" />
              </div>
              <span className="te-net-hubcap">Coordination</span>
            </div>
          </div>
        </section>

        {/* Definition */}
        <section id="te-definition" data-chapter="answer" className={`scroll-mt-16 ${sectionY}`}>
          <div className="container-site">
            <div className="reveal te-copy te-copy-wide">
              <Heading
                eyebrow="This is trading efficiency"
                title="Optimize the wider shipping ecosystem, not only the individual transaction."
              >
                Trading efficiency connects how cargo moves, how information flows and how
                decisions are made, so the broader system can create better outcomes.
              </Heading>
            </div>
            <ol className="te-flow">
              {flow.map((f, i) => (
                <li key={f.title} className={`te-flow-step reveal${delay(i)}${i === flow.length - 1 ? " is-final" : ""}`}>
                  <span className="num">{num(i)}</span>
                  <Ic n={f.n} sizes="92px" />
                  <strong>{f.title}</strong>
                  <span className="sub">{f.sub}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Opportunities */}
        <section id="te-opportunities" data-chapter="opportunity" className={`scroll-mt-16 ${sectionY}`}>
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="Where value can be unlocked" title="Five connected opportunity areas.">
                The opportunity is not concentrated in one technology or one business model. It is
                distributed across the maritime value chain.
              </Heading>
            </div>
            <ol className="mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-x-[clamp(1.25rem,2.4vw,3rem)] gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {opportunities.map((o, i) => (
                <li key={o.title} className={`reveal${delay(i)} te-item`}>
                  <span className="text-eyebrow font-medium text-orange-ink">{num(i)}</span>
                  <Ic n={o.n} sizes="86px" />
                  <h3 className="text-label font-bold text-pretty text-copy">{o.title}</h3>
                  <p className="mt-2 text-body-sm font-light text-pretty text-copy">{o.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section
          id="te-outcomes"
          data-chapter="outcome"
          className={`scroll-mt-16 ${sectionY} pb-[clamp(6rem,10vw,12rem)]`}
        >
          <div className="container-site">
            <div className="reveal te-copy">
              <Heading eyebrow="The outcome" title="Better for customers. Better for the wider supply chain.">
                Improving trading efficiency helps create more resilient, decarbonized and
                cost-effective maritime supply chains.
              </Heading>
            </div>
            <ul className="mt-[clamp(1.75rem,3vw,3.5rem)] grid gap-x-[clamp(1.25rem,2.4vw,3rem)] gap-y-10 md:grid-cols-3">
              {outcomes.map((o, i) => (
                <li key={o.title} className={`reveal${delay(i)} te-item`}>
                  <Ic n={o.n} sizes="96px" />
                  <h3 className="text-label font-bold text-pretty text-copy">{o.title}</h3>
                  <p className="mt-2 text-body-sm font-light text-pretty text-copy">{o.text}</p>
                </li>
              ))}
            </ul>

            <div className="reveal mt-[clamp(4rem,7vw,8rem)] rounded-media bg-navy px-[clamp(1.5rem,4.5vw,5.5rem)] py-[clamp(2.5rem,5vw,6rem)] text-white">
              <div className="grid gap-[clamp(1.5rem,3vw,3rem)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <p className="heading-display text-title text-balance">
                  Improving trading efficiency is Klaveness’ approach to creating better outcomes
                  across the maritime value chain.
                </p>
                <ArrowLink href="/trading-efficiency" variant="light">
                  Our approach to trading efficiency
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
