'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';
import { Info, BarChart3, TrendingUp, History } from 'lucide-react';

const turnoutData = [
  { state: 'MN', turnout: 79.9 },
  { state: 'CO', turnout: 76.4 },
  { state: 'WA', turnout: 75.4 },
  { state: 'WI', turnout: 72.3 },
  { state: 'OR', turnout: 70.0 },
  { state: 'MI', turnout: 70.0 },
  { state: 'NH', turnout: 69.8 },
  { state: 'VT', turnout: 69.4 },
  { state: 'ME', turnout: 69.1 },
  { state: 'IA', turnout: 68.9 },
];

const trendData = [
  { year: '2016', turnout: 60.1, type: 'Presidential' },
  { year: '2018', turnout: 49.4, type: 'Midterm' },
  { year: '2020', turnout: 66.8, type: 'Presidential' },
  { year: '2022', turnout: 46.6, type: 'Midterm' },
  { year: '2024', turnout: 66.2, type: 'Presidential' },
];

const generationData = [
  { name: 'Gen Z', value: 10, color: '#1A1A1A' },
  { name: 'Millennials', value: 25, color: '#4A4A4A' },
  { name: 'Gen X', value: 25, color: '#8A8A8A' },
  { name: 'Boomers', value: 30, color: '#D22B2B' },
  { name: 'Silent', value: 10, color: '#E2E2E2' },
];

export function Statistics() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div id="statistics" className="w-full max-w-7xl mx-auto py-32 px-4 h-[1000px]">
        {/* Placeholder to prevent layout shift during mount */}
      </div>
    );
  }

  return (
    <div id="statistics" className="w-full max-w-7xl mx-auto py-32 px-4">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-[#1A1A1A] pb-8">
        <div className="max-w-xl">
          <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#D22B2B] mb-2 block">Analytical Annex</span>
          <h2 className="text-6xl font-serif font-black italic text-[#1A1A1A]">Democratic Data</h2>
        </div>
        <p className="text-xl font-serif italic text-gray-500 max-w-xs text-right hidden md:block">
          Quantifying the collective voice through historical turnout and demographic shifts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Turnout Bar Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-10 border-2 border-[#1A1A1A] shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#1A1A1A]">Top Voter Turnout (2020)</h3>
            <BarChart3 className="w-5 h-5 text-[#D22B2B]" />
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={turnoutData} layout="vertical" margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="state" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 900, fill: '#1A1A1A' }}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ 
                    backgroundColor: '#1A1A1A', 
                    border: 'none', 
                    color: '#fff',
                    fontFamily: 'serif',
                    fontStyle: 'italic'
                  }}
                />
                <Bar dataKey="turnout" radius={[0, 4, 4, 0]}>
                  {turnoutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#D22B2B' : '#1A1A1A'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-gray-400 italic">
            Source: U.S. Census Bureau. Percentage of Citizen Voting-Age Population.
          </p>
        </motion.div>

        {/* Demographic Pie Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1A1A1A] p-10 text-white shadow-xl flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#D22B2B]">Electorate Composition by Generation</h3>
            <TrendingUp className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="w-full md:w-1/2 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={generationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {generationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.1)" />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4">
              {generationData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3" style={{ backgroundColor: entry.color }} />
                    <span className="text-[11px] font-black uppercase tracking-widest">{entry.name}</span>
                  </div>
                  <span className="font-serif italic text-lg">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 border border-white/10 flex gap-4">
            <Info className="w-5 h-5 text-[#D22B2B] shrink-0" />
            <p className="text-xs font-light leading-relaxed opacity-70">
              The share of Gen Z and Millennial voters is projected to account for nearly 40% of the active electorate by the 2026 midterms, marking a significant generational transition.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Cycle Trends Chart */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-12 bg-[#F9F8F6] border-2 border-[#1A1A1A] p-10 flex flex-col lg:flex-row gap-12"
      >
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-5 h-5 text-[#D22B2B]" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#1A1A1A]">Cycle Dynamics</h3>
          </div>
          <h4 className="text-4xl font-serif font-black italic text-[#1A1A1A] mb-6 leading-tight">Turnout Volatility</h4>
          <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-sm">
            Voter participation fluctuates significantly between Presidential and Midterm cycles. However, the baseline for midterm turnout has shifted upwards since the 2018 historic high.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Peak Turnout</span>
              <span className="font-serif italic font-bold">66.8% (2020)</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Avg. Growth</span>
              <span className="font-serif italic font-bold text-[#D22B2B]">+4.2%</span>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorTurnout" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D22B2B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D22B2B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fontWeight: 900, fill: '#1A1A1A' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 11, fontWeight: 900, fill: '#1A1A1A' }}
                domain={[40, 70]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: 'none', 
                  color: '#fff',
                  fontFamily: 'serif'
                }}
                labelStyle={{ fontWeight: 900, marginBottom: 4 }}
              />
              <Area 
                type="monotone" 
                dataKey="turnout" 
                stroke="#D22B2B" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorTurnout)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col md:flex-row gap-12 bg-white border-2 border-[#1A1A1A] p-12">
        <div className="md:w-1/3">
          <h4 className="text-3xl font-serif font-black italic text-[#1A1A1A] mb-4 leading-tight">Civic <br />Conclusion</h4>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-tight">Data facilitates understanding, but action secures the future.</p>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl font-serif italic text-[#1A1A1A] leading-relaxed">
            Historical trends reveal that &quot;battleground&quot; status often depends on a few percentage points in turnout. In the 2020 cycle, the margin of victory in several critical states was less than 1% of the total votes cast. Every individual registration and subsequent vote fundamentally alters the statistical landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
