import { useMemo, useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

const projectTypes = [
  { id: "web", label: "Web App", base: 25000 },
  { id: "mobile", label: "Mobile App", base: 30000 },
  { id: "ai", label: "AI / ML System", base: 40000 },
  { id: "cloud", label: "Cloud & DevOps", base: 20000 },
];

const timelines = [
  { id: "asap", label: "ASAP (< 1 mo)", mult: 1.4 },
  { id: "1-3", label: "1–3 months", mult: 1.1 },
  { id: "3-6", label: "3–6 months", mult: 1.0 },
  { id: "6+", label: "6+ months", mult: 0.95 },
];

const teamSizes = [
  { id: "small", label: "Small (2–3)", mult: 0.9 },
  { id: "medium", label: "Medium (4–6)", mult: 1.1 },
  { id: "large", label: "Large (7+)", mult: 1.35 },
];

const featureOptions = [
  "Authentication & RBAC",
  "Payments & Billing",
  "AI / LLM Integration",
  "Admin Dashboard",
  "Third-party Integrations",
  "Real-time / Chat",
  "Analytics & Reporting",
  "Multi-tenant SaaS",
];

export function CostCalculator({ onRequestProposal }: { onRequestProposal?: () => void }) {
  const [type, setType] = useState("web");
  const [timeline, setTimeline] = useState("3-6");
  const [team, setTeam] = useState("medium");
  const [features, setFeatures] = useState<string[]>(["Authentication & RBAC"]);

  const { low, high } = useMemo(() => {
    const t = projectTypes.find((p) => p.id === type)!;
    const tl = timelines.find((p) => p.id === timeline)!;
    const ts = teamSizes.find((p) => p.id === team)!;
    const featureCost = features.length * 6000;
    const mid = (t.base + featureCost) * tl.mult * ts.mult;
    return { low: Math.round(mid * 0.85), high: Math.round(mid * 1.35) };
  }, [type, timeline, team, features]);

  const toggleFeature = (f: string) =>
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const fmt = (n: number) => `$${(n / 1000).toFixed(0)}K`;

  return (
    <div className="grid gap-6 rounded-3xl border border-border bg-background p-6 shadow-soft md:grid-cols-5 md:p-10">
      <div className="md:col-span-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Calculator className="size-4" />
          </span>
          <p className="eyebrow">Project Estimator</p>
        </div>

        <div className="mt-6 space-y-6">
          <ChoiceRow label="Project type" options={projectTypes} value={type} onChange={setType} />
          <ChoiceRow label="Timeline" options={timelines} value={timeline} onChange={setTimeline} />
          <ChoiceRow label="Team size" options={teamSizes} value={team} onChange={setTeam} />

          <div>
            <p className="text-sm font-medium text-ink">Features</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {featureOptions.map((f) => {
                const active = features.includes(f);
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => toggleFeature(f)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "border-accent bg-accent/10 text-ink"
                        : "border-border bg-background text-ink-soft hover:border-border-strong hover:text-ink"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
            Estimated Range
          </p>
          <p className="mt-3 font-display text-3xl font-bold md:text-4xl">
            {fmt(low)} – {fmt(high)}
          </p>
          <p className="mt-2 text-sm text-primary-foreground/75">
            Indicative range for the selected scope. Final scope, discovery, and team composition
            determine the exact proposal.
          </p>
          <button
            type="button"
            onClick={onRequestProposal}
            className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-background px-4 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:shadow-elevated"
          >
            Get a detailed proposal <ArrowRight className="size-4" />
          </button>
        </div>
        <p className="mt-3 text-xs text-ink-muted">
          Estimates are based on typical Govitrix delivery benchmarks and do not constitute a binding
          quotation.
        </p>
      </div>
    </div>
  );
}

function ChoiceRow<T extends { id: string; label: string }>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-ink">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${
              value === o.id
                ? "border-accent bg-accent/10 text-ink"
                : "border-border bg-background text-ink-soft hover:border-border-strong hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
