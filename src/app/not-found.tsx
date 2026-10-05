import type { Metadata } from "next";

import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ComingSoon
      eyebrow="404"
      title="This page has sailed."
      description="The page you are looking for may have moved, or it never existed."
    >
      <p className="heading-display text-[clamp(1.5rem,1.1rem+1.4vw,2.125rem)] text-ink">
        Let’s get you back on course.
      </p>
      <p className="prose-soft mt-5 max-w-lg text-[1.0625rem]">
        We are building a new klaveness.com. Some older links may no longer work while pages are
        being moved.
      </p>
    </ComingSoon>
  );
}
