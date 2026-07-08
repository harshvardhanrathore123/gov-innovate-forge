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
import { DiscoveryDialog, ProposalDialog } from "../components/site/CTADialogs";
import { ConceptProductsShowcase } from "../components/site/ConceptProducts";
import { AICapabilities } from "../components/site/AICapabilities";
import { EngagementModels } from "../components/site/EngagementModels";
import { SecurityCompliance } from "../components/site/SecurityCompliance";
import { AchievementStats } from "../components/site/AchievementStats";
import { TechPartners } from "../components/site/TechPartners";
import { TestimonialSlider } from "../components/site/TestimonialSlider";
import { FAQ } from "../components/site/FAQ";
import { RoadmapProcess } from "../components/site/RoadmapProcess";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Govitrix Corporation — From Imagination to Innovation" },
      {
        name: "description",
        content:
          "Govitrix builds intelligent digital products, AI-powered solutions, and scalable enterprise platforms that help organizations innovate, grow, and lead.",
      },
      { property: "og:title", content: "Govitrix Corporation" },
      {
        property: "og:description",
        content: "Product engineering, AI, and technology consulting that drives measurable growth.",
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

const services = [
  { icon: Layers, title: "Web Application Development", body: "Scalable SaaS, web platforms, and enterprise applications engineered end-to-end.", benefits: ["Architecture & roadmap", "Frontend & backend", "QA & observability"] },
  { icon: Smartphone, title: "Mobile App Development", body: "Native and cross-platform mobile experiences engineered for performance.", benefits: ["iOS & Android", "React Native / Flutter", "App store launch"] },
  { icon: BrainCircuit, title: "AI & Analytics", body: "Generative AI, agents, ML, and analytics tuned for real business outcomes.", benefits: ["LLM applications", "Predictive models", "BI dashboards"] },
  { icon: Cloud, title: "Cloud & DevOps", body: "Cloud infrastructure, CI/CD, monitoring, and scalability by default.", benefits: ["AWS, Azure, GCP", "Kubernetes & IaC", "24×7 monitoring"] },
  { icon: PenTool, title: "UI/UX Design", body: "Research-led design systems, user experience, and high-fidelity prototyping.", benefits: ["User research", "Design systems", "Prototyping"] },
  { icon: Lightbulb, title: "Product Strategy & Consulting", body: "Digital transformation, architecture consulting, and product strategy.", benefits: ["Tech due diligence", "Architecture review", "Roadmaps"] },
];

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Banknote, name: "FinTech" },
  { icon: Cpu, name: "SaaS" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Building2, name: "Manufacturing" },
  { icon: Plane, name: "Insurance" },
];

const insights = [
  { tag: "Cost", title: "How much does it cost to build a mobile app?", excerpt: "A pragmatic breakdown of cost drivers, ranges, and how to budget responsibly.", read: "8 min read" },
  { tag: "AI", title: "AI adoption in modern businesses", excerpt: "Where AI delivers measurable ROI, and the patterns that consistently fail.", read: "11 min read" },
  { tag: "Strategy", title: "MVP vs full product development", excerpt: "Choosing the right scope for your stage — and avoiding the most expensive mistakes.", read: "6 min read" },
];

function HomePage() {
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [proposalOpen, setProposalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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
              We build intelligent digital products, AI-powered solutions, and scalable enterprise
              platforms that help organizations innovate, grow, and lead in the digital era.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDiscoveryOpen(true)}
                className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-elevated"
              >
                Book Discovery Call
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Start a Project <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => scrollTo("products")}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
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
      <section aria-label="Products" className="border-b border-border bg-surface py-10">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Products & Innovation Labs
          </p>
          <div className="relative mt-6 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
              {[...Array(2)].flatMap((_, i) =>
                ["MEDICARE HMS", "FINBUD", "APEXSCORE", "SELLMATE", "ANAHATA AI"].map((name) => (
                  <span key={`${i}-${name}`} className="font-display text-xl font-bold tracking-widest text-ink-muted/70">
                    {name}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <Section
        eyebrow="Achievements"
        title="Trusted by ambitious teams worldwide"
        description="A track record built on senior craft, disciplined delivery, and measurable outcomes."
      >
        <AchievementStats />
      </Section>

      {/* PRODUCTS & INNOVATION LABS */}
      <Section
        id="products"
        tone="surface"
        eyebrow="Products & Innovation Labs"
        title="Concept products engineered inside Govitrix"
        description="A curated look at products built by our teams — showcasing how we approach product thinking, architecture, and delivery across industries."
      >
        <ConceptProductsShowcase />

        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            Explore the full portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* CREDIBILITY */}
      <Section
        eyebrow="Why Govitrix"
        title="A trusted product engineering partner"
        description="We combine senior craft with disciplined delivery — the way mature technology partners should operate."
      >
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {credibility.map((c) => (
            <div key={c.title} className="group bg-background p-7 transition-colors hover:bg-surface">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                <c.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        tone="surface"
        eyebrow="Services"
        title="What we engineer"
        description="A complete toolkit for building, scaling, and modernizing technology products."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <s.icon className="size-5" strokeWidth={1.75} />
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

      {/* AI CAPABILITIES */}
      <Section
        eyebrow="AI Capabilities"
        title="Deep AI engineering — from prototype to production"
        description="We build applied AI systems on top of modern LLMs, agents, and data pipelines — grounded in security, evaluation, and business ROI."
      >
        <AICapabilities />
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
              className="group flex items-center gap-3 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <i.icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="font-medium text-ink">{i.name}</span>
              <ArrowUpRight className="ml-auto size-4 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
            </Link>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section
        eyebrow="Engagement Models"
        title="Flexible ways to work with Govitrix"
        description="Choose the model that fits your stage — from fixed-scope projects to full product partnerships."
      >
        <EngagementModels />
      </Section>

      {/* PROCESS — ENTERPRISE JOURNEY ROADMAP */}
      <Section
        tone="dark"
        eyebrow="Enterprise Journey"
        title="A disciplined roadmap, from idea to scale"
        description="Every engagement follows a structured, transparent progression — designed to de-risk delivery and unlock value at every milestone."
      >
        <RoadmapProcess />
      </Section>

      {/* SECURITY & COMPLIANCE */}
      <Section
        eyebrow="Security & Compliance"
        title="Enterprise-grade security, built in"
        description="We architect every product with security, privacy, and regulatory awareness from day one."
      >
        <SecurityCompliance />
      </Section>

      {/* TECH PARTNERS */}
      <Section
        tone="surface"
        eyebrow="Technology Partners"
        title="A modern, proven technology ecosystem"
        description="We work with the platforms and standards trusted by global enterprises."
      >
        <TechPartners />
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Client Stories"
        title="What our partners say"
        description="Outcomes speak louder than words. Here's what teams we've built with have to say."
      >
        <TestimonialSlider />
      </Section>

      {/* INSIGHTS */}
      <Section
        tone="surface"
        eyebrow="Insights"
        title="Ideas worth reading"
        description="Field notes on product strategy, AI, engineering, and modern delivery."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((p) => (
            <Link
              key={p.title}
              to="/insights"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-card"
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

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before starting a conversation with our team."
      >
        <FAQ />
      </Section>

      <CTASection />
    </>
  );
}
