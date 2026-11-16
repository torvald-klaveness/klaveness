#!/usr/bin/env node
/**
 * Imports the old Squarespace Newsroom (klaveness.com/news) into the
 * klaveness-content repository: one Markdown file per article, with its
 * images converted to WebP next to it.
 *
 *   node scripts/import-old-news.mjs ../klaveness-content [--since=2021-01-01] [--force] [--only=<slug>]
 *
 * Articles already in the content repo are left alone unless --force, so this
 * can be re-run before launch to pick up anything posted on the old site in
 * the meantime. It also rewrites src/content/news-redirects.json (old article
 * addresses that changed or were not imported) and writes a report of
 * everything that needs a manual look.
 */
import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { parse } from "node-html-parser";
import sharp from "sharp";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const OLD_SITE = "https://www.klaveness.com";
const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) klaveness-news-import";
const IMAGE_MAX_WIDTH = 2400;
const IMAGE_QUALITY = 80;

const args = process.argv.slice(2);
const contentDir = args.find((arg) => !arg.startsWith("--"));
const option = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.split("=")[1];
const force = args.includes("--force");
const since = option("since") ?? "2021-01-01";
const only = option("only");
const reportPath =
  option("report") ?? path.join(contentDir ?? ".", "..", "klaveness-news-import-report.md");
const redirectsPath = path.join(import.meta.dirname, "../src/content/news-redirects.json");

if (!contentDir) {
  console.error(
    "Usage: node scripts/import-old-news.mjs <klaveness-content dir> [--since=YYYY-MM-DD] [--force]",
  );
  process.exit(1);
}

/* Old-site pages that moved on the new site (see next.config.ts redirects). */
const MOVED_PAGES = {
  "/about-us": "/about/about-us",
  "/about": "/about/about-us",
  "/contact": "/contact/offices",
  "/team": "/contact/team",
  "/baumarine": "/companies/klaveness-dry-bulk/baumarine",
  "/businesses/klaveness-dry-bulk": "/companies/klaveness-dry-bulk",
  "/businesses/klaveness-holding": "/companies/klaveness-finance",
  "/sustainability/our-approach": "/sustainability",
  "/sustainability/trading-efficiency": "/trading-efficiency",
  "/careers/equal-opportunities": "/careers/life-at-klaveness#equal-opportunities",
  "/elisabeth-trstad": "/about/board-of-directors#elisabeth-torstad",
};
const LEADERSHIP = [
  "ernst-meyer",
  "trine-hellum",
  "fabian-flaaten",
  "engebret-dahm",
  "ingrid-kylstad",
  "michael-jorgensen",
  "henrik-semb-ronningen",
  "nadia-naess",
];
const BOARD = [
  "trond-harald-klaveness",
  "christian-rynning-tonnesen",
  "rebekka-glasser-herlofsen",
  "mehrdad-amini",
];
for (const slug of LEADERSHIP) MOVED_PAGES[`/${slug}`] = `/about/executive-committee#${slug}`;
for (const slug of BOARD) MOVED_PAGES[`/${slug}`] = `/about/board-of-directors#${slug}`;

/* Pages the new site has at the same address. */
const SAME_PAGES = new Set([
  "/",
  "/news",
  "/about/about-us",
  "/about/governance",
  "/about/executive-committee",
  "/about/board-of-directors",
  "/about/financials",
  "/about/compliance",
  "/careers",
  "/careers/working-with-us",
  "/careers/life-at-klaveness",
  "/careers/meet-our-people",
  "/careers/vacancies",
  "/sustainability",
  "/sustainability/esg-priorities",
  "/sustainability/stakeholders",
  "/trading-efficiency",
]);

/* Suggested filters; every article is reviewed by hand afterwards. */
const CATEGORIES = [
  [
    "Klaveness Dry Bulk",
    { title: /\bdry ?bulk\b|\bKDB\b|market manager/i, about: /about klaveness dry bulk/i },
  ],
  ["Baumarine", { title: /baumarine|maruklav/i, about: /about baumarine/i }],
  [
    "KCC",
    {
      title: /\bKCC\b|combination carriers|\bCABU|\bCLEANBU/i,
      about: /about klaveness combination carriers/i,
    },
  ],
  [
    "Klaveness Digital",
    { title: /klaveness digital|cargovalue/i, about: /about klaveness digital/i },
  ],
  ["Klaveness Finance", { title: /klaveness (finance|holding)/i }],
  ["Company news", {}],
  [
    "Sustainability",
    {
      title:
        /sustainab|decarboni|emission|\bESG\b|energy[- ]efficien|carbon|climate|zerolab|fuel[- ]sav|air lubrication|wind/i,
    },
  ],
  [
    "People & careers",
    {
      title:
        /vacanc|intern(ship)?s?\b|career|appoint|welcomes|\bjoins\b(?!.*baumarine)|new (chief|head|ceo|cfo)|cadet|seafarer|student|graduate|nine weeks at sea|desk to deck/i,
    },
  ],
];
const COMPANY_CATEGORIES = new Set([
  "Klaveness Dry Bulk",
  "Baumarine",
  "KCC",
  "Klaveness Digital",
  "Klaveness Finance",
]);

const report = { notes: new Map(), missingAlt: [], written: 0, skipped: 0 };
const note = (slug, message) => {
  const list = report.notes.get(slug) ?? [];
  list.push(message);
  report.notes.set(slug, list);
};

const exists = (file) =>
  access(file).then(
    () => true,
    () => false,
  );

async function fetchJson(url) {
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(url, { headers: { "user-agent": USER_AGENT } });
    if (response.ok) return response.json();
    if (attempt === 4) throw new Error(`${response.status} for ${url}`);
    await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
  }
}

async function fetchAllPosts() {
  const posts = [];
  let next = "/news?format=json";
  while (next) {
    const data = await fetchJson(new URL(next, OLD_SITE));
    posts.push(...data.items);
    next = data.pagination?.nextPage ? `${data.pagination.nextPageUrl}&format=json` : null;
  }
  return posts;
}

const osloDate = (ms) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(ms));

const cleanText = (value) =>
  value
    .replace(/ |&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Last URL segment, without the "nbsp" Squarespace left in some addresses. */
function cleanSlug(urlId) {
  const last = urlId.split("/").pop();
  if (!last.includes("nbsp")) return last;
  return last.replace(/nbsp/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "").replace(/-1$/, "");
}

const fileKey = (url) =>
  decodeURIComponent(new URL(url).pathname.split("/").pop() ?? "").toLowerCase();

async function saveImage(url, file) {
  if (!force && (await exists(file))) return;
  const source = new URL(url);
  source.search = "?format=2500w";
  const response = await fetch(source, { headers: { "user-agent": USER_AGENT } });
  if (!response.ok) throw new Error(`${response.status} for image ${source}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer)
    .rotate()
    .resize({ width: IMAGE_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: IMAGE_QUALITY })
    .toFile(file);
}

/* ---------- HTML → Markdown ---------- */

const turndown = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
  strongDelimiter: "**",
  br: "",
});
turndown.use(gfm);
turndown.remove(["style", "script", "noscript", "svg", "button"]);
turndown.addRule("listItem", {
  filter: "li",
  replacement(content, node, options) {
    const body = content.replace(/^\n+/, "").replace(/\n+$/, "\n").replace(/\n/gm, "\n  ");
    let prefix = `${options.bulletListMarker} `;
    const parent = node.parentNode;
    if (parent.nodeName === "OL") {
      const start = Number(parent.getAttribute("start") ?? 1);
      prefix = `${start + Array.prototype.indexOf.call(parent.children, node)}. `;
    }
    return prefix + body + (node.nextSibling && !/\n$/.test(body) ? "\n" : "");
  },
});
/* Bold or italic runs that are only whitespace would render as stray asterisks. */
turndown.addRule("emptyEmphasis", {
  filter: (node) => ["STRONG", "B", "EM", "I"].includes(node.nodeName) && !node.textContent.trim(),
  replacement: (content) => content,
});

function rewriteLink(href, ctx) {
  let url = href.trim().replace(/&amp;/g, "&");
  // In-page anchors pointed at Word footnote markers that do not survive the conversion.
  if (!url || url.startsWith("#")) return null;
  // Phone numbers were sometimes linked as "https://tel: …" or as the bare number.
  if (/^(?:https?:\/\/)?tel:/i.test(url) || /^\+?[\d\s().-]{6,}$/.test(url)) {
    let number = url;
    try {
      number = decodeURIComponent(url);
    } catch {}
    number = number
      .replace(/^(?:https?:\/\/)?tel:/i, "")
      .replace(/[^\d+]/g, "")
      .replace(/^00/, "+");
    return number.length >= 6 ? `tel:${number}` : null;
  }

  if (/safelinks\.protection\.outlook\.com/i.test(url)) {
    url = new URL(url).searchParams.get("url") ?? url;
  }
  // PDFs opened in Acrobat's Chrome extension were sometimes copied with its prefix.
  url = url.replace(/^chrome-extension:\/\/[a-z]+\/(https?):\/+/i, "$1://");
  if (/sharepoint\.com/i.test(url)) {
    note(ctx.slug, `Removed an internal SharePoint link (not public): ${url}`);
    return null;
  }

  url = url.replace(/^https?:\/\/(www\.)?klaveness\.com(?=[/?#]|$)/i, "") || "/";
  if (url.startsWith("/")) {
    const [, pathPart = "/", rest = ""] = /^([^?#]*)(.*)$/.exec(url) ?? [];
    const pathname = pathPart.replace(/\/+$/, "") || "/";
    if (pathname.startsWith("/news/")) {
      const target = ctx.articlePaths.get(pathname);
      if (target) return target + rest;
      note(ctx.slug, `Unlinked a reference to an older article that is not imported: ${pathname}`);
      return null;
    }
    if (MOVED_PAGES[pathname]) return MOVED_PAGES[pathname];
    if (SAME_PAGES.has(pathname)) return pathname + rest;
    if (pathname.startsWith("/universal/") || pathname.startsWith("/s/")) {
      note(ctx.slug, `Link to an old-site file needs a new home: ${pathname}`);
      return `${OLD_SITE}${pathname}`;
    }
    note(ctx.slug, `Unlinked an old-site page that has no equivalent yet: ${pathname}`);
    return null;
  }

  url = url.replace(
    /^http:\/\/(www\.)?(klavenessdigital\.com|combinationcarriers\.com|cargovalue\.com)/i,
    "https://www.$2",
  );
  if (/^https?:\/\//i.test(url)) {
    try {
      const parsed = new URL(url);
      for (const key of [...parsed.searchParams.keys()]) {
        if (/^(__hs|_hs|utm_|hsCta)/i.test(key)) parsed.searchParams.delete(key);
      }
      url = parsed.href;
    } catch {
      note(ctx.slug, `Link with an invalid address kept as is: ${url}`);
    }
  } else if (!/^mailto:|^tel:/i.test(url)) {
    note(ctx.slug, `Unusual link kept as is: ${url}`);
  }
  return url.replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/ /g, "%20");
}

/** Rewrites links and normalises markup Squarespace adds, before Turndown. */
function prepareHtml(html, ctx) {
  const root = parse(html.replace(/<style[\s\S]*?<\/style>/gi, ""));
  for (const link of root.querySelectorAll("a")) {
    const href = rewriteLink(link.getAttribute("href") ?? "", ctx);
    if (!href || !link.text.trim()) {
      link.replaceWith(link.innerHTML);
    } else {
      link.setAttribute("href", href);
      link.removeAttribute("target");
    }
  }
  for (const heading of root.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
    // The old site sometimes set a whole lead paragraph in a heading style.
    if (heading.text.trim().length > 140) {
      heading.replaceWith(`<p>${heading.innerHTML}</p>`);
      continue;
    }
    heading.innerHTML = heading.innerHTML.replace(/<\/?(strong|b|em|i|u)\b[^>]*>/gi, "");
  }
  return root
    .toString()
    .replace(/<(\/?)h([1-6])\b/gi, (_, slash, level) => `<${slash}h${ctx.headingMap[level] ?? 4}`)
    .replace(/<li([^>]*)>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi, "<li$1>$2</li>")
    .replace(/(<br\s*\/?>\s*)+<\/(p|h\d)>/gi, "</$2>")
    .replace(/<(p|h\d)[^>]*>(\s|&nbsp;| |<br\s*\/?>)*<\/\1>/gi, "");
}

const toMarkdown = (html, ctx) =>
  turndown
    .turndown(prepareHtml(html, ctx))
    .replace(/ /g, " ")
    .replace(/[ \t]+$/gm, "")
    .trim();

/** Plain text of the first real paragraph, cut after a sentence or two. */
function describe(markdown) {
  const paragraph = markdown
    .split(/\n{2,}/)
    .find(
      (block) =>
        !/^(#|!\[|- |\d+\. |\||>|---|```|https?:\/\/\S+$)/.test(block) &&
        !/^\[[^\]]*\]\([^)]*\)$/.test(block) &&
        block.replace(/[*_]/g, "").trim().length > 40,
    );
  if (!paragraph) return "";
  const text = cleanText(
    paragraph
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`\\]/g, "")
      .replace(/\n/g, " "),
  );
  const sentences = text.match(/[^.!?]+(?:[.!?]+(?=\s|$)|$)/g) ?? [text];
  let summary = "";
  for (const sentence of sentences) {
    if (summary && summary.length + sentence.length > 220) break;
    summary += sentence;
    if (summary.length >= 90) break;
  }
  summary = summary.trim();
  if (summary.length > 240) summary = `${summary.slice(0, 237).replace(/\s+\S*$/, "")}…`;
  return summary;
}

function suggestCategories(title, markdown) {
  const aboutHeadings = (markdown.match(/^#{2,4} About .*$/gim) ?? []).join("\n");
  const picked = [];
  for (const [name, rule] of CATEGORIES) {
    if (name === "Company news") continue;
    if (rule.title?.test(title) || (rule.about && rule.about.test(aboutHeadings)))
      picked.push(name);
  }
  if (!picked.some((name) => COMPANY_CATEGORIES.has(name))) picked.push("Company news");
  const order = CATEGORIES.map(([name]) => name);
  return picked.sort((a, b) => order.indexOf(a) - order.indexOf(b)).slice(0, 3);
}

/** Alt text: Squarespace's own, else the caption unless it is only a credit. */
function altFrom(img, caption) {
  const alt = cleanText(img?.getAttribute("alt") ?? "");
  if (alt && !/\.(jpe?g|png|webp|gif)$/i.test(alt) && alt.split(" ").length > 1) return alt;
  if (caption && !/^(photo|foto|image)?\s*(credit|by)\b|^©|^photo:\s*\S+(\s\S+)?$/i.test(caption)) {
    return caption
      .replace(/^(image|photo|picture|pictured|ill\.|illustration)\s*:\s*/i, "")
      .replace(/\.$/, "");
  }
  return "";
}

const yamlString = (value) => JSON.stringify(value);

async function importPost(item, ctx) {
  const { slug, year, date, title } = ctx;
  const dir = path.join(contentDir, "news", year);
  const markdownFile = path.join(dir, `${slug}.md`);
  if (!force && (await exists(markdownFile))) {
    report.skipped++;
    return;
  }
  await mkdir(dir, { recursive: true });

  const root = parse(item.body ?? "");
  const html = root.toString();
  const levels = [...new Set([...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1])))].sort();
  ctx.headingMap = Object.fromEntries(
    levels.map((level, index) => [level, Math.min(index + 2, 4)]),
  );

  // Most articles repeat the featured image at the top of the text; it becomes the cover.
  const coverKey = item.assetUrl ? fileKey(item.assetUrl) : null;
  let cover = item.assetUrl ? { url: item.assetUrl, alt: "", caption: "", inBody: false } : null;
  const blocks = [];
  const images = [];

  for (const block of root.querySelectorAll("[data-definition-name]")) {
    const kind = block.getAttribute("data-definition-name").replace("website.components.", "");

    if (kind === "html") {
      const text =
        block.querySelector("[data-sqsp-text-block-content]") ??
        block.querySelector(".sqs-html-content") ??
        block;
      const markdown = toMarkdown(text.innerHTML, ctx);
      if (markdown) blocks.push(markdown);
    } else if (kind === "imageLayout") {
      const img = block.querySelector("img");
      const src = img?.getAttribute("data-src") ?? img?.getAttribute("src");
      if (!src) continue;
      const caption = cleanText(block.querySelector("figcaption")?.text ?? "");
      const alt = altFrom(img, caption);
      if (!cover || (coverKey && fileKey(src) === coverKey && !cover.inBody)) {
        cover = { url: src, alt, caption, inBody: true };
      } else {
        const file = `${slug}-${images.length + 2}.webp`;
        images.push({ url: src, file });
        if (!alt) report.missingAlt.push(`${year}/${file}`);
        const titlePart = caption ? ` ${yamlString(caption)}` : "";
        blocks.push(`![${alt.replace(/[[\]]/g, "")}](${file}${titlePart})`);
        if (block.querySelector("figure a[href], a.sqs-block-image-link")) {
          note(slug, `An image linked somewhere on the old site (${file}); the link was not kept`);
        }
      }
    } else if (kind === "button") {
      const link = block.querySelector("a");
      const href = link ? rewriteLink(link.getAttribute("href") ?? "", ctx) : null;
      const label = cleanText(link?.text ?? "");
      if (href && label) blocks.push(`[${label.replace(/[[\]]/g, "")}](${href})`);
    } else if (kind === "horizontalrule") {
      if (blocks.length && blocks.at(-1) !== "---") blocks.push("---");
    } else if (kind === "video" || kind === "code") {
      const raw = block
        .toString()
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&");
      const vimeo = /player\.vimeo\.com\/video\/(\d+)(?:\?h=([0-9a-f]+))?/i.exec(raw);
      const youtube = /youtube(?:-nocookie)?\.com\/embed\/([\w-]{6,})/i.exec(raw);
      if (vimeo) {
        blocks.push(`https://vimeo.com/${vimeo[1]}${vimeo[2] ? `/${vimeo[2]}` : ""}`);
        note(slug, "Has a Vimeo video, shown as an embedded player");
      } else if (youtube) {
        blocks.push(`https://www.youtube.com/watch?v=${youtube[1]}`);
        note(slug, "Has a YouTube video, shown as an embedded player");
      } else if (/<table/i.test(raw)) {
        const markdown = toMarkdown(
          block.querySelector(".sqs-code-container")?.innerHTML ?? block.innerHTML,
          ctx,
        );
        if (markdown) blocks.push(markdown);
        note(slug, "Has a results table (converted; check the layout)");
      } else if (/hsforms|hbspt/i.test(raw)) {
        note(slug, "Had an embedded HubSpot sign-up form, which was left out");
      } else {
        note(slug, `Had an embedded ${kind} block that was left out`);
      }
    } else if (!["socialLinks", "spacer"].includes(kind)) {
      note(slug, `Skipped an unknown block type: ${kind}`);
    }
  }

  while (blocks.at(-1) === "---") blocks.pop();
  let markdown = blocks
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (/squarespace-cdn\.com|static1\.squarespace/.test(markdown)) {
    note(slug, "Still references a Squarespace image inside the text");
  }
  if (!markdown) note(slug, "Body is empty");

  if (!cover) {
    note(slug, "No image at all; needs a cover image");
  } else {
    await saveImage(cover.url, path.join(dir, `${slug}.webp`));
    if (!cover.alt) report.missingAlt.push(`${year}/${slug}.webp (cover)`);
  }
  for (const image of images) await saveImage(image.url, path.join(dir, image.file));

  const description = describe(markdown) || cleanText(item.excerpt?.replace(/<[^>]+>/g, "") ?? "");
  if (!description) note(slug, "Could not write a summary");
  const categories = suggestCategories(title, markdown);
  ctx.summary.push({ slug, date, title, categories });

  const frontmatter = [
    "---",
    `slug: ${yamlString(slug)}`,
    `title: ${yamlString(title)}`,
    `description: ${yamlString(description)}`,
    `publishedAt: ${yamlString(date)}`,
    "categories:",
    ...categories.map((category) => `  - ${yamlString(category)}`),
    ...(cover
      ? [
          `coverImage: ${yamlString(`${slug}.webp`)}`,
          `coverAlt: ${yamlString(cover.alt)}`,
          ...(cover.caption ? [`coverCaption: ${yamlString(cover.caption)}`] : []),
        ]
      : []),
    "---",
  ].join("\n");

  await writeFile(markdownFile, `${frontmatter}\n\n${markdown}\n`);
  report.written++;
}

async function main() {
  console.log("Fetching the old Newsroom…");
  const all = await fetchAllPosts();
  const kept = [];
  const retired = [];
  for (const item of all) (osloDate(item.publishOn) >= since ? kept : retired).push(item);
  console.log(
    `${all.length} articles on the old site; importing ${kept.length} from ${since}, leaving ${retired.length}.`,
  );

  const articlePaths = new Map();
  const moved = {};
  const slugs = new Set();
  for (const item of kept) {
    const slug = cleanSlug(item.urlId);
    if (slugs.has(slug)) throw new Error(`Duplicate slug ${slug}`);
    slugs.add(slug);
    articlePaths.set(item.fullUrl, `/news/${slug}`);
    if (item.fullUrl !== `/news/${slug}`) moved[item.fullUrl] = `/news/${slug}`;
  }
  const safePath = (value) => /^\/news\/[a-z0-9\-/]+$/i.test(value);
  const unsafe = [...Object.keys(moved), ...retired.map((item) => item.fullUrl)].filter(
    (value) => !safePath(value),
  );
  if (unsafe.length)
    throw new Error(`Old addresses that cannot be used as redirect sources: ${unsafe.join(", ")}`);

  const summary = [];
  let done = 0;
  const queue = kept.filter((item) => !only || cleanSlug(item.urlId) === only);
  const worker = async () => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      const slug = cleanSlug(item.urlId);
      const date = osloDate(item.publishOn);
      const ctx = {
        slug,
        date,
        year: date.slice(0, 4),
        title: cleanText(item.title),
        articlePaths,
        summary,
      };
      try {
        await importPost(item, ctx);
      } catch (error) {
        note(slug, `IMPORT FAILED: ${error.message}`);
      }
      done++;
      if (done % 20 === 0) console.log(`  ${done} done`);
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));

  await writeFile(
    redirectsPath,
    `${JSON.stringify({ moved, retired: retired.map((item) => item.fullUrl).sort() }, null, 2)}\n`,
  );

  summary.sort((a, b) => b.date.localeCompare(a.date));
  const lines = [
    "# Newsroom import report",
    "",
    `${report.written} written, ${report.skipped} already there (left alone). ${kept.length} articles from ${since}; ${retired.length} older ones redirect to /news.`,
    "",
    "## Needs a look",
    "",
    ...[...report.notes].flatMap(([slug, messages]) => [
      `- **${slug}**`,
      ...messages.map((m) => `  - ${m}`),
    ]),
    "",
    `## Images without alt text (${report.missingAlt.length})`,
    "",
    ...report.missingAlt.map((file) => `- ${file}`),
    "",
    "## Suggested categories",
    "",
    "| Date | Article | Categories |",
    "| --- | --- | --- |",
    ...summary.map(
      (post) =>
        `| ${post.date} | ${post.title.replace(/\|/g, "\\|")} | ${post.categories.join(", ")} |`,
    ),
    "",
  ];
  await writeFile(reportPath, lines.join("\n"));
  console.log(`Done: ${report.written} written, ${report.skipped} skipped. Report: ${reportPath}`);
}

await main();
