const partners = [
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Microsoft Azure", slug: "microsoftazure" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "OpenAI", slug: "openai" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "GitHub", slug: "github" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Razorpay", slug: "razorpay" },
  { name: "Easebuzz", slug: null },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Stripe", slug: "stripe" },
  { name: "Flutter", slug: "flutter" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
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
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p.name}
            className="group relative flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background p-4 text-center transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
            title={p.name}
          >
            {p.slug ? (
              <img
                src={`https://cdn.simpleicons.org/${p.slug}`}
                alt={`${p.name} logo`}
                loading="lazy"
                className="h-8 w-8 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            ) : (
              <div className="flex h-8 items-center justify-center">
                <span className="font-display text-base font-bold text-ink-soft transition-colors group-hover:text-ink">
                  {p.name}
                </span>
              </div>
            )}
            <span className="text-[11px] font-semibold text-ink-muted transition-colors group-hover:text-ink">
              {p.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {standards.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="font-display text-base font-semibold text-ink">{s.name}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{s.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
