import type { Metadata } from "next";

import { LegalDocument } from "@/components/layout/LegalDocument";
import { privacyPolicyPage as page } from "@/content/legal";
import { sharedOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    ...sharedOpenGraph,
    title: page.title,
    description: page.description,
    url: page.path,
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument page={page} />;
}
