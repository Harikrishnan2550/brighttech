import Hero from "@/components/home/Hero";
import TrustedBrands from "@/components/home/TrustedBrands";
import AboutPreview from "@/components/home/AboutPreview";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesPreview from "@/components/home/ServicesPreview";
import RoiCalculator from "@/components/home/RoiCalculator";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <TrustedBrands />
      <AboutPreview />
      <HowItWorks />
      <ServicesPreview />
      <RoiCalculator />
      <WhyChooseUs />
      <GalleryPreview />
      <CTA />
    </div>
  );
}