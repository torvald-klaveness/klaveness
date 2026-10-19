import Image from "next/image";
import Link from "next/link";
import ReactMarkdown, { type Components, type ExtraProps } from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { ArrowLink } from "@/components/ui/ArrowLink";
import type { SizedImage } from "@/lib/news/articles";

type HastNode = NonNullable<ExtraProps["node"]>["children"][number];

const textOf = (node: HastNode): string =>
  node.type === "text" ? node.value : "children" in node ? node.children.map(textOf).join("") : "";

/** The paragraph's only element, ignoring whitespace around it. */
function soleElement(node: ExtraProps["node"]) {
  const children = (node?.children ?? []).filter(
    (child) => !(child.type === "text" && !child.value.trim()),
  );
  return children.length === 1 && children[0].type === "element" ? children[0] : null;
}

const safeDecode = (value: string) => {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
};

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

/** Player address for a YouTube or Vimeo link pasted on its own line. */
function videoEmbed(href: string) {
  const vimeo = /^https?:\/\/(?:www\.)?vimeo\.com\/(\d+)(?:\/([0-9a-f]+))?\/?$/i.exec(href);
  if (vimeo)
    return `https://player.vimeo.com/video/${vimeo[1]}?${vimeo[2] ? `h=${vimeo[2]}&` : ""}dnt=1`;
  const youtube =
    /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{6,})/i.exec(
      href,
    );
  if (youtube) return `https://www.youtube-nocookie.com/embed/${youtube[1]}`;
  return null;
}

const linkClass =
  "font-normal underline decoration-grey-50 underline-offset-4 transition-colors hover:decoration-orange";

/**
 * An article's Markdown in the site's type styles. A link alone on a line
 * becomes an arrow link; a YouTube or Vimeo address alone on a line becomes
 * a player; an image's title ("…" after the address) is its caption.
 */
export function ArticleBody({
  markdown,
  images,
  title,
}: {
  markdown: string;
  images: Map<string, SizedImage>;
  title: string;
}) {
  const components: Components = {
    p({ node, children }) {
      const only = soleElement(node);
      if (only?.tagName === "img") return children;
      if (only?.tagName === "a") {
        const href = String(only.properties.href ?? "");
        const label = textOf(only).trim();
        const embed = videoEmbed(href);
        if (
          embed &&
          (label === href || label.replace(/^https?:\/\//, "") === href.replace(/^https?:\/\//, ""))
        ) {
          return (
            <div className="relative my-[clamp(2rem,3vw,3.5rem)]! aspect-video overflow-hidden rounded-media bg-navy">
              <iframe
                src={embed}
                title={`Video: ${title}`}
                loading="lazy"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          );
        }
        if (label && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
          return (
            <p className="mt-[1.6em]!">
              <ArrowLink href={href} external={!isInternal(href)}>
                {label}
              </ArrowLink>
            </p>
          );
        }
      }
      const hasImage = node?.children.some(
        (child) => child.type === "element" && child.tagName === "img",
      );
      return hasImage ? <div>{children}</div> : <p>{children}</p>;
    },
    a({ href = "", children }) {
      if (isInternal(href) || href.startsWith("#")) {
        return (
          <Link href={href} className={linkClass}>
            {children}
          </Link>
        );
      }
      if (/^(mailto|tel):/i.test(href)) {
        return (
          <a href={href} className={linkClass}>
            {children}
          </a>
        );
      }
      if (/^https?:\/\//i.test(href)) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {children}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      }
      return <>{children}</>;
    },
    img({ src, alt, title: caption }) {
      const image =
        typeof src === "string" ? (images.get(src) ?? images.get(safeDecode(src))) : undefined;
      if (!image) return null;
      return (
        <figure className="my-[clamp(2rem,3vw,3.5rem)]!">
          <Image
            src={image.src}
            alt={alt ?? ""}
            width={image.width}
            height={image.height}
            unoptimized={!image.optimized}
            sizes="(min-width: 1136px) 52rem, 100vw"
            className="h-auto w-full rounded-media bg-mist"
          />
          {caption ? (
            <figcaption className="mt-3 text-body-sm font-light text-ink-muted">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    h1: ({ children }) => <h2 className="mt-[2em]! text-label font-bold">{children}</h2>,
    h2: ({ children }) => <h2 className="mt-[2em]! text-label font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-[1.75em]! font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="mt-[1.5em]! font-semibold">{children}</h4>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    ul: ({ children }) => <ul className="list-dots gap-[0.4em]">{children}</ul>,
    ol: ({ children }) => <ol className="grid list-decimal gap-[0.4em] pl-[1.25em]">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="my-[1.75em]! border-l-2 border-orange pl-[clamp(1.25rem,2vw,2rem)] font-serif text-quote">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-[2.5em]! border-line" />,
    table: ({ children }) => (
      <div className="my-[2em]! overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-body-sm">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-copy py-3 pr-6 align-bottom font-semibold">{children}</th>
    ),
    td: ({ children }) => <td className="border-b border-line py-3 pr-6 align-top">{children}</td>,
  };

  return (
    <div className="text-body font-light text-pretty text-copy [&>*+*]:mt-[1.15em]">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
