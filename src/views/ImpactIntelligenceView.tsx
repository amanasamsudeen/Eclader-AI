import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar, 
  CheckCircle2, 
  Leaf, 
  Cpu, 
  Recycle, 
  FileText,
  Share2
} from 'lucide-react';

export const ImpactIntelligenceView: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'30d' | '90d' | '1y' | 'all'>('1y');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span>Planetary Planetary Analytics & ESG Oracle</span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
            Impact Intelligence & ESG Audit
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Aggregated lifecycle data, virgin raw material preservation, and corporate Scope 3 GHG emissions offset verification.
          </p>
        </div>

        {/* Time Filter & Export */}
        <div className="flex items-center gap-3">
          <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant/30 text-xs font-bold">
            {(['30d', '90d', '1y', 'all'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-3 py-1 rounded-full transition-all ${
                  timeRange === r ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant'
                }`}
              >
                {r === '30d' ? '30 Days' : r === '90d' ? '90 Days' : r === '1y' ? 'Past Year' : 'All Time'}
              </button>
            ))}
          </div>

          <button
            onClick={() => alert("Generating automated ESG Sustainability Audit Report (ISO 14064 Compliant)...")}
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Export ESG Report</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-6 rounded-3xl border border-outline-variant/40 shadow-sm">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
            Net CO₂e Averted
          </span>
          <p className="text-3xl font-extrabold text-emerald-700 font-mono mt-2">
            48.2 <span className="text-lg">Tons</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-emerald-800 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+24% vs previous quarter</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-outline-variant/40 shadow-sm">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
            Virgin Mining Prevented
          </span>
          <p className="text-3xl font-extrabold text-teal-700 font-mono mt-2">
            18.2 <span className="text-lg">Tons</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-teal-800 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Copper, Aluminum, and Iron ores</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-outline-variant/40 shadow-sm">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
            Reclaimed 24k Gold
          </span>
          <p className="text-3xl font-extrabold text-amber-700 font-mono mt-2">
            1.42 <span className="text-lg">kg</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-amber-800 font-semibold">
            <span>$92,300 recovered commodity value</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-outline-variant/40 shadow-sm">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
            Toxic Waste Diverted
          </span>
          <p className="text-3xl font-extrabold text-slate-800 font-mono mt-2">
            2,840 <span className="text-lg">kg</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs text-slate-600 font-semibold">
            <span>Lead, Cadmium, and Bromine sealed</span>
          </div>
        </div>

      </div>

      {/* Visual Charts & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Monthly Diversion Chart Simulation */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-extrabold text-on-surface">
                Monthly E-Waste Lifecycle Ingestion Volume
              </h2>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Units processed across Refurbish, Component Salvage, and Smelt channels.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                Refurbished
              </span>
              <span className="flex items-center gap-1.5 text-teal-700">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                Recovered
              </span>
            </div>
          </div>

          {/* Bar Visualization */}
          <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-surface-container">
            {[
              { month: 'Jan', ref: 65, rec: 20 },
              { month: 'Feb', ref: 75, rec: 25 },
              { month: 'Mar', ref: 85, rec: 30 },
              { month: 'Apr', ref: 70, rec: 22 },
              { month: 'May', ref: 90, rec: 35 },
              { month: 'Jun', ref: 110, rec: 40 },
              { month: 'Jul', ref: 125, rec: 45 },
              { month: 'Aug', ref: 140, rec: 50 },
              { month: 'Sep', ref: 165, rec: 60 },
              { month: 'Oct', ref: 190, rec: 75 },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div className="w-full flex flex-col gap-1 items-center justify-end h-full">
                  <div 
                    className="w-full max-w-[28px] bg-primary rounded-t-lg transition-all group-hover:brightness-110 shadow-sm"
                    style={{ height: `${(d.ref / 200) * 100}%` }}
                    title={`Refurbished: ${d.ref} units`}
                  />
                  <div 
                    className="w-full max-w-[28px] bg-teal-brand/70 rounded-b-lg transition-all group-hover:brightness-110"
                    style={{ height: `${(d.rec / 200) * 100}%` }}
                    title={`Recovered: ${d.rec} units`}
                  />
                </div>
                <span className="text-[11px] font-mono text-on-surface-variant font-bold">
                  {d.month}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-on-surface-variant pt-2">
            <span>Aggregated from 14 Community Hubs & 32 Certified Repair Techs</span>
            <span className="font-bold text-primary">Data Audited & Verified</span>
          </div>
        </div>

        {/* Material Recovery Distribution */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm space-y-6">
          <h2 className="text-base font-extrabold text-on-surface">
            Precious Materials Reclamation
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between font-bold mb-1.5">
                <span className="text-amber-800">24k Gold (Au)</span>
                <span className="font-mono">1.42 kg</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold mb-1.5">
                <span className="text-orange-800">Pure Copper (Cu)</span>
                <span className="font-mono">4,820 kg</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: '92%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold mb-1.5">
                <span className="text-slate-800">Structural Aluminum</span>
                <span className="font-mono">18,200 kg</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold mb-1.5">
                <span className="text-teal-800">Neodymium Magnets (NdFeB)</span>
                <span className="font-mono">84.5 kg</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full" style={{ width: '74%' }} />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container text-xs text-on-surface-variant leading-relaxed">
            All metallurgical recovery operations adhere strictly to the <strong>Basel Convention on the Control of Transboundary Movements of Hazardous Wastes</strong>.
          </div>
        </div>

      </div>

    </div>
  );
};
