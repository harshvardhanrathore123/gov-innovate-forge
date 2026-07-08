import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  Target,
  Lightbulb,
  TrendingUp,
  Compass,
  Puzzle,
  BarChart3,
} from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Govitrix is a founder-led product engineering and technology consulting partner. Learn our story, mission, and values.",
      },
      { property: "og:title", content: "About — Govitrix" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "Honest, transparent, and accountable in every engagement.",
  },
  {
    icon: Sparkles,
    title: "Curiosity",
    body: "Always learning, always improving, always exploring.",
  },
  {
    icon: Target,
    title: "Precision",
    body: "Delivering excellence through disciplined execution and attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Challenging convention and building what's next.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    body: "Creating meaningful outcomes that generate lasting value.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Govitrix"
        title="A founder-led technology partner for ambitious teams."
        description="Govitrix Corporation was founded on a simple belief: great products are built by senior teams that care deeply about both craft and outcomes."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=70&auto=format&fit=crop"
      />

      {/* MISSION & VISION */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-primary p-10 text-primary-foreground shadow-soft">
            <div aria-hidden className="absolute inset-0 hairline-grid opacity-[0.08]" />
            <div aria-hidden className="soft-blur-orb -right-16 -top-16 h-56 w-56 bg-accent/40" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-success">
                <Compass className="size-3.5" /> Our Mission
              </span>
              <p className="mt-6 font-display text-2xl font-semibold leading-snug md:text-3xl">
                Help ambitious companies design, build, and scale intelligent digital products that
                create lasting business value.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-10 shadow-soft">
            <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <Sparkles className="size-3.5" /> Our Vision
              </span>
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                To be the most trusted product engineering partner for founders and enterprises
                modernizing how the world works.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* OUR STORY */}
      <Section
        tone="surface"
        eyebrow="Our Story"
        title="Craftsmanship, restored to digital product delivery."
        description="Govitrix started because too many ambitious teams were being underserved by tech partners that scaled headcount faster than they scaled quality."
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              year: "The origin",
              title: "A conviction, not a pitch deck",
              body: "Founded by senior engineers and product builders who had seen what mature technology partnerships look like — and what they don't.",
            },
            {
              year: "The philosophy",
              title: "Small, senior, accountable",
              body: "We deliberately stay senior-heavy. Every engagement is staffed with people who have shipped products at scale — not layered management.",
            },
            {
              year: "The trajectory",
              title: "Global-quality, founder-led",
              body: "Enterprise-grade rigor with the agility and ownership of a founder-led firm. We compete with global consultancies on quality, not scale.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-background p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {c.year}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY / WHAT / HOW */}
      <Section
        eyebrow="Why Govitrix"
        title="Built on purpose, focused on outcomes."
        description="Three questions that shape everything we do — and everything we build for our clients."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              label: "Why Govitrix Exists",
              body: "To give ambitious organizations a technology partner that combines the discipline of a global consultancy with the ownership and agility of a founder-led studio — without the layered overhead of either.",
            },
            {
              icon: Puzzle,
              label: "What Govitrix Solves",
              body: "Ambitious ideas that stall because internal teams are stretched, external agencies deliver output but not outcomes, and legacy platforms can no longer keep up with the business.",
            },
            {
              icon: BarChart3,
              label: "How Govitrix Creates Value",
              body: "Senior teams, opinionated architecture, transparent delivery, and measurable business impact — engineered from discovery through scale so every rupee, dollar, or euro compounds.",
            },
          ].map((b) => (
            <div
              key={b.label}
              className="group flex flex-col rounded-3xl border border-border bg-background p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <b.icon className="size-5" strokeWidth={1.75} />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {b.label}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section
        tone="surface"
        eyebrow="Core Values"
        title="What we hold ourselves to."
        description="Five principles that shape hiring, delivery, and every client conversation."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <v.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Like how we think? Let's build together."
        description="Book a free 30-minute discovery call to explore how Govitrix can help — or share your requirements through our contact form and we'll respond within one business day."
      />
    </>
  );
}
