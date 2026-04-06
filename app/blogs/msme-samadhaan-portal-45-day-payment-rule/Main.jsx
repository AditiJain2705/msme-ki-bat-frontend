"use client";

import FaqSection from "@/components/home/FaqSection";
import WhoShouldApply from "@/components/home/WhoShouldApply"; // This component is not used in the new content, consider removing if not needed elsewhere.
import { Heart, Share2 } from "lucide-react";
import Image from "next/image"; // This component is not used in the new content, consider removing if not needed elsewhere.
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
// Install: npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MobileRelatedBlogs from "@/components/new-home/MobileRelatedBlogs";
import RelatedBlogs from "@/components/new-home/RelatedBlogs";

const sections = [
    { id: "intro", title: "Introduction" },
    { id: "what-is-msme-samadhaan-portal", title: "What Is the MSME Samadhaan Portal?" },
    { id: "45-day-msme-payment-rule", title: "The 45-Day MSME Payment Rule" },
    { id: "section-43bh-changes-everything", title: "Section 43B(h) – Why This Changes Everything" },
    { id: "who-can-use-msme-samadhaan-portal", title: "Who Can Actually Use the MSME Samadhaan Portal?" },
    { id: "what-this-gives-you-as-an-msme", title: "What Does This Actually Give You as an MSME?" },
    { id: "how-to-file-complaint", title: "How to File a Complaint on MSME Samadhaan" },
    { id: "how-to-check-case-status", title: "How to Check Your MSME Samadhaan Case Status" },
    { id: "note-for-buyers", title: "A Note If You're a Buyer Working with MSMEs" },
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

const BLOG_TITLE = "MSME Samadhaan Portal & 45-Day Payment Rule: Recover Delayed Payments Fast";

const faqs = [
    {
        question: (
            <>
                Can I file on MSME Samadhaan without{" "}
                <span className="text-[#FFAF00]">Udyam registration?</span>
            </>
        ),
        answer: "No. You must have Udyam registration to file a complaint on the MSME Samadhaan portal. Without it, the portal will not accept your complaint.",
    },
    {
        question: (
            <>
                How does MSME Samadhaan work – is it{" "}
                <span className="text-[#FFAF00]">litigation?</span>
            </>
        ),
        answer: "It's a facilitated dispute resolution process. While backed by law, it aims for resolution through the MSME Facilitation Council (MSEFC) rather than traditional court litigation, offering a faster and more transparent process.",
    },
    {
        question: (
            <>
                How much interest can I charge on{" "}
                <span className="text-[#FFAF00]">delayed payments?</span>
            </>
        ),
        answer: "If payment is delayed beyond the limit (45 days with agreement, 15 days without), you can charge 3x the RBI bank rate, compounded monthly. This interest is a statutory right and cannot be waived.",
    },
    {
        question: (
            <>
                Does Section 43B(h) apply to all{" "}
                <span className="text-[#FFAF00]">buyers, even small ones?</span>
            </>
        ),
        answer: "Section 43B(h) impacts buyers who delay MSME payments beyond 45 days, leading to loss of tax deduction for the unpaid amount. It applies to any buyer dealing with MSME vendors, regardless of the buyer's size.",
    },
    {
        question: (
            <>
                How to login to{" "}
                <span className="text-[#FFAF00]">MSME Samadhaan?</span>
            </>
        ),
        answer: "You can log in to the MSME Samadhaan portal using your Udyam Registration Number and verify your identity via an OTP sent to your Aadhaar-linked mobile number.",
    },
    {
        question: (
            <>
                Do I need a lawyer to{" "}
                <span className="text-[#FFAF00]">file a complaint?</span>
            </>
        ),
        answer: "No, the process on the MSME Samadhaan portal is designed to be straightforward and can be completed by the business owner themselves without the need for a lawyer. The system is online, transparent, and backed by law.",
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
                <h1 className="text-4xl md:text-[53px] text-center font-semibold md:leading-[59px] font-medium text-[#02443A] max-w-5xl mx-auto font-headline px-2">
                    {BLOG_TITLE}
                </h1>
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

                    {/* Intro */}
                    <div id="intro" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-6 md:mt-12 shadow-lg">
                        <p className="nave-font pb-4">
                            If you run a small business in India, you already know this frustration. You complete the work, raise the invoice, follow up once, follow up again — and somehow the payment still doesn't come. Weeks pass. Sometimes months. And while you're waiting, your rent, salaries, and vendor payments don't wait with you.
                        </p>
                        <p className="nave-font pb-4">
                            The good news is that the government actually has a system to deal with exactly this problem. Most small business owners just don't know it exists — or don't know how to use it. That's what this blog is about.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="intro" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* What Is the MSME Samadhaan Portal? */}
                    <div id="what-is-msme-samadhaan-portal" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            What Is the MSME Samadhaan Portal?
                        </h2>
                        <p className="nave-font pb-4">
                            Think of the MSME Samadhaan portal as your online complaint window against buyers who haven't paid you on time. It was launched by the Ministry of MSME specifically so that registered small businesses – Micro and Small Enterprises – don't have to chase clients endlessly or spend money on lawyers just to get what they're owed.
                        </p>
                        <p className="nave-font pb-4">
                            Before this existed, your options were limited. You could keep following up, hire a lawyer and drag the matter to court, or just write it off and move on. None of those options were great. The Samadhaan portal changed that. The whole process is online, transparent, and backed by law. You file your complaint, upload your documents, and the system takes it from there.
                        </p>
                        <div className="bg-gray-100 p-4 rounded-md my-4">
                            <p className="font-semibold  gap-2">
                                <span>🔗</span> Official Portal: <Link href="https://samadhaan.dcmsme.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">samadhaan.dcmsme.gov.in</Link> – File complaints, track cases, and get resolution through the MSME Facilitation Council (MSEFC). No middlemen. No office visits.
                            </p>
                        </div>
                        <h3 className="font-headline text-2xl md:text-3xl text-[#02443A] font-semibold mb-4">
                            What Can You Do on the MSME Samadhaan Portal?
                        </h3>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>File a delayed payment case against a buyer – completely online</li>
                            <li>Upload your invoices and supporting documents</li>
                            <li>Track your MSME Samadhaan case status in real time</li>
                            <li>Get your case forwarded to the MSE Facilitation Council for legal resolution</li>
                        </ul>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="what-is-msme-samadhaan-portal" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* The 45-Day MSME Payment Rule – What Does It Actually Say? */}
                    <div id="45-day-msme-payment-rule" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            The 45-Day MSME Payment Rule – What Does It Actually Say?
                        </h2>
                        <p className="nave-font pb-4">
                            A lot of people have heard of this rule but aren't sure exactly what it covers. Here's the simple version: under the <span className="font-semibold">MSMED Act, 2006</span>, buyers are legally required to pay MSMEs within a fixed time window. There's no wiggle room — the law sets a hard deadline.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-[#02443A] text-white">
                                        <th className="py-3 px-4 text-left font-semibold">MSME PAYMENT TIMELINE – WHAT THE LAW SAYS</th>
                                        <th className="py-3 px-4 text-left font-semibold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 px-4 border-b border-gray-200">Written agreement exists</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Payment within <span className="font-semibold">45 days</span></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-b border-gray-200">No written agreement</td>
                                        <td className="py-3 px-4 border-b border-gray-200">Payment within <span className="font-semibold">15 days</span></td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">If payment is delayed beyond limit</td>
                                        <td className="py-3 px-4"><span className="font-semibold">3x RBI bank rate</span> — compound interest applies</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="nave-font pb-4">
                            The <span className="font-semibold">MSME late payment interest rate</span> kicks in at three times the RBI bank rate, compounded monthly. And here's the important part – neither the buyer nor you can waive this interest. Once the payment deadline passes, it becomes a statutory right. The buyer has to pay it, whether they like it or not.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4" role="alert">
                            <div className="flex items-center">
                                <span className="text-xl mr-2">💡</span>
                                <p className="font-semibold">Worth knowing:</p>
                            </div>
                            <p>Even if a buyer comes back to you and says "let's settle without the interest," you are not legally required to agree. The compound interest under the MSME payment rule is your right under the law – it cannot be negotiated away once the 45-day window has passed.</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="45-day-msme-payment-rule" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Section 43B(h) – Why This Changes Everything for MSMEs */}
                    <div id="section-43bh-changes-everything" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Section 43B(h) – Why This Changes Everything for MSMEs
                        </h2>
                        <p className="nave-font pb-4">
                            For years, small businesses struggled to get big companies to pay on time because there wasn't enough pain on the buyer's side. Yes, there was interest. But for a large company, paying some extra interest was often cheaper than reorganising their cash flow. So delays continued.
                        </p>
                        <p className="nave-font pb-4">
                            From <span className="font-semibold">April 1, 2024</span>, that changed. A new amendment – <span className="font-semibold">Section 43B(h)</span> of the Income Tax Act — introduced a direct tax consequence for buyers who delay MSME payments beyond 45 days. If a buyer doesn't pay within the deadline, they <span className="font-semibold">cannot claim that payment as a business expense deduction</span> in their tax returns for that financial year. The unpaid amount stays on their books as taxable income.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-[#02443A] text-white">
                                        <th className="py-3 px-4 text-left font-semibold" colSpan="2">SECTION 43B(H) — IMPACT ON BUYERS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 px-4 border-b border-gray-200">Payment made within 45 days</td>
                                        <td className="py-3 px-4 border-b border-gray-200">✓ Full tax deduction allowed</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-b border-gray-200">Payment made after 45 days</td>
                                        <td className="py-3 px-4 border-b border-gray-200">× No deduction that FY — higher taxable income</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">Net effect on buyer</td>
                                        <td className="py-3 px-4">More tax outflow + compound interest liability</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="nave-font pb-4">
                            In simple terms – delay the payment, pay more tax. For large companies that deal with hundreds of MSME vendors, this adds up very quickly. It's the kind of financial consequence that actually gets boardroom attention, which is exactly what the government intended.
                        </p>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="section-43bh-changes-everything" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* Who Can Actually Use the MSME Samadhaan Portal? */}
                    <div id="who-can-use-msme-samadhaan-portal" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            Who Can Actually Use the MSME Samadhaan Portal?
                        </h2>
                        <p className="nave-font pb-4">
                            Before you file anything, it's worth checking whether you qualify. The eligibility is straightforward, but there's one thing that catches a lot of people — you must have <span className="font-semibold">Udyam Registration</span>. Without it, the portal simply won't accept your complaint.
                        </p>

                        <div className="border border-gray-200 rounded-md my-4">
                            <div className="p-4 border-b border-gray-200 flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                <div>
                                    <h3 className="font-semibold">Micro & Small Enterprises with Udyam Registration</h3>
                                    <p className="text-gray-700 text-sm">You must be registered on the Udyam portal. Without Udyam registration, MSME Samadhaan will not accept your complaint.</p>
                                </div>
                            </div>
                            <div className="p-4 border-b border-gray-200 flex items-start">
                                <span className="text-red-600 font-bold text-xl mr-2">×</span>
                                <div>
                                    <h3 className="font-semibold">Traders registered only for priority lending benefits</h3>
                                    <p className="text-gray-700 text-sm">If your Udyam registration was done only for lending benefits and you're classified as a trader, you may not qualify for payment protection.</p>
                                </div>
                            </div>
                            <div className="p-4 flex items-start">
                                <span className="text-green-600 font-bold text-xl mr-2">✓</span>
                                <div>
                                    <h3 className="font-semibold">Companies, LLPs, Partnerships, Proprietors — no size limit</h3>
                                    <p className="text-gray-700 text-sm">Even large corporations are covered under the MSME payment rule. There is no minimum size threshold on the buyer's side.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="who-can-use-msme-samadhaan-portal" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* What Does This Actually Give You as an MSME? */}
                    <div id="what-this-gives-you-as-an-msme" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            What Does This Actually Give You as an MSME?
                        </h2>
                        <p className="nave-font pb-4">
                            Beyond the legal framework, here's what these protections mean practically for your day-to-day business:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <div className=" p-6  pink-white-background ">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-3">💰</span>
                                    <h3 className="font-semibold text-xl">Better Cash Flow</h3>
                                </div>
                                <p>Stop the endless waiting cycle. The 45-day rule gives your business a predictable payment timeline — and legal teeth when buyers ignore it.</p>
                            </div>
                            <div className=" p-6  pink-white-background ">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-3">⚖️</span>
                                    <h3 className="font-semibold text-xl">Full Legal Backing</h3>
                                </div>
                                <p>You're protected under the MSMED Act. Cases resolved by MSEFC are legally enforceable – like a civil court decree.</p>
                            </div>
                            <div className=" p-6  pink-white-background ">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-3">📊</span>
                                    <h3 className="font-semibold text-xl">Complete Transparency</h3>
                                </div>
                                <p>Track every step of your complaint via the MSME Samadhaan case status dashboard. No black boxes, no confusion.</p>
                            </div>
                            <div className=" p-6  pink-white-background ">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl mr-3">🚀</span>
                                    <h3 className="font-semibold text-xl">Faster Resolution</h3>
                                </div>
                                <p>Cases go to MSEFC and are typically resolved within 90 days — far faster than traditional civil courts.</p>
                            </div>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="what-this-gives-you-as-an-msme" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* How to File a Complaint on MSME Samadhaan */}
                    <div id="how-to-file-complaint" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            How to File a Complaint on MSME Samadhaan
                        </h2>
                        <p className="nave-font pb-4">
                            Most business owners expect a government portal to be complicated and time-consuming. This one genuinely isn't. The entire process takes about 15-20 minutes if you have your documents ready. Here's what you do:
                        </p>
                        <ol className="list-inside space-y-4 nave-font">
                            <li>
                                <h3 className="font-semibold text-lg">1. Go to the MSME Samadhaan Portal</h3>
                                <p>Visit <Link href="https://samadhaan.dcmsme.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">samadhaan.dcmsme.gov.in</Link> on any browser.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">2. Enter Your Udyam Registration Number</h3>
                                <p>This is your unique ID from the Udyam portal. Mandatory - you cannot proceed without it.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">3. Verify via OTP</h3>
                                <p>An OTP is sent to your Aadhaar-linked mobile number for identity verification.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">4. Add Buyer Details + Invoice Information</h3>
                                <p>Enter details of the company that owes you money - name, invoice date, amount, and due date.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">5. Upload Your Documents</h3>
                                <p>Attach the original invoice(s), any written agreement, and proof of delivery of goods or services.</p>
                            </li>
                            <li>
                                <h3 className="font-semibold text-lg">6. Submit Your Case</h3>
                                <p>Once submitted, your case is automatically forwarded to the relevant MSME Facilitation Council (MSEFC) for action.</p>
                            </li>
                        </ol>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="how-to-file-complaint" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* How to Check Your MSME Samadhaan Case Status */}
                    <div id="how-to-check-case-status" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl mt-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            How to Check Your MSME Samadhaan Case Status
                        </h2>
                        <p className="nave-font pb-4">
                            Once you've filed, you don't have to wait around wondering what's happening. Log back into the portal with your Udyam registration number and there's a live dashboard that shows you exactly where your case stands – whether it's been received, is under review, or has been scheduled for a hearing before the MSEFC.
                        </p>
                        <p className="nave-font pb-4">
                            This is what the <span className="font-semibold">MSME Samadhaan delayed payment monitoring system</span> is designed to do – keep you in the loop at every stage without requiring you to call anyone or visit an office.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 mb-4" role="alert">
                            <div className="flex items-center">
                                <span className="text-xl mr-2">⏰</span>
                                <p className="font-semibold">How long does resolution take?</p>
                            </div>
                            <p>The ideal timeline is <span className="font-semibold">90 days</span> via the Facilitation Council. In practice, backlogs in some states can extend this to 6–12 months. Filing early with complete documentation significantly speeds things up.</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="how-to-check-case-status" />
                            <ShareButton title={BLOG_TITLE} />
                        </div>
                    </div>

                    {/* A Note If You're a Buyer Working with MSMEs */}
                    <div id="note-for-buyers" className="blog-hero-section px-4 md:px-8 pt-8 rounded-xl my-12 shadow-lg">
                        <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                            A Note If You're a Buyer Working with MSMEs
                        </h2>
                        <p className="nave-font pb-4">
                            This isn't just a read for MSMEs. If your business regularly purchases goods or services from small businesses, Section 43B(h) directly affects your tax position. A lot of companies are still unaware of this — and are unknowingly accumulating both interest liability and reduced deductions. A few simple internal practices can avoid all of that:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 pb-4">
                            <li>Verify MSME/Udyam status before onboarding any new supplier</li>
                            <li>Clearly define payment terms in every vendor agreement</li>
                            <li>Set internal reminders to track 45-day deadlines proactively</li>
                            <li>Keep all documentation ready – invoices, receipts, delivery confirmation</li>
                        </ul>
                        <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 mb-4" role="alert">

                            <p>Delays now cost you two ways — compound interest at 3x RBI rate, AND a higher tax bill because you can't deduct the unpaid amount. Paying MSMEs on time is simply smart financial management now.</p>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 py-4">
                            <HeartButton sectionId="note-for-buyers" />
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

            {/* Replaced FaqSection with the new faqs content */}
            <FaqSection faqs={faqs} />
        </main>
    );
};

export default Main;