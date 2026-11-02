export default function SectionHeading({ eyebrow, title, text, light = false, className = "" }) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl font-bold uppercase leading-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg ${light ? "text-zinc-300" : "text-zinc-600"}`}>{text}</p>}
    </div>
  );
}
