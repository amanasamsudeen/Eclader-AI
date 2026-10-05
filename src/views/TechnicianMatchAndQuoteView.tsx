import React, { useState } from 'react';
import { 
  Wrench, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { CERTIFIED_TECHNICIANS, Technician } from '../data/mockData';
import confetti from 'canvas-confetti';

interface TechnicianMatchAndQuoteViewProps {
  onQuoteApproved: () => void;
  onOpenBench: () => void;
}

export const TechnicianMatchAndQuoteView: React.FC<TechnicianMatchAndQuoteViewProps> = ({ 
  onQuoteApproved,
  onOpenBench
}) => {
  const [selectedTech, setSelectedTech] = useState<Technician>(CERTIFIED_TECHNICIANS[0]);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const handleApprove = () => {
    setIsApproved(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#006948', '#10B981', '#14B8A6', '#85F8C4'],
    });
    setTimeout(() => {
      onQuoteApproved();
    }, 1800);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Intelligent Repair Allocation</span>
        </div>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
          Smart Technician Matching & Quotation
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
          Matched with 3 certified micro-soldering and circular electronics specialists within 5km of your location.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Technician Selection List */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-sm font-extrabold text-on-surface uppercase tracking-wider">
            Available Verified Technicians
          </h2>

          {CERTIFIED_TECHNICIANS.map((tech) => {
            const isSelected = selectedTech.id === tech.id;
            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                    : 'border-outline-variant/30 hover:border-primary/40 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={tech.avatar}
                    alt={tech.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-outline-variant/40 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-base text-on-surface truncate">
                        {tech.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500 font-mono">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{tech.rating}</span>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-primary mt-0.5">{tech.title}</p>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed line-clamp-2">
                      {tech.specialty}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-[11px] text-on-surface-variant font-medium pt-2 border-t border-surface-container">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {tech.completedRepairs}+ repaired
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        {tech.availableSlot}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="p-4 rounded-2xl bg-surface-container text-xs text-on-surface-variant flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-primary" />
              R2v3 & IPC-A-610 Workmanship Certified
            </span>
            <button 
              onClick={onOpenBench}
              className="text-primary font-bold hover:underline"
            >
              Switch to Technician View →
            </button>
          </div>
        </div>

        {/* Right Column: Itemized Transparent Quote Card */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-outline-variant/40 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-surface-container pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-primary tracking-wider">
                  QUOTE REF: QT-2026-991
                </span>
                <h3 className="text-lg font-extrabold text-on-surface mt-0.5">
                  Dell Inspiron 15 Repair Estimate
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-on-surface-variant">Prepared by</span>
                <p className="text-xs font-bold text-on-surface">{selectedTech.name}</p>
              </div>
            </div>

            {/* Line items */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-surface-container/60">
                <div>
                  <p className="font-bold text-on-surface">OEM DC Power Jack Harness (Dell OEM)</p>
                  <p className="text-[11px] text-on-surface-variant">Surge-protected reinforced socket</p>
                </div>
                <span className="font-mono font-bold text-on-surface">$18.00</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-surface-container/60">
                <div>
                  <p className="font-bold text-on-surface">Precision Micro-Soldering Labor</p>
                  <p className="text-[11px] text-on-surface-variant">Reflow broken ground trace & anchor pins</p>
                </div>
                <span className="font-mono font-bold text-on-surface">$22.00</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-surface-container/60">
                <div>
                  <p className="font-bold text-on-surface">Ultrasonic Clean & Thermal Repaste</p>
                  <p className="text-[11px] text-on-surface-variant">Non-conductive Arctic MX-4 thermal paste</p>
                </div>
                <span className="font-mono font-bold text-on-surface">$8.00</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-surface-container/60 text-emerald-700">
                <div>
                  <p className="font-bold">Eclader Circular Subsidy Rebate</p>
                  <p className="text-[11px] text-emerald-800">Carbon offset community incentive credit</p>
                </div>
                <span className="font-mono font-bold">-$10.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="p-4 rounded-2xl bg-surface-container flex items-center justify-between">
              <div>
                <span className="text-xs text-on-surface-variant font-medium">Total Payable</span>
                <p className="text-xs text-emerald-700 font-bold mt-0.5">Includes 6-Month Full Warranty</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-primary font-mono">$38.00</span>
              </div>
            </div>

            {/* Environmental Gain Pill */}
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Fixing this device prevents 52.4 kg CO₂e from mining new copper and aluminum.</span>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                disabled={isApproved}
                onClick={handleApprove}
                className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100 disabled:opacity-75"
              >
                {isApproved ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white animate-spin" />
                    <span>Quote Approved! Initializing Bench Queue...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Approve Quote & Dispatch Repair ($38.00)</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenBench}
                className="w-full py-3 px-6 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-bold text-xs transition-colors"
              >
                Preview Technician Workbench & Multimeter Telemetry
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
