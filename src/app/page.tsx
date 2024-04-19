import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimoniaCards from "@/components/TestimoniaCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[o.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimoniaCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer/>
    </main>
  );
}
