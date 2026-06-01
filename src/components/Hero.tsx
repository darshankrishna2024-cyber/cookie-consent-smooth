import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-villa.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[640px] w-full overflow-hidden pt-24 sm:min-h-[760px] sm:pt-32">
      <img
        src={heroImg}
        alt="Luxury villa in Chennai by Iraivi Homes"
        width={1920}
        height={1280}
        loading="eager"
        // @ts-expect-error fetchpriority is a valid HTML attribute
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-emerald-deep/40" />

      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-end px-6 pb-16 sm:min-h-[760px] sm:pb-24 lg:px-12 lg:pb-32">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">
              Premium Real Estate · Chennai
            </span>
          </div>
          <h1 className="text-balance font-display text-4xl leading-[1.05] text-background sm:text-5xl md:text-6xl lg:text-7xl">
            A home is more than walls —<br />
            <span className="italic text-gold">it is a legacy.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:mt-8 sm:text-lg">
            Iraivi Homes curates the finest villas, sea-facing apartments and heritage residences
            across Chennai — from East Coast Road to Boat Club, hand-selected for families who
            value craft, calm and provenance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              to="/properties"
              className="group inline-flex items-center gap-3 bg-gold px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-foreground transition-all hover:bg-background sm:px-8 sm:py-4"
            >
              Explore Residences
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-background/40 px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:border-gold hover:text-gold sm:px-8 sm:py-4"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-background/20 pt-6 sm:mt-16 sm:gap-8 sm:pt-8">
          {[
            { k: "12+", v: "Years in Chennai" },
            { k: "₹2,400Cr", v: "Properties brokered" },
            { k: "180+", v: "Families settled" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl text-gold sm:text-3xl lg:text-4xl">{s.k}</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.2em] text-background/70 sm:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
