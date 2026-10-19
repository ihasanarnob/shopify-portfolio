'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowDown, FileText, Sparkles, Layers, ShoppingBag, Code, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
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
          visualRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          '-=0.6'
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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
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

            {/* Oversized Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F6F5F0] leading-[1.08] max-w-2xl"
            >
              I build Shopify experiences that make brands{' '}
              <span className="text-[#C6F277] font-serif italic font-normal">stand out.</span>
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

          {/* Right Column: Storefront Architecture Window (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Subtle glow border */}
            <div className="rounded-2xl border border-white/[0.1] bg-[#1C201D] shadow-2xl p-5 sm:p-6 relative overflow-hidden backdrop-blur-md">
              {/* Top macOS Browser Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  <span className="text-xs font-mono text-[#747970] ml-2">
                    storefront-architecture.liquid
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-[#C6F277] border border-white/[0.06]">
                  <ShoppingBag className="w-3 h-3 text-[#C6F277]" />
                  <span>Shopify OS 2.0</span>
                </div>
              </div>

              {/* Code & Architectural Visual Stack */}
              <div className="space-y-4 font-mono text-xs">
                {/* Code Snippet Block */}
                <div className="bg-[#141615] rounded-xl p-4 border border-white/[0.06] text-slate-300 leading-relaxed text-[11px]">
                  <p className="text-[#747970]">// Modular Liquid Section Component</p>
                  <p>
                    <span className="text-[#C6F277]">{'{%'}</span> schema <span className="text-[#C6F277]">{'%}'}</span>
                  </p>
                  <p className="pl-3 text-slate-400">
                    &quot;name&quot;: &quot;Featured Product Showcase&quot;,
                  </p>
                  <p className="pl-3 text-slate-400">
                    &quot;class&quot;: &quot;shopify-section--editorial&quot;,
                  </p>
                  <p className="pl-3 text-slate-400">
                    &quot;settings&quot;: [
                  </p>
                  <p className="pl-6 text-[#C6F277]">
                    &#123; &quot;type&quot;: &quot;product&quot;, &quot;id&quot;: &quot;featured&quot; &#125;,
                  </p>
                  <p className="pl-6 text-slate-400">
                    &#123; &quot;type&quot;: &quot;select&quot;, &quot;id&quot;: &quot;layout_mode&quot; &#125;
                  </p>
                  <p className="pl-3 text-slate-400">]</p>
                  <p>
                    <span className="text-[#C6F277]">{'{%'}</span> endschema <span className="text-[#C6F277]">{'%}'}</span>
                  </p>
                </div>

                {/* Live Section Breakdown Pills */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-[#C6F277]" />
                      <span className="text-white font-medium">Reusable Theme Sections</span>
                    </div>
                    <span className="text-[10px] text-[#A0A49E] font-mono">Drag &amp; Drop</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-medium">Clean JavaScript &amp; Liquid</span>
                    </div>
                    <span className="text-[10px] text-[#A0A49E] font-mono">Zero Bloat</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="text-white font-medium">Figma to Pixel-Perfect Theme</span>
                    </div>
                    <span className="text-[10px] text-[#A0A49E] font-mono">100% Fidelity</span>
                  </div>
                </div>

                {/* Status bar */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#747970]">
                  <span>Environment: Production Ready</span>
                  <span className="text-[#C6F277] flex items-center gap-1">
                    UAT Passed &check;
                  </span>
                </div>
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
