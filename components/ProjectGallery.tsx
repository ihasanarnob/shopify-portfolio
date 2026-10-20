'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const projects = portfolioData.projects;

  return (
    <section id="work" className="relative bg-[#F6F5F0] text-[#20231F] py-24 sm:py-32 lg:py-36 transition-colors">
      {/* Subtle light background grid */}
      <div className="absolute inset-0 light-editorial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E2E0D8] mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#747970] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#20231F]" />
              <span>01 &mdash; Selected Storefronts &amp; Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#20231F] leading-[1.08]">
              Commerce built for real business outcomes.
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm text-[#747970] leading-relaxed">
              A curated collection of client storefront solutions, theme customizations, and technical e-commerce architecture.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-[#20231F] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>{projects.length} Verified Production Storefronts</span>
            </div>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
