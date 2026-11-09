import HeroSlider from "@/components/landing/HeroSlider";
import ClientLogos from "@/components/landing/ClientLogos";
import Reviews from "@/components/landing/Reviews";
import CallToAction from "@/components/landing/CallToAction";
import SportCategories from "@/components/landing/SportCategories";
import Features from "@/components/landing/Features";
import TopSelling from "@/components/landing/TopSelling";
import HowItWorks from "@/components/landing/HowItWorks";
import Spotlight from "@/components/landing/Spotlight";
import QuoteForm from "@/components/landing/QuoteForm";
import { getCategories } from "@/lib/catalog";

export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      <HeroSlider />
      <ClientLogos />
      <Reviews />
      <CallToAction />
      <SportCategories />
      <Features />
      <TopSelling />
      <HowItWorks />
      <Spotlight />
      <QuoteForm categories={categories} />
    </>
  );
}
