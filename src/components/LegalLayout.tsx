import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";

const legalNav = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/grievance", label: "Grievance Officer" },
  { to: "/rera", label: "RERA Compliance" },
  { to: "/refund", label: "Refund & Cancellation" },
] as const;

export function LegalLayout({
  eyebrow,
  title,
  italic,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell eyebrow={eyebrow} title={title} italic={italic} description={description}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Legal</span>
            </div>
            <nav className="flex flex-col">
              {legalNav.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border-l border-border py-2.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-gold hover:text-foreground"
                  activeProps={{ className: "border-l border-gold py-2.5 pl-4 text-sm text-emerald-deep font-medium" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </aside>
          <article className="legal-prose max-w-3xl">{children}</article>
        </div>
      </div>
    </PageShell>
  );
}
