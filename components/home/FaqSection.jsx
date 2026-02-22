"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: (
            <>
                What’s the{" "}
                <span className="text-[#FFAF00]">time commitment?</span>
            </>
        ),
        answer:
            "You’ll need to give around 6–8 hours a week for user testing, content creation, and reporting.",
    },
    {
        question: (
            <>
                What’s the required{" "}
                <span className="text-[#FFAF00]">Prior experience?</span>
            </>
        ),
        answer:
            "No prior experience is required — just consistency, curiosity, and willingness to engage with entrepreneurs.",
    },
    {
        question: (
            <>
                Is there any{" "}
                <span className="text-[#FFAF00]">offered stipend?</span>
            </>
        ),
        answer:
            "Yes, a stipend begins from Stage 2, along with an official Fellowship Certificate.",
    },
    {
        question: (
            <>
                What if I am{" "}
                <span className="text-[#FFAF00]">
                    Not 2nd/3rd-year student?
                </span>
            </>
        ),
        answer:
            "You can still apply — the fellowship is open to any student with entrepreneurial intent and commitment.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="relative min-h-auto faq-blue-background px-6 py-12 md:px-10 md:py-16 md:pb-[8rem]"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/home/blue-background.webp"   // <-- your blue background image path
                    alt="Background"
                    fill
                    priority
                    className=""
                />
            </div>
            {/* Flower Pattern */}


            <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
                {/* Title */}
                <h2 className="mb-12 citrus-gothic  text-[48px] leading-[48px] uppercase text-white md:text-[84px] md:leading-[90px]">
                    FAQ<span className="text-[#F5AACB]">s</span>
                </h2>

                {/* Accordion */}
                <div className="space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-md border border-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-4 py-3 text-[16px] font-light uppercase leading-[28px] text-white md:text-[32px] md:leading-[40px]"
                            >
                                <span className="citrus-gothic ">
                                    {faq.question}
                                </span>

                                {/* Arrow Icon */}
                                <span
                                    className={`flex size-6 md:size-12 items-center justify-center transition-transform duration-300 ${openIndex === index
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                >
                                    <svg
                                        className="h-full w-full"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                    >
                                        <path
                                            d="M31.76 18.5791L24 26.3391L16.24 18.5791C15.46 17.7991 14.2 17.7991 13.42 18.5791C12.64 19.3591 12.64 20.6191 13.42 21.3991L22.6 30.5791C23.38 31.3591 24.64 31.3591 25.42 30.5791L34.6 21.3991C35.38 20.6191 35.38 19.3591 34.6 18.5791C33.82 17.8191 32.54 17.7991 31.76 18.5791Z"
                                            fill="#F5AACB"
                                        />
                                    </svg>
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="nave-font border-t border-dashed border-gray-400 px-4 py-4 citrus-gothic  text-[12px] md:text-[16px] lg:text-[18px] md:leading-[30px] text-[#FFA600]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;