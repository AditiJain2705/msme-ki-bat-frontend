"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const words = ["आपके", "हमारे", "भारत के"];

export default function HeroSection() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex];

        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex]);
                setCharIndex(charIndex + 1);
            }, 120);

            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setText("");
                setCharIndex(0);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, 1200);
        }
    }, [charIndex, wordIndex]);

    return (
        <div
            className="  px-4 flex items-center justify-center w-full"
            style={{
                backgroundImage: "url('/new-home/hero-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full max-w-sm text-center pt-14 pb-16 ">

                {/* Typewriter Text */}
                <h2 className="text-4xl font-semibold text-gray-800 mb-6 arya">
                    {text}
                    <span className="animate-pulse">|</span>
                </h2>

                {/* TV Image */}
                <div className="flex items-center justify-center mb-8">
                    <Image
                        src="/new-home/tv-with-logo.webp"
                        alt="TV"
                        width={600}
                        height={600}
                        className="h-60 w-auto "
                    />
                </div>

                {/* Watch Now Button */}
                <div className="w-full flex justify-center">
                    <button className="bg-[#b97a00] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition mb-4 flex items-center gap-2">
                        Watch Now <FaChevronRight />

                    </button>
                </div>


                {/* Subtitle */}
                <h1 className="text-center text-gray-600 mb-4">
                    Seedhi Baat  and Sahi Guidance for Indian MSMEs
                </h1>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <button className="bg-[#4e342e] text-white py-2 rounded-xl shadow-md border-b-6 border-b-[#3e2723]">
                        <div className="text-xs">GOVERNMENT SUPPORT</div>
                        <div className=" arya tracking-wider">सरकारी योजना</div>
                    </button>

                    <button className="bg-[#b97a00] text-white py-2 rounded-xl shadow-md border-b-6 border-b-yellow-700">
                        <div className="text-xs">BUSINESS GROWTH</div>
                        <div className=" arya tracking-wider">व्यापार विकास</div>
                    </button>
                </div>

                <button className="w-full border-2 border-blue-900 py-2 rounded-xl">
                    <div className="text-xs text-gray-700">MARKETING & SALES</div>
                    <div className=" arya tracking-wider">बाजार और बिक्री</div>
                </button>

            </div>

        </div >
    );
}