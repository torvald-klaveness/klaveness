import type { RichLine } from "@/content/types";

/** Renders a RichLine: plain runs, with `strong` runs in bold. */
export function RichText({
  line,
  strongClassName = "font-semibold",
}: {
  line: RichLine;
  strongClassName?: string;
}) {
  return line.map((part, index) =>
    part.strong ? (
      <strong key={index} className={strongClassName}>
        {part.text}
      </strong>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}
