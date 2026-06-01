import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Iraivi Homes" },
      { name: "description", content: "Buy, sell, lease and advisory — a complete white-glove service for Chennai luxury real estate." },
      { property: "og:title", content: "Services — Iraivi Homes" },
      { property: "og:description", content: "A complete white-glove service for luxury real estate." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <PageShell
      eyebrow="What we do"
      title="A complete"
      italic="white-glove service."
      description="From first viewing to final handover — and everything between."
    >
      <Services />
    </PageShell>
  ),
});
