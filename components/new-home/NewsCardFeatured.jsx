import { IoPersonSharp } from "react-icons/io5";

export default function NewsCardFeatured({ src, alt, tag, title, excerpt, author, readTime }) {
    return (
        <div className="bg-surface-container-high rounded-xl overflow-hidden shadow-sm group border border-outline-variant/20 cursor-pointer">
            <div className="relative h-48">
                <img alt={alt} className="w-full h-full object-cover" src={src} />
                <div className="absolute top-4 left-4">
                    <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] md:text-xs font-extrabold uppercase tracking-widest">
                        {tag}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h4 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h4>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center">
                            <IoPersonSharp />

                        </div>
                        <span className="text-[11px] md:text-xs font-bold text-on-surface-variant uppercase">
                            By {author}
                        </span>
                    </div>
                    <span className="text-[11px] md:text-xs text-outline font-medium">{readTime}</span>
                </div>
            </div>
        </div>
    );
}