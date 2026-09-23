import React, { useState } from 'react';
import { Paperclip, Mic, ArrowUp, Globe, Activity } from 'lucide-react';

export const AgentChatView: React.FC = () => {
  const [inputText, setInputText] = useState('');

  // A simple placeholder conversation to show the structure
  const messages = [
    {
      id: '1',
      sender: 'user',
      text: 'Can you summarize the best practices for preventing late blight in tomatoes?',
    },
    {
      id: '2',
      sender: 'agent',
      text: 'Certainly. To prevent late blight in tomatoes, focus on moisture control and airflow. The most critical steps are:\n\n1. Ensure adequate spacing between plants to promote air circulation.\n2. Water at the base of the plant (e.g., drip irrigation) rather than using overhead sprinklers to keep foliage dry.\n3. Apply a preventative copper-based fungicide before periods of prolonged high humidity.',
    }
  ];

  return (
    <div className="flex-1 flex flex-col relative h-full w-full bg-root text-text-primary">
      
      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 pb-32 pt-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map(msg => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* Agent Avatar */}
              {msg.sender === 'agent' && (
                <div className="w-8 h-8 rounded-full bg-[#1E4632] border border-[#5EE2A0] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#5EE2A0] text-xs font-bold font-mono">AG</span>
                </div>
              )}

              {/* Message Bubble */}
              <div className={`max-w-3xl rounded-xl p-4 text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-surface-hover text-text-primary border border-surface-active' 
                  : 'bg-surface text-text-primary border border-border-subtle'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
              
              {/* User Avatar Space (Optional, keeping it clean by omitting it as in typical ChatGPT style) */}
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Input Dock */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-root via-root to-transparent pt-10 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border-subtle rounded-2xl shadow-lg p-2">
            
            {/* Textarea */}
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Message AgentForge or ask about pathogen symptoms, microclimate stress..."
              className="w-full bg-transparent text-text-primary placeholder-text-secondary resize-none focus:outline-none p-3 text-sm min-h-[60px]"
              rows={2}
            />

            {/* Bottom Actions Row */}
            <div className="flex items-center justify-between px-2 pb-1 pt-2 border-t border-border-subtle/50 mt-1">
              
              {/* Left Tools */}
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors">
                  <Activity className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors">
                  <Globe className="w-5 h-5" />
                </button>
              </div>

              {/* Right Tools */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    inputText.trim() 
                      ? 'bg-[#5EE2A0] text-[#0F1418] hover:bg-[#4bcc8c]' 
                      : 'bg-surface-hover text-text-secondary'
                  }`}
                >
                  <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
            
          </div>
          
          <div className="text-center text-xs text-text-secondary mt-3 font-mono">
            AgentForge 2026
          </div>
        </div>
      </div>
    </div>
  );
};

