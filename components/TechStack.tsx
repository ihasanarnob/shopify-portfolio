'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { ShoppingBag, Code, Wrench, Check } from 'lucide-react';

export default function TechStack() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShoppingBag className="w-4 h-4 text-[#20231F]" />;
      case 1:
        return <Code className="w-4 h-4 text-[#20231F]" />;
      default:
        return <Wrench className="w-4 h-4 text-[#20231F]" />;
    }
  };

  return (
    <section id="skills" className="relative bg-[#F6F5F0] text-[#20231F] py-24 sm:py-32 border-t border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E2E0D8]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#747970] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#20231F]" />
              <span>03 &mdash; Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#20231F] leading-[1.1]">
              Tools and technologies I use to build modern commerce.
            </h2>
          </div>

          <p className="text-sm text-[#747970] max-w-sm leading-relaxed">
            A verified, practical stack focused on Shopify Liquid architecture, responsive frontend standards, and stable deployment workflows.
          </p>
        </div>

        {/* 3-Column Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {portfolioData.skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="rounded-2xl bg-white border border-[#E2E0D8] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#20231F]/30 transition-all"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#EBEAE3] flex items-center justify-center">
                    {getIcon(catIdx)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#20231F] tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#747970] font-mono mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <ul className="mt-6 space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg border border-transparent hover:border-[#E2E0D8] hover:bg-[#F6F5F0] transition-colors"
                    >
                      <span className={`font-medium ${skill.highlight ? 'text-[#20231F] font-semibold' : 'text-[#575B54]'}`}>
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#20231F] text-[#C6F277]">
                          Core
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Footer Note */}
              <div className="mt-8 pt-4 border-t border-[#E2E0D8] text-[11px] font-mono text-[#747970] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Production tested &amp; verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
