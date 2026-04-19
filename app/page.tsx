"use client";

import { useEffect, useState } from "react";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="layout-wrapper">

      {/* Backgrounds */}
      <div className="bg-image-container">
        <img src="/api/image?type=bg" alt="Cosmic Background" />
      </div>

      {/* HEADER SECTION */}
      <Header />

      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero-section wrapper">
          <div className="hero-content">
            <span className="subtitle">What's Your Sign?</span>
            <h1 className="title-large">
              Read Your Daily <br /> Horoscope Today
            </h1>
            <p className="description">
              Consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className="hero-actions">
              <button className="btn-solid-gold">Read More</button>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="wheel-image-wrapper">
              <img src="/api/image?type=wheel" alt="Zodiac Wheel" className="wheel-image" />
            </div>
          </div>
        </section>

        {/* KNOW ABOUT SECTION */}
        <section id="about" className="know-about-section wrapper">
          <div className="know-about-content">
            <h2>Know About</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it esdehas a more-or less normal distribution of letters.As opposed to using Content here content here making it look likesdesdee readable English.
            </p>
            <p>
              Many desktop publishing packages and web page editors sdesnow use em Ipsum as their default model text, and a search for lorem will usdencover many web sites still in their web page editors sdesnow infancy.
            </p>
            <button className="btn-solid-gold">Read More</button>
          </div>
        </section>
      </main>

    </div>
  );
}


