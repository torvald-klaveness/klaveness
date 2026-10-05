import type { StaticImageData } from "next/image";

import officeDubai from "@/assets/images/contact/office-dubai.webp";
import officeManila from "@/assets/images/contact/office-manila.webp";
import officeOslo from "@/assets/images/contact/office-oslo.webp";
import officeSingapore from "@/assets/images/contact/office-singapore.webp";
import officeTokyo from "@/assets/images/contact/office-tokyo.webp";
import worldImage from "@/assets/images/home/world-at-night.webp";
import type { RichLine } from "@/content/types";

export const contactPages = {
  offices: { label: "Offices", href: "/contact/offices" },
  team: { label: "Team", href: "/contact/team" },
} as const;

export type OfficeDetail = {
  /** Matches `city` in offices.ts (map position, time zone). */
  city: string;
  id: string;
  title: string;
  /** Second line on the office shortcuts under the map. */
  area: string;
  entities: string[];
  paragraphs: string[];
  visiting: string[];
  postal?: string[];
  switchboard?: { label: string; tel: string };
  telefax?: { label: string; tel: string };
  email?: string;
  image: StaticImageData;
  imageAlt: string;
  /** Focal point for the square crop. */
  imagePosition?: string;
};

/* Content from klaveness.com/contact/offices, in the same order. */
export const officesPage = {
  meta: {
    title: "Offices",
    description:
      "Torvald Klaveness has a global presence with offices in Oslo, Dubai, Singapore, Tokyo, and Manila. Addresses, switchboards and emails.",
  },
  hero: {
    eyebrow: "Offices",
    statement: [
      { text: "Torvald Klaveness has a global presence with offices in " },
      { text: "Oslo, Dubai, Singapore, Tokyo, and Manila", strong: true },
    ] satisfies RichLine,
    image: officeOslo,
  },
  offices: [
    {
      city: "Oslo",
      id: "oslo",
      title: "Headquarters - Oslo, Norway",
      area: "Headquarters",
      entities: [],
      paragraphs: [
        "Torvald Klaveness’ corporate head office is located in Oslo, Norway.",
        "The management and support of our global activities, as well as day-to-day activities within commercial management, ship owning and ship management, are carried out from our office in Drammensveien 260, 0283 Oslo.",
      ],
      visiting: ["Drammensveien 260", "NO – 0283 Oslo, Norway"],
      postal: ["P.O.Box 182 Skøyen", "NO – 0212 Oslo, Norway"],
      switchboard: { label: "+47 22 52 60 00", tel: "+4722526000" },
      email: "administration@klaveness.com",
      image: officeOslo,
      imageAlt: "The Klaveness headquarters building at Drammensveien 260 in Oslo",
      imagePosition: "72% 50%",
    },
    {
      city: "Singapore",
      id: "singapore",
      title: "Singapore",
      area: "Republic of Singapore",
      entities: [
        "Klaveness Asia Pte Ltd",
        "Klaveness Dry Bulk Asia Pte. Ltd",
        "Klaveness Combination Carriers Pte. Ltd",
      ],
      paragraphs: [],
      visiting: ["9 Raffles Place, #16-02 Republic Plaza", "048619 Singapore"],
      switchboard: { label: "+65 6303 5560", tel: "+6563035560" },
      telefax: { label: "+65 6223 1672", tel: "+6562231672" },
      image: officeSingapore,
      imageAlt: "Republic Plaza tower in Singapore, home of the Klaveness office",
      imagePosition: "50% 25%",
    },
    {
      city: "Dubai",
      id: "dubai",
      title: "Dubai, UAE",
      area: "United Arab Emirates",
      entities: [
        "Klaveness Asia Pte. Ltd. (FZ Branch)",
        "Klaveness Combination Carriers (FZ Branch)",
      ],
      paragraphs: [],
      visiting: [
        "Unit 2201, Saba Tower 1, Cluster E",
        "Jumeirah Lake Towers, Dubai, United Arab Emirates",
      ],
      postal: ["P.O.Box 337454"],
      switchboard: { label: "+971 4 584 7448", tel: "+97145847448" },
      email: "admin-dubai@klaveness.com",
      image: officeDubai,
      imageAlt: "Saba Tower 1 in Jumeirah Lake Towers, Dubai, framed by a palm tree",
      imagePosition: "50% 40%",
    },
    {
      city: "Tokyo",
      id: "tokyo",
      title: "Tokyo, Japan",
      area: "Japan",
      entities: ["Klaveness Japan KK"],
      paragraphs: [
        "Located in Marunouchi in the heart of Tokyo’s business district, Klaveness Japan KK is an additional hub for commercial activities in Asia, building on an existing presence on the continent with offices in Singapore, Manila, and Dubai.",
      ],
      visiting: ["Level 14 JP Tower", "2-7-2 Marunouchi", "Chiyoda-ku, Tokyo, 100-7014", "Japan"],
      image: officeTokyo,
      imageAlt: "JP Tower in Marunouchi, Tokyo",
      imagePosition: "50% 35%",
    },
    {
      city: "Manila",
      id: "manila",
      title: "The Philippines, Manila",
      area: "Philippines",
      entities: ["Klaveness Shore Services Inc."],
      paragraphs: [
        "Our Manila office was established in December 2013 and is a registered Ecozone IT Export Enterprise with the Philippine Economic Zone Authority (PEZA).",
        "Klaveness Shore Services Inc. (KSSI) supports IT services, accounting services and commercial operations services of Klaveness entities local and abroad.",
      ],
      visiting: [
        "5F, FiveE-com Center, Harbour Drive",
        "MOA Complex, Pasay City, Philippines 1300",
      ],
      switchboard: { label: "+63 2 847 85133", tel: "+63284785133" },
      email: "admin-mnl@klaveness.com",
      image: officeManila,
      imageAlt: "The FiveE-com Center buildings in Pasay City, Manila",
    },
  ] satisfies OfficeDetail[],
} as const;

/* Content from klaveness.com/team. */
export const teamPage = {
  meta: {
    title: "Team",
    description:
      "Find your department from our team of 150+ across the world: Klaveness Holding, Klaveness Combination Carriers, Klaveness Digital, Klaveness Dry Bulk and Klaveness Shore Services.",
  },
  hero: {
    eyebrow: "Team",
    statement: [
      { text: "Find your department from our " },
      { text: "team of 150+", strong: true },
      { text: " across the world" },
    ] satisfies RichLine,
    image: worldImage,
  },
} as const;

/** Google Maps search link for an address. */
export const mapsHref = (lines: string[]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(", "))}`;
