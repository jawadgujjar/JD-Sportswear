"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, navLinks } from "@/lib/siteConfig";
import { categoryUrl, subcategoryUrl } from "@/lib/catalog";
import NavSearch from "@/components/navbar/NavSearch";

function Icon({ path, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} stroke-current`} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const icons = {
  chevron: "M6 9l6 6 6-6",
  phone: "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  arrow: "M5 12h14M13 6l6 6-6 6",
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-display text-lg font-bold text-white">
        JD
      </span>
      <span className="font-display text-xl font-bold uppercase leading-none tracking-wide text-white">
        Sports<span className="text-brand">wear</span>
      </span>
    </Link>
  );
}

export default function Navbar({ menu, searchIndex }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const closeAll = () => {
    setMegaOpen(false);
    setDrawerOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-ink/95 shadow-2xl shadow-black/30" : "bg-ink"
      }`}
    >
      <nav className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6" onMouseLeave={() => setMegaOpen(false)}>
        <Logo />

        <ul className="hidden h-full items-center gap-1 font-display text-[15px] font-medium uppercase tracking-wider text-white/90 lg:flex">
          <li className="h-full" onMouseEnter={() => setMegaOpen(true)}>
            <button
              onClick={() => setMegaOpen(!megaOpen)}
              aria-expanded={megaOpen}
              className={`relative flex h-full items-center gap-1 whitespace-nowrap px-4 uppercase transition-colors hover:text-brand ${megaOpen ? "text-brand" : ""}`}
            >
              Categories
              <Icon path={icons.chevron} className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              <span className={`absolute inset-x-4 bottom-0 h-0.5 bg-brand transition-transform ${megaOpen ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          </li>
          {navLinks.map((link) => (
            <li key={link.href + link.label} className="h-full" onMouseEnter={() => setMegaOpen(false)}>
              <Link href={link.href} className="group relative flex h-full items-center gap-1.5 whitespace-nowrap px-4 transition-colors hover:text-brand">
                {link.label}
                {link.badge && (
                  <span className="rounded bg-brand px-1.5 py-0.5 font-sans text-[10px] font-bold leading-none tracking-normal text-white">
                    {link.badge}
                  </span>
                )}
                <span className="absolute inset-x-4 bottom-0 h-0.5 scale-x-0 bg-brand transition-transform group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <NavSearch index={searchIndex} className="hidden w-56 xl:block 2xl:w-72" />
          <Link
            href="/#quote"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark hover:shadow-brand/40 sm:inline-flex"
          >
            Get a Quote
            <Icon path={icons.arrow} className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setDrawerOpen(true)}
            className="rounded-full p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <Icon path={icons.menu} className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop mega menu */}
        <div
          className={`absolute inset-x-0 top-full hidden border-t border-white/10 bg-[#0f1420] shadow-2xl shadow-black/40 transition-all duration-200 lg:block ${
            megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-6 py-8">
            <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-6">
              {menu.map((category) => (
                <div key={category.slug}>
                  <Link
                    href={categoryUrl(category.slug)}
                    onClick={closeAll}
                    className="font-display text-base font-bold uppercase tracking-wider text-white hover:text-brand"
                  >
                    {category.name}
                  </Link>
                  <ul className="mt-3 space-y-2 text-sm text-white/60">
                    {category.subcategories.map((sub) => (
                      <li key={sub.slug}>
                        <Link href={subcategoryUrl(category.slug, sub.slug)} onClick={closeAll} className="transition-colors hover:text-brand">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-6 text-white">
              <div>
                <span className="rounded bg-black/25 px-2 py-1 text-[10px] font-bold uppercase tracking-wider">Wholesale</span>
                <p className="mt-4 font-display text-2xl font-bold uppercase leading-tight">
                  Buying in bulk?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Special pricing for gyms, teams and retailers. Private label available.
                </p>
              </div>
              <Link
                href="/#quote"
                onClick={closeAll}
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white hover:underline"
              >
                Request wholesale pricing
                <Icon path={icons.arrow} className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-white/10 bg-black/20">
            <div className="mx-auto max-w-7xl px-6 py-3">
              <Link href="/shop" onClick={closeAll} className="text-sm font-semibold text-white/80 hover:text-brand">
                View all products &rarr;
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${drawerOpen ? "visible" : "invisible"}`}>
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-ink text-white shadow-2xl transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile menu"
        >
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
            <Logo />
            <button onClick={() => setDrawerOpen(false)} className="rounded-full p-2.5 hover:bg-white/10" aria-label="Close menu">
              <Icon path={icons.close} className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <NavSearch index={searchIndex} onNavigate={() => setDrawerOpen(false)} className="mb-5" />
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">Categories</p>
            {menu.map((category) => (
              <details key={category.slug} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3 font-display font-semibold uppercase tracking-wider text-white">
                  {category.name}
                  <Icon path={icons.chevron} className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="space-y-1 pb-3 pl-4">
                  <li>
                    <Link href={categoryUrl(category.slug)} onClick={closeAll} className="block py-1.5 text-sm font-semibold text-brand">
                      All {category.name}
                    </Link>
                  </li>
                  {category.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link href={subcategoryUrl(category.slug, sub.slug)} onClick={closeAll} className="block py-1.5 text-sm text-white/60">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}

            <ul className="mt-4">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    onClick={closeAll}
                    className="flex items-center gap-2 px-2 py-3 font-display font-semibold uppercase tracking-wider text-white"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="rounded bg-brand px-1.5 py-0.5 font-sans text-[10px] font-bold text-white">{link.badge}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-white/10 p-4">
            <Link
              href="/#quote"
              onClick={closeAll}
              className="flex items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-display font-semibold uppercase tracking-wider text-white"
            >
              Get a Free Quote
              <Icon path={icons.arrow} className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Icon path={icons.phone} className="h-4 w-4 text-brand" />
              {siteConfig.phone}
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
