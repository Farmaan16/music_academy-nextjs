import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimoniaCards from "@/components/TestimoniaCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[o.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimoniaCards/>
    </main>
  );
}
