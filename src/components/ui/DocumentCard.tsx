import { DocumentIcon, DownloadIcon } from "@/components/icons";
import type { DocumentLink } from "@/content/documents";

type DocumentCardProps = {
  document: DocumentLink;
  /** Visible label; defaults to the document title. */
  label?: string;
  /** Shown before the file details, e.g. "Annual Report". */
  kind?: string;
  tone?: "light" | "panel";
  className?: string;
};

/** Link to a PDF, with its size. Opens in a new tab, like on the current site. */
export function DocumentCard({
  document,
  label,
  kind,
  tone = "panel",
  className = "",
}: DocumentCardProps) {
  return (
    <a
      href={document.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-[clamp(1rem,1.6vw,1.5rem)] rounded-xl p-[clamp(1rem,1.6vw,1.5rem)] ring-1 transition-colors duration-300 ${
        tone === "panel"
          ? "bg-panel ring-transparent hover:ring-grey-50"
          : "bg-white ring-grey-50/70 hover:ring-navy/40"
      } ${className}`}
    >
      <DocumentIcon className="size-[clamp(2.25rem,2.6vw,3rem)] shrink-0 text-navy" />
      <span className="min-w-0 flex-1">
        <span className="block text-body-sm font-semibold text-copy">
          {label ?? document.title}
        </span>
        <span className="mt-0.5 block text-[clamp(0.8125rem,0.94vw,1.0625rem)] font-light text-ink-muted">
          {kind ? `${kind} · ` : ""}PDF · {document.size}
        </span>
      </span>
      <span className="inline-flex size-[clamp(2.5rem,2.8vw,3.25rem)] shrink-0 items-center justify-center rounded-full border border-grey-50 text-copy transition-colors duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-white">
        <DownloadIcon className="size-[45%] transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5" />
      </span>
      <span className="sr-only">
        {label && label !== document.title ? `: ${document.title}` : ""} (PDF, opens in a new tab)
      </span>
    </a>
  );
}
