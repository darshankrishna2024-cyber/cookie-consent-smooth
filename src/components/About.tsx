export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-emerald-deep py-28 text-background lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Philosophy</span>
          </div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Rooted in Chennai. <br />
            <span className="italic text-gold">Built on trust.</span>
          </h2>
        </div>
        <div className="space-y-6 text-background/85 lg:col-span-7 lg:pt-4">
          <p className="text-lg leading-relaxed">
            <span className="font-display text-2xl text-gold">இ</span> &nbsp; Iraivi — meaning
            <em> the divine </em>— is the spirit we bring to every home we represent. For over a
            decade we have walked the lanes of Boat Club, Poes Garden, ECR and OMR, learning the
            stories of homes before we ever list them.
          </p>
          <p className="leading-relaxed text-background/70">
            We work with a deliberately small number of families each year. Each transaction is led
            personally by our founders, supported by legal, vaastu and interior partners — so the
            home you choose is the home you keep.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-background/15 pt-8">
            {[
              { k: "RERA", v: "Registered & compliant" },
              { k: "Private", v: "Off‑market access" },
              { k: "Vaastu", v: "Advisory included" },
              { k: "Concierge", v: "End‑to‑end support" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl text-gold">{s.k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-background/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
