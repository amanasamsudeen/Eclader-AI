import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  AlertTriangle, 
  HelpCircle, 
  Scan, 
  MapPin, 
  Wrench,
  ChevronRight
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

interface EcoAssistantViewProps {
  onNavigate: (tab: string) => void;
}

export const EcoAssistantView: React.FC<EcoAssistantViewProps> = ({ onNavigate }) => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! I am your Eclader Eco Assistant, powered by multimodal circular electronics intelligence. You can ask me how to diagnose broken gadgets, safe handling for hazardous lithium batteries, upgrade pathways, or local Sri Lanka drop-off rules. How can I help you today?",
      time: '12:00 PM',
    },
  ]);

  const quickPrompts = [
    "How to safely handle a swollen phone battery?",
    "Can my 2018 laptop be upgraded with more RAM and SSD?",
    "Where is the nearest 24/7 e-waste locker in Colombo?",
    "What precious metals are recovered from old circuit boards?",
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

    // Simulated Intelligent AI Responses
    setTimeout(() => {
      let reply: Message;
      const lower = query.toLowerCase();

      if (lower.includes('battery') || lower.includes('swollen') || lower.includes('bloated')) {
        reply = {
          sender: 'ai',
          text: "⚠️ CRITICAL LITHIUM SAFETY PROTOCOL: A swollen battery indicates internal electrolyte gas buildup and risk of thermal runaway (fire/smoke). \n\n1. DO NOT puncture, press, or attempt to recharge the device.\n2. Place the device in a non-combustible container (such as a metal box or sand bucket).\n3. Do not place in regular trash or domestic recycling bins.\n4. Drop off immediately at our certified hazardous e-waste locker at Colombo Central Bay #04.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Find Hazardous Drop-off Hub",
            targetTab: "hubs",
          },
        };
      } else if (lower.includes('laptop') || lower.includes('upgrade') || lower.includes('ram')) {
        reply = {
          sender: 'ai',
          text: "Great news! Laptops manufactured prior to soldered SoC designs often support modular RAM expansion and SATA/NVMe SSD swaps. \n\nUpgrading an older Core i5/i7 machine with 16GB RAM and a 512GB SSD extends its useful life by 3 to 4 years, averting approximately 50kg of CO₂e emissions compared to buying a budget modern laptop. \n\nWould you like our camera tool to scan your laptop model to check upgradability?",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Scan Laptop for Upgrade Viability",
            targetTab: "intake",
          },
        };
      } else if (lower.includes('colombo') || lower.includes('locker') || lower.includes('hub')) {
        reply = {
          sender: 'ai',
          text: "We have 4 active circular hubs in the Colombo metropolitan area:\n\n• Eclader Smart Hub (42 Galle Rd, Kollupitiya) - 24/7 Smart Lockers, 42% capacity available.\n• GreenTech Repair Cafe (18 Horton Pl, Cinnamon Gardens) - Open until 6:00 PM today.\n• Youth In Tech Hub (Nugegoda) - Refurbishment collective for student donations.\n\nYou can reserve a contactless deposit bay with an instant digital QR token right now!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Open Hubs & Reserve Locker",
            targetTab: "hubs",
          },
        };
      } else {
        reply = {
          sender: 'ai',
          text: "Electronic circuit boards contain significant concentrations of high-grade copper (Cu), 24k gold (Au), palladium (Pd), and silver (Ag). \n\nIn fact, 1 ton of recycled PC motherboards contains up to 40 to 800 times more gold than 1 ton of raw gold ore mined from the earth! Through hydrometallurgical recovery, Eclader partners extract these metals without toxic cyanide or open-air burning.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: {
            label: "Explore Impact Intelligence",
            targetTab: "impact",
          },
        };
      }

      setMessages((prev) => [...prev, reply]);
    }, 650);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
          <Bot className="w-3.5 h-3.5 text-primary" />
          <span>Multimodal Gemini Eco-Intelligence</span>
        </div>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
          Eco Assistant
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-1 max-w-lg mx-auto">
          Ask questions about e-waste safety, repair feasibility, parts harvesting, or community donation programs.
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-3xl border border-outline-variant/40 shadow-xl overflow-hidden flex flex-col h-[560px]">
        
        {/* Messages Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-surface-container-lowest">
          {messages.map((m, idx) => {
            const isAi = m.sender === 'ai';
            return (
              <div 
                key={idx} 
                className={`flex gap-3 max-w-[85%] ${isAi ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white ${
                  isAi ? 'bg-primary shadow-sm' : 'bg-slate-800'
                }`}>
                  {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>

                <div className="space-y-2">
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed whitespace-pre-line shadow-sm ${
                    isAi 
                      ? 'bg-white text-on-surface border border-outline-variant/30' 
                      : 'bg-primary text-white'
                  }`}>
                    {m.text}
                  </div>

                  {m.action && (
                    <button
                      onClick={() => onNavigate(m.action!.targetTab)}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 text-[11px] font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{m.action.label}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
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

        {/* Quick Prompts Bar */}
        <div className="px-4 py-2.5 bg-surface-container border-t border-surface-container-high flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="font-bold text-on-surface-variant flex-shrink-0">Suggestions:</span>
          {quickPrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p)}
              className="px-3 py-1 rounded-full bg-white hover:bg-surface-container-lowest text-on-surface border border-outline-variant/30 whitespace-nowrap transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-surface-container flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about e-waste, repair specs, or battery safety..."
            className="flex-1 px-4 py-3 bg-surface-container rounded-full text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 font-medium"
          />
          <button
            onClick={() => handleSend()}
            className="w-10 h-10 rounded-full bg-primary hover:bg-primary-container text-white flex items-center justify-center transition-transform hover:scale-105 shadow-md flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
