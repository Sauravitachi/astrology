"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container wrapper">
                {/* Logo */}
                <div className="modern-logo">
                    <div className="logo-icon-wrapper">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15 9H22L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9H9L12 2Z" fill="url(#gold-gradient)" />
                            <defs>
                                <linearGradient id="gold-gradient" x1="2" y1="2" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FDE68A" />
                                    <stop offset="0.5" stopColor="#D4AF37" />
                                    <stop offset="1" stopColor="#996E00" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span>Astro<span className="text-gold">Sphere</span></span>
                </div>

                {/* Nav Links */}
                <nav className="modern-nav">
                    <a href="#" className="nav-item active">Home</a>
                    <a href="#about" className="nav-item">About Us</a>
                    <a href="#services" className="nav-item">Services</a>
                    <a href="#horoscope" className="nav-item">Horoscope</a>
                    <a href="#blog" className="nav-item">Insights</a>
                    <a href="#contact" className="nav-item">Contact</a>
                </nav>

                {/* Right Actions */}
                <div className="header-actions">
                    <button className="icon-btn" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <button className="icon-btn" aria-label="Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </button>
                    <a href="#consult" className="btn-glow-gold">Consult Now</a>
                </div>
                
                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" aria-label="Menu">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </header>
    );
}