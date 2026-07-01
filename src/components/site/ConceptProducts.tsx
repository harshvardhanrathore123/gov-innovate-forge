import { useState } from "react";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { Modal } from "./CTADialogs";

type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  results: { value: string; label: string }[];
  accent: string;
};

export const conceptProducts: Product[] = [
  {
    slug: "medicare-hms",
    name: "Medicare HMS",
    category: "Healthcare",
    tagline: "Hospital Management System",
    description: "Comprehensive Hospital Management System streamlining patient, doctor, appointment, billing, and administrative workflows in a single unified platform.",
    challenge: "Multi-department hospitals rely on fragmented tools — separate systems for OPD, billing, pharmacy, labs, and admin — which creates handoff errors, revenue leakage, and slow patient flow.",
    solution: "A modular HMS that unifies patient records, scheduling, billing, pharmacy, labs, and inventory with role-based access, HIPAA-aligned workflows, and real-time dashboards for administrators.",
    features: ["Patient EMR & appointment scheduling", "Doctor rostering & OPD queues", "Integrated billing & insurance claims", "Pharmacy & inventory management", "Lab reports & radiology integration", "Analytics for administrators"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "HL7 / FHIR"],
    results: [{ value: "−42%", label: "Patient triage time" }, { value: "+31%", label: "Billing accuracy" }, { value: "3.1x", label: "Faster admin workflows" }],
    accent: "from-accent/20 to-success/10",
  },
  {
    slug: "finbud",
    name: "FinBud",
    category: "Fintech",
    tagline: "Personal Finance & Budgeting",
    description: "Personal finance and budgeting platform that helps users track expenses, set savings goals, monitor investments, and improve overall financial health.",
    challenge: "Retail users juggle multiple accounts, cards, and investment apps with no single view of their money — leading to overspending and missed savings goals.",
    solution: "A goal-first personal finance platform with automatic transaction categorization, budget envelopes, investment tracking, and a nudging engine that improves financial habits.",
    features: ["Bank & card aggregation", "Smart auto-categorization", "Goals, envelopes & alerts", "Investment portfolio view", "Recurring subscription detector", "Insights & monthly reviews"],
    stack: ["React Native", "Node.js", "PostgreSQL", "Plaid", "GCP"],
    results: [{ value: "+22%", label: "Monthly savings rate" }, { value: "89%", label: "30-day retention" }, { value: "4.8★", label: "App store rating" }],
    accent: "from-success/20 to-accent/10",
  },
  {
    slug: "apexscore",
    name: "ApexScore",
    category: "Education & Assessment",
    tagline: "AI-Enabled Assessment Platform",
    description: "AI-enabled assessment and scoring platform with performance analytics — designed for institutions, coaching centers, and enterprise learning teams.",
    challenge: "Assessments today are static, slow to grade, and offer little personalized feedback — making it hard to identify strengths, gaps, and learning trajectories at scale.",
    solution: "An adaptive assessment engine with AI-powered scoring for open-ended responses, proctoring, granular analytics, and a personalized learning path recommendation layer.",
    features: ["Adaptive test engine", "AI scoring for essays & code", "Proctoring & anti-cheat", "Cohort & learner analytics", "Personalized learning paths", "Institution admin console"],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    results: [{ value: "10x", label: "Faster grading" }, { value: "+3.4x", label: "Learner engagement" }, { value: "97%", label: "Grader agreement" }],
    accent: "from-accent/20 to-accent/5",
  },
  {
    slug: "sellmate",
    name: "SellMate",
    category: "Sales & CRM",
    tagline: "Lead Management & Sales Productivity",
    description: "Lead management and sales productivity platform that unifies pipeline, communication, forecasting, and AI-assisted next-best-actions for revenue teams.",
    challenge: "SMB sales teams lose deals because leads slip through the cracks between spreadsheets, WhatsApp, and legacy CRMs — with no visibility into pipeline health or rep productivity.",
    solution: "A modern CRM with unified inbox, pipeline automation, AI-drafted follow-ups, and forecasting — designed for founder-led sales orgs that need enterprise capabilities without enterprise friction.",
    features: ["Unified lead inbox", "Kanban & forecast pipelines", "AI follow-up drafting", "Call & WhatsApp logging", "Team dashboards & goals", "Web & mobile parity"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "Twilio"],
    results: [{ value: "+38%", label: "Win rate uplift" }, { value: "−54%", label: "Time in admin" }, { value: "6h/wk", label: "Saved per rep" }],
    accent: "from-success/20 to-success/5",
  },
  {
    slug: "anahata-ai",
    name: "Anahata AI",
    category: "Artificial Intelligence",
    tagline: "AI Business Assistant",
    description: "AI-powered business assistant for automation, analytics, and intelligent decision-making — a single copilot that plugs into the tools you already use.",
    challenge: "Operators drown in dashboards, docs, and inboxes — but insights and actions still require humans to stitch everything together across siloed SaaS tools.",
    solution: "A retrieval-augmented AI assistant that connects to your data warehouse, docs, and business apps to answer questions in natural language, generate reports, and safely execute agentic workflows.",
    features: ["Natural language BI queries", "RAG over docs & databases", "Agentic workflow execution", "Fine-grained permissions", "Audit trail & governance", "SSO & enterprise integrations"],
    stack: ["Python", "LangChain", "OpenAI", "PostgreSQL", "AWS"],
    results: [{ value: "8h/wk", label: "Reclaimed per exec" }, { value: "−67%", label: "Report cycle time" }, { value: "100%", label: "Auditable actions" }],
    accent: "from-accent/25 to-success/10",
  },
];

export function ConceptProductsShowcase() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <div id="portfolio">
      <div className="grid gap-6 lg:grid-cols-2">
        {conceptProducts.map((p, i) => (
          <button
            key={p.slug}
            onClick={() => setActive(p)}
            className={`group text-left relative overflow-hidden rounded-3xl border border-border bg-background shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className={`relative ${i === 0 ? "h-64" : "h-52"} bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full max-w-sm rounded-2xl border border-border bg-background/95 p-4 shadow-elevated backdrop-blur transition-transform group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">{p.category}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                      <Sparkles className="size-3" /> Innovation Lab
                    </span>
                  </div>
                  <p className="mt-3 font-display text-lg font-bold text-ink">{p.name}</p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {p.results.map((r) => (
                      <div key={r.label} className="rounded-lg bg-surface p-2">
                        <p className="font-display text-sm font-bold text-ink leading-none">{r.value}</p>
                        <p className="mt-1 text-[9px] font-medium text-ink-muted leading-tight">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                  <h3 className="mt-1.5 font-display text-2xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm font-medium text-ink-soft">{p.tagline}</p>
                </div>
                <span className="mt-1 inline-flex shrink-0 items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  Case study <ArrowRight className="size-3.5" />
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink-soft">{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name || ""} description={active?.tagline} size="xl">
        {active && (
          <div className="grid gap-8">
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

            <div className="grid gap-6 md:grid-cols-2">
              <Block title="Business challenge" body={active.challenge} />
              <Block title="Our solution" body={active.solution} />
            </div>

            <div>
              <p className="eyebrow">Core capabilities</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Technology</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.stack.map((t) => (
                  <span key={t} className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink">{t}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-ink-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">About this case study</p>
              <p className="mt-2">
                <span className="font-semibold text-ink">{active.name}</span> is part of Govitrix's Concept Products & Innovation Labs — internally engineered products that demonstrate our approach to product thinking, architecture, and delivery. We can adapt these architectures and build tailored versions for your business.
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
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
