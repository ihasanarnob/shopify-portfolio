import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#141615] text-[#F6F5F0] min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-md space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C6F277]">
            404 &mdash; Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            This case study or page does not exist.
          </h1>
          <p className="text-sm text-[#A0A49E] leading-relaxed">
            The link you followed may be outdated or the project slug might have changed.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C6F277] text-[#141615] hover:bg-[#b8eb60] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Portfolio</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-[#747970] border-t border-white/[0.08]">
        Iftekhar Hasan &middot; Shopify Developer Portfolio
      </footer>
    </div>
  );
}
