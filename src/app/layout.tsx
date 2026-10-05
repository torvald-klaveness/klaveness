import type { Metadata, Viewport } from "next";
import { Literata, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { isIndexable } from "@/lib/indexing";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

import "./globals.css";

// Brand text face (brand guide: Source Sans).
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

// Heading serif, as specified in the Adobe XD design (Literata Light).
const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Klaveness",
    "Torvald Klaveness",
    "shipping",
    "maritime",
    "dry bulk",
    "combination carriers",
    "decarbonization",
    "maritime digital solutions",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  // Staging and previews: keep every page out of search results (see lib/indexing.ts).
  ...(isIndexable ? {} : { robots: { index: false, follow: false } }),
};

export const viewport: Viewport = {
  themeColor: "#001446",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${literata.variable}`}
    >
      <body className="flex min-h-svh flex-col">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
