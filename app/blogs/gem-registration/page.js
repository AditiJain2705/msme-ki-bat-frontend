import Main from "./Main";
import Script from "next/script";

export const metadata = {
  title: "GeM Registration 2026 | Process, Fees, Eligibility & Seller Guide",

  description:
    "Learn GeM registration process step by step. Check eligibility, fees, documents required and how to start selling on Government e-Marketplace.",

  keywords: [
    "gem registration",
    "gem portal registration",
    "gem registration process",
    "gem registration fees",
    "how to register on gem portal",
    "seller registration gem",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://msmekibaat.com/blogs/gem-registration",
    languages: {
      "en-in": "https://msmekibaat.com/blogs/gem-registration",
      // Removed x-default as per PDF
    },
  },

  openGraph: {
    type: "article",
    title: "GeM Registration 2026 | Process, Fees, Eligibility & Seller Guide",
    description:
      "Learn GeM registration process step by step. Check eligibility, fees, documents required and how to start selling on Government e-Marketplace.",
    url: "https://msmekibaat.com/blogs/gem-registration",
    siteName: "MSME Ki Baat",
    images: [
      {
        url: "https://msmekibaat.com/images/blog/gem-registration.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GeM Registration 2026 | Process, Fees, Eligibility & Seller Guide",
    description:
      "Learn GeM registration process step by step. Check eligibility, fees, documents required and how to start selling on Government e-Marketplace.",
    images: ["https://msmekibaat.com/images/blog/gem-registration.jpg"],
  },
  // Added Meta Author Tag as per PDF
  author: "Hemant Chutani",
};

const page = () => {
  return (
    <>
      <Main />

      <Script
        id="gem-registration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://msmekibaat.com/#organization",
                name: "MSME Ki Baat",
                url: "https://msmekibaat.com/",
                logo: {
                  "@type": "ImageObject",
                  // Updated logo URL as per PDF
                  url: "https://msmekibaat.com/new-home/msme-ki-bat-logo.webp",
                },
                sameAs: ["https://youtube.com/@msmekibaat"],
              },
              {
                "@type": "Person",
                "@id": "https://msmekibaat.com/#hemant-chutani",
                name: "Hemant Chutani",
                jobTitle: "Founder",
                worksFor: {
                  "@id": "https://msmekibaat.com/#organization",
                },
                sameAs: [
                  "https://www.linkedin.com/in/hemant-chutani-a2974b117",
                  "https://www.instagram.com/hemant_chutani",
                  "https://youtube.com/@msmekibaat",
                ],
                description:
                  "Hemant Chutani explains MSME-related topics in simple language and helps Indian businesses understand practical next steps.",
              },
              {
                "@type": "WebSite",
                "@id": "https://msmekibaat.com/#website",
                url: "https://msmekibaat.com/",
                name: "MSME Ki Baat",
                publisher: {
                  "@id": "https://msmekibaat.com/#organization",
                },
                inLanguage: "en-IN",
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://msmekibaat.com/blogs/gem-registration/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://msmekibaat.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://msmekibaat.com/blogs/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "GeM Registration",
                    item: "https://msmekibaat.com/blogs/gem-registration",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://msmekibaat.com/blogs/gem-registration/#webpage",
                url: "https://msmekibaat.com/blogs/gem-registration",
                name:
                  "GeM Registration 2026: Complete Process, Fees, Eligibility & How to Sell on Government Portal",
                isPartOf: {
                  "@id": "https://msmekibaat.com/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://msmekibaat.com/blogs/gem-registration/#breadcrumb",
                },
                inLanguage: "en-IN",
              },
              {
                "@type": "BlogPosting",
                "@id": "https://msmekibaat.com/blogs/gem-registration/#article",
                mainEntityOfPage: {
                  "@id":
                    "https://msmekibaat.com/blogs/gem-registration/#webpage",
                },
                headline:
                  "GeM Registration 2026: Complete Process, Fees, Eligibility & How to Sell on Government Portal",
                description:
                  "Learn what GeM is, who can register, what documents are needed, and how to approach GeM properly as a business owner.",
                author: {
                  "@id": "https://msmekibaat.com/#hemant-chutani",
                },
                publisher: {
                  "@id": "https://msmekibaat.com/#organization",
                },
                datePublished: "2026-04-05",
                dateModified: "2026-04-05",
                inLanguage: "en-IN",
                image: [
                  "https://msmekibaat.com/images/blog/gem-registration.jpg",
                ],
                keywords: [
                  "gem registration",
                  "gem portal registration",
                  "gem registration process",
                  "gem registration fees",
                  "seller registration gem",
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://msmekibaat.com/blogs/gem-registration/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is GeM registration?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "GeM registration allows businesses to sell products and services directly to government buyers through the Government e-Marketplace.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is GeM registration free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, registration is free but requires proper documentation and strategy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can small businesses register on GeM?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes, MSMEs and small businesses can register and may get preference advantages.",
                    },
                  },
                  // Added 3 Missing FAQs as per PDF
                  {
                    "@type": "Question",
                    name: "How long does GeM registration take?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "GeM registration itself can be completed in a few hours if all documents are ready. Activation and catalog approval may take additional time depending on the category.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need GST for GeM?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "GST details are required during GeM registration if applicable to your business. Check your category requirements before applying as some categories may not require GST.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can MSME Ki Baat help me understand GeM better?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. MSME Ki Baat helps business owners understand whether GeM is right for them, what category to enter, what mistakes to avoid, and how to approach it practically rather than just registering and doing nothing.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default page;
