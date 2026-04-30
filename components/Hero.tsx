'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, BookmarkCheck, ShieldCheck, Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden bg-[#F9F8F6]">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-[#1A1A1A] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between border-b border-[#1A1A1A] pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:max-w-3xl"
          >
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-[#D22B2B] mb-6 block">
              Bulletin No. 2024 / Civic Participation
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-[#1A1A1A] tracking-tighter mb-8 leading-[0.9] italic">
              THE VOTE <br className="hidden md:block" /> 2026
            </h1>
            <p className="text-2xl text-[#1A1A1A] leading-tight font-serif italic max-w-xl">
              Professional guidance through state-specific registration laws, ballot tracking, and finding your local precinct.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4 w-full md:w-auto"
          >
            <div className="text-right hidden md:block mb-8">
              <p className="text-sm font-black leading-tight uppercase tracking-widest transition-all">Election Cycle Status</p>
              <p className="text-xl font-serif italic text-[#D22B2B]">Active Research Phase</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a
                href="#timeline"
                className="px-10 py-5 bg-[#1A1A1A] text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-[#D22B2B] transition-all flex items-center justify-between group shadow-xl"
              >
                Access The Manual <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#assistant"
                className="px-10 py-5 bg-white text-[#1A1A1A] border border-[#1A1A1A] font-black text-xs uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-white transition-all text-center"
              >
                Query Assistant
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl">
          {[
            { label: 'Integrity', text: 'Non-partisan verification of all voting data points.' },
            { label: 'Precision', text: 'State-by-state rules distilled for clarity.' },
            { label: 'Accessibility', text: 'Simple tools to ensure every voice is heard.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D22B2B]">{item.label}</span>
              <p className="text-sm font-medium leading-relaxed text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
