import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading light eyebrow="Simple process" title="How it works" />

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand font-display text-2xl font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-white">{step.title}</h3>
              <p className="mt-2 text-zinc-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
