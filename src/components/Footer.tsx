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
] as const;

export function Footer() {
  return (
    <footer className="bg-emerald-deep py-16 text-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 border-b border-background/15 pb-12 lg:grid-cols-[1.4fr_1fr]">
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
        </div>

        <div className="mt-8 space-y-4 text-xs text-background/55">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {legal.map((l, i) => (
              <span key={l.to} className="flex items-center gap-x-4">
                <Link to={l.to} className="text-background/60 transition-colors hover:text-gold">
                  {l.label}
                </Link>
                {i < legal.length - 1 && <span className="text-background/25">·</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Iraivi Homes Pvt. Ltd. · RERA: TN/01/Building/00000/2024</div>
            <div className="flex gap-6 uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-gold">Instagram</a>
              <a href="#" className="hover:text-gold">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
