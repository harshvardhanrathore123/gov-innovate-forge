import { Compass, Target, PenTool, Code2, TestTube2, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  { n: "01", icon: Compass, title: "Discovery", body: "Stakeholder alignment, goals, and success metrics." },
  { n: "02", icon: Target, title: "Strategy", body: "Scope, roadmap, architecture, and delivery plan." },
  { n: "03", icon: PenTool, title: "Design", body: "Research-led UX, IA, and design systems." },
  { n: "04", icon: Code2, title: "Development", body: "Two-week sprints with senior engineering pods." },
  { n: "05", icon: TestTube2, title: "Testing", body: "Automated QA, performance, and security audits." },
  { n: "06", icon: Rocket, title: "Deployment", body: "CI/CD, secure rollouts, and observability." },
  { n: "07", icon: LifeBuoy, title: "Support", body: "SRE, incident response, and continuous evolution." },
];

export function RoadmapProcess() {
  return (
    <div className="relative">
      {/* Desktop snake roadmap */}
      <div className="hidden lg:block">
        <svg
          aria-hidden
          viewBox="0 0 1200 380"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-40"
        >
          <path
            d="M 80 90 C 300 90, 300 90, 500 90 S 900 90, 1120 90 C 1180 90, 1180 200, 1120 200 S 900 200, 500 200 C 300 200, 300 200, 80 200 C 20 200, 20 310, 80 310 S 900 310, 1120 310"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="text-primary-foreground"
          />
        </svg>
        <div className="relative grid grid-cols-4 gap-6">
          {steps.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </div>

      {/* Mobile / tablet vertical stack */}
      <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
        {steps.map((s) => (
          <StepCard key={s.n} {...s} />
        ))}
      </div>
    </div>
  );
}

function StepCard({
  n,
  icon: Icon,
  title,
  body,
}: {
  n: string;
  icon: typeof Compass;
  title: string;
  body: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-success/40 hover:bg-primary-foreground/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-success/15 text-success">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <span className="font-display text-2xl font-bold text-success/70">{n}</span>
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-primary-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{body}</p>
    </div>
  );
}
