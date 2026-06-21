import BottomNavBar from "@/components/new-home/BottomNavBar";
import HeritageAnalysis from "@/components/new-home/Heritageanalysis";
import HeroSection from "@/components/new-home/Herosection";
import QuickInsights from "@/components/new-home/Quickinsights";
import TopAppBar from "@/components/new-home/Topappbar";
import TopBusinessNewsSection from "@/components/new-home/TopBusinessNewsSection";
import Image from "next/image";

export const metadata = {
  title: "MSME Ki Baat - Seedhi Baat for Indian Business Owners",
  description:
    "MSME Ki Baat by Hemant Chutani - practical guidance on government schemes, registrations, and business support for Indian Businesses.",
};
export default function Home() {
  return (
    <>
      {/* railway deployment */}
      <main className="pb-32 lg:pb-12 ">
        <HeroSection />
        <QuickInsights />
        <TopBusinessNewsSection />
        <HeritageAnalysis />
      </main>
    </>
  );
}
