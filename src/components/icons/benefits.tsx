import type { JSX, SVGProps } from "react";

import type { BenefitIcon } from "@/content/careers";

type IconProps = SVGProps<SVGSVGElement>;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

const accent = "var(--color-navy-50)";

/* Line icons for the employee benefits, in the site's icon style. */
export const benefitIcons: Record<BenefitIcon, (props: IconProps) => JSX.Element> = {
  compensation: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <ellipse cx="17" cy="13" rx="10" ry="4" />
      <path d="M7 13v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6M7 19v6c0 2.2 4.5 4 10 4 1.3 0 2.6-.1 3.7-.3" />
      <circle cx="28" cy="27" r="6.5" stroke={accent} />
      <path d="M28 24v6M26 27h4" stroke={accent} />
    </svg>
  ),
  development: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <path d="M4 15 20 8l16 7-16 7z" />
      <path d="M11 18.5V26c0 2.2 4 4.5 9 4.5s9-2.3 9-4.5v-7.5M36 15v9" stroke={accent} />
    </svg>
  ),
  travel: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <circle cx="20" cy="20" r="14" />
      <path d="M6 20h28M20 6c4 4 5.5 9 5.5 14S24 30 20 34M20 6c-4 4-5.5 9-5.5 14S16 30 20 34" stroke={accent} />
    </svg>
  ),
  properties: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <path d="M5 19 20 7l15 12" />
      <path d="M9 16v17h22V16M17 33v-9h6v9" />
      <path d="M27 11V6.5h3.5V14" stroke={accent} />
    </svg>
  ),
  flexible: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <rect x="6" y="9" width="22" height="15" rx="1.5" />
      <path d="M3 28h28" />
      <circle cx="30" cy="26" r="7" stroke={accent} />
      <path d="M30 22.5V26l2.5 1.5" stroke={accent} />
    </svg>
  ),
  wellbeing: (props) => (
    <svg viewBox="0 0 40 40" {...line} {...props}>
      <path d="M20 33S6 24.6 6 15.2C6 11.2 9 8 12.8 8c3 0 5.5 1.9 7.2 4.5C21.7 9.9 24.2 8 27.2 8 31 8 34 11.2 34 15.2 34 24.6 20 33 20 33Z" />
      <path d="M11 19h5l2-3.5 3 7 2-3.5h6" stroke={accent} />
    </svg>
  ),
};
