import { ArrowUpRight, BarChart3, CircleDot, Sparkles, TrendingUp } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative">
      <div aria-hidden className="soft-blur-orb -left-10 -top-10 h-64 w-64 bg-accent/40" />
      <div aria-hidden className="soft-blur-orb -bottom-10 right-0 h-64 w-64 bg-success/30" />

      {/* Dashboard card */}
      <div className="relative rounded-2xl border border-border bg-background p-5 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
            </div>
            <p className="ml-3 text-xs font-medium text-ink-muted">govitrix.app / analytics</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-[10px] font-semibold text-success">
            <CircleDot className="size-2.5" /> Live
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "MRR", value: "$184.2K", trend: "+12.4%" },
            { label: "Users", value: "42,180", trend: "+8.1%" },
            { label: "Retention", value: "94.6%", trend: "+2.3%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                {s.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-ink">{s.value}</p>
              <p className="mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-medium text-success">
                <TrendingUp className="size-3" /> {s.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-ink">Revenue overview</p>
            <BarChart3 className="size-4 text-ink-muted" />
          </div>
          <svg viewBox="0 0 320 110" className="mt-3 h-28 w-full">
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,85 C30,70 50,78 80,60 C110,42 130,55 160,40 C190,25 215,38 240,28 C270,16 295,22 320,12 L320,110 L0,110 Z"
              fill="url(#hg)"
            />
            <path
              d="M0,85 C30,70 50,78 80,60 C110,42 130,55 160,40 C190,25 215,38 240,28 C270,16 295,22 320,12"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
            />
            {[0, 80, 160, 240, 320].map((x, i) => (
              <circle key={x} cx={x} cy={[85, 60, 40, 28, 12][i]} r="3" fill="#0F172A" />
            ))}
          </svg>
        </div>
      </div>

      {/* Floating mobile mock */}
      <div className="absolute -bottom-10 -right-4 hidden w-44 rotate-3 rounded-[28px] border border-border bg-background p-2 shadow-elevated md:block">
        <div className="rounded-[22px] bg-primary p-4 text-primary-foreground">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-success">
            AI Insight
          </p>
          <p className="mt-2 text-sm font-semibold leading-snug">
            Conversion up <span className="text-success">+18%</span> from new onboarding flow.
          </p>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary-foreground/10 p-2">
            <Sparkles className="size-3.5 text-success" />
            <p className="text-[10px] text-primary-foreground/80">Generated 2m ago</p>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -left-4 top-10 hidden rotate-[-4deg] rounded-2xl border border-border bg-background px-4 py-3 shadow-card md:flex md:items-center md:gap-2">
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <ArrowUpRight className="size-4" />
        </span>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
            Deploys
          </p>
          <p className="text-sm font-semibold text-ink">128 this week</p>
        </div>
      </div>
    </div>
  );
}
