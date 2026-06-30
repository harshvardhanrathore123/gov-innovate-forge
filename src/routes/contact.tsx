import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CalendarClock,
  Plus,
  Minus,
} from "lucide-react";
import { PageHero, Section } from "../components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Govitrix Corporation" },
      {
        name: "description",
        content: "Book a discovery call or send a project brief to Govitrix Corporation.",
      },
      { property: "og:title", content: "Contact — Govitrix" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  details: z.string().trim().min(10, "Please share a few details").max(2000),
});

const faqs = [
  {
    q: "How do engagements typically start?",
    a: "We begin with a free 30-minute discovery call, followed by a structured proposal outlining scope, timeline, and price.",
  },
  {
    q: "What's a typical project size?",
    a: "Engagements range from focused 4–6 week sprints to multi-quarter product builds. We work with startups and global enterprises.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we're happy to sign a mutual NDA before discussing details.",
  },
  {
    q: "Where is your team based?",
    a: "We are remote-first with team members across the Americas, EMEA, and APAC.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    budget: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="Tell us about your goals. We typically respond within one business day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold text-ink">Get in touch</h3>
            <p className="mt-3 text-ink-soft">
              For partnerships, proposals, or just to say hello — reach us via the form or directly.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@govitrix.com" },
                { icon: Phone, label: "Phone", value: "+1 (415) 555-0119" },
                { icon: MapPin, label: "HQ", value: "Global · Remote-first" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium text-ink">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-primary p-7 text-primary-foreground">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-success">
                  <CalendarClock className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-success">
                    Book a slot
                  </p>
                  <p className="font-display text-lg font-semibold">
                    30-min discovery call
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/75">
                Prefer to talk live? Reserve a slot directly on our calendar.
              </p>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-background px-4 py-2.5 text-sm font-semibold text-primary hover:shadow-elevated"
              >
                Open calendar <ArrowUpRight className="size-4" />
              </a>
              <div className="mt-6 rounded-2xl border border-dashed border-primary-foreground/20 p-4 text-xs text-primary-foreground/60">
                Calendly embed placeholder — paste your widget here.
              </div>
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="flex h-full items-center justify-center text-xs text-ink-muted">
                Google Maps placeholder
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                const result = schema.safeParse(form);
                if (!result.success) {
                  const errs: Record<string, string> = {};
                  result.error.issues.forEach((i) => {
                    errs[i.path[0] as string] = i.message;
                  });
                  setErrors(errs);
                  return;
                }
                setErrors({});
                setSent(true);
                setForm({
                  name: "",
                  email: "",
                  company: "",
                  country: "",
                  budget: "",
                  details: "",
                });
                setTimeout(() => setSent(false), 5000);
              }}
              className="rounded-3xl border border-border bg-background p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    className="input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </Field>
                <Field label="Work email" error={errors.email}>
                  <input
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </Field>
                <Field label="Company">
                  <input
                    className="input"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </Field>
                <Field label="Country">
                  <input
                    className="input"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  />
                </Field>
                <Field label="Estimated budget" className="sm:col-span-2">
                  <select
                    className="input"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  >
                    <option value="">Select a range</option>
                    <option>Under $25k</option>
                    <option>$25k – $75k</option>
                    <option>$75k – $200k</option>
                    <option>$200k+</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
                <Field label="Project details" error={errors.details} className="sm:col-span-2">
                  <textarea
                    rows={6}
                    className="input resize-y"
                    placeholder="Goals, scope, timelines, anything we should know."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    required
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-muted">
                  By submitting you agree to our{" "}
                  <a href="/privacy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary"
                >
                  Send message <ArrowUpRight className="size-4" />
                </button>
              </div>
              {sent && (
                <p className="mt-4 rounded-lg bg-success/10 px-4 py-3 text-sm font-medium text-success">
                  Thanks — your message is on its way. We'll respond within one business day.
                </p>
              )}
            </form>

            <div className="mt-12">
              <h3 className="font-display text-2xl font-semibold text-ink">Frequently asked</h3>
              <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-background">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="font-medium text-ink">{f.q}</span>
                        {open ? (
                          <Minus className="size-4 text-ink-muted" />
                        ) : (
                          <Plus className="size-4 text-ink-muted" />
                        )}
                      </button>
                      {open && <p className="px-5 pb-5 text-sm text-ink-soft">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

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
