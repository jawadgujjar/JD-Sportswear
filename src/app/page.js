import Hero from "@/components/landing/Hero";
import SportCategories from "@/components/landing/SportCategories";
import Features from "@/components/landing/Features";
import TopSelling from "@/components/landing/TopSelling";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import Spotlight from "@/components/landing/Spotlight";
import QuoteForm from "@/components/landing/QuoteForm";
import { getCategories } from "@/lib/catalog";

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      <Hero />
      <SportCategories />
      <Features />
      <TopSelling />
      <HowItWorks />
      <Testimonials />
      <Spotlight />
      <QuoteForm categories={categories} />
    </>
  );
}
