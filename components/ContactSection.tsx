'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  ArrowUpRight,
  FileText,
  Phone,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#141615] text-[#F6F5F0] pt-24 sm:pt-32 pb-16 overflow-hidden border-t border-white/[0.08]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Main CTA Section */}
        <div className="max-w-3xl pb-16 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A0A49E] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C6F277]" />
            <span>04 &mdash; Let&apos;s Connect</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F5F0] leading-[1.08]">
            Have a Shopify project or an opportunity in mind?
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A0A49E] leading-relaxed max-w-xl">
            Whether you need a custom Shopify theme built from scratch, technical frontend development, or a dedicated developer on your team, I am available to talk.
          </p>

          {/* Contact Action Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60] shadow-lg shadow-[#C6F277]/10 hover:shadow-[#C6F277]/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277]"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full font-mono text-xs uppercase tracking-wider text-[#F6F5F0] bg-white/[0.04] border border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.08] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#C6F277]" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A0A49E]" />
                  <span>{portfolioData.personal.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Directory Links & Meta Row */}
        <div className="py-12 border-b border-white/[0.08] grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Direct Contact */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#747970] text-[11px]">
              Direct Contact
            </p>
            <div className="space-y-1.5 text-[#F6F5F0]">
              <p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="hover:text-[#C6F277] transition-colors"
                >
                  {portfolioData.personal.email}
                </a>
              </p>
              <p className="font-mono text-[#A0A49E]">
                {portfolioData.personal.phone}
              </p>
              <p className="text-[#747970]">{portfolioData.personal.location}</p>
            </div>
          </div>

          {/* Col 2: Social & Profiles */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#747970] text-[11px]">
              Verified Profiles
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F6F5F0] hover:text-[#C6F277] transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-[#747970]" />
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F6F5F0] hover:text-[#C6F277] transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3 h-3 text-[#747970]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#747970] text-[11px]">
              Quick Navigation
            </p>
            <ul className="space-y-1.5 text-[#A0A49E]">
              <li>
                <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About &amp; Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Tech Stack</a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-[#C6F277] transition-colors flex items-center gap-1">
                  <span>R&eacute;sum&eacute; Page</span>
                  <span className="text-[10px] font-mono text-[#C6F277]">[PDF]</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Availability & Status */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#747970] text-[11px]">
              Current Status
            </p>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C6F277] animate-pulse" />
                <span className="font-medium text-white text-xs">Available for Hire</span>
              </div>
              <p className="text-[11px] text-[#A0A49E] leading-relaxed">
                Full-time remote Shopify/frontend developer positions or select contract engagements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer with Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#747970]">
          <div>
            &copy; {currentYear} {portfolioData.personal.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with Next.js, Tailwind &amp; GSAP</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#F6F5F0] hover:text-[#C6F277] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] rounded px-2 py-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
