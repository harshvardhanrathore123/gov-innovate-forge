import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CTASection } from "../components/site/Section";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Govitrix is a founder-led product engineering and technology consulting partner. Learn our story, mission, and team.",
      },
      { property: "og:title", content: "About — Govitrix" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { title: "Craftsmanship", body: "We treat every line of code and pixel as our reputation." },
  { title: "Partnership", body: "We win when our clients win — and we act like it." },
  { title: "Clarity", body: "Plain language, honest tradeoffs, and visible progress." },
  { title: "Outcomes", body: "We measure success by impact, not deliverables." },
];

const team = [
  {
    name: "Harshvardhan Singh Rathore",
    role: "Founder & CEO",
    bio: "Leads company strategy, partnerships, and delivery. Focused on translating business ambition into engineered outcomes.",
    focus: ["Product Strategy", "Digital Transformation", "Business Growth", "Innovation"],
    message:
      "Great software is a business decision before it is a technical one. Our job is to make that decision easy — with senior people, clear thinking, and honest tradeoffs.",
    initials: "HR",
  },
  {
    name: "Ujjwal Vaishnav",
    role: "Co-Founder & CTO",
    bio: "Leads engineering excellence, architecture, and platform strategy across all Govitrix engagements.",
    focus: ["Software Architecture", "Product Engineering", "Cloud Technologies", "Technology Innovation"],
    message:
      "Every system we ship should be secure, observable, and easy to change. We optimize for long-term maintainability, not short-term velocity — because our clients live with what we build for years.",
    initials: "UV",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Govitrix"
        title="A founder-led technology partner for ambitious teams."
        description="Govitrix Corporation was founded on a simple belief: great products are built by senior teams that care deeply about both craft and outcomes."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-background p-8 shadow-soft">
            <p className="eyebrow">Our Mission</p>
            <p className="mt-4 text-lg text-ink">
              Help ambitious companies design, build, and scale intelligent digital products that
              create lasting business value.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8 shadow-soft">
            <p className="eyebrow">Our Vision</p>
            <p className="mt-4 text-lg text-ink">
              To be the most trusted product engineering partner for founders and enterprises
              modernizing how the world works.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8 shadow-soft">
            <p className="eyebrow">Our Story</p>
            <p className="mt-4 text-ink-soft">
              We started Govitrix to bring back craftsmanship to digital product delivery — small
              senior teams, transparent process, and a long-term mindset.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface" eyebrow="Core Values" title="What we hold ourselves to">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Founder-led, senior by default" description="Meet the people accountable for every engagement.">
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 rounded-3xl border border-border bg-background p-8 shadow-soft"
            >
              <div className="flex items-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">{t.role}</p>
                  <p className="mt-3 text-sm text-ink-soft">{t.bio}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Focus areas</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.focus.map((f) => (
                    <span key={f} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink-soft">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <blockquote className="rounded-2xl border border-border bg-surface p-5 text-sm italic leading-relaxed text-ink">
                "{t.message}"
              </blockquote>

              <div className="flex items-center gap-2">
                <a href="#" aria-label="LinkedIn" className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft hover:text-ink">
                  <Linkedin className="size-4" />
                </a>
                <a href="#" aria-label="Email" className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-ink-soft hover:text-ink">
                  <Mail className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Like how we think? Let's build together."
        primary={{ label: "Book Discovery Call", to: "/contact" }}
        secondary={{ label: "See our work", to: "/portfolio" }}
      />
    </>
  );
}
