import { Link } from "@tanstack/react-router";

const explore = [
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/cookies", label: "Cookie Policy" },
  { to: "/grievance", label: "Grievance Officer" },
  { to: "/rera", label: "RERA Compliance" },
  { to: "/refund", label: "Refund & Cancellation" },
] as const;

export function Footer() {
  return (
    <footer className="bg-emerald-deep py-16 text-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 border-b border-background/15 pb-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl text-background">Iraivi Homes</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-gold">Chennai · Since 2012</div>
            <p className="mt-5 max-w-sm text-sm text-background/65">
              Quietly representing some of Chennai's finest homes and the families who love them.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Explore</div>
            <ul className="space-y-2.5 text-sm">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-background/70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gold">Legal &amp; Compliance</div>
            <ul className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-background/70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-background/55">
          <div>© {new Date().getFullYear()} Iraivi Homes Pvt. Ltd. · RERA: TN/01/Building/00000/2024</div>
          <div className="flex gap-6 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">LinkedIn</a>
            <Link to="/privacy" className="hover:text-gold">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
