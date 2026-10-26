import type { Metadata } from "next";

import { ExplainerEffects } from "@/components/trading-efficiency/ExplainerEffects";
import { Ic } from "@/components/trading-efficiency/ExplainerIcon";

import "./explained.css";

export const metadata: Metadata = {
  title: "Trading Efficiency Explained",
  // Hidden from search engines: noindex, and not listed in the sitemap or navigation.
  robots: { index: false, follow: false },
};

export default function TradingEfficiencyExplainedPage() {
  return (
    <div id="te-story">
      <ExplainerEffects />

  <section className="te-section te-hero">
    <div className="te-inner te-hero-layout">
      <div className="te-copy te-reveal">
        <p className="te-kicker">Trading efficiency explained</p>
        <h1>Shipping moves the world.</h1>
        <h4>Food, energy and raw materials cross oceans every day. Shipping is already highly efficient. Yet significant value is still lost across the wider maritime system.</h4>
      </div>
      <div className="te-hero-visual te-reveal" aria-hidden>
        <div className="te-route" /><span className="te-route-dot a" /><span className="te-route-dot b" />
        <Ic n="ship" className="te-hero-ship" sizes="(min-width: 1050px) 690px, 100vw" />
      </div>
    </div>
  </section>

  <section className="te-section te-section--short">
    <div className="te-story-index">02 / A SHIPMENT’S JOURNEY</div>
    <div className="te-inner">
      <div className="te-copy te-reveal">
        <p className="te-kicker">A connected journey</p>
        <h2>One shipment. Many decisions.</h2>
        <h4>A shipment moves through a chain of commercial, operational and delivery decisions. Each handover affects what happens next.</h4>
      </div>
      <div className="te-journey-track te-reveal" aria-label="Shipment journey">
        <div className="te-journey-line" /><Ic n="ship" className="te-travelling-ship" />
        <div className="te-journey-stop"><Ic n="customers" /><strong>Cargo need</strong><span>What must move</span></div>
        <div className="te-journey-stop"><Ic n="employees-on-shore" /><strong>Trade</strong><span>How it is contracted</span></div>
        <div className="te-journey-stop"><Ic n="ship" /><strong>Voyage</strong><span>How it is transported</span></div>
        <div className="te-journey-stop"><Ic n="vessel-position" /><strong>Arrival</strong><span>When it reaches port</span></div>
        <div className="te-journey-stop"><Ic n="customers" /><strong>Delivery</strong><span>When value is realized</span></div>
      </div>
    </div>
  </section>

  <section className="te-section">
    <div className="te-story-index">03 / LOCAL VS SYSTEM</div>
    <div className="te-inner">
      <div className="te-copy te-reveal">
        <p className="te-kicker">The core problem</p>
        <h2>Individually sensible. Collectively inefficient.</h2>
        <h4>The same participants can create very different outcomes depending on whether decisions are optimized in isolation or across the wider system.</h4>
      </div>
      <div className="te-split-compare te-reveal">
        <div className="te-compare-side te-compare-local">
          <h3>Local optimization</h3><p>Each participant pulls toward an individual objective.</p>
          <div className="te-people-map">
            <svg className="te-local-pull" viewBox="0 0 500 440"><line x1="250" y1="220" x2="75" y2="70" /><line x1="250" y1="220" x2="425" y2="70" /><line x1="250" y1="220" x2="75" y2="370" /><line x1="250" y1="220" x2="425" y2="370" /><circle cx="250" cy="220" r="16" /></svg>
            <div className="te-person-dot p1"><Ic n="customers" /></div><div className="te-person-dot p2"><Ic n="employees-on-shore" /></div><div className="te-person-dot p3"><Ic n="employees-at-sea" /></div><div className="te-person-dot p4"><Ic n="suppliers" /></div><div className="te-person-dot p5"><Ic n="reduced-freight-cost" /></div>
          </div>
        </div>
        <div className="te-compare-side te-compare-system">
          <h3>System optimization</h3><p>Participants share visibility and coordinate around the wider outcome.</p>
          <div className="te-people-map"><div className="te-system-ring" />
            <div className="te-person-dot p1"><Ic n="customers" /></div><div className="te-person-dot p2"><Ic n="employees-on-shore" /></div><div className="te-person-dot p3"><Ic n="employees-at-sea" /></div><div className="te-person-dot p4"><Ic n="suppliers" /></div><div className="te-person-dot p5" style={{background:"var(--kla-orange)"}}><Ic n="operational-excellence" style={{filter:"brightness(0) invert(1)"}} /></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="te-section te-leaks">
    <div className="te-inner te-grid te-grid--reverse">
      <div className="te-copy te-reveal">
        <p className="te-kicker">Value leaks from the system</p>
        <h2>Local optimization creates system inefficiencies.</h2>
        <h4>Vessels wait. Buffers grow. Information arrives late. Incentives pull in different directions. The system loses time, money and emissions performance between the handovers.</h4>
      </div>
      <div className="te-visual te-leak-visual te-reveal" aria-hidden>
        <div className="te-leak-line" />
        <Ic n="ship" className="te-leak-ship" sizes="(min-width: 1050px) 640px, 100vw" />
        <div className="te-leak one"><Ic n="vessel-position" /></div>
        <div className="te-leak two"><Ic n="data-smart" /></div>
        <div className="te-leak three"><Ic n="reduced-freight-cost" /></div>
        <div className="te-leak four"><Ic n="trust-and-responsibility" /></div>
      </div>
    </div>
  </section>

  <section className="te-section te-pressure">
    <div className="te-inner">
      <div className="te-copy te-reveal">
        <p className="te-kicker">Why it matters now</p>
        <h2>The pressure is increasing.</h2>
        <h4>Supply chains are becoming more complex and interconnected, while shipping is expected to reduce emissions, improve resilience, manage volatility and control costs.</h4>
      </div>
      <div className="te-pressure-grid te-reveal">
        <article className="te-pressure-card"><Ic n="decarbonisation" /><h3>Reduce emissions</h3><p>Lower the environmental impact of global trade.</p></article>
        <article className="te-pressure-card"><Ic n="resilience-v2" /><h3>Improve resilience</h3><p>Make supply chains better able to absorb disruption.</p></article>
        <article className="te-pressure-card"><Ic n="data-smart" /><h3>Manage volatility</h3><p>Make decisions with better and more timely information.</p></article>
        <article className="te-pressure-card"><Ic n="cost-effective" /><h3>Control costs</h3><p>Create more value from the assets and resources already in the system.</p></article>
      </div>
    </div>
  </section>

  <section className="te-section te-connect">
    <div className="te-inner te-grid">
      <div className="te-copy te-reveal">
        <p className="te-kicker">A system challenge</p>
        <h2>No single company can solve this alone.</h2>
        <h4>Better outcomes require coordination across the value chain: stronger visibility, better-aligned incentives and smarter decisions between participants.</h4>
      </div>
      <div className="te-network te-reveal" aria-hidden>
        <svg viewBox="0 0 700 620" preserveAspectRatio="none"><path d="M95 95 C250 165 260 235 350 310 C435 220 470 160 610 90 M95 525 C225 455 260 390 350 310 C445 400 480 465 610 525" /></svg>
        <div className="te-network-center"><Ic n="trust-and-responsibility" /></div>
        <div className="te-network-node n1"><Ic n="customers" /></div>
        <div className="te-network-node n2"><Ic n="employees-on-shore" /></div>
        <div className="te-network-node n3"><Ic n="employees-at-sea" /></div>
        <div className="te-network-node n4"><Ic n="suppliers" /></div>
      </div>
    </div>
  </section>

  <section className="te-section te-definition">
    <div className="te-inner te-reveal">
      <p className="te-kicker" style={{color:"#fff",opacity:".75"}}>This is trading efficiency</p>
      <h2>Optimize the wider shipping ecosystem, not only the individual transaction.</h2>
      <h4>Trading efficiency connects how cargo moves, how information flows and how decisions are made, so the broader system can create better outcomes.</h4>
      <div className="te-flow">
        <div className="te-flow-step"><Ic n="ship" /><strong>Cargo flow</strong><span>What physically moves</span></div>
        <div className="te-flow-step"><Ic n="data-smart" /><strong>Information flow</strong><span>What the system can see</span></div>
        <div className="te-flow-step"><Ic n="visionary" /><strong>Decision flow</strong><span>What participants choose</span></div>
        <div className="te-flow-step"><Ic n="operational-excellence" /><strong>Better outcomes</strong><span>What the system creates</span></div>
      </div>
    </div>
  </section>

  <section className="te-section te-opportunities">
    <div className="te-inner">
      <div className="te-copy te-reveal">
        <p className="te-kicker">Where value can be unlocked</p>
        <h2>Five connected opportunity areas.</h2>
        <h4>The opportunity is not concentrated in one technology or one business model. It is distributed across the maritime value chain.</h4>
      </div>
      <div className="te-five-band te-reveal">
        <article className="te-five-item"><span className="num">01</span><Ic n="vessel-position" /><h3>Arrival and port optimization</h3><p>Reduce avoidable waiting and congestion.</p></article>
        <article className="te-five-item"><span className="num">02</span><Ic n="operational-excellence" /><h3>Asset utilization</h3><p>Use vessels and infrastructure more effectively.</p></article>
        <article className="te-five-item"><span className="num">03</span><Ic n="suppliers" /><h3>Inventory management</h3><p>Reduce unnecessary buffers and inventory costs.</p></article>
        <article className="te-five-item"><span className="num">04</span><Ic n="trust-and-responsibility" /><h3>Commercial incentives</h3><p>Align decisions across participants.</p></article>
        <article className="te-five-item"><span className="num">05</span><Ic n="data-smart" /><h3>Data sharing and visibility</h3><p>Give the system better information for better decisions.</p></article>
      </div>
    </div>
  </section>

  <section className="te-section te-outcomes">
    <div className="te-inner">
      <div className="te-copy te-reveal">
        <p className="te-kicker">The outcome</p>
        <h2>Better for customers. Better for the wider supply chain.</h2>
        <h4>Improving trading efficiency helps create more resilient, decarbonized and cost-effective maritime supply chains.</h4>
      </div>
      <div className="te-outcome-row te-reveal">
        <article className="te-outcome"><Ic n="reduced-environmental-footprint" /><h3>More decarbonized</h3><p>Lower emissions through better use of time, assets and information.</p></article>
        <article className="te-outcome"><Ic n="resilience" /><h3>More resilient</h3><p>Stronger supply chains that can respond to a changing world.</p></article>
        <article className="te-outcome"><Ic n="cost-effective" /><h3>More cost-effective</h3><p>Greater value created across the wider maritime ecosystem.</p></article>
      </div>
      <div className="te-close te-reveal"><strong>Improving trading efficiency is Klaveness’ approach to creating better outcomes across the maritime value chain.</strong><span>People. Perspective. Progress.</span></div>
    </div>
  </section>

    </div>
  );
}
