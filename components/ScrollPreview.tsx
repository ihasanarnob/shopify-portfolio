'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown, Globe, Maximize2, MousePointer } from 'lucide-react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [actualHeight, setActualHeight] = useState(containerHeight);

  useEffect(() => {
    if (containerRef.current) {
      setActualHeight(containerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setActualHeight(containerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className="group/preview relative w-full rounded-2xl overflow-hidden bg-[#181A19] border border-[#E2E0D8]/80 shadow-md transition-shadow duration-300 hover:shadow-2xl select-none"
      style={{ height: `${containerHeight}px` }}
      aria-label={`${projectTitle} full homepage scroll preview. Hover or tap to scroll.`}
    >
      {/* Browser Mockup Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-10 px-4 bg-[#141615]/90 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#A0A49E]">
        {/* Browser Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
        </div>

        {/* URL Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] text-[#A0A49E]">
          <Globe className="w-3 h-3 text-[#C6F277]" />
          <span className="truncate max-w-[200px]">
            {liveUrl ? liveUrl.replace(/^https?:\/\//, '') : `${projectTitle.toLowerCase().replace(/\s+/g, '')}.myshopify.com`}
          </span>
        </div>

        {/* Dynamic Status / Hover Hint */}
        <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold tracking-wider">
          <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isHovered ? 'bg-[#C6F277] animate-pulse' : 'bg-[#747970]'}`} />
          <span className="text-[#F6F5F0]">
            {isHovered ? 'Scrolling...' : 'Hover to Scroll'}
          </span>
        </div>
      </div>

      {/* Scrolling Image Canvas */}
      <div className="relative w-full h-full pt-10 overflow-hidden bg-[#141615]">
        <div
          className="w-full will-change-transform"
          style={{
            transform: isHovered
              ? `translateY(calc(-100% + ${actualHeight - 40}px))`
              : 'translateY(0px)',
            transitionProperty: 'transform',
            transitionDuration: isHovered ? `${duration}s` : '1.4s',
            transitionTimingFunction: isHovered
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
            className="w-full h-auto block select-none pointer-events-none"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* Floating Interactive Badge (fades out while actively scrolling) */}
      <div
        className={`absolute bottom-4 right-4 z-20 pointer-events-none transition-all duration-300 ${
          isHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141615]/85 backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-[#F6F5F0] shadow-lg">
          <MousePointer className="w-3 h-3 text-[#C6F277]" />
          <span>Hover to explore full page</span>
          <ArrowDown className="w-3 h-3 text-[#C6F277] animate-bounce" />
        </div>
      </div>
    </div>
  );
}
