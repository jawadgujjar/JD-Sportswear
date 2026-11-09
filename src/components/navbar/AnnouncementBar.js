import Link from "next/link";
import { announcements, siteConfig } from "@/lib/siteConfig";

function Items({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {announcements.map((item) => (
        <li key={item.highlight} className="flex items-center">
          <Link href={item.href} tabIndex={hidden ? -1 : undefined} className="px-7 text-white/80 transition-colors hover:text-white">
            <span className="font-semibold uppercase tracking-[0.15em] text-brand">{item.highlight}</span>
            <span className="mx-2 text-white/30">|</span>
            {item.text}
          </Link>
          <span className="h-1 w-1 rotate-45 bg-brand" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

// Top bar: fixed contact info on the sides, scrolling offers in the middle.
// The offer list is rendered twice so the -50% translate loops seamlessly.
export default function AnnouncementBar() {
  return (
    <div className="border-b border-white/5 bg-black text-xs text-white">
      <div className="mx-auto flex h-10 max-w-[1440px] items-center">
        <a
          href={`tel:${siteConfig.phone}`}
          className="hidden h-full shrink-0 items-center gap-2 border-r border-white/10 px-6 text-white/70 transition-colors hover:text-white lg:flex"
        >
          Need help? Call
          <span className="font-semibold text-brand">{siteConfig.phone}</span>
        </a>

        <div className="group relative h-full flex-1 overflow-hidden">
          <div className="flex h-full w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <Items />
            <Items hidden />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black" />
        </div>

        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden h-full shrink-0 items-center border-l border-white/10 px-6 text-white/70 transition-colors hover:text-white lg:flex"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );
}
