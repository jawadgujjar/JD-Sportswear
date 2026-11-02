"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-brand focus:outline-none";

export default function QuoteForm({ categories, defaultCategory = "", productName = "" }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form data to an API route once the backend is ready.
    setSubmitted(true);
  };

  return (
    <section id="quote" className="scroll-mt-28 bg-ink py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-white">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">Free quote</p>
          <h2 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            Get your free custom design
          </h2>
          <p className="mt-4 text-lg text-zinc-300">
            Tell us about your team. A designer will send you a mockup and price within 48 hours.
          </p>
          <ul className="mt-8 space-y-3 text-zinc-300">
            {["No commitment, no payment upfront", "Unlimited design revisions", "Orders from 10 pieces"].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs text-white">&#10003;</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-10 text-center ring-1 ring-white/10">
            <h3 className="font-display text-3xl font-bold uppercase text-white">Thank you!</h3>
            <p className="mt-3 text-zinc-300">We have received your request and will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-2 sm:p-8">
            <input required name="name" placeholder="Full name" className={inputClass} />
            <input required name="team" placeholder="Team / organization" className={inputClass} />
            <input required type="email" name="email" placeholder="Email" className={inputClass} />
            <input name="phone" type="tel" placeholder="Phone" className={inputClass} />
            <select required name="sport" defaultValue={defaultCategory} className={inputClass}>
              <option value="" disabled>Select sport</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug} className="text-ink">{category.name}</option>
              ))}
            </select>
            <input required type="number" min="10" name="quantity" placeholder="Quantity (min. 10)" className={inputClass} />
            <textarea
              name="message"
              rows="4"
              defaultValue={productName ? `I'm interested in: ${productName}\n` : ""}
              placeholder="Colors, logo, design ideas..."
              className={`${inputClass} sm:col-span-2`}
            />
            <Button type="submit" className="sm:col-span-2">Request Free Design</Button>
          </form>
        )}
      </div>
    </section>
  );
}
