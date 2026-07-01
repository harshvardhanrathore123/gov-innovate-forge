import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Smartphone,
  BrainCircuit,
  Cloud,
  PenTool,
  Lightbulb,
  ShieldCheck,
  Workflow,
  Gauge,
  Globe2,
  Users,
  LineChart,
  Check,
  Star,
  Quote,
  Heart,
  Banknote,
  Cpu,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  Plane,
} from "lucide-react";
import { useState } from "react";
import { HeroVisual } from "../components/site/HeroVisual";
import { Section, CTASection } from "../components/site/Section";
import { Counter } from "../components/site/Counter";
import { DiscoveryDialog, ProposalDialog } from "../components/site/CTADialogs";
import { ConceptProductsShowcase } from "../components/site/ConceptProducts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Govitrix Corporation — From Imagination to Innovation" },
      {
        name: "description",
        content:
          "Govitrix partners with startups, SMBs, and enterprises to design, build, and scale intelligent digital products — web, mobile, AI, and cloud.",
      },
      { property: "og:title", content: "Govitrix Corporation" },
      {
        property: "og:description",
        content: "Product engineering & technology consulting that drives growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const trustChips = [
  "Product Engineering",
  "AI Solutions",
  "Mobile Development",
  "Cloud & DevOps",
  "Global Delivery",
  "NDA Protected",
];

const credibility = [
  { icon: Users, title: "Founder-led execution", body: "Senior engineers and designers on every engagement." },
  { icon: Workflow, title: "Agile delivery", body: "Two-week sprints with transparent demos and metrics." },
  { icon: Globe2, title: "Global standards", body: "Quality and process aligned with enterprise expectations." },
  { icon: ShieldCheck, title: "Secure architecture", body: "Security and privacy designed into every layer." },
  { icon: Gauge, title: "Scalable solutions", body: "Built to grow from your first customer to your millionth." },
  { icon: LineChart, title: "High-performance", body: "Sub-second experiences across web and mobile." },
];

const stats = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 65, suffix: "+", label: "Products Built" },
  { value: 18, suffix: "", label: "Industries Served" },
  { value: 22, suffix: "", label: "Countries Targeted" },
];


const services = [
  {
    icon: Layers,
    title: "Product Engineering",
    body: "Scalable SaaS platforms, web products, and enterprise solutions built end-to-end.",
    benefits: ["Architecture & roadmap", "Frontend & backend", "QA & observability"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    body: "Native and cross-platform mobile experiences engineered for performance.",
    benefits: ["iOS & Android", "React Native / Flutter", "App store launch"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Analytics",
    body: "Machine learning, generative AI, business intelligence, and data analytics.",
    benefits: ["LLM applications", "Predictive models", "BI dashboards"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Cloud infrastructure, CI/CD, monitoring, and scalability by default.",
    benefits: ["AWS, Azure, GCP", "Kubernetes & IaC", "24×7 monitoring"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    body: "Research-led design systems, user experience, and high-fidelity prototyping.",
    benefits: ["User research", "Design systems", "Prototyping"],
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    body: "Digital transformation, architecture consulting, and product strategy.",
    benefits: ["Tech due diligence", "Architecture review", "Roadmaps"],
  },
];

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Banknote, name: "FinTech" },
  { icon: Cpu, name: "SaaS" },
  { icon: ShoppingBag, name: "eCommerce" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Real Estate" },
  { icon: Plane, name: "Travel" },
];

const why = [
  "Product Thinking First",
  "Founder-Led Partnership",
  "Transparent Communication",
  "Modern Technology Stack",
  "Agile Delivery Model",
  "Long-Term Growth Focus",
  "Enterprise Security Standards",
  "Dedicated Success Approach",
];

const process = [
  { step: "01", title: "Discovery", body: "Stakeholder interviews, goals, success metrics." },
  { step: "02", title: "Strategy", body: "Roadmap, scope, architecture, and timelines." },
  { step: "03", title: "UX/UI Design", body: "Research, IA, prototypes, and design systems." },
  { step: "04", title: "Development", body: "Two-week sprints with weekly demos." },
  { step: "05", title: "Testing", body: "Automated and manual QA, performance audits." },
  { step: "06", title: "Deployment", body: "CI/CD, observability, secure rollouts." },
  { step: "07", title: "Support", body: "Ongoing improvements, SRE, and growth." },
];

const stack: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "Vue", "Angular"] },
  { group: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { group: "Backend", items: ["Node.js", "Python", "Java", ".NET"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { group: "AI", items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch"] },
];

const testimonials = [
  {
    quote:
      "Govitrix delivered our analytics platform faster than two prior agencies combined. Their senior team set the bar.",
    name: "Priya Mehta",
    role: "VP Engineering, Northvault",
  },
  {
    quote:
      "From discovery through launch, they operated as a true product partner. Our retention jumped 28% within a quarter.",
    name: "Daniel Okafor",
    role: "Founder, Lumenly Health",
  },
  {
    quote:
      "Calm, senior, and consistently right. They architected a platform that handles 10x our launch traffic.",
    name: "Sofia Nilsen",
    role: "CTO, Cargolane",
  },
];

const insights = [
  {
    tag: "Cost",
    title: "How much does it cost to build a mobile app?",
    excerpt: "A pragmatic breakdown of cost drivers, ranges, and how to budget responsibly.",
    read: "8 min read",
  },
  {
    tag: "AI",
    title: "AI adoption in modern businesses",
    excerpt: "Where AI delivers measurable ROI, and the patterns that consistently fail.",
    read: "11 min read",
  },
  {
    tag: "Strategy",
    title: "MVP vs full product development",
    excerpt: "Choosing the right scope for your stage — and avoiding the most expensive mistakes.",
    read: "6 min read",
  },
];

function HomePage() {
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <DiscoveryDialog open={discoveryOpen} onClose={() => setDiscoveryOpen(false)} />
      <ProposalDialog open={proposalOpen} onClose={() => setProposalOpen(false)} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div aria-hidden className="absolute inset-0 hairline-grid opacity-[0.45]" />
        <div aria-hidden className="soft-blur-orb left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 bg-accent/15" />
        <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              Product Engineering · AI · Cloud · Mobile
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl md:leading-[1.05] lg:text-[68px]">
              Transforming Businesses.{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">Intelligently.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-ink-soft">
              We engineer tomorrow's technology today — creating scalable web applications, mobile experiences,
              AI-powered systems, cloud infrastructure, and intelligent digital products that drive measurable business growth.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDiscoveryOpen(true)}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-secondary hover:shadow-elevated"
              >
                Book Discovery Call
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                type="button"
                onClick={() => setProposalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:opacity-90"
              >
                Get Proposal <ArrowRight className="size-4" />
              </button>
              <button
                type="button"
                onClick={scrollToPortfolio}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                Explore Portfolio <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-muted">
              {trustChips.map((c) => (
                <span key={c} className="inline-flex items-center gap-2">
                  <Check className="size-3.5 text-success" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section aria-label="Trusted by" className="border-b border-border bg-surface py-10">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Concept Products & Innovation Labs
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                [
                  "MEDICARE HMS",
                  "FINBUD",
                  "APEXSCORE",
                  "SELLMATE",
                  "ANAHATA AI",
                ].map((name) => (
                  <span
                    key={`${i}-${name}`}
                    className="font-display text-xl font-bold tracking-widest text-ink-muted/70"
                  >
                    {name}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <Section
        eyebrow="Why Govitrix"
        title="A trusted product engineering partner"
        description="We combine senior craft with disciplined delivery — the way mature technology partners should operate."
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c) => (
            <div key={c.title} className="bg-background p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONCEPT PRODUCTS & INNOVATION LABS */}
      <Section
        tone="surface"
        eyebrow="Concept Products & Innovation Labs"
        title="Featured product case studies"
        description="A curated look at products engineered inside Govitrix — showcasing how we approach product thinking, architecture, and delivery across industries."
      >
        <ConceptProductsShowcase />

        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink hover:bg-surface"
          >
            Explore the full portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="Services"
        title="What we engineer"
        description="A complete toolkit for building, scaling, and modernizing technology products."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                Learn more <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        tone="surface"
        eyebrow="Industries"
        title="Deep expertise across regulated and fast-moving markets"
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((i) => (
            <Link
              key={i.name}
              to="/industries"
              className="group flex items-center gap-3 rounded-2xl border border-border bg-background p-5 transition-all hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <i.icon className="size-5" />
              </span>
              <span className="font-medium text-ink">{i.name}</span>
              <ArrowUpRight className="ml-auto size-4 text-ink-muted transition-colors group-hover:text-ink" />
            </Link>
          ))}
        </div>
      </Section>

      {/* WHY GOVITRIX */}
      <Section
        eyebrow="Why Govitrix"
        title="Why businesses choose us"
        description="We focus on outcomes, not output. These principles guide every engagement."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <div
              key={w}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5"
            >
              <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-medium leading-snug text-ink">{w}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        tone="dark"
        eyebrow="Process"
        title="A disciplined, transparent delivery model"
        description="Each phase is structured, measurable, and designed to de-risk delivery."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div
              key={p.step}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6"
            >
              <p className="font-display text-3xl font-bold text-success">{p.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-primary-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section
        eyebrow="Technology"
        title="Modern, opinionated stack"
        description="We choose the right tools for each layer — pragmatic, proven, and built to last."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.group} className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {s.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="surface" eyebrow="Clients" title="What our partners say">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-border bg-background p-7 shadow-soft"
            >
              <div>
                <Quote className="size-6 text-accent/50" />
                <div className="mt-3 flex gap-0.5 text-success">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* INSIGHTS */}
      <Section
        eyebrow="Insights"
        title="Ideas worth reading"
        description="Field notes on product strategy, AI, engineering, and modern delivery."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((p) => (
            <Link
              key={p.title}
              to="/insights"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-card"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-surface to-background">
                <div aria-hidden className="absolute inset-0 hairline-grid opacity-50" />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                  <span>{p.read}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-accent">
                    Read <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
