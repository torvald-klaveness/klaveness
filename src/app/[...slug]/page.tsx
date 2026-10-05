import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoon } from "@/components/layout/ComingSoon";
import { placeholderPages } from "@/content/routes";

// Only the known placeholder paths are generated; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...placeholderPages.keys()].map((path) => ({ slug: path.slice(1).split("/") }));
}

const getPage = async (params: PageProps<"/[...slug]">["params"]) => {
  const { slug } = await params;
  return placeholderPages.get(`/${slug.join("/")}`);
};

export async function generateMetadata({ params }: PageProps<"/[...slug]">): Promise<Metadata> {
  const page = await getPage(params);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    // Placeholders stay out of search results until the real page ships.
    robots: { index: false, follow: true },
  };
}

export default async function PlaceholderPage({ params }: PageProps<"/[...slug]">) {
  const page = await getPage(params);
  if (!page) notFound();

  const breadcrumb = [
    ...(page.sectionHref && page.sectionHref !== page.path
      ? [{ label: page.section, href: page.sectionHref }]
      : []),
    { label: page.title },
  ];

  return (
    <ComingSoon
      eyebrow={page.section}
      title={page.title}
      description={page.description}
      breadcrumb={breadcrumb}
    />
  );
}
