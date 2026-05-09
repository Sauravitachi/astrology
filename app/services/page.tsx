import type { Metadata } from "next";
import React from 'react';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: "Professional Astrology Services | Vedic Consultations | Sashtravani",
  description: "Explore our specialized astrology services including Kundli Matching, Career Guidance, Marriage Solutions, Kaal Sarp Dosha remedies, Palmistry, and Numerology. Expert insights from Acharya Ankit Sharma.",
  keywords: ["Astrology Services", "Kundli Matching", "Career Astrology", "Marriage Consultation", "Vedic Remedies", "Palmistry", "Numerology", "Vaastu Shastra", "Kaal Sarp Dosha"],
};

export default function ServicesPage() {
  return <ServicesContent />;
}
