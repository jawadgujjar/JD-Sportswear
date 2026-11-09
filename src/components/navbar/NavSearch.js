"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavSearch({ index, onNavigate, className = "" }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const q = query.trim().toLowerCase();
  const results = q ? index.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 7) : [];
  const showResults = focused && q.length > 0;

  const go = (href) => {
    setQuery("");
    setFocused(false);
    onNavigate?.();
    router.push(href);
  };

  return (
    <div className={`relative ${className}`}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results[0]) go(results[0].href);
        }}
      >
        <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 stroke-white/50" fill="none" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => e.key === "Escape" && setQuery("")}
          placeholder="Search gloves, gis, uniforms..."
          aria-label="Search products"
          className="h-11 w-full rounded-full border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 transition focus:border-brand focus:bg-white/10 focus:outline-none"
        />
      </form>

      {showResults && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#121826] shadow-2xl">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                    <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-white/40">{item.type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-white/50">No results for &ldquo;{query}&rdquo;</p>
          )}
        </div>
      )}
    </div>
  );
}
