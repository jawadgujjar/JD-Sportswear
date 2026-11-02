"use client";

import { useRef } from "react";
import JerseyArt from "@/components/ui/JerseyArt";
import SectionHeading from "@/components/ui/SectionHeading";
import { spotlight } from "@/lib/data";

export default function Spotlight() {
  const track = useRef(null);

  const scroll = (direction) => {
    track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="showcase" className="scroll-mt-28 overflow-hidden bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Spotlight" title="Our custom work" className="md:mx-0 md:text-left" />
          <div className="flex gap-3">
            {[-1, 1].map((direction) => (
              <button
                key={direction}
                onClick={() => scroll(direction)}
                aria-label={direction < 0 ? "Previous" : "Next"}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white hover:bg-brand"
              >
                <svg viewBox="0 0 24 24" className={`h-5 w-5 stroke-current ${direction < 0 ? "rotate-180" : ""}`} fill="none" strokeWidth="2.5">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div ref={track} className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none]">
          {spotlight.map((item) => (
            <figure key={item.title} className="w-72 shrink-0 snap-start overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200">
              <div className="flex h-72 items-center justify-center" style={{ background: `${item.colors[0]}22` }}>
                <JerseyArt {...item} className="h-52" />
              </div>
              <figcaption className="p-5 font-display font-semibold uppercase text-ink">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
