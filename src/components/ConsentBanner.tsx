import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "iraivi.consent.v1";

type ConsentState = "accepted" | "declined" | null;

export function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("accepted"); // optimistic: hide until we know
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
      const next = stored ?? null;
      setState(next);
      setHidden(next !== null);
    } catch {
      setState(null);
      setHidden(false);
    }
  }, []);

  const persist = (value: Exclude<ConsentState, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setClosing(true);
    // Allow exit animation to play before unmounting
    window.setTimeout(() => {
      setState(value);
      setHidden(true);
      setClosing(false);
    }, 400);
  };

  if (!mounted || hidden) return null;

  return (
    <>
      {/* dim backdrop, non-blocking click */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-[60] bg-emerald-deep/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          closing ? "opacity-0" : "opacity-100 animate-in fade-in duration-500"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        className={`fixed inset-x-0 bottom-0 z-[70] transition-all duration-400 ${
          closing
            ? "translate-y-8 opacity-0"
            : "translate-y-0 opacity-100 animate-in slide-in-from-bottom-8 fade-in duration-500"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4 pb-4 sm:pb-6 lg:px-6">
          <div className="border border-border bg-background shadow-[var(--shadow-elegant)]">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_auto] lg:items-center lg:gap-10">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    Your Privacy
                  </span>
                </div>
                <h2
                  id="consent-title"
                  className="font-display text-2xl leading-tight text-foreground sm:text-3xl"
                >
                  A small note before you wander in.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We use cookies to remember your preferences, recommend residences and
                  understand how the site is used. By continuing you accept our{" "}
                  <Link to="/terms" className="text-emerald-deep underline decoration-gold underline-offset-4 hover:text-gold">
                    Terms
                  </Link>
                  ,{" "}
                  <Link to="/privacy" className="text-emerald-deep underline decoration-gold underline-offset-4 hover:text-gold">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/cookies" className="text-emerald-deep underline decoration-gold underline-offset-4 hover:text-gold">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:gap-2.5">
                <button
                  onClick={() => persist("accepted")}
                  className="group inline-flex items-center justify-center gap-3 bg-emerald-deep px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-gold hover:text-gold-foreground"
                >
                  Accept &amp; continue
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button
                  onClick={() => persist("declined")}
                  className="inline-flex items-center justify-center border border-border px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  Decline non-essential
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
