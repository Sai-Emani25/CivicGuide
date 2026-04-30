'use client';

import React from 'react';
import { ExternalLink, Search, Mail, MapPin, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

const resources = [
  {
    title: 'Find Your Polling Place',
    description: 'Enter your address to find where you should go to vote on election day.',
    link: 'https://www.vote.org/polling-place-locator/',
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    cta: 'Find Location',
  },
  {
    title: 'Register to Vote',
    description: 'Check your status or register online in minutes. Most states offer online registration.',
    link: 'https://vote.gov/',
    icon: <CheckSquare className="w-8 h-8 text-blue-500" />,
    cta: 'Register Now',
  },
  {
    title: 'Mail-in Voting',
    description: 'Learn about your states rules for absentee and mail-in ballots.',
    link: 'https://www.usa.gov/absentee-voting',
    icon: <Mail className="w-8 h-8 text-orange-500" />,
    cta: 'Learn More',
  },
  {
    title: 'Ballot Information',
    description: 'See what will be on your ballot before you head to the polls.',
    link: 'https://ballotpedia.org/Sample_Ballot_Lookup',
    icon: <Search className="w-8 h-8 text-green-500" />,
    cta: 'View Ballot',
  },
];

export function Resources() {
  return (
    <div id="resources" className="w-full max-w-7xl mx-auto py-32 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#1A1A1A] pb-8">
        <div className="max-w-2xl">
          <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#D22B2B] mb-2 block text-center">Citizen Toolbox</span>
          <h2 className="text-6xl font-serif font-black italic text-[#1A1A1A] text-center">Resources</h2>
        </div>
        <p className="text-xl font-serif italic text-gray-500 max-w-xs text-right hidden md:block">
          Essential tools for the modern voter, verified and distilled for high-impact civic engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
        {resources.map((res, idx) => (
          <motion.a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group block p-10 bg-[#F9F8F6] hover:bg-white transition-colors h-full flex flex-col"
          >
            <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
              {res.icon}
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-[#1A1A1A]">
              {res.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-8 leading-relaxed flex-grow">
              {res.description}
            </p>
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D22B2B] hover:gap-4 transition-all border-b border-[#D22B2B] self-start pb-1">
              {res.cta} <ExternalLink className="w-3 h-3" />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
