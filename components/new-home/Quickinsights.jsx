import VideoCard from "./VideoCard";

export const VIDEOS = [
    {
        id: 1,
        youtubeId: "ycO-a9Y7rRc",
        duration: "1:04",
        title: "India’s Moment of Spiritual Awakening | GDP with spiritual master",
    },
    {
        id: 2,
        youtubeId: "Ox2Uq1VH9XU",
        duration: "0:58",
        title: "PM Modi launches various development works in Vav-Tharad, Gujarat",
    },
    {
        id: 3,
        youtubeId: "17ddH2HBGCo",
        duration: "1:20",
        title: "PM Modi inaugurates the Kaynes Semicon Plant at Sanand, Gujarat",
    },
];

export default function QuickInsights() {
    return (
        <section className="py-8 bg-surface-container-low relative overflow-hidden ">
            <div className="heritage-pattern-strip absolute top-0 left-0 w-full h-1" />

            <div className="flex justify-between items-end px-6 lg:px-0 mb-6 max-w-6xl mx-auto">
                <div>
                    <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary pb-2">Expert Insights</h3>
                    <p className="font-body text-sm md:text-base text-on-surface-variant">
                        Expert analysis in 60 seconds
                    </p>
                </div>
                <button className="text-secondary font-bold text-sm tracking-wide uppercase">
                    View All
                </button>
            </div>

            <div className="flex gap-4 overflow-x-auto px-6 lg:px-0 hide-scrollbar max-w-6xl mx-auto">
                {VIDEOS.map((video) => (
                    <VideoCard
                        key={video.id}
                        youtubeId={video.youtubeId}
                        duration={video.duration}
                        title={video.title}
                    />
                ))}
            </div>
        </section>
    );
}