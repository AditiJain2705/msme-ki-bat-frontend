"use client";

import FaqSection from "@/components/home/FaqSection";
import { Heart, Share2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MobileRelatedBlogs from "@/components/new-home/MobileRelatedBlogs";
import RelatedBlogs from "@/components/new-home/RelatedBlogs";

const sections = [
    { id: "intro", title: "Introduction" },
    { id: "why-delay-is-serious", title: "Why Delayed Payments Hurt MSMEs?" },
    { id: "what-is-msme-samadhaan-portal", title: "What is MSME Samadhaan Portal?" },
    { id: "45-days-payment-rule", title: "45 Days Payment Rule" },
    { id: "what-happens-on-delay", title: "What Happens on Delay?" },
    { id: "when-to-use-msme-samadhaan", title: "When to Use MSME Samadhaan?" },
    { id: "how-to-file-complaint", title: "How to File a Complaint?" },
    { id: "how-to-login", title: "MSME Samadhaan Login" },
    { id: "case-status", title: "Case Status Verification" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "reality", title: "The Reality Check" },
    { id: "practical-approach", title: "Practical Approach" },
    { id: "msme-ki-baat-help", title: "How We Help" },
    { id: "official-references", title: "Official References" },
];

// Heart button component
const HeartButton = () => {
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

const BLOG_TITLE = "MSME Samadhaan Portal & 45 Days Payment Rule: Simple Guide for Business Owners";

const faqs = [
    {
        question: "MSME Samadhaan kya hai?",
        answer: "Ye delayed payment disputes ko support karne wala government mechanism/platform ecosystem hai. Simple terms mein, this explains how MSME Samadhaan works for delayed-payment cases.",
    },
    {
        question: "45 days rule kya hai?",
        answer: "Buyer ko written agreement ke case mein maximum 45 din ke andar payment karna hota hai. Without agreement, due timeline aur bhi shorter ho sakti hai.",
    },
    {
        question: "Case status kaise check karein?",
        answer: "Portal pe login karke track kar sakte ho. Simple terms mein, yehi MSME Samadhaan case status tracking process hai.",
    },
    {
        question: "Kya Udyam registration zaroori hai?",
        answer: "Valid Udyam Registration practical aur official eligibility context mein important hai; current eligibility/process official portal par verify karna chahiye.",
    },
    {
        question: "Is MSME Samadhaan litigation?",
        answer: "Not exactly in the usual court-case sense. It is a statutory delayed-payment dispute mechanism that may move through the facilitation council process, so users should understand it as a formal legal remedy rather than casual complaint support.",
    },
    {
        question: "How to file MSME Samadhaan complaint?",
        answer: "Check the latest official filing route first, keep buyer details, invoice, pending amount, delivery proof, and agreement or purchase order ready, then proceed through the relevant official portal flow.",
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
                <h1 className="text-4xl md:text-[53px] text-center font-semibold md:leading-[59px] text-[#02443A] max-w-5xl mx-auto font-headline px-2">
                    {BLOG_TITLE}
                </h1>
                <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">
                    Understand delayed payment complaints, 45 days payment rule, case status, login, and what to do next if your payment is stuck.
                </p>
                <div className="flex justify-center mt-8">
                    <Link href="#msme-ki-baat-help" className="bg-[#02443A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#013028] transition-colors">
                        Get Guided Support from MSME Ki Baat
                    </Link>
                </div>
            </section>

            {/* Layout */}
            <section className="flex flex-col md:flex-row gap-2 relative">

                {/* MOBILE TOC */}
                <div className="md:hidden sticky top-14 z-50 bg-white border-b border-gray-300">
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
                    <div className="sticky top-12 mb-12 bg-white p-6 pl-12 rounded-xl pink-white-background">
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

                    {/* Section 2: Problem Intro Block */}
                    <div id="intro" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-6 md:mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            “Payment kab milega?” - sabse badi problem
                        </h2>
                        <p className="nave-font pb-4">
                            Aapne kaam complete kar diya. Material deliver ho gaya. Service finish ho gayi. Invoice bhi bhej diya. Ab bas ek cheez baaki hai - payment. Aur woh aa nahi raha.
                        </p>
                        <p className="nave-font pb-4">
                            Kabhi 20 din, kabhi 2 mahine. Aur jab follow up karo toh answer milta hai: “process mein hai”. Agar aap business chala rahe ho, toh aapko pata hai - ye problem chhoti nahi hoti.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 3: Why It Matters */}
                    <div id="why-delay-is-serious" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSMEs ke liye delay itna serious kyun hai?
                        </h2>
                        <p className="nave-font pb-4">
                            Badi companies ke paas reserves hote hain. Lekin MSMEs? Unka business chalata hai regular cash flow pe. Agar payment delay ho jaye, salary ruk sakti hai, raw material ruk sakta hai, aur business growth slow ho jaati hai.
                        </p>
                        <p className="nave-font pb-4">
                            Isi problem ko solve karne ke liye government ne ek system introduce kiya: MSME Samadhaan ecosystem, jo delayed payment disputes ko track aur resolve karne ke framework ka part hai. Search terms jaise <span className="font-semibold">MSME Samadhaan portal</span>, <span className="font-semibold">MSME Samadhaan delayed payment monitoring system</span>, aur <span className="font-semibold">delayed payment monitoring system</span> isi issue se linked hote hain.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 4: What is MSME Samadhaan? */}
                    <div id="what-is-msme-samadhaan-portal" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSME Samadhaan Portal kya hai? (simple samjho)
                        </h2>
                        <p className="nave-font pb-4">
                            MSME Samadhaan ek government platform hai jo delayed payments ke cases ke liye bana hai. Yahan supplier MSE unit apna dispute raise kar sakti hai aur matter MSE Facilitation Council tak ja sakta hai. Official portal ke hisaab se ye Delayed Payment Monitoring System framework ka part hai. Isi wajah se log isse <span className="font-semibold">MSME Samadhaan portal</span> bhi search karte hain.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 5: 45 Days Rule */}
                    <div id="45-days-payment-rule" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            45 days payment rule kya kehta hai? (MSME 45 days payment rule simple samjho)
                        </h2>
                        <p className="nave-font pb-4">
                            Law ke according, agar written agreement nahi hai toh payment appointed day ke basis par 15 din ke andar due hota hai. Agar agreement hai, toh maximum 45 din tak hi payment period ja sakta hai. Isse zyada delay allowed nahi hai.
                        </p>
                        <p className="nave-font pb-4">
                            Agar buyer 45 din ke baad bhi payment nahi karta, toh delay ka issue serious ho jata hai aur interest liability trigger ho sakti hai.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 6: What Happens on Delay */}
                    <div id="what-happens-on-delay" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Delay hone par kya hota hai?
                        </h2>
                        <p className="nave-font pb-4">
                            Agar payment delay hota hai, buyer ko compound interest dena pad sakta hai. Official provisions ke mutabik yeh interest RBI bank rate ke three times ke basis par apply hota hai. Isi ko kaafi log <span className="font-semibold">MSME late payment interest rate</span> ya <span className="font-semibold">MSME payment rule</span> ke context mein samajhna chahte hain. Yeh sirf request nahi hai - yeh legal protection hai MSEs ke liye.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Additional Sub-Section: When to use MSME Samadhaan */}
                    <div id="when-to-use-msme-samadhaan" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Kab MSME Samadhaan use karna chahiye?
                        </h2>
                        <p className="nave-font pb-4">
                            Har chhoti delay pe case file karna zaroori nahi hota. Lekin agar 45 din cross ho chuke hain, buyer response nahi de raha, aur payment significant amount hai, tab aapko action lena chahiye.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 7: Complaint Process */}
                    <div id="how-to-file-complaint" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSME Samadhaan pe complaint kaise file hoti hai? (how to file MSME Samadhaan)
                        </h2>
                        <p className="nave-font pb-4 bg-yellow-50 p-4 border-l-4 border-yellow-500 rounded-md my-4 shadow-sm text-yellow-900">
                            <strong>Current Note:</strong> Official MSME Samadhaan homepage ab mention karta hai ki new delayed payment applications MSME ODR Portal ke through file ki ja rahi hain. Isliye filing start karne se pehle official portal par latest process verify karna chahiye.
                        </p>
                        <p className="nave-font pb-4">
                            Practical flow simple hai: official portal par jao, MSME Samadhaan login ya relevant filing route samjho, buyer details, invoice details, pending amount aur supporting documents ready rakho.
                        </p>
                        <p className="nave-font pb-4">
                            Usually invoice, delivery proof, aur agreement ya purchase order jaise records useful hote hain. Isse MSME Samadhaan complaint file karne ki preparation strong hoti hai. Yeh matter aage MSE Facilitation Council ke paas ja sakta hai.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 8: MSME Samadhaan Login */}
                    <div id="how-to-login" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSME Samadhaan login kaise kaam karta hai? (how to login in MSME Samadhaan)
                        </h2>
                        <p className="nave-font pb-4">
                            Portal use karne ke liye aapko login ya registration details chahiye hoti hain. Official ecosystem mein Udyam-linked business identity important hoti hai. Isliye valid Udyam Registration ready rakhna practical hai. Simple terms mein, how to register in MSME Samadhaan samajhne ke liye sabse pehle official eligibility aur linked business details verify karni chahiye.
                        </p>
                        <p className="nave-font pb-4">
                            Login ke baad aap complaint-related actions aur case tracking access kar sakte ho.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 9: Case Status */}
                    <div id="case-status" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSME Samadhaan case status kaise check karein?
                        </h2>
                        <p className="nave-font pb-4">
                            Case file karne ke baad aap uska status bhi track kar sakte ho. Portal pe jao, login karo, aur case status section open karo. Wahan se aap dekh sakte ho ki case kis stage pe hai aur kya action liya gaya hai. Isi ko log <span className="font-semibold">MSME Samadhaan case status</span> ke naam se search karte hain.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 10: Common Mistakes */}
                    <div id="common-mistakes" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSMEs yahan sabse zyada galti kahan karte hain?
                        </h2>
                        <p className="nave-font pb-4">
                            Zyada tar log bahut late action lete hain. Sochte rehte hain: “thoda aur wait kar lete hain” aur phir months nikal jaate hain. Dusri problem: documents proper nahi hote. Teesri: case file karke follow-up nahi karte.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 11: The Reality */}
                    <div id="reality" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Reality kya hai? (straight baat)
                        </h2>
                        <p className="nave-font pb-4">
                            Complaint file karte hi payment nahi aata. Lekin pressure create hota hai, legal process start hota hai, aur buyer serious ho jaata hai.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 11 (cont): Practical Advice */}
                    <div id="practical-approach" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Aapko kya karna chahiye? (practical approach)
                        </h2>
                        <p className="nave-font pb-4">
                            Agar payment stuck hai: pehle follow up karo. Phir written reminder bhejo. Aur agar still problem solve nahi hoti, official MSME delayed-payment mechanism use karo aur latest filing route verify karke aage badho.
                        </p>
                        <p className="nave-font pb-4 font-semibold text-gray-800">
                            Matlab: emotional nahi, practical approach rakho.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 12: MSME Ki Baat Guidance */}
                    <div id="msme-ki-baat-help" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            MSME Ki Baat yahan kaise help karta hai?
                        </h2>
                        <p className="nave-font pb-4">
                            Zyada tar business owners ko law samajhne mein problem nahi hoti. Problem hoti hai: “ab next step kya hai?”
                        </p>
                        <p className="nave-font pb-4">
                            Hum yahan help karte hain: situation samajhne mein, sahi decision lene mein, aur galtiyon se bachne mein. Agar aapko aise simple explanations chahiye, aap <strong>MSME Ki Baat by Hemant Chutani</strong> ko follow kar sakte ho. Yahan hum real MSME problems ko simple language mein explain karte hain.
                        </p>
                        <p className="nave-font pb-4">
                            Agar aapka payment stuck hai aur aap confused ho ki kya karein, guided clarity ke liye humse connect kar sakte ho.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 13: Official References Block */}
                    <div id="official-references" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg bg-gray-50 border border-gray-200">
                        <h3 className="font-headline text-2xl md:text-3xl text-[#02443A] font-semibold mb-4">
                            Official Reference Note
                        </h3>
                        <p className="nave-font pb-4 text-sm text-gray-700">
                            For legal accuracy and latest filing process, readers should verify the current official process on the portals below before taking action:
                        </p>
                        <ul className="list-none space-y-2 pb-4 text-sm">
                            <li><span className="font-semibold text-gray-800">MSME Samadhaan official portal:</span> <Link href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://samadhaan.msme.gov.in/</Link></li>
                            <li><span className="font-semibold text-gray-800">MSME ODR portal for new applications:</span> <Link href="https://odr.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://odr.msme.gov.in/</Link></li>
                            <li><span className="font-semibold text-gray-800">Ministry of MSME FAQ:</span> <Link href="https://msme.gov.in/faqs/q33-what-are-guidelines-delayed-payment-dues-mse-borrowers" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://msme.gov.in/faqs/...</Link></li>
                            <li><span className="font-semibold text-gray-800">MSMED Act, 2006 (official text):</span> <Link href="https://www.indiacode.nic.in/bitstream/123456789/2013/3/A2006-27.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PDF Link</Link></li>
                            <li><span className="font-semibold text-gray-800">Official Udyam Registration portal:</span> <Link href="https://www.udyamregistration.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.udyamregistration.gov.in/</Link></li>
                        </ul>
                    </div>

                    {/* Section 14: Disclaimer Block */}
                    <div className="blog-hero-section px-4 md:px-8 py-6 rounded-xl mt-6 shadow-sm border border-gray-300 text-gray-600 text-xs text-justify">
                        <strong className="block mb-2 text-sm text-gray-800">Disclaimer</strong>
                        <p>
                            MSME Ki Baat acts as an informational and guidance platform for Indian businesses. (MSME Ki Baat ek informational aur guidance platform hai.) Sabhi official complaints, decisions aur legal actions government authorities aur official portals ke through process hote hain. Filing route, eligibility, aur portal workflow time ke saath update ho sakte hain, isliye official source ko final reference maana jaye. All official registrations, complaints, dispute handling, and final decisions are processed by the relevant government authorities and portals as per their official rules and procedures. Because official filing routes and portal workflows may change, users should verify the latest process on the official Ministry / portal links before filing a case.
                        </p>
                    </div>

                </section>

                {/* DESKTOP RIGHT SIDEBAR */}
                <aside className="hidden lg:block w-1/2 lg:w-1/4 nave-font py-12">
                    <RelatedBlogs />
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
                    <MobileRelatedBlogs />
                </Swiper>
            </aside>

            {/* FaqSection with new FAQs content */}
            <FaqSection faqs={faqs} />
        </main>
    );
};

export default Main;