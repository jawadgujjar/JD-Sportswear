import Button from "@/components/ui/Button";
import JerseyArt from "@/components/ui/JerseyArt";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(255,90,31,0.35),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Custom team uniforms
          </p>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] sm:text-7xl">
            Look like a team.<br />
            <span className="text-brand">Play like one.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-300">
            Fully sublimated jerseys and uniforms designed around your colors and logo.
            Get a free custom design in 48 hours. No commitment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#quote">Get a Free Design</Button>
            <Button href="#top-selling" variant="outline">Shop Uniforms</Button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <JerseyArt colors={["#FF5A1F", "#F8FAFC"]} shape="tank" number="23" className="w-3/5 -rotate-6 drop-shadow-2xl" />
          <JerseyArt colors={["#1D4ED8", "#FACC15"]} shape="tee" number="12" className="-ml-16 mt-16 w-3/5 rotate-6 drop-shadow-2xl" />
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="font-display text-3xl font-bold text-brand sm:text-4xl">{stat.value}</dt>
              <dd className="mt-1 text-sm uppercase tracking-wider text-zinc-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
