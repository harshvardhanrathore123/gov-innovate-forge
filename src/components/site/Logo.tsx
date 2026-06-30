export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="currentColor" className="text-primary" />
      <path
        d="M20 40 L32 18 L44 40 Z"
        fill="none"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="44" r="3" fill="#14B8A6" />
    </svg>
  );
}
