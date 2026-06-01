import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Iraivi Homes" },
      { name: "description", content: "Speak with a senior advisor at Iraivi Homes. Studio in Nungambakkam, Chennai." },
      { property: "og:title", content: "Contact — Iraivi Homes" },
      { property: "og:description", content: "Book a private consultation with our team." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <PageShell
      eyebrow="Get in touch"
      title="Begin your search"
      italic="with us."
      description="Share a few details and one of our senior advisors will reach out within 24 hours."
    >
      <Contact />
    </PageShell>
  ),
});
