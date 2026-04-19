import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

export default function AuthorCard() {
    return (
        <div className="blog-hero-section px-4 md:px-8 py-6 rounded-lg  shadow-lg mb-8 border border-gray-200">
            {/* Heading */}
            <h2 className="font-headline text-3xl md:text-4xl text-[#02443A] font-semibold mb-4">
                About the Author
            </h2>

            {/* Top Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Profile Image */}
                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                        <img
                            src="/author.jpg" // replace with your image
                            alt="Author"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Name & Role */}
                    <div>
                        <h3 className="text-lg font-semibold text-blue-900">
                            Hemant Chutani
                        </h3>
                        <p className="text-gray-500 text-sm">Senior Content Writer</p>
                    </div>
                </div>

                {/* LinkedIn Button */}
                <Link
                    href="https://www.linkedin.com/in/hemant-chutani-a2974b117/"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 hover:bg-gray-200 transition"
                >
                    <FaLinkedinIn size={16} />
                </Link>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-relaxed text-sm md:text-base">
                I am an advocate by profession and have a keen interest in writing. I
                write articles in various categories, from legal, business, personal
                finance, and investments to government schemes. I put words in a
                simplified manner and write easy-to-understand articles.{" "}

            </p>
        </div>
    );
}