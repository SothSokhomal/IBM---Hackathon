import React, { useState, useRef, useEffect } from 'react';
import bgImage from '../../assets/crop-doctor-bg.jpg';
import { Bot, Paperclip, Mic, ArrowUp, Globe, Bug, Stethoscope, Leaf, CheckCircle, ShieldCheck, Lightbulb } from 'lucide-react';
import { ChatMessage } from '../../types';

export const CropDoctorView: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', sender: 'agent', timestamp: 'Just now', text: "Hello! I'm your AI Crop Doctor. I can help you diagnose plant diseases, identify pests, recommend treatments, and provide agricultural advice. How can I assist your farm today?", tags: ['general diagnosis'] },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const quickCards = [
    { label: 'Pest Identification', icon: <Bug className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Help me identify pests on my crop.' },
    { label: 'Disease Diagnosis', icon: <Stethoscope className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Diagnose disease symptoms I am seeing.' },
    { label: 'Nutrient Deficiency', icon: <Leaf className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'My plant leaves are yellowing. Could it be a nutrient deficiency?' },
    { label: 'Growth Issues', icon: <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'My plants are not growing well. What could be the issue?' },
    { label: 'Treatment Options', icon: <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'What treatment options are available for fungal disease?' },
    { label: 'Prevention Tips', icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />, prompt: 'Give me prevention tips for common crop diseases.' },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: `u-${Date.now()}`, sender: 'user', timestamp: 'Just now', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { id: `a-${Date.now()}`, sender: 'agent', timestamp: 'Just now', text: 'Thank you for your question. Based on what you have described, I recommend monitoring the affected area closely and taking a clear photo of the leaf underside for a more accurate diagnosis. Can you share an image?' }]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      handleSend(); 
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden w-full max-w-full box-border relative">
      <img src={bgImage} alt="Background" className="fixed inset-0 w-full h-full object-cover z-0 contrast-110 saturate-[1.2] brightness-105" />
      <div className="relative z-10 flex-1 flex w-full h-full max-w-full">
      {/* Left sidebar */}
      <div className="hidden lg:flex flex-col w-80 flex-shrink-0 border-r p-6 gap-6 overflow-y-auto backdrop-blur-md bg-black/40 border-r border-white/10 text-white">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-4 px-2 text-gray-300">Quick Assistance</p>
          <div className="space-y-2">
            {quickCards.map(c => (
              <button key={c.label} onClick={() => setInput(c.prompt)} className="w-full flex items-center gap-3 px-4 py-3.5 rounded-full text-sm md:text-base font-semibold text-left transition-all duration-200 border border-transparent hover:bg-white/40 dark:hover:bg-white/40 hover:shadow-md hover:text-[#064E3B] active:bg-white/50 active:scale-[0.98] text-white">
                <span style={{ color: 'var(--accent-green)' }}>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl p-6 space-y-3" style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="font-bold text-base text-white">Pro Tips</p>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-base">📸</span> Clear macro photos of leaf underside</li>
            <li className="flex items-start gap-2"><span className="text-base">🌱</span> Include crop type & irrigation status</li>
          </ul>
        </div>
      </div>

      {/* Right chat workspace */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <div className="h-16 md:h-20 border-b flex-shrink-0 flex items-center gap-4 px-6 md:px-8 sticky top-0 z-10 shadow-sm backdrop-blur-md bg-black/40 border-r border-white/10 text-white">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md" style={{ backgroundColor: 'var(--accent-green)' }}>
            <Bot className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <p className="text-base md:text-lg font-bold text-white">AI Crop Doctor</p>
            <p className="text-xs md:text-sm font-medium text-gray-300">Powered by AgentForge Agricultural AI</p>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm font-bold" style={{ color: 'var(--status-ok-text)' }}>Online</span>
          </div>
        </div>

        
        {/* Mobile Quick Assistance Horizontal Menu */}
        <div className="lg:hidden flex items-center gap-3 overflow-x-auto px-4 py-4 border-b flex-shrink-0 hide-scrollbar shadow-sm bg-black/10 dark:bg-white/5" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          {quickCards.map(c => (
            <button key={c.label} onClick={() => setInput(c.prompt)} className="flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all border hover:bg-white/30 active:scale-95 shadow-sm bg-white/10 dark:bg-black/20" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
              <span className="text-emerald-400">{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 md:py-8 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-3 md:gap-4 max-w-4xl mx-auto ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'agent' && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm" style={{ backgroundColor: 'var(--accent-green)' }}>
                  <Bot className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="max-w-[85%] md:max-w-[75%]">
                <div className="px-5 py-4 text-sm md:text-base leading-relaxed shadow-sm font-medium" style={{ backgroundColor: msg.sender === 'user' ? '#10B981' : 'rgba(0,0,0,0.5)', color: 'white', border: msg.sender === 'agent' ? '1px solid rgba(255,255,255,0.1)' : 'none', borderRadius: msg.sender === 'user' ? '2rem 2rem 0.5rem 2rem' : '0.5rem 2rem 2rem 2rem', backdropFilter: 'blur(12px)' }}>
                  {msg.text}
                </div>
                {msg.tags && msg.tags.length > 0 && (
                  <div className="flex gap-2 mt-2.5 flex-wrap">
                    {msg.tags.map(tag => (
                      <span key={tag} className="text-[10px] md:text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider" style={{ backgroundColor: 'var(--status-ok-bg)', color: 'var(--status-ok-text)' }}>{tag}</span>
                    ))}
                  </div>
                )}
                <p className="text-[10px] md:text-xs mt-2 px-2 font-semibold text-gray-300">{msg.timestamp}</p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        <div className="border-t p-4 md:p-6 flex-shrink-0 sticky bottom-0 backdrop-blur-md bg-black/40 border-r border-white/10 text-white">
          <div className="max-w-4xl mx-auto rounded-3xl border-2 p-2 shadow-sm transition-colors focus-within:border-[var(--accent-green)] hover:bg-white/30" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(0,0,0,0.4)', color: 'white' }}>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Describe your crop issue..." rows={1} className="w-full bg-transparent text-sm md:text-base resize-none focus:outline-none p-3 font-medium text-white" />
            <div className="flex items-center justify-between pt-2 px-1">
              <div className="flex items-center gap-1">
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:bg-white/30 text-gray-300"><Paperclip className="w-5 h-5" /></button>
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:bg-white/30 text-gray-300"><Globe className="w-5 h-5" /></button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5 hover:bg-white/30 text-gray-300"><Mic className="w-5 h-5" /></button>
                <button onClick={handleSend} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all shadow-md hover:scale-105" style={{ backgroundColor: input.trim() ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                  <ArrowUp className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
