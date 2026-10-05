import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Battery, 
  Lock, 
  Monitor 
} from 'lucide-react';

interface DiagnosticQuestionsViewProps {
  onComplete: (answers: Record<string, string>) => void;
}

export const DiagnosticQuestionsView: React.FC<DiagnosticQuestionsViewProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({
    power: 'b',
    screen: 'a',
    battery: 'b',
    privacy: 'b',
  });

  const questions = [
    {
      id: 'power',
      icon: Zap,
      title: 'Power & Startup Behavior',
      desc: 'What happens when you connect a charger and press power?',
      options: [
        { id: 'a', label: 'Powers on normally', sub: 'Boots into desktop/operating system' },
        { id: 'b', label: 'Powers intermittently', sub: 'Requires wiggling DC plug or turns off abruptly' },
        { id: 'c', label: 'Completely dead', sub: 'Zero LEDs, zero fan spin, no sound' },
      ],
    },
    {
      id: 'screen',
      icon: Monitor,
      title: 'Display & Touchscreen Condition',
      desc: 'Does the screen display clean visuals without dead pixels or bleeding?',
      options: [
        { id: 'a', label: 'Clean & responsive', sub: 'No lines, bleeding, or color distortion' },
        { id: 'b', label: 'Minor hairline fracture', sub: 'Glass cracked but picture is visible and touch works' },
        { id: 'c', label: 'Black screen / vertical lines', sub: 'Liquid crystal leaked or back-light failed' },
      ],
    },
    {
      id: 'battery',
      icon: Battery,
      title: 'Battery Retention & Thermal State',
      desc: 'How does the internal battery behave under load?',
      options: [
        { id: 'a', label: 'Holds 2+ hours charge', sub: 'Normal mobile operation' },
        { id: 'b', label: 'Only works while plugged in', sub: 'Instant shutdown if charger disconnected' },
        { id: 'c', label: 'Gets unusually hot', sub: 'Potential thermal degradation' },
      ],
    },
    {
      id: 'privacy',
      icon: Lock,
      title: 'Data Sanitization & Security Requirement',
      desc: 'How would you like your personal files and credentials handled?',
      options: [
        { id: 'a', label: 'Already factory reset', sub: 'Personal data has been erased' },
        { id: 'b', label: 'DoD 5220.22-M certified wipe', sub: 'Cryptographic multi-pass overwrite with certificate' },
        { id: 'c', label: 'Rescue my photos/files first', sub: 'Technician data migration to secure cloud vault' },
      ],
    },
  ];

  const handleSelect = (qId: string, optId: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(answers);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Multimodal Cross-Verification</span>
        </div>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
          AI Clarification Questions
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-xl mx-auto">
          Our vision model detected a loose DC power rail on your Dell Inspiron 15. Answering these 4 quick checks finalizes the circular decision matrix.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {questions.map((q) => {
          const Icon = q.icon;
          const currentVal = answers[q.id];

          return (
            <div key={q.id} className="bg-white p-6 sm:p-7 rounded-3xl border border-outline-variant/40 shadow-sm space-y-4">
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">{q.title}</h3>
                  <p className="text-xs text-on-surface-variant">{q.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {q.options.map((opt) => {
                  const isSelected = currentVal === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelect(q.id, opt.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                          : 'border-outline-variant/30 hover:border-primary/40 bg-surface-container-lowest'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-xs font-bold ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                            {opt.label}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-on-surface-variant leading-relaxed">
                          {opt.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-bold text-sm bg-primary text-white hover:bg-primary-container shadow-xl shadow-primary/25 transition-all hover:scale-105"
          >
            <span>Generate Circular Assessment & Triage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </form>

    </div>
  );
};
