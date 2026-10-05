import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRight, ArrowUpRight } from "@/components/icons";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  /** `strong`: bold ink label with orange arrow. `accent`: orange label, no arrow (card links). */
  variant?: "strong" | "accent" | "light";
  className?: string;
  /** Extra context for screen readers when the visible label is generic. */
  srContext?: string;
  /** Another website: opens in a new tab, with an ↗ arrow. */
  external?: boolean;
};

const styles = {
  strong: "text-copy font-semibold",
  accent: "text-orange-ink font-light",
  light: "text-white font-semibold",
} as const;

export function ArrowLink({
  href,
  children,
  variant = "strong",
  className = "",
  srContext,
  external,
}: ArrowLinkProps) {
  const Arrow = external ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      <span className="relative">
        {children}
        {srContext ? <span className="sr-only"> {srContext}</span> : null}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-out-expo group-hover/link:scale-x-100"
        />
      </span>
      {variant !== "accent" && (
        <Arrow
          className={`size-[1.1em] shrink-0 text-orange transition-transform duration-500 ease-out-expo ${
            external
              ? "group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              : "group-hover/link:translate-x-1.5"
          }`}
        />
      )}
    </>
  );
  const linkClasses = `group/link inline-flex items-center gap-[clamp(0.75rem,1.4vw,1.75rem)] text-label ${styles[variant]} ${className}`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {content}
    </a>
  ) : (
    <Link href={href} className={linkClasses}>
      {content}
    </Link>
  );
}
