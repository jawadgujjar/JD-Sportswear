import CategoryCard from "@/components/categories/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCategories } from "@/lib/catalog";

export default async function SportCategories() {
  const categories = await getCategories();

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Shop by sport" title="Uniforms for every game" />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
