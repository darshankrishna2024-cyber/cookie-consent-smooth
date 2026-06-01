import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const Properties = lazy(() =>
  import("@/components/Properties").then((m) => ({ default: m.Properties })),
);
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iraivi Homes — Luxury Real Estate in Chennai" },
      { name: "description", content: "Curated villas, sea-facing apartments and heritage residences across Chennai." },
      { property: "og:title", content: "Iraivi Homes — Luxury Real Estate in Chennai" },
      { property: "og:description", content: "Hand-selected luxury homes across Chennai. RERA-registered, white-glove service." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparent />
      <Hero />
      <Suspense fallback={<div className="h-[600px] bg-background" aria-hidden />}>
        <Properties limit={3} showCta />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
