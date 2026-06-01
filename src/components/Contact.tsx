export function Contact() {
  return (
    <section id="contact" className="relative bg-secondary py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</span>
          </div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Begin your <span className="italic">search</span> with us.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Share a few details and one of our senior advisors will reach out within 24 hours to
            arrange a private consultation.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Studio</div>
              <div className="mt-1 font-display text-xl">Khader Nawaz Khan Road, Nungambakkam, Chennai 600 006</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Call</div>
                <div className="mt-1 font-display text-lg">+91 98400 00000</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Write</div>
                <div className="mt-1 font-display text-lg">hello@iraivihomes.in</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. An advisor will reach out shortly.");
          }}
          className="space-y-6 bg-background p-10 lg:p-12"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {[
            { l: "Full name", t: "text", p: "Mr. / Ms." },
            { l: "Email", t: "email", p: "you@email.com" },
            { l: "Phone", t: "tel", p: "+91" },
          ].map((f) => (
            <div key={f.l}>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {f.l}
              </label>
              <input
                required
                type={f.t}
                placeholder={f.p}
                className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-lg outline-none transition-colors focus:border-gold"
              />
            </div>
          ))}
          <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              I'm looking for
            </label>
            <select className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-lg outline-none focus:border-gold">
              <option>A villa to buy</option>
              <option>An apartment to buy</option>
              <option>A long‑term lease</option>
              <option>To sell my home</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-emerald-deep py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-gold hover:text-gold-foreground"
          >
            Request a consultation
          </button>
        </form>
      </div>
    </section>
  );
}
