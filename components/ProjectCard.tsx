'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '@/data/portfolio';
import ScrollPreview from './ScrollPreview';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  // Status color styles
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Client Work':
        return 'bg-[#20231F] text-[#C6F277] border-black/10';
      case 'Work in Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Design Concept':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      default:
        return 'bg-[#EBEAE3] text-[#20231F] border-[#E2E0D8]';
    }
  };

  return (
    <article
      className="group relative rounded-2xl bg-white border border-[#E2E0D8] overflow-hidden hover:border-[#20231F]/30 hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-300"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 550px' }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-6 p-4 sm:p-6 lg:p-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Full Homepage Scroll Preview Window (7 cols) */}
        <div className={`lg:col-span-7 relative ${!isEven ? 'lg:order-2' : ''}`}>
          {/* Status & Category Badge Overlay */}
          <div className="absolute top-14 left-4 z-30 flex flex-wrap gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#20231F]/90 text-white shadow-md backdrop-blur-sm">
              {project.category}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-medium border shadow-md backdrop-blur-sm ${getStatusBadge(project.status)}`}>
              {project.status}
            </span>
          </div>

          <ScrollPreview
            imageSrc={project.image}
            imageAlt={project.imageAlt}
            projectTitle={project.title}
            liveUrl={project.liveUrl}
            containerHeight={460}
            duration={project.scrollDuration || 7.5}
          />
        </div>

        {/* Project Editorial Information (5 cols) */}
        <div className={`lg:col-span-5 p-2 sm:p-4 flex flex-col justify-between ${!isEven ? 'lg:order-1' : ''}`}>
          <div>
            {/* Project Index Number & Year */}
            <div className="flex items-center justify-between text-xs font-mono text-[#747970] mb-3 pb-3 border-b border-[#E2E0D8]">
              <span>PROJECT {project.number}</span>
              <span>{project.year}</span>
            </div>

            {/* Title */}
            <Link
              href={`/projects/${project.slug}`}
              className="group/title block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F] rounded"
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#20231F] group-hover/title:text-black transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-5 h-5 text-[#747970] group-hover/title:text-black group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
              </h3>
            </Link>

            {/* Tagline */}
            <p className="mt-2 text-xs font-mono text-[#747970] font-medium leading-relaxed">
              {project.tagline}
            </p>

            {/* Summary */}
            <p className="mt-4 text-sm text-[#3E423C] leading-relaxed line-clamp-3">
              {project.summary}
            </p>

            {/* Key Focus Points */}
            <div className="mt-5 pt-4 border-t border-[#E2E0D8]/70">
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#747970] mb-2 font-semibold">
                Core Focus Areas
              </p>
              <ul className="space-y-1.5 text-xs text-[#20231F]">
                {project.focusAreas.slice(0, 3).map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#20231F]/40 shrink-0" />
                    <span className="truncate">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 pt-4 border-t border-[#E2E0D8] space-y-4">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EBEAE3] text-[#20231F] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center justify-between pt-1">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#20231F] hover:text-black group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F] py-1"
              >
                <span>View Full Case Study</span>
                <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#747970] hover:text-[#20231F] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
                  title="Visit genuine live storefront"
                >
                  <span>Live Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
