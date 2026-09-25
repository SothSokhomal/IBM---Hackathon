import React, { useState } from 'react'; 
import historyBg from '../../assets/history-bg.jpg';
import { Search, Camera, Download, Filter } from 'lucide-react';
import { ScanRecord } from '../../types';

export const HistoryView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [cropFilter, setCropFilter] = useState('All Crops');
  const scans: ScanRecord[] = [];

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-x-hidden relative">
      <img src={historyBg} alt="Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#064E3B] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Scan History</h1>
            <p className="text-sm md:text-base mt-1 font-bold text-[#064E3B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">Soth's Farm • All your analysis results</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold border shadow-sm" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Export
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white shadow-md" style={{ backgroundColor: '#10B981' }}>
              <Camera className="w-4 h-4 md:w-5 md:h-5" /> New Scan
            </button>
          </div>
        </div>

        <div className="rounded-3xl border p-6 flex flex-col md:flex-row gap-4 md:items-center bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search scans by crop, field, disease..." className="w-full pl-12 pr-4 py-3 min-h-[48px] text-sm md:text-base rounded-full focus:outline-none focus:ring-2 font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }} />
          </div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2 font-bold w-full md:w-auto" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
            {['All Status', 'Healthy', 'Action Required', 'Critical'].map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={cropFilter} onChange={e => setCropFilter(e.target.value)} className="text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2 font-bold w-full md:w-auto" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
            {['All Crops', 'Tomato', 'Wheat', 'Maize', 'Rice', 'Mango'].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="rounded-3xl border p-12 md:p-20 flex flex-col items-center text-center bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
          <Camera className="w-12 h-12 md:w-16 md:h-16 mb-5 opacity-40 text-white/70" />
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">No Scans Found</h3>
          <p className="text-sm md:text-base font-medium mb-8 max-w-md mx-auto text-white/70">You haven't created any scans yet. Start by scanning your first crop!</p>
          <button className="px-8 py-3.5 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white transition-transform hover:scale-105 shadow-md" style={{ backgroundColor: '#10B981' }}>Create Your First Scan</button>
        </div>
      </div>
    </div>
  );
};
