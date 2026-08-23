"use client";

import Link from "next/link";
import { RiVideoFill } from "react-icons/ri";

export default function VideoCard({ id, youtubeId, duration, title }) {

    const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    const youtubeLink = `https://www.youtube.com/shorts/${youtubeId}`;

    const handleDownloadGuide = (e) => {
        e.preventDefault();
        // Placeholder handler - backend integration to be added later.
        console.log("Download Guide clicked for video:", id);
    };

    return (
        <div className="flex-none w-40 md:w-52 group">
            <a
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-secondary transition-all shadow-sm">

                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
                        <RiVideoFill />
                        <span className="text-[10px] font-bold tracking-tighter">
                            {duration}
                        </span>
                    </div>
                </div>

                <p className="text-sm md:text-base font-bold leading-tight line-clamp-2">
                    {title}
                </p>
            </a>

            <div className="flex flex-col gap-2 mt-3">
                <button
                    onClick={handleDownloadGuide}
                    className="bg-secondary w-full text-on-secondary text-xs md:text-sm font-semibold rounded transition-colors px-2 py-1.5 cursor-pointer hover:scale-105 active:scale-95 text-center"
                >
                    Download Guide
                </button>
                <Link
                    href={`/expert-videos/${id}`}
                    className="bg-surface-container-highest w-full text-primary text-xs md:text-sm font-semibold rounded transition-colors px-2 py-1.5 cursor-pointer hover:scale-105 active:scale-95 text-center"
                >
                    More Details
                </Link>
            </div>
        </div>
    );
}