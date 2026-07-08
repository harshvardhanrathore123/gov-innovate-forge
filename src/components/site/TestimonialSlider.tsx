import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

type T = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
};

const testimonials: T[] = [
  {
    quote:
      "Govitrix delivered our analytics platform faster than two prior agencies combined. Their senior team set the bar for engineering discipline.",
    name: "Priya Mehta",
    role: "VP Engineering",
    company: "Northvault Finance",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "From discovery through launch, they operated as a true product partner. Retention jumped meaningfully within a single quarter of shipping.",
    name: "Daniel Okafor",
    role: "Founder & CEO",
    company: "Lumenly Health",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Calm, senior, and consistently right. They architected a platform that scaled from launch to 10x load without a single incident.",
    name: "Sofia Nilsen",
    role: "Chief Technology Officer",
    company: "Cargolane",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "The Govitrix team plugged into ours seamlessly. They elevated our engineering standards while shipping features every sprint.",
    name: "Rahul Iyer",
    role: "Head of Product",
    company: "Atlas Learn",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-soft md:p-12">
        <Quote className="absolute right-8 top-8 size-16 text-accent/10" strokeWidth={1.5} />
        <div className="relative">
          <div className="flex gap-0.5 text-success">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="size-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 text-xl leading-relaxed text-ink md:text-2xl md:leading-[1.5]">
            "{t.quote}"
          </blockquote>
          <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
            <img
              src={t.photo}
              alt={t.name}
              loading="lazy"
              className="size-14 rounded-full object-cover ring-2 ring-border"
            />
            <div>
              <p className="font-display text-base font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-ink-soft">
                {t.role} · <span className="font-medium text-ink">{t.company}</span>
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
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
          >
            <ChevronLeft className="size-4" strokeWidth={1.75} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-background text-ink-soft transition-all hover:-translate-y-0.5 hover:text-ink"
          >
            <ChevronRight className="size-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
}
