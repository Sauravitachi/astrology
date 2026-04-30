import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FloatingWhatsApp from "./Components/FloatingWhatsApp";
import { LanguageProvider } from "./context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sashtravani.com"),
  title: "Talk to Best Astrologers Online | Free Kundli | Sashtravani",
  description: "Get accurate predictions for Love, Career, and Marriage from India's most trusted Vedic astrologers. Get your Free Kundli & powerful remedies. Consult Now!",
  keywords: ["Vedic Astrology", "Daily Horoscope", "Career Astrology", "Marriage Matching", "Kundli Analysis", "Acharya Ankit", "Sashtravani"],
  authors: [{ name: "Acharya Ankit" }],
  openGraph: {
    title: "Sashtravani | Premium Astrology & Cosmic Insights",
    description: "Explore your cosmic destiny with expert astrological readings and daily insights.",
    url: "https://sashtravani.com",
    siteName: "Sashtravani",
    images: [
      {
        url: "/page.jpeg",
        width: 1200,
        height: 630,
        alt: "Sashtravani Astrology Guidance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sashtravani | Expert Vedic Astrology",
    description: "Personalized celestial insights for your career, love, and life journey.",
    images: ["/page.jpeg"],
  },
  alternates: {
    canonical: "https://sashtravani.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} bg-void text-white antialiased`}
        style={{ minHeight: '100vh' }}
      >
        <LanguageProvider>
          <div className="fixed inset-0 z-[-1] bg-[#020617]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,157,0,0.08)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.05)_0%,transparent_70%)]"></div>
            <Image
              src="/page.jpeg"
              alt="Background"
              fill
              priority
              className="object-cover opacity-20 mix-blend-screen"
            />
          </div>

          <Header />
          <main className="relative pt-24 min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Sashtravani",
                "image": "https://sashtravani.com/page.jpeg",
                "@id": "https://sashtravani.com",
                "url": "https://sashtravani.com",
                "telephone": "+91-7986006557",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Vedic Tower",
                  "addressLocality": "Mohali",
                  "addressRegion": "Punjab",
                  "postalCode": "160071",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 31.6340,
                  "longitude": 74.8723
                },
                "priceRange": "$$",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sashtravani.com"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Are the predictions accurate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, our verified Vedic astrologers use precise planetary calculations to give highly accurate predictions based on your unique birth chart."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is my data private?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "100%. We use strict privacy protocols. Your details and conversations are strictly confidential."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
