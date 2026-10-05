import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Wrench, 
  Recycle, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Share2, 
  QrCode, 
  Download,
  AlertCircle,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';
import { Device, SAMPLE_DEVICES } from '../data/mockData';

interface AssessmentResultViewProps {
  device?: Device;
  onProceedToTechnician: () => void;
  onViewCustody: () => void;
  onFindHub: () => void;
  onNavigate: (tab: string) => void;
}

export const AssessmentResultView: React.FC<AssessmentResultViewProps> = ({
  device = SAMPLE_DEVICES[0],
  onProceedToTechnician,
  onViewCustody,
  onFindHub,
  onNavigate
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-primary to-teal-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-96 bg-white/5 skew-x-12 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-bold text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>AI Triage Decision Matrix • Serial #{device.serialNumber}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Grade B+ : High Circular Viability
            </h1>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Based on visual analysis and electrical diagnostic telemetry, this <strong>{device.name}</strong> is an ideal candidate for <strong>Precision Repair</strong>. Extending this hardware’s lifespan avoids <strong>{device.carbonOffsetKg} kg of CO₂e</strong> from new manufacturing.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center min-w-[180px]">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-200 font-mono">Circularity Score</span>
            <span className="text-5xl font-extrabold font-mono text-emerald-300 my-1">{device.repairScore}</span>
            <span className="text-[11px] text-white/80">Out of 100 points</span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Device Photo & Verified Diagnostics */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-5 border border-outline-variant/40 shadow-sm">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 mb-4">
              <img 
                src={device.image} 
                alt={device.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-300 uppercase">
                {device.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-mono font-bold">
                Passed Safety Check
              </div>
            </div>

            <h3 className="font-extrabold text-base text-on-surface">{device.name}</h3>
            <p className="text-xs text-on-surface-variant font-mono mt-0.5">Asset ID: {device.id}</p>
            <p className="text-xs text-on-surface-variant mt-2 border-t border-surface-container pt-3">
              <strong>Visual Inspection:</strong> {device.condition}
            </p>
          </div>

          {/* Safety & Hazard Clearance Card */}
          <div className="bg-emerald-50 rounded-3xl p-5 border border-emerald-200 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Lithium Safety Clearance</span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              No pouch cell bloating, puncture, or thermal discolouration detected. Safe for standard courier dispatch or drop-off locker storage.
            </p>
          </div>

          {/* Environmental Carbon Offset Card */}
          <div className="bg-white rounded-3xl p-5 border border-outline-variant/40 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Environmental Gain</span>
              <Recycle className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-center py-3 bg-surface-container rounded-2xl mb-3">
              <p className="text-3xl font-extrabold text-primary font-mono">{device.carbonOffsetKg} kg</p>
              <p className="text-[11px] font-semibold text-on-surface-variant">Scope 3 CO₂e emissions avoided</p>
            </div>
            <p className="text-[11px] text-on-surface-variant text-center">
              Equivalent to saving <strong>210 liters of gasoline</strong> or charging <strong>6,400 smartphones</strong>.
            </p>
          </div>

        </div>

        {/* Right Column: Decision Matrix, Material Recovery, and Actions */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Economic & Decision Breakdown */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-outline-variant/40 shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-on-surface">
              Circularity & Economic Decision Matrix
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 text-center">
                <span className="text-xs text-on-surface-variant font-medium">Estimated Market Resale</span>
                <p className="text-2xl font-extrabold text-on-surface font-mono mt-1">${device.marketValue}</p>
                <span className="text-[10px] text-emerald-700 font-bold">Fully refurbished value</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 text-center">
                <span className="text-xs text-on-surface-variant font-medium">Estimated Repair Cost</span>
                <p className="text-2xl font-extrabold text-primary font-mono mt-1">$35 - $48</p>
                <span className="text-[10px] text-on-surface-variant">Parts + labor included</span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 text-center">
                <span className="text-xs text-on-surface-variant font-medium">Net Value Saved</span>
                <p className="text-2xl font-extrabold text-teal-700 font-mono mt-1">+${device.marketValue - 45}</p>
                <span className="text-[10px] text-teal-800 font-bold">4.2x Return on Repair</span>
              </div>
            </div>

            {/* Rare Earths & Material Assay Breakdown */}
            <div className="pt-4 border-t border-surface-container">
              <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-primary" />
                <span>Harvestable Precious Metals & Minerals</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-center">
                  <p className="text-xs font-bold text-amber-800">24k Gold (Au)</p>
                  <p className="text-lg font-extrabold text-amber-950 font-mono mt-0.5">{device.materials.goldGrams}g</p>
                  <span className="text-[10px] text-amber-800/80">Connectors & CPU pins</span>
                </div>

                <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-200/60 text-center">
                  <p className="text-xs font-bold text-orange-800">Pure Copper (Cu)</p>
                  <p className="text-lg font-extrabold text-orange-950 font-mono mt-0.5">{device.materials.copperGrams}g</p>
                  <span className="text-[10px] text-orange-800/80">Heat sink & trace wires</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-center">
                  <p className="text-xs font-bold text-slate-800">Aluminum (Al)</p>
                  <p className="text-lg font-extrabold text-slate-950 font-mono mt-0.5">{device.materials.aluminumGrams}g</p>
                  <span className="text-[10px] text-slate-600">Unibody frame & plate</span>
                </div>

                <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-200/60 text-center">
                  <p className="text-xs font-bold text-teal-800">Rare Earths (Nd/Ta)</p>
                  <p className="text-lg font-extrabold text-teal-950 font-mono mt-0.5">{device.materials.rareEarthsGrams}g</p>
                  <span className="text-[10px] text-teal-800/80">Speaker neodymium mags</span>
                </div>
              </div>
            </div>

          </div>

          {/* Next Steps: Pathway Recommendation Buttons */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-outline-variant/40 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-on-surface">
              Select Your Preferred Pathway
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option 1: Recommended Technician Match */}
              <div 
                onClick={onProceedToTechnician}
                className="p-5 rounded-2xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white font-mono">
                      RECOMMENDED
                    </span>
                    <Wrench className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-on-surface">
                    Connect with Certified Technician
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Review matching micro-soldering technicians nearby, approve genuine parts quote, and book bench repair.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-primary gap-1">
                  <span>Match Technician & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Option 2: Drop-Off Locker / Donation */}
              <div 
                onClick={onFindHub}
                className="p-5 rounded-2xl border border-outline-variant/40 bg-surface-container hover:bg-surface-container-high transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-white font-mono">
                      INSTANT 24/7
                    </span>
                    <MapPin className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-on-surface">
                    Drop Off at 24/7 Smart Locker
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Generate instant digital QR code for contactless locker deposit at Colombo Central or GreenTech Cafe.
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-on-surface gap-1">
                  <span>Find Nearest Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

            {/* Digital Passport & Custody Shortcut */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              <button
                onClick={onViewCustody}
                className="flex items-center gap-1.5 font-bold text-on-surface-variant hover:text-primary transition-colors"
              >
                <QrCode className="w-4 h-4 text-primary" />
                <span>View Chain-of-Custody Digital Passport</span>
              </button>

              <button
                onClick={() => onNavigate('certificate')}
                className="flex items-center gap-1.5 font-bold text-on-surface-variant hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download Triage Spec Sheet (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
