import type { StaticImageData } from "next/image";

import heroImage from "@/assets/images/about/leadership-hero.webp";
import christianRynningTonnesen from "@/assets/images/about/people/christian-rynning-tonnesen.webp";
import elisabethTorstad from "@/assets/images/about/people/elisabeth-torstad.webp";
import mehrdadAmini from "@/assets/images/about/people/mehrdad-amini.webp";
import rebekkaGlasserHerlofsen from "@/assets/images/about/people/rebekka-glasser-herlofsen.webp";
import trondHaraldKlaveness from "@/assets/images/about/people/trond-harald-klaveness.webp";
import engebretDahm from "@/assets/images/about/people/engebret-dahm.webp";
import ernstMeyer from "@/assets/images/about/people/ernst-meyer.webp";
import fabianFlaaten from "@/assets/images/about/people/fabian-flaaten.webp";
import henrikSembRonningen from "@/assets/images/about/people/henrik-semb-ronningen.webp";
import ingridKylstad from "@/assets/images/about/people/ingrid-kylstad.webp";
import michaelJorgensen from "@/assets/images/about/people/michael-jorgensen.webp";
import nadiaNaess from "@/assets/images/about/people/nadia-naess.webp";
import trineHellum from "@/assets/images/about/people/trine-hellum.webp";
import type { RichLine } from "@/content/types";

export type Person = {
  /** Also the old bio URL on klaveness.com (e.g. /ernst-meyer). */
  slug: string;
  /** Page the bio panel lives on. */
  group: "leadership" | "board";
  name: string;
  role: string;
  image: StaticImageData;
  bio: string[];
};

/*
 * Names, roles and bios from the current klaveness.com Executive Committee and
 * Board of Directors pages, and the individual bio pages they link to.
 */
export const people = {
  "ernst-meyer": {
    group: "leadership",
    slug: "ernst-meyer",
    name: "Ernst Meyer",
    role: "President & CEO",
    image: ernstMeyer,
    bio: [
      "Ernst Meyer joined Torvald Klaveness in 2019 in the roles of Chief Operations Officer and Managing Director for Klaveness Ship Management. In January 2022, he was appointed new Chief Executive Officer for Torvald Klaveness. Prior to joining Torvald Klaveness, Meyer worked 20 years for Det Norske Veritas (DNV) in various executive positions.",
      "He holds a Master of Sciences in Naval Architecture and Marine Engineering from the Norwegian University of Science and Technology in Trondheim.",
    ],
  },
  "trine-hellum": {
    group: "leadership",
    slug: "trine-hellum",
    name: "Trine Hellum",
    role: "Chief HR Officer",
    image: trineHellum,
    bio: [
      "Trine Hellum was appointed Head of HR in 2008. Started working for Klaveness in 1981 with several years as Financial Manager.",
      "Financial education from BI Norwegian Business School and Master Studies in HR Management.",
    ],
  },
  "fabian-flaaten": {
    group: "leadership",
    slug: "fabian-flaaten",
    name: "Fabian Flaaten",
    role: "Chief Financial Officer",
    image: fabianFlaaten,
    bio: [
      "Fabian Flaaten has been with Torvald Klaveness as Chief Financial Officer (CFO) since October 2025. Prior to that, he served as CFO of House of Control for over 10 years, where he played a key role in scaling the company from a venture-backed growth phase through IPO and later acquisition. Earlier experience included 10 years with Aker Solutions in Norway and the U.S., taking on roles in commercial management, cost control, and business development on large subsea projects.",
      "He holds a Master of Arts in Economics & Management from The University of St. Andrews and studies at BI Norwegian Business School.",
    ],
  },
  "engebret-dahm": {
    group: "leadership",
    slug: "engebret-dahm",
    name: "Engebret Dahm",
    role: "CEO, Klaveness Combination Carriers",
    image: engebretDahm,
    bio: [
      "Engebret Dahm, a Norwegian national, born 1965, has more than 30 years’ experience in the shipping and finance industries. Mr. Dahm was appointed CEO of Klaveness Combination Carriers ASA in 2018 and before that he held the position as Head of Combination Carriers in Torvald Klaveness. Prior to that he was the CEO of Norwegian Car Carriers AS and he worked in the period 1998–2000 for Crédit Agricole CIB in Paris. In the period 1990–1998 and 2000–2006, he had various positions in Torvald Klaveness, amongst others as Head of Klaveness’ transloader and beltunloader business.",
      "Dahm is a board member of Oslo Shipowners’ Association.",
      "He holds a degree in business from the Norwegian School of Economics (NHH).",
    ],
  },
  "ingrid-kylstad": {
    group: "leadership",
    slug: "ingrid-kylstad",
    name: "Ingrid Kylstad",
    role: "Managing Director, Klaveness Digital",
    image: ingridKylstad,
    bio: [
      "Prior to joining Klaveness, Kylstad was Chief Operating Officer in Katapult Ocean following several years working with EU public affairs, including for the Norwegian Shipowners Association. She is currently a non-executive director in Solstad Offshore ASA and GC Rieber Salt.",
      "Kylstad holds an MSc in European Studies and Identities from the London School of Political Science and Executive Education from Solvay Brussels School of Economics and Management and from INSEAD.",
    ],
  },
  "michael-jorgensen": {
    group: "leadership",
    slug: "michael-jorgensen",
    name: "Michael Jørgensen",
    role: "EVP, Head of Dry Bulk",
    image: michaelJorgensen,
    bio: [
      "With over two decades of shipping experience, Michael Jørgensen serves as EVP and Head of Dry Bulk at Torvald Klaveness, a leading ship operator known for integrating innovation, sustainability, and digital solutions into its operations. In addition to mainstream operations, Klaveness Dry Bulk and Marubeni Corporation run the Panamax pool Baumarine by MaruKlav, where Jørgensen holds the position of Managing Director.",
      "Driven by a passion for challenging the status quo and seeking new ways to deliver value, Jørgensen is dedicated to enhancing the sustainability and digitalization of bulk shipping and together with his team, launched the freight decision-making platform Market Manager by Klaveness in 2023.",
    ],
  },
  "henrik-semb-ronningen": {
    group: "leadership",
    slug: "henrik-semb-ronningen",
    name: "Henrik Semb Rønningen",
    role: "General Counsel – Chief Legal and Compliance Officer",
    image: henrikSembRonningen,
    bio: [
      "Henrik Semb Rønningen has been with Torvald Klaveness since February 2018, serving in legal roles, and has held the position of General Counsel / Chief Legal and Compliance Officer since 2022.",
      "In 2019, Henrik completed a secondment with the English law firm Stephenson Harwood LLP in London. Prior to joining Klaveness, he worked at the Norwegian law firm Schjødt and served as a deputy judge in Oslo.",
      "Henrik holds a Master of Laws degree from the Faculty of Law, University of Oslo.",
    ],
  },
  "nadia-naess": {
    group: "leadership",
    slug: "nadia-naess",
    name: "Nadia Næss",
    role: "Chief Financial Investment Officer",
    image: nadiaNaess,
    bio: [
      "Nadia Næss was appointed Chief Financial Investment Officer of Torvald Klaveness in April 2022. Næss held Investment Director roles at DNB Asset Management and Jebsen Asset Management after starting her career as Financial Analyst at Grieg Shipping Group.",
      "Næss holds a Master of Science in Financial Economics from BI Norwegian Business School.",
    ],
  },
  "trond-harald-klaveness": {
    group: "board",
    slug: "trond-harald-klaveness",
    name: "Trond Harald Klaveness",
    role: "Chair of the Board",
    image: trondHaraldKlaveness,
    bio: [
      "Trond Harald Klaveness is the controlling shareholder of Torvald Klaveness. He joined the Board of Directors in 2011, after six years as CEO of the Company and in total 20 years in Torvald Klaveness.",
      "He has a business degree from Boston University, and prior to his career in Klaveness he had several positions within the shipping industry in the US and USSR.",
    ],
  },
  "elisabeth-torstad": {
    group: "board",
    slug: "elisabeth-torstad",
    name: "Elisabeth Tørstad",
    role: "Board Member",
    image: elisabethTorstad,
    bio: [
      "Elisabeth Tørstad is a Norwegian national serving as CEO of Asplan Viak. Tørstad has more than 25 years’ experience in the shipping and energy industries, with solid international experience from management groups, as well as holding CEO positions in subsidiaries of DNV GL.",
      "Tørstad has Board experience from several stock-listed international industrial groups. She currently holds positions in Aker Solutions and PRIO, in addition to positions in the US-based Board of Trustees of UL Research Institutes and Board of Directors of UL Solutions. Previous Board positions have included Hexagon Composites ASA, DigitalNorway, as well as part of the Corporate Assembly of Norsk Hydro.",
      "Tørstad holds an MSc in Physics from the University of Oslo, with additional qualifications in technology transformation and digital strategy from the University of California Haas School of Business and INSEAD.",
    ],
  },
  "christian-rynning-tonnesen": {
    group: "board",
    slug: "christian-rynning-tonnesen",
    name: "Christian Rynning-Tønnesen",
    role: "Board Member",
    image: christianRynningTonnesen,
    bio: [
      "Christian Rynning-Tønnesen is the CEO of ICP Infrastructure. Prior to this, he was CEO of Statkraft and CEO of Norske Skog. Mr. Rynning-Tønnesen has an engineering degree from the Norwegian University of Science and Technology (NTNU).",
      "He joined the Board of Directors in 2005 and has several other directorships including Chairman of the Board of VCOM.",
    ],
  },
  "rebekka-glasser-herlofsen": {
    group: "board",
    slug: "rebekka-glasser-herlofsen",
    name: "Rebekka Glasser Herlofsen",
    role: "Board Member",
    image: rebekkaGlasserHerlofsen,
    bio: [
      "Rebekka Glasser Herlofsen, a Norwegian national, born 1970, has 25 years’ experience in the shipping and finance industries. She has served on the management teams of leading Norwegian shipping companies such as Bergesen/BW Gas, Torvald Klaveness and Wallenius Wilhelmsen, most recently as the CFO of Wallenius Wilhelmsen in the period 2017–2020. She is now an independent consultant, investor and board professional.",
      "Herlofsen has served in different capacities on Norwegian and international boards, including as Chair of Cermaq ASA, and as a member of the DNV GL board. She is currently a board member of Equinor ASA, Wilh. Wilhelmsen Holding ASA, BW Offshore ASA, Rockwool International A/S, SATS ASA, she is Chair of Handelsbanken Norge and Chair of the marine insurer Norwegian Hull Club and Chair of Council DNV Foundation.",
      "Herlofsen holds a degree in business from the Norwegian School of Economics (NHH) and is a certified financial analyst.",
    ],
  },
  "mehrdad-amini": {
    group: "board",
    slug: "mehrdad-amini",
    name: "Mehrdad Amini",
    role: "Board Member",
    image: mehrdadAmini,
    bio: [
      "Amini is currently Group CFO and EVP Strategy at Møller Mobility Group AS, one of the leading automotive companies in the Nordics and Baltics. In his role, he is responsible for the Group’s finance functions as well as company strategy, M&A, and investments across the value chain.",
      "Prior to joining Møller Mobility Group, Amini was Investment Director at Aars and served as a Board member of Møller Mobility Group. He has also worked as Investment Manager at Aker ASA and held positions at Aker Solutions and DNB Bank ASA. He holds a MSc in Finance from ESADE Business School in Barcelona and a BSc in Finance from BI Norwegian Business School.",
    ],
  },
} satisfies Record<string, Person>;

export type PersonSlug = keyof typeof people;

export const leadershipPage = {
  meta: {
    title: "Leadership team",
    description:
      "The leadership team oversees the daily operations of our business and drives the strategic direction.",
  },
  hero: {
    eyebrow: "Leadership team",
    statement: [
      { text: "The leadership team oversees the " },
      { text: "daily operations", strong: true },
      { text: " of our business and drives the " },
      { text: "strategic direction", strong: true },
      { text: "." },
    ] satisfies RichLine,
    image: heroImage,
  },
  teams: [
    {
      id: "executive-committee",
      title: "Executive Committee",
      layout: "large",
      members: [
        "ernst-meyer",
        "trine-hellum",
        "fabian-flaaten",
        "engebret-dahm",
        "ingrid-kylstad",
        "michael-jorgensen",
      ],
    },
    {
      id: "holding-management-team",
      title: "Holding Management Team",
      layout: "compact",
      members: [
        "ernst-meyer",
        "henrik-semb-ronningen",
        "fabian-flaaten",
        "nadia-naess",
      ],
    },
  ] satisfies Team[],
} as const;

/* Content from klaveness.com/about/board-of-directors. */
export const boardPage = {
  meta: {
    title: "Board of directors",
    description:
      "Klaveness’ Board of Directors comprises a diverse background of experiences and perspectives.",
  },
  hero: {
    eyebrow: "Board of directors",
    statement: [
      { text: "Klaveness’ Board of Directors comprises a diverse background of " },
      { text: "experiences and perspectives", strong: true },
    ] satisfies RichLine,
    // Same photograph as on the current site's Board page.
    image: heroImage,
  },
  teams: [
    {
      id: "board-of-directors",
      title: "Board of Directors",
      layout: "compact",
      members: [
        "trond-harald-klaveness",
        "elisabeth-torstad",
        "christian-rynning-tonnesen",
        "rebekka-glasser-herlofsen",
        "mehrdad-amini",
      ],
    },
  ] satisfies Team[],
} as const;

export type Team = {
  id: string;
  title: string;
  /** `large`: four per row. `compact`: five per row. */
  layout: "large" | "compact";
  members: PersonSlug[];
};

export const bioPages = {
  leadership: "/about/executive-committee",
  board: "/about/board-of-directors",
} as const;

/** Link that opens a person's bio panel on the page it lives on. */
export const bioHref = (slug: PersonSlug) => `${bioPages[people[slug].group]}#${slug}`;
