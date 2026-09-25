const fs = require('fs');

const authModal = `import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User as UserIcon, Check, ArrowLeft, Sun, Moon, Apple } from 'lucide-react';

interface AuthModalProps {
  onLogin: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onLogin }) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const isEmailValid = email.includes('@');

  return (
    <div
      className="min-h-screen w-full transition-colors duration-300 relative"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      {/* Theme Toggle Floating */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-full transition-colors border shadow-sm flex items-center justify-center backdrop-blur-md"
          title="Toggle theme"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
        >
          {isDark ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </div>

      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT HERO PANEL - Full Height */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-12 xl:p-16 overflow-hidden min-h-screen border-r border-black/10">
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/bg.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#071E07]/95 z-0" />
          
          <div className="relative z-10">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 px-5 py-2.5 rounded-full inline-flex items-center gap-3 shadow-lg">
              <img src="/logo.jpg" alt="AgentForge" className="w-6 h-6 object-contain shrink-0 brand-logo brightness-200" />
              <span className="text-white font-bold tracking-wide">AgentForge</span>
            </div>
          </div>

          <div className="relative z-10 mt-auto mb-12">
            <h1 className="text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              The best<br />intelligence for<br />your crops.
            </h1>
            <p className="text-lg text-emerald-100/90 mt-6 max-w-md font-medium leading-relaxed">
              AI-powered real-time disease diagnosis, crop health mapping, and agronomist insights.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3">
            {['Instant Diagnosis', 'Smart Reminders', 'Actionable Plans'].map(feat => (
              <span key={feat} className="bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="lg:hidden w-full h-[25vh] min-h-[220px] relative flex flex-col justify-end p-6 pb-12">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('/bg.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#071E07]/90 z-0" />
          <div className="relative z-10">
            <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">The best app for<br />your plants.</h1>
          </div>
        </div>

        {/* RIGHT FORM PANEL - Full Height */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 py-8 md:px-16 xl:px-24 relative z-20 -mt-8 rounded-t-[2.5rem] lg:mt-0 lg:rounded-none min-h-[75vh] lg:min-h-screen" style={{ backgroundColor: 'var(--bg-card)' }}>
          
          <div className="w-full max-w-md mx-auto">
            
            {/* Header Area */}
            <div className="text-center lg:text-left mb-6 lg:mb-8">
              <button
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-6 transition-transform hover:scale-105 shadow-sm mx-auto lg:mx-0"
                style={{ backgroundColor: 'var(--surface-tint)', color: 'var(--text-primary)' }}
                aria-label="Go back"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {tab === 'login' ? 'Welcome Back' : 'Register'}
              </h2>
              <p className="text-base md:text-lg mt-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                {tab === 'login' ? 'Login to your agricultural dashboard' : 'Create your new farm account'}
              </p>
            </div>

            {/* Tab Selector Pill */}
            <div
              className="p-1.5 rounded-full flex w-full max-w-xs mx-auto lg:mx-0 mb-6 lg:mb-8 border shadow-inner"
              style={{ backgroundColor: 'var(--surface-tint)', borderColor: 'var(--border-color)' }}
            >
              {(['login', 'register'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 py-2.5 text-sm md:text-base font-bold rounded-full transition-all"
                  style={{
                    backgroundColor: tab === t ? 'var(--btn-primary)' : 'transparent',
                    color: tab === t ? 'white' : 'var(--text-secondary)',
                    boxShadow: tab === t ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                  }}
                >
                  {t === 'login' ? 'Login' : 'Sign up'}
                </button>
              ))}
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-3.5 lg:space-y-4">
              
              {/* Full Name (Register Only) */}
              {tab === 'register' && (
                <div className="relative group">
                  <UserIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors group-focus-within:text-[var(--btn-primary)]" style={{ color: 'var(--text-secondary)' }} />
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="w-full pl-14 pr-6 py-3.5 text-base md:text-lg rounded-full border focus:outline-none focus:ring-2 transition-all font-medium"
                    style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)', outlineColor: 'var(--btn-primary)' }}
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors group-focus-within:text-[var(--btn-primary)]" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="user@gmail.com"
                  required
                  className="w-full pl-14 pr-12 py-3.5 text-base md:text-lg rounded-full border focus:outline-none focus:ring-2 transition-all font-medium"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)', outlineColor: 'var(--btn-primary)' }}
                />
                {isEmailValid && (
                  <Check className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                )}
              </div>

              {/* Password */}
              <div className="relative group">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors group-focus-within:text-[var(--btn-primary)]" style={{ color: 'var(--text-secondary)' }} />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-14 pr-12 py-3.5 text-base md:text-lg rounded-full border focus:outline-none focus:ring-2 transition-all font-medium tracking-widest"
                  style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border-color)', color: 'var(--text-primary)', outlineColor: 'var(--btn-primary)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 transition-colors hover:opacity-70"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between pt-2 pb-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors group-hover:border-[var(--btn-primary)]" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--input-bg)' }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--btn-primary)' }} />
                  </div>
                  <span className="text-sm md:text-base font-semibold transition-colors" style={{ color: 'var(--text-secondary)' }}>Remember Me</span>
                </label>
                <button type="button" className="text-sm md:text-base font-bold transition-colors hover:underline" style={{ color: 'var(--text-secondary)' }}>
                  Forget Password?
                </button>
              </div>

              {/* Primary Submit */}
              <button
                type="submit"
                className="w-full py-4 text-base md:text-lg font-bold text-white rounded-full transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] flex items-center justify-center bg-gradient-to-r"
                style={{ backgroundImage: 'linear-gradient(to right, var(--btn-primary), var(--btn-primary-hover))' }}
              >
                {tab === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6 lg:my-8">
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Or continue with</span>
              <div className="flex-1 h-px" style={{ backgroundColor: 'var(--border-color)' }} />
            </div>

            {/* Social SSO Pills */}
            <div className="flex items-center justify-center gap-4 lg:gap-6">
              <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105 shadow-md hover:shadow-lg" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--input-bg)' }}>
                <span className="text-xl lg:text-2xl font-bold" style={{ color: '#1877F2' }}>f</span>
              </button>
              <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105 shadow-md hover:shadow-lg" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--input-bg)' }}>
                <svg className="w-5 h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105 shadow-md hover:shadow-lg text-foreground" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--input-bg)' }}>
                <Apple className="w-5 h-5 lg:w-6 lg:h-6" style={{ fill: 'currentColor' }} />
              </button>
            </div>

            {/* Footer switcher */}
            <p className="text-center text-sm md:text-base mt-8 font-medium" style={{ color: 'var(--text-secondary)' }}>
              {tab === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setTab(tab === 'login' ? 'register' : 'login')} className="font-bold underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                {tab === 'login' ? 'Sign up' : 'Login'}
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};
`;

const navbar = `import React, { useEffect, useState } from 'react';
import {
  Sparkles, Camera, Bot, BarChart3,
  MapPin, Clock, Sun, Moon, Bell, User, ChevronDown
} from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
  activeView: AppView;
  onChangeView: (view: AppView) => void;
}

const NAV_ITEMS: Array<{ id: AppView; label: string; icon: React.ReactNode }> = [
  { id: 'dashboard', label: 'Dashboard', icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'scan', label: 'Crop Scan', icon: <Camera className="w-4 h-4 md:w-5 md:h-5" /> },
  { id: 'doctor', label: 'Crop Doctor AI', icon: <Bot className="w-4 h-4 md:w-5 md:h-5" /> },
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
        <img src="/logo.jpg" alt="AgentForge Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain shrink-0 brand-logo" />
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
          <span>Soth\\'s Farm</span>
          <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: 'var(--text-secondary)' }} />
        </button>
      </div>
    </header>
  );
};
`;

const dashboardView = `import React from 'react';
import { BarChart3, AlertTriangle, MapPin, CheckCircle2, Camera, Settings, TrendingUp, MessageSquare, Ruler } from 'lucide-react';

export const DashboardView: React.FC = () => {
  const metrics = [
    { label: 'Total Scans', value: '0', trend: '+12% this month', icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />, accent: '#3B82F6', accentBg: 'rgba(59,130,246,0.1)' },
    { label: 'Active Issues', value: '0', status: 'Needs attention', icon: <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />, accent: '#F59E0B', accentBg: 'rgba(245,158,11,0.1)' },
    { label: 'Fields Monitored', value: '0', status: 'Actively tracking', icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, accent: '#8B5CF6', accentBg: 'rgba(139,92,246,0.1)' },
    { label: 'Plant Health', value: '0%', status: 'Healthy crops', icon: <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />, accent: '#16A34A', accentBg: 'rgba(22,163,74,0.1)' },
  ];
  const quickActions = [
    { label: 'New Scan', icon: <Camera className="w-4 h-4" /> },
    { label: 'Manage Fields', icon: <MapPin className="w-4 h-4" /> },
    { label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'AI Doctor', icon: <MessageSquare className="w-4 h-4" /> },
    { label: 'AR Measure', icon: <Ruler className="w-4 h-4" /> },
    { label: 'Timeline', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-hidden box-border" style={{ backgroundColor: 'var(--bg-root)' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">

        {/* Farm Status Strip */}
        <div className="rounded-3xl border p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div>
            <h1 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Soth\\'s Farm</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs md:text-sm px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--bg-surface-hover)', color: 'var(--text-secondary)' }}>Starter Plan</span>
              <span className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>North America</span>
            </div>
          </div>
          <button className="w-full md:w-auto px-6 py-3 min-h-[44px] rounded-full text-sm md:text-base font-bold text-white transition-colors shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>
            <Camera className="w-4 h-4 md:w-5 md:h-5 inline mr-2" /> New Scan
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.label} className="rounded-3xl border p-5 md:p-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs md:text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>{m.label}</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: m.accentBg, color: m.accent }}>{m.icon}</div>
              </div>
              <div className="text-3xl md:text-4xl font-black font-mono mb-1.5" style={{ color: 'var(--text-primary)' }}>{m.value}</div>
              <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{m.trend || m.status}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Recent Scans</h2>
                <p className="text-sm md:text-base mt-0.5" style={{ color: 'var(--text-secondary)' }}>Latest crop analysis results</p>
              </div>
              <button className="text-xs md:text-sm font-bold px-4 py-2 rounded-full bg-black/5 dark:bg-white/5" style={{ color: 'var(--accent-green)' }}>View All</button>
            </div>
            <div className="rounded-3xl border-2 border-dashed p-10 flex flex-col items-center text-center" style={{ borderColor: 'var(--border-subtle)' }}>
              <Camera className="w-10 h-10 md:w-12 md:h-12 mb-3" style={{ color: 'var(--text-secondary)' }} />
              <p className="text-base md:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>No Scans Yet</p>
              <p className="text-sm md:text-base mt-1 text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Run your first crop diagnosis to see results here</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm md:text-base font-semibold" style={{ color: 'var(--text-secondary)' }}>AI Service</p>
                <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--status-ok-text)' }}>Online</span>
                </div>
              </div>
              <p className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Real-time disease detection</p>
              <p className="text-sm md:text-base mb-4" style={{ color: 'var(--text-secondary)' }}>AgentForge Vision v4.5</p>
            </div>
            <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
              <p className="text-xs md:text-sm font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>Field Overview</p>
              <div className="rounded-3xl border-2 border-dashed p-6 flex flex-col items-center text-center" style={{ borderColor: 'var(--border-subtle)' }}>
                <MapPin className="w-8 h-8 mb-2" style={{ color: 'var(--text-secondary)' }} />
                <p className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>No Fields Mapped</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <p className="text-sm md:text-base font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>Quick Actions</p>
          <div className="flex flex-wrap gap-3">
            {quickActions.map(a => (
              <button key={a.label} className="flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full text-sm md:text-base font-semibold border shadow-sm transition-transform hover:scale-105" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-surface-hover)' }}>
                {a.icon} {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const scanView = `import React, { useState } from 'react';
import { Camera, Upload, MapPin, X } from 'lucide-react';

export const ScanView: React.FC = () => {
  const [cropType, setCropType] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [field, setField] = useState('');
  const [notes, setNotes] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const CROP_TYPES = ['Maize', 'Tomato', 'Rice', 'Apple', 'Mango', 'Cassava', 'Wheat', 'Soybean'];
  const GROWTH_STAGES = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Harvest'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-hidden box-border" style={{ backgroundColor: 'var(--bg-root)' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Crop Scan</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1.5" style={{ color: 'var(--text-secondary)' }}>Upload or capture a sample photo for AI diagnostic evaluation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <h2 className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Sample Photo</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6" style={{ color: 'var(--text-secondary)' }}>Take a photo or upload from gallery</p>

            {previewUrl ? (
              <div className="relative rounded-3xl overflow-hidden border shadow-inner" style={{ borderColor: 'var(--border-subtle)' }}>
                <img src={previewUrl} alt="Crop preview" className="aspect-video md:aspect-[4/3] max-h-[380px] w-full object-cover" />
                <button onClick={() => setPreviewUrl(null)} className="absolute top-4 right-4 p-3 rounded-full hover:scale-105 transition-transform" style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}>
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="aspect-video md:aspect-[4/3] max-h-[380px] w-full rounded-3xl border-2 border-dashed flex flex-col items-center justify-center text-center p-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <Camera className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-20" style={{ color: 'var(--text-secondary)' }} />
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                  <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white cursor-pointer transition-colors shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--accent-green)' }}>
                    <Camera className="w-5 h-5" /> Take Photo
                    <input type="file" accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" />
                  </label>
                  <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white cursor-pointer transition-colors shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--accent-brown)' }}>
                    <Upload className="w-5 h-5" /> Upload File
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-3xl border p-6 md:p-8 space-y-6" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Scan Details</h2>
              <p className="text-sm md:text-base text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Provide context for precision diagnostic analysis</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block" style={{ color: 'var(--text-secondary)' }}>Field (Optional)</label>
                <select value={field} onChange={e => setField(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select field</option>
                  <option>North Acre</option>
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block" style={{ color: 'var(--text-secondary)' }}>Crop Type *</label>
                <select value={cropType} onChange={e => setCropType(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select crop type</option>
                  {CROP_TYPES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block" style={{ color: 'var(--text-secondary)' }}>Growth Stage</label>
                <select value={growthStage} onChange={e => setGrowthStage(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
                  <option value="">Select growth stage</option>
                  {GROWTH_STAGES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs md:text-sm font-semibold mb-1 block" style={{ color: 'var(--text-secondary)' }}>Notes (Optional)</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} placeholder="Add observations..." className="w-full text-sm md:text-base py-4 px-5 rounded-3xl focus:outline-none focus:ring-2 resize-none" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }} />
              </div>
              <div className="flex items-center gap-3 p-4 rounded-3xl text-sm font-medium" style={{ backgroundColor: 'var(--status-warn-bg)', border: '1px solid var(--status-warn-border)', color: 'var(--status-warn-text)' }}>
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>GPS Not Available (Enable location services for mapping)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              <button className="w-full sm:w-auto text-sm md:text-base font-bold py-3 px-8 min-h-[48px] rounded-full border transition-colors shadow-sm" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-surface)' }}>Cancel</button>
              <button className="w-full sm:w-auto text-sm md:text-base font-bold py-3 px-8 min-h-[48px] rounded-full text-white transition-all shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--accent-green)' }}>Submit Scan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const doctorView = `import React, { useState, useRef, useEffect } from 'react';
import { Bot, Paperclip, Mic, ArrowUp, Globe, Bug, Stethoscope, Leaf, CheckCircle2, ShieldCheck, Lightbulb } from 'lucide-react';
import { ChatMessage } from '../types';

export const CropDoctorView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: 'agent', timestamp: new Date().toLocaleTimeString(), text: "Hello! I'm your AI Crop Doctor. I can help you diagnose plant diseases, identify pests, recommend treatments, and provide agricultural advice. How can I assist your farm today?", tags: ['general diagnosis'] },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => scrollRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const quickCards = [
    { label: 'Pest Identification', icon: <Bug className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Help me identify pests on my crop.' },
    { label: 'Disease Diagnosis', icon: <Stethoscope className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Diagnose disease symptoms I am seeing.' },
    { label: 'Nutrient Deficiency', icon: <Leaf className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'My plant leaves are yellowing. Could it be a nutrient deficiency?' },
    { label: 'Growth Issues', icon: <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'My plants are not growing well. What could be the issue?' },
    { label: 'Treatment Options', icon: <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'What treatment options are available for fungal disease?' },
    { label: 'Prevention Tips', icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Give me prevention tips for common crop diseases.' },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: \`u-\${Date.now()}\`, sender: 'user', timestamp: new Date().toLocaleTimeString(), text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: \`a-\${Date.now()}\`, sender: 'agent', timestamp: new Date().toLocaleTimeString(), text: 'Thank you for your question. Based on what you have described, I recommend monitoring the affected area closely and taking a clear photo of the leaf underside for a more accurate diagnosis. Can you share an image?' }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="flex-1 flex overflow-hidden w-full max-w-full box-border" style={{ backgroundColor: 'var(--bg-root)' }}>
      {/* Left sidebar */}
      <div className="hidden lg:flex flex-col w-80 flex-shrink-0 border-r p-6 gap-6 overflow-y-auto" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-4 px-2" style={{ color: 'var(--text-secondary)' }}>Quick Assistance</p>
          <div className="space-y-2">
            {quickCards.map(c => (
              <button key={c.label} onClick={() => setInput(c.prompt)} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full text-sm md:text-base font-semibold text-left transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/5" style={{ color: 'var(--text-primary)' }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)')} onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                <span style={{ color: 'var(--accent-green)' }}>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl p-6 space-y-3" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)' }}>
          <p className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>Pro Tips</p>
          <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2"><span className="text-base">📸</span> Clear macro photos of leaf underside</li>
            <li className="flex items-start gap-2"><span className="text-base">🌱</span> Include crop type & irrigation status</li>
          </ul>
        </div>
      </div>

      {/* Right chat workspace */}
      <div className="flex-1 flex flex-col min-w-0 bg-root relative">
        <div className="h-16 md:h-20 border-b flex-shrink-0 flex items-center gap-4 px-6 md:px-8 sticky top-0 z-10 shadow-sm" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>
            <Bot className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <p className="text-base md:text-lg font-bold" style={{ color: 'var(--text-primary)' }}>AI Crop Doctor</p>
            <p className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Powered by AgentForge Agricultural AI</p>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--status-ok-text)' }}>Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={\`flex gap-3 md:gap-4 max-w-4xl mx-auto \${msg.sender === 'user' ? 'justify-end' : 'justify-start'}\`}>
              {msg.sender === 'agent' && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm" style={{ backgroundColor: 'var(--accent-green)' }}>
                  <Bot className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="max-w-[85%] md:max-w-[75%]">
                <div className="px-5 py-4 text-sm md:text-base leading-relaxed shadow-sm font-medium" style={{ backgroundColor: msg.sender === 'user' ? 'var(--accent-green)' : 'var(--bg-surface)', color: msg.sender === 'user' ? 'white' : 'var(--text-primary)', border: msg.sender === 'agent' ? '1px solid var(--border-subtle)' : 'none', borderRadius: msg.sender === 'user' ? '2rem 2rem 0.5rem 2rem' : '0.5rem 2rem 2rem 2rem' }}>
                  {msg.text}
                </div>
                {msg.tags && (
                  <div className="flex gap-2 mt-2.5 flex-wrap">
                    {msg.tags.map(tag => (
                      <span key={tag} className="text-[10px] md:text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider" style={{ backgroundColor: 'var(--status-ok-bg)', color: 'var(--status-ok-text)' }}>{tag}</span>
                    ))}
                  </div>
                )}
                <p className="text-[10px] md:text-xs mt-2 px-2 font-semibold" style={{ color: 'var(--text-secondary)' }}>{msg.timestamp}</p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        <div className="border-t p-4 md:p-6 flex-shrink-0 sticky bottom-0" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div className="max-w-4xl mx-auto rounded-3xl border-2 p-2 shadow-sm transition-colors focus-within:border-[var(--accent-green)]" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface-hover)' }}>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Describe your crop issue..." rows={1} className="w-full bg-transparent text-sm md:text-base resize-none focus:outline-none p-3 font-medium" style={{ color: 'var(--text-primary)' }} />
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="flex items-center gap-1">
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ color: 'var(--text-secondary)' }}><Paperclip className="w-5 h-5" /></button>
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ color: 'var(--text-secondary)' }}><Globe className="w-5 h-5" /></button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5" style={{ color: 'var(--text-secondary)' }}><Mic className="w-5 h-5" /></button>
                <button onClick={handleSend} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:scale-105" style={{ backgroundColor: input.trim() ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                  <ArrowUp className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const analyticsView = `import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, Calendar, Filter } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [reportType, setReportType] = useState('Overview');
  const diseaseBreakdown = [{ label: 'Healthy', pct: 74, color: 'var(--status-ok-text)' }, { label: 'Early Blight', pct: 18, color: 'var(--status-warn-text)' }, { label: 'Powdery Mildew', pct: 8, color: 'var(--status-alert-text)' }];
  const weeklyScans = [{ day: 'Mon', count: 3 }, { day: 'Tue', count: 7 }, { day: 'Wed', count: 2 }, { day: 'Thu', count: 9 }, { day: 'Fri', count: 5 }, { day: 'Sat', count: 1 }, { day: 'Sun', count: 4 }];
  const maxCount = Math.max(...weeklyScans.map(d => d.count));

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-hidden box-border" style={{ backgroundColor: 'var(--bg-root)' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" style={{ color: 'var(--text-secondary)' }} />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Analytics & Reports</h1>
              <p className="text-sm md:text-base mt-1 text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Comprehensive agricultural insights</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold border transition-colors shadow-sm hover:shadow-md" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-surface)' }}>
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Export CSV
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white transition-colors shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--accent-green)' }}>
              <FileText className="w-4 h-4 md:w-5 md:h-5" /> Generate Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-end" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2" style={{ color: 'var(--text-secondary)' }}>Organization</label>
            <select className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
              <option>Soth\\'s Farm</option>
            </select>
          </div>
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2" style={{ color: 'var(--text-secondary)' }}>Report Type</label>
            <select value={reportType} onChange={e => setReportType(e.target.value)} className="w-full text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
              {['Overview', 'Disease Spread', 'Treatment Efficacy', 'Yield Forecast'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs md:text-sm font-semibold mb-1 block px-2" style={{ color: 'var(--text-secondary)' }}>Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5" style={{ color: 'var(--text-secondary)' }} />
              <input type="date" className="w-full pl-12 pr-4 py-3 min-h-[48px] text-sm md:text-base rounded-full focus:outline-none focus:ring-2" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }} />
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white w-full transition-transform hover:scale-105 shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>
            <Filter className="w-4 h-4 md:w-5 md:h-5" /> Apply
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <h3 className="text-lg md:text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Disease Distribution</h3>
            <div className="space-y-5">
              {diseaseBreakdown.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm md:text-base font-bold mb-2">
                    <span style={{ color: 'var(--text-primary)' }}>{d.label}</span>
                    <span style={{ color: d.color }}>{d.pct}%</span>
                  </div>
                  <div className="h-3 md:h-4 rounded-full" style={{ backgroundColor: 'var(--bg-surface-hover)' }}>
                    <div className="h-3 md:h-4 rounded-full transition-all" style={{ width: \`\${d.pct}%\`, backgroundColor: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
            <h3 className="text-lg md:text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Weekly Scan Frequency</h3>
            <div className="flex items-end justify-between gap-3 h-48 md:h-56">
              {weeklyScans.map(d => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-lg transition-all" style={{ height: \`\${(d.count / maxCount) * 100}%\`, backgroundColor: 'var(--accent-green)', opacity: 0.9, minHeight: '8px' }} />
                  <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border overflow-x-auto" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div className="p-6 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
            <h3 className="text-lg md:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Field Risk Distribution</h3>
          </div>
          <table className="w-full text-sm md:text-base whitespace-nowrap min-w-[600px]">
            <thead style={{ backgroundColor: 'var(--bg-surface-hover)' }}>
              <tr>{['Field', 'Crop', 'Top Issue', 'Severity', 'Last Scanned'].map(h => <th key={h} className="text-left px-6 py-4 font-bold" style={{ color: 'var(--text-secondary)' }}>{h}</th>)}</tr>
            </thead>
            <tbody><tr><td className="px-6 py-8 text-center font-medium" style={{ color: 'var(--text-secondary)' }} colSpan={5}>No field data available. Add and scan fields to generate risk reports.</td></tr></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
`;

const historyView = `import React, { useState } from 'react';
import { Search, Camera, Download, Filter } from 'lucide-react';
import { ScanRecord } from '../types';

export const HistoryView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [cropFilter, setCropFilter] = useState('All Crops');
  const scans: ScanRecord[] = [];

  return (
    <div className="flex-1 overflow-y-auto w-full max-w-full overflow-hidden box-border" style={{ backgroundColor: 'var(--bg-root)' }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>Scan History</h1>
            <p className="text-sm md:text-base mt-1 text-muted-foreground" style={{ color: 'var(--text-secondary)' }}>Soth\\'s Farm • All your analysis results</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold border shadow-sm" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-surface)' }}>
              <Download className="w-4 h-4 md:w-5 md:h-5" /> Export
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>
              <Camera className="w-4 h-4 md:w-5 md:h-5" /> New Scan
            </button>
          </div>
        </div>

        <div className="rounded-3xl border p-6 flex flex-col md:flex-row gap-4 md:items-center" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <div className="relative flex-1">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search scans by crop, field, disease..." className="w-full pl-12 pr-4 py-3 min-h-[48px] text-sm md:text-base rounded-full focus:outline-none focus:ring-2 font-medium" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }} />
          </div>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2 font-bold w-full md:w-auto" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
            {['All Status', 'Healthy', 'Action Required', 'Critical'].map(s => <option key={s}>{s}</option>)}
          </select>
          <select value={cropFilter} onChange={e => setCropFilter(e.target.value)} className="text-sm md:text-base py-3 px-5 min-h-[48px] rounded-full focus:outline-none focus:ring-2 font-bold w-full md:w-auto" style={{ backgroundColor: 'var(--bg-surface-hover)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', outlineColor: 'var(--accent-green)' }}>
            {['All Crops', 'Tomato', 'Wheat', 'Maize', 'Rice', 'Mango'].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="rounded-3xl border p-12 md:p-20 flex flex-col items-center text-center" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-subtle)' }}>
          <Camera className="w-12 h-12 md:w-16 md:h-16 mb-5 opacity-40" style={{ color: 'var(--text-secondary)' }} />
          <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No Scans Found</h3>
          <p className="text-sm md:text-base font-medium mb-8 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>You haven't created any scans yet. Start by scanning your first crop!</p>
          <button className="px-8 py-3.5 min-h-[48px] rounded-full text-sm md:text-base font-bold text-white transition-transform hover:scale-105 shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>Create Your First Scan</button>
        </div>
      </div>
    </div>
  );
};
`;

fs.writeFileSync('src/components/AuthModal.tsx', authModal);
fs.writeFileSync('src/components/Navbar.tsx', navbar);
fs.writeFileSync('src/components/DashboardView.tsx', dashboardView);
fs.writeFileSync('src/components/ScanView.tsx', scanView);
fs.writeFileSync('src/components/AnalyticsView.tsx', analyticsView);
fs.writeFileSync('src/components/HistoryView.tsx', historyView);
fs.writeFileSync('src/components/CropDoctorView.tsx', doctorView);

console.log("Consistency complete: All inputs/buttons are rounded-full. All cards are rounded-3xl.");
