import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PrintResumeButton from '@/components/PrintResumeButton';
import { portfolioData } from '@/data/portfolio';
import {
  Download,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `R&eacute;sum&eacute; | ${portfolioData.personal.name} — Shopify & Frontend Developer`,
  description: `Professional résumé of ${portfolioData.personal.fullName}, Shopify & Frontend Developer with experience in Shopify Online Store 2.0, Liquid themes, and client storefront delivery.`,
};

export default function ResumePage() {
  return (
    <div className="bg-[#F6F5F0] text-[#20231F] min-h-screen selection:bg-[#C6F277] selection:text-[#141615]">
      {/* Top Navigation Bar - Hidden on Print */}
      <div className="no-print">
        <Navbar />
      </div>

      <main className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Actions Bar - Hidden on Print */}
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2E0D8]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#747970] hover:text-[#20231F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <PrintResumeButton />

            <a
              href={portfolioData.personal.resumePdfUrl}
              download="Iftekhar_Hasan_Shopify_Developer.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#20231F] text-[#F6F5F0] hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
            >
              <Download className="w-3.5 h-3.5 text-[#C6F277]" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Formal Printable Document Card */}
        <div className="bg-white rounded-2xl border border-[#E2E0D8] p-8 sm:p-12 lg:p-16 shadow-lg shadow-black/[0.03]">
          {/* Resume Header */}
          <header className="pb-8 border-b border-[#E2E0D8]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#20231F]">
                  {portfolioData.personal.fullName}
                </h1>
                <p className="text-base font-semibold text-[#575B54] mt-1 font-mono">
                  {portfolioData.personal.role}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-[#747970] space-y-1 mt-3 sm:mt-0">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#20231F]" />
                  {portfolioData.personal.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#20231F]" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline">
                    {portfolioData.personal.email}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#20231F]" />
                  {portfolioData.personal.phone}
                </span>
              </div>
            </div>

            {/* Profile Links */}
            <div className="mt-4 pt-4 border-t border-[#E2E0D8]/60 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#20231F] hover:text-black font-medium"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>linkedin.com/in/ihasanarnob</span>
                <ExternalLink className="w-3 h-3 text-[#747970]" />
              </a>
              <span className="text-[#E2E0D8]">&bull;</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#20231F] hover:text-black font-medium"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>github.com/ihasanarnob</span>
                <ExternalLink className="w-3 h-3 text-[#747970]" />
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="py-8 border-b border-[#E2E0D8]">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#747970] mb-3 font-semibold">
              Professional Profile
            </h2>
            <p className="text-sm text-[#3E423C] leading-relaxed">
              Shopify and Frontend Developer with a Computer Science degree and verified agency experience managing over 50 client storefront engagements. Specialized in custom Shopify Online Store 2.0 theme development, Liquid templates, Figma-to-code translation, and structured User Acceptance Testing (UAT). Known for converting ambiguous merchant requirements into precise technical solutions that drive clean customer journeys and reliable checkout experiences.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="py-8 border-b border-[#E2E0D8]">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#747970] mb-4 font-semibold">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="space-y-1.5">
                <p className="font-bold text-[#20231F] font-mono">Storefront &amp; Themes</p>
                <p className="text-[#575B54] leading-relaxed">
                  Shopify 2.0, Liquid, Custom Theme Development, Reusable Sections &amp; Blocks, Figma to Shopify, App Integrations.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-[#20231F] font-mono">Frontend Engineering</p>
                <p className="text-[#575B54] leading-relaxed">
                  HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, Responsive Web Design, Core Web Vitals.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-[#20231F] font-mono">Process &amp; Tools</p>
                <p className="text-[#575B54] leading-relaxed">
                  Requirements Gathering (PRD), UAT &amp; Bug Tracking (Jira, Trello), Figma Wireframing, Git/GitHub, VS Code.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="py-8 border-b border-[#E2E0D8]">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#747970] mb-6 font-semibold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#20231F]" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-8">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-[#20231F]">
                        {exp.role} &mdash; <span className="font-medium text-[#575B54]">{exp.company}</span>
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#747970]">
                      {exp.period} &middot; {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-[#3E423C] list-none">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20231F] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#EBEAE3] text-[#20231F] text-[10px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Client Relationship Experience & Highlights */}
          <section className="py-8 border-b border-[#E2E0D8]">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#747970] mb-4 font-semibold">
              Client Relationship &amp; Storefront Highlights
            </h2>
            <div className="space-y-3 text-xs text-[#3E423C] leading-relaxed">
              <p>
                <strong className="text-[#20231F]">50+ Client Engagements:</strong> Independently managed storefront relationships (up to 30+ concurrent at peak) from initial requirement gathering through design validation, staging implementation, and live launch across fashion, apparel, lifestyle, and multi-category retail.
              </p>
              <p>
                <strong className="text-[#20231F]">Figma to Shopify Custom Theme Implementation:</strong> Translated high-fidelity UI design files into responsive, performant Shopify themes with modular Liquid section schemas allowing client marketing teams full visual editing freedom.
              </p>
              <p>
                <strong className="text-[#20231F]">Structured Quality Assurance:</strong> Managed User Acceptance Testing (UAT) end to end, documenting reproduction steps and tracking issues to verified closure in Jira.
              </p>
            </div>
          </section>

          {/* Education & Certification */}
          <section className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
            {/* Education */}
            <div className="space-y-3">
              <h2 className="font-mono uppercase tracking-widest text-[#747970] font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#20231F]" />
                <span>Education</span>
              </h2>
              {portfolioData.education.map((edu, eIdx) => (
                <div key={eIdx}>
                  <p className="font-bold text-[#20231F] text-sm">{edu.degree}</p>
                  <p className="text-[#575B54] font-mono mt-0.5">{edu.institution} &middot; {edu.period}</p>
                  {edu.note && <p className="text-[#747970] mt-1.5 leading-relaxed">{edu.note}</p>}
                </div>
              ))}
            </div>

            {/* Certification */}
            <div className="space-y-3">
              <h2 className="font-mono uppercase tracking-widest text-[#747970] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#20231F]" />
                <span>Certification</span>
              </h2>
              {portfolioData.certification.map((cert, cIdx) => (
                <div key={cIdx}>
                  <p className="font-bold text-[#20231F] text-sm">{cert.name}</p>
                  <p className="text-[#575B54] font-mono mt-0.5">{cert.issuer}</p>
                  <p className="text-[#747970] mt-1.5 leading-relaxed">
                    Comprehensive full-stack web development program covering modern JavaScript, React, responsive layouts, and backend APIs.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
