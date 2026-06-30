import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Govitrix Corporation" },
      { name: "description", content: "How Govitrix collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — Govitrix" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is maintained by Govitrix Corporation to answer common privacy questions about our website and services."
      />
      <Section>
        <div className="prose-doc">
          <p className="text-xs text-ink-muted">Last updated: June 2026</p>
          <Para title="Overview">
            Govitrix Corporation ("Govitrix", "we", "us") respects your privacy. This policy
            describes the personal information we collect through this website and our services,
            how we use it, and the choices you have.
          </Para>
          <Para title="Information we collect">
            We collect information you provide via forms (such as your name, email, company,
            country, and project details), and basic technical information automatically (such as
            IP address, browser, and pages visited) for analytics and security purposes.
          </Para>
          <Para title="How we use information">
            We use your information to respond to inquiries, deliver services you request, improve
            our website, and send communications you have opted in to. We do not sell personal
            information.
          </Para>
          <Para title="Cookies">
            We use a small number of cookies and similar technologies for essential site
            functionality and aggregated analytics. You can manage preferences via the cookie
            banner at any time.
          </Para>
          <Para title="Data sharing">
            We share information with trusted service providers strictly for the purpose of
            operating our website and services, under appropriate confidentiality and data
            protection terms.
          </Para>
          <Para title="Data retention">
            We retain personal information only as long as necessary for the purposes described
            here, or as required by law.
          </Para>
          <Para title="Your rights">
            Depending on your jurisdiction, you may have rights to access, correct, or delete your
            personal information. Contact us at privacy@govitrix.com to make a request.
          </Para>
          <Para title="Contact">
            For privacy questions, write to privacy@govitrix.com.
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
