import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
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
  { name: "Medicare HMS", industry: "Healthcare", tags: ["React", "Node.js", "PostgreSQL"], stat: "−42% triage time" },
  { name: "FinBud", industry: "FinTech", tags: ["React Native", "Node", "Plaid"], stat: "+22% savings rate" },
  { name: "ApexScore", industry: "Education", tags: ["Next.js", "Python", "OpenAI"], stat: "10x faster grading" },
  { name: "SellMate", industry: "SaaS", tags: ["Next.js", "Node", "OpenAI"], stat: "+38% win rate" },
  { name: "Anahata AI", industry: "AI", tags: ["Python", "LangChain", "OpenAI"], stat: "8h/wk reclaimed" },
  { name: "Cargolane", industry: "Logistics", tags: ["Mobile", "Flutter", "GCP"], stat: "6k+ daily routes" },
  { name: "Atlas Learn", industry: "Education", tags: ["GenAI", "Vue", "Azure"], stat: "+3.1x engagement" },
  { name: "Heliostack", industry: "SaaS", tags: ["IoT", "Python", "AWS"], stat: "98.4% uptime" },
  { name: "Bluefin Retail", industry: "eCommerce", tags: ["Shopify", "Node", "BI"], stat: "+27% AOV" },
];

const filters = ["All", "Healthcare", "FinTech", "SaaS", "Education", "Logistics", "eCommerce", "AI"];

function PortfolioPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.industry === active)),
    [active],
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Products and platforms we've engineered."
        description="A selection of recent work across SaaS, mobile, AI, and enterprise systems."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=70&auto=format&fit=crop"
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-background text-ink-soft hover:-translate-y-0.5 hover:border-border-strong hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-ink-soft">No projects in this category yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((it) => (
              <Link
                key={it.name}
                to="/case-studies"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-elevated"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent/15 to-success/10">
                  <div aria-hidden className="absolute inset-0 hairline-grid opacity-50 transition-opacity group-hover:opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <div className="rounded-xl border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-ink shadow-soft backdrop-blur">
                      {it.name}
                    </div>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground shadow-soft">
                    {it.stat}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {it.industry}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {it.name}
                  </h3>
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
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    View case study <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <CTASection title="See a project you'd like to learn more about?" />
    </>
  );
}
