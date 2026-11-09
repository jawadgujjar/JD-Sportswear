import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubcategoryNav from "@/components/categories/SubcategoryNav";
import ProductGrid from "@/components/products/ProductGrid";
import PageSkeleton from "@/components/ui/PageSkeleton";
import PageHeader from "@/components/ui/PageHeader";
import { getCategories, getCategory, getSubcategories, getProducts, subcategoryUrl } from "@/lib/catalog";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const category = await getCategory((await params).category);
  if (!category) return {};
  return {
    title: `Custom ${category.name} Uniforms | JD Sportswear`,
    description: category.description,
  };
}

// params are read inside Suspense so client navigations can show the skeleton instantly.
export default function CategoryPage({ params }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

async function CategoryContent({ params }) {
  const { category: categorySlug } = await params;
  const category = await getCategory(categorySlug);
  if (!category) notFound();

  const [subcategories, products] = await Promise.all([
    getSubcategories(categorySlug),
    getProducts({ categorySlug }),
  ]);

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: category.name }]}
        eyebrow={category.tagline}
        title={`${category.name} Uniforms`}
        text={category.description}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold uppercase text-ink">Shop by type</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={subcategoryUrl(category.slug, sub.slug)}
                className="group flex items-center justify-between rounded-2xl border border-zinc-200 p-6 transition hover:border-brand hover:shadow-lg"
              >
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-ink">{sub.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{sub.description}</p>
                </div>
                <span className="text-2xl text-brand transition group-hover:translate-x-1">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SubcategoryNav category={category} subcategories={subcategories} />
          <p className="mt-6 text-sm text-zinc-500">{products.length} products</p>
          <div className="mt-4">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
