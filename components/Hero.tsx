'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ArrowDown, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0 },
          '-=0.5'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          stickerRef.current,
          { opacity: 0, scale: 0.9, rotate: -6 },
          { opacity: 1, scale: 1, rotate: -2, duration: 1.1, ease: 'back.out(1.4)' },
          '-=0.7'
        )
        .fromTo(
          noteRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] lg:min-h-screen bg-[#141615] text-[#F6F5F0] pt-28 sm:pt-36 lg:pt-40 pb-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle Ambient Background Mesh & Lines */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[350px] bg-[#C6F277]/[0.035] blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-[#1C201D]/80 backdrop-blur-md mb-8 text-xs font-mono tracking-wide text-[#A0A49E]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F277] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F277]"></span>
              </span>
              <span>{portfolioData.personal.location} &middot; Open to opportunities</span>
            </div>

            {/* Oversized Headline with Hand-Drawn Underline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F6F5F0] leading-[1.08] max-w-2xl"
            >
              Shopify storefronts that{' '}
              <span className="relative inline-block text-[#C6F277] whitespace-nowrap">
                keep getting better.
                {/* Hand-drawn SVG pen underline in accentLime */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-4 sm:h-6 text-[#C6F277] pointer-events-none overflow-visible"
                  viewBox="0 0 280 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 18 C 60 6, 180 4, 276 14 C 200 24, 70 22, 18 24"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={subtitleRef}
              className="mt-7 text-base sm:text-lg lg:text-xl text-[#A0A49E] leading-relaxed max-w-xl font-normal"
            >
              {portfolioData.personal.subheadline}
            </p>

            {/* Action CTAs */}
            <div
              ref={ctaRef}
              className="mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60] shadow-md shadow-[#C6F277]/10 hover:shadow-[#C6F277]/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-xs uppercase tracking-wider text-[#F6F5F0] bg-white/[0.04] border border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.08] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FileText className="w-3.5 h-3.5 text-[#C6F277]" />
                <span>View R&eacute;sum&eacute;</span>
              </Link>
            </div>

            {/* Experience & Core Stack Proof Points */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 sm:gap-10 w-full max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-[#F6F5F0]">50+</p>
                <p className="text-[11px] text-[#747970] uppercase font-mono mt-0.5">Engagements</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-[#C6F277]">OS 2.0</p>
                <p className="text-[11px] text-[#747970] uppercase font-mono mt-0.5">Theme Architecture</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono text-[#F6F5F0]">Liquid</p>
                <p className="text-[11px] text-[#747970] uppercase font-mono mt-0.5">&amp; Modern Frontend</p>
              </div>
            </div>
          </div>

          {/* Right Column: The Apple Sticker Memoji / Cutout Feature (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center mt-6 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md w-full flex flex-col items-center">
              
              {/* The Apple Sticker Die-cut Frame */}
              <div
                ref={stickerRef}
                className="apple-sticker-frame relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] bg-[#1C201D] overflow-hidden border-4 border-white cursor-pointer select-none -rotate-2"
              >
                {/* Image Cutout */}
                <Image
                  src="/avatar.jpg"
                  alt={`${portfolioData.personal.name} Memoji Portrait`}
                  width={640}
                  height={640}
                  priority
                  className="w-full h-full object-cover object-top"
                />

                {/* Sticker Sheen Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/25 pointer-events-none" />

                {/* Verified Sticker Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#141615]/90 text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20 shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C6F277]" />
                  <span>Shopify Expert</span>
                </div>
              </div>

              {/* Hand-Drawn Annotation & Curved Arrow Pointing to Sticker */}
              <div ref={noteRef} className="relative mt-6 sm:mt-8 w-full max-w-xs flex flex-col items-center text-center">
                {/* SVG Curved Arrow pointing up to the sticker */}
                <svg
                  className="w-24 h-12 text-[#C6F277] mb-1 -rotate-6"
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 45 C 50 40, 80 30, 85 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />
                  <path
                    d="M75 12 L 85 8 L 88 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Handwritten Note in Caveat */}
                <p className="font-hand text-2xl sm:text-3xl text-[#C6F277] font-bold leading-tight rotate-[-2deg]">
                  that&apos;s me! I&apos;ll be the one actually writing the Liquid &amp; building your store
                </p>

                <p className="font-mono text-[11px] text-[#A0A49E] uppercase tracking-widest mt-2">
                  No agencies &middot; No juniors &middot; Just clean code
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="w-full flex justify-center items-center pt-12 pb-4 text-xs font-mono tracking-widest text-[#747970] uppercase z-10"
      >
        <a
          href="#work"
          onClick={scrollToWork}
          className="flex items-center gap-2.5 hover:text-[#C6F277] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] rounded px-2 py-1"
        >
          <span>Scroll down to Selected Work</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C6F277]" />
        </a>
      </div>
    </section>
  );
}
