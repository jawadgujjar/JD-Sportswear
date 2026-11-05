import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const perks = ["Free design mockup", "MOQ from 10 pieces", "Private label available", "Fast USA delivery"];

export default function CallToAction() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-14 sm:py-20">
        <Image src="/images/hero/gym-training.jpg" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="-z-20 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/90 to-brand/40" />

        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" />
              Ready when you are
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] sm:text-6xl">
              Let&rsquo;s build your <span className="text-brand">custom gear</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Tell us what you need. Our team sends a free design and wholesale quote within 48 hours, no commitment.
            </p>
            <ul className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-sm text-white/80">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px]" aria-hidden="true">&#10003;</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-10 py-5 font-display text-base font-semibold uppercase tracking-wider shadow-2xl shadow-brand/40 transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Get a Free Quote
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-10 py-5 font-display text-base font-semibold uppercase tracking-wider backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-ink"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
