'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Navbar() {
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Resume page is always white / light background
      if (pathname === '/resume') {
        setIsLightSection(true);
        return;
      }

      // Dynamic project pages are dark background
      if (pathname.startsWith('/projects/')) {
        setIsLightSection(false);
        return;
      }

      // On Homepage ('/'): check whether navbar is over light sections (#work, #about, #skills)
      // or over dark sections (#hero, #contact)
      const workEl = document.getElementById('work');
      const contactEl = document.getElementById('contact');

      if (workEl) {
        const workRect = workEl.getBoundingClientRect();
        const contactRect = contactEl?.getBoundingClientRect();

        // 90px accounts for top padding + navbar height
        const reachedWork = workRect.top <= 90;
        const reachedContact = contactRect ? contactRect.top <= 90 : false;

        // In light area when scrolled past top of work section and not yet reached dark contact footer
        const isOverLight = reachedWork && !reachedContact;
        setIsLightSection(isOverLight);
      } else {
        setIsLightSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
      <header className="fixed top-0 left-0 right-0 z-50 pt-3.5 sm:pt-5 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-7xl mx-auto rounded-full px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            isLight
              ? 'bg-white/90 text-black border border-[#E2E0D8] shadow-md shadow-black/[0.04] backdrop-blur-md'
              : 'bg-[#141615]/85 text-white border border-white/[0.12] shadow-xl shadow-black/30 backdrop-blur-md'
          }`}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] rounded-sm py-1"
          >
            <span
              className={`font-bold tracking-tight text-base sm:text-lg transition-colors duration-200 ${
                isLight ? 'text-black' : 'text-white'
              }`}
            >
              {portfolioData.personal.name}
            </span>
            <span
              className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border transition-colors duration-200 ${
                isLight
                  ? 'bg-[#EBEAE3] text-black border-[#E2E0D8]'
                  : 'bg-white/[0.08] text-[#C6F277] border-[#C6F277]/30'
              }`}
            >
              SHOPIFY &middot; DEV
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs uppercase tracking-wider font-semibold">
            <Link
              href="/#work"
              onClick={(e) => handleNavClick(e, 'work')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-black hover:opacity-70' : 'text-white/85 hover:text-white'
              }`}
            >
              Selected Work
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-black hover:opacity-70' : 'text-white/85 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              href="/#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-black hover:opacity-70' : 'text-white/85 hover:text-white'
              }`}
            >
              Tech Stack
            </Link>
            <Link
              href="/resume"
              className={`transition-colors py-1 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                pathname === '/resume'
                  ? isLight
                    ? 'text-black font-extrabold underline underline-offset-4'
                    : 'text-[#C6F277] font-extrabold'
                  : isLight
                  ? 'text-black hover:opacity-70'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              <span>R&eacute;sum&eacute;</span>
              <FileText
                className={`w-3.5 h-3.5 ${
                  isLight ? 'text-black' : 'text-[#C6F277]'
                }`}
              />
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight ? 'text-black hover:opacity-70' : 'text-white/85 hover:text-white'
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
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
                isLight
                  ? 'bg-black text-white hover:bg-[#20231F]'
                  : 'bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60]'
              }`}
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
            className={`md:hidden p-2 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F277] ${
              isLight
                ? 'border-[#E2E0D8] text-black hover:bg-[#EBEAE3]'
                : 'border-white/20 text-white hover:bg-white/[0.1]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 pt-28 px-6 pb-10 flex flex-col justify-between backdrop-blur-2xl transition-colors md:hidden ${
            isLight
              ? 'bg-white/95 text-black'
              : 'bg-[#141615]/95 text-white'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6 pt-4">
            <p
              className={`text-[10px] font-mono uppercase tracking-widest ${
                isLight ? 'text-black/60' : 'text-[#747970]'
              }`}
            >
              Navigation
            </p>
            <nav className="flex flex-col space-y-4 text-xl font-bold">
              <Link
                href="/#work"
                onClick={(e) => handleNavClick(e, 'work')}
                className={`py-2 border-b flex items-center justify-between transition-colors ${
                  isLight
                    ? 'border-[#E2E0D8] text-black hover:text-[#747970]'
                    : 'border-white/[0.08] text-white hover:text-[#C6F277]'
                }`}
              >
                <span>Selected Work</span>
                <span className="text-xs font-mono opacity-60">01</span>
              </Link>
              <Link
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`py-2 border-b flex items-center justify-between transition-colors ${
                  isLight
                    ? 'border-[#E2E0D8] text-black hover:text-[#747970]'
                    : 'border-white/[0.08] text-white hover:text-[#C6F277]'
                }`}
              >
                <span>About</span>
                <span className="text-xs font-mono opacity-60">02</span>
              </Link>
              <Link
                href="/#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
                className={`py-2 border-b flex items-center justify-between transition-colors ${
                  isLight
                    ? 'border-[#E2E0D8] text-black hover:text-[#747970]'
                    : 'border-white/[0.08] text-white hover:text-[#C6F277]'
                }`}
              >
                <span>Tech Stack</span>
                <span className="text-xs font-mono opacity-60">03</span>
              </Link>
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b flex items-center justify-between transition-colors ${
                  isLight
                    ? 'border-[#E2E0D8] text-black'
                    : 'border-white/[0.08] text-[#C6F277]'
                }`}
              >
                <span>View Full R&eacute;sum&eacute;</span>
                <FileText className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`py-2 border-b flex items-center justify-between transition-colors ${
                  isLight
                    ? 'border-[#E2E0D8] text-black hover:text-[#747970]'
                    : 'border-white/[0.08] text-white hover:text-[#C6F277]'
                }`}
              >
                <span>Contact</span>
                <span className="text-xs font-mono opacity-60">04</span>
              </Link>
            </nav>
          </div>

          <div
            className={`pt-8 border-t space-y-4 ${
              isLight ? 'border-[#E2E0D8]' : 'border-white/[0.08]'
            }`}
          >
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-bold text-xs uppercase tracking-wider ${
                isLight
                  ? 'bg-black text-white hover:bg-[#20231F]'
                  : 'bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60]'
              }`}
            >
              <span>{portfolioData.personal.email}</span>
            </a>
            <p
              className={`text-center text-xs font-mono ${
                isLight ? 'text-black/60' : 'text-[#747970]'
              }`}
            >
              {portfolioData.personal.availability}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
