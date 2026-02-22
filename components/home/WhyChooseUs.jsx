import Image from "next/image";
import FlowerIcon from "./FlowerIcon";
import WhyJoinSection from "./WhyJoinSection";

const WhyChooseUs = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/home/blue-background.webp"   // <-- your blue background image path
                    alt="Background"
                    fill
                    priority
                    className=""
                />
            </div>

            <div className="container max-w-6xl citrus-gothic mx-auto flex flex-col items-center gap-10 px-6 py-20 md:flex-row md:pt-20 md:pb-14">

                {/* LEFT CONTENT */}
                <div className="w-full md:w-1/2 text-white">
                    <h2 className="text-4xl font-medium  md:text-6xl">
                        WHY THE <span className="text-yellow-400">BHARAT</span>
                        <br />
                        <span className="text-yellow-400">FELLOWSHIP?</span>
                    </h2>

                    <div className="mt-8">
                        <h3 className="flex items-center gap-1 text-3xl font-medium text-pink-400">
                            <FlowerIcon color="#fb64b6" /> WHY NOW?
                        </h3>

                        <p className="mt-4 text-lg leading-relaxed text-gray-100 nave-font">
                            Entrepreneurs in smaller Indian cities need more than inspiration—
                            they need practical <span className="text-yellow-400">support</span>,{" "}
                            <span className="text-yellow-400">local advocates</span>, and access to{" "}
                            <span className="text-yellow-400">real resources</span>. Fellows bridge
                            that gap by engaging directly with local startup communities and
                            sharing their stories broadly.
                        </p>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full md:w-1/2 hidden md:flex justify-center md:justify-end.">
                    <div className="relative w-[90%] max-w-[500px] ">
                        <Image
                            src="/home/fellow-program-users.webp"  // <-- your right side image path
                            alt="Fellowship"
                            width={600}
                            height={500}
                            className=""
                        />
                    </div>
                </div>

            </div>
            <WhyJoinSection />
            <div className="w-full flex justify-center">
                <button className="citrus-gothic rounded-full bg-[#FFAF00] px-10 py-3 text-lg font-medium uppercase tracking-wide text-[#02443A] shadow-lg transition-all hover:bg-[#FF8C00] hover:shadow-xl sm:px-12 sm:py-5 sm:text-xl lg:px-14 lg:py-4 lg:text-2xl my-10">
                    Apply for the Program
                </button>
            </div>

        </section>
    );
};

export default WhyChooseUs;
