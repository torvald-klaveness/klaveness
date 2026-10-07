import type { Metadata } from "next";

import { Businesses } from "@/components/home/Businesses";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { Hero } from "@/components/home/Hero";
import { History } from "@/components/home/History";
import { Intro } from "@/components/home/Intro";
import { LatestNews } from "@/components/home/LatestNews";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Businesses />
      <History />
      <GlobalPresence />
      <LatestNews />
    </>
  );
}
