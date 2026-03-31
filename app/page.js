import BottomNavBar from "@/components/new-home/BottomNavBar";
import HeritageAnalysis from "@/components/new-home/Heritageanalysis";
import HeroSection from "@/components/new-home/Herosection";
import QuickInsights from "@/components/new-home/Quickinsights";
import TopAppBar from "@/components/new-home/Topappbar";
import TopBusinessNews from "@/components/new-home/Topbusinessnews";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="pb-32">
        <HeroSection />
        <QuickInsights />
        <TopBusinessNews />
        <HeritageAnalysis />
      </main>
      <BottomNavBar />
    </>
  );
}
