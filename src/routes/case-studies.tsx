import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Target, Search, Compass, Layers, PenTool, Cpu, TrendingUp } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Govitrix Corporation" },
      {
        name: "description",
        content:
          "In-depth case studies on how Govitrix designed, built, and scaled products across industries.",
      },
      { property: "og:title", content: "Case Studies — Govitrix" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    name: "Lumenly Health",
    industry: "Healthcare",
    impact: "−42% triage time across 14 hospitals",
    summary:
      "We re-architected the triage workflow with a clinically validated AI assist layer, integrated EHR APIs, and shipped HIPAA-aligned audit trails end-to-end.",
  },
  {
    name: "Northvault Finance",
    industry: "FinTech",
    impact: "$420M AUM tracked, SOC 2 ready in 6 months",
    summary:
      "A wealth management SaaS with real-time portfolio analytics, KYC flows, and compliance-grade reporting built on a multi-tenant architecture.",
  },
  {
    name: "Cargolane",
    industry: "Logistics",
    impact: "6,000+ daily routes across 9 countries",
    summary:
      "Real-time shipment visibility built on event streams, mobile-first driver apps, and a control tower that scales to seasonal peaks.",
  },
];

const phases = [
  { icon: Search, title: "Challenge", body: "Define the business problem and the metric that matters." },
  { icon: Compass, title: "Research", body: "User interviews, market scan, and competitive teardown." },
  { icon: Target, title: "Strategy", body: "Scope, roadmap, success metrics, and risks." },
  { icon: PenTool, title: "UX Process", body: "IA, journeys, wireframes, and validation." },
  { icon: Layers, title: "Design", body: "Design system, high-fidelity flows, and prototypes." },
  { icon: Cpu, title: "Technology", body: "Architecture, integrations, and engineering plan." },
  { icon: TrendingUp, title: "Outcome", body: "Launch, observability, and adoption." },
  { icon: ArrowUpRight, title: "Business Impact", body: "Measured against the metric that matters." },
];

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes, not output."
        description="Every engagement is structured around a measurable business goal. Here's how we deliver."
      />

      <Section>
        <div className="grid gap-6">
          {studies.map((s) => (
            <article
              key={s.name}
              className="grid gap-6 overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-soft lg:grid-cols-3"
            >
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {s.industry}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-ink-soft">{s.summary}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface"
                >
                  Discuss a similar project <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 text-primary-foreground">
                <p className="text-xs font-semibold uppercase tracking-wider text-success">
                  Impact
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-snug">{s.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Methodology"
        title="How we structure every case study"
        description="A consistent eight-step lens we apply across industries."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <p.icon className="size-5" />
              </span>
              <h4 className="mt-4 font-semibold text-ink">{p.title}</h4>
              <p className="mt-1.5 text-sm text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
