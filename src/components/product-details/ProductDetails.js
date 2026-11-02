import Button from "@/components/ui/Button";
import JerseyArt from "@/components/ui/JerseyArt";

export default function ProductDetails({ product, category, subcategory }) {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-b from-zinc-100 to-zinc-200">
          <JerseyArt {...product} className="h-3/4 drop-shadow-2xl" />
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {category.name} &middot; {subcategory.name}
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase text-ink sm:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-zinc-600">{product.description}</p>

          <div className="mt-6 flex items-end gap-6 border-y border-zinc-200 py-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Starting from</p>
              <p className="font-display text-4xl font-bold text-ink">${product.price}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Minimum order</p>
              <p className="font-display text-2xl font-bold text-ink">{product.moq} pcs</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">Available sizes</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <li key={size} className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700">
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">Fabric</h2>
            <p className="mt-2 text-zinc-600">{product.fabric}</p>
          </div>

          <ul className="mt-6 space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-zinc-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] text-white">&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#quote">Get a Free Design</Button>
            <Button href="#quote" variant="dark">Request a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
