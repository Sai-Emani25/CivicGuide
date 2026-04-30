'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Circle, Clock, Info, MapPin, ChevronDown } from 'lucide-react';

interface StateElectionData {
  name: string;
  registrationDeadline: string;
  registrationProtocol: string;
  primaryDate: string;
  generalDate: string;
  earlyVotingStart?: string;
}

const stateElectionInfo: Record<string, StateElectionData> = {
  'AL': { 
    name: 'Alabama', 
    registrationDeadline: 'Oct 26, 2026', 
    registrationProtocol: '20 days before Election Day',
    primaryDate: 'May 24, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'No universal early voting'
  },
  'AK': { 
    name: 'Alaska', 
    registrationDeadline: 'Oct 4, 2026', 
    registrationProtocol: '30 days before Election Day',
    primaryDate: 'Aug 18, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 19, 2026'
  },
  'AZ': { 
    name: 'Arizona', 
    registrationDeadline: 'Oct 5, 2026', 
    registrationProtocol: '29 days before Election Day',
    primaryDate: 'Aug 4, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 7, 2026'
  },
  'CA': { 
    name: 'California', 
    registrationDeadline: 'Oct 19, 2026', 
    registrationProtocol: '15 days before Election Day',
    primaryDate: 'June 2, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 5, 2026'
  },
  'FL': { 
    name: 'Florida', 
    registrationDeadline: 'Oct 5, 2026', 
    registrationProtocol: '29 days before Election Day',
    primaryDate: 'Aug 25, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 24, 2026'
  },
  'GA': { 
    name: 'Georgia', 
    registrationDeadline: 'Oct 5, 2026', 
    registrationProtocol: '5th Monday before Election Day',
    primaryDate: 'May 19, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 12, 2026'
  },
  'NY': { 
    name: 'New York', 
    registrationDeadline: 'Oct 23, 2026', 
    registrationProtocol: '10 days before Election Day',
    primaryDate: 'June 23, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 24, 2026'
  },
  'TX': { 
    name: 'Texas', 
    registrationDeadline: 'Oct 5, 2026', 
    registrationProtocol: '30 days before Election Day',
    primaryDate: 'March 3, 2026',
    generalDate: 'Nov 3, 2026',
    earlyVotingStart: 'Oct 19, 2026'
  },
};

export function ElectionTimeline() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const steps = [
    {
      id: 'register',
      title: 'Voter Registration',
      description: selectedState 
        ? `In ${stateElectionInfo[selectedState].name}, your registration deadline is ${stateElectionInfo[selectedState].registrationDeadline}.`
        : 'Check your eligibility and register to vote in your state. Deadlines vary.',
      detail: selectedState ? `In-person registration protocol: ${stateElectionInfo[selectedState].registrationProtocol}` : null,
      icon: <CheckCircle2 className="w-6 h-6" />,
      status: 'complete',
    },
    {
      id: 'research',
      title: 'Research Candidates',
      description: 'Learn about candidates, their platforms, and local ballot initiatives.',
      detail: selectedState ? `Focus on candidates for the ${stateElectionInfo[selectedState].primaryDate} primary.` : null,
      icon: <Info className="w-6 h-6" />,
      status: 'current',
    },
    {
      id: 'primary',
      title: 'Primaries & Caucuses',
      description: selectedState
        ? `The ${stateElectionInfo[selectedState].name} Primary Election is scheduled for ${stateElectionInfo[selectedState].primaryDate}.`
        : 'Participate in selecting your party\'s nominees for the general election.',
      icon: <Clock className="w-6 h-6" />,
      status: 'upcoming',
    },
    {
      id: 'general',
      title: 'General Election',
      description: selectedState
        ? `The ${stateElectionInfo[selectedState].name} General Election takes place on ${stateElectionInfo[selectedState].generalDate}.`
        : 'The final vote to decide who will hold office. Tuesday, Nov 3, 2026.',
      detail: selectedState && stateElectionInfo[selectedState].earlyVotingStart 
        ? `Early voting begins: ${stateElectionInfo[selectedState].earlyVotingStart}` 
        : null,
      icon: <Circle className="w-6 h-6" />,
      status: 'upcoming',
    },
  ];

  return (
    <div id="timeline" className="w-full max-w-6xl mx-auto py-24 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#1A1A1A] pb-8 gap-8">
        <div className="max-w-xl">
          <h2 className="text-6xl font-serif font-black italic text-[#1A1A1A] mb-4">The Roadmap</h2>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-tight">Chronological benchmarks for active participation in the 2026 cycle.</p>
        </div>
        
        <div className="relative group w-full md:w-auto">
          <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#D22B2B] mb-2">Regional Context</label>
          <div className="flex items-center gap-4 bg-white border-2 border-[#1A1A1A] p-4 min-w-[240px]">
            <MapPin className="w-4 h-4 text-[#D22B2B]" />
            <select 
              value={selectedState || ''}
              onChange={(e) => setSelectedState(e.target.value || null)}
              className="bg-transparent border-none appearance-none font-serif italic text-lg focus:outline-none w-full cursor-pointer pr-8"
            >
              <option value="">Select Your State</option>
              {Object.keys(stateElectionInfo).map(code => (
                <option key={code} value={code}>{stateElectionInfo[code].name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-10 bg-[#F9F8F6] min-h-[340px] overflow-hidden group ${
              step.id === 'general' ? 'bg-[#D22B2B] text-white' : ''
            }`}
          >
            <span className={`absolute -top-4 -right-4 font-serif text-9xl font-black italic opacity-5 pointer-events-none ${
              step.id === 'general' ? 'text-white' : 'text-[#1A1A1A]'
            }`}>
              0{index + 1}
            </span>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <h3 className={`text-[10px] font-black uppercase tracking-[0.4em] mb-8 ${
                  step.id === 'general' ? 'text-white' : 'text-[#D22B2B]'
                }`}>
                  {step.title}
                </h3>
                
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={step.description}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-2xl font-serif italic mb-6 leading-tight ${
                      step.id === 'general' ? 'text-white' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {step.description}
                  </motion.p>
                </AnimatePresence>

                {step.id === 'register' && step.detail && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-4 bg-white border border-gray-200 text-[#1A1A1A] shadow-sm mb-6 overflow-hidden"
                  >
                    <span className="block text-[8px] font-black uppercase tracking-widest text-[#D22B2B] mb-1">State Protocol</span>
                    <p className="text-xs font-medium leading-relaxed">{step.detail}</p>
                  </motion.div>
                )}
              </div>

              {step.status === 'current' && (
                <div>
                  <div className="inline-flex items-center text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-4 py-2">
                    Active Phase
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
