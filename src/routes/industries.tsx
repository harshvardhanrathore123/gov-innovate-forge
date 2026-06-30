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
          "Deep engineering and product expertise across healthcare, FinTech, SaaS, logistics, education, and more.",
      },
      { property: "og:title", content: "Industries — Govitrix" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const list = [
  { icon: Heart, name: "Healthcare", body: "HIPAA-aware platforms, clinical workflows, and patient experiences." },
  { icon: Banknote, name: "FinTech", body: "Wealth, payments, KYC/AML, and compliance-grade reporting." },
  { icon: Cpu, name: "SaaS", body: "Multi-tenant SaaS, billing, and analytics for B2B products." },
  { icon: ShoppingBag, name: "eCommerce", body: "Headless commerce, storefronts, and conversion engineering." },
  { icon: Truck, name: "Logistics", body: "Visibility, dispatch, and IoT-enabled fleet operations." },
  { icon: GraduationCap, name: "Education", body: "LMS, adaptive learning, and AI tutoring experiences." },
  { icon: Building2, name: "Real Estate", body: "Marketplaces, agent tools, and property data systems." },
  { icon: Plane, name: "Travel", body: "Booking engines, loyalty, and ops platforms at scale." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain depth where it matters."
        description="We bring both engineering rigor and industry context to every engagement."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((i) => (
            <Link
              key={i.name}
              to="/contact"
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <i.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{i.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{i.body}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent">
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
