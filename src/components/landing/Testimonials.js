import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Reviews" title="Teams love their uniforms" />

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((review) => (
            <figure key={review.title} className="mb-6 break-inside-avoid rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
              <Stars />
              <h3 className="mt-3 font-display text-lg font-bold uppercase text-ink">{review.title}</h3>
              <blockquote className="mt-2 text-zinc-600">{review.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-zinc-500">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
