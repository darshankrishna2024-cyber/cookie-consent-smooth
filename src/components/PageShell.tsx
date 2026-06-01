import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({
  children,
  eyebrow,
  title,
  italic,
  description,
}: {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
}) {
  return (
    <>
      <Navbar />
      <section className="border-b border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
            {italic && <> <span className="italic text-emerald-deep">{italic}</span></>}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </div>
      </section>
      <main>{children}</main>
      <Footer />
    </>
  );
}
