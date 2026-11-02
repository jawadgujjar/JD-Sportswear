import Link from "next/link";
import { siteConfig, navLinks, socialLinks } from "@/lib/siteConfig";
import { getCategories, categoryUrl } from "@/lib/catalog";

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer className="bg-ink text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-display text-2xl font-bold uppercase tracking-wide text-white">
            JD<span className="text-brand">Sportswear</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Custom sublimated uniforms for teams, schools and leagues across the USA.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Sports</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={categoryUrl(category.slug)} className="hover:text-brand">{category.name} Uniforms</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand">{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#quote" className="hover:text-brand">Get a Free Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Reach Out</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`tel:${siteConfig.phone}`} className="hover:text-brand">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-brand">{siteConfig.email}</a></li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:border-brand hover:text-brand"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {siteConfig.year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
