const services = [
  {
    n: "01",
    t: "Buy",
    d: "Curated villas, apartments and plots across South Chennai's most coveted addresses.",
  },
  {
    n: "02",
    t: "Sell",
    d: "Discreet, off‑market listings to a verified buyer network — your home, your terms.",
  },
  {
    n: "03",
    t: "Lease",
    d: "Premium long‑lease residences for expats, founders and visiting executives.",
  },
  {
    n: "04",
    t: "Advisory",
    d: "Vaastu, legal, valuation and interior partners — every detail considered.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">What we do</span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          A complete <span className="italic">white‑glove</span> service.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-background p-10 transition-colors duration-500 hover:bg-emerald-deep hover:text-background"
            >
              <div className="font-display text-sm text-gold">{s.n}</div>
              <h3 className="mt-8 font-display text-3xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-background/75">
                {s.d}
              </p>
              <div className="mt-12 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
