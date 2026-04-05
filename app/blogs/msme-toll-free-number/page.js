import Main from "./Main";
import Script from "next/script";

export const metadata = {
  title:
    "MSME Toll Free Number 2026 | Official Helpline, Complaint & Support Guide",

  description:
    "Looking for the MSME toll free number? Get the official MSME helpline, grievance options, delayed payment help, and simple guidance for Indian businesses.",

  keywords: [
    "MSME toll free number",
    "MSME helpline toll free number",
    "MSME registration helpline number",
    "MSME grievance number",
    "MSME complaint portal",
    "MSME support number",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://msmekibaat.com/blog/msme-toll-free-number",
    languages: {
      "en-in": "https://msmekibaat.com/blog/msme-toll-free-number",
      "hi-in": "https://msmekibaat.com/hi/blog/msme-toll-free-number",
      "x-default": "https://msmekibaat.com/blog/msme-toll-free-number",
    },
  },

  openGraph: {
    type: "article",
    title:
      "MSME Toll Free Number 2026 | Official Helpline, Complaint & Support Guide",
    description:
      "Looking for the MSME toll free number? Get the official MSME helpline, grievance options, delayed payment help, and simple guidance for Indian businesses.",
    url: "https://msmekibaat.com/blog/msme-toll-free-number",
    siteName: "MSME Ki Baat",
    images: [
      {
        url: "https://msmekibaat.com/new-home/blog-default-image.webp",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "MSME Toll Free Number 2026 | Official Helpline, Complaint & Support Guide",
    description:
      "Get the official MSME helpline, grievance options, delayed payment help, and simple guidance for Indian businesses.",
    images: ["https://msmekibaat.com/new-home/blog-default-image.webp"],
  },
};

const page = () => {
  return (
    <>
      <Main />

      {/* SEO Schema Only */}
      <Script
        id="msme-schema"
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
                  url: "https://msmekibaat.com/msme-ki-bat-logo.webp",
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
              },
              {
                "@type": "BlogPosting",
                headline:
                  "MSME Toll Free Number 2026: Official Helpline, Complaint Support and MSME Help Guide",
                description:
                  "Looking for the MSME toll free number? Learn the official MSME support channels and grievance options.",
                author: {
                  "@id": "https://msmekibaat.com/#hemant-chutani",
                },
                publisher: {
                  "@id": "https://msmekibaat.com/#organization",
                },
                datePublished: "2026-04-05",
                dateModified: "2026-04-05",
                image:
                  "https://msmekibaat.com/images/blog/msme-toll-free-number.jpg",
                mainEntityOfPage:
                  "https://msmekibaat.com/blog/msme-toll-free-number",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the MSME toll free number?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "The commonly cited MSME toll-free support number is 1800-180-6763, introduced as the Udyami Helpline.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I complete MSME registration by phone?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "No. Registration is completed through the official online system.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where should I go for delayed payment complaints?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Delayed-payment cases are routed through the MSME ODR process linked with Samadhaan.",
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
