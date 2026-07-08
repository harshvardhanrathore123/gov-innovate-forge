import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, Check, Sparkles } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";
import { conceptProducts } from "../components/site/ConceptProducts";
import { Modal } from "../components/site/CTADialogs";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Govitrix Corporation" },
      {
        name: "description",
        content:
          "In-depth case studies on how Govitrix designed, built, and scaled Medicare HMS, FinBud, ApexScore, SellMate and Anahata AI.",
      },
      { property: "og:title", content: "Case Studies — Govitrix" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

// Detailed case-study content per product
const details: Record<
  string,
  {
    overview: string;
    workflow: string[];
    benefits: string[];
    outcomes: string[];
  }
> = {
  "medicare-hms": {
    overview:
      "Medicare HMS unifies hospital operations — from OPD registration and clinical workflows to pharmacy, labs, and billing — inside a single, HIPAA-aligned platform.",
    workflow: [
      "Patient walks in and is registered via OPD kiosk or reception",
      "Doctor queue and clinical notes captured in real time",
      "Diagnostics ordered, lab results integrated into the EMR",
      "Pharmacy dispenses medication with inventory auto-updated",
      "Billing and insurance claims processed with audit trail",
    ],
    benefits: [
      "Fragmented tools consolidated into one platform",
      "Real-time visibility for administrators",
      "Reduced revenue leakage through unified billing",
      "Compliance-ready audit trails and role-based access",
    ],
    outcomes: [
      "42% reduction in average patient triage time",
      "31% improvement in billing accuracy",
      "3.1× faster administrative workflows",
    ],
  },
  finbud: {
    overview:
      "FinBud is a mobile-first personal finance platform that aggregates accounts, categorizes transactions, tracks goals, and nudges healthier financial behavior.",
    workflow: [
      "User securely links bank, card, and investment accounts",
      "Transactions auto-categorized with ML",
      "Goals and monthly envelopes created with smart defaults",
      "Recurring subscriptions surfaced and flagged",
      "Monthly review delivers actionable insights",
    ],
    benefits: [
      "Single view across every financial account",
      "Proactive alerts prevent overspending",
      "Personalized nudges to increase savings rate",
      "Bank-grade encryption and privacy controls",
    ],
    outcomes: [
      "+22% average monthly savings rate uplift",
      "89% 30-day user retention",
      "4.8★ average app store rating",
    ],
  },
  apexscore: {
    overview:
      "ApexScore is an AI-powered assessment platform that adapts to each learner, grades open-ended responses at scale, and delivers granular analytics to educators.",
    workflow: [
      "Institution configures assessment blueprint and rubric",
      "Adaptive engine serves questions calibrated to ability",
      "AI grades essays and code with rubric-aligned scoring",
      "Proctoring and anti-cheat run in the background",
      "Learner receives personalized learning path recommendation",
    ],
    benefits: [
      "Dramatically faster grading turnaround",
      "Consistent, rubric-aligned scoring across cohorts",
      "Rich analytics for institutions and educators",
      "Scales to enterprise learning teams",
    ],
    outcomes: [
      "10× faster grading vs manual workflows",
      "+3.4× measured learner engagement",
      "97% agreement with human graders on sample sets",
    ],
  },
  sellmate: {
    overview:
      "SellMate is a modern CRM built for founder-led revenue teams — combining unified lead inbox, pipeline automation, and AI-drafted follow-ups.",
    workflow: [
      "Leads captured from web, WhatsApp, calls, and email",
      "Auto-assigned and prioritized by fit and intent",
      "AI drafts personalized follow-up sequences",
      "Reps review, adjust, and send in one click",
      "Pipeline health and forecast surfaced on daily dashboard",
    ],
    benefits: [
      "No more leads slipping through cracks",
      "Consistent, high-quality outreach at scale",
      "Founder / manager visibility without micro-managing",
      "Enterprise capabilities with SMB simplicity",
    ],
    outcomes: [
      "+38% win rate uplift within 90 days",
      "−54% time spent on CRM admin",
      "~6 hours/week reclaimed per sales rep",
    ],
  },
  "anahata-ai": {
    overview:
      "Anahata AI is a retrieval-augmented business copilot that connects to warehouses, docs, and SaaS tools — answering natural-language questions and executing safe, auditable workflows.",
    workflow: [
      "Enterprise data sources indexed with fine-grained permissions",
      "User asks a question in natural language",
      "RAG pipeline retrieves and grounds the answer",
      "Agent proposes actions with human-in-the-loop approval",
      "Every action logged to an immutable audit trail",
    ],
    benefits: [
      "Fewer dashboards, more answers",
      "Reduced report cycle time",
      "Governed, auditable AI actions",
      "Enterprise SSO and role-based controls",
    ],
    outcomes: [
      "~8 hours/week reclaimed per executive user",
      "−67% report cycle time",
      "100% of AI actions logged and auditable",
    ],
  },
};

function CaseStudiesPage() {
  const [active, setActive] = useState<(typeof conceptProducts)[number] | null>(null);
  const activeDetails = active ? details[active.slug] : null;

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes, not output."
        description="Every engagement is structured around a measurable business goal. Explore how we deliver across healthcare, fintech, education, sales, and AI."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <div className="grid gap-8">
          {conceptProducts.map((s) => (
            <article
              key={s.slug}
              className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated md:p-10 lg:grid-cols-5"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.accent} p-6 lg:col-span-2`}>
                <div aria-hidden className="absolute inset-0 hairline-grid opacity-30" />
                <div className="relative">
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                    <Sparkles className="size-3" /> Innovation Lab
                  </span>
                  <p className="mt-4 font-display text-2xl font-bold text-ink">{s.name}</p>
                  <p className="mt-1 text-sm font-medium text-ink-soft">{s.tagline}</p>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {s.results.map((r) => (
                      <div key={r.label} className="rounded-lg border border-border bg-background/95 p-3 backdrop-blur">
                        <p className="font-display text-lg font-bold text-ink leading-none">{r.value}</p>
                        <p className="mt-1.5 text-[10px] font-medium text-ink-muted leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {s.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-ink-soft">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActive(s)}
                    className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    View Case Study <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive(s)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
                  >
                    Read Full Case Study <ArrowUpRight className="size-4" />
                  </button>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
                  >
                    Discuss a similar project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.name || ""}
        description={active?.tagline}
        size="xl"
      >
        {active && activeDetails && (
          <div className="grid gap-8">
            {/* Hero */}
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${active.accent} p-8`}>
              <div aria-hidden className="absolute inset-0 hairline-grid opacity-30" />
              <div className="relative grid gap-4 sm:grid-cols-3">
                {active.results.map((r) => (
                  <div key={r.label} className="rounded-xl border border-border bg-background/95 p-4 backdrop-blur">
                    <p className="font-display text-2xl font-bold text-ink">{r.value}</p>
                    <p className="mt-1 text-xs font-medium text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <Block title="Project overview" body={activeDetails.overview} />

            {/* Challenge / Solution */}
            <div className="grid gap-4 md:grid-cols-2">
              <Block title="The challenge" body={active.challenge} />
              <Block title="Our solution" body={active.solution} />
            </div>

            {/* Key features */}
            <div>
              <p className="eyebrow">Key features</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow */}
            <div>
              <p className="eyebrow">Workflow</p>
              <ol className="mt-3 grid gap-3">
                {activeDetails.workflow.map((w, i) => (
                  <li key={w} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink">{w}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Screenshots placeholder */}
            <div>
              <p className="eyebrow">Screenshots</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`aspect-video overflow-hidden rounded-xl border border-border bg-gradient-to-br ${active.accent}`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <div className="rounded-lg border border-border bg-background/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur">
                        {active.name} · Screen {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="eyebrow">Technology stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.stack.map((t) => (
                  <span key={t} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits + Outcomes */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="eyebrow">Business benefits</p>
                <ul className="mt-3 space-y-2">
                  {activeDetails.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow">Expected outcomes</p>
                <ul className="mt-3 space-y-2">
                  {activeDetails.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
              <p className="font-display text-lg font-semibold">Interested in a similar build?</p>
              <p className="mt-1.5 text-sm text-primary-foreground/80">
                Book a discovery call — or share your requirements through our contact form.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActive(null);
                    window.dispatchEvent(new Event("govitrix:open-discovery"));
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-background px-4 py-2.5 text-sm font-semibold text-primary hover:shadow-elevated"
                >
                  Book Discovery Call <ArrowUpRight className="size-4" />
                </button>
                <Link
                  to="/contact"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary-foreground/30 px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Share requirements
                </Link>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <CTASection />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6">
      <p className="eyebrow">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
