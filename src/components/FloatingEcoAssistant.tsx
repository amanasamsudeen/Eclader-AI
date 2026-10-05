import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  ChevronRight, 
  MessageSquare,
  AlertTriangle,
  MapPin,
  Scan,
  Wrench,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
  action?: {
    label: string;
    targetTab: string;
  };
}

interface FloatingEcoAssistantProps {
  onNavigate: (tab: string) => void;
}

export const FloatingEcoAssistant: React.FC<FloatingEcoAssistantProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "👋 Hi! I'm your Gemini-powered Eco Assistant. Ask me anything about diagnosing broken electronics, battery hazards, repair specs, or 24/7 locker drop-offs in Sri Lanka!",
      time: 'Just now',
    },
  ]);

  const quickPrompts = [
    "⚠️ How to handle a swollen phone battery?",
    "💻 Can my 2018 laptop be upgraded?",
    "📍 Nearest 24/7 e-waste locker in Colombo?",
    "♻️ What metals are recovered from circuit boards?",
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let reply: Message;
      const lower = query.toLowerCase();

      if (lower.includes('battery') || lower.includes('swollen') || lower.includes('bloated')) {
        reply = {
          sender: 'ai',
          text: "⚠️ CRITICAL LITHIUM SAFETY WARNING:\nA swollen battery indicates trapped flammable gas and dangerous thermal runaway risk.\n\n1. Do NOT press, pierce, or charge the device.\n2. Store in a cool, non-flammable metal container or sand bucket.\n3. Never discard in domestic trash.\n4. Drop off immediately at our certified hazardous locker at Colombo Central (Bay #04).",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Open Colombo Central Locker",
            targetTab: "hubs",
          },
        };
      } else if (lower.includes('laptop') || lower.includes('upgrade') || lower.includes('ram')) {
        reply = {
          sender: 'ai',
          text: "Older laptops often support cost-effective RAM and NVMe SSD upgrades! \n\nUpgrading to 16GB RAM and a 512GB SSD extends device lifespan by 3+ years and avoids ~52 kg of manufacturing CO₂e. \n\nWould you like our camera tool to scan your laptop model to check upgradability?",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Scan Laptop for Upgrade Specs",
            targetTab: "intake",
          },
        };
      } else if (lower.includes('colombo') || lower.includes('locker') || lower.includes('hub')) {
        reply = {
          sender: 'ai',
          text: "We have 4 active circular hubs in Colombo:\n\n• Eclader Smart Hub (42 Galle Rd, Kollupitiya) - 24/7 Smart Lockers (42% capacity free).\n• GreenTech Repair Cafe (18 Horton Pl, Cinnamon Gardens) - Open until 6:00 PM.\n• Youth In Tech Hub (Nugegoda) - Refurbishment lab for student donations.\n\nReserve your contactless locker bay right now!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "View Recovery Hubs & Lockers",
            targetTab: "hubs",
          },
        };
      } else {
        reply = {
          sender: 'ai',
          text: "Electronic circuit boards are rich in 24k Gold (Au), pure Copper (Cu), and Palladium (Pd). 1 ton of recycled motherboards yields up to 40x more gold than 1 ton of raw mined ore!\n\nOur certified hydrometallurgical partners recover these precious elements without toxic open-air burning.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "View ESG Reclamation Data",
            targetTab: "impact",
          },
        };
      }

      setMessages((prev) => [...prev, reply]);
    }, 600);
  };

  return (
    <aside aria-label="Eco Assistant chat widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Window */}
      {isOpen && (
        <div 
          role="region"
          aria-label="Eco Assistant chat window"
          className="mb-3 w-[92vw] sm:w-[380px] md:w-[420px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-outline-variant/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-primary p-4 text-white flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Bot className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm tracking-tight">Eco Assistant</h3>
                  <span className="text-[10px] bg-white/25 px-1.5 py-0.5 rounded-full font-mono font-bold">
                    Gemini 1.5
                  </span>
                </div>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Active Circular Intelligence
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-surface-container-lowest">
            {messages.map((m, idx) => {
              const isAi = m.sender === 'ai';
              return (
                <div 
                  key={idx} 
                  className={`flex gap-2.5 max-w-[88%] ${isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs ${
                    isAi ? 'bg-primary shadow-sm' : 'bg-slate-800'
                  }`}>
                    {isAi ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-1.5">
                    <div className={`p-3.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line shadow-sm ${
                      isAi 
                        ? 'bg-white text-on-surface border border-outline-variant/30' 
                        : 'bg-primary text-white'
                    }`}>
                      {m.text}
                    </div>

                    {m.action && (
                      <button
                        onClick={() => {
                          onNavigate(m.action!.targetTab);
                          setIsOpen(false);
                        }}
                        className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-[10px] font-bold transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>{m.action.label}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}

                    <span className="text-[10px] text-on-surface-variant block px-1">
                      {m.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prompt Suggestions */}
          <div className="px-3 py-2 bg-surface-container border-t border-surface-container-high flex items-center gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-surface-container-lowest text-on-surface border border-outline-variant/30 whitespace-nowrap transition-colors text-[10px] font-semibold"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-surface-container flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about e-waste, battery safety, repair..."
              className="flex-1 px-3.5 py-2.5 bg-surface-container rounded-full text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-medium"
            />
            <button
              onClick={() => handleSend()}
              className="w-9 h-9 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md flex-shrink-0"
              title="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-700 via-primary to-teal-700 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-white/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>

        <Bot className="w-5 h-5 text-white" />
        <span className="font-extrabold text-xs tracking-wide">
          Eco Assistant
        </span>

        <span className="hidden sm:inline-block text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full font-mono">
          AI Chat
        </span>
      </button>

    </aside>
  );
};
