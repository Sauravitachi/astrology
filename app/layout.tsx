import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
  title: "AstroSphere | Premium Astrology & Cosmic Insights",
  description: "Explore your cosmic destiny with premium astrological readings, natal charts, and daily insights.",
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
        <div className="fixed inset-0 z-[-1] bg-[#020617]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,157,0,0.08)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.05)_0%,transparent_70%)]"></div>
          <img
            src="/api/image?type=bg"
            alt="Background"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
        </div>

        <Header />
        <main className="relative z-10 pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
