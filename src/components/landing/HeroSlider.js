"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { heroSlides } from "@/lib/data";

const SLIDE_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = (i) => setActive((i + count) % count);

  const slide = heroSlides[active];

  return (
    <section
      className="relative isolate h-[calc(100svh-112px)] min-h-[560px] max-h-[860px] overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== active}
        >
          <Image
            src={s.image}
            alt=""
            fill
            sizes="100vw"
            preload={i === 0}
            className={`object-cover ${i === active ? "animate-ken-burns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6">
        <div key={active} className="max-w-2xl" aria-live="polite">
          <p className="flex animate-fade-up items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            <span className="h-px w-10 bg-brand" />
            {slide.eyebrow}
          </p>
          <h1 className="mt-5 animate-fade-up font-display text-5xl font-bold uppercase leading-[0.95] [animation-delay:100ms] sm:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg text-white/75 [animation-delay:200ms]">{slide.text}</p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-4 [animation-delay:300ms]">
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider shadow-xl shadow-brand/30 transition hover:bg-brand-dark"
            >
              {slide.cta.label}
              <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href={slide.secondary.href}
              className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-ink"
            >
              {slide.secondary.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-4 sm:px-6">
          <div className="grid flex-1 grid-cols-4 gap-3 sm:max-w-2xl sm:gap-6">
            {heroSlides.map((s, i) => (
              <button key={s.image} onClick={() => go(i)} className="group text-left" aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`} aria-current={i === active}>
                <span className="block h-0.5 overflow-hidden bg-white/25">
                  {i === active && (
                    // The progress animation drives autoplay: when it ends, the next slide shows.
                    // Hover pauses it; reduced-motion users get no animation and no autoplay.
                    <span
                      key={active}
                      onAnimationEnd={() => go(active + 1)}
                      className="block h-full w-0 bg-brand animate-progress motion-reduce:animate-none"
                      style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  )}
                  {i < active && <span className="block h-full w-full bg-white/60" />}
                </span>
                <span className={`mt-3 hidden font-display text-xs font-semibold uppercase tracking-wider transition-colors sm:block ${i === active ? "text-white" : "text-white/45 group-hover:text-white/80"}`}>
                  0{i + 1} &nbsp;{s.eyebrow}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden gap-3 md:flex">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => go(active + dir)}
                aria-label={dir < 0 ? "Previous slide" : "Next slide"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 backdrop-blur-sm transition hover:border-brand hover:bg-brand"
              >
                <svg viewBox="0 0 24 24" className={`h-5 w-5 stroke-current ${dir < 0 ? "rotate-180" : ""}`} fill="none" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
