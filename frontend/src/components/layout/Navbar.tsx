import React, { useEffect, useState } from 'react';
import {
  Sparkles, Camera, Bot, BarChart3,
  MapPin, Clock, Sun, Moon, Bell, User, ChevronDown
} from 'lucide-react';
import { AppView } from '../../types';

interface NavbarProps {
  activeView: AppView;
  onChangeView: (view: AppView) => void;
}

const NAV_ITEMS: Array<{ id: AppView; label: string; icon: React.ReactNode }> = [
  { id: 'dashboard', label: 'Dashboard', icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'scan', label: 'Crop Scan', icon: <Camera className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'field_map', label: 'Fields', icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'history', label: 'Scan History', icon: <Clock className="w-4 h-4 md:w-5 md:h-5" /> },
];

export const Navbar: React.FC<NavbarProps> = ({ activeView, onChangeView }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header
      className="h-16 md:h-20 border-b sticky top-0 z-30 flex items-center px-4 md:px-8 gap-4 md:gap-8"
      style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}
    >
      <button onClick={() => onChangeView('dashboard')} className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <img src="/logo.jpg" alt="AgentForge Logo" className="w-12 h-12 object-cover shrink-0 rounded-full shadow-sm" />
        <div className="leading-tight text-left hidden sm:block">
          <div className="text-lg md:text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>AgentForge</div>
          <div className="text-[10px] md:text-xs font-medium opacity-80" style={{ color: 'var(--text-secondary)' }}>Agricultural Intelligence</div>
        </div>
      </button>

      <nav className="flex-1 hidden lg:flex items-center gap-1 overflow-x-auto">
        {NAV_ITEMS.map(item => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className="flex items-center gap-2 px-4 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors whitespace-nowrap"
              style={{
                backgroundColor: isActive ? 'var(--bg-surface-hover)' : 'transparent',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1 lg:hidden">
        <select
          value={activeView}
          onChange={e => onChangeView(e.target.value as AppView)}
          className="w-full text-sm font-semibold rounded-full py-2 px-4 focus:outline-none"
          style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}
        >
          {NAV_ITEMS.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 rounded-full transition-colors"
          style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-secondary)' }}
        >
          {isDark ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
        </button>

        <button className="p-2.5 rounded-full relative" style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-secondary)' }}>
          <Bell className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent-green)' }} />
        </button>

        <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-colors" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
          <User className="w-4 h-4 md:w-5 md:h-5" style={{ color: 'var(--text-secondary)' }} />
          <span>Soth's Farm</span>
          <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: 'var(--text-secondary)' }} />
        </button>
      </div>
    </header>
  );
};
