"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

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

export default function BottomNavBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-[#fff9eb]/90  backdrop-blur-xl shadow-[0_-4px_24px_rgba(54,51,35,0.08)] border-t-4 border-tertiary">
            {NAV_ITEMS.map(({ href, icon, label, active, fillIcon }) =>
                active ? (
                    <Link
                        key={label}
                        href={href}
                        className="flex flex-col items-center justify-center bg-secondary text-on-secondary rounded-xl px-4 py-1 hover:scale-105 transition-transform duration-150 active:scale-95"
                    >
                        <span
                            className="material-symbols-outlined text-[24px]"
                            style={fillIcon ? { fontVariationSettings: "'FILL' 1" } : undefined}
                        >
                            {icon}
                        </span>
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider mt-0.5">
                            {label}
                        </span>
                    </Link>
                ) : (
                    <Link
                        key={label}
                        href={href}
                        className="flex flex-col items-center justify-center text-primary dark:text-slate-400 opacity-70 hover:scale-105 transition-transform duration-150 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-[24px]">{icon}</span>
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider mt-0.5">
                            {label}
                        </span>
                    </Link>
                )
            )}
        </nav>
    );
}