import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Horoscope Predictions | Your Zodiac Guide",
  description: "Get accurate daily horoscope predictions for all zodiac signs. Discover what the stars have in store for your love life, career, and health today.",
  keywords: ["Daily Horoscope", "Zodiac Predictions", "Aries Horoscope", "Taurus Horoscope", "Gemini Horoscope", "Astrology Updates"],
};

export default function HoroscopeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
