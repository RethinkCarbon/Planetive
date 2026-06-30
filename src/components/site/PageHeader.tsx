export function PageHeader({
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-40 md:pt-48 pb-16 md:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-mint)" }}
      />
      <svg
        aria-hidden
        className="absolute -right-20 -top-10 h-[480px] w-[480px] text-canopy/15"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="container-x relative">
        <h1 className="font-ui font-semibold text-[clamp(2.4rem,5vw,4.5rem)] text-forest max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-n600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
