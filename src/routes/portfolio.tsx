import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Govitrix Corporation" },
      {
        name: "description",
        content: "Selected products, platforms, and AI systems engineered by Govitrix.",
      },
      { property: "og:title", content: "Portfolio — Govitrix" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const items = [
  { name: "Lumenly Health", industry: "Healthcare", tags: ["AI", "HIPAA", "React"], stat: "−42% triage time" },
  { name: "Northvault Finance", industry: "FinTech", tags: ["SaaS", "Next.js", "SOC 2"], stat: "$420M AUM" },
  { name: "Cargolane", industry: "Logistics", tags: ["Mobile", "Flutter", "GCP"], stat: "6k+ daily routes" },
  { name: "Atlas Learn", industry: "Education", tags: ["GenAI", "Vue", "Azure"], stat: "+3.1x engagement" },
  { name: "Heliostack", industry: "Energy", tags: ["IoT", "Python", "AWS"], stat: "98.4% uptime" },
  { name: "Bluefin Retail", industry: "eCommerce", tags: ["Shopify", "Node", "BI"], stat: "+27% AOV" },
  { name: "Nimbus Rx", industry: "Pharma", tags: ["Compliance", ".NET"], stat: "12 markets" },
  { name: "Obsidian Realty", industry: "Real Estate", tags: ["Maps", "React"], stat: "2.4M listings" },
];

const filters = ["All", "Healthcare", "FinTech", "Logistics", "Education", "eCommerce"];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Products and platforms we've engineered."
        description="A selection of recent work across SaaS, mobile, AI, and enterprise systems."
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-ink-soft hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link
              key={it.name}
              to="/case-studies"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all hover:shadow-card"
            >
              <div className="relative h-44 bg-gradient-to-br from-accent/15 to-success/10">
                <div aria-hidden className="absolute inset-0 hairline-grid opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur">
                    {it.name}
                  </div>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                  {it.stat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {it.industry}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{it.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-accent">
                  View case study <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title="See a project you'd like to learn more about?" />
    </>
  );
}
