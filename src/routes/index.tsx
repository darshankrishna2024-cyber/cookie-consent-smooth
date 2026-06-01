import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Footer } from "@/components/Footer";

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
      <Properties limit={3} showCta />
      <Footer />
    </div>
  );
}
