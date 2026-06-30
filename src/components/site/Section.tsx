import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && <p className="eyebrow justify-center">{eyebrow}</p>}
            {title && (
              <h2
                className={`mt-4 text-balance text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.1] ${tone === "dark" ? "text-primary-foreground" : "text-ink"}`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 text-pretty text-base md:text-lg ${tone === "dark" ? "text-primary-foreground/75" : "text-ink-soft"}`}
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
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-soft">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Have a project in mind?",
  description = "Book a free discovery call. We'll explore goals, scope, and how we can help — no commitments.",
  primary = { label: "Book Discovery Call", to: "/contact" as const },
  secondary = { label: "View Our Work", to: "/portfolio" as const },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: "/contact" | "/portfolio" | "/services" | "/about" };
  secondary?: { label: string; to: "/contact" | "/portfolio" | "/services" | "/about" };
}) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground shadow-elevated md:px-14 md:py-20">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] hairline-grid" />
          <div aria-hidden className="soft-blur-orb -right-20 -top-20 h-72 w-72 bg-accent" />
          <div aria-hidden className="soft-blur-orb -bottom-24 -left-10 h-72 w-72 bg-success" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow text-success">Let's build</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/75">{description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Link
                to={primary.to}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:shadow-elevated"
              >
                {primary.label}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to={secondary.to}
                className="inline-flex items-center gap-1.5 rounded-xl border border-primary-foreground/25 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
