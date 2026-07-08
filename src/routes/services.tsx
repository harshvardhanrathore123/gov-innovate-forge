import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Layers,
  Smartphone,
  BrainCircuit,
  Cloud,
  PenTool,
  Lightbulb,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Product engineering, mobile, AI, cloud, design, and consulting services delivered by senior teams.",
      },
      { property: "og:title", content: "Services — Govitrix" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Layers,
    title: "Product Engineering",
    body: "Scalable SaaS platforms, web products, and enterprise solutions, engineered end-to-end with senior teams.",
    bullets: [
      "Architecture, APIs, and data modelling",
      "Frontend systems and design components",
      "Performance, observability, and SRE",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    body: "Native and cross-platform mobile experiences engineered for performance, accessibility, and scale.",
    bullets: ["iOS (Swift) & Android (Kotlin)", "React Native & Flutter", "App Store & Play Store launch"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Analytics",
    body: "Machine learning, generative AI, business intelligence, and analytics — turned into measurable outcomes.",
    bullets: ["LLM applications & RAG", "Predictive ML pipelines", "BI dashboards & data warehousing"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Cloud infrastructure, CI/CD, monitoring, and scalability designed for reliability and cost discipline.",
    bullets: ["AWS, Azure, GCP", "Kubernetes, IaC, GitOps", "24×7 monitoring & SRE"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    body: "Research-led design systems, user experience, and high-fidelity prototyping for product clarity.",
    bullets: ["User research & journeys", "Design systems & tokens", "Prototyping & validation"],
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    body: "Digital transformation, architecture consulting, and product strategy from senior practitioners.",
    bullets: ["Tech due diligence", "Architecture review", "Product strategy & roadmaps"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete partner for modern product engineering."
        description="From discovery to launch and ongoing growth — senior, opinionated teams that ship outcomes."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=70&auto=format&fit=crop"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-elevated"
          >
            Contact Us <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("govitrix:open-discovery"))}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            Book Discovery Call
          </button>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
          >
            See client work
          </Link>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col rounded-3xl border border-border bg-background p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start gap-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <s.icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.body}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 inline-flex w-fit items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-surface"
              >
                Contact Us <ArrowUpRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure where to start?"
        description="Book a free 30-minute discovery call and we'll help map the right approach for your goals. Prefer to share requirements first? Use our contact form."
      />
    </>
  );
}
