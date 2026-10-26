import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { ExplainerEffects } from "@/components/trading-efficiency/ExplainerEffects";
import { Ic } from "@/components/trading-efficiency/ExplainerIcon";

import "./explained.css";

export const metadata: Metadata = {
  title: "Trading Efficiency Explained",
  // Hidden from search engines: noindex, and not listed in the sitemap or navigation.
  robots: { index: false, follow: false },
};

const steps = (n: number) => ({ "--steps": n }) as CSSProperties;

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

export default function TradingEfficiencyExplainedPage() {
  return (
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

      {/* 1 Hero */}
      <section className="te-section te-hero">
        <div className="te-inner te-hero-layout">
          <div className="te-copy te-reveal">
            <p className="te-kicker">Trading efficiency explained</p>
            <h1>Shipping moves the world.</h1>
            <h4>
              Food, energy and raw materials cross oceans every day. Shipping is already highly
              efficient. Yet significant value is still lost across the wider maritime system.
            </h4>
          </div>
          <div className="te-hero-visual te-reveal" aria-hidden>
            <div className="te-route" />
            <span className="te-route-dot a" />
            <span className="te-route-dot b" />
            <Ic n="ship" className="te-hero-ship" sizes="(min-width: 1050px) 690px, 100vw" />
          </div>
        </div>
      </section>

      {/* 2 Journey */}
      <section id="te-journey" data-chapter="journey" className="te-section te-journey">
        <div className="te-inner">
          <div className="te-copy te-reveal">
            <p className="te-kicker">A connected journey</p>
            <h2>One shipment. Many decisions.</h2>
            <h4>
              A shipment moves through a chain of commercial, operational and delivery decisions.
              Each handover affects what happens next.
            </h4>
          </div>
          <ol className="te-stops te-reveal" aria-label="Shipment journey">
            {journey.map((s) => (
              <li key={s.title} className="te-stop" tabIndex={0}>
                <span className="te-stop-ship" aria-hidden>
                  <Ic n="ship" sizes="58px" />
                </span>
                <span className="te-stop-dot">
                  <Ic n={s.n} sizes="104px" />
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.sub}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3 Local vs system — pinned, two steps */}
      <section id="te-problem" data-chapter="problem" className="te-problem">
        <div className="te-scrolly" data-scrolly data-steps="2" data-step="0" style={steps(2)}>
          <div className="te-pin">
            <div className="te-inner te-grid">
              <div className="te-copy">
                <p className="te-kicker">The core problem</p>
                <h2>Individually sensible. Collectively inefficient.</h2>
                <h4>
                  The same participants can create very different outcomes depending on whether
                  decisions are optimized in isolation or across the wider system.
                </h4>
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

      {/* 4 Value leaks — pinned, four steps */}
      <section data-chapter="problem" className="te-leaks">
        <div className="te-scrolly" data-scrolly data-steps="4" data-step="0" style={steps(4)}>
          <div className="te-pin">
            <div className="te-inner te-grid">
              <div className="te-copy">
                <p className="te-kicker">Value leaks from the system</p>
                <h2>Local optimization creates system inefficiencies.</h2>
                <h4>
                  The system loses time, money and emissions performance between the handovers.
                </h4>
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

      {/* 5 Pressure */}
      <section id="te-pressure" data-chapter="pressure" className="te-section te-pressure">
        <div className="te-inner">
          <div className="te-copy te-reveal">
            <p className="te-kicker">Why it matters now</p>
            <h2>The pressure is increasing.</h2>
            <h4>
              Supply chains are becoming more complex and interconnected, while shipping is expected
              to reduce emissions, improve resilience, manage volatility and control costs.
            </h4>
          </div>
          <div className="te-pressure-grid">
            <article className="te-pressure-card te-reveal">
              <Ic n="decarbonisation" />
              <h3>Reduce emissions</h3>
              <p>Lower the environmental impact of global trade.</p>
            </article>
            <article className="te-pressure-card te-reveal">
              <Ic n="resilience-v2" />
              <h3>Improve resilience</h3>
              <p>Make supply chains better able to absorb disruption.</p>
            </article>
            <article className="te-pressure-card te-reveal">
              <Ic n="data-smart" />
              <h3>Manage volatility</h3>
              <p>Make decisions with better and more timely information.</p>
            </article>
            <article className="te-pressure-card te-reveal">
              <Ic n="cost-effective" />
              <h3>Control costs</h3>
              <p>Create more value from the assets and resources already in the system.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 6 A system challenge */}
      <section data-chapter="pressure" className="te-section te-connect">
        <div className="te-inner te-grid">
          <div className="te-copy te-reveal">
            <p className="te-kicker">A system challenge</p>
            <h2>No single company can solve this alone.</h2>
            <h4>
              Better outcomes require coordination across the value chain: stronger visibility,
              better-aligned incentives and smarter decisions between participants.
            </h4>
          </div>
          <div className="te-network te-reveal" aria-hidden>
            <svg viewBox="0 0 100 100">
              {[
                [17, 18],
                [83, 18],
                [17, 78],
                [83, 78],
              ].map(([x, y]) => (
                <line key={`${x}-${y}`} className="te-net-line" pathLength={1} x1="50" y1="50" x2={x} y2={y} />
              ))}
            </svg>
            <figure className="te-net-node" style={{ left: "17%", top: "18%" }}>
              <div className="disc"><Ic n="customers" sizes="110px" /></div>
              <figcaption>Customers</figcaption>
            </figure>
            <figure className="te-net-node" style={{ left: "83%", top: "18%" }}>
              <div className="disc"><Ic n="employees-on-shore" sizes="110px" /></div>
              <figcaption>Shore teams</figcaption>
            </figure>
            <figure className="te-net-node" style={{ left: "17%", top: "78%" }}>
              <div className="disc"><Ic n="employees-at-sea" sizes="110px" /></div>
              <figcaption>Crews at sea</figcaption>
            </figure>
            <figure className="te-net-node" style={{ left: "83%", top: "78%" }}>
              <div className="disc"><Ic n="suppliers" sizes="110px" /></div>
              <figcaption>Suppliers</figcaption>
            </figure>
            <div className="te-net-hub">
              <Ic n="trust-and-responsibility" sizes="150px" />
            </div>
            <span className="te-net-hubcap">Coordination</span>
          </div>
        </div>
      </section>

      {/* 7 Definition */}
      <section id="te-definition" data-chapter="answer" className="te-section te-definition">
        <div className="te-inner">
          <div className="te-reveal">
            <p className="te-kicker">This is trading efficiency</p>
            <h2>Optimize the wider shipping ecosystem, not only the individual transaction.</h2>
            <h4>
              Trading efficiency connects how cargo moves, how information flows and how decisions
              are made, so the broader system can create better outcomes.
            </h4>
          </div>
          <ol className="te-flow">
            <li className="te-flow-step te-reveal">
              <span className="num">01</span>
              <Ic n="ship" />
              <strong>Cargo flow</strong>
              <span className="sub">What physically moves</span>
            </li>
            <li className="te-flow-step te-reveal">
              <span className="num">02</span>
              <Ic n="data-smart" />
              <strong>Information flow</strong>
              <span className="sub">What the system can see</span>
            </li>
            <li className="te-flow-step te-reveal">
              <span className="num">03</span>
              <Ic n="visionary" />
              <strong>Decision flow</strong>
              <span className="sub">What participants choose</span>
            </li>
            <li className="te-flow-step is-final te-reveal">
              <span className="num">04</span>
              <Ic n="operational-excellence" />
              <strong>Better outcomes</strong>
              <span className="sub">What the system creates</span>
            </li>
          </ol>
        </div>
      </section>

      {/* 8 Opportunities */}
      <section id="te-opportunities" data-chapter="opportunity" className="te-section te-opportunities">
        <div className="te-inner">
          <div className="te-copy te-reveal">
            <p className="te-kicker">Where value can be unlocked</p>
            <h2>Five connected opportunity areas.</h2>
            <h4>
              The opportunity is not concentrated in one technology or one business model. It is
              distributed across the maritime value chain.
            </h4>
          </div>
          <div className="te-five-band te-reveal">
            <article className="te-five-item">
              <span className="num">01</span>
              <Ic n="vessel-position" />
              <h3>Arrival and port optimization</h3>
              <p>Reduce avoidable waiting and congestion.</p>
            </article>
            <article className="te-five-item">
              <span className="num">02</span>
              <Ic n="operational-excellence" />
              <h3>Asset utilization</h3>
              <p>Use vessels and infrastructure more effectively.</p>
            </article>
            <article className="te-five-item">
              <span className="num">03</span>
              <Ic n="suppliers" />
              <h3>Inventory management</h3>
              <p>Reduce unnecessary buffers and inventory costs.</p>
            </article>
            <article className="te-five-item">
              <span className="num">04</span>
              <Ic n="trust-and-responsibility" />
              <h3>Commercial incentives</h3>
              <p>Align decisions across participants.</p>
            </article>
            <article className="te-five-item">
              <span className="num">05</span>
              <Ic n="data-smart" />
              <h3>Data sharing and visibility</h3>
              <p>Give the system better information for better decisions.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 9 Outcomes */}
      <section id="te-outcomes" data-chapter="outcome" className="te-section te-outcomes">
        <div className="te-inner">
          <div className="te-copy te-reveal">
            <p className="te-kicker">The outcome</p>
            <h2>Better for customers. Better for the wider supply chain.</h2>
            <h4>
              Improving trading efficiency helps create more resilient, decarbonized and
              cost-effective maritime supply chains.
            </h4>
          </div>
          <div className="te-outcome-row te-reveal">
            <article className="te-outcome">
              <Ic n="reduced-environmental-footprint" />
              <h3>More decarbonized</h3>
              <p>Lower emissions through better use of time, assets and information.</p>
            </article>
            <article className="te-outcome">
              <Ic n="resilience" />
              <h3>More resilient</h3>
              <p>Stronger supply chains that can respond to a changing world.</p>
            </article>
            <article className="te-outcome">
              <Ic n="cost-effective" />
              <h3>More cost-effective</h3>
              <p>Greater value created across the wider maritime ecosystem.</p>
            </article>
          </div>
          <div className="te-close te-reveal">
            <strong>
              Improving trading efficiency is Klaveness’ approach to creating better outcomes across
              the maritime value chain.
            </strong>
            <span>People. Perspective. Progress.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
