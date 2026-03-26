import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer-background -mt-[2rem] relative">
            <div className="max-w-7xl mx-auto px-[1rem] pt-[5rem] md:py-12 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Section */}
                <div className="flex-1 flex flex-col items-center">
                    <Image
                        src="/home/fellowship-main-logo.webp"
                        alt="Bharat Fellowship Logo"
                        width={400}
                        height={225}
                        className="w-[245px] md:w-[400px] h-[110px] md:h-[225px] object-contain"
                    />

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-6 md:pt-0">

                        {/* Instagram */}
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="md:w-[40px] md:h-[40px]"
                            >
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2z" />
                            </svg>
                        </a>

                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="md:w-[40px] md:h-[40px]"
                            >
                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v12h-4zM8 8h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v6.2h-4v-5.5c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9v5.6h-4z" />
                            </svg>
                        </a>

                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="md:w-[40px] md:h-[40px]"
                            >
                                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.8 2.6 12 2.6 12 2.6s-4.8 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .3 8 .3s4.8 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.7 14.8V7.8l6.4 3.5-6.4 3.5z" />
                            </svg>
                        </a>

                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="white"
                                className="md:w-[40px] md:h-[40px]"
                            >
                                <path d="M22 5.9c-.8.4-1.6.6-2.4.8.9-.6 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.8 1.1C17.9 4.5 16.8 4 15.6 4c-2.3 0-4.1 2-3.6 4.3C8.3 8.2 5 6.5 2.8 3.9c-.9 1.6-.4 3.6 1.1 4.6-.7 0-1.3-.2-1.9-.5 0 1.8 1.3 3.4 3.1 3.7-.6.2-1.3.2-1.9.1.5 1.5 2 2.6 3.7 2.7-1.6 1.2-3.6 1.8-5.6 1.6 1.8 1.2 4 1.9 6.3 1.9 7.5 0 11.6-6.4 11.3-12.1.8-.6 1.6-1.4 2.1-2.3z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center relative">
                    <div className="hidden md:block footer-border"></div>

                    <p className="citrus-gothic  text-[#FFAF00] text-[28px] md:text-[46px] leading-[28px] md:leading-[70px]">
                        Ready to make your
                        <br /> MSME funding-ready?
                    </p>

                    <p className="nave-font text-[14px] md:text-[22px] leading-[18px] md:leading-[26px] text-white my-6">
                        Seedhi baat, real facts,

                        <br />
                        practical steps -
                        <span className="text-[#FFAF00]">every week.</span>
                    </p>

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="citrus-gothic  bg-[#FFAF00] rounded-full w-[300px] md:w-[374px] h-[45px] md:h-[50px] text-[18px] font-medium text-[#121212] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-[#02443A]">
                            Watch the Latest Episode

                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Footer;