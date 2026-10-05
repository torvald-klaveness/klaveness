import heroTemporary from "@/assets/images/home/hero-ocean.webp";
import esgEnvironmentalImage from "@/assets/images/sustainability/esg-environmental.webp";
import esgGovernanceImage from "@/assets/images/sustainability/esg-governance.webp";
import esgSocialImage from "@/assets/images/sustainability/esg-social.webp";
import ceoImage from "@/assets/images/sustainability/ernst-meyer-square.webp";
import baltazarImage from "@/assets/images/sustainability/mv-baltazar.webp";
import shipMountainsImage from "@/assets/images/sustainability/ship-towards-mountains.webp";
import digitalShipImage from "@/assets/images/sustainability/stakeholders-digital-ship.webp";
import tradingEfficiencyImage from "@/assets/images/sustainability/trading-efficiency.webp";
import type { RichLine } from "@/content/types";

export type EsgPillarKey = "environmental" | "social" | "governance";

/*
 * Copy and images from the Adobe XD designs (Sustainability, ESG, Stakeholders).
 *
 * TODO(images): the hero backgrounds were not marked for export in XD. Until
 * they are, the Sustainability and ESG heroes use the homepage ocean photo and
 * the Stakeholders hero uses the ship-towards-mountains image.
 */

export const sustainabilityPage = {
  meta: {
    title: "Sustainability",
    description:
      "Klaveness is committed to making a positive contribution to society by improving the nature of shipping.",
  },
  hero: {
    eyebrow: "Sustainability",
    statement: [
      { text: "Klaveness is committed to making a positive contribution to society by " },
      { text: "improving the nature of shipping", strong: true },
    ] satisfies RichLine,
    image: heroTemporary,
  },
  approach: {
    eyebrow: "Our approach and strategy",
    quote:
      "Shipping is essential for delivering food, energy, and metals to the world, but the industry must continue to evolve. For Klaveness, sustainability means taking responsibility for our impact today, while at the same time investing in the solutions, partnerships, and people that will help shape a safer and lower-emission future for shipping.",
    attribution: "Ernst Meyer, CEO Torvald Klaveness",
    image: ceoImage,
    imageAlt: "Portrait of Ernst Meyer, CEO of Torvald Klaveness",
  },
  improving: {
    eyebrow: "Improving the nature of shipping",
    paragraphs: [
      "Improving the nature of shipping means more than reducing emissions. It means protecting the wellbeing of people, conducting business responsibly, and supporting the long-term resilience and sustainability of the maritime industry.",
      "To accomplish this, we seek innovative business models, work closely with customers and partners, and realize the full potential of energy-efficiency technologies alongside operational excellence. This approach guides how we manage risk, engage with stakeholders, develop our people, and contribute to the industry’s transition towards a safer, lower-emission future.",
    ],
    image: baltazarImage,
    imageAlt: "The combination carrier MV Baltazar at sea, fitted with two rotor sails",
  },
  tradingEfficiency: {
    eyebrow: "Trading efficiency",
    columns: [
      "Shipping has many trade-offs. Every day, decisions are made between speed and fuel consumption, cost and reliability, flexibility and predictability. Typically, many of these decisions are taken at the level of a single vessel, voyage, or cargo movement and aren’t beneficial for the industry and society at large.",
      "At Klaveness, we believe greater value can be created by improving decisions across the entire maritime supply chain. We call this ‘Trading Efficiency’ and is focused towards aligning commercial, operational, and environmental considerations that can improve overall system performance.",
    ],
    image: tradingEfficiencyImage,
    imageAlt:
      "Aerial view of a red bulk carrier at sea with a digital data overlay tracing its route",
    closing:
      "Trading Efficiency is a key pillar of our sustainability approach. More efficient trading patterns, better utilization of assets, improved planning, and stronger coordination between stakeholders can reduce emissions, lower resource consumption, improve safety, and deliver greater value to customers. Through our vessels, freight solutions, and digital services, we seek to help customers navigate an increasingly complex operating environment while contributing to a more sustainable shipping industry.",
    link: { label: "More about Trading Efficiency", href: "/sustainability/trading-efficiency" },
  },
  esg: {
    eyebrow: "Our ESG priorities",
    paragraphs: [
      "Shipping plays a critical role in global trade, but the industry must also evolve to meet growing expectations around environmental performance, strong safety standards, and clear corporate governance that dictates responsible business conduct. At Klaveness, sustainability is not a stand-alone initiative, it’s embedded in how we operate, the decisions we make, and the solutions we develop for customers.",
      "Our ESG priorities reflect the areas where we believe we can make the most meaningful contribution while creating long-term value for our stakeholders. Together, they guide our efforts to reduce environmental impact, protect and develop our people, conduct business responsibly, and support a more resilient and sustainable maritime industry.",
    ],
    image: shipMountainsImage,
    imageAlt: "A bulk carrier sailing towards mountains at sunset, seen from behind",
    pillars: [
      {
        key: "environmental",
        title: "Environment",
        body: "Reducing our environmental footprint through cleaner operations, innovation, and efficient resource use.",
      },
      {
        key: "social",
        title: "Social",
        body: "Protecting our people, promoting wellbeing, and fostering a culture of inclusion, growth, and opportunity.",
      },
      {
        key: "governance",
        title: "Governance",
        body: "Upholding the highest standards of integrity, transparency, and accountability in everything we do.",
      },
    ] satisfies { key: EsgPillarKey; title: string; body: string }[],
  },
} as const;

type TargetsCard = { targets: string[]; performance: string[] };

export const esgPage = {
  meta: {
    title: "ESG priority",
    description:
      "Klaveness is focused on creating long-term value by advancing environmental, social, and governance priorities across shipping.",
  },
  hero: {
    eyebrow: "ESG priority",
    statement: [
      { text: "Klaveness is focused on creating long-term value by advancing " },
      { text: "environmental", strong: true },
      { text: ", " },
      { text: "social", strong: true },
      { text: ", and " },
      { text: "governance", strong: true },
      { text: " priorities across shipping." },
    ] satisfies RichLine,
    image: heroTemporary,
  },
  environmental: {
    label: "Environmental",
    heading: "Low-carbon future",
    paragraphs: [
      "Shipping plays a vital role in global trade, and the industry must continue to reduce its environmental impact while maintaining the efficient movement of the food, energy, and raw materials that everyday life depends on.",
      "At Klaveness, we work to improve environmental performance through operational efficiency, technological development, responsible resource use, and collaboration across the maritime value chain. We believe meaningful progress will come from practical solutions that reduce emissions while creating value for customers and society.",
    ],
    focus: [
      "Emission reductions through more efficient vessel operations and trading patterns.",
      "Development and adoption of lower-emission technologies and fuels.",
      "Reducing environmental impact from our offices and shore-based activities.",
      "Responsible waste management, resource efficiency, and ship recycling.",
      "Supporting customers through data, insights, and services that improve environmental performance.",
    ],
    image: esgEnvironmentalImage,
    imageAlt: "Close-up of ocean waves at sunset",
    card: {
      targets: [
        "Zero environmental spills.",
        "Reduce the carbon intensity (EEOI) of the KCC fleet by 33-42% by 2030 compared with the 2018 baseline.",
        "Net-zero from fleet operations by 2050.",
        "Improve environmental performance through trading efficiency, operational excellence, innovation, and collaboration across the maritime value chain.",
      ],
      performance: [
        "Zero environmental spills recorded during the year.",
        "Fleet carbon intensity (EEOI) improved by 7.4% compared with 2024.",
        "KCC’s fleet continues to achieve approximately 35% lower carbon intensity than conventional tanker and dry bulk vessels operating in comparable trades.",
        "Continued development of digital solutions and decision-support tools that help customers improve efficiency, planning, and environmental performance across maritime supply chains.",
      ],
    } satisfies TargetsCard,
    note: {
      text: "More on our carbon reduction targets can be viewed directly with Klaveness Combination Carriers",
      linkLabel: "here",
      href: "https://www.combinationcarriers.com/sustainability/our-approach",
    },
  },
  social: {
    label: "Social",
    klass: {
      heading: "Klaveness Always Safe and Secure (KLASS)",
      paragraphs: [
        "KLASS reflects our commitment to protecting people, operating responsibly, and maintaining high standards across our business. Safety is fundamental to how we work, whether onboard our vessels or in our offices.",
        "Our ambition is simple: all of our people should feel safe at work and no one should be injured while undertaking work for Klaveness. We believe injuries and operational incidents are preventable, and we continuously work to strengthen our performance through learning, accountability, and a culture that encourages people to speak up and look out for one another.",
        "Originally developed within Klaveness Ship Management and Klaveness Combination Carriers, KLASS has evolved into a shared foundation for how we approach safety, leadership, and continuous improvement across the wider Klaveness Group.",
      ],
    },
    people: {
      heading: "Commitment to our people and communities",
      paragraphs: [
        "Our responsibility to people extends beyond safety performance alone. Across the Klaveness Group, we are committed to fair treatment, equal opportunities, and respectful working conditions for everyone who contributes to our business, whether onshore, at sea, or through our wider network of suppliers and business partners. Employment-related decisions are based on qualifications, merit, performance, and other job-related factors, and we work to promote diversity, inclusion, and equal rights across our organization. This includes our commitment to increasing the share of women in leading positions through the WISTA Norway “40 by 30” pledge, as well as clear expectations for human rights, labor rights, safe working conditions, and responsible conduct among suppliers and business partners.",
        "We also recognize that our role in society extends beyond our own operations. Through humanitarian donations and community initiatives, we seek to support people affected by war, displacement, and hardship. In recent years, this has included support for Ukrainian soldiers and civilians through Fritt Ukraina and HMM Helsehjelp.",
      ],
    },
    focus: [
      "Health, safety, and the wellbeing of our seafarers and vessels.",
      "Health, safety, and the wellbeing of our onshore employees.",
      "Diversity, inclusion, and equal opportunities.",
      "Learning, competence development, and human capital growth.",
    ],
    image: esgSocialImage,
    imageAlt: "Two Klaveness colleagues in conversation in the office",
    card: {
      targets: [
        "Zero serious incidents across our operations.",
        "<0.5 Lost Time Injury Frequency (LTIF) with KCC.",
        ">90% crew retention rate with KCC.",
        "Continue building a diverse and inclusive workplace onshore, ensuring both genders are represented in final interviews for new positions.",
      ],
      performance: [
        "Zero serious incidents or high-risk potential accidents were recorded during the year.",
        "0.6 LTIF reported by KCC following two minor injuries, and continues to focus on safety learning and prevention.",
        "100% crew retention rate in 2025.",
        "Women represented 48% of the Group workforce in 2025, with 36% of management positions held by women.",
      ],
    } satisfies TargetsCard,
  },
  governance: {
    label: "Governance",
    heading: "Trusted and responsible partner",
    paragraphs: [
      "Trust is essential in our global industry that is built on long-term relationships and complex supply chains. We are committed to conducting business with integrity, transparency, and accountability while maintaining high standards of governance and responsible business conduct.",
      "Through strong compliance policies, effective risk management, and a clear set of values, we aim to be a trusted partner for customers, employees, investors, suppliers, and the communities in which we operate.",
    ],
    focus: [
      "Business ethics, compliance, and anti-corruption.",
      "Corporate governance and accountability.",
      "Responsible and transparent business practices.",
      "Risk management and resilience.",
      "Respect for human rights and responsible conduct across our value chain.",
    ],
    image: esgGovernanceImage,
    imageAlt: "Aerial view of deep teal ocean water",
    card: {
      targets: [
        "Zero corruption cases.",
        "Zero facilitation payments accepted or paid.",
        "100% participation in cybersecurity awareness training with continuous improvement of cyber resilience across shore and vessel operations.",
      ],
      performance: [
        "Zero corruption convictions or fines.",
        "Three reported facilitation payment requests, down from seven in 2024.",
        "DNV Cyber assessments confirmed generally strong cybersecurity maturity across assessed systems",
        "Continued active participation in the Maritime Anti-Corruption Network (MACN).",
      ],
    } satisfies TargetsCard,
  },
  performanceYear: 2025,
} as const;

export type StakeholderIcon =
  | "employees"
  | "customers"
  | "investors"
  | "financing"
  | "regulators"
  | "suppliers"
  | "communities";

export const stakeholdersPage = {
  meta: {
    title: "Our stakeholders",
    description:
      "Klaveness prioritizes transparency and trust through open dialogue with its stakeholders.",
  },
  hero: {
    eyebrow: "Our stakeholders",
    statement: [
      { text: "Klaveness prioritizes " },
      { text: "transparency", strong: true },
      { text: " and " },
      { text: "trust", strong: true },
      { text: " through open dialogue" },
    ] satisfies RichLine,
    image: shipMountainsImage,
  },
  intro: {
    eyebrow: "Working with our stakeholders",
    paragraphs: [
      "Strong relationships are essential to how we operate and create long-term value. We seek to maintain an open and transparent dialogue with our stakeholders to better understand their expectations, identify opportunities for improvement, and ensure we continue to develop our business responsibly. Engagement with stakeholders helps inform our decisions, strengthen trust, and support the Torvald Klaveness Group vision of improving the nature of shipping.",
      "Our stakeholders provide valuable insight into the opportunities and challenges facing both our business and the maritime industry. Through regular engagement, we seek to understand their perspectives, respond to their concerns, and identify areas where collaboration can create shared value. These discussions help shape our strategy, ESG priorities, risk management, and long-term business development.",
    ],
    image: digitalShipImage,
    imageAlt: "Digital illustration of a cargo ship drawn in lines of blue light on a dark sea",
  },
  groups: [
    {
      name: "Employees",
      icon: "employees",
      who: "Employees of the Torvald Klaveness Group, directly or indirectly, across our offices and operations worldwide.",
      concerns:
        "Health and safety, wellbeing, professional and personal development, leadership, diversity and inclusion, fair employment practices, and long-term opportunities.",
      engage:
        "Through regular dialogue, development reviews, training programs, employee surveys, leadership engagement, and ongoing competence development initiatives.",
    },
    {
      name: "Customers",
      icon: "customers",
      who: "Industrial customers, cargo owners, charterers, traders, and users of our digital services.",
      concerns:
        "Service quality, reliability, safety, commercial performance, transparency, emissions, and operational efficiency.",
      engage:
        "Through daily operational collaboration, regular customer meetings, joint improvement initiatives, and long-term partnerships focused on creating value across maritime supply chains.",
    },
    {
      name: "Investors",
      icon: "investors",
      who: "Shareholders and investment partners.",
      concerns:
        "Financial performance, dividends, long-term value creation, governance, risk management, strategy, and sustainability-related opportunities and risks.",
      engage:
        "Through annual and quarterly reporting, investor presentations, meetings with management, and ongoing communication regarding strategy and business performance.",
    },
    {
      name: "Financing partners",
      icon: "financing",
      who: "Banks, bond investors, and other capital providers.",
      concerns:
        "Financial strength, liquidity, debt servicing capability, governance, compliance, environmental performance, and long-term business resilience.",
      engage:
        "Through regular reporting, financing discussions, sustainability-related disclosures, and ongoing dialogue throughout the duration of financing arrangements.",
    },
    {
      name: "Regulators and industry bodies",
      icon: "regulators",
      who: "International, regional, and national regulatory authorities, industry associations, classification societies, and flag states.",
      concerns:
        "Compliance, safety, environmental performance, fair business practices, and responsible operations.",
      engage:
        "Through compliance activities, industry working groups, consultation processes, and participation in industry forums and associations.",
    },
    {
      name: "Suppliers and business partners",
      icon: "suppliers",
      who: "Suppliers, service providers, shipyards, agents, technology partners, and other counterparties.",
      concerns:
        "Long-term relationships, responsible business conduct, financial reliability, and clear commercial expectations.",
      engage:
        "Through regular collaboration, supplier assessments, contract management, and ongoing dialogue focused on quality, safety, compliance, and performance.",
    },
    {
      name: "Communities and society",
      icon: "communities",
      who: "The communities in which we operate, educational institutions, industry partners, NGOs, and society at large.",
      concerns:
        "Environmental impact, responsible business conduct, maritime safety, employment opportunities, transparency, and the industry’s contribution to sustainable development.",
      engage:
        "Through educational partnerships, industry initiatives, community engagement, sustainability reporting, and collaboration with organizations with like-minded interests.",
    },
  ] satisfies {
    name: string;
    icon: StakeholderIcon;
    who: string;
    concerns: string;
    engage: string;
  }[],
  closing:
    "Stakeholder engagement is an important part of how we identify opportunities, manage risks, and make informed decisions across the Klaveness Group. The insights we gain through ongoing dialogue help shape our strategy, strengthen our ESG priorities, and ensure we remain focused on the issues that matter most to our business and stakeholders. By listening, learning, and collaborating, we seek to build lasting relationships that support long-term value creation and responsible business practices.",
} as const;
