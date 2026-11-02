import CategoryCard from "@/components/categories/CategoryCard";
import PageHeader from "@/components/ui/PageHeader";
import { getCategories } from "@/lib/catalog";

export const metadata = {
  title: "Shop All Sports | JD Sportswear",
  description: "Browse custom team uniforms by sport.",
};

export default async function ShopPage() {
  const categories = await getCategories();

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
        eyebrow="Shop by sport"
        title="All Sports"
        text="Pick your sport to see every uniform style we make."
      />
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}
