import React, { useState } from 'react'; 
import analyticsBg from '../../assets/analytics-bg.jpg';
import { ArrowLeft, Download, FileText, Calendar, Filter } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [reportType, setReportType] = useState('Overview');
  const diseaseBreakdown = [{ label: 'Healthy', pct: 74, color: 'var(--status-ok-text)' }, { label: 'Early Blight', pct: 18, color: 'var(--status-warn-text)' }, { label: 'Powdery Mildew', pct: 8, color: 'var(--status-alert-text)' }];
  const weeklyScans = [{ day: 'Mon', count: 3 }, { day: 'Tue', count: 7 }, { day: 'Wed', count: 2 }, { day: 'Thu', count: 9 }, { day: 'Fri', count: 5 }, { day: 'Sat', count: 1 }, { day: 'Sun', count: 4 }];
  const maxCount = Math.max(...weeklyScans.map(d => d.count));

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-x-hidden relative">
      <img src={analyticsBg} alt="Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-white/70" />
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-[#064E3B] drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Analytics & Reports</h1>
              <p className="text-sm md:text-base mt-1 font-bold text-[#064E3B] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">Comprehensive agricultural insights</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold border transition-colors shadow-sm hover:shadow-md hover:bg-black/50" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Export CSV
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white transition-colors shadow-md hover:shadow-lg hover:bg-black/50" style={{ backgroundColor: '#10B981' }}>
              <FileText className="w-4 h-4 md:w-5 md:h-5" /> Generate Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2 text-white/70">Organization</label>
            <select className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
              <option>Soth's Farm</option>
            </select>
          </div>
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2 text-white/70">Report Type</label>
            <select value={reportType} onChange={e => setReportType(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }}>
              {['Overview', 'Disease Spread', 'Treatment Efficacy', 'Yield Forecast'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2 text-white/70">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/70" />
              <input type="date" className="w-full pl-12 pr-4 py-3 min-h-[48px] text-sm md:text-base rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', outlineColor: 'var(--accent-green)' }} />
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white w-full transition-transform hover:scale-105 shadow-md" style={{ backgroundColor: '#10B981' }}>
            <Filter className="w-4 h-4 md:w-5 md:h-5" /> Apply
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-3xl border p-6 md:p-8 bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white">Disease Distribution</h3>
            <div className="space-y-5">
              {diseaseBreakdown.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm md:text-base font-bold mb-2">
                    <span className="text-white">{d.label}</span>
                    <span style={{ color: d.color }}>{d.pct}%</span>
                  </div>
                  <div className="h-3 md:h-4 rounded-full" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <div className="h-3 md:h-4 rounded-full transition-all" style={{ width: `${d.pct}%`, backgroundColor: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border p-6 md:p-8 bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
            <h3 className="text-lg md:text-xl font-bold mb-6 text-white">Weekly Scan Frequency</h3>
            <div className="flex items-end justify-between gap-3 h-48 md:h-56">
              {weeklyScans.map(d => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg transition-all" style={{ height: `${(d.count / maxCount) * 100}%`, backgroundColor: '#10B981', opacity: 0.9, minHeight: '8px' }} />
                  <span className="text-xs md:text-sm font-bold text-white/70">{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border overflow-x-auto bg-[#37472A]/70 border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white">
          <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <h3 className="text-lg md:text-xl font-bold text-white">Field Risk Distribution</h3>
          </div>
          <table className="w-full text-sm md:text-base whitespace-nowrap min-w-[600px]">
            <thead style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
              <tr>{['Field', 'Crop', 'Top Issue', 'Severity', 'Last Scanned'].map(h => <th key={h} className="text-left px-6 py-4 font-bold text-white/70">{h}</th>)}</tr>
            </thead>
            <tbody><tr><td className="px-6 py-8 text-center font-medium text-white/70" colSpan={5}>No field data available. Add and scan fields to generate risk reports.</td></tr></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
