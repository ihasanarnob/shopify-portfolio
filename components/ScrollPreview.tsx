'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowDown, Globe, Play, MousePointer } from 'lucide-react';

interface ScrollPreviewProps {
  imageSrc: string;
  imageAlt: string;
  projectTitle: string;
  liveUrl?: string;
  containerHeight?: number;
  duration?: number;
}

export default function ScrollPreview({
  imageSrc,
  imageAlt,
  projectTitle,
  liveUrl,
  containerHeight = 440,
  duration = 7.5,
}: ScrollPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [actualHeight, setActualHeight] = useState(containerHeight);

  const isScrolling = isHovered || isPlaying;

  useEffect(() => {
    if (containerRef.current) {
      setActualHeight(containerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setActualHeight(containerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-reset when scroll finishes playing on mobile
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      setIsPlaying(false);
    }, (duration + 0.8) * 1000);
    return () => clearTimeout(timer);
  }, [isPlaying, duration]);

  const handlePlayScroll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group/preview relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-[#181A19] border border-[#E2E0D8]/80 shadow-md transition-shadow duration-300 hover:shadow-2xl select-none"
      aria-label={`${projectTitle} full homepage scroll preview. Tap play scroll or hover to scroll.`}
    >
      {/* Browser Mockup Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-11 px-3 sm:px-4 bg-[#141615]/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A0A49E]">
        {/* Browser Traffic Lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
        </div>

        {/* URL Pill (clean on both mobile and desktop) */}
        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] sm:text-[11px] text-[#A0A49E] max-w-[200px] sm:max-w-none">
          <Globe className="w-3 h-3 text-[#C6F277] shrink-0" />
          <span className="truncate">
            {liveUrl ? liveUrl.replace(/^https?:\/\//, '') : `${projectTitle.toLowerCase().replace(/\s+/g, '')}.myshopify.com`}
          </span>
        </div>

        {/* Desktop Dynamic Hover Status */}
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase font-semibold tracking-wider">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              isHovered ? 'bg-[#C6F277] animate-pulse' : 'bg-[#747970]'
            }`}
          />
          <span className="text-[#F6F5F0]">
            {isHovered ? 'Scrolling...' : 'Hover to Scroll'}
          </span>
        </div>

        {/* Mobile Spacer to balance traffic lights */}
        <div className="sm:hidden w-8" />
      </div>

      {/* Scrolling Image Canvas */}
      <div className="relative w-full h-full pt-11 overflow-hidden bg-[#141615]">
        <div
          className={`w-full ${isScrolling ? 'will-change-transform' : ''}`}
          style={{
            transform: isScrolling
              ? `translate3d(0, calc(-100% + ${actualHeight - 44}px), 0)`
              : 'translate3d(0, 0px, 0)',
            transitionProperty: 'transform',
            transitionDuration: isScrolling ? `${duration}s` : '1.2s',
            transitionTimingFunction: isScrolling
              ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              : 'cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-auto block select-none pointer-events-none"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Mobile Single Action Pill (Play Scroll only - no pause) */}
      <div className="sm:hidden absolute bottom-3 right-3 z-30">
        <button
          type="button"
          onClick={handlePlayScroll}
          aria-label={`Play screenshot preview for ${projectTitle}`}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono shadow-xl border backdrop-blur-md active:scale-95 transition-all duration-200 ${
            isPlaying
              ? 'bg-[#C6F277] text-[#141615] border-[#C6F277] font-bold shadow-[#C6F277]/25'
              : 'bg-[#141615]/90 text-white border-white/20 hover:bg-[#141615]'
          }`}
        >
          <Play className={`w-3.5 h-3.5 fill-current ${isPlaying ? 'text-[#141615]' : 'text-[#C6F277]'}`} />
          <span>{isPlaying ? 'Playing...' : 'Play Scroll'}</span>
        </button>
      </div>

      {/* Desktop Floating Hover Hint (fades out while actively scrolling) */}
      <div
        className={`hidden sm:block absolute bottom-4 right-4 z-20 pointer-events-none transition-all duration-300 ${
          isScrolling ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141615]/85 backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-[#F6F5F0] shadow-lg">
          <MousePointer className="w-3 h-3 text-[#C6F277]" />
          <span>Hover to scroll</span>
          <ArrowDown className="w-3 h-3 text-[#C6F277] animate-bounce" />
        </div>
      </div>
    </div>
  );
}
