import React from 'react';

const ProgramStructure = () => {
    return (
        <section id="structure-timeline" className="relative  bg-white min-h-screen px-6 py-6 md:py-12 md:px-[4rem] md:py-16 lg:pb-[8rem] citrus-gothic" style={{ backgroundImage: "url('/home/program-timeline-bg.png')" }}>
            <div className="max-w-6xl mx-auto">
                {/* Heading Module */}
                <p className="font-rough text-[#02443A] text-[36px] md:text-[60px] lg:text-[70px] leading-[48px] md:leading-[80px] font-medium md:absolute top-[3rem] lg:top-[6rem] md:left-[8rem] lg:left-[11rem] w-full md:w-auto text-center md:text-start">Program Structure <br className='' />&amp; <span className="text-[#F63A49]">Timeline</span></p>

                {/* Red Border Module */}
                <div className="hidden md:block red-border" style={{ backgroundImage: "url('/home/program-line-structure.png')" }}></div>

                {/* All Card Module */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
                    {/* ========== STAGE 1 ========== */}
                    <div className="flex flex-col md:items-center mb-44 md:mb-0">
                        <div className="h-[1rem] md:h-[21.5rem] md:block"></div>

                        {/* Badge */}
                        <div className="relative w-[360px] max-w-full flex items-center justify-center">
                            <img src="/home/green-mask.png" alt="badge" className="w-[260px] md:w-auto h-auto select-none pointer-events-none" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[999]">
                                <span className="font-rough uppercase text-[#F3DFAC] text-[32px] md:text-2xl lg:text-[38px] font-semibold leading-[36px] md:leading-[42px]">Stage 1:</span>
                                <span className="font-rough uppercase text-[#F63A49] text-[32px] md:text-2xl lg:text-[34px] font-semibold leading-[36px] md:leading-[38px] lg:mt-1">Explorer</span>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="mt-6 relative w-full md:w-[360px] md:max-w-full flex items-center justify-center" >
                            <div className="absolute top-0 flex flex-col items-center justify-center text-center md:mt-10">
                                <h3 className="font-rough text-[#02443A] text-center font-medium uppercase text-[28px] leading-[38px] mb-4">{`{Episode Format}`}</h3>

                                <ul className="space-y-4 text-textInk leading-relaxed ">
                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage1_item1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage1_item1)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage1_item1)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage1_item1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage1_item1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage1_item1)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage1_item1)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage1_item1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">What is the system? (schemes, funding, compliance)
                                        </span>
                                    </li>

                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage1_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage1_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage1_item2)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage1_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage1_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage1_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage1_item2)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage1_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Myths vs reality - fact-based</span>
                                    </li>

                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage1_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage1_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage1_item2)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage1_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage1_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage1_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage1_item2)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage1_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">One clear takeaway
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* ========== STAGE 2 ========== */}
                    <div className="flex flex-col items-center mb-40 md:mb-0">
                        <div className="h-0 md:h-[13.5rem]"></div>

                        {/* Badge */}
                        <div className="relative w-[360px] max-w-full flex items-center justify-center">
                            <img src="/home/green-mask.png" alt="badge" className="w-[260px] md:w-auto h-auto select-none pointer-events-none" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[999]">
                                <span className="font-rough uppercase text-[#F3DFAC] text-[32px] md:text-2xl lg:text-[38px] font-semibold leading-[36px] md:leading-[42px]">Stage 2:</span>
                                <span className="font-rough uppercase text-[#F63A49] text-[32px] md:text-2xl lg:text-[34px] font-semibold leading-[36px] md:leading-[38px] lg:mt-1">Fellow</span>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="mt-6 relative w-[360px] max-w-full flex items-center justify-center">
                            <div className="absolute top-0 flex flex-col items-center justify-center text-center z-[999] md:mt-10">
                                <h3 className="font-rough text-[#02443A] text-center font-medium uppercase text-[28px] leading-[38px] mb-4">{`{Next Episodes}`}</h3>

                                <ul className="space-y-4 text-textInk leading-relaxed">
                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage2_item1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage2_item1)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage2_item1)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage2_item1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage2_item1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage2_item1)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage2_item1)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage2_item1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Funding-ready MSME framework</span>
                                    </li>

                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage2_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage2_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage2_item2)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage2_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage2_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage2_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage2_item2)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage2_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Documents, hygiene, process
                                        </span>
                                    </li>
                                    <li className="flex gap-4 items-center">
                                        <div className="block md:hidden">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_392_58_mobile_stage2_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                                    <rect width="15.9459" height="16" fill="url(#pattern0_392_58_mobile_stage2_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_392_58_mobile_stage2_item2)">
                                                    <rect x="-1.33301" y="-2.22266" width="21.3333" height="19.5556" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_392_58_mobile_stage2_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <div className="hidden md:block">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_284_957_desktop_stage2_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                    <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage2_item2)"></rect>
                                                </mask>
                                                <g mask="url(#mask0_284_957_desktop_stage2_item2)">
                                                    <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                                </g>
                                                <defs>
                                                    <pattern id="pattern0_284_957_desktop_stage2_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                        <use transform="scale(0.00338983 0.00337838)"></use>
                                                    </pattern>
                                                </defs>
                                            </svg>
                                        </div>

                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Bank perspective & eligibility
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ========== STAGE 3 ========== */}
                    <div className="flex flex-col items-center mb-28 md:mb-0">
                        <div className="h-0 md:h-[5rem]"></div>

                        {/* Badge */}
                        <div className="relative w-[360px] max-w-full flex items-center justify-center">
                            <img src="/home/green-mask.png" alt="badge" className="w-[260px] md:w-auto h-auto select-none pointer-events-none" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-[999]">
                                <span className="font-rough uppercase text-[#F3DFAC] text-[32px] md:text-2xl lg:text-[38px] font-semibold leading-[36px] md:leading-[42px]">Stage 3:</span>
                                <span className="font-rough uppercase text-[#F63A49] text-[32px] md:text-2xl lg:text-[34px] font-semibold leading-[36px] md:leading-[38px] lg:mt-1">Core Fellow</span>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="mt-6 relative w-[360px] max-w-full flex items-center justify-center">
                            <div className="absolute top-0 flex flex-col items-center justify-center text-center z-[999] md:mt-10">
                                <h3 className="font-rough text-[#02443A] text-center font-medium uppercase text-[28px] leading-[38px] mb-4">{`{Ongoing}`}</h3>

                                <ul className="space-y-4 text-textInk leading-relaxed">
                                    <li className="flex gap-4 items-center">
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_284_957_desktop_stage3_item1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage3_item1)"></rect>
                                            </mask>
                                            <g mask="url(#mask0_284_957_desktop_stage3_item1)">
                                                <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                            </g>
                                            <defs>
                                                <pattern id="pattern0_284_957_desktop_stage3_item1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use transform="scale(0.00338983 0.00337838)"></use>
                                                </pattern>
                                            </defs>
                                        </svg>
                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Sector-wise deep dives</span>
                                    </li>

                                    <li className="flex gap-4 items-center">
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_284_957_desktop_stage3_item2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage3_item2)"></rect>
                                            </mask>
                                            <g mask="url(#mask0_284_957_desktop_stage3_item2)">
                                                <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                            </g>
                                            <defs>
                                                <pattern id="pattern0_284_957_desktop_stage3_item2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use transform="scale(0.00338983 0.00337838)"></use>
                                                </pattern>
                                            </defs>
                                        </svg>
                                        <span className="nave-font text-left nave-font text-[16px] md:text-[19px] leading-[20px] md:leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Real MSME stories + fixes</span>
                                    </li>

                                    <li className="flex gap-4 items-center">
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_284_957_desktop_stage3_item3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
                                                <rect width="28.7027" height="28.8" fill="url(#pattern0_284_957_desktop_stage3_item3)"></rect>
                                            </mask>
                                            <g mask="url(#mask0_284_957_desktop_stage3_item3)">
                                                <rect x="-2.40039" y="-4" width="38.4" height="35.2" fill="#02443A"></rect>
                                            </g>
                                            <defs>
                                                <pattern id="pattern0_284_957_desktop_stage3_item3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use transform="scale(0.00338983 0.00337838)"></use>
                                                </pattern>
                                            </defs>
                                        </svg>
                                        <span className="text-left nave-font text-[19px] leading-[22px] text-[#1A1A1A] tracking-[0.017em]">Templates, checklists, SOPs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="h-[3rem] md:block hidden"></div>

                {/* Title Module */}
                <div className="relative inline-block w-full pt-44 lg:pt-24">
                    <p className="text-center md:text-right font-rough uppercase text-[36px] md:text-[60px] lg:text-[70px] leading-[48px] md:leading-[80px] text-[#02443A]">
                        WHAT WILL YOU GET FROM <br /> THIS
                        <span className="text-[#E49800]"> CHANNEL?</span>
                    </p>
                </div>


                {/* What Bharat Fellow Module (WEB MODULE) */}
                <div className="hidden lg:block py-12">
                    <div className="max-w-5xl mx-auto px-6">
                        {/* Card 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-1.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="relative pt-8">
                                {/* <div className="program-border1 "></div> */}

                                <p className="font-rough text-[#02443A] text-[42px] leading-[54px] font-medium">
                                    Funding clarity

                                </p>

                                <p className="nave-font text-[18px] leading-[30px] text-[#02443A] max-w-xl mt-6">
                                    Government schemes ka core concept, credit support vs subsidy, eligibility ka real meaning.

                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
                            <div className="relative">
                                {/* <div className="program-border2 "></div> */}

                                <p className="font-rough text-[#02443A] text-[42px] leading-[54px] font-medium">
                                    Execution clarity

                                </p>

                                <p className="nave-font text-[18px] leading-[30px] text-[#02443A] max-w-xl  max-w-xs pt-6">
                                    Financial hygiene, documentation readiness, process basics - so you stop guessing.

                                </p>
                            </div>

                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-2.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-3.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="relative">
                                {/* <div className="program-border3 "></div> */}

                                <p className="font-rough text-[#02443A] text-[42px] leading-[54px] font-medium ">
                                    Market & growth clarity

                                </p>

                                <p className="nave-font text-[18px] leading-[30px] text-[#02443A] max-w-xl mt-6">
                                    Pricing, positioning, sales basics, compliance, digital presence — in practical steps.

                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
                            <div className="relative">
                                {/* <div className="program-border4 "></div> */}

                                <p className="font-rough text-[#02443A] text-[42px] leading-[54px] font-medium">
                                    Community-driven topics

                                </p>

                                <p className="nave-font text-[18px] leading-[30px] text-[#02443A] max-w-xl pt-6 pr-6">
                                    Aapke questions se topics pick honge - jahan confusion sabse zyada hai.

                                </p>
                            </div>

                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-2.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What Bharat Fellow Module (MOBILE MODULE) */}
                <div className="block lg:hidden py-6 md:py-12">
                    <div className="max-w-5xl mx-auto md:px-6">
                        {/* Card 1 */}
                        <div className="grid md:grid-cols-2  gap-6 items-center">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-1.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>



                            <div className="relative">
                                {/* <div className="hidden md:block program-border1"></div> */}

                                <p className="text-center md:text-left font-rough text-[#02443A] text-[24px] md:text-3xl lg:text-[42px] leading-[34px] lg:leading-[54px] font-medium">
                                    Conduct at least 10<span className="text-[#F63A49]"> weekly user tests </span>(WhatsApp Co-pilot)
                                </p>
                                <img src="/home/border-mobile-1.png" className="pt-[1rem] pb-2 w-[100%]" alt="border-mobile-1" />
                                <p className="text-center md:text-left nave-font text-[16px] md:text-[18px] leading-[20px] md:leading-[30px] text-[#02443A] max-w-xl mt-6">
                                    Gather <span className="text-[#F63A49]">real-time feedback from entrepreneurs </span>in smaller cities to refine the product and make it an indispensable tool for their growth
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="grid md:grid-cols-2  gap-6 items-center mt-14">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-2.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>



                            <div className="relative">

                                <p className="text-center md:text-left font-rough text-[#02443A] text-[24px] text-3xl lg:text-[42px] leading-[34px] lg:leading-[54px] font-medium">
                                    Produce <span className="text-[#F63A49]"> 2–3 weekly <br /></span>pieces of social content
                                </p>
                                <img src="/home/border-mobile-2.png" className="pt-[1rem]  w-[100%]" alt="border-mobile-2" />
                                <p className="text-center md:text-left nave-font text-[16px] md:text-[18px] leading-[20px] md:leading-[30px] text-[#02443A] max-w-xl mt-3">
                                    Share actionable <span className="text-[#F63A49]">insights, success stories, and resources </span>that drive visibility and inspire more entrepreneurs to&nbsp;take&nbsp;the&nbsp;leap
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="grid md:grid-cols-2  gap-6 items-center mt-14">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-3.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>



                            <div className="relative">
                                {/* <div className="hidden md:block program-border1"></div> */}

                                <p className="text-center md:text-left font-rough text-[#02443A] text-[24px] text-3xl lg:text-[42px] leading-[34px] lg:leading-[54px] font-medium">
                                    Map startup hubs, activate local <span className="text-[#F63A49]"> 'Bharat Clubs'</span>
                                </p>
                                <img src="/home/border-mobile-3.png" className="pt-[1rem]  w-[100%]" alt="border-mobile-3" />
                                <p className="text-center md:text-left nave-font text-[16px] md:text-[18px] leading-[20px] md:leading-[30px] text-[#02443A] max-w-xl mt-3">
                                    Gather <span className="text-[#F63A49]">real-time feedback from entrepreneurs </span>in smaller cities to refine the product and make it an indispensable tool for their growth
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="grid md:grid-cols-2  gap-6 items-center mt-14">
                            <div className="relative flex items-center justify-center">
                                <div className="w-full max-w-[520px] overflow-hidden">
                                    <img src="/home/fellow-product-2.png" alt="Social content visual" className="w-full h-full object-cover" />
                                </div>
                            </div>



                            <div className="relative">
                                {/* <div className="hidden md:block program-border1" ></div> */}

                                <p className="text-center md:text-left font-rough text-[#02443A] text-[24px] text-3xl lg:text-[42px] leading-[34px] lg:leading-[54px] font-medium">
                                    Collect <span className="text-[#F63A49]"> entrepreneur stories, challenges,<br className='md:block hidden' /></span>and <span className="text-[#F63A49]">quotes.</span>
                                </p>
                                <img src="/home/border-mobile-4.png" className="pt-[1rem]  w-[100%]" alt="border-mobile-4" />
                                <p className="text-center md:text-left nave-font text-[16px] md:text-[18px] leading-[20px] md:leading-[30px] text-[#02443A] max-w-xl mt-3">
                                    Capture authentic voices from the ground to spotlight their journeys, address their needs, and <span className="text-[#F63A49]">shape the future of&nbsp;the&nbsp;ecosystem </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramStructure;