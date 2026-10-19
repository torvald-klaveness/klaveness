import { offices } from "@/content/offices";
import { site } from "@/content/site";

const orgId = `${site.url}/#organization`;

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": orgId,
  name: site.name,
  alternateName: site.shortName,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/brand/torvald-klaveness-logo.svg`,
  foundingDate: String(site.foundingYear),
  foundingLocation: { "@type": "Place", name: "Oslo, Norway" },
  email: site.headquarters.email,
  telephone: site.headquarters.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.headquarters.street,
    postalCode: site.headquarters.postalCode,
    addressLocality: site.headquarters.city,
    addressCountry: site.headquarters.countryCode,
  },
  location: offices.map((office) => ({
    "@type": "Place",
    name: `${site.name} ${office.city}`,
    address: `${office.address}, ${office.country}`,
    geo: { "@type": "GeoCoordinates", latitude: office.lat, longitude: office.lon },
  })),
  subOrganization: [
    {
      "@type": "Corporation",
      name: "Klaveness Combination Carriers ASA",
      url: "https://www.combinationcarriers.com",
      tickerSymbol: "KCC",
    },
    { "@type": "Organization", name: "Klaveness Digital", url: "https://www.klavenessdigital.com" },
    { "@type": "Organization", name: "Klaveness Dry Bulk" },
  ],
  sameAs: [site.linkedin],
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  inLanguage: "en",
  publisher: { "@id": orgId },
});

export const newsArticleJsonLd = (article: {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}) => {
  const url = `${site.url}/news/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description || undefined,
    datePublished: article.date,
    image: article.image ? [article.image] : undefined,
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
};
