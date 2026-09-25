import React from 'react';
import { BarChart3, AlertTriangle, MapPin, CheckCircle2, Camera, Settings, TrendingUp, MessageSquare, Ruler } from 'lucide-react';
import dashboardBg from '../../assets/dashboard-bg.jpg';

export const DashboardView: React.FC = () => {
  const metrics = [
    { label: 'Total Scans', value: '0', trend: '+12% this month', icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />, accent: '#3B82F6', accentBg: 'rgba(59,130,246,0.2)' },
    { label: 'Active Issues', value: '0', status: 'Needs attention', icon: <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />, accent: '#F59E0B', accentBg: 'rgba(245,158,11,0.2)' },
    { label: 'Fields Monitored', value: '0', status: 'Actively tracking', icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, accent: '#8B5CF6', accentBg: 'rgba(139,92,246,0.2)' },
    { label: 'Plant Health', value: '0%', status: 'Healthy crops', icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />, accent: '#16A34A', accentBg: 'rgba(22,163,74,0.2)' },
  ];

  return (
    <div 
      className="flex-1 overflow-y-auto w-full max-w-full overflow-x-hidden relative"
    >
      {/* Aerial Farm Background with Gradient Tint Overlay */}
      <img src={dashboardBg} alt="Dashboard Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8 relative z-10">

        {/* Farm Status Strip */}
        <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#37472A]/70  border border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Soth's Farm</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-white/10 border border-white/15 text-white/90 text-xs px-3 py-1 rounded-full font-medium tracking-wide">Starter Plan</span>
              <span className="bg-white/10 border border-white/15 text-white/90 text-xs px-3 py-1 rounded-full font-medium tracking-wide">North America</span>
            </div>
          </div>
          <button className="w-full md:w-auto px-6 py-2.5 min-h-[44px] rounded-full text-sm md:text-base font-semibold transition-all active:scale-95 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white border border-emerald-400/50 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)]">
            <Camera className="w-4 h-4 md:w-5 md:h-5 mr-2" /> New Scan
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map(m => (
            <div key={m.label} className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#37472A]/70  border border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm md:text-base font-medium tracking-wide text-white/80">{m.label}</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner" style={{ backgroundColor: m.accentBg, color: m.accent }}>{m.icon}</div>
              </div>
              <div className="text-4xl md:text-5xl font-black font-mono mb-2 text-white tracking-tight">{m.value}</div>
              <div className="text-xs md:text-sm font-normal text-white/60">{m.trend || m.status}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Recent Scans */}
          <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#37472A]/70  border border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">Recent Scans</h2>
                <p className="text-sm md:text-base mt-1 text-white/60">Latest crop analysis results</p>
              </div>
              <button className="text-xs md:text-sm font-bold px-4 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white shadow-sm text-white transition-colors border border-white/10">View All</button>
            </div>
            <div className="flex-1 rounded-2xl border-2 border-dashed border-white/20 p-8 md:p-12 flex flex-col items-center justify-center text-center bg-[#2D3B22]/70">
              <Camera className="w-10 h-10 md:w-12 md:h-12 mb-4 text-white/50" />
              <p className="text-base md:text-lg font-bold text-white/80">No Scans Yet</p>
              <p className="text-sm md:text-base mt-1.5 text-white/50">Run your first crop diagnosis to see results here</p>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* AI Service */}
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#37472A]/70  border border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm md:text-base font-medium tracking-wide text-white/80">AI Service</p>
                <div className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Online
                </div>
              </div>
              <p className="text-lg md:text-xl font-bold mb-1.5 text-white tracking-wide">Real-time disease detection</p>
              <p className="text-sm md:text-base text-white/60">AgentForge Vision v4.5</p>
            </div>
            
            {/* Field Overview */}
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-8 bg-[#37472A]/70  border border-[#546A3F]/40 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <p className="text-sm md:text-base font-medium tracking-wide text-white/80 mb-5">Field Overview</p>
              <div className="rounded-2xl border-2 border-dashed border-white/20 p-8 flex flex-col items-center justify-center text-center bg-[#2D3B22]/70 min-h-[160px]">
                <MapPin className="w-8 h-8 mb-3 text-white/50" />
                <p className="text-base font-bold text-white/80">No Fields Mapped</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
