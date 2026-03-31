import BottomNavBar from "@/components/new-home/BottomNavBar";
import HeritageAnalysis from "@/components/new-home/Heritageanalysis";
import HeroSection from "@/components/new-home/Herosection";
import QuickInsights from "@/components/new-home/Quickinsights";
import TopAppBar from "@/components/new-home/Topappbar";
import TopBusinessNewsSection from "@/components/new-home/TopBusinessNewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="pb-32 lg:pb-12 ">
        <HeroSection />
        <QuickInsights />
        <TopBusinessNewsSection />
        <HeritageAnalysis />
      </main>
      <BottomNavBar />
    </>
  );
}
