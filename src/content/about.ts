import type { StaticImageData } from "next/image";

import annualReportCover from "@/assets/images/about/annual-report-cover.webp";
import complianceHeroImage from "@/assets/images/about/compliance-hero.webp";
import financialsHeroImage from "@/assets/images/about/financials-hero.webp";
import governanceHeroImage from "@/assets/images/about/governance-hero.webp";
import heroImage from "@/assets/images/about/hero-mv-baltazar.webp";
import t1946 from "@/assets/images/about/timeline/1946.webp";
import t1958 from "@/assets/images/about/timeline/1958.webp";
import t1960s from "@/assets/images/about/timeline/1960s.webp";
import t1975 from "@/assets/images/about/timeline/1975.webp";
import t2006 from "@/assets/images/about/timeline/2006.webp";
import t2011 from "@/assets/images/about/timeline/2011.webp";
import t2017 from "@/assets/images/about/timeline/2017.webp";
import t2019 from "@/assets/images/about/timeline/2019.webp";
import t2020 from "@/assets/images/about/timeline/2020.webp";
import t2022 from "@/assets/images/about/timeline/2022.webp";
import t2022to23 from "@/assets/images/about/timeline/2022-23.webp";
import t2023 from "@/assets/images/about/timeline/2023.webp";
import t2024 from "@/assets/images/about/timeline/2024.webp";
import t2026 from "@/assets/images/about/timeline/2026.webp";
import tFounder from "@/assets/images/about/timeline/torvald-klaveness.webp";
import improvingImage from "@/assets/images/about/values/improving.webp";
import ofShippingImage from "@/assets/images/about/values/of-shipping.webp";
import theNatureImage from "@/assets/images/about/values/the-nature.webp";
import visionImage from "@/assets/images/about/values/vision.webp";
import type { RichLine } from "@/content/types";

export type TimelineEntry = {
  /** Year label shown on the card; the founder card uses his name instead. */
  label: string;
  paragraphs: string[];
  image: StaticImageData;
  imageAlt: string;
  /** Archive images that are too small to fill the card are shown framed. */
  framed?: boolean;
};

/*
 * Content from the current klaveness.com/about/about-us page, presented in
 * the new design. The timeline runs oldest to newest so the story reads in
 * order (the old site showed it newest first).
 */
export const aboutPage = {
  meta: {
    title: "About us",
    description:
      "Klaveness is a family-owned shipping group with nearly 80 years of heritage, working to improve trading efficiency across global seaborne supply chains.",
  },
  hero: {
    eyebrow: "About us",
    statement: [
      { text: "Improving", strong: true },
      { text: " the nature of " },
      { text: "shipping", strong: true },
    ] satisfies RichLine,
    image: heroImage,
  },
  // Client's revised text (October 2026).
  whoWeAre: {
    eyebrow: "Who we are",
    statement:
      "Klaveness is a family-owned shipping group with nearly 80 years of heritage in the shipping industry. Through our portfolio companies, we work to improve trading efficiency across global seaborne supply chains by combining maritime expertise, innovative business models, and digital capabilities.",
    paragraphs: [
      "Since 1946, we have explored new ways to move cargo more efficiently. While our companies operate in different parts of the value chain, they are united by a shared vision: improving the nature of shipping.",
    ],
    image: visionImage,
    imageAlt: "A vessel on the horizon at dusk",
  },
  timeline: {
    eyebrow: "80 years of innovation",
    statement:
      "Since 1946, Klaveness has introduced new vessel concepts, business models, and technologies that have helped move the industry forward.",
    paragraphs: [
      "From combination carrier concepts and new operating models to digital solutions that improve decision-making across supply chains, our history is defined by a willingness to explore new ideas and challenge established thinking.",
      "Explore the milestones, people, and ideas that continue to influence who we are today and where we are headed next.",
    ],
    entries: [
      {
        label: "1946",
        paragraphs: [
          "In 1946, a young Norwegian named Torvald Faye Klaveness established his first company. His idea was to provide technical management and Norwegian seafarers to American ship owners. He soon expanded into brokering reefer vessels and used the proceeds to contract his first vessel, the MV Balao in 1950.",
        ],
        image: t1946,
        imageAlt: "Archive photograph of MV Balao, the first Klaveness vessel",
      },
      {
        label: "1958",
        paragraphs: [
          "In 1958, Klaveness built one of the first specialised bulk carriers, for the transportation of fertiliser from Norway. Three years later, Klaveness also became the first to transport cement in bulk.",
        ],
        image: t1958,
        imageAlt: "Archive photograph of a ship’s funnel bearing the Klaveness K",
      },
      {
        label: "1960s",
        paragraphs: [
          "In 1960, Klaveness ordered six self-unloading 16,500 dwt. bulk carriers together with three Norwegian partners. The vessels became the start of Bulkhandling in 1963, the first shipping pool ever. Torvald Klaveness believed that he had to provide cost-efficient and predictable transport services to his customers and that he had to find new and creative ways to do so.",
        ],
        image: t1960s,
        imageAlt: "Archive aerial photograph of a bulk carrier unloading in port",
      },
      {
        label: "Torvald Klaveness",
        paragraphs: [
          "His interest in developing new trades led him to partner with governments and companies in Africa, South America, Eastern Europe, Asia, and the former Soviet Union. These partnerships and pools enabled Klaveness to develop shipping solutions on a scale he could not have accomplished alone.",
          "Throughout his career, Torvald Klaveness wanted to do business in such a way that he became a trusted partner. In turn, he put his trust in the resourceful people around him and particularly in the captains and crew.",
        ],
        image: tFounder,
        imageAlt: "Portrait of Torvald Klaveness",
        framed: true,
      },
      {
        label: "1975",
        paragraphs: [
          "Tom Erik Klaveness started working for the company in 1975 and took over as President and Chief Executive Officer in 1989. Under his command, the company developed into a large global player in the dry bulk market.",
        ],
        image: t1975,
        imageAlt: "Bulk carrier sailing out of Sydney Harbour at dawn",
      },
      {
        label: "2006",
        paragraphs: [
          "In 2006, he handed over the job as Chief Executive Officer to his younger brother, Trond Harald Klaveness.",
        ],
        image: t2006,
        imageAlt: "Portrait of a Klaveness executive in the office",
      },
      {
        label: "2011",
        paragraphs: [
          "Following a Group split, the investment activities within real estate and stocks are taken over by Tom Erik Klaveness and his daughters. The core shipping activities continue under the ownership of Trond Harald Klaveness and his sons.",
          "As of September 2011, Lasse Kristoffersen became the new CEO of the company, the first CEO in the company’s history from outside the Klaveness family. The company’s vision to ‘improve the nature of shipping’ and company values are established under Kristoffersen’s guidance.",
        ],
        image: t2011,
        imageAlt:
          "Glass wall in the Klaveness office printed with “Improving the nature of shipping”",
      },
      {
        label: "2017",
        paragraphs: [
          "Klaveness spins out its digital activities as a separate company, Klaveness Digital AS with subsidiaries.",
          "Their flagship product is established as the supply chain management solution CargoValue, with an ambition to become the market’s leading solution for managing seaborne transportation.",
        ],
        image: t2017,
        imageAlt: "Hand holding a phone showing a Klaveness Digital application",
      },
      {
        label: "2019",
        paragraphs: [
          "The company established Klaveness Combination Carriers (KCC) together with existing investors and successfully completed a placement on the Oslo Stock Exchange.",
        ],
        image: t2019,
        imageAlt: "The Oslo Stock Exchange building, Børsen",
      },
      {
        label: "2020",
        paragraphs: [
          "Klaveness Dry Bulk joins forces with major Japanese trading house Marubeni to operate the world’s largest dry bulk Panamax pool, managed by MaruKlav Management Inc.",
        ],
        image: t2020,
        imageAlt: "Marubeni and Klaveness flags side by side on a table",
      },
      {
        label: "2022",
        paragraphs: [
          "Ernst Meyer becomes President and CEO of the company. Meyer was appointed to the position in January 2022 following his successful tenure as Chief Operating Officer and Managing Director of Klaveness Ship Management (KSM).",
        ],
        image: t2022,
        imageAlt: "Portrait of Ernst Meyer, President and CEO of Torvald Klaveness",
      },
      {
        label: "2022/23",
        paragraphs: [
          "Klaveness forges an investment team and establishes significant investment capacity.",
          "The company subsequently establishes a Holding structure for the portfolio of businesses.",
        ],
        image: t2022to23,
        imageAlt: "Two members of the Klaveness investment team",
      },
      {
        label: "2023",
        paragraphs: [
          "After three years operating the world’s largest Panamax pool, Klaveness Dry Bulk and Marubeni enter the next phase of their partnership. The deal sees Marubeni agree a 25% investment stake in Klaveness Dry Bulk.",
        ],
        image: t2023,
        imageAlt: "Klaveness Dry Bulk and Marubeni representatives signing their agreement",
      },
      {
        label: "2024",
        paragraphs: [
          "Klaveness Dry Bulk expands its commercial presence with the opening of a new office in Tokyo, Japan. The move strengthens Klaveness’ commitment to deliver localized client service and will open even more doors to the market Klaveness Dry Bulk and the wider Klaveness group.",
        ],
        image: t2024,
        imageAlt: "JP Tower in Tokyo, home of the Klaveness Japan office",
      },
      {
        label: "2026",
        paragraphs: [
          "KCC’s new generation of low carbon, zero-emission fuel prepared CABU vessels are delivered, marking a new era for the company.",
        ],
        image: t2026,
        imageAlt: "The combination carrier MV Baltazar at sea with its rotor sails",
      },
    ] satisfies TimelineEntry[],
  },
  vision: {
    eyebrow: "Why we exist",
    statement:
      "At Klaveness, everything we do is guided by a single vision: Improving the Nature of Shipping.",
    paragraphs: [
      "Shipping underpins global trade, yet many inefficiencies remain across the value chain. We believe better outcomes come from finding smarter ways for cargo owners, operators, and other stakeholders to work together. This belief is reflected in our focus on improving trading efficiency across global seaborne supply chains.",
      "This vision continues to guide our investments, our businesses, and the solutions we bring to market.",
    ],
    dimensionsTitle: "What it means to us:",
    dimensions: [
      {
        words: [{ text: "Improving", strong: true }],
        body: "We continuously seek better ways to solve challenges, create value, and advance the industry.",
        image: improvingImage,
        imageAlt: "Silhouette of a person looking through a telescope at sunset",
      },
      {
        words: [{ text: "The nature" }],
        body: "Our ambition goes beyond improving individual processes. We aim to address the underlying inefficiencies that shape how shipping operates.",
        image: theNatureImage,
        imageAlt: "Sunset over the open sea",
      },
      {
        words: [{ text: "Of " }, { text: "shipping", strong: true }],
        body: "Shipping is where we have deep expertise, where we see the greatest opportunity to make a difference, and where we continue to innovate.",
        image: ofShippingImage,
        imageAlt: "Aerial view of the deck of an orange bulk carrier",
      },
    ] satisfies { words: RichLine; body: string; image: StaticImageData; imageAlt: string }[],
  },
  values: {
    eyebrow: "How we work",
    title:
      "For generations, our values have shaped how we make decisions, build relationships, and create long-term value. They define what our customers, partners, and colleagues can expect from us.",
    items: [
      {
        name: "Craftsmanship",
        lead: "We know our business in detail:",
        points: [
          "Constantly update and renew competence",
          "Deliver as promised",
          "Build and contribute to teams",
          "Keep it simple",
        ],
      },
      {
        name: "Integrity",
        lead: "We act on our principles:",
        points: ["Ethics before profits", "Be honest", "Express your concerns", "Address problems"],
      },
      {
        name: "Commitment",
        lead: "We see through cycles:",
        points: [
          "Seek lasting solutions",
          "Never bet the company",
          "Support the customer",
          "Never give up",
        ],
      },
      {
        name: "Curiosity",
        lead: "We challenge established thinking:",
        points: [
          "Ask questions",
          "Look for new solutions",
          "Share with and build on insights of others",
          "Try a little, learn a lot",
        ],
      },
    ],
  },
} as const;

/* Content from klaveness.com/about/governance. */
export const governancePage = {
  meta: {
    title: "Governance",
    description:
      "Klaveness believes transparent and good corporate governance drives value creation by aligning stakeholder and company interests.",
  },
  hero: {
    eyebrow: "Governance",
    statement: [
      { text: "Klaveness believes " },
      { text: "transparent and good corporate governance", strong: true },
      { text: " drives value creation by aligning stakeholder and company interests" },
    ] satisfies RichLine,
    image: governanceHeroImage,
  },
  principles: {
    title: "The main governance structure and principles are as follows:",
    items: [
      "Trond Harald Klaveness is the sole owner and Chair of the Board of Rederiaksjeselskapet Torvald Klaveness (RASTK). The RASTK Board of Directors further comprises independent representatives with extensive corporate experience, Christian Rynning-Tønnesen, Rebekka Glasser Herlofsen, Elisabeth Tørstad, and Mehrdad Amini.",
      "Ernst Meyer is the President and CEO of Torvald Klaveness and heads up Klaveness Holding and the Klaveness Executive Committee.",
      "Torvald Klaveness has incorporated a holding structure with a top management team responsible for developing and implementing corporate strategy, execute active ownership of the existing portfolio of companies, drive new strategic investments, and actively manage a portfolio of liquid financial investments.",
      "The Group’s portfolio companies include Klaveness Digital (100% owned), Klaveness Dry Bulk (75% owned by Klaveness and 25% owned by Marubeni Corporation), and Klaveness Combination Carriers (KCC), in which Klaveness holds approximately 44% of the shares. KCC is listed on the Oslo Stock Exchange.",
      "KCC and KDB are governed through separate Boards of Directors, these consist of board representatives from the Holding team and external directors.",
      "Company headquarters are Oslo, Norway, with subsidiaries operating in Singapore, Japan, Manila, and Dubai.",
      "Safety, Risk Management, Compliance, Cyber-security, Human Rights and ESG in general are integral parts of our business. We have dedicated people, functions, policies, governance, and management attention in place to execute safe and responsible business practices. Our compliance program is mandatory for all employees, officers, and directors.",
      "We operate under a Code of Conduct that is accepted in writing by each employee, officer, and director.",
    ],
  },
  /** Group structure diagram — every figure comes from the principles above. */
  structure: {
    eyebrow: "Group structure",
    owner: {
      name: "Rederiaksjeselskapet Torvald Klaveness",
      detail: "Owner and Chair of the Board: Trond Harald Klaveness",
    },
    holding: {
      name: "Klaveness Holding",
      detail: "President & CEO: Ernst Meyer · Executive Committee",
    },
    companies: [
      {
        name: "Klaveness Digital",
        share: "100%",
        detail: "Fully owned",
        href: "https://www.klavenessdigital.com",
        external: true,
      },
      {
        name: "Klaveness Dry Bulk",
        share: "75%",
        detail: "25% Marubeni Corporation · Own Board of Directors",
        href: "/companies/klaveness-dry-bulk",
        external: false,
      },
      {
        name: "Klaveness Combination Carriers",
        share: "≈44%",
        detail: "Listed on the Oslo Stock Exchange · Own Board of Directors",
        href: "https://www.combinationcarriers.com",
        external: true,
      },
    ],
    footnote:
      "Headquarters in Oslo, Norway, with subsidiaries operating in Singapore, Japan, Manila, and Dubai.",
  },
} as const;

/* Content from klaveness.com/about/financials. Figures in USD million. */
export const financialsPage = {
  meta: {
    title: "Financials",
    description:
      "Klaveness’ key financial figures and Annual Reports, from revenue and EBITDA to balance sheet, employees and vessels.",
  },
  hero: {
    eyebrow: "Financials",
    statement: [
      { text: "Klaveness’ " },
      { text: "key financial figures", strong: true },
      { text: " and " },
      { text: "Annual Reports", strong: true },
      { text: " are made available below" },
    ] satisfies RichLine,
    image: financialsHeroImage,
  },
  keyFinancials: {
    title: "Key Financials",
    unit: "Figures in USD Million",
    years: [2025, 2024, 2023],
    /** Headline figures: the first value is the latest year, the second the year before. */
    highlights: [
      {
        label: "Gross operating revenue",
        values: [315, 409],
        prefix: "",
        suffix: "",
        unit: "USD million",
      },
      { label: "EBITDA", values: [65, 115], prefix: "", suffix: "", unit: "USD million" },
      { label: "Total assets", values: [963, 902], prefix: "", suffix: "", unit: "USD million" },
      {
        label: "Equity ratio (incl. minority interests)",
        values: [58, 64],
        prefix: "",
        suffix: "%",
        unit: "",
      },
    ],
    groups: [
      {
        title: "Profit and Loss",
        rows: [
          { label: "Gross operating revenue", values: ["315", "409", "434"] },
          { label: "EBITDA", values: ["65", "115", "123"] },
          {
            label: "Profit/(loss) after tax (excl. minority interests)",
            values: ["31", "42", "48"],
          },
          {
            label: "Profit/(loss) after tax (incl. minority interests)",
            values: ["45", "79", "88"],
          },
        ],
      },
      {
        title: "Balance Sheet",
        rows: [
          { label: "Total assets", values: ["963", "902", "873"] },
          { label: "Total equity (incl. minority interests)", values: ["560", "578", "512"] },
          { label: "Total equity (excl. minority interests)", values: ["391", "410", "358"] },
          { label: "Interest-bearing debt", values: ["279", "244", "258"] },
          { label: "Cash and cash equivalents", values: ["140", "149", "146"] },
        ],
      },
      {
        title: "Cash flow from investing activities",
        rows: [{ label: "Cash flow from investing activities", values: ["(89)", "(23)", "(36)"] }],
      },
      {
        title: "Equity ratios",
        rows: [
          { label: "Equity (excl. minority interests) ratio", values: ["41%", "45%", "41%"] },
          { label: "Equity (incl. minority interests) ratio", values: ["58%", "64%", "59%"] },
        ],
      },
      {
        title: "Employees",
        rows: [{ label: "Number of employees onshore", note: 1, values: ["161", "203", "221"] }],
      },
      {
        title: "Vessels",
        note: 2,
        rows: [
          { label: "Pool vessels", values: ["20", "25", "28"] },
          { label: "Klaveness chartering - chartered vessels", values: ["24", "30", "41"] },
          { label: "Combination carriers", values: ["16", "16", "16"] },
          { label: "Vessels under construction", values: ["3", "3", "3"] },
        ],
      },
    ],
    notes: [
      "Average number of employees in Oslo, Singapore, Manila and Tokyo",
      "Vessels hired in on spot voyages are not included",
    ],
  },
  reports: {
    title: "Financial Reports",
    cover: annualReportCover,
    coverAlt: "Cover of the Torvald Klaveness Annual Report 2025",
  },
} as const;

/* Content from klaveness.com/about/compliance. */
export const compliancePage = {
  meta: {
    title: "Compliance",
    description:
      "Klaveness strives to shape the future standards of compliance in global shipping: Code of Conduct, Counterparty Code of Conduct, whistleblowing and the Transparency Act report.",
  },
  hero: {
    eyebrow: "Compliance",
    statement: [
      { text: "Klaveness strives to shape the " },
      { text: "future standards of compliance", strong: true },
      { text: " in global shipping" },
    ] satisfies RichLine,
    image: complianceHeroImage,
  },
  sections: [
    {
      id: "code-of-conduct",
      title: "Code of Conduct",
      paragraphs: [
        "Our Code of Conduct defines our core legal and ethical standards and applies to all Klaveness directors, officers and employees, both on shore and on board our vessels.",
        "The code provides a framework for Klaveness’ governance, and defines the most important principles and ethical norms that form the basis for how we create value in Klaveness and conduct our business.",
        "These principles and values are implemented in our governance documents.",
      ],
      document: "codeOfConduct",
    },
    {
      id: "counterparty-code-of-conduct",
      title: "Counterparty Code of Conduct",
      paragraphs: [
        "Our Counterparty Code of Conduct defines the core legal and ethical standards we expect from our subcontractors, contractual counterparties and others we do business with.",
        "The code applies to all our contractual relationships through standard documents and clauses.",
      ],
      document: "counterpartyCode",
    },
    {
      id: "whistleblowing",
      title: "Reporting of Concerns (Whistleblowing)",
      paragraphs: [
        "Torvald Klaveness promotes a culture of openness and transparency. This is important for both the overall work environment and the well-being of the individual employee. Moreover, it is a key to optimal business operations. We therefore encourage whistleblowing regarding blameworthy activities or circumstances within our business.",
        "Employees and others who have reason to believe that there are blameworthy activities or circumstances (e.g. breach of applicable legislation) within our business have the right to and are encouraged to whistleblow. The same applies if they have reason to believe that there is a violation of Klaveness Code of Conduct.",
        "Employees who give notification in accordance with Section 2-4 of the Norwegian Working Environment Act and Klaveness Guidelines for Whistleblowing shall be protected against any unfavorable treatment as a reaction to the whistleblowing (“retaliation”).",
        "You can choose to be anonymous. In such case you will automatically be given a username and password so that you can log in to see the status of your case and securely communicate with the case handler. At any stage during the case handling you may also choose to reveal your identity.",
      ],
      portal: { label: "Whistleblowing", note: "Secure reporting portal, operated by Mitt Varsel" },
    },
    {
      id: "transparency-act",
      title: "Transparency Act 2025",
      paragraphs: [
        "This report has been developed to comply with the legal requirements as stated in the Norwegian Transparency Act of June 2021. Download the report below.",
      ],
      document: "transparencyAct",
    },
  ],
} as const;
