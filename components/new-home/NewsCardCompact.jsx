import Image from "next/image";
import Link from "next/link";

export default function NewsCardCompact({ src, alt, tag, tagColor = "secondary", title, excerpt, hasBorder = true, blogLink }) {
    const tagColorMap = {
        secondary: "text-secondary",
        tertiary: "text-tertiary",
    };

    return (
        <Link href={blogLink ?? "#"} className={`flex gap-4 items-start py-4 ${hasBorder ? "border-b border-outline-variant/10" : ""}`}>
            <div className="flex-1">
                <span className={`${tagColorMap[tagColor]} font-bold text-xs lg:text-sm uppercase tracking-widest mb-1 block`}>
                    {tag}
                </span>
                <h4 className="font-headline text-xl lg:text-2xl font-bold leading-tight mb-2">{title}</h4>
                <p className="text-sm lg:text-base text-on-surface-variant line-clamp-2 mb-4">{excerpt}</p>
                <div className="bg-secondary w-fit text-on-secondary text-sm lg:text-base font-semibold rounded transition-colors px-2 py-1 cursor-pointer hover:scale-105 active:scale-95">
                    Know More
                </div>
            </div>
            <div className="size-24 lg:size-28 rounded-lg bg-surface-container-highest overflow-hidden flex-none">
                <Image alt={alt} height={100} width={100} className="w-full h-full object-cover opacity-90" src={src} />
            </div>

        </Link>
    );
}