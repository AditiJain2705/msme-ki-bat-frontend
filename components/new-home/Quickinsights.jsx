"use client";

import { useState } from "react";
import VideoCard from "./VideoCard";
import { VIDEOS } from "./videos";

export default function QuickInsights() {
    const [query, setQuery] = useState("");
    const normalizedQuery = query.trim().toLowerCase();
    const filteredVideos = VIDEOS.filter((video) =>
        video.title.toLowerCase().includes(normalizedQuery)
    );

    return (
        <section className="py-8 bg-surface-container-low relative overflow-hidden ">
            <div className="heritage-pattern-strip absolute top-0 left-0 w-full h-1" />

            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end px-6 lg:px-0 mb-6 max-w-6xl mx-auto">
                <div>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary pb-2">Expert Insights</h3>
                    <p className="font-body text-sm md:text-base text-on-surface-variant">
                        MSME ki baat in 60 seconds
                    </p>
                </div>
                <label className="flex items-center gap-2 bg-surface-container-lowest border-2 border-on-surface rounded-full px-4 py-2.5 shadow-[3px_3px_0_var(--color-tertiary-dim)] md:w-80">
                    <span className="text-tertiary" aria-hidden="true">⌕</span>
                    <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search video title"
                        aria-label="Search videos by title"
                        className="flex-1 bg-transparent outline-none text-sm placeholder:text-on-surface-variant min-w-0"
                    />
                </label>
            </div>

            <div className="flex gap-4 overflow-x-auto px-6 lg:px-0 hide-scrollbar max-w-6xl mx-auto">
                {filteredVideos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>

            {filteredVideos.length === 0 && (
                <p className="px-6 lg:px-0 max-w-6xl mx-auto text-sm text-on-surface-variant">
                    No matching video found.
                </p>
            )}
        </section>
    );
}