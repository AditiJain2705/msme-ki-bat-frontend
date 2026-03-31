const TAGS = ["The Tatas", "Textile History", "Banking Roots"];

export default function HeritageAnalysis() {
    return (
        <section className="px-6 lg:px-0 pb-4  max-w-6xl mx-auto">
            <div className="bg-primary text-on-primary p-6 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="heritage-pattern-strip absolute inset-0 opacity-10" />
                <div className="relative z-10">
                    <h5 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold mb-2 italic">
                        Verified Heritage Analysis
                    </h5>
                    <p className="text-primary-fixed-dim text-sm md:text-lg mb-4">
                        Deep dives into the families and institutions that built the backbone of modern India.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {TAGS.map((tag) => (
                            <span
                                key={tag}
                                className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[11px] md:text-sm font-bold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}