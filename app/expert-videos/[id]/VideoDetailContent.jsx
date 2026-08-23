"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    RiVideoFill,
    RiArrowLeftLine,
    RiFileTextLine,
    RiDownload2Line,
    RiSearchLine,
} from "react-icons/ri";
import { VIDEOS } from "@/components/new-home/Quickinsights";

export default function VideoDetailContent({ video }) {
    const router = useRouter();
    const { youtubeId, duration, title } = video;
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

    const [query, setQuery] = useState("");
    const [searchError, setSearchError] = useState(false);

    const handleDownloadGuide = () => {
        // Placeholder handler - backend integration to be added later.
        console.log("Download Guide clicked for video:", video.id);
    };

    const handleDownloadDocument = () => {
        // Placeholder handler - backend integration to be added later.
        console.log("Download Document clicked for video:", video.id);
    };

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
                        By <span className="font-bold text-on-surface">Hemant Chutani</span> · Instagram se aaye ho? Sahi jagah ho ✅
                    </p>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                        <RiVideoFill />
                        <span className="text-sm md:text-base font-body">{duration}</span>
                    </div>
                </div>

                {/* Section 2: Download Actions */}
                <div className="mb-6">
                    <button
                        type="button"
                        onClick={handleDownloadGuide}
                        className="relative w-full flex items-center gap-3 bg-surface-container-lowest border-2 border-on-surface rounded-2xl p-3 shadow-[4px_4px_0_var(--color-tertiary-dim)] text-left cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
                    >
                        <span className="absolute -top-3 right-3 bg-secondary-container text-on-secondary-container text-[10px] md:text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-md border-2 border-on-surface rotate-3">
                            Free
                        </span>
                        <span className="flex items-center justify-center w-10 h-11 rounded-md border-2 border-on-surface bg-surface flex-none">
                            <RiFileTextLine className="text-lg text-on-surface" />
                        </span>
                        <span className="min-w-0">
                            <span className="block font-headline font-bold text-sm md:text-base">
                                Download Guide (PDF)
                            </span>
                            <span className="block text-xs md:text-sm text-on-surface-variant truncate">
                                Full details · Step-by-step
                            </span>
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={handleDownloadDocument}
                        className="mt-3 w-full flex items-center justify-center gap-2 bg-tertiary text-on-tertiary font-headline font-bold text-sm md:text-base rounded-xl px-4 py-3.5 border-2 border-on-surface shadow-[0_3px_0_var(--color-tertiary-dim)] cursor-pointer active:translate-y-[3px] active:shadow-none transition-all"
                    >
                        <RiDownload2Line className="text-lg" />
                        Download Document
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] md:text-[11px] font-extrabold px-2 py-0.5 rounded uppercase">
                            Free
                        </span>
                    </button>
                </div>

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
