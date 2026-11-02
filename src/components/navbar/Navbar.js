"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig, navLinks } from "@/lib/siteConfig";
import { categoryUrl, subcategoryUrl } from "@/lib/catalog";

export default function Navbar({ menu }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-medium sm:px-6">
          <p>Free custom design on every order</p>
          <div className="flex gap-4">
            <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="hidden hover:underline sm:inline">{siteConfig.email}</a>
          </div>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="font-display text-2xl font-bold uppercase tracking-wide">
            JD<span className="text-brand">Sportswear</span>
          </Link>

          <ul className="hidden items-center gap-8 font-display text-sm uppercase tracking-wider lg:flex">
            <li className="group relative">
              <Link href="/shop" className="flex items-center gap-1 py-5 hover:text-brand">
                Shop
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M5 7l5 6 5-6z" /></svg>
              </Link>
              <div className="invisible absolute left-0 top-full w-[640px] rounded-b-xl bg-white p-6 text-ink opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-6">
                  {menu.map((category) => (
                    <div key={category.slug}>
                      <Link href={categoryUrl(category.slug)} className="font-bold hover:text-brand">
                        {category.name}
                      </Link>
                      <ul className="mt-2 space-y-1 font-sans text-sm normal-case tracking-normal text-zinc-600">
                        {category.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link href={subcategoryUrl(category.slug, sub.slug)} className="hover:text-brand">
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">{link.label}</Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#quote"
            className="hidden rounded-full bg-brand px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider hover:bg-brand-dark lg:inline-flex"
          >
            Get a Free Quote
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <ul className="max-h-[75vh] space-y-1 overflow-y-auto border-t border-white/10 px-4 pb-6 pt-3 font-display uppercase tracking-wider lg:hidden">
            {menu.map((category) => (
              <li key={category.slug}>
                <Link href={categoryUrl(category.slug)} onClick={() => setOpen(false)} className="block py-2 hover:text-brand">
                  {category.name}
                </Link>
              </li>
            ))}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-2 hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#quote"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand py-3 text-center font-semibold"
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
