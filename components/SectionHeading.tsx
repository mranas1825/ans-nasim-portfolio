import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls} mb-12 md:mb-16`}>
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" aria-hidden />
        {kicker}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" aria-hidden />
      </p>
      <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white md:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
