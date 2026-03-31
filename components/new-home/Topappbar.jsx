"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";

export default function TopAppBar() {
    return (
        <header className="sticky top-0 z-50 h-16 w-full px-4 flex justify-between items-center bg-[#fff9eb]  transition-colors border-b border-outline-variant/30">
            <div className="flex items-center gap-3">
                <button
                    className="material-symbols-outlined text-primary hover:bg-[#e9e2cc] dark:hover:bg-slate-800 transition-colors p-2 rounded-full"
                    aria-label="Open menu"
                >
                    <RxHamburgerMenu />

                </button>
                <Image
                    alt="MSME Logo"
                    className="h-10 w-auto object-contain"
                    width={200}
                    height={100}
                    src="/new-home/msme-ki-bat-logo.webp"
                />
                <h1 className="text-xl font-bold text-primary font-headline italic tracking-tight hidden sm:block">
                    Heritage Insights
                </h1>
            </div>

            <button
                className="material-symbols-outlined text-primary hover:bg-[#e9e2cc] dark:hover:bg-slate-800 transition-colors p-2 rounded-full"
                aria-label="Search"
            >
                <IoSearchSharp />

            </button>
        </header>
    );
}