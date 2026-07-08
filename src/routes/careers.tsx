import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  MapPin,
  BookOpen,
  Lightbulb,
  Award,
  Clock,
  TrendingUp,
  Mail,
  Upload,
  CheckCircle2,
} from "lucide-react";
import { PageHero, Section } from "../components/site/Section";
import { Modal } from "../components/site/CTADialogs";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Join Govitrix. Open roles for AI/ML engineers, QA analysts, and DevOps engineers building next-generation digital products.",
      },
      { property: "og:title", content: "Careers — Govitrix" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

type Role = {
  slug: string;
  title: string;
  team: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    slug: "ai-ml-engineer",
    title: "AI/ML Engineer",
    team: "Artificial Intelligence",
    location: "Remote / Noida",
    summary:
      "Design, build, and deploy production-grade AI systems — from applied ML pipelines to retrieval-augmented LLM applications and agentic workflows.",
    responsibilities: [
      "Design and ship RAG, agentic, and applied ML systems for client products",
      "Own model evaluation, guardrails, and observability in production",
      "Partner with product and engineering to integrate AI into real workflows",
      "Contribute to internal AI capability frameworks and tooling",
    ],
    requirements: [
      "3+ years shipping ML or AI systems in production",
      "Strong Python; experience with LangChain, OpenAI/Anthropic APIs, vector DBs",
      "Solid grounding in MLOps, evaluation, and prompt engineering",
      "Comfort communicating trade-offs with senior stakeholders",
    ],
  },
  {
    slug: "qa-analyst",
    title: "Quality Assurance Analyst",
    team: "Quality Engineering",
    location: "Remote / Noida",
    summary:
      "Own the quality bar across web and mobile products — combining exploratory testing, automation, and clear risk communication with product teams.",
    responsibilities: [
      "Design and execute manual and automated test strategies",
      "Author regression suites and performance/security checks",
      "Partner with engineering during sprint planning to build in quality",
      "Report defects with clear reproduction steps and business impact",
    ],
    requirements: [
      "2+ years in software QA across web and/or mobile",
      "Hands-on with automation frameworks (Playwright, Cypress, or similar)",
      "Strong understanding of API testing and CI/CD integration",
      "Excellent written communication and defect triage skills",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    team: "Cloud & Platform",
    location: "Remote / Noida",
    summary:
      "Design, operate, and evolve cloud infrastructure and CI/CD across client engagements — with reliability, security, and cost discipline as first-class concerns.",
    responsibilities: [
      "Design and operate AWS/GCP/Azure environments with IaC",
      "Build and maintain CI/CD pipelines and release automation",
      "Instrument observability, alerting, and incident response",
      "Partner with engineering to embed security and cost controls",
    ],
    requirements: [
      "3+ years in DevOps, SRE, or platform engineering",
      "Hands-on with Terraform, Kubernetes, Docker, and cloud native services",
      "Strong scripting (Python / Bash / Go) and Linux fundamentals",
      "Experience with observability stacks (Grafana, Prometheus, Datadog, etc.)",
    ],
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Learning",
    body: "Dedicated learning budget, curated courses, and time to explore new technologies with the team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Space to prototype, ship internal products, and shape our Innovation Labs roadmap.",
  },
  {
    icon: Award,
    title: "Ownership",
    body: "Real accountability for outcomes — you own decisions, architecture, and delivery for the work you lead.",
  },
  {
    icon: Clock,
    title: "Flexibility",
    body: "Remote-first, outcome-driven schedules, and respect for deep-work time.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    body: "Career paths that scale with responsibility and impact — not seat time.",
  },
];

function CareersPage() {
  const [viewRole, setViewRole] = useState<Role | null>(null);
  const [applyRole, setApplyRole] = useState<Role | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirm, setConfirm] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.role) errs.role = "Please select a role";
    if (!form.resume) errs.resume = "Please attach your resume";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setConfirm(true);
    setForm({ name: "", email: "", phone: "", role: "", message: "", resume: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things that matter, with people who care."
        description="Join a team of innovators, engineers, and problem-solvers building next-generation digital products and intelligent technology solutions."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=70&auto=format&fit=crop"
      />

      {/* OPEN ROLES */}
      <Section id="open-roles" eyebrow="Open Positions" title="We're hiring">
        <div className="mx-auto grid max-w-4xl gap-4">
          {roles.map((r) => (
            <div
              key={r.slug}
              className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-card md:flex-row md:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <Briefcase className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{r.team}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                    <MapPin className="size-4" strokeWidth={1.75} /> {r.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewRole(r)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
                >
                  View Job Description
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setApplyRole(r);
                    setForm((f) => ({ ...f, role: r.title }));
                    setTimeout(() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }), 50);
                  }}
                  className="group/btn inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Apply <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CULTURE & BENEFITS */}
      <Section
        tone="surface"
        eyebrow="Culture & Benefits"
        title="How we work — and why people stay."
        description="We optimize for depth, ownership, and long-term growth over churn and headcount."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <b.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APPLICATION */}
      <Section id="apply" eyebrow="Apply" title="Tell us about you">
        <form
          noValidate
          onSubmit={submit}
          className="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-8 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name*" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Anika Sharma"
                className="input"
              />
            </Field>
            <Field label="Email Address*" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="input"
              />
            </Field>
            <Field label="Contact Number*" error={errors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98XXXXXX00"
                className="input"
              />
            </Field>
            <Field label="Job Role*" error={errors.role}>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="input"
              >
                <option value="">Select an open position</option>
                {roles.map((r) => (
                  <option key={r.slug} value={r.title}>
                    {r.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message" className="sm:col-span-2">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your work, projects you're proud of, or what excites you about Govitrix."
                className="input resize-y"
              />
            </Field>
            <Field label="Upload Resume / CV*" error={errors.resume} className="sm:col-span-2">
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-ink-soft hover:border-border-strong hover:bg-background">
                <span className="inline-flex items-center gap-2">
                  <Upload className="size-4" strokeWidth={1.75} />
                  {form.resume || "Choose a file (PDF, DOC, DOCX)"}
                </span>
                <span className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold text-ink">
                  Browse
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => setForm({ ...form, resume: e.target.files?.[0]?.name || "" })}
                />
              </label>
            </Field>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary"
          >
            Submit application <ArrowUpRight className="size-4" />
          </button>
        </form>
      </Section>

      {/* LETS BUILD — careers variant */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground shadow-elevated md:px-16 md:py-20">
            <div aria-hidden className="absolute inset-0 opacity-[0.10] hairline-grid" />
            <div aria-hidden className="soft-blur-orb -right-24 -top-24 h-72 w-72 bg-accent/60" />
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-success">
                  Let's build
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.05]">
                  Don't see your role?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                  We're always interested in talented people who share our standards. Send your CV
                  and a short note to our recruitment team.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <a
                  href="mailto:careers@govitrix.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-background px-6 py-4 text-base font-semibold text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <Mail className="size-5" strokeWidth={1.75} />
                  careers@govitrix.com
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="text-xs text-primary-foreground/60 md:text-right">
                  Reference the role or the kind of work you'd like to do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JD Modal */}
      <Modal
        open={!!viewRole}
        onClose={() => setViewRole(null)}
        title={viewRole?.title || ""}
        description={viewRole ? `${viewRole.team} · ${viewRole.location}` : undefined}
        size="lg"
      >
        {viewRole && (
          <div className="grid gap-6">
            <p className="text-base leading-relaxed text-ink">{viewRole.summary}</p>
            <div>
              <p className="eyebrow">What you'll do</p>
              <ul className="mt-3 space-y-2">
                {viewRole.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">What we're looking for</p>
              <ul className="mt-3 space-y-2">
                {viewRole.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => {
                setApplyRole(viewRole);
                setForm((f) => ({ ...f, role: viewRole.title }));
                setViewRole(null);
                setTimeout(() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="inline-flex w-fit items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary"
            >
              Apply for this role <ArrowUpRight className="size-4" />
            </button>
          </div>
        )}
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={confirm}
        onClose={() => {
          setConfirm(false);
          setApplyRole(null);
        }}
        title="Application received"
        size="md"
      >
        <div className="grid gap-5 text-center">
          <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle2 className="size-8" strokeWidth={1.75} />
          </div>
          <p className="text-base leading-relaxed text-ink">
            Thank you for your application. Our recruitment team will review your profile and
            contact you if your qualifications align with our current opportunities.
          </p>
          <button
            type="button"
            onClick={() => {
              setConfirm(false);
              setApplyRole(null);
            }}
            className="mx-auto inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary"
          >
            Close
          </button>
        </div>
      </Modal>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          color: var(--color-ink);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 18%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  className = "",
  error,
  children,
}: {
  label: string;
  className?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</span>
      {children}
      {error && <span className="text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}
