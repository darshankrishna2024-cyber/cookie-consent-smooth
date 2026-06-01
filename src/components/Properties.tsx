import { Link } from "@tanstack/react-router";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import { Reveal } from "./Reveal";

const properties = [
  { img: p1, name: "The Adyar Residence", location: "Adyar · 4 BHK · 4,200 sq ft", price: "₹ 12.5 Cr", tag: "New Listing" },
  { img: p2, name: "Marina Sky Penthouse", location: "Nungambakkam · 5 BHK · 6,800 sq ft", price: "₹ 24 Cr", tag: "Sea View" },
  { img: p3, name: "Mylapore Heritage Villa", location: "Mylapore · 6 BHK · 8,100 sq ft", price: "₹ 18.9 Cr", tag: "Heritage" },
  { img: p1, name: "Boat Club Garden Home", location: "Boat Club · 5 BHK · 7,500 sq ft", price: "₹ 32 Cr", tag: "Off-market" },
  { img: p2, name: "ECR Beachfront Villa", location: "ECR · 4 BHK · 5,900 sq ft", price: "₹ 16.4 Cr", tag: "Beachfront" },
  { img: p3, name: "Alwarpet Townhouse", location: "Alwarpet · 4 BHK · 3,800 sq ft", price: "₹ 9.8 Cr", tag: "Heritage" },
];

export function Properties({ limit, showCta = false }: { limit?: number; showCta?: boolean }) {
  const list = limit ? properties.slice(0, limit) : properties;
  return (
    <section id="properties" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {showCta && (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Featured Residences</span>
              </div>
              <h2 className="text-balance font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Homes chosen with <span className="italic">discernment</span>.
              </h2>
            </div>
            <Link to="/properties" className="border-b border-foreground pb-1 text-[10px] uppercase tracking-[0.25em] hover:text-gold hover:border-gold">
              View entire portfolio →
            </Link>
          </div>
        )}

        <div className={`grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 ${showCta ? "mt-12 lg:mt-16" : ""}`}>
          {list.map((p, i) => (
            <Reveal as="article" key={p.name + i} delay={(i % 3) * 120} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.img} alt={p.name} width={1280} height={960} loading="lazy" decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute left-4 top-4 bg-background/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-deep">
                  {p.tag}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-deep/70 to-transparent" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl leading-tight sm:text-2xl">{p.name}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{p.location}</p>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg text-emerald-deep sm:text-xl">{p.price}</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Guide</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
