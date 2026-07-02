import { ShieldCheck, Lock, FileCheck, KeyRound, EyeOff, ScrollText, ServerCog, UserCog } from "lucide-react";

const badges = [
  { icon: ShieldCheck, name: "HIPAA Ready", body: "Healthcare-grade data handling and audit trails." },
  { icon: FileCheck, name: "GDPR Ready", body: "Consent, data subject rights, and lawful processing." },
  { icon: ServerCog, name: "SOC 2 Aligned Architecture", body: "Availability, integrity, and confidentiality by design." },
  { icon: ScrollText, name: "Secure Development Lifecycle", body: "Threat modeling, code review, and SAST/DAST scans." },
  { icon: EyeOff, name: "NDA Protection", body: "Mutual NDAs before any commercial conversation." },
  { icon: UserCog, name: "Role-Based Access Controls", body: "Least-privilege access across code, data, and infra." },
  { icon: Lock, name: "Encryption Standards", body: "AES-256 at rest, TLS 1.2+ in transit, KMS-managed keys." },
  { icon: KeyRound, name: "Audit Logging", body: "Immutable logs across critical systems and workflows." },
];

export function SecurityCompliance() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {badges.map((b) => (
        <div key={b.name} className="bg-background p-6">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/5 text-primary">
            <b.icon className="size-5" />
          </span>
          <h3 className="mt-4 text-sm font-semibold text-ink">{b.name}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{b.body}</p>
        </div>
      ))}
    </div>
  );
}
