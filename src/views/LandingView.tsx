import React from 'react';
import { 
  Scan, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Wrench, 
  RefreshCw, 
  HeartHandshake, 
  Cpu, 
  Recycle, 
  ShieldCheck, 
  BarChart2, 
  ChevronRight,
  TrendingUp,
  Info,
  Layers,
  Leaf
} from 'lucide-react';
import { SAMPLE_DEVICES } from '../data/mockData';

interface LandingViewProps {
  onStartScan: () => void;
  onExploreDashboard: () => void;
  onSelectDevice: (device: any) => void;
  onNavigate: (tab: string) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ 
  onStartScan, 
  onExploreDashboard, 
  onSelectDevice,
  onNavigate 
}) => {
  return (
    <div className="w-full bg-surface pb-20">
      
      {/* SECTION 1: HERO FROM STITCH */}
      <section className="relative w-full pt-10 pb-20 overflow-hidden bg-surface">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none animate-glow" />
        <div className="absolute top-1/2 -right-20 w-[520px] h-[520px] rounded-full bg-tertiary/15 blur-3xl pointer-events-none animate-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6 z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-colors">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-primary tracking-wide">
                  Circular E-Waste Intelligence • Powered by Multimodal AI
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
                Give Your Old Electronics a{' '}
                <span className="bg-gradient-to-r from-primary via-teal-brand to-tertiary bg-clip-text text-transparent italic">
                  Second Life.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl font-normal leading-relaxed">
                Take a photo of your old or unwanted device. Eclader AI analyzes its condition and helps you choose the smartest next step — repair, reuse, donate, recover, or recycle.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <button
                  onClick={onStartScan}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-container hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={onExploreDashboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all"
                >
                  <BarChart2 className="w-4 h-4 text-primary" />
                  <span>See How It Works</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-on-surface-variant text-xs font-semibold">
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>AI-powered assessment</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Human verification</span>
                </div>
                <div className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Recycle className="w-4 h-4 text-primary" />
                  <span>Responsible handling</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hardware Image & Assessment HUD from Stitch */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden bg-white shadow-2xl p-3 border border-outline-variant/30 hover:shadow-[0_20px_50px_rgba(0,105,72,0.12)] transition-shadow duration-500">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container group">
                  <img
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WXLJstGLmokurvfPWe_XtURT6juwSP5t80UvvsAak5fDFtj3IuZvxgHJ1OTLca5MdT4zMQixdT029J7rmOq4QRlGyvoa3FO3dBd6Ama3l552PAe4RfxZ8NhWJVpYy50pcHbhJ95aoVId0B37T2YFIsNnqPunszkvJwl65UbSTUb4IHHEbLW3FAKez66zjY2UfMTVLKxtgPtaa-r9hw6rj3IqFBMh5KcoXnhCS1oEQN8Ao5JCcZ_BG53Aol"
                    alt="Dell laptop on workbench disassembled with precision screwdrivers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Multimodal Scan Reticle / Laser Scanning Line Overlay */}
                  <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                  <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-fixed to-transparent shadow-[0_0_12px_#85f8c4] animate-scanline pointer-events-none z-10" />

                  {/* HUD Target Box on Screen */}
                  <div className="absolute top-[16%] left-[22%] w-[56%] h-[52%] rounded-xl border border-primary-fixed/70 shadow-[0_0_20px_rgba(104,219,169,0.4)] flex flex-col justify-between p-2.5 pointer-events-none backdrop-brightness-110 z-10">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-primary-fixed font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        AI MULTIMODAL TARGET
                      </div>
                      <span className="text-[10px] font-mono text-emerald-300 font-bold bg-black/60 px-2 py-0.5 rounded">
                        98.4%
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <div className="bg-black/70 backdrop-blur-md p-2 rounded-lg text-white text-[11px] font-mono">
                        <p className="text-emerald-400 font-bold">Dell Inspiron 15 (5570)</p>
                        <p className="text-slate-300">Grade B+ • Loose DC Port</p>
                      </div>
                      <span className="px-2 py-1 rounded bg-primary text-white text-[10px] font-bold">
                        Restorable
                      </span>
                    </div>
                  </div>

                  {/* Bottom Spec Summary Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-outline-variant/30 flex items-center justify-between text-xs z-20 shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="font-bold text-on-surface">Carbon Footprint Avoided:</span>
                    </div>
                    <span className="font-extrabold text-primary font-mono">+18.6 kg CO₂e</span>
                  </div>
                </div>

                {/* Sub-card quick info */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 px-1">
                  <div className="p-2.5 rounded-xl bg-surface-container flex flex-col">
                    <span className="text-[11px] text-on-surface-variant font-medium">Device</span>
                    <span className="text-xs font-bold text-on-surface truncate">Dell Inspiron 15</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container flex flex-col">
                    <span className="text-[11px] text-on-surface-variant font-medium">Condition</span>
                    <span className="text-xs font-bold text-on-surface truncate">Loose DC Jack</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container flex flex-col">
                    <span className="text-[11px] text-on-surface-variant font-medium">Repairability</span>
                    <span className="text-xs font-extrabold text-primary font-mono">8.8 / 10</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 flex flex-col">
                    <span className="text-[11px] text-primary font-medium">Best Route</span>
                    <span className="text-xs font-extrabold text-primary">Local Repair</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE LINEAR CRISIS FROM STITCH (AUTHENTIC IMAGES) */}
      <section className="w-full py-20 bg-surface-container-low" id="why-eclader">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-3 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-red-100 text-red-800 text-xs uppercase tracking-wider font-bold">
              The Linear Electronic Crisis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              What happens to electronics when we stop using them?
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              Over 62 million metric tonnes of electronic waste are discarded annually. The vast majority still holds recoverable life, high-grade silicon, or rare metals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Idle Hardware */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden border border-outline-variant/30">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UNH9Umz9RVJa7YnoJj4bdCUMbH-CPjXWQptxcieGxZznD3YRJjm1eMXQwvpyeDouuVJtmNVaotr_AfeXE0w28p0vDOA1jcrdhbUNixJwDJsx4Gx49cowQQkk8LAHOwIrQI5jlxLt1mjSDq0xeHZRhF-iOboBLWO6SjeYTnfLE8s4vXQuZREhpewZ8x5YHZnoSBg4UZOfF_0Cncs0cTorAamsG1G8EXZh-TZQn1KE2gq7ubFMaqNlCcvQQE"
                  alt="Scuffed smartphone with cracked screen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800">
                  Idle Hardware
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Unused Devices Stored</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Millions of laptops, tablets, and phones languish forgotten in household drawers and corporate closets simply because owners dread the friction, confusion, and cost of diagnostic repair.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-primary text-xs font-bold border-t border-surface-container">
                  <span>Average 3.4 devices dormant per home</span>
                  <Info className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2: Lost Economic Value */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden border border-outline-variant/30">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VXyha_eCuoat0NGxoi7cd6IQHGQ01L0qGyRw2honDpparx-f9sgspvwRPe-2afdDtKArqZ7sQjiHnn9zhovpTo6L1TE9U8D0xn2wV_0RzpC-ADZvJ8n1TaFxO-UJSNjkW1mwEl-nbQmRZmfKzoL271IePzrSzSVEFHowLU1f5avvSWwF60K_y_qfEQdW4UIO-zyPUfpoT9TlIx3LwzSeG_f8fz7XJbHpnm1po4lOQ8fr0FnQrQa7WoX4tk"
                  alt="Salvaged motherboards, RAM memory modules, and coils of copper"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-red-700">
                  Value Loss
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Massive Lost Economic Value</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    Modular components like working RAM chips, high-speed NVMe drives, intact camera modules, and precision displays are shredded prematurely instead of serving secondary cycles.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-primary text-xs font-bold border-t border-surface-container">
                  <span>$57B in critical minerals discarded annually</span>
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3: Environmental Toxins */}
            <div className="group rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col overflow-hidden border border-outline-variant/30">
              <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XWUAQ_MxRHoP2k3hKtW-SF_S6cE91alHUxrI4gtzpScVrk31YG0RMu9sCl5cE4ZEaOXmlmjTIeC70qAgxRH8KIPRYjWt95AKS6aGaz7jfYTa3tZ9aRaFI4oWreQP7yczLSz3dLybltPtYPaBUybaNsZWbhmgeZsIq9kwW_cBMqpeMnSvIvCM-YLtSURiOfMTZVLa-RJrH1WC209Y3nwPUIfQ0m-oQLWO4_vn3F-2B37Oarp5RRNX82MfTJ"
                  alt="Home desktop inkjet printer on desk ready for safe diversion"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-emerald-800">
                  Safe Diversion
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-surface">Severe Environmental Toxins</h3>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                    When crushed or deposited into municipal trash, lithium batteries ignite fires, while lead, mercury, and flame retardants leach into groundwater systems and degrade soil fertility.
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-primary text-xs font-bold border-t border-surface-container">
                  <span>Zero-landfill compliance achievable</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: CIRCULAR WORKFLOW FROM STITCH (4 STEPS) */}
      <section className="w-full py-20 bg-surface" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-wider font-bold">
              Circular Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              From Old Device to Better Outcome
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
              A transparent, step-by-step circular intelligence loop engineered to capture residual computational value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-4 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md font-mono">01</span>
                <Scan className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-base font-bold text-on-surface">Upload Photos</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Snap photos of your device from multiple angles. Enter basic symptoms, battery behavior, or cracked screen notes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-4 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md font-mono">02</span>
                <Cpu className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-base font-bold text-on-surface">AI Assessment</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Multimodal models cross-reference visual damage with OEM component libraries to evaluate repairability and residual lifespan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-4 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md font-mono">03</span>
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-base font-bold text-on-surface">Smart Recommendation</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Receive prioritized choices based on net emissions, financial recovery, and ease: Repair, Resell, Donate, Harvest, or Smelt.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-4 relative hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-full bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md font-mono">04</span>
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-base font-bold text-on-surface">Verified Action</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Connect directly with verified local repair cafes, secure drop-off points, or certified R2/e-Stewards recycling centers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: 5 PATHWAYS BENTO GRID FROM STITCH */}
      <section className="w-full py-20 bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs uppercase tracking-wider font-bold">
              Decision Engine Hierarchy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              One Device. Multiple Possible Futures.
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              Eclader AI optimizes for value preservation. Recycling is never the default option — it is the safe finish line when all other life-cycles are exhausted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Pathway 1: Repair (Rank #1) - Spans 7 cols */}
            <div className="md:col-span-7 p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-primary/40 relative overflow-hidden group">
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold font-mono">
                    Rank #1 • Highest Value
                  </span>
                  <Wrench className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="text-2xl font-extrabold text-on-surface mt-2">01. Repair & Refurbish</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Extend the equipment's useful operating window by replacing only the defective subsystem — screens, thermal paste, IO ports, or lithium packs. Keeps 100% of embodied manufacturing carbon active.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between relative z-10 text-xs">
                <span className="font-bold text-primary font-mono">Carbon Avoidance Factor: 92%</span>
                <span className="text-on-surface-variant font-medium">Local Repair Cafes & Shops</span>
              </div>
            </div>

            {/* Pathway 2: Reuse / Resale (Rank #2) - Spans 5 cols */}
            <div className="md:col-span-5 p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-blue-300 relative overflow-hidden group">
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-bold font-mono">
                    Rank #2 • Circular Market
                  </span>
                  <RefreshCw className="w-7 h-7 text-slate-700 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-extrabold text-on-surface mt-2">02. Reuse & Resell</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Give fully operational electronics a new home. Verified diagnostics allow fair peer-to-peer resale with hardware grading guarantees.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between relative z-10 text-xs">
                <span className="font-bold text-slate-800 font-mono">Value Retained: High</span>
                <span className="text-on-surface-variant font-medium">Secondary Marketplaces</span>
              </div>
            </div>

            {/* Pathway 3: Donate (Rank #3) - Spans 4 cols */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-amber-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold font-mono">
                    Rank #3 • Social Good
                  </span>
                  <HeartHandshake className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-extrabold text-on-surface mt-2">03. Community Donation</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Match lightweight, functional computers with rural schools, community centers, and digital empowerment initiatives.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-amber-800 font-semibold">
                Bridges regional digital education gap
              </div>
            </div>

            {/* Pathway 4: Parts Recovery (Rank #4) - Spans 4 cols */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-teal-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold font-mono">
                    Rank #4 • Component Salvage
                  </span>
                  <Cpu className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-extrabold text-on-surface mt-2">04. Parts Recovery</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Harvest intact components: DDR4/5 memory modules, Wi-Fi 6 cards, copper heat-pipes, and daughter boards from broken mainboards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-teal-800 font-semibold">
                Yields reusable silicon stock
              </div>
            </div>

            {/* Pathway 5: Certified Recycling (Rank #5) - Spans 4 cols */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-green-300">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold font-mono">
                    Rank #5 • Final Closure
                  </span>
                  <Leaf className="w-7 h-7 text-emerald-700" />
                </div>
                <h3 className="text-xl font-extrabold text-on-surface mt-2">05. Certified Recycling</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  For irreparable carcasses: clean smelting recovers pure gold, silver, copper, and palladium under strict zero-landfill standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-container text-xs text-emerald-800 font-semibold">
                100% Non-hazardous smelting
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION BANNER */}
      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary to-teal-brand p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
              Join the Circular Movement
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
              Ready to divert your old tech from toxic landfills?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mt-3 max-w-xl">
              Upload a single photo. Get instant valuation, component salvage potential, and nearest certified drop-off in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={onStartScan}
                className="px-8 py-4 rounded-full font-bold text-sm bg-white text-primary hover:bg-surface-container shadow-xl transition-all hover:scale-105"
              >
                Scan A Device Now
              </button>
              <button
                onClick={() => onNavigate('hubs')}
                className="px-7 py-4 rounded-full font-bold text-sm bg-black/20 text-white hover:bg-black/30 backdrop-blur-md transition-all border border-white/20"
              >
                Find Nearest Drop-Off Hub
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
