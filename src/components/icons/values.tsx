import type { JSX, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/*
 * Line versions of the four value icons from the old site (captain's cap,
 * anchor, helm, telescope), drawn in the same 1.25px stroke as the site icons.
 */

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

function Craftsmanship(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...line} {...props}>
      <path d="M6 24c0-5.5 8-9.5 18-9.5S42 18.5 42 24c0 1.6-1 2.8-2.6 3.6H8.6C7 26.8 6 25.6 6 24Z" />
      <path d="M8.6 27.6c1.4 3.4 7.6 5.9 15.4 5.9s14-2.5 15.4-5.9" />
      <path d="M11 32.2c3.4 1.5 8 2.3 13 2.3s9.6-.8 13-2.3" />
      <circle cx="24" cy="21.5" r="3" />
    </svg>
  );
}

function Integrity(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...line} {...props}>
      <circle cx="24" cy="9" r="3.2" />
      <path d="M24 12.2V40M17 18h14" />
      <path d="M8 29c1.4 6.4 8 11 16 11s14.6-4.6 16-11" />
      <path d="m5.5 31.5 2.5-2.5 3 2.2M42.5 31.5 40 29l-3 2.2" />
    </svg>
  );
}

function Commitment(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...line} {...props}>
      <circle cx="24" cy="24" r="13" />
      <circle cx="24" cy="24" r="4" />
      <path d="M24 5v15M24 28v15M5 24h15M28 24h15M10.6 10.6l10.6 10.6M26.8 26.8l10.6 10.6M37.4 10.6 26.8 21.2M21.2 26.8 10.6 37.4" />
    </svg>
  );
}

function Curiosity(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...line} {...props}>
      <path d="m6.5 27.5 19-11 3 5.2-19 11z" />
      <path d="m28.5 15 11.5-6.6 3.5 6-11.5 6.7" />
      <path d="M25.5 16.5 28.5 15l3 5.6-3 1.5" />
      <path d="M17.5 30.5 14 41M19.5 29.5 25 41" />
    </svg>
  );
}

export const valueIcons: Record<string, (props: IconProps) => JSX.Element> = {
  Craftsmanship,
  Integrity,
  Commitment,
  Curiosity,
};
