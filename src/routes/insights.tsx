import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Govitrix Corporation" },
      {
        name: "description",
        content: "Field notes on product strategy, AI, engineering, and modern delivery.",
      },
      { property: "og:title", content: "Insights — Govitrix" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const posts = [
  {
    tag: "Cost",
    title: "How much does it cost to build a mobile app?",
    excerpt: "A pragmatic breakdown of cost drivers, ranges, and how to budget responsibly.",
    read: "8 min read",
    date: "Jun 12, 2026",
  },
  {
    tag: "AI",
    title: "AI adoption in modern businesses",
    excerpt: "Where AI delivers measurable ROI, and the patterns that consistently fail.",
    read: "11 min read",
    date: "May 28, 2026",
  },
  {
    tag: "Strategy",
    title: "MVP vs full product development",
    excerpt: "Choosing the right scope for your stage — and avoiding the most expensive mistakes.",
    read: "6 min read",
    date: "May 14, 2026",
  },
  {
    tag: "Cloud",
    title: "Cloud migration strategies",
    excerpt: "Rehost, replatform, refactor — choosing the right move for each workload.",
    read: "10 min read",
    date: "Apr 30, 2026",
  },
  {
    tag: "Design",
    title: "Product design best practices",
    excerpt: "Principles, patterns, and the systems that make design durable.",
    read: "7 min read",
    date: "Apr 8, 2026",
  },
  {
    tag: "Engineering",
    title: "Designing for performance from day one",
    excerpt: "Performance budgets, observability, and the architecture that supports them.",
    read: "9 min read",
    date: "Mar 22, 2026",
  },
];

function InsightsPage() {
  const [q, setQ] = useState("");
  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.tag.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas, lessons, and field notes."
        description="Practical thinking from our engineering, design, and product teams."
      >
        <div className="flex max-w-md items-center gap-2 rounded-xl border border-border bg-background p-1.5 shadow-soft">
          <Search className="ml-2 size-4 text-ink-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
            className="flex-1 bg-transparent px-2 py-2 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </div>
      </PageHero>

      <Section>
        {filtered.length === 0 ? (
          <p className="text-center text-ink-soft">No articles found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.title}
                to="/insights"
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:shadow-card"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-surface to-background">
                  <div aria-hidden className="absolute inset-0 hairline-grid opacity-50" />
                  <span className="absolute left-5 top-5 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                    <span>
                      {p.date} · {p.read}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-accent">
                      Read <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <CTASection
        title="Want these in your inbox?"
        description="Subscribe to the Govitrix newsletter — one well-crafted email a month."
      />
    </>
  );
}
