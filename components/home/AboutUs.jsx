import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="relative bg-[#f5f5f0] overflow-hidden citrus-gothic pb-8 md:pb-14 ">
            {/* Decorative butterfly - top left */}
            <div className="absolute top-8 left-8 w-12 h-12 opacity-40 z-10">
                <div className="w-full h-full bg-yellow-200 rounded-full transform rotate-45"></div>
            </div>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/fellowship-program-bg.webp"
                    alt="Background"
                    fill
                    priority
                    className="object-cover"
                    quality={100}
                />
            </div>
            {/* Section 1: Mission */}
            <section className="relative  flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
                <div className="max-w-7xl w-full mx-auto">
                    <div className="">

                        {/* Right side - Content */}
                        <div className="lg:col-span-7 space-y-8 lg:pl-8">
                            {/* Header with pink X decoration */}
                            <div className="relative text-center">
                                <h2 className="text-5xl sm:text-6xl  font-semibold leading-tight">
                                    ABOUT
                                </h2>
                                <h2 className="text-5xl sm:text-6xl  font-semibold text-[#094A72] leading-tight">
                                    MSME KI BAAT

                                </h2>
                            </div>

                            <div className="absolute right-4 md:right-14 top-4 md:top-12 size-16 md:size-52 rounded-lg overflow-hidden">
                                <Image
                                    src="/home/fellow-about-user-1.webp" // Replace with your actual photo
                                    alt="Fellow"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className=''>

            </div>
            {/* Section 2: Vision */}
            <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl w-full mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 ">
                        {/* Left side - Line art with vision and person photo */}
                        <div className="md:col-span-5 flex justify-center lg:justify-start relative order-2 md:order-1">
                            <div className="md:relative w-full max-w-md h-[600px] md:block hidden">
                                {/* Your line art image */}
                                <Image
                                    src="/home/misson-frame.webp" // Replace with your actual line art path
                                    alt="Vision Line Art"
                                    fill
                                    className="object-contain"
                                />


                            </div>
                        </div>

                        {/* Right side - Vision content */}
                        <div className="md:col-span-7 space-y-6  order-1 md:order-2 ">
                            <div className="space-y-3 text-xl sm:text-[28px] xl:text-4xl leading-snug font-normal md:font-bold">
                                {/* Mission statement */}
                                <div className="space-y-3 leading-snug font-normal md:font-medium pt-14 xl:pt-12 mb-12 md:mb-36 xl:mb-20">
                                    <p className="text-[#02443A]">
                                        Make
                                        <span className="text-yellow-500"> MSMEs funding-ready and execution-ready</span>{' '}
                                        practical, step-by-step clarity.

                                    </p>


                                </div>
                                <p className='mb-8 md:mb-12 text-[#02443A]'>
                                    Build a  <span className="text-red-500">trusted library of MSME knowledge -</span> schemes, compliance, finance hygiene, and growth playbooks -<span className="text-red-500 " > in simple Hinglish.</span>

                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* mobile view */}

            {/* Decorative butterfly - bottom right */}

        </div >
    );
}

