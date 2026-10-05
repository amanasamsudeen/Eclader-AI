import React, { useState } from 'react';
import { 
  ShieldCheck, 
  QrCode, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Truck, 
  Wrench, 
  Lock, 
  Download, 
  Share2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SAMPLE_DEVICES } from '../data/mockData';

interface ChainOfCustodyViewProps {
  onIssueCertificate: () => void;
}

export const ChainOfCustodyView: React.FC<ChainOfCustodyViewProps> = ({ onIssueCertificate }) => {
  const [device] = useState(SAMPLE_DEVICES[0]);

  const custodyLogs = [
    {
      step: 1,
      title: 'Multimodal AI Intake & Optical Triage',
      actor: 'Eclader Vision Engine (v3.2)',
      time: 'Oct 3, 2026 • 10:14 AM',
      location: 'User Mobile Session #8812',
      hash: 'sha256:8f92a1...4b09c',
      status: 'verified',
      icon: Sparkles,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      detail: 'Chassis photographed and classified. No lithium swelling detected. Repairability score 88/100 logged into state ledger.',
    },
    {
      step: 2,
      title: 'Contactless Smart Locker Drop-off',
      actor: 'User Handover',
      time: 'Oct 3, 2026 • 11:32 AM',
      location: 'Colombo Central Smart Locker — Bay #04',
      hash: 'sha256:7c18d3...9902a',
      status: 'verified',
      icon: Lock,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      detail: 'Device placed into tamper-evident circular locker. Weigh-in sensor verified 1.94 kg matching laptop payload specifications.',
    },
    {
      step: 3,
      title: 'Zero-Emission Courier Transit',
      actor: 'EcoCourier EV Logistics',
      time: 'Oct 3, 2026 • 01:05 PM',
      location: 'GPS: 6.9068° N, 79.8516° E (En route to Tech Cafe)',
      hash: 'sha256:1a84f0...e421d',
      status: 'verified',
      icon: Truck,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      detail: 'Transferred via electric cargo bicycle in anti-static padded compartment. Custody token scanned at transit junction.',
    },
    {
      step: 4,
      title: 'Bench Ingestion & Hardware Workmanship',
      actor: 'Kavinda Perera (Sr. Tech ID: LK-881)',
      time: 'Oct 3, 2026 • 02:40 PM',
      location: 'GreenTech Bench #04 — Colombo 07',
      hash: 'sha256:9d44e2...8831b',
      status: 'verified',
      icon: Wrench,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      detail: 'DC jack ground plane resoldered with lead-free SAC305 alloy. Thermal compound replaced with Arctic MX-4. Voltage 19.48V stable.',
    },
    {
      step: 5,
      title: 'Circular Impact QA & Cryptographic Certificate',
      actor: 'Eclader Verification Oracle',
      time: 'Oct 3, 2026 • 04:50 PM',
      location: 'National Circular Ledger #LK-EW-2026',
      hash: 'sha256:3e710b...cc729',
      status: 'completed',
      icon: ShieldCheck,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      detail: '52.4 kg CO₂e avoided. 0.045g Gold and 210g Copper preserved from mining. Green impact certificate issued.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span>Immutable Circular Traceability</span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
            Device Chain-of-Custody & Passport
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Every handover, diagnostic scan, and technician repair step is cryptographically sealed for ESG compliance.
          </p>
        </div>

        <button
          onClick={onIssueCertificate}
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-xs shadow-md shadow-primary/20 transition-all flex items-center gap-2 self-start md:self-auto"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>View Verified Impact Certificate</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Device Passport & Verification Token */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-outline-variant/40 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-surface-container pb-3">
              <span className="text-xs font-extrabold text-on-surface uppercase tracking-wider">
                Digital Hardware Passport
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="flex justify-center p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
              <div className="p-3 bg-white rounded-xl shadow-inner border border-surface-container flex flex-col items-center">
                <QrCode className="w-36 h-36 text-slate-800" />
                <span className="text-[10px] font-mono text-on-surface-variant mt-2 font-bold">
                  PASS-ECL-8812-VERIFIED
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-surface-container/60">
                <span className="text-on-surface-variant">Asset Model:</span>
                <span className="font-bold text-on-surface">{device.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-container/60">
                <span className="text-on-surface-variant">Serial Number:</span>
                <span className="font-mono font-bold text-on-surface">{device.serialNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-container/60">
                <span className="text-on-surface-variant">Intake Date:</span>
                <span className="font-bold text-on-surface">{device.intakeDate}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-container/60">
                <span className="text-on-surface-variant">Custody State:</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Bench Tested & Sealed
                </span>
              </div>
            </div>

            <button
              onClick={() => alert("Digital Passport Hash copied: 8f92a17c18d31a84f09d44e23e710bcc729")}
              className="w-full py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container text-xs font-bold text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-primary" />
              <span>Copy Public Ledger Proof</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Custody Event Timeline */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm space-y-6">
          <h2 className="text-lg font-extrabold text-on-surface">
            Custody Handover Ledger
          </h2>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-surface-container-high">
            {custodyLogs.map((log) => {
              const Icon = log.icon;
              return (
                <div key={log.step} className="relative group">
                  {/* Step Bubble */}
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-primary text-white text-[11px] font-mono font-bold flex items-center justify-center shadow-md shadow-primary/20">
                    {log.step}
                  </div>

                  <div className="p-5 rounded-2xl border border-outline-variant/30 hover:border-primary/40 bg-surface-container-lowest transition-all space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-extrabold text-sm text-on-surface flex items-center gap-2">
                        <span>{log.title}</span>
                      </h3>
                      <span className="text-[11px] font-mono text-on-surface-variant flex items-center gap-1">
                        <Clock className="w-3 h-3 text-primary" />
                        {log.time}
                      </span>
                    </div>

                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {log.detail}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-container text-[11px]">
                      <span className="font-semibold text-primary flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {log.location}
                      </span>
                      <span className="font-mono text-slate-500 font-bold">
                        {log.hash}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
