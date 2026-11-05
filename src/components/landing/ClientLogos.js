import Image from "next/image";
import { clientLogos } from "@/lib/data";

function Logo({ client }) {
  if (client.logo) {
    return (
      <Image
        src={client.logo}
        alt={client.name}
        width={160}
        height={60}
        className="h-12 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
      />
    );
  }

  // Text wordmark until a real logo image is added.
  return (
    <span className="whitespace-nowrap font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 transition-colors hover:text-ink">
      {client.name}
    </span>
  );
}

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={hidden || undefined}>
      {clientLogos.map((client) => (
        <li key={client.name}>
          <Logo client={client} />
        </li>
      ))}
    </ul>
  );
}

export default function ClientLogos() {
  return (
    <section className="border-b border-zinc-200 bg-white py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
        Trusted by gyms, academies &amp; teams across the USA
      </p>
      <div className="group relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <Row />
          <Row hidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white" />
      </div>
    </section>
  );
}
