export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/govitrix-logo.png"
      alt="Govitrix"
      className={`${className} object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}
