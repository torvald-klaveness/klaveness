import type { JSX, SVGProps } from "react";

import type { EsgPillarKey, StakeholderIcon } from "@/content/sustainability";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

const accent = "var(--color-navy-50)";

/* ESG pillar icons — navy with a Blue 50 % accent. */

function EsgLeaf(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth={1.4} {...line} {...props}>
      <path d="M27 5C14.5 5 7 10.6 7 19c0 2.3.8 4.4 2.1 6C17.6 25 27 20.2 27 5Z" />
      <path d="M5 27c5.2-6 10.4-11.6 16.8-17" stroke={accent} />
    </svg>
  );
}

function EsgPeople(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth={1.4} {...line} {...props}>
      <circle cx="11.5" cy="10" r="4.5" />
      <path d="M3.5 27v-3.2a6.3 6.3 0 0 1 6.3-6.3h3.4a6.3 6.3 0 0 1 6.3 6.3V27" />
      <circle cx="22" cy="11.5" r="3.6" stroke={accent} />
      <path d="M21.5 18.6h1.7a5.3 5.3 0 0 1 5.3 5.3V27" stroke={accent} />
    </svg>
  );
}

function EsgShield(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" strokeWidth={1.4} {...line} {...props}>
      <path d="M16 4 6 7.5V15c0 6.6 4.2 11 10 13 5.8-2 10-6.4 10-13V7.5L16 4Z" />
      <path d="M16 10.5v9" stroke={accent} />
    </svg>
  );
}

export const esgIcons: Record<EsgPillarKey, (props: IconProps) => JSX.Element> = {
  environmental: EsgLeaf,
  social: EsgPeople,
  governance: EsgShield,
};

/** Accent colour per pillar (sampled from the XD icons). */
export const esgIconColor: Record<EsgPillarKey, string> = {
  environmental: "text-navy",
  social: "text-navy",
  governance: "text-navy",
};

/*
 * Stakeholder icons — two-tone line art (navy + Blue 50 %) as in the XD design.
 * The `accent` stroke uses the secondary brand blue.
 */


function Employees(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <circle cx="23" cy="19" r="8" stroke={accent} />
      <path d="M9 54V44a12 12 0 0 1 12-12h4a12 12 0 0 1 12 12v10" stroke={accent} />
      <circle cx="43" cy="22" r="6.5" />
      <path d="M41 34h4a10 10 0 0 1 10 10v10" />
    </svg>
  );
}

function Customers(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <circle cx="32" cy="15" r="8" />
      <path d="M17 56V42a12 12 0 0 1 12-12h6a12 12 0 0 1 12 12v14" />
      <path d="m32 31-3 4 3 13 3-13-3-4Z" stroke={accent} />
    </svg>
  );
}

function Investors(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <path d="M10 54V40h8v14M28 54V30h8v24M46 54V22h8v32" />
      <path d="m10 28 14-10 10 6 18-14m0 0h-7m7 0v7" stroke={accent} />
    </svg>
  );
}

function Financing(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <path d="M17 8h30v48H17z" stroke={accent} />
      <path d="M32 15v14M36 18.5c-.8-1.6-2.3-2.5-4-2.5-2.2 0-4 1.3-4 3s1.8 2.6 4 3 4 1.4 4 3.2-1.8 3-4 3c-1.9 0-3.5-1-4.2-2.6" />
      <path d="M24 37h16M24 42h16M36 49h4" />
    </svg>
  );
}

function Regulators(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <path d="M8 22 32 9l24 13H8Z" stroke={accent} />
      <path d="M15 27v19M25 27v19M39 27v19M49 27v19M32 27v19" />
      <path d="M8 51h48v5H8z" stroke={accent} />
    </svg>
  );
}

function Suppliers(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <path d="M6 14h32v28H6z" stroke={accent} />
      <path d="M38 24h10l8 10v8H38V24ZM44 28v6h8" />
      <circle cx="16" cy="46" r="4.5" />
      <circle cx="46" cy="46" r="4.5" />
      <path d="M20.5 46h21" />
    </svg>
  );
}

function Communities(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" strokeWidth={2} {...line} {...props}>
      <circle cx="32" cy="18" r="7" />
      <path d="M20 52V41a10 10 0 0 1 10-10h4a10 10 0 0 1 10 10v11" />
      <circle cx="13" cy="25" r="5" stroke={accent} />
      <path d="M5 50v-6a8 8 0 0 1 8-8h3" stroke={accent} />
      <circle cx="51" cy="25" r="5" stroke={accent} />
      <path d="M59 50v-6a8 8 0 0 0-8-8h-3" stroke={accent} />
    </svg>
  );
}

export const stakeholderIcons: Record<StakeholderIcon, (props: IconProps) => JSX.Element> = {
  employees: Employees,
  customers: Customers,
  investors: Investors,
  financing: Financing,
  regulators: Regulators,
  suppliers: Suppliers,
  communities: Communities,
};
