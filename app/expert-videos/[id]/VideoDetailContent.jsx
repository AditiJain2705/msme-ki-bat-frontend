"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    RiVideoFill,
    RiArrowLeftLine,
    RiDownload2Line,
    RiSearchLine,
} from "react-icons/ri";
import { VIDEOS } from "@/components/new-home/videos";

export default function VideoDetailContent({ video }) {
    const router = useRouter();
    const { youtubeId, duration, title, description, documentLink } = video;
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

    const [query, setQuery] = useState("");
    const [searchError, setSearchError] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const q = query.trim().toLowerCase();
        if (!q) return;

        const match = VIDEOS.find((v) => v.title.toLowerCase().includes(q));

        if (match) {
            setSearchError(false);
            router.push(`/expert-videos/${match.id}`);
        } else {
            setSearchError(true);
        }
    };

    return (
        <section className="py-8 bg-surface-container-low relative overflow-hidden">
            <div className="heritage-pattern-strip absolute top-0 left-0 w-full h-1" />

            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <Link
                    href="/expert-videos"
                    className="inline-flex items-center gap-1 text-secondary font-bold text-sm tracking-wide uppercase mb-6"
                >
                    <RiArrowLeftLine />
                    Back to Videos
                </Link>

                {/* Section 1: Video Information */}
                <div className="mb-6">
                    <h1 className="font-headline text-2xl md:text-3xl font-bold text-primary pb-2">
                        {title}
                    </h1>
                    <p className="font-body text-sm md:text-base text-on-surface-variant mb-2">
                        {description}
                    </p>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                        <RiVideoFill />
                        <span className="text-sm md:text-base font-body">{duration}</span>
                    </div>
                </div>

                {/* Section 2: Download Actions */}
                {documentLink && <div className="mb-6">
                    <a
                        href={documentLink}
                        download
                        className="mt-3 w-full flex items-center justify-center gap-2 bg-tertiary text-on-tertiary font-headline font-bold text-sm md:text-base rounded-xl px-4 py-3.5 border-2 border-on-surface shadow-[0_3px_0_var(--color-tertiary-dim)] cursor-pointer active:translate-y-[3px] active:shadow-none transition-all"
                    >
                        <RiDownload2Line className="text-lg" />
                        Download Document
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] md:text-[11px] font-extrabold px-2 py-0.5 rounded uppercase">
                            Free
                        </span>
                    </a>
                </div>}

                {/* Search */}
                <form onSubmit={handleSearch} className="mb-8">
                    <div className="flex items-center gap-2 bg-surface-container-lowest border-2 border-on-surface rounded-full px-4 py-2.5 shadow-[3px_3px_0_var(--color-tertiary-dim)]">
                        <RiSearchLine className="text-tertiary flex-none" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setSearchError(false);
                            }}
                            placeholder="Koi aur topic dhoondo… (loan, subsidy, GST)"
                            aria-label="Search videos"
                            className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-on-surface-variant min-w-0"
                        />
                    </div>
                    {searchError && (
                        <p className="text-xs md:text-sm text-error mt-2 px-1">
                            No matching video found.
                        </p>
                    )}
                </form>

                {/* Section 3: Embedded Video */}
                <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-on-surface shadow-[4px_4px_0_var(--color-tertiary-dim)]">
                        <iframe
                            src={embedUrl}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
