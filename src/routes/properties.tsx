import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Properties } from "@/components/Properties";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — Iraivi Homes" },
      { name: "description", content: "Browse curated villas and apartments across Chennai's finest neighbourhoods." },
      { property: "og:title", content: "Properties — Iraivi Homes" },
      { property: "og:description", content: "Curated villas and apartments across Chennai." },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: () => (
    <PageShell
      eyebrow="The Portfolio"
      title="Homes chosen with"
      italic="discernment."
      description="A small, considered collection updated continuously. Many of our finest residences never appear publicly — speak to an advisor for off-market access."
    >
      <Properties />
    </PageShell>
  ),
});
