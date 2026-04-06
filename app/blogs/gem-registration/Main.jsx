"use client";

import FaqSection from "@/components/home/FaqSection";
import WhoShouldApply from "@/components/home/WhoShouldApply"; // Retaining for now, but not used in this specific blog content.
import MobileRelatedBlogs from "@/components/new-home/MobileRelatedBlogs";
import RelatedBlogs from "@/components/new-home/RelatedBlogs";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image"; // Retaining for now, but not used in this specific blog content.
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";


const sections = [
    { id: "intro", title: "Introduction" },
    { id: "what-is-gem-registration", title: "What is GeM Registration?" },
    { id: "why-gem-important-for-msmes", title: "Why GeM is Important for MSMEs" },
    { id: "who-can-register-on-gem", title: "Who Can Register on GeM?" },
    { id: "documents-required-for-gem-registration", title: "Documents Required for GeM Registration" },
    { id: "gem-registration-process", title: "GeM Registration Process (Step by Step)" },
    { id: "gem-registration-fees-reality-check", title: "GeM Registration Fees (Reality Check)" },
    { id: "common-mistakes-msmes-make", title: "Common Mistakes MSMEs Make" },
    { id: "is-gem-worth-it", title: "Is GeM Worth It?" },
    { id: "practical-advice", title: "Practical Advice" },
    { id: "where-msme-ki-baat-comes-in", title: "Where MSME Ki Baat Comes In" },
    { id: "want-more-guidance-like-this", title: "Want More Guidance Like This?" },
    { id: "need-help-understanding-your-case", title: "Need Help Understanding Your Case?" },
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

const BLOG_TITLE = "GeM Registration 2026: Complete Process, Fees, Eligibility & How to Sell on Government Portal";

const faqs = [
    {
        question: (
            <>
                What is{" "}
                <span className="text-[#FFAF00]">GeM registration?</span>
            </>
        ),
        answer: "GeM registration allows businesses to sell products and services directly to government buyers through the official Government e-Marketplace.",
    },
    {
        question: (
            <>
                Is GeM registration{" "}
                <span className="text-[#FFAF00]">free?</span>
            </>
        ),
        answer: "Yes. Registration itself is free, but success still requires effort, documentation, and strategy.",
    },
    {
        question: (
            <>
                Can small businesses{" "}
                <span className="text-[#FFAF00]">register on GeM?</span>
            </>
        ),
        answer: "Yes. MSMEs and small businesses can register, and in many cases they get preference advantages.",
    },
    {
        question: (
            <>
                How long does GeM registration{" "}
                <span className="text-[#FFAF00]">take?</span>
            </>
        ),
        answer: "If documents are correct, registration can move quickly. Delays usually happen due to document issues or incomplete information.",
    },
    {
        question: (
            <>
                Do I need GST for{" "}
                <span className="text-[#FFAF00]">GeM?</span>
            </>
        ),
        answer: "In many cases yes, though the exact applicability can depend on category and business structure.",
    },
    {
        question: (
            <>
                Can MSME Ki Baat help me understand{" "}
                <span className="text-[#FFAF00]">GeM better?</span>
            </>
        ),
        answer: "Yes. MSME Ki Baat can guide you in understanding whether GeM is suitable for your business and how to approach it properly.",
    },
];

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
                    <div className="sticky top-12 mb-12 bg-white p-6 pl-12 rounded-lg pink-white-background">
                        <h3 className="text-xl lg:text-2xl font-semibold mb-4 font-headline">Table of Contents</h3>
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
                            If you're a business owner trying to sell to the government, you've probably heard about GeM (Government e-Marketplace).
                        </p>
                        <h3 className="font-headline text-2xl md:text-3xl text-[#02443A] font-semibold mb-4">
                            But most people get stuck here:
                        </h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>How do I register on GeM?</li>
                            <li>Is it free or paid?</li>
                            <li>What documents do I need?</li>
                            <li>Is it even worth it?</li>
                        </ul>
                        <p className="nave-font pb-4">
                            And honestly, a lot of MSMEs either drop the idea halfway or do the registration wrong.
                        </p>
                        <p className="nave-font pb-4">
                            This guide will fix that.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="intro" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* What is GeM Registration? */}
                    <div id="what-is-gem-registration" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            What is GeM Registration?
                        </h2>
                        <p className="nave-font pb-4">
                            GeM (Government e-Marketplace) is an official government portal where businesses can sell products, services, and in some cases consulting or professional offerings to government departments, PSUs, and ministries.
                        </p>
                        <p className="nave-font pb-4">
                            In simple terms: GeM is like an online marketplace for government buyers.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="what-is-gem-registration" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Why GeM is Important for MSMEs */}
                    <div id="why-gem-important-for-msmes" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Why GeM is Important for MSMEs
                        </h2>
                        <p className="nave-font pb-4">
                            If you are an MSME, GeM is not just optional - it can become a strong opportunity channel.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Direct access to government buyers</li>
                            <li>No middlemen</li>
                            <li>Transparent bidding system</li>
                            <li>Potentially better trust and visibility</li>
                            <li>Preference for MSMEs in many procurement situations</li>
                        </ul>
                        <p className="nave-font pb-4">
                            That's why more and more businesses are moving towards GeM.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="why-gem-important-for-msmes" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Who Can Register on GeM? */}
                    <div id="who-can-register-on-gem" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Who Can Register on GeM?
                        </h2>
                        <p className="nave-font pb-4">
                            You can register if you are:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Proprietor</li>
                            <li>Partnership firm</li>
                            <li>Private limited company</li>
                            <li>LLP</li>
                            <li>Startup</li>
                            <li>MSME</li>
                        </ul>
                        <p className="nave-font pb-4">
                            Even freelancers or service providers may be eligible in some categories.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="who-can-register-on-gem" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Documents Required for GeM Registration */}
                    <div id="documents-required-for-gem-registration" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Documents Required for GeM Registration
                        </h2>
                        <p className="nave-font pb-4">
                            Before starting, keep these ready:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Aadhaar card</li>
                            <li>PAN card</li>
                            <li>Business registration proof</li>
                            <li>GST details, if applicable</li>
                            <li>Bank details</li>
                            <li>Udyam (MSME) certificate, if available</li>
                            <li>Email ID and mobile number</li>
                        </ul>
                        <p className="nave-font pb-4">
                            Missing documents is one of the biggest reasons for delay or rejection.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="documents-required-for-gem-registration" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* GeM Registration Process (Step by Step) */}
                    <div id="gem-registration-process" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            GeM Registration Process (Step by Step)
                        </h2>
                        <ol className=" space-y-4 nave-font">
                            <li>
                                <h3 className="font-semibold text-lg">Step 1: Go to the GeM portal</h3>
                                <p>Visit the official GeM website and click on Seller Registration.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Step 2: Verify Aadhaar</h3>
                                <p>OTP verification is typically done through the Aadhaar-linked mobile number.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Step 3: Fill business details</h3>
                                <p>Add business type, PAN details, GST information, and other required fields.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Step 4: Add bank details</h3>
                                <p>Your payments will be linked to the bank account you submit.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Step 5: Create seller profile</h3>
                                <p>Add your product or service details and upload the required catalog information.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Step 6: Start bidding or selling</h3>
                                <p>Once approved, you can list products, participate in tenders, and start receiving opportunities.</p>
                            </li>
                        </ol>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="gem-registration-process" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* GeM Registration Fees (Reality Check) */}
                    <div id="gem-registration-fees-reality-check" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            GeM Registration Fees (Reality Check)
                        </h2>
                        <p className="nave-font pb-4">
                            Registration itself is free.
                        </p>
                        <p className="nave-font pb-4">
                            But that does not mean the journey is effortless.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Catalog creation effort</li>
                            <li>Product listing optimization</li>
                            <li>Bid participation effort</li>
                            <li>Pricing and documentation work</li>
                        </ul>
                        <p className="nave-font pb-4">
                            So the right way to think is: free registration does not mean zero effort.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="gem-registration-fees-reality-check" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Common Mistakes MSMEs Make */}
                    <div id="common-mistakes-msmes-make" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Common Mistakes MSMEs Make
                        </h2>
                        <ol className=" space-y-4 nave-font">
                            <li>
                                <h3 className="font-semibold text-lg">Wrong product listing</h3>
                                <p>Poor titles, weak descriptions, and bad categorization reduce visibility.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">No understanding of bidding</h3>
                                <p>GeM is not just listing - it is also competition.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">Incomplete profile</h3>
                                <p>This lowers trust and can slow down activation or performance.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">No strategy after registration</h3>
                                <p>Many businesses register and then do nothing meaningful.</p>
                            </li>
                        </ol>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="common-mistakes-msmes-make" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Is GeM Worth It? */}
                    <div id="is-gem-worth-it" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Is GeM Worth It?
                        </h2>
                        <p className="nave-font pb-4">
                            Yes - but only if you do it properly.
                        </p>
                        <p className="nave-font pb-4">
                            If you understand pricing, optimize listings, and participate consistently, GeM can become a real revenue channel.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="is-gem-worth-it" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Practical Advice */}
                    <div id="practical-advice" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Practical Advice
                        </h2>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Decide what you actually want to sell</li>
                            <li>Check competition before entering</li>
                            <li>Understand pricing benchmarks</li>
                            <li>Prepare documents properly</li>
                            <li>Don't just register - plan your entry</li>
                        </ul>
                        <p className="nave-font pb-4">
                            Registration is not the goal. Sales are.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="practical-advice" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Where MSME Ki Baat Comes In */}
                    <div id="where-msme-ki-baat-comes-in" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Where MSME Ki Baat Comes In
                        </h2>
                        <p className="nave-font pb-4">
                            We are not here to just tell you to register on GeM. We help you understand whether GeM is right for your business, what category you should enter, what mistakes to avoid, and how to approach it practically.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="where-msme-ki-baat-comes-in" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Want More Guidance Like This? */}
                    <div id="want-more-guidance-like-this" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Want More Guidance Like This?
                        </h2>
                        <p className="nave-font pb-4">
                            If you want simple, practical MSME guidance - not confusing official language - follow Hemant Chutani / MSME Ki Baat.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>YouTube: MSME Ki Baat</li>
                            <li>Instagram: @hemant_chutani</li>
                            <li>LinkedIn: Hemant Chutani</li>
                        </ul>
                        <p className="nave-font pb-4">
                            We regularly break down MSME registrations, government schemes, and business growth decisions in a simpler way.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="want-more-guidance-like-this" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Need Help Understanding Your Case? */}
                    <div id="need-help-understanding-your-case" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg my-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Need Help Understanding Your Case?
                        </h2>
                        <p className="nave-font pb-4">
                            If you are confused about GeM, not sure whether it fits your business, or stuck in the registration journey, you can message or email us anytime. We will understand your situation, guide you on the right approach, and help you avoid unnecessary mistakes.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="need-help-understanding-your-case" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>
                </section>

                {/* DESKTOP RIGHT SIDEBAR */}
                <aside className="hidden lg:block w-1/2 lg:w-1/4 nave-font py-12">
                    <RelatedBlogs />
                </aside>
            </section>

            {/* MOBILE RELATED BLOGS — Swiper Slider */}
            <aside className="lg:hidden w-full nave-font px-6 pb-8">
                <MobileRelatedBlogs />
            </aside>

            {/* Replaced FaqSection with the new faqs content */}
            <FaqSection faqs={faqs} />
        </main>
    );
};

export default Main;