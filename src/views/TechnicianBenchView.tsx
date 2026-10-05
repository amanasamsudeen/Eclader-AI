import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Activity, 
  Zap, 
  Camera, 
  FileText, 
  Save, 
  ArrowRight,
  ShieldCheck,
  Eye,
  Award
} from 'lucide-react';
import { SAMPLE_DEVICES } from '../data/mockData';

interface TechnicianBenchViewProps {
  onCompleteRepair: () => void;
  onNavigate: (tab: string) => void;
}

export const TechnicianBenchView: React.FC<TechnicianBenchViewProps> = ({ 
  onCompleteRepair,
  onNavigate
}) => {
  const [checklist, setChecklist] = useState({
    dcJack: true,
    batteryHealth: true,
    solderPads: true,
    thermalPaste: false,
    burnInTest: false,
  });

  const [benchNotes, setBenchNotes] = useState<string>(
    "Replaced broken center pin on DC input harness. Applied lead-free SAC305 solder alloy. Board traces cleaned with 99% isopropyl alcohol. Voltage rail tested stable at 19.48V DC."
  );

  const [activeTab, setActiveTab] = useState<'schematic' | 'microscope' | 'checklist'>('checklist');

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isAllChecked = Object.values(checklist).every(Boolean);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Technician Bench Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              Bench Station #04 • Kavinda Perera (Sr. Tech)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Dell Inspiron 15 — Bench Triage & Micro-Solder
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-mono">
            Ticket: TKT-2026-8812 | Asset: ECL-2026-8812 | Priority: High (Customer Awaiting)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('tracking')}
            className="px-4 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Custody Log</span>
          </button>

          <button
            onClick={onCompleteRepair}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-primary hover:bg-primary-container text-white transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Sign Off & Issue Certificate</span>
          </button>
        </div>
      </div>

      {/* Multimeter Telemetry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] text-on-surface-variant font-bold mb-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>19.5V Main Rail</span>
          </div>
          <p className="text-2xl font-extrabold font-mono text-emerald-700">19.48 V</p>
          <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
            Optimal Tolerance
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] text-on-surface-variant font-bold mb-1">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>5V Always-On Rail</span>
          </div>
          <p className="text-2xl font-extrabold font-mono text-emerald-700">5.02 V</p>
          <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
            Regulated Stable
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] text-on-surface-variant font-bold mb-1">
            <Zap className="w-3.5 h-3.5 text-teal-500" />
            <span>3.3V Logic Bus</span>
          </div>
          <p className="text-2xl font-extrabold font-mono text-emerald-700">3.31 V</p>
          <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
            No Voltage Sag
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-outline-variant/40 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] text-on-surface-variant font-bold mb-1">
            <Activity className="w-3.5 h-3.5 text-purple-500" />
            <span>Thermal Probes</span>
          </div>
          <p className="text-2xl font-extrabold font-mono text-slate-800">38.4 °C</p>
          <span className="text-[10px] text-slate-700 font-semibold bg-slate-100 px-2 py-0.5 rounded-full">
            Cool Operating State
          </span>
        </div>

      </div>

      {/* Main Bench Work Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Workbench Feed & Schematic Overlay */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/40 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-extrabold text-sm text-on-surface flex items-center gap-2">
                <Camera className="w-4 h-4 text-primary" />
                <span>Microscope & Inspection View</span>
              </h3>
              <div className="flex gap-1 bg-surface-container rounded-full p-1 text-[11px] font-bold">
                <button
                  onClick={() => setActiveTab('checklist')}
                  className={`px-3 py-1 rounded-full ${activeTab === 'checklist' ? 'bg-white shadow text-primary' : 'text-on-surface-variant'}`}
                >
                  Bench Cam
                </button>
                <button
                  onClick={() => setActiveTab('schematic')}
                  className={`px-3 py-1 rounded-full ${activeTab === 'schematic' ? 'bg-white shadow text-primary' : 'text-on-surface-variant'}`}
                >
                  Schematic
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              {activeTab === 'schematic' ? (
                <div className="w-full h-full p-6 text-emerald-400 font-mono text-xs flex flex-col justify-between bg-slate-900 select-none">
                  <div>
                    <p className="text-white font-bold">DELL INSPIRON 15 5000 BOARD SCHEMATIC REV 2.1</p>
                    <p className="text-slate-400 mt-1">POWER RAIL DC-IN CIRCUIT PINOUT:</p>
                    <div className="mt-4 p-3 bg-black/50 rounded border border-emerald-500/30 space-y-1">
                      <p>PIN 1-2: +19.5V_DC_IN [CURRENT: 3.34A MAX]</p>
                      <p>PIN 3: ID_PIN_ONEWIRE [SMART ADAPTER DETECTION]</p>
                      <p>PIN 4-5: GND [CHASSIS GROUND PLANE RETURN]</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    DIAGNOSTIC STATUS: SOLDER TRACE CONTINUITY RESTORED ON PINS 1-2.
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={SAMPLE_DEVICES[0].image}
                    alt="Workbench microscope"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                  
                  {/* Microscope reticle crosshairs */}
                  <div className="absolute inset-12 border border-emerald-400/40 rounded-full pointer-events-none flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-emerald-400 rounded-full animate-ping"></div>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-mono text-[11px]">
                    <span className="text-emerald-400 font-bold">MAG: 40X OPTICAL</span> | DC Jack Ground Joint
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Interactive Checklist and Sign-off */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm space-y-5">
            <h3 className="font-extrabold text-base text-on-surface">
              Technician Quality Assurance Checklist
            </h3>

            <div className="space-y-3">
              {[
                { key: 'dcJack' as const, label: 'DC Jack Mechanical Anchor & Barrel Replaced', sub: 'Verified 0 ohm ground continuity and snug connector friction' },
                { key: 'batteryHealth' as const, label: 'Battery Capacity Test & Cycle Count Log', sub: 'Tested 88% remaining health; zero thermal runaway markers' },
                { key: 'solderPads' as const, label: 'Lead-Free SAC305 Solder Reflow', sub: 'IPC Class 3 certified wetting and meniscus formation' },
                { key: 'thermalPaste' as const, label: 'Thermal Paste Arctic MX-4 Applied', sub: 'Old dried paste scraped and heatsink torqued to 0.4 Nm' },
                { key: 'burnInTest' as const, label: '15-Minute Load Stress & Sleep Test', sub: 'Simulated 100% CPU benchmark without throttling or power cut' },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleCheck(item.key)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    checklist[item.key]
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : 'border-outline-variant/30 hover:border-primary/40 bg-surface-container-lowest'
                  }`}
                >
                  <div className="mt-0.5">
                    {checklist[item.key] ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-outline-variant/60" />
                    )}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${checklist[item.key] ? 'text-emerald-900' : 'text-on-surface'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technician Notes */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-on-surface mb-1.5">
                Technician Memo (Appears on Customer Impact Certificate)
              </label>
              <textarea
                rows={3}
                value={benchNotes}
                onChange={(e) => setBenchNotes(e.target.value)}
                className="w-full p-3 bg-surface-container rounded-xl text-xs text-on-surface font-mono border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            {/* Complete Button */}
            <div className="pt-2">
              <button
                onClick={onCompleteRepair}
                className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Sign Off & Issue Customer Impact Certificate</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
