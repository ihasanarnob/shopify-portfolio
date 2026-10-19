'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, CheckCircle2, Terminal, Code2, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#EBEAE3] text-[#20231F] py-24 sm:py-32 border-t border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#E2E0D8]">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#747970] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#20231F]" />
            <span>02 &mdash; About &amp; Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#20231F] max-w-2xl leading-[1.1]">
            Bridging technical precision with commercial reality.
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Direct narrative & bio (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#3E423C] leading-relaxed">
            <p className="font-medium text-[#20231F] text-lg sm:text-xl leading-relaxed">
              {portfolioData.about.intro}
            </p>
            <p>
              {portfolioData.about.philosophy}
            </p>
            <p className="text-sm sm:text-base text-[#575B54]">
              Currently serving as a Shopify Executive at Betopia Group, I handle end-to-end storefront delivery across more than 50 client relationships—from translating Figma concepts into responsive Liquid templates, to conducting rigorous User Acceptance Testing (UAT) in Jira and coordinating directly with merchants to launch with confidence.
            </p>

            {/* Approach Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.about.approachPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E2E0D8] space-y-2 shadow-sm"
                >
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#20231F] font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6F277] border border-black/20" />
                    <span>{point.title}</span>
                  </h4>
                  <p className="text-xs text-[#575B54] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Background & Verified Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2E0D8] shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#747970] uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-[#20231F]" />
                <span>Current Role</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#20231F]">Executive, Shopify</h3>
                <p className="text-xs font-mono text-[#747970] mt-0.5">
                  Betopia Group &middot; Dec 2025 – Present &middot; Dhaka
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#3E423C]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Managed 50+ total client storefront engagements from requirements to release.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Translate ambiguous requirements into structured PRD briefs and Figma wireframes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Execute UAT and bug resolution cycles in Jira before client launch approvals.</span>
                </li>
              </ul>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2E0D8] shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#747970] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#20231F]" />
                <span>Education</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#20231F]">
                  B.Sc. in Computer Science and Engineering
                </h3>
                <p className="text-xs font-mono text-[#747970] mt-0.5">
                  Daffodil Institute of IT &middot; 2020 – 2025
                </p>
                <p className="text-xs text-[#575B54] mt-2 leading-relaxed">
                  Rigorous software engineering foundation encompassing web architecture, data structures, algorithms, and software testing.
                </p>
              </div>
            </div>

            {/* Resume Callout Link */}
            <div className="p-5 rounded-xl bg-[#20231F] text-[#F6F5F0] flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase text-[#C6F277]">Complete Dossier</p>
                <p className="text-sm font-semibold text-white mt-0.5">Review employment history</p>
              </div>
              <Link
                href="/resume"
                className="px-4 py-2 rounded-full bg-[#C6F277] text-[#141615] text-xs font-bold uppercase tracking-wider hover:bg-[#b8eb60] transition-colors"
              >
                View R&eacute;sum&eacute;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
