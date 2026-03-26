"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: (
            <>
                Episodes kitne{" "}
                <span className="text-[#FFAF00]">time ke hote hain?</span>
            </>
        ),
        answer:
            "Mostly 3–8 minutes. Topic deep ho to special episodes longer ho sakte hain.",
    },
    {
        question: (
            <>
                Kya yeh{" "}
                <span className="text-[#FFAF00]">paid consulting hai?</span>
            </>
        ),
        answer:
            "Nahi. Yeh channel education + clarity ke liye hai. (Agar future mein paid services add hongi, clearly mention hongi.)",
    },
    {
        question: (
            <>
                Kya aap schemes{" "}
                <span className="text-[#FFAF00]">apply karwa dete ho?</span>
            </>
        ),
        answer:
            "Hum \"apply karwaane\" ka claim nahi karte. Hum aapko system samjhate hain aur funding-ready banne ke steps dete hain.",
    },
    {
        question: (
            <>
                Kya yeh content{" "}
                <span className="text-[#FFAF00]">beginners ke liye hai?</span>
            </>
        ),
        answer:
            "Haan — simple language, practical structure. Advanced viewers ko bhi frameworks milenge.",
    },
    {
        question: (
            <>
                Topic suggest{" "}
                <span className="text-[#FFAF00]">kaise karein?</span>
            </>
        ),
        answer:
            "Comment/WhatsApp/Form (jo bhi aap integrate karoge) — \"Topic + your business type + city/state\".",
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