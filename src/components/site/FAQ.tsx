import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does an engagement with Govitrix typically start?",
    a: "It starts with a free 30-minute discovery call. We understand your goals, constraints, and success metrics. If there's a fit, we share a written proposal within 24–48 business hours covering scope, team, timeline, and pricing.",
  },
  {
    q: "What engagement models do you support?",
    a: "Fixed-cost projects for well-defined scope, dedicated development teams for long-term product work, staff augmentation to extend your team, and full product development partnerships where we own strategy through growth.",
  },
  {
    q: "Do you sign NDAs before sharing information?",
    a: "Yes. We sign mutual NDAs before any commercial discussion. All employees are under strict confidentiality agreements, and access to client data is role-based and audited.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "Healthcare, FinTech, SaaS, Education, Retail, Logistics, Manufacturing, Insurance, and Legal & Medico-Legal. We bring domain patterns and regulatory awareness to each.",
  },
  {
    q: "How do you ensure security and compliance?",
    a: "Secure Development Lifecycle, code review, SAST/DAST, encryption in transit and at rest, role-based access, and audit logging. We build HIPAA-, GDPR-, and SOC 2-aligned architectures.",
  },
  {
    q: "How much does a typical project cost?",
    a: "It depends on scope, team size, and timeline. MVPs typically start around $25K, while full product platforms range from $150K to $500K+. Use our project cost calculator for a live estimate.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. All engagements include a support window. Beyond that, we offer 24/7 SRE and monitoring, ongoing feature work, and performance/security audits under retainer.",
  },
  {
    q: "Can you work with our existing team and tooling?",
    a: "Absolutely. We routinely embed into client Slack, Jira/Linear, GitHub/GitLab, and existing CI/CD. Our staff augmentation model is built for this.",
  },
];

export function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-ink hover:no-underline md:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-ink-soft md:text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
