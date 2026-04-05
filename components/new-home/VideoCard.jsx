"use client";

import { RiVideoFill } from "react-icons/ri";

export default function VideoCard({ youtubeId, duration, title }) {

    const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    const youtubeLink = `https://www.youtube.com/shorts/${youtubeId}`;

    return (
        <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-40 md:w-52 group cursor-pointer"
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
    );
}