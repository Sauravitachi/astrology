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
  keywords: ["Vedic Astrology", "Daily Horoscope", "Career Astrology", "Marriage Matching", "Kundli Analysis", "Acharya Ravi", "Sashtravani"],
  authors: [{ name: "Acharya Ravi" }],
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sashtravani",
              "image": "https://sashtravani.com/page.jpeg",
              "@id": "https://sashtravani.com",
              "url": "https://sashtravani.com",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nebula Way",
                "addressLocality": "Star City",
                "postalCode": "000000",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6139,
                "longitude": 77.2090
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://facebook.com/sashtravani",
                "https://instagram.com/sashtravani"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
