'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock, Info } from 'lucide-react';

const steps = [
  {
    id: 'register',
    title: 'Voter Registration',
    description: 'Check your eligibility and register to vote in your state. Deadlines vary.',
    icon: <CheckCircle2 className="w-6 h-6" />,
    status: 'complete',
  },
  {
    id: 'research',
    title: 'Research Candidates',
    description: 'Learn about candidates, their platforms, and local ballot initiatives.',
    icon: <Info className="w-6 h-6" />,
    status: 'current',
  },
  {
    id: 'primary',
    title: 'Primaries & Caucuses',
    description: 'Participate in selecting your partys nominees for the general election.',
    icon: <Clock className="w-6 h-6" />,
    status: 'upcoming',
  },
  {
    id: 'general',
    title: 'General Election',
    description: 'The final vote to decide who will hold office. Usually the first Tuesday after the first Monday in November.',
    icon: <Circle className="w-6 h-6" />,
    status: 'upcoming',
  },
];

export function ElectionTimeline() {
  return (
    <div id="timeline" className="w-full max-w-6xl mx-auto py-24 px-4">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-[#1A1A1A] pb-4">
        <h2 className="text-5xl font-serif font-black italic text-[#1A1A1A]">The Roadmap</h2>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">Crucial Phases for the Electorate</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-10 bg-[#F9F8F6] min-h-[300px] overflow-hidden ${
              step.id === 'general' ? 'bg-[#D22B2B] text-white' : ''
            }`}
          >
            <span className={`absolute -top-4 -left-4 font-serif text-9xl font-black italic opacity-5 pointer-events-none ${
              step.id === 'general' ? 'text-white' : 'text-[#1A1A1A]'
            }`}>
              0{index + 1}
            </span>
            
            <div className="relative z-10">
              <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 ${
                step.id === 'general' ? 'text-white' : 'text-[#D22B2B]'
              }`}>
                {step.title}
              </h3>
              
              <p className={`text-xl font-serif italic mb-8 leading-snug ${
                step.id === 'general' ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                {step.description}
              </p>

              {step.status === 'current' && (
                <div className="inline-flex items-center text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-3 py-1">
                  Active Phase
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
