import { Suspense } from "react";
import { notFound } from "next/navigation";
import SubcategoryNav from "@/components/categories/SubcategoryNav";
import ProductGrid from "@/components/products/ProductGrid";
import PageSkeleton from "@/components/ui/PageSkeleton";
import PageHeader from "@/components/ui/PageHeader";
import { getCategory, getSubcategories, getSubcategory, getProducts, categoryUrl } from "@/lib/catalog";

export async function generateStaticParams() {
  const subcategories = await getSubcategories();
  return subcategories.map((s) => ({ category: s.categorySlug, subcategory: s.slug }));
}

export async function generateMetadata({ params }) {
  const { category, subcategory } = await params;
  const sub = await getSubcategory(category, subcategory);
  if (!sub) return {};
  return {
    title: `Custom ${sub.name} | JD Sportswear`,
    description: sub.description,
  };
}

// params are read inside Suspense so client navigations can show the skeleton instantly.
export default function SubcategoryPage({ params }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <SubcategoryContent params={params} />
    </Suspense>
  );
}

async function SubcategoryContent({ params }) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;
  const [category, subcategory] = await Promise.all([
    getCategory(categorySlug),
    getSubcategory(categorySlug, subcategorySlug),
  ]);
  if (!category || !subcategory) notFound();

  const [subcategories, products] = await Promise.all([
    getSubcategories(categorySlug),
    getProducts({ categorySlug, subcategorySlug }),
  ]);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: category.name, href: categoryUrl(category.slug) },
          { label: subcategory.name },
        ]}
        eyebrow={category.name}
        title={subcategory.name}
        text={subcategory.description}
      />

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SubcategoryNav category={category} subcategories={subcategories} activeSlug={subcategory.slug} />
          <p className="mt-6 text-sm text-zinc-500">{products.length} products</p>
          <div className="mt-4">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
