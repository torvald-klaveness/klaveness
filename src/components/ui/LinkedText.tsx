import Link from "next/link";
import { Fragment } from "react";

type LinkedTextProps = {
  text: string;
  /** Phrases to turn into links (first occurrence of each). */
  links: Record<string, string>;
};

/** Plain text in which the first mention of each given phrase becomes a link. */
export function LinkedText({ text, links }: LinkedTextProps) {
  const phrases = Object.keys(links).filter((phrase) => text.includes(phrase));
  if (!phrases.length) return text;

  const escaped = phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`));
  const used = new Set<string>();

  return parts.map((part, index) => {
    if (links[part] && !used.has(part)) {
      used.add(part);
      return (
        <Link
          key={index}
          href={links[part]}
          className="underline decoration-grey-50 underline-offset-4 transition-colors hover:decoration-orange"
        >
          {part}
        </Link>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
