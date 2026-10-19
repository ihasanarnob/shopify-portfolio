import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { portfolioData, Project } from '@/data/portfolio';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import ScrollPreview from '@/components/ScrollPreview';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Wrench,
  Target,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Case Study | ${portfolioData.personal.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${portfolioData.personal.name} — Shopify Developer`,
      description: project.summary,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.imageAlt }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = portfolioData.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? portfolioData.projects[projectIndex - 1] : portfolioData.projects[portfolioData.projects.length - 1];
  const nextProject =
    projectIndex < portfolioData.projects.length - 1 ? portfolioData.projects[projectIndex + 1] : portfolioData.projects[0];

  return (
    <div className="bg-[#141615] text-[#F6F5F0] min-h-screen selection:bg-[#C6F277] selection:text-[#141615]">
      <Navbar />

      <main className="pt-28 sm:pt-36 lg:pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Back Navigation Breadcrumb */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A0A49E] hover:text-[#C6F277] transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] rounded px-1 py-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Selected Work</span>
          </Link>

          {/* Project Header Info */}
          <div className="space-y-4 pb-10 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.05] text-[#C6F277] border border-white/[0.1]">
                PROJECT {project.number} &middot; {project.category}
              </span>
              <span className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-[#20231F] text-white border border-white/10">
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F5F0] leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#A0A49E] font-normal leading-relaxed max-w-3xl">
              {project.tagline}
            </p>
          </div>

          {/* Full-Width Interactive Showcase Scroll Preview Window */}
          <div className="my-10">
            <ScrollPreview
              imageSrc={project.image}
              imageAlt={project.imageAlt}
              projectTitle={project.title}
              liveUrl={project.liveUrl}
              containerHeight={580}
              duration={project.scrollDuration || 8}
            />
          </div>

          {/* Project Quick Facts Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#1C201D] border border-white/[0.08] mb-16 text-xs font-mono">
            <div>
              <p className="text-[#747970] uppercase">Role / Scope</p>
              <p className="text-white font-medium mt-1 font-sans text-sm">{project.role}</p>
            </div>
            <div>
              <p className="text-[#747970] uppercase">Timeline</p>
              <p className="text-white font-medium mt-1 font-sans text-sm">{project.year}</p>
            </div>
            <div>
              <p className="text-[#747970] uppercase">Implementation</p>
              <p className="text-[#C6F277] font-medium mt-1 font-sans text-sm">{project.status}</p>
            </div>
            <div>
              <p className="text-[#747970] uppercase">Live Storefront</p>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#C6F277] transition-colors mt-1 font-sans text-sm flex items-center gap-1 font-medium underline underline-offset-4"
                >
                  <span>Visit Store</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <p className="text-[#A0A49E] mt-1 font-sans text-sm">Design / Concept</p>
              )}
            </div>
          </div>

          {/* Editorial Content Breakdown */}
          <div className="space-y-16">
            {/* 1. Overview & Challenge */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6F277] uppercase tracking-widest">
                <Target className="w-4 h-4" />
                <span>The Challenge &amp; Requirements</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F6F5F0]">
                Identifying customer friction and business constraints.
              </h2>
              <p className="text-base sm:text-lg text-[#A0A49E] leading-relaxed">
                {project.challenge}
              </p>
            </section>

            {/* 2. Key Objectives */}
            <section className="space-y-6 p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6F277] uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                <span>Project Objectives</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {project.objectives.map((obj, i) => (
                  <div key={i} className="space-y-2">
                    <span className="text-xs font-mono text-[#C6F277]">0{i + 1}.</span>
                    <p className="text-sm text-slate-300 leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. My Responsibilities */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6F277] uppercase tracking-widest">
                <Wrench className="w-4 h-4" />
                <span>My Actual Responsibilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F6F5F0]">
                Deliverables, technical tasks, and storefront execution.
              </h2>
              <ul className="space-y-3 pt-2">
                {project.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#1C201D] border border-white/[0.06]">
                    <span className="w-2 h-2 rounded-full bg-[#C6F277] mt-1.5 shrink-0" />
                    <span className="text-sm text-[#F6F5F0] leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Design & Implementation Approach */}
            <section className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6F277] uppercase tracking-widest">
                <Layers className="w-4 h-4" />
                <span>Methodology &amp; Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F6F5F0]">
                Structured execution from discovery to release.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {project.approach.map((step, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#1C201D] border border-white/[0.07] space-y-3">
                    <span className="text-xs font-mono text-[#747970]">PHASE 0{i + 1}</span>
                    <p className="text-sm text-slate-200 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Tech Stack Matrix */}
            <section className="p-7 sm:p-9 rounded-2xl bg-[#1C201D] border border-white/[0.08] space-y-4">
              <p className="text-xs font-mono text-[#747970] uppercase tracking-widest">
                Technologies &amp; Architecture
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/[0.1] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 6. Outcome & Status Verification */}
            <section className="p-7 sm:p-9 rounded-2xl bg-[#1C201D] border border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C6F277] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Project Status &amp; Deliverables</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
              {project.statusNote && (
                <p className="text-xs font-mono text-[#747970] pt-2 border-t border-white/[0.06]">
                  Status Note: {project.statusNote}
                </p>
              )}
            </section>
          </div>

          {/* Prev / Next Project Navigation Bar */}
          <div className="mt-20 pt-12 border-t border-white/[0.08] flex items-center justify-between gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex flex-col items-start gap-1 p-3 rounded-lg hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277]"
            >
              <span className="text-[11px] font-mono text-[#747970] uppercase flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Case</span>
              </span>
              <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#C6F277] transition-colors">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href="/#work"
              className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/[0.1] text-xs font-mono text-[#A0A49E] hover:text-white transition-colors"
            >
              All Projects
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col items-end gap-1 p-3 rounded-lg hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277]"
            >
              <span className="text-[11px] font-mono text-[#747970] uppercase flex items-center gap-1">
                <span>Next Case</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#C6F277] transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <ContactSection />
    </div>
  );
}
