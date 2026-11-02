import Link from "next/link";
import JerseyArt from "@/components/ui/JerseyArt";
import { productUrl } from "@/lib/catalog";

export default function ProductCard({ product }) {
  return (
    <Link
      href={productUrl(product)}
      className="group overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-60 items-center justify-center bg-gradient-to-b from-zinc-100 to-zinc-200">
        <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
          Custom
        </span>
        <JerseyArt {...product} className="h-44 transition group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold uppercase text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-zinc-500">Min. order: {product.moq} pcs</p>
        <div className="mt-4 flex items-center justify-between">
          <p>
            <span className="text-xs text-zinc-500">From </span>
            <span className="font-display text-2xl font-bold text-ink">${product.price}</span>
          </p>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand group-hover:underline">
            View &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
