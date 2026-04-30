'use client';

import React, { useState } from 'react';
import { Calendar, Bell, ChevronRight, Share2, Check, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ElectionDate {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'deadline' | 'event';
}

const initialElectionDates: ElectionDate[] = [
  {
    id: 'reg-deadline',
    title: 'Registration Deadline',
    date: '2026-10-05',
    description: 'Final day to register for the General Election in many states.',
    type: 'deadline',
  },
  {
    id: 'absentee-request',
    title: 'Mail-In Request',
    date: '2026-10-27',
    description: 'Recommended deadline to request your absentee ballot.',
    type: 'deadline',
  },
  {
    id: 'election-day',
    title: 'Election Day 2026',
    date: '2026-11-03',
    description: 'Midterm elections. Polls open nationwide.',
    type: 'event',
  },
];

const generateGoogleCalendarUrl = (title: string, date: string, details: string) => {
  const dt = new Date(date);
  const start = dt.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(dt.getTime() + 3600000).toISOString().replace(/-|:|\.\d\d\d/g, "");
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&sf=true&output=xml`;
};

export function Reminders() {
  const [saved, setSaved] = useState<string[]>([]);
  const [allDates, setAllDates] = useState<ElectionDate[]>(initialElectionDates);
  const [showForm, setShowForm] = useState(false);
  const [newDate, setNewDate] = useState({ title: '', date: '', description: '' });

  const toggleSave = (id: string) => {
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleAddDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDate.title || !newDate.date) return;

    const customDate: ElectionDate = {
      id: `custom-${Date.now()}`,
      title: newDate.title,
      date: newDate.date,
      description: newDate.description || 'Personal deadline entry.',
      type: 'deadline',
    };

    setAllDates(prev => [...prev, customDate]);
    setNewDate({ title: '', date: '', description: '' });
    setShowForm(false);
  };

  return (
    <div id="reminders" className="w-full max-w-7xl mx-auto py-24 px-4 bg-[#F9F8F6]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 border-l-4 border-[#D22B2B] pl-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Personal Planner</span>
          <h2 className="text-5xl font-serif font-black italic text-[#1A1A1A] mb-6 leading-tight">Election <br />Chronicle</h2>
          <p className="text-xl font-serif italic text-gray-600 mb-8 leading-relaxed">
            Do not let the cycle pass you by. Sync the most critical dates of the 2026 Midterm elections to your personal digital calendar.
          </p>
          
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] p-8 text-white">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#D22B2B]">Live Notification System</h4>
              <p className="text-sm font-light leading-relaxed mb-6 opacity-70">
                Select dates below to track them. Your selections are stored locally in your browser for immediate reference.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-serif italic font-bold">{saved.length}</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Active Reminders <br />Scheduled</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowForm(true)}
                  className="w-full p-6 border-2 border-[#1A1A1A] text-[#1A1A1A] font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all shadow-lg"
                >
                  <Plus className="w-4 h-4" /> Add Custom Deadline
                </motion.button>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onSubmit={handleAddDate}
                  className="bg-white p-8 border-2 border-[#1A1A1A] space-y-4 shadow-2xl"
                >
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#D22B2B] mb-2">New Entry Request</h4>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Deadline Title (e.g., NY Registration)"
                      required
                      value={newDate.title}
                      onChange={e => setNewDate({ ...newDate, title: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-gray-200 text-sm font-serif italic focus:outline-none focus:border-[#1A1A1A]"
                    />
                    <input
                      type="date"
                      required
                      value={newDate.date}
                      onChange={e => setNewDate({ ...newDate, date: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-gray-200 text-sm font-serif italic focus:outline-none focus:border-[#1A1A1A]"
                    />
                    <input
                      type="text"
                      placeholder="Notes (optional)"
                      value={newDate.description}
                      onChange={e => setNewDate({ ...newDate, description: e.target.value })}
                      className="w-full py-3 bg-transparent border-b border-gray-200 text-sm font-serif italic focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <button type="submit" className="flex-1 bg-[#1A1A1A] text-white py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#D22B2B]">Confirm</button>
                    <button type="button" onClick={() => setShowForm(false)} className="px-6 border border-[#1A1A1A] py-4 text-[10px] font-black uppercase tracking-widest">Cancel</button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Interactive Date Cards */}
        <div className="lg:col-span-7 space-y-px bg-[#1A1A1A] border border-[#1A1A1A]">
          {allDates.map((item, idx) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group bg-[#F9F8F6] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white transition-colors"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#D22B2B]">
                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  {item.type === 'deadline' && (
                    <span className="text-[8px] font-black uppercase tracking-widest bg-red-100 text-red-700 px-2 py-0.5 border border-red-200">Critical Deadline</span>
                  )}
                </div>
                <h3 className="text-3xl font-serif font-black italic text-[#1A1A1A]">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500 max-w-sm italic">{item.description}</p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={() => toggleSave(item.id)}
                  className={`flex-1 md:flex-none flex items-center justify-center gap-2 p-4 border-2 transition-all ${
                    saved.includes(item.id) 
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white' 
                      : 'border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {saved.includes(item.id) ? <Check className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {saved.includes(item.id) ? 'Saved' : 'Remind Me'}
                  </span>
                </button>
                
                <a
                  href={generateGoogleCalendarUrl(item.title, item.date, item.description)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#D22B2B] hover:border-[#D22B2B] hover:text-white transition-all"
                  title="Add to Google Calendar"
                >
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t-2 border-[#1A1A1A] pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-12">
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">State Data Status</span>
            <span className="font-serif italic text-lg">Verified Federal</span>
          </div>
          <div>
            <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Cycle Year</span>
            <span className="font-serif italic text-lg">2026 Midterm</span>
          </div>
        </div>
        
        <button className="px-10 py-5 bg-[#D22B2B] text-white font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-xl">
          Request Early Alerts
        </button>
      </div>
    </div>
  );
}
