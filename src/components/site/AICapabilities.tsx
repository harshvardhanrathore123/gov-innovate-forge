import {
  Sparkles,
  Bot,
  MessageSquareCode,
  Database,
  ScanText,
  Languages,
  Headphones,
  Eye,
  LineChart,
} from "lucide-react";

const caps = [
  { icon: Sparkles, name: "Generative AI", body: "Custom GPT-style assistants, content and code generation, multi-modal workflows." },
  { icon: Bot, name: "Agentic AI", body: "Autonomous agents that plan, use tools, and complete multi-step business tasks." },
  { icon: MessageSquareCode, name: "LLM Applications", body: "Production LLM apps with evaluations, guardrails, cost and latency controls." },
  { icon: Database, name: "RAG Systems", body: "Retrieval-augmented generation over your private knowledge, secured and grounded." },
  { icon: ScanText, name: "OCR Solutions", body: "Document extraction pipelines for invoices, forms, IDs, and clinical records." },
  { icon: Languages, name: "NLP Systems", body: "Classification, entity extraction, summarization, and semantic search at scale." },
  { icon: Headphones, name: "AI Assistants", body: "Voice and chat assistants for support, sales, operations, and internal tools." },
  { icon: Eye, name: "Computer Vision", body: "Detection, OCR, quality control, and visual analytics for physical operations." },
  { icon: LineChart, name: "Predictive Analytics", body: "Forecasting, anomaly detection, and decision intelligence on live data." },
];

const flow = [
  { step: "01", title: "Data & Sources", body: "Databases, docs, APIs, streams" },
  { step: "02", title: "Ingestion & Vector Store", body: "Chunking, embeddings, indexing" },
  { step: "03", title: "Orchestration Layer", body: "LLMs, tools, agents, guardrails" },
  { step: "04", title: "Application & UX", body: "Chat, copilots, dashboards, APIs" },
];

export function AICapabilities() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c) => (
          <div
            key={c.name}
            className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-success/10 text-accent">
              <c.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-surface p-6 md:p-10">
        <p className="eyebrow">Reference AI Architecture</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
          How we ship production-grade AI systems
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {flow.map((f, i) => (
            <div key={f.step} className="relative rounded-2xl border border-border bg-background p-5">
              <p className="font-display text-2xl font-bold text-accent">{f.step}</p>
              <p className="mt-1 font-semibold text-ink">{f.title}</p>
              <p className="mt-1 text-xs text-ink-soft">{f.body}</p>
              {i < flow.length - 1 && (
                <span aria-hidden className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-border-strong md:inline">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
