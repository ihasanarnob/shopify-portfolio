'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Detect if user has scrolled into light section (#work or subsequent sections on home page)
      if (pathname === '/') {
        const workSection = document.getElementById('work');
        if (workSection) {
          const rect = workSection.getBoundingClientRect();
          // If work section top has reached near the navbar (70px)
          setIsLightSection(rect.top <= 70);
        } else {
          setIsLightSection(false);
        }
      } else {
        // If on /projects/[slug] or /resume, check page background or default to appropriate state
        setIsLightSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle smooth anchor scroll or navigate home first if on another route
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      // Let standard link navigate to /#targetId
      setMobileMenuOpen(false);
    }
  };

  // Keyboard escape for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isLight = isLightSection;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isLight
              ? 'bg-[#F6F5F0]/90 text-[#20231F] border-b border-[#E2E0D8] backdrop-blur-md shadow-sm'
              : 'bg-[#141615]/85 text-[#F6F5F0] border-b border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent text-[#F6F5F0] border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] rounded-sm py-1"
          >
            <span
              className={`font-semibold tracking-tight text-base sm:text-lg transition-colors duration-200 ${
                isLight ? 'text-[#20231F]' : 'text-[#F6F5F0]'
              }`}
            >
              {portfolioData.personal.name}
            </span>
            <span className="text-[11px] font-mono tracking-wider px-2 py-0.5 rounded-full border transition-colors duration-200 bg-transparent text-[#C6F277] border-[#C6F277]/30">
              SHOPIFY &middot; DEV
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs uppercase tracking-wider font-medium">
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-[#747970] hover:text-[#20231F]' : 'text-[#A0A49E] hover:text-white'
              }`}
            >
              Selected Work
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-[#747970] hover:text-[#20231F]' : 'text-[#A0A49E] hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-[#747970] hover:text-[#20231F]' : 'text-[#A0A49E] hover:text-white'
              }`}
            >
              Tech Stack
            </Link>
            <Link
              href="/resume"
              className={`transition-colors py-1 flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                pathname === '/resume'
                  ? 'text-[#C6F277] font-semibold'
                  : isLight
                  ? 'text-[#747970] hover:text-[#20231F]'
                  : 'text-[#A0A49E] hover:text-white'
              }`}
            >
              <span>R&eacute;sum&eacute;</span>
              <FileText className="w-3 h-3 text-[#C6F277]" />
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-[#747970] hover:text-[#20231F]' : 'text-[#A0A49E] hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60] shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] focus-visible:ring-offset-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className={`md:hidden p-2 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
              isLight
                ? 'border-[#E2E0D8] text-[#20231F] hover:bg-[#EBEAE3]'
                : 'border-white/10 text-white hover:bg-white/[0.05]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#141615]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6 pt-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#747970]">
              Navigation
            </p>
            <nav className="flex flex-col space-y-4 text-lg font-medium text-white">
              <Link
                href="/#work"
                onClick={(e) => handleNavClick(e, 'work')}
                className="py-1 border-b border-white/[0.06] hover:text-[#C6F277] transition-colors flex items-center justify-between"
              >
                <span>Selected Work</span>
                <span className="text-xs font-mono text-[#747970]">01</span>
              </Link>
              <Link
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="py-1 border-b border-white/[0.06] hover:text-[#C6F277] transition-colors flex items-center justify-between"
              >
                <span>About</span>
                <span className="text-xs font-mono text-[#747970]">02</span>
              </Link>
              <Link
                href="/#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                className="py-1 border-b border-white/[0.06] hover:text-[#C6F277] transition-colors flex items-center justify-between"
              >
                <span>Tech Stack</span>
                <span className="text-xs font-mono text-[#747970]">03</span>
              </Link>
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-white/[0.06] hover:text-[#C6F277] transition-colors flex items-center justify-between"
              >
                <span>R&eacute;sum&eacute;</span>
                <span className="text-xs font-mono text-[#C6F277]">PDF</span>
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="py-1 border-b border-white/[0.06] hover:text-[#C6F277] transition-colors flex items-center justify-between"
              >
                <span>Contact</span>
                <span className="text-xs font-mono text-[#747970]">04</span>
              </Link>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#A0A49E]">
              <span className="w-2 h-2 rounded-full bg-[#C6F277] animate-pulse" />
              <span>{portfolioData.personal.availability}</span>
            </div>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-full text-center block py-3 rounded-xl bg-[#C6F277] text-[#141615] font-semibold text-sm"
            >
              Email Directly
            </a>
          </div>
        </div>
      )}
    </>
  );
}
