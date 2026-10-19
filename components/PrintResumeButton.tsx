'use client';

import React from 'react';
import { Printer } from 'lucide-react';

export default function PrintResumeButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#20231F] bg-white border border-[#E2E0D8] hover:bg-[#EBEAE3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20231F]"
      title="Print or Save as PDF via browser"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>Print / Save as PDF</span>
    </button>
  );
}
