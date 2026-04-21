"use client";

import FaqSection from "@/components/home/FaqSection";
import { Heart, Share2 } from "lucide-react";
import Image from "next/image"; // Retaining for now, but not used in this specific blog content.
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RelatedBlogs from "@/components/new-home/RelatedBlogs";
import MobileRelatedBlogs from "@/components/new-home/MobileRelatedBlogs";
import AuthorCard from "@/components/new-home/AuthorCard";
import { IoPersonCircleOutline } from "react-icons/io5";
import Disclaimer from "@/components/new-home/Disclaimer";

const sections = [
    { id: "intro", title: "Introduction" },
    { id: "what-is-msme-toll-free-number", title: "What is the MSME toll free number?" },
    { id: "official-msme-support-options", title: "Official MSME support options you should know" },
    { id: "when-to-use-msme-helpline", title: "When should you use MSME helpline or complaint support?" },
    { id: "which-msme-support-option", title: "Which MSME support option should you use?" },
    { id: "what-to-keep-ready", title: "What should you keep ready before calling or raising a complaint?" },
    { id: "common-problems-msmes-face", title: "Common problems MSMEs face while seeking help" },
    { id: "simple-practical-advice", title: "Simple practical advice" },
    { id: "how-msme-ki-baat-can-help", title: "How MSME Ki Baat can help" },
    { id: "follow-msme-ki-baat", title: "Follow MSME Ki Baat for more practical MSME guidance" },
    { id: "conclusion", title: "Conclusion" },
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

const BLOG_TITLE = "MSME Toll Free Number 2026: Official Helpline, Complaint Support and MSME Help Guide";

const faqs = [
    {
        question: (
            <>
                What is the MSME{" "}
                <span className="text-[#FFAF00]">toll free number?</span>
            </>
        ),
        answer: "The best-known MSME toll-free support number is 1800-180-6763, launched as the Udyami Helpline for enterprise guidance, schemes, loans, and complaint facilitation.",
    },
    {
        question: (
            <>
                Can I complete MSME{" "}
                <span className="text-[#FFAF00]">registration by phone?</span>
            </>
        ),
        answer: "Usually, no. A helpline can guide you, but the actual registration or process usually has to be completed through the official digital system.",
    },
    {
        question: (
            <>
                Where should I complain if my{" "}
                <span className="text-[#FFAF00]">payment is delayed?</span>
            </>
        ),
        answer: "For delayed-payment matters, the Samadhaan system now directs new filings to the MSME ODR portal.",
    },
    {
        question: (
            <>
                What is the CHAMPIONS{" "}
                <span className="text-[#FFAF00]">portal used for?</span>
            </>
        ),
        answer: "The CHAMPIONS portal is an MSME support and grievance platform meant to help solve problems, guide users, and provide a one-stop support approach.",
    },
    {
        question: (
            <>
                What should I keep ready before{" "}
                <span className="text-[#FFAF00]">asking for MSME support?</span>
            </>
        ),
        answer: "Keep your Udyam details, business information, documents, invoice details, and a short written summary of the issue ready.",
    },
    {
        question: (
            <>
                Can MSME Ki Baat help me understand the{" "}
                <span className="text-[#FFAF00]">right support route?</span>
            </>
        ),
        answer: "Yes. MSME Ki Baat can help simplify the topic, explain what each support channel is meant for, and guide you on the next practical step.",
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
                <Link
                    href="https://www.linkedin.com/in/hemant-chutani-a2974b117/"
                    target="_blank"
                    className=" flex items-center text-sm justify-center gap-2 text-gray-600 hover:text-blue-700 underline transition mt-6       "
                >
                    <IoPersonCircleOutline className="text-base" />
                    By Hemant Chutani
                </Link>
            </section>

            {/* Layout */}
            <section className="flex flex-col md:flex-row gap-2 relative">

                {/* MOBILE TOC */}
                <div className="md:hidden sticky top-16 z-50 bg-white border-b border-gray-300">
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
                            If you are searching for the <span className="font-semibold">MSME toll free number</span>, you are probably stuck somewhere - registration, grievance, delayed payment, or general business support.
                        </p>
                        <p className="nave-font pb-4">
                            The good news is that there are official MSME support channels available. The Ministry of MSME's older <span className="font-semibold">Udyami Helpline</span> toll-free number is <span className="font-semibold">1800-180-6763</span>, launched to guide entrepreneurs on setting up enterprises, loans, project profiles, schemes, and complaints. The Ministry also runs CHAMPIONS and other grievance systems for problem resolution.
                        </p>
                        <h3 className="font-headline text-2xl md:text-3xl text-[#02443A] font-semibold mb-4">
                            In this guide, you will understand:
                        </h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>the official MSME support options</li>
                            <li>which portal to use for which problem</li>
                            <li>what to keep ready before asking for help</li>
                            <li>when you should escalate beyond a helpline</li>
                        </ul>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="intro" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* What is the MSME toll free number? */}
                    <div id="what-is-msme-toll-free-number" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            What is the MSME toll free number?
                        </h2>
                        <p className="nave-font pb-4">
                            The most commonly cited MSME toll-free support number is <span className="font-semibold">1800-180-6763</span>, introduced as the <span className="font-semibold">Udyami Helpline</span>. It was designed as a national-level single-window support line to guide MSMEs on enterprise setup, bank loans, project profiles, government schemes, and complaint facilitation.
                        </p>
                        <p className="nave-font pb-4">
                            This means the helpline is useful for:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>basic MSME information</li>
                            <li>understanding where to apply</li>
                            <li>getting direction on scheme-related support</li>
                            <li>identifying the correct government channel</li>
                        </ul>
                        <p className="nave-font pb-4">
                            But one thing is important: a helpline is usually a <span className="font-semibold">starting point, not the full solution</span>.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="what-is-msme-toll-free-number" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Official MSME support options you should know */}
                    <div id="official-msme-support-options" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Official MSME support options you should know
                        </h2>
                        <ol className=" space-y-4 nave-font">
                            <li>
                                <h3 className="font-semibold text-lg pb-2">1. Udyami Helpline</h3>
                                <p><span className="font-semibold">Toll-free number: 1800-180-6763</span></p>
                                <p>This was launched to support MSMEs with information on enterprise setup, loans, project profiles, government schemes, and complaints.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">2. Ministry of MSME Contact</h3>
                                <p>The Ministry's official contact page lists <span className="font-semibold">011-23061574</span> as a contact number. This is not a toll-free number, but it is part of the ministry's official contact presence.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">3. MSME CHAMPIONS Portal</h3>
                                <p>The CHAMPIONS portal is positioned as a one-stop MSME support and grievance-handling platform. It is built to help MSMEs voice issues, get guidance, and move toward resolution.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">4. MSME Grievance Monitoring System</h3>
                                <p>The Ministry also runs an online grievance monitoring system for MSME-related issues.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">5. MSME Samadhaan / ODR for delayed payments</h3>
                                <p>For delayed payment disputes, the Samadhaan system now directs new delayed-payment applications to the <span className="font-semibold">MSME ODR portal</span>, which offers end-to-end digital dispute resolution.</p>
                            </li>
                        </ol>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="official-msme-support-options" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* When should you use MSME helpline or complaint support? */}
                    <div id="when-to-use-msme-helpline" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            When should you use MSME helpline or complaint support?
                        </h2>
                        <p className="nave-font pb-4">
                            You should look for MSME support when:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4 ">
                            <li>your Udyam or MSME-related process is confusing</li>
                            <li>you do not know which scheme fits your business</li>
                            <li>you need direction on registration or compliance</li>
                            <li>your grievance is not being addressed properly</li>
                            <li>your payment from a buyer is stuck</li>
                            <li>you need the right government channel, not random advice</li>
                        </ul>
                        <p className="nave-font pb-4">
                            This is exactly why practical blogs like StartupFlora's perform well: they do not just define a topic, they tell the user what the next step should be.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="when-to-use-msme-helpline" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Which MSME support option should you use? */}
                    <div id="which-msme-support-option" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Which MSME support option should you use?
                        </h2>
                        <h3 className="font-semibold text-xl mb-2">Use the helpline when:</h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>you need basic guidance</li>
                            <li>you want to understand where to apply</li>
                            <li>you need first-level support</li>
                        </ul>
                        <h3 className="font-semibold text-xl mb-2">Use CHAMPIONS or grievance systems when:</h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>the issue is not solved by basic guidance</li>
                            <li>you need structured complaint support</li>
                            <li>the matter needs escalation or tracking</li>
                        </ul>
                        <h3 className="font-semibold text-xl mb-2">Use Samadhaan / ODR when:</h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>your payment is delayed</li>
                            <li>you are a micro or small enterprise</li>
                            <li>you need a formal dispute-resolution path</li>
                        </ul>
                        <p className="nave-font pb-4">
                            The Samadhaan system itself states that delayed-payment matters are linked to the MSMED Act and MSE Facilitation Council process, and new filings are now routed to MSME ODR.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="which-msme-support-option" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* What should you keep ready before calling or raising a complaint? */}
                    <div id="what-to-keep-ready" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            What should you keep ready before calling or raising a complaint?
                        </h2>
                        <p className="nave-font pb-4">
                            Before contacting any MSME support system, keep these ready:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>your Udyam registration number</li>
                            <li>your business name</li>
                            <li>mobile number and email</li>
                            <li>invoice or payment details, if payment is stuck</li>
                            <li>buyer or department details</li>
                            <li>a short and clear written summary of the problem</li>
                            <li>screenshots, documents, or complaint references</li>
                        </ul>
                        <p className="nave-font pb-4">
                            This matters because most business owners do not fail due to lack of information. They fail because they approach support channels without a clear case file.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="what-to-keep-ready" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Common problems MSMEs face while seeking help */}
                    <div id="common-problems-msmes-face" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Common problems MSMEs face while seeking help
                        </h2>
                        <ol className=" space-y-4 nave-font">
                            <li>
                                <h3 className="font-semibold text-lg pb-2">1. Calling without clarity</h3>
                                <p>Many businesses call first and think later. That usually leads to confusion.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">2. Using the wrong portal</h3>
                                <p>A registration issue, delayed payment issue, and general grievance issue are not the same.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">3. No follow-up</h3>
                                <p>Even when guidance is given, many applicants do not track the next step properly.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg pb-2">4. No documentation</h3>
                                <p>Without Udyam details, invoice records, or complaint summary, the issue becomes weak.</p>
                            </li>
                        </ol>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="common-problems-msmes-face" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Simple practical advice */}
                    <div id="simple-practical-advice" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Simple practical advice
                        </h2>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>If your issue is basic, use the helpline.</li>
                            <li>If your issue is procedural, use the relevant portal.</li>
                            <li>If your issue affects your business financially, document everything and escalate properly.</li>
                            <li>And if you are confused between options, get clarity first - because the wrong action wastes time.</li>
                        </ul>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="simple-practical-advice" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* How MSME Ki Baat can help */}
                    <div id="how-msme-ki-baat-can-help" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            How MSME Ki Baat can help
                        </h2>
                        <p className="nave-font pb-4">
                            MSME Ki Baat is built for business owners who do not want only surface-level information.
                        </p>
                        <p className="nave-font pb-4">
                            We help MSMEs understand:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>which support channel is actually relevant</li>
                            <li>what documents or details should be prepared</li>
                            <li>what the correct next step is</li>
                            <li>how to avoid common mistakes in registration, grievance, and business support matters</li>
                        </ul>
                        <p className="nave-font pb-4">
                            We aim to explain MSME topics in a simple and direct way so Indian businesses can act with more confidence.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="how-msme-ki-baat-can-help" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Follow MSME Ki Baat for more practical MSME guidance */}
                    <div id="follow-msme-ki-baat" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Follow MSME Ki Baat for more practical MSME guidance
                        </h2>
                        <p className="nave-font pb-4">
                            If you want more updates like this, follow Hemant Chutani / MSME Ki Baat on:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Instagram</li>
                            <li>YouTube: MSME Ki Baat</li>
                            <li>LinkedIn: Hemant Chutani</li>
                        </ul>
                        <p className="nave-font pb-4">
                            For your developer, these are the social links you provided and they can be used in the author/entity setup.
                        </p>
                        <p className="nave-font pb-4">
                            If you need business-side assistance, clarity on the process, or help understanding which MSME route is right for you, you can contact MSME Ki Baat anytime.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="follow-msme-ki-baat" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="blog-hero-section px-4 md:px-8 pt-8 rounded-lg my-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Conclusion
                        </h2>
                        <p className="nave-font pb-4">
                            The MSME toll free number is useful, but it should be seen as the beginning of the solution, not the full solution.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Use the helpline for direction.</li>
                            <li>Use the correct portal for action.</li>
                            <li>Use documentation for escalation.</li>
                        </ul>
                        <p className="nave-font pb-4">
                            That is how MSMEs save time, avoid confusion, and move faster.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="conclusion" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>
                    <AuthorCard />
                    <Disclaimer />
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