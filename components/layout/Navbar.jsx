import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-12">
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Bharat Fellowship Program"
                    width={180}
                    height={60}
                    className="h-auto w-32 sm:w-40 lg:w-48"
                />
            </div>

            <div className="hidden items-center gap-8 lg:flex">
                <a href="#home" className="nav-link">
                    HOME
                </a>
                <a href="#about" className="nav-link">
                    ABOUT THE FELLOWSHIP
                </a>
                <a href="#why" className="nav-link">
                    WHY FELLOWSHIP
                </a>
                <a href="#structure" className="nav-link">
                    STRUCTURE & TIMELINE
                </a>
                <a href="#faqs" className="nav-link">
                    FAQS
                </a>
            </div>

            <button className="rounded-full bg-[#0D5B52] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#094A43] lg:px-8 lg:py-4 lg:text-base">
                Apply for The Program
            </button>
        </nav>
    )
}

export default Navbar