import { RiVideoFill } from "react-icons/ri";

export default function VideoCard({ src, alt, duration, title }) {
    return (
        <div className="flex-none w-40 md:w-52 group cursor-pointer">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-secondary transition-all shadow-sm">
                <img alt={alt} className="w-full h-full object-cover" src={src} />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
                    <RiVideoFill className="rounded-full" />

                    <span className="text-[10px] font-bold tracking-tighter">{duration}</span>
                </div>
            </div>
            <p className="text-sm md:text-base font-bold leading-tight line-clamp-2">{title}</p>
        </div>
    );
}