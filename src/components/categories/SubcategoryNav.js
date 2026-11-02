import Link from "next/link";
import { categoryUrl, subcategoryUrl } from "@/lib/catalog";

const pill = "rounded-full px-5 py-2 font-display text-sm font-semibold uppercase tracking-wider transition";
const activePill = `${pill} bg-ink text-white`;
const idlePill = `${pill} bg-white text-ink ring-1 ring-zinc-200 hover:ring-ink`;

export default function SubcategoryNav({ category, subcategories, activeSlug }) {
  return (
    <nav aria-label={`${category.name} subcategories`} className="flex flex-wrap gap-2">
      <Link href={categoryUrl(category.slug)} className={activeSlug ? idlePill : activePill}>
        All {category.name}
      </Link>
      {subcategories.map((sub) => (
        <Link
          key={sub.slug}
          href={subcategoryUrl(category.slug, sub.slug)}
          className={sub.slug === activeSlug ? activePill : idlePill}
          aria-current={sub.slug === activeSlug ? "page" : undefined}
        >
          {sub.name}
        </Link>
      ))}
    </nav>
  );
}
