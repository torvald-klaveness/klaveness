import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowUpRight } from "@/components/icons";

type NavAnchorProps = {
  href: string;
  external?: boolean;
  className?: string;
  /** Marks the link as the current page (internal links only). */
  current?: boolean;
  children: ReactNode;
};

/**
 * Menu link that handles both site pages and external company websites.
 * External links open in a new tab and carry a small ↗ plus a screen-reader note.
 */
export function NavAnchor({ href, external, className, current, children }: NavAnchorProps) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <ArrowUpRight
          aria-hidden
          className="ml-1.5 inline-block size-[0.85em] shrink-0 align-[-0.05em] opacity-60"
        />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} aria-current={current ? "page" : undefined} className={className}>
      {children}
    </Link>
  );
}
