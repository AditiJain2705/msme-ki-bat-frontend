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
      "https://www.msmekibaat.com/blogs/msme-samadhaan-portal-45-day-payment-rule",
  },
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
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name:
                  "Can I file on MSME Samadhaan without Udyam registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No. Udyam registration is mandatory — without it, the portal will not accept your complaint.",
                },
              },
              {
                "@type": "Question",
                name: "How does MSME Samadhaan work — is it litigation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "It is a structured dispute resolution process under MSMED Act handled by MSEFC.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default page;
