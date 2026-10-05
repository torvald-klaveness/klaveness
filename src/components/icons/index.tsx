import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...props}>
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <circle cx="20" cy="20" r="15.5" />
      <path d="M26.5 13.5 22.2 22.2 13.5 26.5l4.3-8.7z" />
      <path d="M17.8 17.8 22.2 22.2" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <rect x="7" y="22" width="6" height="11" rx="0.75" />
      <rect x="17" y="15" width="6" height="18" rx="0.75" />
      <rect x="27" y="7" width="6" height="26" rx="0.75" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M33 7C17 7 9 14.5 9 24.5c0 3 1 5.6 2.6 7.6C21.5 32 33 26 33 7Z" />
      <path d="M7 34c6.5-7.5 13-14.5 21-21" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export const pillarIcons = {
  compass: CompassIcon,
  chart: ChartIcon,
  leaf: LeafIcon,
} as const;

export type PillarIconName = keyof typeof pillarIcons;

export function DocumentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M10 4.5h14l8 8v23H10z" />
      <path d="M24 4.5v8h8M15 20h12M15 25h12M15 30h8" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={1.5} {...props}>
      <path d="M12 3v13M6.5 10.5 12 16l5.5-5.5M4 20.5h16" />
    </svg>
  );
}
