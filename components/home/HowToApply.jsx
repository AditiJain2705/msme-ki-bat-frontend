"use client";

import Image from "next/image";

const HowToApply = () => {
    return (
        <>
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:block nave-font">
                <section className="relative min-h-auto pink-background py-12 md:pt-[7rem] md:pb-[8rem]">

                    {/* Left Floating Image */}
                    <div className="hidden lg:block">
                        <Image
                            src="/home/group-photo.webp"
                            alt="Group"
                            width={372}
                            height={400}
                            className="absolute top-[5rem] left-0 rotate-[-3deg] w-[372px] h-auto"
                        />
                    </div>

                    <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-start md:grid-cols-3 pl-8 lg:pl-[8rem]">

                        <div className="how-to-apply-border-line"></div>

                        {/* ========== STAGE 1 ========== */}
                        <div className="flex flex-col items-center">

                            {/* Heading */}
                            <div className="relative flex w-full items-start justify-start">


                                <p className="left-1/5 lg:left-1/2 relative w-full citrus-gothic text-[60px] leading-[80px] uppercase text-[#02443A]">
                                    How to<br />
                                    <span className="text-[#F63A49]">PARTICIPATE ?</span>
                                </p>
                            </div>

                            <div className="h-[5.5rem]" />

                            {/* Badge */}
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/home/green-mask.png"
                                    alt="badge"
                                    width={250}
                                    height={120}
                                    className="pointer-events-none h-[120px] w-[250px] object-contain select-none"
                                />
                                <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center px-6">
                                    <span className="citrus-gothic text-[32px] font-semibold uppercase leading-[40px] text-[#F3DFAC]">
                                        Step - 1
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 max-w-[320px] pl-[2.5rem] text-left font-nave-medium text-[18px] leading-[28px] text-[#02443A] md:text-[20px]">
                                <p><strong>Watch an episode
                                </strong><br />Start with the latest or the “Funding Schemes” playlist.
                                </p>
                            </div>
                        </div>

                        {/* ========== STAGE 2 ========== */}
                        <div className="flex flex-col items-center">
                            <div className="h-[8.5rem]" />

                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/home/green-mask.png"
                                    alt="badge"
                                    width={250}
                                    height={120}
                                    className="pointer-events-none h-[120px] w-[250px] object-contain select-none"
                                />
                                <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center px-6">
                                    <span className="citrus-gothic text-[32px] font-semibold uppercase leading-[40px] text-[#F3DFAC]">
                                        Step - 2
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 max-w-[280px] pl-[2.5rem] text-left font-nave-medium text-[18px] leading-[28px] text-[#02443A] md:text-[20px]">
                                <p><span>Send your question / topic
                                </span><br />Comment or submit topic request (funding, compliance, growth, etc.)
                                </p>
                            </div>
                        </div>

                        {/* ========== STAGE 3 ========== */}
                        <div className="flex flex-col items-center">
                            <div className="h-[2rem]" />

                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/home/green-mask.png"
                                    alt="badge"
                                    width={250}
                                    height={120}
                                    className="pointer-events-none h-[120px] w-[250px] object-contain select-none"
                                />
                                <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center px-6">
                                    <span className="citrus-gothic text-[32px] font-semibold uppercase leading-[40px] text-[#F3DFAC]">
                                        Step - 3
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 max-w-[280px] text-left font-nave-medium text-[18px] leading-[28px] text-[#02443A] md:text-[20px]">
                                <p>
                                    <span>Get the next playbook
                                    </span><br />
                                    We’ll cover your topics with research + practical next steps.

                                </p>

                                {/* <ul className="mt-4 space-y-2 text-[16px] leading-[26px] md:text-[18px]">
                                    <li className="flex gap-2">
                                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[#0B4B3D]" />
                                        <span>
                                            Your research on{" "}
                                            <span className="text-[#F63A49]">
                                                Startup India mission
                                            </span>.
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[#0B4B3D]" />
                                        <span>
                                            Ideas for supporting{" "}
                                            <span className="text-[#F63A49]">
                                                Tier 2/3 founders
                                            </span>.
                                        </span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="mt-[6px] h-2 w-2 rounded-full bg-[#0B4B3D]" />
                                        <span>
                                            Why you’re a{" "}
                                            <span className="text-[#F63A49]">
                                                great fit
                                            </span>.
                                        </span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* ================= MOBILE ================= */}
            <div className="block md:hidden">
                <Image
                    src="/home/how-to-apply-mobile.webp"
                    alt="How to Apply"
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                />
            </div>
        </>
    );
};

export default HowToApply;  