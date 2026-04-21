"use client";
import { useState } from "react";
import LeadFormPopup from "../form/Leadformpopup";
const TAGS = ["MSME Support", "Business Tips", "Registrations"];

export default function HeritageAnalysis() {
    const [open, setOpen] = useState(false);

    return (
        <section className="px-6 lg:px-0 pb-4  max-w-6xl mx-auto">
            <div className="bg-primary text-on-primary p-6 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="heritage-pattern-strip absolute inset-0 opacity-10" />
                <div className="relative z-10">
                    <h5 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold mb-2 italic">
                        MSME Knowledge Hub
                    </h5>
                    <p className="text-primary-fixed-dim text-sm md:text-lg mb-4">
                        Clear, simple and practical content on MSME growth, support,registration and real business challenges.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map((tag) => (
                            <button onClick={() => setOpen(true)}
                                key={tag}
                                className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[11px] md:text-sm font-bold"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {open && <LeadFormPopup isOpen={open} onClose={() => setOpen(false)} />}

        </section>
    );
}