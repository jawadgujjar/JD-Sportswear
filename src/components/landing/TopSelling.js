import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TopSellingTabs from "@/components/landing/TopSellingTabs";
import { getCategories, getProducts } from "@/lib/catalog";

export default async function TopSelling() {
  const categories = await getCategories();
  const tabs = await Promise.all(
    categories.map(async (category) => ({
      ...category,
      products: (await getProducts({ categorySlug: category.slug })).slice(0, 4),
    }))
  );

  return (
    <section id="top-selling" className="scroll-mt-28 bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Most popular" title="Top selling uniforms" />
        <TopSellingTabs tabs={tabs} />
        <div className="mt-12 text-center">
          <Button href="/shop" variant="dark">View All</Button>
        </div>
      </div>
    </section>
  );
}
