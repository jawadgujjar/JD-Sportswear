import { Suspense } from "react";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/landing/QuoteForm";
import ProductDetails from "@/components/product-details/ProductDetails";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageSkeleton from "@/components/ui/PageSkeleton";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getCategories,
  getCategory,
  getSubcategory,
  getProduct,
  getProducts,
  categoryUrl,
  subcategoryUrl,
} from "@/lib/catalog";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ category: p.categorySlug, subcategory: p.subcategorySlug, product: p.slug }));
}

export async function generateMetadata({ params }) {
  const { category, subcategory, product: productSlug } = await params;
  const product = await getProduct(category, subcategory, productSlug);
  if (!product) return {};
  return {
    title: `${product.name} | JD Sportswear`,
    description: product.description,
  };
}

// params are read inside Suspense so client navigations can show the skeleton instantly.
export default function ProductPage({ params }) {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }) {
  const { category: categorySlug, subcategory: subcategorySlug, product: productSlug } = await params;
  const [category, subcategory, product] = await Promise.all([
    getCategory(categorySlug),
    getSubcategory(categorySlug, subcategorySlug),
    getProduct(categorySlug, subcategorySlug, productSlug),
  ]);
  if (!category || !subcategory || !product) notFound();

  const [categories, categoryProducts] = await Promise.all([getCategories(), getProducts({ categorySlug })]);
  const related = categoryProducts.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <div className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: category.name, href: categoryUrl(category.slug) },
              { label: subcategory.name, href: subcategoryUrl(category.slug, subcategory.slug) },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      <ProductDetails product={product} category={category} subcategory={subcategory} />

      {related.length > 0 && (
        <section className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading eyebrow={category.name} title="You may also like" />
            <div className="mt-10">
              <ProductGrid products={related} />
            </div>
          </div>
        </section>
      )}

      <QuoteForm categories={categories} defaultCategory={category.slug} productName={product.name} />
    </>
  );
}
