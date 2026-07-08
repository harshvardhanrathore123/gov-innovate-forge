import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Search, Clock, Calendar } from "lucide-react";
import { PageHero, Section, CTASection } from "../components/site/Section";
import { Modal } from "../components/site/CTADialogs";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Govitrix Corporation" },
      {
        name: "description",
        content: "Field notes on AI, healthcare technology, product strategy, SaaS, and modern software engineering.",
      },
      { property: "og:title", content: "Insights — Govitrix" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

type Post = {
  tag: string;
  title: string;
  excerpt: string;
  body: string;
  read: string;
  date: string;
  author: string;
  image: string;
};

const posts: Post[] = [
  {
    tag: "AI",
    title: "AI adoption in modern businesses",
    excerpt:
      "Where generative AI delivers measurable ROI in the enterprise — and the deployment patterns that consistently fail. A practical framework for CTOs prioritizing their first three AI investments.",
    body: "Most enterprise AI programs stall not because the models aren't capable, but because organizations underestimate the operational scaffolding required around them — evaluation, governance, human-in-the-loop workflows, and data readiness. In this piece we break down the highest-ROI patterns we've seen shipped to production across financial services, healthcare, and B2B SaaS: retrieval-augmented copilots grounded in proprietary knowledge, agentic workflows with strict guardrails, and applied ML for pricing, forecasting, and personalization. We also cover the anti-patterns — chatbot pilots without success metrics, ungoverned prompt sprawl, and evaluation debt — that quietly kill AI initiatives before they generate value.",
    read: "11 min read",
    date: "Jun 12, 2026",
    author: "Ujjwal Vaishnav",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=70&auto=format&fit=crop",
  },
  {
    tag: "Healthcare",
    title: "Building HIPAA-aligned hospital platforms in 2026",
    excerpt:
      "Modern hospital management systems must unify clinical, administrative, and financial workflows without compromising on security, auditability, or clinician experience. Here is our engineering playbook.",
    body: "Healthcare software carries a unique responsibility: it must simultaneously serve clinicians under time pressure, satisfy regulators, protect patient data, and integrate with a long tail of legacy systems. We share the architectural patterns we've used across HMS deployments — event-driven backbones, HL7/FHIR interop, role-based clinical workflows, immutable audit trails, and observability tuned for regulated workloads. We also cover the human factors: designing clinician UX that respects cognitive load, and change management strategies that keep adoption above 90% in the first quarter of go-live.",
    read: "9 min read",
    date: "May 28, 2026",
    author: "Harshvardhan Singh Rathore",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=70&auto=format&fit=crop",
  },
  {
    tag: "Product Management",
    title: "MVP vs full product development",
    excerpt:
      "Choosing the right scope for your stage — and avoiding the most expensive mistakes. A framework for founders and product leaders deciding what to build first, and what to defer.",
    body: "The MVP debate is misunderstood. The question is not 'how little can we ship?' but 'what is the smallest coherent product that lets us learn the riskiest thing?' We walk through a repeatable prioritization framework — mapping riskiest assumptions to minimum experiments, sequencing scope to unlock the next round of learning, and knowing when to graduate from MVP thinking to platform thinking. Includes case examples from FinTech and SaaS engagements where the wrong scope call cost teams 6+ months.",
    read: "6 min read",
    date: "May 14, 2026",
    author: "Product Team",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=70&auto=format&fit=crop",
  },
  {
    tag: "SaaS",
    title: "Designing multi-tenant SaaS that actually scales",
    excerpt:
      "Shared database, schema-per-tenant, or fully isolated? A practical decision tree for founders choosing a tenancy model — and how to migrate between them without rewriting your product.",
    body: "Tenancy is one of the highest-leverage architectural decisions in a SaaS product. Choose wrong and every enterprise deal becomes a re-platforming exercise. We share the decision framework we use with B2B SaaS clients: how to weigh isolation vs efficiency, how to design a data model that can migrate between tenancy models later, and the operational primitives — per-tenant observability, backup, and noisy-neighbor protection — that separate mature SaaS from prototypes at scale.",
    read: "8 min read",
    date: "Apr 30, 2026",
    author: "Engineering Team",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=70&auto=format&fit=crop",
  },
  {
    tag: "Software Engineering",
    title: "Designing for performance from day one",
    excerpt:
      "Performance is a feature, not an optimization. We share our approach to performance budgets, observability, and the architectural choices that let products stay fast under real-world growth.",
    body: "Slow software erodes trust in ways that are difficult to recover from. In this piece we share how we bake performance into the engineering process from day one — budgets defined alongside product requirements, observability wired in before feature work begins, and architectural patterns (edge caching, streaming responses, server components, background job orchestration) that let products stay responsive as traffic grows. We also share concrete numbers from platforms we've shipped, and where teams typically leave 10× improvements on the table.",
    read: "9 min read",
    date: "Apr 8, 2026",
    author: "Engineering Team",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=70&auto=format&fit=crop",
  },
  {
    tag: "Digital Transformation",
    title: "The CTO's guide to modernizing legacy systems",
    excerpt:
      "Rehost, replatform, or refactor? A pragmatic decision framework for enterprise CTOs planning legacy modernization — with cost, risk, and time-to-value trade-offs made explicit.",
    body: "Legacy modernization is rarely about the technology alone — it is a business transformation with a technology dimension. We walk through the framework we use with enterprise clients: assessing each workload against a rehost/replatform/refactor/rebuild lens, sequencing modernization to reduce risk, and building a business case that finance leaders can defend. Includes an appendix on avoiding the two most common failure modes: multi-year rewrites with no interim value, and 'lift-and-shift' migrations that inherit every legacy pathology.",
    read: "10 min read",
    date: "Mar 22, 2026",
    author: "Consulting Team",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=70&auto=format&fit=crop",
  },
];

function InsightsPage() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Post | null>(null);
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
        description="Practical thinking from our engineering, design, and product teams — on AI, healthcare, SaaS, and digital transformation."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1920&q=70&auto=format&fit=crop"
      >
        <div className="flex max-w-md items-center gap-2 rounded-xl border border-border bg-background p-1.5 shadow-soft">
          <Search className="ml-2 size-4 text-ink-muted" strokeWidth={1.75} />
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
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(p)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background text-left transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent backdrop-blur">
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3.5" /> {p.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3.5" /> {p.read}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-ink group-hover:text-accent">
                      Read <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </Section>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ""}
        description={active ? `${active.tag} · ${active.read} · ${active.date}` : undefined}
        size="xl"
      >
        {active && (
          <div className="grid gap-6">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
              <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{active.author}</span>
              <span>·</span>
              <span>{active.date}</span>
              <span>·</span>
              <span>{active.read}</span>
            </div>
            <p className="text-lg leading-relaxed text-ink">{active.excerpt}</p>
            <p className="text-base leading-relaxed text-ink-soft">{active.body}</p>
            <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-ink-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Continue the conversation
              </p>
              <p className="mt-2">
                If this piece resonates with a challenge your team is working through, we'd love to
                discuss it. Book a discovery call or share your context via our contact form.
              </p>
            </div>
          </div>
        )}
      </Modal>

      <CTASection
        title="Want ideas like these in your inbox?"
        description="Subscribe to the Govitrix newsletter — one well-crafted email a month. Or book a discovery call to discuss your specific challenges."
      />
    </>
  );
}
