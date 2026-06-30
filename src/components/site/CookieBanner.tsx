import { useEffect, useState } from "react";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && localStorage.getItem("govitrix-cookies");
    if (!seen) setOpen(true);
  }, []);

  if (!open) return null;

  const dismiss = (value: "accepted" | "rejected") => {
    localStorage.setItem("govitrix-cookies", value);
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="container-page">
        <div className="ml-auto max-w-xl rounded-2xl border border-border bg-background/95 p-5 shadow-elevated backdrop-blur">
          <p className="text-sm font-semibold text-ink">We value your privacy</p>
          <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
            We use cookies to enhance your browsing experience, analyze traffic, and improve our
            services. Read our{" "}
            <a href="/privacy" className="text-accent underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <div className="mt-4 flex items-center justify-end gap-2">
            <button
              onClick={() => dismiss("rejected")}
              className="rounded-lg px-3 py-2 text-xs font-medium text-ink-soft hover:bg-surface"
            >
              Reject
            </button>
            <button
              onClick={() => dismiss("accepted")}
              className="rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground hover:bg-secondary"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
