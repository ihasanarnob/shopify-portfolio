'use client';

import React, { useState } from 'react';
import { portfolioData, Project } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import { Layers, Sparkles, Filter } from 'lucide-react';

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Client Work' | 'Design Concept' | 'Work in Progress'>('All');

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.status === activeFilter;
  });

  return (
    <section id="work" className="relative bg-[#F6F5F0] text-[#20231F] py-24 sm:py-32 lg:py-40 transition-colors">
      {/* Subtle light background grid */}
      <div className="absolute inset-0 light-editorial-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E2E0D8]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#747970] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#20231F]" />
              <span>01 &mdash; Selected Storefronts &amp; Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#20231F] leading-[1.08]">
              Commerce built for real business outcomes.
            </h2>
          </div>

          <p className="text-sm text-[#747970] max-w-sm leading-relaxed">
            A curated collection of client storefront solutions, theme customizations, and technical e-commerce concepts.
          </p>
        </div>

        {/* Filter Controls & Authenticity Notice */}
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E0D8] mb-12">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#747970] mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {(['All', 'Client Work', 'Design Concept', 'Work in Progress'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F] ${
                  activeFilter === filter
                    ? 'bg-[#20231F] text-[#F6F5F0] font-semibold shadow-sm'
                    : 'bg-white text-[#747970] hover:text-[#20231F] border border-[#E2E0D8] hover:border-[#20231F]/30'
                }`}
              >
                {filter}
                <span className="ml-1.5 opacity-60 text-[10px]">
                  (
                  {filter === 'All'
                    ? portfolioData.projects.length
                    : portfolioData.projects.filter((p) => p.status === filter).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Transparent Authenticity Disclaimer */}
          <div className="text-[11px] font-mono text-[#747970] flex items-center gap-1.5 bg-[#EBEAE3] px-3 py-1.5 rounded-lg border border-[#E2E0D8]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Honest Scope: Concepts &amp; client works are strictly distinguished.</span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
