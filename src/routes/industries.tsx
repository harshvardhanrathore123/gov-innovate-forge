import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Banknote,
  Cpu,
  ShoppingBag,
  Truck,
  GraduationCap,
  Building2,
  Plane,
  BookOpen,
  Trophy,
  ArrowUpRight,
} from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Govitrix Corporation" },
      {
        name: "description",
        content:
          "Deep engineering and product expertise across healthcare, FinTech, SaaS, EdTech, sports analytics, logistics, and more.",
      },
      { property: "og:title", content: "Industries — Govitrix" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const list = [
  {
    icon: Heart,
    name: "Healthcare",
    body: "HIPAA-aware platforms, clinical workflows, and patient experiences.",
    uses: ["Hospital management systems", "Telemedicine", "Clinical data & EMR"],
  },
  {
    icon: Banknote,
    name: "FinTech",
    body: "Wealth, payments, KYC/AML, and compliance-grade reporting.",
    uses: ["Digital wealth & investing", "Payment platforms", "KYC & fraud detection"],
  },
  {
    icon: Cpu,
    name: "SaaS",
    body: "Multi-tenant SaaS, billing, and analytics for B2B products.",
    uses: ["Multi-tenant architecture", "Usage-based billing", "Admin & analytics"],
  },
  {
    icon: BookOpen,
    name: "EdTech",
    body: "Adaptive learning, assessments, and AI tutoring for schools and enterprise learning teams.",
    uses: ["Adaptive assessments", "AI tutors & content generation", "Institution analytics"],
  },
  {
    icon: Trophy,
    name: "Sports Analytics",
    body: "Performance analytics, video intelligence, and fan engagement platforms for teams and leagues.",
    uses: ["Player performance dashboards", "Video & tracking data pipelines", "Fan engagement apps"],
  },
  {
    icon: ShoppingBag,
    name: "eCommerce",
    body: "Headless commerce, storefronts, and conversion engineering.",
    uses: ["Headless storefronts", "Merchandising & search", "Loyalty & CRO"],
  },
  {
    icon: Truck,
    name: "Logistics",
    body: "Visibility, dispatch, and IoT-enabled fleet operations.",
    uses: ["Shipment visibility", "Driver mobile apps", "Route optimization"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    body: "LMS, adaptive learning, and AI tutoring experiences.",
    uses: ["Learning management", "Cohort analytics", "Certifications"],
  },
  {
    icon: Building2,
    name: "Real Estate",
    body: "Marketplaces, agent tools, and property data systems.",
    uses: ["Listings & marketplaces", "Agent CRM", "Property analytics"],
  },
  {
    icon: Plane,
    name: "Travel",
    body: "Booking engines, loyalty, and ops platforms at scale.",
    uses: ["Booking engines", "Loyalty programs", "Ops & disruption tooling"],
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth where it matters."
        description="We bring both engineering rigor and industry context to every engagement — across regulated, fast-moving, and data-heavy markets."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <Link
              key={i.name}
              to="/contact"
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                <i.icon className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{i.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{i.body}</p>
              <ul className="mt-4 space-y-1.5">
                {i.uses.map((u) => (
                  <li key={u} className="text-xs text-ink-muted">
                    · {u}
                  </li>
                ))}
              </ul>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                Talk to an expert <ArrowUpRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
