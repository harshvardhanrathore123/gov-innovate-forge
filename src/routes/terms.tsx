import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Govitrix Corporation" },
      { name: "description", content: "Terms of use for the Govitrix Corporation website and services." },
      { property: "og:title", content: "Terms — Govitrix" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that govern your use of the Govitrix website and services."
      />
      <Section>
        <div className="prose-doc">
          <p className="text-xs text-ink-muted">Last updated: June 2026</p>
          <Para title="Acceptance of terms">
            By accessing this website or engaging Govitrix services, you agree to these terms.
          </Para>
          <Para title="Use of the website">
            You agree to use the website lawfully and not to interfere with its operation. Content
            on the website is provided for informational purposes.
          </Para>
          <Para title="Intellectual property">
            All branding, copy, and visual assets on this website are owned by Govitrix Corporation
            unless otherwise noted.
          </Para>
          <Para title="Services">
            Engagement-specific terms (scope, deliverables, pricing) are defined in a separate
            Statement of Work or Master Services Agreement.
          </Para>
          <Para title="Disclaimers">
            The website is provided "as is" without warranties of any kind. Govitrix is not liable
            for indirect or consequential damages arising from use of this website.
          </Para>
          <Para title="Governing law">
            These terms are governed by the laws of the jurisdiction in which Govitrix is
            incorporated, without regard to conflict-of-law principles.
          </Para>
          <Para title="Changes">
            We may update these terms periodically. Continued use of the website constitutes
            acceptance of the updated terms.
          </Para>
        </div>
      </Section>

      <style>{`
        .prose-doc { max-width: 768px; margin: 0 auto; color: var(--color-ink-soft); }
        .prose-doc h2 { font-family: var(--font-display); color: var(--color-ink); font-size: 1.25rem; font-weight: 600; margin-top: 2rem; }
        .prose-doc p { margin-top: 0.75rem; line-height: 1.7; }
      `}</style>
    </>
  );
}

function Para({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
