import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iraivi Homes" },
      { name: "description", content: "Iraivi Homes: rooted in Chennai, built on trust. Over a decade of curating the city's finest residences." },
      { property: "og:title", content: "About — Iraivi Homes" },
      { property: "og:description", content: "Rooted in Chennai. Built on trust." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <PageShell
      eyebrow="Our Story"
      title="A decade of"
      italic="quiet craft."
      description="We work with a deliberately small number of families each year — every transaction led personally by our founders."
    >
      <About />
    </PageShell>
  ),
});
