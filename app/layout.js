import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopAppBar from "@/components/new-home/Topappbar";
import BottomNavBar from "@/components/new-home/BottomNavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        <TopAppBar />
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
