'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Search, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const states = [
  { 
    name: 'Alabama', 
    code: 'AL', 
    url: 'https://www.sos.alabama.gov/alabama-votes/voter/election-officials',
    phone: '(334) 242-7200',
    address: 'PO Box 5616, Montgomery, AL 36103'
  },
  { 
    name: 'Alaska', 
    code: 'AK', 
    url: 'https://www.elections.alaska.gov/Core/contact.php',
    phone: '(907) 465-4611',
    address: 'PO Box 110017, Juneau, AK 99811'
  },
  { 
    name: 'Arizona', 
    code: 'AZ', 
    url: 'https://azsos.gov/elections/about-elections/county-election-officials',
    phone: '(602) 542-8683',
    address: '1700 W. Washington St., Fl. 7, Phoenix, AZ 85007'
  },
  { 
    name: 'Arkansas', 
    code: 'AR', 
    url: 'https://www.sos.arkansas.gov/elections/county-election-commissioners-list',
    phone: '(501) 682-1010',
    address: 'State Capitol, Room 256, Little Rock, AR 72201'
  },
  { 
    name: 'California', 
    code: 'CA', 
    url: 'https://www.sos.ca.gov/elections/registrar-voters',
    phone: '(916) 653-6814',
    address: '1500 11th Street, Sacramento, CA 95814'
  },
  { 
    name: 'Colorado', 
    code: 'CO', 
    url: 'https://www.sos.state.co.us/pubs/elections/Resources/CountyElectionOffices.html',
    phone: '(303) 894-2200',
    address: '1700 Broadway, Suite 550, Denver, CO 80290'
  },
  { 
    name: 'Connecticut', 
    code: 'CT', 
    url: 'https://portal.ct.gov/SOTS/Election-Services/Registrar-of-Voters/Registrars-of-Voters',
    phone: '(860) 509-6100',
    address: '165 Capitol Ave, Suite 1000, Hartford, CT 06106'
  },
  { 
    name: 'Delaware', 
    code: 'DE', 
    url: 'https://elections.delaware.gov/about/contact.shtml',
    phone: '(302) 739-4277',
    address: '905 S. Governors Ave, Suite 170, Dover, DE 19904'
  },
  { 
    name: 'Florida', 
    code: 'FL', 
    url: 'https://dos.myflorida.com/elections/contacts/supervisor-of-elections/',
    phone: '(850) 245-6200',
    address: '500 S. Bronough St., Tallahassee, FL 32399'
  },
  { 
    name: 'Georgia', 
    code: 'GA', 
    url: 'https://elections.sos.ga.gov/Elections/countyregistrars.do',
    phone: '(404) 656-2871',
    address: '214 State Capitol, Atlanta, GA 30334'
  },
];

export function Officials() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStates = states.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="officials" className="w-full max-w-7xl mx-auto py-32 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
        <div className="md:w-1/2">
          <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#D22B2B] mb-2 block">Direct Access</span>
          <h2 className="text-6xl font-serif font-black italic text-[#1A1A1A] mb-8 leading-tight">Election <br />Commissioners</h2>
          <p className="text-xl font-serif italic text-gray-600 leading-relaxed mb-8">
            Accountability begins with local contact. Your county election official is responsible for registration, polling logistics, and ballot certification.
          </p>
          
          <div className="relative group max-w-md">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#D22B2B] transition-colors" />
            <input 
              type="text"
              placeholder="Search your state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 py-4 bg-transparent border-b-2 border-[#1A1A1A] text-xl font-serif italic focus:outline-none focus:border-[#D22B2B] transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="md:w-1/2 bg-[#1A1A1A] p-10 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <Phone className="w-6 h-6 text-[#D22B2B]" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Emergency Voter Hotline</p>
              <p className="text-2xl font-serif italic">1-866-OUR-VOTE</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-[#D22B2B] shrink-0" />
              <p className="text-sm font-light leading-relaxed opacity-80 italic">
                Typical office hours for state election divisions are Monday through Friday, 9:00 AM to 5:00 PM local time. On Election Day, offices remain open until polls close.
              </p>
            </div>
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-[#D22B2B] shrink-0" />
              <p className="text-sm font-light leading-relaxed opacity-80 italic">
                Email inquiries are generally processed within 48 business hours. For immediate ballot issues, phone contact is highly recommended.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredStates.map((state) => (
            <motion.div
              key={state.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#F9F8F6] p-10 border-2 border-[#1A1A1A] hover:bg-white transition-all group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D22B2B]">{state.code}</span>
                  <h3 className="text-4xl font-serif font-black italic text-[#1A1A1A] leading-tight">{state.name}</h3>
                </div>
                <a 
                  href={state.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
                  title="Official Website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#1A1A1A]/10">
                <div className="flex gap-4 items-start">
                  <Phone className="w-4 h-4 text-[#D22B2B] mt-1 shrink-0" />
                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">State Office Phone</span>
                    <span className="font-serif italic text-lg text-[#1A1A1A]">{state.phone}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <MapPin className="w-4 h-4 text-[#D22B2B] mt-1 shrink-0" />
                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">Mailing Address</span>
                    <span className="font-serif italic text-sm text-gray-600 leading-relaxed block max-w-[240px]">
                      {state.address}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <ExternalLink className="w-4 h-4 text-[#D22B2B] mt-1 shrink-0" />
                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">Official Portal</span>
                    <a 
                      href={state.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-serif italic text-sm text-[#1A1A1A] underline decoration-[#D22B2B] decoration-2 underline-offset-4 hover:text-[#D22B2B] transition-colors"
                    >
                      {state.url.replace('https://', '').split('/')[0]}...
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                <span className="text-8xl font-black">{state.code}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredStates.length === 0 && (
          <div className="col-span-full bg-[#F9F8F6] p-12 text-center">
            <p className="text-xl font-serif italic text-gray-400">No matching state found in our primary directory.</p>
            <a href="https://www.usa.gov/election-office" target="_blank" className="inline-block mt-4 text-sm font-black uppercase tracking-widest border-b border-[#1A1A1A] hover:text-[#D22B2B] hover:border-[#D22B2B]">
              Search USA.gov Complete Directory →
            </a>
          </div>
        )}
      </div>

      <div className="mt-16 flex justify-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 text-center max-w-xl italic">
          Disclaimer: This directory is a non-partisan portal. All links route to official state-operated government websites (.gov or .us domains).
        </p>
      </div>
    </div>
  );
}
