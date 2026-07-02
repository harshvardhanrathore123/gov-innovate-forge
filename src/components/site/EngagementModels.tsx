import { Check, Package, Users, UserPlus, Rocket } from "lucide-react";

const models = [
  {
    icon: Package,
    name: "Fixed Cost Projects",
    tagline: "Best for defined scope",
    body: "Clear specifications, predictable budget, and milestone-based delivery.",
    includes: ["Detailed scope & SOW", "Fixed timeline & cost", "Milestone payments", "Post-launch warranty"],
  },
  {
    icon: Users,
    name: "Dedicated Development Team",
    tagline: "Long-term product development",
    body: "A senior, cross-functional pod fully dedicated to your product roadmap.",
    includes: ["Handpicked senior team", "Direct communication", "Agile sprints & demos", "Scale up or down"],
  },
  {
    icon: UserPlus,
    name: "Staff Augmentation",
    tagline: "Extend internal teams",
    body: "Plug vetted engineers, designers, and PMs directly into your existing team.",
    includes: ["Pre-vetted specialists", "Rapid onboarding", "Your process & tools", "Flexible engagement"],
  },
  {
    icon: Rocket,
    name: "Product Development Partnership",
    tagline: "End-to-end product ownership",
    body: "We own strategy, design, engineering, and growth — you focus on the business.",
    includes: ["Product-market co-ownership", "Design + engineering + PM", "Roadmap & discovery", "Growth partnership"],
  },
];

export function EngagementModels() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {models.map((m) => (
        <div
          key={m.name}
          className="group flex flex-col rounded-3xl border border-border bg-background p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <m.icon className="size-5" />
            </span>
            <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink-soft">
              {m.tagline}
            </span>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-ink">{m.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.body}</p>
          <ul className="mt-5 space-y-2">
            {m.includes.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                <Check className="mt-0.5 size-4 shrink-0 text-success" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
