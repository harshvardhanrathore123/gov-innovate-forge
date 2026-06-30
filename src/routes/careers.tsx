import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Briefcase, MapPin, Check } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Join Govitrix. Open roles for engineers, designers, and product thinkers building world-class digital products.",
      },
      { property: "og:title", content: "Careers — Govitrix" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote · Global" },
  { title: "Product Designer", team: "Design", location: "Remote · EMEA" },
  { title: "AI/ML Engineer", team: "AI", location: "Remote · Global" },
  { title: "Cloud Architect", team: "Cloud", location: "Remote · Americas" },
  { title: "Engineering Manager", team: "Engineering", location: "Remote · Global" },
  { title: "Technical Project Manager", team: "Delivery", location: "Remote · Global" },
];

const benefits = [
  "Remote-first culture",
  "Senior, low-ego teammates",
  "Learning & conference budget",
  "Modern equipment of your choice",
  "Health & wellness stipend",
  "Generous time off & parental leave",
];

function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things that matter, with people who care."
        description="We're a small, senior team building serious products for serious clients. If that sounds like home, we'd love to talk."
      />

      <Section eyebrow="Open Roles" title="We're hiring">
        <div className="grid gap-3">
          {roles.map((r) => (
            <a
              key={r.title}
              href="#apply"
              className="group flex flex-col items-start justify-between gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-card md:flex-row md:items-center"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Briefcase className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{r.title}</h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{r.team}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-soft">
                  <MapPin className="size-4" /> {r.location}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent">
                  Apply <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="surface" eyebrow="Culture & Benefits" title="What you get">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-success/10 text-success">
                <Check className="size-4" />
              </span>
              <p className="text-sm font-medium text-ink">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="apply" eyebrow="Apply" title="Tell us about you">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setForm({ name: "", email: "", role: "", message: "" });
            setTimeout(() => setSent(false), 4000);
          }}
          className="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-8 shadow-soft"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
              />
            </Field>
            <Field label="Role" className="sm:col-span-2">
              <input
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="e.g. Senior Full-Stack Engineer"
                className="input"
              />
            </Field>
            <Field label="Message" className="sm:col-span-2">
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your work and what excites you."
                className="input resize-y"
              />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary"
          >
            Submit application <ArrowUpRight className="size-4" />
          </button>
          {sent && (
            <p className="mt-3 text-sm text-success">Thanks — we'll be in touch shortly.</p>
          )}
        </form>
      </Section>

      <CTASection
        title="Don't see your role?"
        description="We're always interested in talented people. Send us a note."
        primary={{ label: "Email us", to: "/contact" }}
        secondary={{ label: "About Govitrix", to: "/about" }}
      />

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
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{label}</span>
      {children}
    </label>
  );
}
