import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { Linkedin, Instagram, Send, ArrowUpRight } from "lucide-react";

const groups = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/insights", label: "Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Product Engineering" },
      { to: "/services", label: "Mobile Development" },
      { to: "/services", label: "AI & Analytics" },
      { to: "/services", label: "Cloud & DevOps" },
      { to: "/services", label: "UI/UX Design" },
    ],
  },
  {
    title: "Work",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.99l-4.79-6.27L4.7 22H2l7.03-8.03L2 2h7.07l4.31 5.7L18.244 2Zm-2.45 18h1.86L7.31 4H5.35l10.443 16Z" />
    </svg>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                Govitrix Corporation
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              From imagination to innovation. We design, build, and scale intelligent digital
              products for ambitious teams worldwide.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setStatus("ok");
                setEmail("");
                setTimeout(() => setStatus("idle"), 3500);
              }}
              className="mt-8 max-w-md"
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter" className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Subscribe to Insights
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-border bg-background p-1.5 shadow-soft focus-within:ring-2 focus-within:ring-accent/30">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground hover:bg-secondary"
                >
                  Subscribe <Send className="size-3.5" />
                </button>
              </div>
              {status === "ok" && (
                <p className="mt-2 text-xs text-success">Thanks — we'll be in touch.</p>
              )}
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {groups.map((g) => (
              <div key={g.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  {g.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l, i) => (
                    <li key={`${g.title}-${i}`}>
                      <Link
                        to={l.to}
                        className="text-sm text-ink-soft transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Govitrix Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/govitrix"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <Linkedin className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://www.instagram.com/govitrix"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <Instagram className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://x.com/govitrix"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
            >
              <XIcon className="size-4" />
            </a>
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-xs font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-background"
            >
              Start a project <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
