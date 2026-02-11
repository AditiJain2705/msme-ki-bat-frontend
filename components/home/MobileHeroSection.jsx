import Image from 'next/image';
import { useState } from 'react';

export default function MobileHeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
            </div>

            {/* Navigation */}
            <nav className="relative z-20 px-4 py-4 lg:px-12 lg:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Bharat Fellowship Program"
                            width={180}
                            height={60}
                            className="h-auto w-28 sm:w-36 lg:w-48"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 xl:flex">
                        <a href="#home" className="nav-link text-xs">
                            HOME
                        </a>
                        <a href="#about" className="nav-link text-xs">
                            ABOUT THE FELLOWSHIP
                        </a>
                        <a href="#why" className="nav-link text-xs">
                            WHY FELLOWSHIP
                        </a>
                        <a href="#structure" className="nav-link text-xs">
                            STRUCTURE & TIMELINE
                        </a>
                        <a href="#faqs" className="nav-link text-xs">
                            FAQS
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="rounded-full bg-[#0D5B52] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#094A43] sm:px-6 sm:py-3 sm:text-sm lg:px-8 lg:py-4 lg:text-base">
                        Apply for The Program
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="ml-4 flex h-10 w-10 items-center justify-center xl:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-6 bg-[#0D5B52]"></span>
                            <span className="block h-0.5 w-6 bg-[#0D5B52]"></span>
                            <span className="block h-0.5 w-6 bg-[#0D5B52]"></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 p-6 shadow-lg backdrop-blur-sm xl:hidden">
                        <div className="flex flex-col gap-4">
                            <a href="#home" className="nav-link text-sm">
                                HOME
                            </a>
                            <a href="#about" className="nav-link text-sm">
                                ABOUT THE FELLOWSHIP
                            </a>
                            <a href="#why" className="nav-link text-sm">
                                WHY FELLOWSHIP
                            </a>
                            <a href="#structure" className="nav-link text-sm">
                                STRUCTURE & TIMELINE
                            </a>
                            <a href="#faqs" className="nav-link text-sm">
                                FAQS
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-120px)] items-center justify-center px-4 pb-32 pt-8 sm:px-6 sm:pb-40 lg:px-12 lg:pb-12">
                {/* Decorative Cloud Shape Background */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-[400px] w-[95vw] max-w-[1200px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <svg
                            viewBox="0 0 1200 700"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-full w-full drop-shadow-lg"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M150 350C150 250 200 200 280 180C280 100 350 50 450 50C520 50 580 80 620 130C670 110 730 100 790 110C890 130 950 190 980 270C1050 290 1100 340 1100 420C1100 520 1020 600 920 600H280C190 600 120 530 120 440C120 400 130 370 150 350Z"
                                fill="#F5F5DC"
                                stroke="#FFA500"
                                strokeWidth="10"
                            />
                        </svg>
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-20 mx-auto max-w-4xl text-center">
                    {/* Logo in Cloud */}
                    <div className="mb-6 flex justify-center sm:mb-8">
                        <div className="inline-flex flex-col items-center">
                            <h1 className="citrus-gothic text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="text-[#FFA500]">भारत</span>
                            </h1>
                            <h2 className="citrus-gothic text-4xl text-[#0D5B52] sm:text-5xl md:text-6xl lg:text-7xl">
                                Fellowship
                            </h2>
                            <p className="citrus-gothic mt-1 text-xl tracking-widest text-[#FFA500] sm:mt-2 sm:text-2xl md:text-3xl lg:text-4xl">
                                PROGRAM
                            </p>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h3 className="citrus-gothic mb-3 px-2 text-2xl font-bold leading-tight text-[#0D5B52] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        JOIN INDIA'S{' '}
                        <span className="text-[#E63946]">NEXT GENERATION</span> OF
                        <br className="hidden sm:block" />
                        CHANGEMAKERS
                    </h3>

                    {/* Subheading */}
                    <p className="nave-font mx-auto mb-6 max-w-2xl px-4 text-base leading-relaxed text-[#2C2C2C] sm:mb-8 sm:text-lg md:text-xl lg:mb-12 lg:text-2xl">
                        Become a Bharat Fellow and empower entrepreneurs across Tier 2 and
                        Tier 3 India
                    </p>

                    {/* CTA Button */}
                    <button className="citrus-gothic rounded-full bg-[#FFA500] px-8 py-3 text-base font-bold uppercase tracking-wide text-[#0D5B52] shadow-lg transition-all hover:bg-[#FF8C00] hover:shadow-xl hover:scale-105 active:scale-95 sm:px-10 sm:py-4 sm:text-lg md:px-12 md:py-5 md:text-xl lg:px-14 lg:py-6 lg:text-2xl">
                        Apply for the Program
                    </button>
                </div>
            </div>

            {/* Bottom Left Image - Woman */}
            <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-[450px]">
                <Image
                    src="/woman-left.png"
                    alt="Bharat Fellow"
                    width={450}
                    height={600}
                    className="h-auto w-full object-contain"
                    priority
                />
            </div>

            {/* Bottom Right Image - Man */}
            <div className="pointer-events-none absolute bottom-0 right-0 z-30 w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-[450px]">
                <Image
                    src="/man-right.png"
                    alt="Bharat Fellow"
                    width={450}
                    height={600}
                    className="h-auto w-full object-contain"
                    priority
                />
            </div>
        </section>
    );
}