import VideoCard from "./VideoCard";

const VIDEOS = [
    {
        id: 1,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2CeVPvTQ6ItoPH_3jYVV6z1LZa7PbNaYAEPx8hBMTsBp6TYUpDBB-tT37MvJkcNmWkw-eQssfBbGpJVghBp9T6gPRdqlzDVp81Fn-39rrEfd9xuGL6UE8TkiTuhE_Wyf2sRV9qAQCwM4pFc29rmiXU6xF0PfIdtQB4uje1cJ_GfO_sb6KKS9l5FIk-kqM2FTE1mqjYTMpyWmEKcC7JovX_Dc6DoqlaR7J2u-t2jytuSZEYr8UftHgaHaZxYryxKx9k8i1QMpUidHI",
        alt: "Market Insight",
        duration: "1:04",
        title: "Spice Markets: The Inflation Indicator",
    },
    {
        id: 2,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb4eMc7ZBFArPWQ8ZS2m8ZjfkCamyh-uSAmLBfXMjfdM7W2IesJMhnVJZ0AFl0l_o0MxSYPNSzIHjLiqMPjamJ_YG-1mo4J00MAVO6ioUi4eCttDn8zhU1qIRYd66HLwrwfQZ36vVpRbItmQqmTS7ZGOpmxPCJj2NF7ABmBG4MlWx3owVbM14AjBmwMyh0M2y26o_eeny1elwuj1wooCcmqIbM4tc3gSyp14uGW0OjvNCgd1qRegTIMLgPqyWhg0bJzAZebl2SvKRo",
        alt: "Tech Growth",
        duration: "0:58",
        title: "The Digital Rupee's New Frontier",
    },
    {
        id: 3,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATgvh7WUWb17-gDRvOHgabLSzrzsvZqSZ0WK7ewdjlKZRfxAbgG7GWNg-dDABCsZCuX0yukPR39ARwyJFI9zHik2cw3aR5GGIdLMf5thGox_dBJBa68Bi9njs0N6B6bWwMjVCCUf6lMf_MEWC4LpZCYqjCSnZMt2v3DutYCoD3lICWBRNbF6TbpMemetB_566GSK6qMb-nDcNyi57Tr2rJTKUJi_jRMkh7ntRip9Q2tKc7DDpDa_YkdAUYQhtS24GcPgbF4d4tLtfc",
        alt: "Rural Economy",
        duration: "1:20",
        title: "MSME Growth in Tier 3 Cities",
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
                    <VideoCard key={video.id} {...video} />
                ))}
            </div>
        </section>
    );
}