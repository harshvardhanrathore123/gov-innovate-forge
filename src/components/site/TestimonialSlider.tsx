import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

type T = {
  quote: string;
  name: string;
  role: string;
  company: string;
  impact: string;
  projectType: string;
  initials: string;
  hasVideo?: boolean;
};

const testimonials: T[] = [
  {
    quote:
      "Govitrix delivered our analytics platform faster than two prior agencies combined. Their senior team set the bar for engineering discipline.",
    name: "Priya Mehta",
    role: "VP Engineering",
    company: "Northvault Finance",
    impact: "3.2x faster releases",
    projectType: "SaaS Platform · Cloud",
    initials: "PM",
    hasVideo: true,
  },
  {
    quote:
      "From discovery through launch, they operated as a true product partner. Retention jumped 28% within a single quarter of shipping.",
    name: "Daniel Okafor",
    role: "Founder",
    company: "Lumenly Health",
    impact: "+28% retention",
    projectType: "Healthcare · Mobile + AI",
    initials: "DO",
  },
  {
    quote:
      "Calm, senior, and consistently right. They architected a platform that scaled from launch to 10x load without a single incident.",
    name: "Sofia Nilsen",
    role: "CTO",
    company: "Cargolane",
    impact: "10x load, zero incidents",
    projectType: "Logistics · Platform Engineering",
    initials: "SN",
    hasVideo: true,
  },
  {
    quote:
      "The Govitrix team plugged into ours seamlessly. They elevated our engineering standards while shipping features every sprint.",
    name: "Rahul Iyer",
    role: "Head of Product",
    company: "Atlas Learn",
    impact: "+3.1x engagement",
    projectType: "EdTech · Web + AI",
    initials: "RI",
  },
];

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-soft md:p-12">
        <div className="grid gap-8 md:grid-cols-5 md:items-center">
          <div className="md:col-span-2">
            <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-accent/15 to-success/10">
              <div aria-hidden className="absolute inset-0 hairline-grid opacity-40" />
              <div className="relative flex size-24 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground">
                {t.initials}
              </div>
              {t.hasVideo && (
                <button
                  type="button"
                  aria-label="Play video testimonial"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-soft backdrop-blur transition-colors hover:bg-background"
                >
                  <PlayCircle className="size-4 text-accent" /> Watch story
                </button>
              )}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-surface p-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Impact</p>
                <p className="mt-1 text-sm font-semibold text-ink">{t.impact}</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">Project</p>
                <p className="mt-1 text-sm font-semibold text-ink">{t.projectType}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <Quote className="size-8 text-accent/40" />
            <div className="mt-3 flex gap-0.5 text-success">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink md:text-xl">
              "{t.quote}"
            </blockquote>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-ink-soft">
                {t.role} · {t.company}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-1.5 bg-border-strong"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft hover:text-ink"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft hover:text-ink"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
