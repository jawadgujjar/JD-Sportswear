import Link from "next/link";
import JerseyArt from "@/components/ui/JerseyArt";
import { categoryUrl } from "@/lib/catalog";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={categoryUrl(category.slug)}
      className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand"
    >
      <JerseyArt {...category} className="h-36 transition group-hover:scale-105" />
      <p className="mt-4 text-xs uppercase tracking-wider text-zinc-500">{category.tagline}</p>
      <h3 className="mt-1 font-display text-xl font-bold uppercase text-ink">{category.name}</h3>
      <span className="mt-3 font-display text-xs font-semibold uppercase tracking-wider text-brand">
        Shop {category.name} &rarr;
      </span>
    </Link>
  );
}
