"use client";

import FaqSection from "@/components/home/FaqSection";
import WhoShouldApply from "@/components/home/WhoShouldApply";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
// Install: npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sections = [
    { id: "intro", title: "Introduction" },
    {
        id: "part-of-a-larger-quantum-valley-vision",
        title: "Quantum Valley Vision",
    },
    { id: "conclusion", title: "Conclusion" },
];

const relatedBlogs = [
    {
        id: 1,
        title: "India's first quantum and AI university campus to open in Amaravati",
        excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, libero! Ullam, odit!",
    },
    {
        id: 2,
        title: "India's first quantum and AI university campus to open in Amaravati",
        excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, libero! Ullam, odit!",
    },
    {
        id: 3,
        title: "India's first quantum and AI university campus to open in Amaravati",
        excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, libero! Ullam, odit!",
    },
];

// Heart button component
const HeartButton = ({ sectionId }) => {
    const [liked, setLiked] = useState(false);

    return (
        <button
            onClick={() => setLiked((prev) => !prev)}
            aria-label={liked ? "Unlike" : "Like"}
            className="transition-transform active:scale-125"
        >
            <Heart
                className={`transition-colors duration-200 ${liked ? "fill-red-500 text-red-500" : "text-red-400"
                    }`}
            />
        </button>
    );
};

// Share button component
const ShareButton = ({ title }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: title || document.title,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                // User cancelled — do nothing
            }
        } else {
            // Fallback: copy URL to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch {
                // Clipboard not available
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            aria-label="Share"
            className="relative transition-transform active:scale-110"
        >
            <Share2 className="text-blue-600" />
            {copied && (
                <span className="absolute -top-8 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    Link copied!
                </span>
            )}
        </button>
    );
};

const BLOG_TITLE = "India's first quantum and AI university campus to open in Amaravati";

const Main = () => {
    const [active, setActive] = useState("intro");
    const tocRef = useRef(null);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                        const activeItem = document.getElementById(`toc-${entry.target.id}`);
                        if (activeItem && tocRef.current) {
                            activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                        }
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* Hero */}
            <section className="w-full blog-hero-section py-20 md:py-28">
                <h1 className="text-4xl md:text-[53px] text-center font-semibold md:leading-[59px] font-medium text-[#02443A] max-w-5xl mx-auto font-headline">
                    {BLOG_TITLE}
                </h1>
            </section>

            {/* Layout */}
            <section className="flex flex-col md:flex-row gap-2 relative">

                {/* MOBILE TOC */}
                <div className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-300">
                    <div ref={tocRef} className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-3">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                id={`toc-${item.id}`}
                                onClick={() => scrollToSection(item.id)}
                                className={`nave-font whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${active === item.id
                                    ? "bg-[#02443A] text-white"
                                    : "bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* DESKTOP TOC */}
                <aside className="hidden md:block w-[30%] lg:w-1/4 pl-3 lg:px-6 mt-12">
                    <div className="sticky top-12 mb-12 bg-white p-6 rounded-lg pink-white-background">
                        <h3 className="text-xl lg:text-2xl font-light mb-4 font-headline">Table of Contents</h3>
                        <ul className="space-y-2">
                            {sections.map((item) => (
                                <li key={item.id}>
                                    <button
                                        id={`toc-${item.id}`}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`font-headline text-lg text-left transition-all ${active === item.id
                                            ? "text-[#02443A] font-semibold"
                                            : "text-gray-600"
                                            }`}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* BLOG CONTENT */}
                <section className="w-full lg:w-1/2 nave-font px-6">

                    {/* Intro */}
                    <div id="intro" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-6 md:mt-12 shadow-lg">
                        <p className="nave-font pb-4">
                            The National Institute of Electronics & Information Technology
                            signed a memorandum of understanding with the Government of Andhra
                            Pradesh on February 20 to establish India's first university
                            campus dedicated exclusively to quantum computing and artificial
                            intelligence in Amaravati. The agreement was formalized at the
                            India AI Impact Summit 2026, held at Bharat Mandapam in New Delhi,
                            in the presence of Andhra Pradesh Chief Minister N. Chandrababu
                            Naidu and MeitY Secretary S. Krishnan.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="intro" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Quantum Valley */}
                    <div id="part-of-a-larger-quantum-valley-vision" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Part of a Larger Quantum Valley Vision
                        </h2>
                        <p className="nave-font pb-4">
                            Part of a Larger Quantum Valley Vision The university campus is
                            one piece of Andhra Pradesh's broader ambition to transform
                            Amaravati into a "Quantum Valley," an initiative aligned with
                            India's ₹6,000 crore National Quantum Mission. The NIELIT
                            agreement was one of seven MoUs signed by the state government at
                            the summit, which also included partnerships with the United
                            Nations International Computing Centre, IBM for training 100,000
                            youth in quantum and AI skills, IIT Madras for AI-based education
                            tools, and a consortium to build a state-level AI tech hub.
                        </p>
                        <ul className="list-disc">
                            <li className="mb-4">This partnership marks a major milestone in India's deep-tech journey," said Dr. M. M. Tripathi, NIELIT's Director General.</li>
                            <li className="mb-4">The Amaravati Quantum & AI campus under NIELIT will emerge as a national centre.</li>
                            <li className="mb-4">The Amaravati Quantum & AI campus of excellence for research, education, and innovation in quantum technologies and artificial intelligence.</li>
                            <li className="mb-4">This partnership marks a major milestone in India's deep-tech journey," said Dr. M. M. Tripathi, NIELIT's Director General.</li>
                        </ul>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="quantum" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg my-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Conclusion
                        </h2>
                        <p className="nave-font pb-4">
                            The India AI Impact Summit, running from February 16 to 20, was
                            the first event in the global AI summit series to be held in the
                            Global South. Organized by the Ministry of Electronics and
                            Information Technology, the five-day gathering drew over 40 CEOs,
                            20 heads of state, and more than two lakh registered participants,
                            with an expo featuring 600 startups and exhibitors from 30
                            countries.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="conclusion" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>
                </section>

                {/* DESKTOP RIGHT SIDEBAR */}
                <aside className="hidden lg:block w-1/2 lg:w-1/4 nave-font py-12">
                    {relatedBlogs.map((blog) => (
                        <div key={blog.id} className="mb-4 md:mb-12 bg-white p-6 rounded-lg pink-white-background">
                            <h2 className="text-lg lg:text-2xl font-headline mb-4 text-center">{blog.title}</h2>
                            <p>{blog.excerpt}</p>
                            <div className="flex justify-end gap-4 mt-4 border-t-2 border-gray-300 w-full">
                                <Link href={"/"} className="p-1 px-2 gap-1 text-sm mt-4 rounded-sm bg-[#024067] text-white font-semibold flex items-center">
                                    Read More <IoIosShareAlt />
                                </Link>
                            </div>
                        </div>
                    ))}
                </aside>
            </section>

            {/* MOBILE RELATED BLOGS — Swiper Slider */}
            <aside className="lg:hidden w-full nave-font px-6 pb-8">
                <h2 className="text-3xl font-semibold font-headline mb-4 text-[#02443A] ">
                    Related Blogs
                </h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                    className="pb-10" // space for pagination dots
                >
                    {relatedBlogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <div className="mb-4 bg-white p-6 rounded-lg pink-white-background h-full">
                                <h2 className="text-xl font-headline font-semibold mb-4 text-center">
                                    {blog.title}
                                </h2>
                                <p className="text-xs">{blog.excerpt}</p>
                                <div className="flex justify-end gap-4 mt-4 border-t-2 border-gray-300 w-full">
                                    <Link href={"/"} className="p-1 px-2 gap-1 text-sm mt-4 rounded-sm bg-[#024067] text-white font-semibold flex items-center">
                                        Read More <IoIosShareAlt />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </aside>

            <FaqSection />
        </main>
    );
};

export default Main;