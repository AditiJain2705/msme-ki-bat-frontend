"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

export default function TopAppBar() {
    const NAV_ITEMS = [
        {
            href: "/", icon: <FaHome />
            , label: "Home", active: true, fillIcon: true
        },
        { href: "/videos", icon: <RiVideoFill />, label: "Videos", active: false },
        {
            href: "/insights", icon: <MdOutlineAutoGraph />
            , label: "Insights", active: false
        },
        { href: "/profile", icon: <IoPersonSharp />, label: "Profile", active: false },
    ];
    return (
        <header className="sticky top-0 z-50 h-16 md:h-24 w-full px-4 lg:px-8 flex justify-between items-center bg-[#fff9eb]  transition-colors border-b border-outline-variant/30">
            <div className="flex lg:hidden items-center gap-3">

                <Image
                    alt="MSME ki Bat Logo"
                    className="h-10 md:h-14 w-auto object-contain"
                    width={200}
                    height={100}
                    src="/new-home/msme-ki-bat-logo.webp"
                />

            </div>
            {/* desktop */}
            <div className="hidden lg:flex items-center gap-4 py-4">
                <Image
                    alt="MSME ki Bat Logo"
                    className="h-16 w-auto object-contain"
                    width={200}
                    height={100}
                    src="/new-home/msme-ki-bat-logo.webp"
                />

            </div>
            <div className="hidden lg:grid grid-cols-4 gap-4">
                {NAV_ITEMS.map(({ href, icon, label, active, fillIcon }) =>
                    active ? (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-2 justify-center bg-secondary text-on-secondary rounded-xl px-4 py-1 hover:scale-105 transition-transform duration-150 active:scale-95"
                        >
                            <span
                                className="material-symbols-outlined text-[24px]"
                                style={fillIcon ? { fontVariationSettings: "'FILL' 1" } : undefined}
                            >
                                {icon}
                            </span>
                            <span className="font-sans text-xs font-bold uppercase tracking-wider mt-0.5">
                                {label}
                            </span>
                        </Link>
                    ) : (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-2 justify-center text-primary dark:text-slate-400 opacity-70 hover:scale-105 transition-transform duration-150 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[24px]">{icon}</span>
                            <span className="font-sans text-xs font-bold uppercase tracking-wider mt-0.5">
                                {label}
                            </span>
                        </Link>
                    )
                )}
            </div>
            <button
                className="material-symbols-outlined text-primary hover:bg-[#e9e2cc] dark:hover:bg-slate-800 transition-colors p-2 rounded-full"
                aria-label="Open menu"
            >
                <RxHamburgerMenu />

            </button>
        </header>
    );
}