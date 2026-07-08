import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Plus,
  Minus,
  Upload,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { PageHero, Section } from "../components/site/Section";
import { Modal } from "../components/site/CTADialogs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Govitrix Corporation" },
      {
        name: "description",
        content: "Get in touch with Govitrix Corporation — sales@govitrix.com or +91 78300 80357. HQ: Noida, Uttar Pradesh.",
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
  phone: z.string().trim().min(5, "Required").max(30),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few details").max(2000),
});

const faqs = [
  {
    q: "What services does Govitrix offer?",
    a: "We deliver end-to-end product engineering: web and mobile application development, AI and analytics, cloud and DevOps, UI/UX design, and technology consulting. Every engagement is staffed with senior teams.",
  },
  {
    q: "What are typical project timelines?",
    a: "Focused MVPs and modernization sprints run 6–12 weeks. Product platforms and enterprise builds run 3–9 months. We share detailed timelines with each proposal — and prioritize incremental value delivery every sprint.",
  },
  {
    q: "How do you handle security and data protection?",
    a: "We architect every product with security and privacy from day one — Secure Development Lifecycle, threat modeling, encryption in transit and at rest, role-based access, and audit logging. We build HIPAA-, GDPR-, and SOC 2-aligned architectures. Mutual NDAs are signed before any commercial discussion.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Fixed-scope projects for well-defined work, dedicated development teams for long-term product engineering, staff augmentation to extend your team, and full product partnerships where Govitrix owns strategy through growth.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "Healthcare, FinTech, SaaS, EdTech, Sports Analytics, Logistics, eCommerce, Real Estate, and Travel. We bring domain patterns, regulatory awareness, and reference architectures to each engagement.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    file: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirm, setConfirm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
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
    setConfirm(true);
    setForm({ name: "", email: "", phone: "", company: "", message: "", file: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="Tell us about your goals. We typically respond within one business day."
        image="https://images.unsplash.com/photo-1524749292158-7540c2494485?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT: contact info + Noida image */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-3xl font-semibold text-ink md:text-4xl">Get in touch</h3>
            <p className="mt-3 text-ink-soft">
              For partnerships, proposals, or a discovery conversation — reach us via the form or
              directly through the channels below.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "Email", value: "sales@govitrix.com", href: "mailto:sales@govitrix.com" },
                { icon: Phone, label: "Phone", value: "+91 78300 80357", href: "tel:+917830080357" },
                { icon: MapPin, label: "HQ", value: "Noida, Uttar Pradesh", href: null },
              ].map((c) => {
                const inner = (
                  <>
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <c.icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {c.label}
                      </p>
                      <p className="text-sm font-medium text-ink">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-soft"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Location image (Noida Sector 144) */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=70&auto=format&fit=crop"
                  alt="Modern commercial towers representing our Noida Sector 144 headquarters"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent p-5 text-primary-foreground">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-success">
                    <Building2 className="size-3.5" /> Headquarters
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    Noida Sector 144, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form + FAQ */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={submit}
              className="rounded-3xl border border-border bg-background p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name*" error={errors.name}>
                  <input
                    className="input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Anika Sharma"
                  />
                </Field>
                <Field label="Email Address*" error={errors.email}>
                  <input
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </Field>
                <Field label="Contact Number*" error={errors.phone}>
                  <input
                    type="tel"
                    className="input"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98XXXXXX00"
                  />
                </Field>
                <Field label="Company">
                  <input
                    className="input"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company name (optional)"
                  />
                </Field>
                <Field label="Message*" error={errors.message} className="sm:col-span-2">
                  <textarea
                    rows={6}
                    className="input resize-y"
                    placeholder="Tell us about your goals, scope, timelines, or anything we should know."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </Field>
                <Field label="Upload File" className="sm:col-span-2">
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-ink-soft hover:border-border-strong hover:bg-background">
                    <span className="inline-flex items-center gap-2">
                      <Upload className="size-4" strokeWidth={1.75} />
                      {form.file || "Attach a brief, spec, or reference (optional)"}
                    </span>
                    <span className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold text-ink">
                      Browse
                    </span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={(e) => setForm({ ...form, file: e.target.files?.[0]?.name || "" })}
                    />
                  </label>
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
                  className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Send message <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>

            <div className="mt-14">
              <h3 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                Frequently asked
              </h3>
              <p className="mt-2 text-ink-soft">
                Answers to the questions we hear most from enterprise and founder teams.
              </p>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-background">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={f.q}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface"
                      >
                        <span className="font-medium text-ink">{f.q}</span>
                        {open ? (
                          <Minus className="size-4 text-ink-muted" />
                        ) : (
                          <Plus className="size-4 text-ink-muted" />
                        )}
                      </button>
                      {open && <p className="animate-fade-in px-5 pb-5 text-sm text-ink-soft">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CONFIRMATION MODAL */}
      <Modal
        open={confirm}
        onClose={() => setConfirm(false)}
        title="Message received"
        size="md"
      >
        <div className="grid gap-5 text-center">
          <div className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle2 className="size-8" strokeWidth={1.75} />
          </div>
          <p className="text-base leading-relaxed text-ink">
            Thank you for contacting Govitrix. We have successfully received your inquiry. Our team
            will review your requirements and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setConfirm(false)}
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
