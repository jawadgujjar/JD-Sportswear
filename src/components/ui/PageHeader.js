import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function PageHeader({ breadcrumbs, eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(255,90,31,0.3),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow && (
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-4xl font-bold uppercase sm:text-6xl">{title}</h1>
        {text && <p className="mt-4 max-w-2xl text-lg text-zinc-300">{text}</p>}
      </div>
    </section>
  );
}
