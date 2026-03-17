import AboutUs from "@/components/home/AboutUs";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import HowToApply from "@/components/home/HowToApply";
import ProgramStructure from "@/components/home/ProgramStructure";
import WhoShouldApply from "@/components/home/WhoShouldApply";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <ProgramStructure />
      <WhoShouldApply />
      <HowToApply />
      <FaqSection />
    </>
  );
}
