"use client";

import Image from "next/image";

const WhoShouldApply = () => {
    return (
        <div className="min-h-auto green-background px-6 py-6 md:px-10 md:py-16 lg:pb-[8rem] relative">
            {/* Outer Wrapper */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/green-bg.png"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
            </div>
            <div className="min-h-auto flex items-center justify-center px-0 md:px-6 py-8 md:py-12 z-10">

                {/* White Torn Paper Effect */}
                <div
                    className="relative w-full max-w-7xl pink-white-background shadow-xl px-3 md:px-6 py-6 md:py-10 md:px-12"
                    style={{
                        clipPath:
                            "polygon(0 5%, 5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%)",
                    }}
                >
                    <div className="grid items-center gap-8 pl-[1.5rem] lg:grid-cols-2 md:p-[2.5rem]">

                        {/* Left Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="font-rough uppercase text-[36px] leading-[48px] md:text-[60px] lg:text-[80px] md:leading-[90px] citrus-gothic text-[#02443A]">
                                Who should <span className="text-red-600">apply?</span>
                            </h2>

                            <div className="mt-6 w-[490px] max-w-full rotate-[-3deg] lg:block hidden">
                                <Image
                                    src="/home/people.png"
                                    alt="Group"
                                    width={490}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="space-y-6">
                            <ul className="space-y-4">
                                {[
                                    "2nd or 3rd-year undergraduates",
                                    "Passionate about startups, storytelling, grassroots entrepreneurship",
                                    "Active on LinkedIn/social media; comfortable with basic content creation",
                                    "Fluent in Hindi or English, proactive, community-focused",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="nave-font rounded-lg border border-dashed border-[#094A72] bg-[#f4ecd8] px-4 py-3 text-[16px] leading-[18px] text-[#094A72] md:text-[20px] md:leading-[36px]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe9WPAJxJOqL454euQizEezBXmIudFjsA__-K1-2ZODJM17uA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="mt-6 md:mt-10 rounded-full border-2 border-[#094A72] px-10 py-3 font-bold text-[#094A72] transition hover:scale-105 hover:bg-[#094A72] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#094A72] focus:ring-offset-2">
                                    APPLY NOW
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoShouldApply;