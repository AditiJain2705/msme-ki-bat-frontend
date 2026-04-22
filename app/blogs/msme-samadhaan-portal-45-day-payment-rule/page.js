import Main from "./Main";
import Script from "next/script";

export const metadata = {
  title:
    "MSME Samadhaan Portal & 45 Days Payment Rule | Simple Guide for Business Owners",
  description:
    "Understand MSME Samadhaan portal, 45 days payment rule, complaint process, login, case status, delayed payment monitoring system, and MSME late payment interest rate in simple language. A practical guide for Indian business owners.",
  keywords: [
    "msme samadhaan",
    "msme samadhaan portal",
    "msme samadhaan login",
    "msme samadhaan case status",
    "msme samadhaan complaint",
    "msme samadhaan delayed payment monitoring system",
    "delayed payment monitoring system",
    "45 days payment rule",
    "msme 45 days payment rule",
    "msme payment rule",
    "msme late payment interest rate",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
  },
  openGraph: {
    type: "article",
    title:
      "MSME Samadhaan Portal & 45 Days Payment Rule | Simple Guide for Business Owners",
    description:
      "Understand MSME Samadhaan portal, 45 days payment rule, complaint process, login, case status, delayed payment monitoring system, and MSME late payment interest rate in simple language.",
    url:
      "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
    images: ["https://msmekibaat.com/blog/msme-samadhan.webp"],
    siteName: "MSME Ki Baat",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MSME Samadhaan Portal & 45 Days Payment Rule | Simple Guide for Business Owners",
    description:
      "Understand MSME Samadhaan portal, 45 days payment rule, complaint process, login, case status, delayed payment monitoring system, and MSME late payment interest rate in simple language.",
    images: ["https://msmekibaat.com/blog/msme-samadhan.webp"],
  },
  authors: [{ name: "Hemant Chutani" }],
};

const page = () => {
  return (
    <>
      <Main />

      {/* hreflang tags */}
      <link
        rel="alternate"
        hrefLang="en-IN"
        href="https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule"
      />

      {/* Full Schema Graph */}
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
                  url: "https://msmekibaat.com/logo.png",
                },
                sameAs: ["https://youtube.com/@msmekibaat?si=XJ5_9m64cRlmtQge"],
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
                  "https://www.linkedin.com/in/hemant-chutani-a2974b117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  "https://www.instagram.com/hemant_chutani?igsh=MWd5ejhram5jbXk2dQ%3D%3D&utm_source=qr",
                  "https://youtube.com/@msmekibaat?si=XJ5_9m64cRlmtQge",
                ],
                description:
                  "Hemant Chutani explains MSME-related topics in simple language and helps Indian business owners understand practical next steps.",
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
                  "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#breadcrumb",
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
                    name: "MSME Samadhaan Portal & 45 Days Payment Rule",
                    item:
                      "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#webpage",
                url:
                  "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
                name:
                  "MSME Samadhaan Portal & 45 Days Payment Rule: Simple Guide for Business Owners",
                isPartOf: {
                  "@id": "https://msmekibaat.com/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#breadcrumb",
                },
                inLanguage: "en-IN",
              },
              {
                "@type": "BlogPosting",
                "@id":
                  "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#article",
                mainEntityOfPage: {
                  "@id":
                    "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#webpage",
                },
                headline:
                  "MSME Samadhaan Portal & 45 Days Payment Rule: Simple Guide for Business Owners",
                description:
                  "Understand MSME Samadhaan portal, 45 days payment rule, complaint process, login, case status, delayed payment monitoring system, and MSME late payment interest rate in simple language.",
                author: {
                  "@id": "https://msmekibaat.com/#hemant-chutani",
                },
                publisher: {
                  "@id": "https://msmekibaat.com/#organization",
                },
                datePublished: "2026-04-22T00:00:00+05:30",
                dateModified: "2026-04-22T00:00:00+05:30",
                inLanguage: "en-IN",
                articleSection: [
                  "Why delayed payments hurt MSMEs",
                  "What is MSME Samadhaan",
                  "45 days payment rule",
                  "How to file complaint",
                  "Login and case status",
                  "Common mistakes",
                  "Practical advice",
                  "Official references",
                  "MSME Ki Baat guidance",
                ],
                keywords: [
                  "msme samadhaan",
                  "msme samadhaan portal",
                  "msme samadhaan login",
                  "msme samadhaan case status",
                  "msme samadhaan complaint",
                  "msme samadhaan delayed payment monitoring system",
                  "delayed payment monitoring system",
                  "45 days payment rule",
                  "msme 45 days payment rule",
                  "msme payment rule",
                  "msme late payment interest rate",
                ],
                image: ["https://msmekibaat.com/blog/msme-samadhan.webp"],
              },
              {
                "@type": "FAQPage",
                "@id":
                  "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "MSME Samadhaan kya hai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Ye delayed payment disputes ko support karne wala government mechanism/platform ecosystem hai.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "45 days rule kya hai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Buyer ko written agreement ke case mein maximum 45 din ke andar payment karna hota hai. Without agreement, due timeline aur bhi shorter ho sakti hai.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Case status kaise check karein?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Portal pe login karke track kar sakte ho.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Kya Udyam registration zaroori hai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Valid Udyam Registration practical aur official eligibility context mein important hai; current eligibility/process official portal par verify karna chahiye.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is MSME Samadhaan litigation?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Not exactly in the usual court-case sense. It is a statutory delayed-payment dispute mechanism that may move through the facilitation council process, so it should be understood as a formal legal remedy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How to file MSME Samadhaan complaint?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Check the latest official filing route first, keep buyer details, invoice, pending amount, delivery proof, and agreement or purchase order ready, then proceed through the relevant official portal flow.",
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
