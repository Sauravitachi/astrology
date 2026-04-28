import type { Metadata } from "next";
import React from "react";
import Main from "./Components/Main";

export const metadata: Metadata = {
  title: "Sashtravani | Expert Vedic Astrology & Daily Horoscopes",
  description: "Get accurate Vedic astrology predictions, daily horoscopes, and personalized life guidance from Acharya Ankit. Your path to cosmic clarity starts here.",
};

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
