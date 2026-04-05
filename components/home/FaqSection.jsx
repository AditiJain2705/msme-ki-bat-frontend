"use client";

import { useState } from "react";
import Image from "next/image";



const FaqSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faqs"
            className="relative min-h-auto faq-blue-background px-6 py-12 md:px-10 md:py-16 pb-[8rem]"
        >
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/home/blue-background.webp"   // <-- your blue background image path
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
            {/* Flower Pattern */}


            <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
                {/* Title */}
                <h2 className="mb-12 font-headline  text-4xl leading-[48px] uppercase text-white md:text-5xl md:leading-[90px]">
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
                                className="flex w-full items-center justify-between px-4 py-3 text-lg font-light   text-white md:text-3xl md:leading-[40px] font-headline text-left"
                            >
                                <span className=" ">
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