import { Link } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "dark";
}) {
  const toneCls =
    tone === "surface"
      ? "bg-surface"
      : tone === "dark"
        ? "bg-primary text-primary-foreground"
        : "bg-background";
  return (
    <section id={id} className={`relative py-20 md:py-28 ${toneCls} ${className}`}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <div className="mx-auto max-w-3xl text-center">
            {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
            {title && (
              <h2
                className={`mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.05] ${tone === "dark" ? "text-primary-foreground" : "text-ink"}`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-5 text-pretty text-base md:text-lg ${tone === "dark" ? "text-primary-foreground/75" : "text-ink-soft"}`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        <div className={eyebrow || title || description ? "mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      {image && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/40"
          />
        </>
      )}
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div aria-hidden className="soft-blur-orb -right-24 -top-24 h-96 w-96 bg-accent/10" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Have a project in mind?",
  description = "Book a free 30-minute discovery call — or if you prefer, share your requirements directly through our contact form. We respond within one business day.",
  primary = { label: "Book Discovery Call", to: "/contact" as const },
  secondary = { label: "Share Requirements", to: "/contact" as const },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: "/contact" | "/portfolio" | "/services" | "/about" };
  secondary?: { label: string; to: "/contact" | "/portfolio" | "/services" | "/about" };
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground shadow-elevated md:px-16 md:py-24">
          <div aria-hidden className="absolute inset-0 opacity-[0.10] hairline-grid" />
          <div aria-hidden className="soft-blur-orb -right-24 -top-24 h-80 w-80 bg-accent/60" />
          <div aria-hidden className="soft-blur-orb -bottom-28 -left-16 h-80 w-80 bg-success/50" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-success">
                Let's build
              </p>
              <h2 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                to={primary.to}
                className="group inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
              >
                {primary.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to={secondary.to}
                className="group inline-flex items-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                <FileText className="size-4" strokeWidth={1.75} />
                {secondary.label}
              </Link>
              <p className="mt-1 text-xs text-primary-foreground/60 md:text-right">
                Prefer sharing details? Submit through our contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
