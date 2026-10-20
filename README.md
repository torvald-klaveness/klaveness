# klaveness.com

The new website for Torvald Klaveness. Built with Next.js 16 (App Router), React 19,
Tailwind CSS 4 and TypeScript, and meant to be deployed on Vercel.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script           | What it does                                          |
| ---------------- | ----------------------------------------------------- |
| `pnpm build`     | Production build (all pages are statically generated) |
| `pnpm typecheck` | Generates route types and runs `tsc`                  |
| `pnpm lint`      | ESLint                                                |
| `pnpm format`    | Prettier, with Tailwind class sorting                 |

## Environment

| Variable                        | Default                     | Purpose                                                                                     |
| ------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | `https://www.klaveness.com` | Canonical URLs, sitemap, Open Graph                                                         |
| `VERCEL_ENV`                    | set by Vercel               | Indexing is allowed only on `production` …                                                  |
| `VERCEL_PROJECT_PRODUCTION_URL` | set by Vercel               | … and only once the production domain is klaveness.com (not the vercel.app staging address) |
| `NEWS_CONTENT_REPO`             | `ynnhlr/klaveness-content`  | GitHub repository the news articles are read from                                           |
| `NEWS_CONTENT_BRANCH`           | `main`                      | Branch of that repository                                                                   |
| `NEWS_CONTENT_GITHUB_TOKEN`     | —                           | Read-only token (Contents: read) so builds are not hit by GitHub's anonymous rate limit     |
| `NEWS_WEBHOOK_SECRET`           | —                           | Optional: secret of a GitHub webhook that refreshes the news instantly after a push         |
| `NEWS_CONTENT_DIR`              | —                           | Local only: read articles from a checkout (e.g. `../klaveness-content`) to preview them     |

## News

Articles live in their own repository, [ynnhlr/klaveness-content](https://github.com/ynnhlr/klaveness-content)
(format in its `AGENTS.md`). The site reads it at the latest commit through the GitHub API and
regenerates the news pages with ISR:

- News pages check the repo every 15 minutes, so a pushed article appears within 15 minutes with
  no webhook and no redeploy. Pages are refreshed in the background on their next visit; new
  articles render on their first visit.
- Optional, for instant updates: a GitHub webhook to `POST /api/revalidate/news` (GitHub → Settings
  → Webhooks: content type `application/json`, the `NEWS_WEBHOOK_SECRET`, push events only).
- To preview articles before pushing, run with `NEWS_CONTENT_DIR=../klaveness-content` (the
  `klaveness-dev-local-news` launch configuration does this on port 3418).
- `scripts/import-old-news.mjs` imported the old Squarespace Newsroom (articles from 2021 on) and
  wrote `src/content/news-redirects.json` for the old addresses. It skips articles already in the
  content repo, so it can be re-run before launch to pick up anything posted on the old site since.

## Project structure

```
src/
  app/                 Routes, metadata files (icon, OG image, robots, sitemap, manifest)
    [...slug]/         "Coming soon" template for every linked page not yet built
  components/
    brand/Logo.tsx     Official logo as inline SVG (stacked / horizontal / symbol)
    home/              Homepage sections
    layout/            Header, footer, placeholder template
    ui/                Small shared pieces (Eyebrow, ArrowLink, MediaCard)
  content/             All copy and data — edit text here, not in components
    site.ts            Company details, navigation, legal links
    home.ts            Homepage copy and images
    about.ts           About pages: About us, Governance, Financials, Compliance
    leadership.ts      Leadership team and Board of directors: people, roles and bios
    documents.ts       Annual reports and compliance PDFs (hosted on Klaveness' HubSpot)
    careers.ts         Careers pages (client's Careers.docx, Aug 2026) and vacancies list
    companies.ts       Klaveness Dry Bulk and Klaveness Finance (formerly Klaveness Holding)
    trading-efficiency.ts  Trading Efficiency page (client draft, Oct 2026)
    contact.ts         Offices page (addresses, phones, emails, photos) and Team page hero
    team.ts            Team directory: every department, team email and person (from klaveness.com/team)
    sustainability.ts  Sustainability, ESG priority and Stakeholders copy and images
    offices.ts         Office map coordinates and time zones (live maps, footer links)
    routes.ts          Builds the list of placeholder pages
    news-redirects.json  Old Newsroom addresses (written by scripts/import-old-news.mjs)
  lib/
    news/              Reads articles from the content repo (GitHub or a local checkout)
                       Structured data (JSON-LD), world-map projection, solar maths, helpers
public/brand/          Logo SVGs (also used for structured data and the Apple icon)
```

## Design system

Tokens live in `src/app/globals.css` (`@theme`) and follow the brand guide
(klavenessidentity.com/kla):

- **Colours**: Blue `#001446` (`navy`), Orange `#FF5B29` (accent, used sparingly),
  and the secondary blues and greys. `orange-ink` (`#CC4316`) is a slightly deeper
  orange used only for small text links on white, so they pass WCAG AA contrast.
- **Type**: Source Sans 3 for text, Literata Light for headings (both as specified in
  the Adobe XD design), self-hosted through `next/font`.
- **Motion**: scroll reveals are pure CSS (scroll-driven animations) and switch
  off with `prefers-reduced-motion`.

## Adding a real page

Create the route (e.g. `src/app/about/page.tsx`). A real route always wins over the
`[...slug]` placeholder. Then add the URL to `src/app/sitemap.ts` — placeholders are
`noindex` and intentionally left out of the sitemap.
