import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const base = transparent
    ? "absolute top-0 left-0 right-0 z-50 text-background"
    : "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border text-foreground";

  return (
    <header className={base}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center border border-gold/60">
            <span className="font-display text-lg text-gold">இ</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Iraivi Homes</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gold/90">Chennai · Est. 2012</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold ${
                transparent ? "text-background/85" : "text-foreground/80"
              }`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden border border-gold px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-gold-foreground lg:inline-block"
        >
          Book a viewing
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em]"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
