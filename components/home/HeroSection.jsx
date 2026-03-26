import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/fellowship-banner-bg.webp"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
            </div>



            {/* Main Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-12">


                {/* Content Container */}
                <div className="relative z-20 mx-auto max-w-5xl text-center mt-28">
                    {/* Logo in Cloud */}
                    <div className="mb-8 flex justify-center">
                        <div className="inline-flex flex-col items-center">
                            <Image src={"/home/fellowship-main-logo.webp"} alt='logo' width={300} height={150} />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h3 className="citrus-gothic  text-4xl md:text-[53px] my-6 uppercase md:leading-[59px] font-medium text-[#02443A]">
                        JOIN INDIA'S{' '}
                        <span className="text-[#E63946]">NEXT GENERATION</span> OF
                        <br />
                        MSME GROWTH STORIES
                    </h3>

                    {/* Subheading */}
                    <p className="nave-font mx-auto mb-5 max-w-3xl text-sm leading-relaxed text-[#02443A] sm:text-xl lg:mb-12 lg:text-2xl">
                        Short, fact-based conversations for MSMEs - funding, compliance, growth, and execution.
                    </p>

                    {/* CTA Button */}
                    <button className="citrus-gothic rounded-full bg-[#FFAF00] px-10 py-3 text-lg font-medium uppercase tracking-wide text-[#02443A] shadow-lg transition-all hover:bg-[#FF8C00] hover:shadow-xl sm:px-12 sm:py-5 sm:text-xl lg:px-14 lg:py-4 lg:text-2xl mb-36">
                        Watch the Latest Episode
                    </button>
                </div>
            </div>

            {/* Bottom Left Image - Woman */}
            <div className="absolute bottom-0 left-0 z-30 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[450px]">
                <Image
                    src="/home/fellowship-bg-user-1.webp"
                    alt="Bharat Fellow"
                    width={450}
                    height={600}
                    className="h-auto w-full object-contain"
                    priority
                />
            </div>

            {/* Bottom Right Image - Man */}
            <div className="absolute bottom-0 right-0 z-30 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[450px]">
                <Image
                    src="/home/fellowship-bg-user-2.webp"
                    alt="Bharat Fellow"
                    width={450}
                    height={600}
                    className="h-auto w-full object-contain"
                    priority
                />
            </div>
        </section>
    );
}