import React, { useEffect, useState } from 'react';
import {
  Leaf,
  FileText,
  User,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';
import { AppView } from '../types';

interface HeaderProps {
  activeView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onChangeView,
}) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  const NAV_ITEMS: Array<{ id: AppView; label: string }> = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'scan', label: 'Scan & Diagnose' },
    { id: 'sensors', label: 'Sensors & Weather' },
    { id: 'field_map', label: 'Field Map' },
    { id: 'chat', label: 'Chat' },
  ];

  return (
    <header className="h-14 border-b border-border-subtle bg-surface px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Brand & Status */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-text-primary">
          <Leaf className="w-5 h-5 text-[#5EE2A0]" />
          <span className="font-semibold text-sm tracking-tight">AgentForge</span>
        </div>
      </div>

      {/* Center: 4 Tab Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`px-4 py-1.5 rounded-md text-sm transition-colors ${
                isActive
                  ? 'bg-surface-hover text-text-primary font-medium'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover/50'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Mobile dropdown */}
        <div className="md:hidden">
          <select
            value={activeView}
            onChange={(e) => onChangeView(e.target.value as AppView)}
            className="bg-root border border-border-subtle rounded-md text-sm text-text-primary py-1 pl-2 pr-6 focus:outline-none focus:border-[#5EE2A0]"
          >
            {NAV_ITEMS.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={() => setIsDark(!isDark)}
          className="flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors"
          title="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border-subtle text-sm text-text-primary hover:bg-surface-hover transition-colors">
          <FileText className="w-4 h-4 text-text-secondary" />
          <span>Export Report (PDF)</span>
        </button>

        <button className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm text-text-secondary hover:text-text-primary transition-colors">
          <User className="w-5 h-5" />
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
