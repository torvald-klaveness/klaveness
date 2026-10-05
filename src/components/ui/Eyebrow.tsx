import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "dark" | "light";
  as?: "p" | "h2" | "h3";
  id?: string;
  /** Optional icon shown before the label (ESG pillars). */
  icon?: ReactNode;
  className?: string;
};

/** Uppercase section label followed by a short orange rule (XD: Source Sans 3 Medium 18px). */
export function Eyebrow({
  children,
  tone = "dark",
  as: Tag = "p",
  id,
  icon,
  className = "",
}: EyebrowProps) {
  return (
    <Tag
      id={id}
      className={`flex items-center gap-[clamp(0.75rem,1.1vw,1.25rem)] text-eyebrow font-medium uppercase ${
        tone === "light" ? "text-white" : "text-copy"
      } ${className}`}
    >
      {icon}
      <span>{children}</span>
      <span aria-hidden className="h-px w-[clamp(2rem,2.3vw,2.75rem)] bg-orange" />
    </Tag>
  );
}
