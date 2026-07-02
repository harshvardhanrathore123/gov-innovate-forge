import { Counter } from "./Counter";
import { Rocket, Users, Layers, Award, Clock } from "lucide-react";

const items = [
  { icon: Rocket, value: 100, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 50, suffix: "+", label: "Satisfied Clients" },
  { icon: Layers, value: 15, suffix: "+", label: "Technology Domains" },
  { icon: Award, value: 99, suffix: "%", label: "Client Satisfaction" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Availability" },
];

export function AchievementStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((s) => (
        <div
          key={s.label}
          className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 text-center transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
        >
          <span className="mx-auto inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <s.icon className="size-5" />
          </span>
          <p className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            <Counter to={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm font-medium text-ink-soft">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
