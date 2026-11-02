import ProductCard from "@/components/products/ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="py-16 text-center text-zinc-500">No products found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
