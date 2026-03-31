export default function NewsCardCompact({ src, alt, tag, tagColor = "secondary", title, excerpt, hasBorder = true }) {
    const tagColorMap = {
        secondary: "text-secondary",
        tertiary: "text-tertiary",
    };

    return (
        <div className={`flex gap-4 items-start py-4 ${hasBorder ? "border-b border-outline-variant/10" : ""}`}>
            <div className="flex-1">
                <span className={`${tagColorMap[tagColor]} font-bold text-[10px] uppercase tracking-widest mb-1 block`}>
                    {tag}
                </span>
                <h4 className="font-headline text-lg font-bold leading-tight mb-2">{title}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-2">{excerpt}</p>
            </div>
            <div className="w-24 h-24 rounded-lg bg-surface-container-highest overflow-hidden flex-none">
                <img alt={alt} className="w-full h-full object-cover opacity-90" src={src} />
            </div>
        </div>
    );
}