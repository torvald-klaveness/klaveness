import { site } from "@/content/site";

const bareHost = (host: string) => host.toLowerCase().replace(/^www\./, "");

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

/**
 * Search engines may index the site only when it is the production deployment
 * on the real domain (`site.url`). Previews, local builds and the vercel.app
 * staging address shared with the client stay out of search results.
 */
export const isIndexable =
  process.env.VERCEL_ENV === "production" &&
  Boolean(productionHost) &&
  bareHost(productionHost!) === bareHost(new URL(site.url).host);
