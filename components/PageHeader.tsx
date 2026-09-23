export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative border-b border-white/5 bg-ink-900 py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-contour-lines bg-cover bg-center opacity-50"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <p className="label-strata mb-5">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-light">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
