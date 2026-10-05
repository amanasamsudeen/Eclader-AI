import React, { useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Download, 
  Share2, 
  Sparkles, 
  Recycle, 
  ShieldCheck, 
  QrCode, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { SAMPLE_DEVICES } from '../data/mockData';
import confetti from 'canvas-confetti';

interface ImpactCertificateViewProps {
  onReturnHome: () => void;
  onExploreHubs: () => void;
}

export const ImpactCertificateView: React.FC<ImpactCertificateViewProps> = ({ 
  onReturnHome,
  onExploreHubs
}) => {
  const device = SAMPLE_DEVICES[0];

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#006948', '#10B981', '#14B8A6', '#85F8C4', '#F59E0B'],
    });
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#006948', '#10B981', '#14B8A6', '#85F8C4', '#F59E0B'],
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Notification */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono mb-3">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Device Triage & Repair Lifecycle Complete</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
          Circular Impact Certificate
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-lg mx-auto">
          This verifiable digital credential attests to the diversion of electronic waste and prevention of Scope 3 greenhouse gas emissions.
        </p>
      </div>

      {/* Official Certificate Card */}
      <div className="relative bg-white rounded-3xl p-8 sm:p-12 border-4 border-emerald-600/30 shadow-2xl overflow-hidden">
        
        {/* Ambient Corner Seals & Accents */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full pointer-events-none -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-tr from-teal-100 to-transparent rounded-tr-full pointer-events-none -ml-10 -mb-10" />

        <div className="relative z-10 space-y-8">
          
          {/* Certificate Header with Logo */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-container pb-6">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Eclader Logo" className="w-12 h-12 object-contain" />
              <div>
                <h2 className="text-xl font-extrabold text-on-surface tracking-tight">
                  Eclader AI Circularity Protocol
                </h2>
                <span className="text-xs text-primary font-bold">
                  Official Green Electronics Verification
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-mono text-on-surface-variant uppercase font-bold">
                CERTIFICATE ID
              </span>
              <p className="text-sm font-extrabold font-mono text-primary">
                CERT-ECL-2026-8812
              </p>
              <span className="text-[10px] text-on-surface-variant">Issued: October 5, 2026</span>
            </div>
          </div>

          {/* Recipient / Hardware Dedication */}
          <div className="text-center py-4 space-y-2">
            <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant font-mono">
              THIS CERTIFIES THAT THE HARDWARE UNIT
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
              {device.name}
            </h3>
            <p className="text-xs font-mono text-on-surface-variant">
              Asset Serial #{device.serialNumber} • Workmanship: Kavinda Perera (Sr. Tech)
            </p>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto pt-2 leading-relaxed">
              has been inspected, repaired, and successfully restored to operating condition under ISO 14001 and R2v3 circular recycling standards, avoiding virgin metal mining and landfill incineration.
            </p>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center">
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">CO₂e Avoided</span>
              <span className="text-2xl font-extrabold text-emerald-900 font-mono">{device.carbonOffsetKg} kg</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Gold (24k) Saved</span>
              <span className="text-2xl font-extrabold text-amber-900 font-mono">{device.materials.goldGrams}g</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Copper Reclaimed</span>
              <span className="text-2xl font-extrabold text-orange-900 font-mono">{device.materials.copperGrams}g</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Lifespan Extended</span>
              <span className="text-2xl font-extrabold text-teal-900 font-mono">+3 Years</span>
            </div>
          </div>

          {/* Verification QR and Signatures */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-surface-container">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-xl border border-surface-container shadow-sm">
                <QrCode className="w-16 h-16 text-slate-800" />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-on-surface block">Cryptographic Hash</span>
                <span className="font-mono text-[10px] text-on-surface-variant block">sha256:8f92a1...4b09c</span>
                <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified on Eclader Public Ledger
                </span>
              </div>
            </div>

            <div className="text-center sm:text-right space-y-1">
              <div className="font-serif italic text-lg text-slate-700">Kavinda Perera</div>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                Certified Bench Technologist
              </p>
              <p className="text-[10px] text-primary font-bold">Eclader Circular Operations</p>
            </div>
          </div>

        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          onClick={triggerConfetti}
          className="px-6 py-3 rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-all flex items-center gap-2 border border-emerald-200"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Celebrate Impact 🎉</span>
        </button>

        <button
          onClick={() => alert("Downloading ESG Certificate PDF (CERT-ECL-2026-8812.pdf)...")}
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF Certificate</span>
        </button>

        <button
          onClick={() => alert("Shareable link copied to clipboard!")}
          className="px-6 py-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-all flex items-center gap-2"
        >
          <Share2 className="w-4 h-4 text-primary" />
          <span>Share to Socials</span>
        </button>

        <button
          onClick={onReturnHome}
          className="px-6 py-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-all"
        >
          Return to Dashboard
        </button>
      </div>

    </div>
  );
};
