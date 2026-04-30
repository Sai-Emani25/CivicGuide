'use client';

import React from 'react';
import { Vote } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F8F6]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]">Democratic Manual</span>
          <div className="flex items-center gap-2 -mt-1">
            <span className="text-3xl font-serif font-black italic text-[#1A1A1A] tracking-tighter">CivicGuide</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#timeline" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">The Process</a>
          <a href="#statistics" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">Analytics</a>
          <a href="#reminders" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">Chronicle</a>
          <a href="#officials" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">Officials</a>
          <a href="#resources" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">Resources</a>
          <a href="#assistant" className="text-[11px] font-black text-[#1A1A1A] hover:text-[#D22B2B] transition-colors uppercase tracking-[0.25em]">Assistant</a>
          <a 
            href="https://vote.gov" 
            target="_blank" 
            className="px-6 py-2 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#D22B2B] transition-all"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t border-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-serif font-black italic text-[#1A1A1A]">CivicGuide</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1 italic">Est. 2024 • Non-Partisan</span>
        </div>
        
        <p className="text-[11px] font-medium text-gray-500 text-center md:text-left uppercase tracking-tight max-w-md">
          &copy; {new Date().getFullYear()} Civic Foundation. All rights reserved. 
          <br className="hidden md:block" />
          Information verified against official government documentation and USA.gov APIs.
        </p>

        <div className="flex gap-8">
          <a href="https://usa.gov" target="_blank" className="text-[10px] font-black text-[#1A1A1A] hover:text-[#D22B2B] uppercase tracking-widest border-b border-[#1A1A1A]">USA.gov</a>
          <a href="https://vote.org" target="_blank" className="text-[10px] font-black text-[#1A1A1A] hover:text-[#D22B2B] uppercase tracking-widest border-b border-[#1A1A1A]">Vote.org</a>
        </div>
      </div>
    </footer>
  );
}
