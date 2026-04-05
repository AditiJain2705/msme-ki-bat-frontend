import NewsCardFeatured from "./NewsCardFeatured";
import NewsCardCompact from "./NewsCardCompact";

const FEATURED_NEWS = {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAi32RciugLN6ecXSCKz7yAdzklF_ja7iL7Z2NiI7-VPvW8BBAgsBog7jCUIBVJGIO9K9-KFV-3b7X9_FtCAs3Bknq4YHeHYfmQdEuONTYaqN_aaDgy9CLFMYiy8-k5AZlPnd9vFRN7V_j7oboNCXBHsApEbXZiz9r7SgYd_0CRYhwXNqhpikQx3R08UQEEhMTDCEEOQp4pSPII20NdvvJDAMshCgfEugX_PA_11nO-oDVKrkNfCbR5VmouWwWDc82vG4Ow9BdhF0Q",
    alt: "News feature",
    tag: "Samadhaan Portal",
    title: "The MSME Samadhaan Portal: Your Solution for Delayed Payments",
    excerpt:
        "A strategic pivot towards luxury traditional wear marks a new era for the retail giant as consumer preferences shift to artisanal authenticity.",
    author: "Hemant Chutani",
    readTime: "4 mins read",
    blogLink: "/blogs/msme-samadhaan-portal-45-day-payment-rule"
};

const COMPACT_NEWS = [
    {
        id: 1,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZMFwhho8N0-ze-QnutAVNfKH60Bq4FDm4AOBluTd8ue7viWKNMPvhkEPwsJ-Kt6S24mlRVg-01AGfo_Aev-qQUAchbEjV_OjMMEnlVJTJDqKqkKCXD4xsQr1c7jdP80-FsKO3AHl9nbCUAUzS_tSJJ0SQWj5cU2TgQYkwgi0auRr1hprurIXm1_I6U7ayhosLqW5XZuen28KDmaaHxTMidkq6jlX6Mh6DqH0nF1uwx5ScmB7H2PMG0GxeZ0IRHta5CBZ4NfxTONfs",
        alt: "msme news",
        tag: "Toll Free Number",
        tagColor: "tertiary",
        title: "MSME Toll Free Number 2026 | Official Helpline, Complaint & Support Guide",
        excerpt:
            "Looking for the MSME toll free number? Get the official MSME helpline, grievance options, delayed payment help, and simple guidance for Indian businesses",
        hasBorder: false,
        blogLink: "/blogs/msme-toll-free-number"
    },
    {
        id: 2,
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH2btzt13v8f2JVzQbyl-xUQlsWRIE-tjKkWh5UNmL9RcR2uzdn5w6TWibRfhVcGLKz-b20Ndi_lnnvamPDTzI7s3pk-l6RXmbFX_tonnOZkEiuFe5z0bAi8FC0YAs6_XERSMRv_tPgTOtStHQC7rXX67tww2_seMqT80riJz7qjeIwLq4kk4Z6IywlKXH-P6cU6wM6aZZOm7XipmvMPaNwk_OLxA0WNCvXKYugmvgoHlhJK_Xl0AvvXEzfLD_hQIK7rvndqHp2F1N",
        alt: "msme news",
        tag: "GeM Registration 2026",
        tagColor: "secondary",
        title: "GeM Registration 2026 | Process, Fees, Eligibility & Seller Guide",
        excerpt:
            "Learn GeM registration process step by step. Check eligibility, fees, documents required and how to start selling on Government e-Marketplace.",
        hasBorder: true,
        blogLink: "/blogs/gem-registration"

    },

];

export default function TopBusinessNewsSection() {
    return (
        <section className="px-6 py-10 lg:px-0 space-y-8 max-w-6xl mx-auto">
            <h3 className="font-headline text-2xl md:text-3xl font-bold border-l-4 border-tertiary pl-4 text-on-surface">
                Top Business News
            </h3>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <NewsCardFeatured {...FEATURED_NEWS} />

            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                {COMPACT_NEWS.map((item) => (
                    <NewsCardCompact key={item.id} {...item} />

                ))}
            </div>

        </section>
    );
}