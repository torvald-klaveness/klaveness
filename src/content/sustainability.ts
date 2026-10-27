import heroTemporary from "@/assets/images/home/hero-ocean.webp";
import esgEnvironmentalImage from "@/assets/images/sustainability/esg-environmental.webp";
import esgGovernanceImage from "@/assets/images/sustainability/esg-governance.webp";
import esgSocialImage from "@/assets/images/sustainability/esg-social.webp";
import ceoImage from "@/assets/images/sustainability/ernst-meyer-square.webp";
import baltazarImage from "@/assets/images/sustainability/mv-baltazar.webp";
import shipMountainsImage from "@/assets/images/sustainability/ship-towards-mountains.webp";
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
  // Client's revised text (October 2026).
  hero: {
    eyebrow: "Sustainability",
    statement: [
      { text: "Committed to making a " },
      { text: "positive contribution", strong: true },
      { text: " to society" },
    ] satisfies RichLine,
    image: heroTemporary,
  },
  approach: {
    eyebrow: "Our approach",
    quote:
      "Shipping is essential for delivering food, energy, and metals to the world, but the industry must continue to evolve. For Klaveness, sustainability means taking responsibility for our impact today, while at the same time investing in the solutions, partnerships, and people that will help shape a safer and lower-emission future for shipping.",
    attribution: "Ernst Meyer, CEO Torvald Klaveness",
    image: ceoImage,
    imageAlt: "Portrait of Ernst Meyer, CEO of Torvald Klaveness",
  },
  improving: {
    eyebrow: "What it means",
    paragraphs: [
      "For us, improving the nature of shipping means more than reducing emissions. It means conducting business responsibly, protecting the wellbeing of people, and strengthening the long-term resilience of the maritime industry.",
      "We pursue this through innovative business models, new collaborations, and operational excellence working closely with our customers and partners. Our approach guides how we manage risk, engage with stakeholders, develop our people, and contribute to the industry's transition towards a safer, lower-emission future.",
    ],
    image: baltazarImage,
    imageAlt: "The combination carrier MV Baltazar at sea, fitted with two rotor sails",
  },
  tradingEfficiency: {
    eyebrow: "Trading Efficiency",
    image: tradingEfficiencyImage,
    imageAlt:
      "Aerial view of a red bulk carrier at sea with a digital data overlay tracing its route",
    paragraphs: [
      "Trading Efficiency is a key pillar of our sustainability approach. More efficient trading patterns, better asset utilization, improved planning, and stronger coordination between stakeholders can reduce emissions, lower resource consumption, improve safety, and create greater value across the supply chain.",
      "Through our vessels, freight solutions, and digital services, we help customers navigate an increasingly complex operating environment while contributing to a more sustainable shipping industry.",
    ],
    link: { label: "More about Trading Efficiency", href: "/trading-efficiency" },
  },
  esg: {
    eyebrow: "Our sustainability priorities",
    paragraphs: [
      "As an owner and investor, Torvald Klaveness has a responsibility to create long-term value while considering the environmental and social impact of our activities and investments.",
      "We set expectations for responsible business conduct across the Group, integrate sustainability-related risks and opportunities into strategy, ownership and capital-allocation decisions, and support our portfolio companies in addressing the issues most relevant to their operations. Operational targets and initiatives are developed and reported by the individual companies responsible for delivering them, while Torvald Klaveness provides strategic direction, oversight and support where relevant.",
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
    heading: "Supporting the transition to more sustainable shipping",
    paragraphs: [
      "Torvald Klaveness supports the transition towards a lower-emission and more resource-efficient maritime industry through its ownership, investments and strategic priorities. We encourage our portfolio companies to identify and manage their most material environmental impacts, develop credible transition plans and explore commercial solutions that can improve both environmental and economic performance.",
      "Our role is to support progress across the portfolio while recognizing that environmental priorities, targets and actions must reflect the activities and responsibilities of each individual business.",
    ],
    focusTitle: "We do this through:",
    focus: [
      "Integrating environmental risks and opportunities into strategy and investment decisions.",
      "Supporting portfolio companies in developing relevant targets and transition plans.",
      "Encouraging innovation, collaboration and more efficient use of assets and resources.",
      "Monitoring environmental performance through active ownership and governance.",
      "Reducing the impact of activities directly controlled by Torvald Klaveness.",
    ],
    image: esgEnvironmentalImage,
    imageAlt: "Close-up of ocean waves at sunset",
  },
  social: {
    label: "Social",
    working: {
      heading: "Creating a safe, inclusive and responsible working environment",
      paragraphs: [
        "Torvald Klaveness seeks to provide a safe, inclusive and respectful working environment and to promote responsible employment practices across the Group.",
        "We set expectations for health and safety, equal opportunities, professional development and respect for human and labor rights, while recognizing that individual portfolio companies must manage the specific people-related risks associated with their operations.",
        "Through active ownership, dialogue and shared learning, we support our businesses in strengthening their organizational capabilities, workplace cultures and approach to people-related risks.",
      ],
    },
    beyond: {
      heading: "Contributing beyond our business",
      paragraphs: [
        "We recognize a responsibility beyond our own activities and seek to contribute positively to the communities and societies connected to our business.",
        "Our contribution includes promoting equal opportunities and responsible business conduct, supporting learning and competence development, and maintaining clear expectations for human and labor rights across our value chain.",
        "We also support selected humanitarian and community initiatives, including organizations assisting people affected by conflict, displacement and hardship.",
      ],
    },
    focus: [
      "Health, safety and wellbeing across the Group.",
      "Diversity, inclusion and equal opportunities.",
      "Learning, competence development and organizational capability.",
      "Respect for human and labor rights.",
      "Responsible engagement with communities and society.",
    ],
    image: esgSocialImage,
    imageAlt: "Two Klaveness colleagues in conversation in the office",
  },
  governance: {
    label: "Governance",
    heading: "Responsible ownership and sound governance",
    paragraphs: [
      "Responsible ownership is central to how Torvald Klaveness creates and protects long-term value. We set clear expectations for integrity, compliance, risk management and accountability, and work through the boards and management teams of our portfolio companies to support sound governance and responsible business conduct.",
      "Our approach is grounded in clear decision-making structures, transparent reporting, and respect for internationally recognized principles relating to business ethics, human rights and responsible value chains. Through active ownership and ongoing dialogue, we seek to ensure that sustainability-related risks and opportunities receive appropriate attention across the portfolio.",
    ],
    focus: [
      "Responsible ownership, corporate governance and accountability.",
      "Business ethics, compliance and anti-corruption.",
      "Integration of sustainability-related risks and opportunities into strategy and capital allocation.",
      "Effective risk management, resilience and transparent reporting.",
      "Respect for human rights and responsible conduct across our value chain.",
    ],
    structureNote: {
      text: "See the main governance structure",
      linkLabel: "here",
      href: "/about/governance",
    },
    image: esgGovernanceImage,
    imageAlt: "Aerial view of deep teal ocean water",
  },
} as const;

export type StakeholderIcon =
  | "employees"
  | "customers"
  | "financing"
  | "regulators"
  | "suppliers"
  | "communities";

export const stakeholdersPage = {
  meta: {
    title: "Our stakeholders",
    description:
      "Klaveness builds trust through clear expectations and open dialogue with its stakeholders.",
  },
  hero: {
    eyebrow: "Our stakeholders",
    statement: [
      { text: "Building " },
      { text: "trust", strong: true },
      { text: " through clear expectations and " },
      { text: "open dialogue", strong: true },
    ] satisfies RichLine,
    image: shipMountainsImage,
  },
  intro: {
    eyebrow: "Working with our stakeholders",
    paragraphs: [
      "Constructive stakeholder relationships support responsible ownership and long-term value creation. Torvald Klaveness engages directly with the stakeholders connected to our role as owner, investor and employer, while our portfolio companies lead engagement with the customers, employees, suppliers, regulators and communities most closely connected to their operations. Across the Group, we expect engagement to be open, relevant and grounded in a clear understanding of responsibilities.",
    ],
  },
  groups: [
    {
      name: "Employees",
      icon: "employees",
      who: "Employees of Torvald Klaveness and, more broadly, the people employed by our portfolio companies.",
      priorities:
        "Health, safety and wellbeing; fair and inclusive employment practices; strong leadership; professional development; and confidence in the long-term direction of the business.",
      engage:
        "Torvald Klaveness engages directly with its own employees through regular dialogue, development conversations, surveys, training and leadership communication. Portfolio companies are responsible for engagement with their employees, supported by Group expectations and opportunities for shared learning.",
    },
    {
      name: "Customers",
      icon: "customers",
      who: "The industrial companies, cargo owners, charterers, traders and other users served by our portfolio companies.",
      priorities:
        "Reliable and high-quality services, safety, commercial performance, transparency, operational efficiency and progress on relevant environmental impacts.",
      engage:
        "Customer relationships are managed by the relevant portfolio companies through day-to-day collaboration, regular meetings, improvement initiatives and long-term commercial partnerships. Torvald Klaveness supports its businesses in strengthening their customer propositions and addressing material risks and opportunities.",
    },
    {
      name: "Financing partners",
      icon: "financing",
      who: "Banks, bond investors and other providers of capital to Torvald Klaveness or its portfolio companies.",
      priorities:
        "Financial strength, liquidity, governance, compliance, risk management, relevant environmental performance and long-term business resilience.",
      engage:
        "Through financial and sustainability-related reporting, financing discussions and ongoing dialogue relevant to each arrangement. Engagement is led by the entity responsible for the financing, with Torvald Klaveness providing oversight where appropriate.",
    },
    {
      name: "Regulators and industry bodies",
      icon: "regulators",
      who: "Authorities and industry organizations relevant to Torvald Klaveness’ ownership activities and to the operations of our portfolio companies, including national and international regulators, industry associations, classification societies and flag states.",
      priorities:
        "Compliance, safety, environmental performance, transparent reporting, fair business practices and responsible conduct.",
      engage:
        "Torvald Klaveness participates in dialogue relevant to its role as owner and investor. Operational regulatory engagement, compliance activities and participation in specialized industry forums are led by the relevant portfolio companies.",
    },
    {
      name: "Suppliers and business partners",
      icon: "suppliers",
      who: "Advisers, service providers, technology partners and other counterparties to Torvald Klaveness, together with the suppliers and operational partners engaged by our portfolio companies.",
      priorities:
        "Clear expectations, fair and reliable commercial relationships, responsible business conduct, timely decision-making and appropriate management of risk.",
      engage:
        "Through procurement and contracting processes, assessments, regular collaboration and dialogue on quality, integrity, compliance and performance. Each Group company is responsible for managing the relationships and risks within its own supply chain.",
    },
    {
      name: "Communities and society",
      icon: "communities",
      who: "The communities connected to our offices and investments, educational and research institutions, non-governmental organizations and wider society.",
      priorities:
        "Responsible business conduct, environmental and social impacts, transparency, employment and competence development, and the contribution of shipping to society.",
      engage:
        "Through selected educational, humanitarian and community initiatives; industry collaboration; public reporting; and dialogue about issues relevant to our role as a long-term owner. Portfolio companies engage separately with the communities most directly affected by their operations.",
    },
  ] satisfies {
    name: string;
    icon: StakeholderIcon;
    who: string;
    priorities: string;
    engage: string;
  }[],
} as const;
