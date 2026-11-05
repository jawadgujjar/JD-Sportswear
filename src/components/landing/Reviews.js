"use client";

import { useEffect, useRef, useState } from "react";
import { reviews, reviewPlatforms, reviewsHeadline } from "@/lib/data";
import {
  BBBMark,
  GoogleLogo,
  GoogleWordmark,
  Stars,
  TrustpilotStars,
  TrustpilotWordmark,
} from "@/components/ui/ReviewIcons";

const avatarColors = ["#7B1FA2", "#00574B", "#1565C0", "#C62828", "#EF6C00", "#2E7D32", "#AD1457"];

// Same name always gets the same color, so server and client render match.
function colorFor(name) {
  const sum = [...name].reduce((total, ch) => total + ch.charCodeAt(0), 0);
  return avatarColors[sum % avatarColors.length];
}

function PlatformBadge({ platform }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3 rounded-2xl px-6 py-4 transition hover:bg-zinc-50"
    >
      <span className="flex h-10 items-center">
        {platform.id === "bbb" && <BBBMark />}
        {platform.id === "trustpilot" && <TrustpilotWordmark />}
        {platform.id === "google" && <GoogleWordmark />}
      </span>
      {platform.id === "trustpilot" ? (
        <TrustpilotStars rating={platform.rating} />
      ) : (
        <Stars rating={platform.rating} className="h-9 w-9" color={platform.id === "bbb" ? "#F5A623" : "#FBBC04"} />
      )}
      <span className="text-sm font-medium text-zinc-500">{platform.rating.toFixed(1)} / 5</span>
    </a>
  );
}

function SourceBadge({ source }) {
  if (source === "trustpilot") {
    return (
      <span className="flex items-center gap-1 rounded-full bg-[#00B67A]/10 px-2.5 py-1 text-xs font-semibold text-[#00875A]">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#00B67A]" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
        Trustpilot
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 rounded-full bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-[#4285F4]">
      <GoogleLogo className="h-3.5 w-3.5" />
      Google
    </span>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 140;

  return (
    <div className="h-full rounded-2xl bg-gradient-to-br from-[#4285F4]/40 via-[#EA4335]/25 to-[#FBBC04]/40 p-px shadow-sm transition-shadow hover:shadow-xl">
      <article className="flex h-full flex-col rounded-2xl bg-white p-6">
        <header className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {review.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={review.photo} alt="" className="h-11 w-11 rounded-full object-cover" />
            ) : (
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-medium text-white"
                style={{ backgroundColor: colorFor(review.name) }}
              >
                {review.name.charAt(0).toUpperCase()}
              </span>
            )}
            <div>
              <p className="font-medium text-zinc-900">{review.name}</p>
              <p className="text-xs text-zinc-400">{review.date}</p>
            </div>
          </div>
          <SourceBadge source={review.source} />
        </header>

        <div className="mt-4">
          <Stars rating={review.rating} />
        </div>
        <h3 className="mt-3 font-semibold text-zinc-900">{review.title}</h3>
        <p className={`mt-1.5 text-[15px] leading-relaxed text-zinc-600 ${expanded ? "" : "line-clamp-4"}`}>
          {review.text}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 self-start text-sm font-medium text-[#1a73e8] hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <svg viewBox="0 0 24 24" className="mt-auto ml-auto h-8 w-8 fill-zinc-100 pt-2" aria-hidden="true">
          <path d="M7 6C4.8 6 3 7.8 3 10v8h7v-8H6c0-1.1.9-2 2-2V6H7zm10 0c-2.2 0-4 1.8-4 4v8h7v-8h-4c0-1.1.9-2 2-2V6h-1z" />
        </svg>
      </article>
    </div>
  );
}

export default function Reviews() {
  const track = useRef(null);
  const [paused, setPaused] = useState(false);

  const scroll = (direction) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild?.getBoundingClientRect().width ?? 300;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    const atStart = el.scrollLeft <= 5;

    if (direction > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction < 0 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: direction * (card + 24), behavior: "smooth" });
  };

  // Autoplay, paused on hover/focus and for users who prefer reduced motion.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => scroll(1), 4500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="reviews" className="scroll-mt-28 overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">Customer Testimonials</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase text-ink sm:text-5xl">{reviewsHeadline}</h2>
        </div>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-4 sm:gap-10">
          {reviewPlatforms.map((platform) => (
            <PlatformBadge key={platform.id} platform={platform} />
          ))}
        </div>

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            ref={track}
            className="flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-white sm:block" />

          {[-1, 1].map((direction) => (
            <button
              key={direction}
              onClick={() => scroll(direction)}
              aria-label={direction < 0 ? "Previous reviews" : "Next reviews"}
              className={`absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-ink sm:flex ${
                direction < 0 ? "-left-2" : "-right-2"
              }`}
            >
              <svg viewBox="0 0 24 24" className={`h-5 w-5 stroke-current ${direction < 0 ? "rotate-180" : ""}`} fill="none" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
