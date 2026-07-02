const partners = [
  "AWS", "Microsoft Azure", "Google Cloud", "OpenAI", "GitHub", "Docker",
  "Kubernetes", "Vercel", "Cloudflare", "MongoDB", "PostgreSQL", "Stripe",
];

const standards = [
  { name: "Agile & Scrum", body: "Two-week sprints with transparent demos." },
  { name: "CI/CD Pipelines", body: "Automated builds, tests, and deployments." },
  { name: "DevOps & SRE", body: "Observability, incident response, and reliability." },
  { name: "Security-first", body: "Threat modeling and secure code reviews." },
];

export function TechPartners() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p}
            className="flex h-16 items-center justify-center rounded-xl border border-border bg-background px-4 text-center text-sm font-semibold text-ink-soft transition-colors hover:border-border-strong hover:text-ink"
          >
            {p}
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {standards.map((s) => (
          <div key={s.name} className="rounded-2xl border border-border bg-surface p-5">
            <p className="font-display text-base font-semibold text-ink">{s.name}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
