import React, { useState, useEffect } from 'react';
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
              <img src="/logo.jpg" alt="AgentForge" className="w-8 h-8 object-cover shrink-0 rounded-full shadow-lg" />
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
