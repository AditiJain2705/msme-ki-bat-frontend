import React from 'react';
import FlowerIcon from './FlowerIcon';

const WhyJoinSection = () => {
    const benefits = [
        {
            id: '01',
            title: "Clarity in 3–8 minutes",
            text: (
                <>
                    Har episode short, crisp, aur directly applicable.

                </>
            ),
        },
        {
            id: '02',
            title: "Facts-first, no hype",
            text: (
                <>
                    Official sources, simple breakdowns, real-world logic.

                </>
            ),
        },
        {
            id: '03',
            title: "Execution frameworks",
            text: (
                <>
                    Funding readiness, financial hygiene, compliance checklist, growth systems - step-by-step.
                </>
            ),
        },
    ];

    return (
        <section className="relative w-full py-12 px-6 md:px-12 bg-cover bg-center" style={{ backgroundImage: "url('/home/why-join-bg.png')" }}>



            <div className="max-w-6xl mx-auto  py-10 rounded-sm">
                {/* Header */}
                <div className="flex items-center gap-1 mb-10">
                    <FlowerIcon color='#f15a5a' size={80} />
                    <h2 className="text-[#0c355a] text-4xl font-medium  md:text-6xl  uppercase citrus-gothic">
                        Why You Should Join
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="flex gap-4">
                            <span className="text-[#0c355a] text-6xl font-black leading-none opacity-90 citrus-gothic">
                                {benefit.id}
                            </span>
                            <p className="text-[#0c355a] text-lg leading-relaxed font-medium nave-font">
                                <span><strong>{benefit.title} </strong></span><br />
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



        </section>
    );
};

export default WhyJoinSection;