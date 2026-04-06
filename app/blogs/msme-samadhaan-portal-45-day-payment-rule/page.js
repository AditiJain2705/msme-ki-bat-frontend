import Main from "./Main";
import Script from "next/script";

export const metadata = {
  title:
    "MSME Samadhaan Portal & 45-Day Payment Rule: Recover Delayed Payments Fast | MsmekiBaat",
  description:
    "Struggling with delayed payments? Learn how the MSME Samadhaan portal, the 45-day MSME payment rule, and Section 43B(h) help small businesses recover dues faster in 2024–25.",
  keywords: [
    "MSME Samadhaan",
    "MSME Samadhaan portal",
    "MSME Samadhaan login",
    "MSME Samadhaan case status",
    "45 days payment rule",
    "MSME payment rule",
    "Section 43B(h)",
    "MSMED Act",
    "Udyam registration",
    "MSEFC",
    "delayed payment MSME",
  ],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
  },
  openGraph: {
    type: "article",
    title:
      "MSME Samadhaan Portal & 45-Day Payment Rule: Recover Delayed Payments Fast | MsmekiBaat",
    description:
      "Struggling with delayed payments? Learn how the MSME Samadhaan portal, the 45-day MSME payment rule, and Section 43B(h) help small businesses recover dues faster in 2024-25.",
    url: "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
    images: ["https://msmekibaat.com/images/blog/msme-samadhaan.jpg"],
    site_name: "MSME Ki Baat",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MSME Samadhaan Portal & 45-Day Payment Rule | MsmekiBaat",
    description:
      "Learn how the MSME Samadhaan portal, 45-day payment rule, and Section 43B(h) help small businesses recover delayed payments faster.",
    images: ["https://msmekibaat.com/images/blog/msme-samadhaan.jpg"],
  },
  // Add meta author for better SEO
  author: "Hemant Chutani", 
};

const page = () => {
  return (
    <>
      <Main />

      <Script
        id="msme-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://msmekibaat.com/#organization",
                "name": "MSME Ki Baat",
                "url": "https://msmekibaat.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://msmekibaat.com/new-home/msme-ki-bat-logo.webp"
                },
                "sameAs": ["https://youtube.com/@msmekibaat"]
              },
              {
                "@type": "Person",
                "@id": "https://msmekibaat.com/#hemant-chutani",
                "name": "Hemant Chutani",
                "jobTitle": "Founder",
                "description": "Hemant Chutani explains MSME-related topics in simple language and helps Indian businesses understand practical next steps.",
                "worksFor": { "@id": "https://msmekibaat.com/#organization" },
                "sameAs": [
                  "https://www.linkedin.com/in/hemant-chutani-a2974b117",
                  "https://www.instagram.com/hemant_chutani",
                  "https://youtube.com/@msmekibaat"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://msmekibaat.com/#website",
                "url": "https://msmekibaat.com/",
                "name": "MSME Ki Baat",
                "publisher": { "@id": "https://msmekibaat.com/#organization" },
                "inLanguage": "en-IN"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#breadcrumb",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://msmekibaat.com/" },
                  { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://msmekibaat.com/blogs/" },
                  { "@type": "ListItem", "position": 3, "name": "MSME Samadhaan Portal", "item": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule" }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#webpage",
                "url": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
                "name": "MSME Samadhaan Portal & 45-Day Payment Rule: Recover Delayed Payments Fast",
                "isPartOf": { "@id": "https://msmekibaat.com/#website" },
                "breadcrumb": { "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#breadcrumb" },
                "inLanguage": "en-IN"
              },
              {
                "@type": "BlogPosting",
                "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#article",
                "mainEntityOfPage": { "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#webpage" },
                "headline": "MSME Samadhaan Portal & 45-Day Payment Rule: Recover Delayed Payments Fast",
                "description": "Struggling with delayed payments? Learn how the MSME Samadhaan portal, the 45-day MSME payment rule, and Section 43B(h) help small businesses recover dues faster in 2024-25.",
                "author": { "@id": "https://msmekibaat.com/#hemant-chutani" },
                "publisher": { "@id": "https://msmekibaat.com/#organization" },
                "datePublished": "2026-04-05", // Assuming 2026-04-05 from PDF
                "dateModified": "2026-04-05", // Assuming 2026-04-05 from PDF
                "inLanguage": "en-IN",
                "image": ["https://msmekibaat.com/new-home/msme-ki-bat-logo.webp"],
                "keywords": ["MSME Samadhaan", "45 day payment rule", "MSME payment rule", "Section 43B(h)", "delayed payment MSME", "MSMED Act", "Udyam registration", "MSEFC"]
              },
              {
                "@type": "FAQPage",
                "@id": "https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can I file on MSME Samadhaan without Udyam registration?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Udyam registration is mandatory — without it, the portal will not accept your complaint."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does MSME Samadhaan work — is it litigation?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It is a structured dispute resolution process, not traditional court litigation. Your complaint goes to the MSME Facilitation Council (MSEFC), which first tries conciliation. If that fails, it proceeds to arbitration. MSEFC decisions are legally binding and enforceable like a civil court decree."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much interest can I charge on delayed payments?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You are entitled to compound interest at three times the bank rate set by the RBI, calculated monthly for each month of delay. This interest is non-negotiable and cannot be waived — it is a statutory right under the MSMED Act."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Section 43B(h) apply to all buyers, even small ones?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Section 43B(h) applies regardless of the buyer's size — large corporation, LLP, partnership, or sole proprietor. If they are buying from a Micro or Small Enterprise, the 45-day rule and its tax implications apply fully."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How to login to MSME Samadhaan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Visit samadhaan.dcmsme.gov.in and enter your Udyam Registration Number. Access is verified via OTP sent to your Aadhaar-linked mobile number."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a lawyer to file a complaint on MSME Samadhaan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. The process is designed to be filed independently by the MSME owner. Most businesses handle it themselves."
                    }
                  }
                ]
              }
            ]
          }),
        }}
      />

      {/* Adding hreflang en-in tag */}
      <link rel="alternate" hrefLang="en-in" href="https://msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule" />
    </>
  );
};

export default page;