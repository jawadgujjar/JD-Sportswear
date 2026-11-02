import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Built to compete"
          title="Designed for game day"
          text="Every uniform is cut, printed and stitched to order, with your colors, your logo and your players' names."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={feature.title} className="rounded-2xl border border-zinc-200 p-6">
              <span className="font-display text-4xl font-bold text-brand/30">0{i + 1}</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-ink">{feature.title}</h3>
              <p className="mt-2 text-zinc-600">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="#quote">Get a Free Design</Button>
        </div>
      </div>
    </section>
  );
}
