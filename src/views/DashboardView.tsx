import React, { useState } from 'react';
import { 
  Scan, 
  Search, 
  Download, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  QrCode, 
  Cpu, 
  Recycle, 
  Sparkles,
  ChevronDown,
  Layers,
  Wrench,
  Clock,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { Device, SAMPLE_DEVICES } from '../data/mockData';

interface DashboardViewProps {
  onSelectDevice: (device: Device) => void;
  onNewScan: () => void;
  onNavigate: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  onSelectDevice, 
  onNewScan,
  onNavigate 
}) => {
  const [filterSort, setFilterSort] = useState<'yield' | 'co2' | 'score'>('yield');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col gap-8 w-full">
      
      {/* Welcome Hero Banner from Stitch */}
      <section className="relative overflow-hidden rounded-3xl bg-white shadow-sm border border-outline-variant/30">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-fixed/30 to-tertiary-fixed/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

        <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col gap-8 z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="max-w-3xl flex flex-col gap-2.5">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-surface-container text-on-surface-variant text-xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-bold uppercase tracking-wider text-on-surface">Gemini 1.5 Multimodal Engine Active</span>
                <span className="text-outline">|</span>
                <span className="text-primary font-semibold">Colombo Regional Cluster</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-tight">
                Good morning, Ananya <span className="inline-block transform hover:rotate-12 transition-transform">👋</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent">
                  Welcome to your Climate Intelligence Hub
                </span>
              </h1>

              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl font-normal leading-relaxed">
                Give your old devices a second life. Multimodal Gemini 1.5 analysis for sustainable triage, repair, and circular recovery.
              </p>
            </div>

            {/* Quick Action Bar from Stitch */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto self-stretch lg:self-center">
              <button
                onClick={onNewScan}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-white font-bold text-xs sm:text-sm hover:bg-primary-container transition-all shadow-md shadow-primary/20 group"
              >
                <Scan className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>+ Scan New Device</span>
              </button>

              <button
                onClick={() => onNavigate('hubs')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-surface-container text-on-surface font-bold text-xs sm:text-sm hover:bg-surface-container-high transition-all"
              >
                <MapPin className="w-4 h-4 text-tertiary" />
                <span>Drop-offs</span>
              </button>

              <button
                onClick={() => alert("Downloading ESG Impact Compliance Report (PDF)...")}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                title="Export ESG Impact Report"
              >
                <Download className="w-5 h-5 text-on-surface-variant" />
              </button>
            </div>

          </div>

          {/* Global Eco Impact Counters from Stitch */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-surface-container">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/60">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-on-surface font-mono">48.2k</span>
                  <span className="text-xs text-primary font-bold">+12% MoM</span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Total Devices Diverted</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/60">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm">
                <Recycle className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-on-surface font-mono">312 t</span>
                  <span className="text-xs text-tertiary font-bold">CO₂e Avoided</span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Audited Climate Metric</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/60">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-emerald-700 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-on-surface font-mono">74%</span>
                  <span className="text-xs text-on-surface-variant font-bold">LCA High</span>
                </div>
                <span className="text-xs text-on-surface-variant font-medium">Hardware Life Extended</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 12-Column Desktop Grid Layout from Stitch */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* LEFT COLUMN: 8 Cols (Active Pipeline Cards) */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          
          {/* Active Device Triage Pipeline Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-on-surface tracking-tight">Active Device Triage & Pipeline</h2>
                <p className="text-xs text-on-surface-variant font-medium">3 items awaiting hand-off or diagnostic validation</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-on-surface-variant font-medium">Sort by:</span>
              <div className="relative">
                <select 
                  value={filterSort}
                  onChange={(e) => setFilterSort(e.target.value as any)}
                  className="text-xs font-bold text-on-surface bg-white px-3 py-1.5 rounded-full border border-outline-variant/40 shadow-sm focus:outline-none"
                >
                  <option value="yield">Impact Yield</option>
                  <option value="co2">Carbon Offset</option>
                  <option value="score">Repair Score</option>
                </select>
              </div>
            </div>
          </div>

          {/* Triage Card 1: Dell Inspiron 14 */}
          <div 
            onClick={() => onSelectDevice(SAMPLE_DEVICES[0])}
            className="group bg-white rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-stretch border border-outline-variant/30 cursor-pointer"
          >
            <div className="relative w-full md:w-56 h-48 md:h-auto rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1WXLJstGLmokurvfPWe_XtURT6juwSP5t80UvvsAak5fDFtj3IuZvxgHJ1OTLca5MdT4zMQixdT029J7rmOq4QRlGyvoa3FO3dBd6Ama3l552PAe4RfxZ8NhWJVpYy50pcHbhJ95aoVId0B37T2YFIsNnqPunszkvJwl65UbSTUb4IHHEbLW3FAKez66zjY2UfMTVLKxtgPtaa-r9hw6rj3IqFBMh5KcoXnhCS1oEQN8Ao5JCcZ_BG53Aol"
                alt="Dell Inspiron 14"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Gemini Vision
              </span>
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono">
                      <Wrench className="w-3.5 h-3.5 text-emerald-600" />
                      Repair & Reuse (91% confidence)
                    </span>
                    <span className="text-outline text-xs">•</span>
                    <span className="text-xs text-on-surface-variant font-medium">L3 Diagnostic</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold font-mono">
                    <Recycle className="w-3.5 h-3.5 text-teal-600" />
                    <span>+18.6 kg CO₂e</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-on-surface group-hover:text-primary transition-colors">
                  Dell Inspiron 15 (Model 5570, ~2020)
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                  Identified minor display hinge resistance & loose DC power barrel. Motherboard, 8GB DDR4 RAM, and 512GB NVMe SSD confirmed intact with 94% health.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-container">
                <span className="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium">
                  <Cpu className="w-4 h-4 text-primary" />
                  Est. Recoverable: 2.1g Gold / 32g Cu
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDevice(SAMPLE_DEVICES[0]);
                    }}
                    className="px-4 py-2 rounded-full bg-surface-container text-on-surface text-xs font-bold hover:bg-surface-container-high transition-colors"
                  >
                    View Diagnostic
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('technicianMatch');
                    }}
                    className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Repair Cafe</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Triage Card 2: Samsung Galaxy S10+ */}
          <div 
            onClick={() => onSelectDevice(SAMPLE_DEVICES[1])}
            className="group bg-white rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-stretch border border-outline-variant/30 cursor-pointer"
          >
            <div className="relative w-full md:w-56 h-48 md:h-auto rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1UNH9Umz9RVJa7YnoJj4bdCUMbH-CPjXWQptxcieGxZznD3YRJjm1eMXQwvpyeDouuVJtmNVaotr_AfeXE0w28p0vDOA1jcrdhbUNixJwDJsx4Gx49cowQQkk8LAHOwIrQI5jlxLt1mjSDq0xeHZRhF-iOboBLWO6SjeYTnfLE8s4vXQuZREhpewZ8x5YHZnoSBg4UZOfF_0Cncs0cTorAamsG1G8EXZh-TZQn1KE2gq7ubFMaqNlCcvQQE"
                alt="Samsung Galaxy S21"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Gemini Vision
              </span>
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold font-mono">
                      <Cpu className="w-3.5 h-3.5 text-amber-600" />
                      Component Harvesting (96% confidence)
                    </span>
                    <span className="text-outline text-xs">•</span>
                    <span className="text-xs text-on-surface-variant font-medium">Display Fractured</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold font-mono">
                    <Recycle className="w-3.5 h-3.5 text-teal-600" />
                    <span>+8.4 kg CO₂e</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-on-surface group-hover:text-primary transition-colors">
                  Samsung Galaxy S21 5G (128GB)
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                  Front Gorilla Glass cracked, digitizer responsive. Mainboard Snapdragon 888 and camera array undamaged. Clean battery pouch cells.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-container">
                <span className="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium">
                  <Cpu className="w-4 h-4 text-primary" />
                  Est. Recoverable: 0.8g Au / 14g Rare Earths
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('tracking');
                    }}
                    className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Generate Drop-off QR</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Triage Card 3: Canon PIXMA */}
          <div 
            onClick={() => onSelectDevice(SAMPLE_DEVICES[2])}
            className="group bg-white rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row gap-5 items-stretch border border-outline-variant/30 cursor-pointer"
          >
            <div className="relative w-full md:w-56 h-48 md:h-auto rounded-2xl overflow-hidden bg-slate-900 flex-shrink-0">
              <img 
                src="https://lh3.googleusercontent.com/aida/AEtjO1XWUAQ_MxRHoP2k3hKtW-SF_S6cE91alHUxrI4gtzpScVrk31YG0RMu9sCl5cE4ZEaOXmlmjTIeC70qAgxRH8KIPRYjWt95AKS6aGaz7jfYTa3tZ9aRaFI4oWreQP7yczLSz3dLybltPtYPaBUybaNsZWbhmgeZsIq9kwW_cBMqpeMnSvIvCM-YLtSURiOfMTZVLa-RJrH1WC209Y3nwPUIfQ0m-oQLWO4_vn3F-2B37Oarp5RRNX82MfTJ"
                alt="Canon PIXMA Printer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                Gemini Vision
              </span>
            </div>

            <div className="flex flex-col justify-between flex-1 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold font-mono">
                      <Recycle className="w-3.5 h-3.5 text-blue-600" />
                      Educational Refurbishment
                    </span>
                    <span className="text-outline text-xs">•</span>
                    <span className="text-xs text-on-surface-variant font-medium">Head Cleaning Needed</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold font-mono">
                    <Recycle className="w-3.5 h-3.5 text-teal-600" />
                    <span>+12.1 kg CO₂e</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-on-surface group-hover:text-primary transition-colors">
                  Canon PIXMA Wireless Inkjet
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                  Dried printhead cartridges, paper feeding mechanism fully functional. Ready for school lab donation after simple flush cycle.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-container">
                <span className="text-xs text-on-surface-variant flex items-center gap-1.5 font-medium">
                  <Cpu className="w-4 h-4 text-primary" />
                  Preserves 320g Recyclable Polymers
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Printer assigned to Digital Inclusion rural school collective in Kandy.");
                    }}
                    className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Donate to STEM Lab</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: 4 Cols (Drop-off Hubs & Hazard Alerts from Stitch) */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          
          {/* Nearby Drop-off Hub Card */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-on-surface flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nearby Circular Hub</span>
              </h3>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                1.4 km away
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container/60 space-y-2">
              <p className="font-extrabold text-sm text-on-surface">Eclader Smart Hub - Colombo Central</p>
              <p className="text-xs text-on-surface-variant">42 Galle Road, Kollupitiya, Colombo 03</p>
              
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-700">24/7 Smart Locker Access</span>
                <span className="font-mono text-on-surface-variant">42% Free</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('hubs')}
              className="w-full py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold transition-colors"
            >
              View All 4 Hubs in Directory →
            </button>
          </div>

          {/* Urgent Battery / Lithium Warning Card from Stitch */}
          <div className="bg-red-50/70 p-6 rounded-3xl border border-red-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-800 font-extrabold text-sm">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Hazard Alert & Lithium Safety</span>
            </div>
            <p className="text-xs text-red-900 leading-relaxed">
              If an old smartphone or laptop displays bulging backplates, stop charging immediately. Pouch cells can experience thermal runaway.
            </p>
            <div className="p-3 bg-white/80 rounded-xl border border-red-200/60 text-[11px] text-red-800 font-medium">
              ✓ Do not puncture swollen battery<br />
              ✓ Use 24/7 fireproof locker deposit<br />
              ✓ Free emergency pickup available
            </div>
            <button
              onClick={() => onNavigate('hubs')}
              className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              Request Hazardous Battery Collection
            </button>
          </div>

          {/* Reclaimed Metals Ledger from Stitch */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/30 shadow-sm space-y-3">
            <h3 className="font-extrabold text-base text-on-surface flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-600" />
              <span>Materials Ledger (Past 30 Days)</span>
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-surface-container">
                <span className="text-on-surface-variant">24k Gold (Au) Preserved:</span>
                <span className="font-mono font-bold text-amber-700">1.42 kg</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-container">
                <span className="text-on-surface-variant">Pure Copper (Cu) Diverted:</span>
                <span className="font-mono font-bold text-orange-700">4,820 kg</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface-container">
                <span className="text-on-surface-variant">Neodymium Magnets (NdFeB):</span>
                <span className="font-mono font-bold text-teal-700">84.5 kg</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('impact')}
              className="w-full text-center text-xs font-bold text-primary hover:underline pt-1 block"
            >
              Open Full ESG Analytics Dashboard →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
