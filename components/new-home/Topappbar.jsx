"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
// import { useState } from "react";
// import LeadFormPopup from "../form/Leadformpopup";

export default function TopAppBar() {
    // const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const NAV_ITEMS = [
        {
            href: "/",
            icon: <FaHome />,
            label: "Home",
            fillIcon: true
        },
        {
            href: "/expert-videos",
            icon: <RiVideoFill />,
            label: "Videos"
        },
        {
            href: "/insights",
            icon: <MdOutlineAutoGraph />,
            label: "Insights"
        },
        // {
        //     href: "/profile",
        //     icon: <IoPersonSharp />,
        //     label: "Profile"
        // }
    ];

    return (
        <header className="sticky top-0 z-50 h-16 md:h-24 w-full px-4 lg:px-8 flex justify-between items-center bg-[#fff9eb] border-b border-outline-variant/30">

            {/* Mobile Logo */}
            <Link href={"/"} className="flex lg:hidden items-center gap-3">
                <Image
                    alt="MSME ki Bat Logo"
                    className="h-10 md:h-14 w-auto object-contain"
                    width={200}
                    height={100}
                    src="/new-home/msme-ki-bat-logo.webp"
                />
            </Link>

            {/* Desktop Logo */}
            <Link href={"/"} className="hidden lg:flex items-center gap-4 py-4">
                <Image
                    alt="MSME ki Bat Logo"
                    className="h-16 w-auto object-contain"
                    width={200}
                    height={100}
                    src="/new-home/msme-ki-bat-logo.webp"
                />
            </Link>

            {/* Navbar */}
            <div className="hidden lg:grid grid-cols-3 gap-4">

                {NAV_ITEMS.map(({ href, icon, label, fillIcon }) => {

                    const isActive = pathname === href;

                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`flex items-center gap-2 justify-center rounded-xl px-4 py-1 transition-transform duration-150
                            hover:scale-105 active:scale-95
                            ${isActive
                                    ? "bg-[#4e342e] text-on-secondary"
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

                            <span className="font-sans text-xs lg:text-base font-bold uppercase tracking-wider">
                                {label}
                            </span>
                        </Link>
                    );
                })}

            </div>

            <div className="gap-4 flex">
                <Link href={"tel:+91 89500 16534"} className="bg-[#4e342e] text-on-secondary text-sm lg:text-base font-semibold rounded transition-colors px-2 py-1 hover:bg-orange-500" >
                    Call Now
                </Link>
                <button
                    className="bg-[#4e342e] text-on-secondary text-sm lg:text-base font-semibold rounded transition-colors px-2 py-1 cursor-pointer hover:bg-orange-500"
                    onClick={() => window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLScBjul_YJi6l_-xNaE0xNEg1LoOk13zBPaSRpqIw7rMpoMonw/viewform?usp=header",
                        "_blank",
                        "noopener,noreferrer"
                    )}
                    aria-label="Open Google Form"
                >
                    Contact Us
                </button>
            </div>

            {/* {open && <LeadFormPopup isOpen={open} onClose={() => setOpen(false)} />} */}
        </header>
    );
}