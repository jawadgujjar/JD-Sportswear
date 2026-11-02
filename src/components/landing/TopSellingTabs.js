"use client";

import { useState } from "react";
import ProductGrid from "@/components/products/ProductGrid";

export default function TopSellingTabs({ tabs }) {
  const [active, setActive] = useState(tabs[0]?.slug);
  const current = tabs.find((tab) => tab.slug === active);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            role="tab"
            aria-selected={active === tab.slug}
            onClick={() => setActive(tab.slug)}
            className={`rounded-full px-5 py-2 font-display text-sm font-semibold uppercase tracking-wider transition ${
              active === tab.slug ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-zinc-200 hover:ring-ink"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <ProductGrid products={current?.products ?? []} />
      </div>
    </>
  );
}
