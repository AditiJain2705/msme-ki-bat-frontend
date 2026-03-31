"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    {
        href: "/", icon: <FaHome />
        , label: "Home", active: true, fillIcon: true
    },
    { href: "/expert-videos", icon: <RiVideoFill />, label: "Videos", active: false },
    {
        href: "/insights", icon: <MdOutlineAutoGraph />
        , label: "Insights", active: false
    },
    // { href: "/", icon: <IoPersonSharp />, label: "Profile", active: false },
];
export default function BottomNavBar() {
    const pathname = usePathname();

    return (
        <nav className="fixed lg:hidden block bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-4 pt-2 bg-[#fff9eb]/90  backdrop-blur-xl shadow-[0_-4px_24px_rgba(54,51,35,0.08)] border-t-4 border-tertiary">

            {NAV_ITEMS.map(({ href, icon, label, fillIcon }) => {

                const isActive = pathname === href;

                return (
                    <Link
                        key={label}
                        href={href}
                        className={`flex items-center gap-2 justify-center rounded-xl px-4 py-1 transition-transform duration-150
                            hover:scale-105 active:scale-95
                            ${isActive
                                ? "bg-secondary text-on-secondary"
                                : "text-primary opacity-70"
                            }`}
                    >
                        <span
                            className="text-[20px]"
                            style={isActive && fillIcon
                                ? { fontVariationSettings: "'FILL' 1" }
                                : undefined}
                        >
                            {icon}
                        </span>

                        <span className="font-sans text-xs font-bold uppercase tracking-wider">
                            {label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}