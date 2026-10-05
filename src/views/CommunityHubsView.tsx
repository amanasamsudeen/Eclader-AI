import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Filter, 
  Clock, 
  Star, 
  CheckCircle2, 
  Lock, 
  Wrench, 
  Navigation, 
  QrCode,
  Sparkles,
  Layers
} from 'lucide-react';
import { COMMUNITY_HUBS, CommunityHub } from '../data/mockData';

export const CommunityHubsView: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<CommunityHub>(COMMUNITY_HUBS[0]);
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredHubs = COMMUNITY_HUBS.filter((h) => {
    const matchesType = filterType === 'all' || h.type === filterType;
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-2">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Decentralized Circular Infrastructure</span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
            Community Network & Recovery Hubs
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">
            Locate 24/7 contactless smart deposit lockers, community repair cafes, and certified e-waste processors near you.
          </p>
        </div>

        <button 
          onClick={() => alert("Reservation QR generated for locker deposit at Colombo Central!")}
          className="px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-xs shadow-md shadow-primary/20 transition-all flex items-center gap-2 self-start md:self-auto"
        >
          <QrCode className="w-4 h-4" />
          <span>Reserve 24/7 Deposit Locker</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-outline-variant/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Type Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {[
            { id: 'all', label: 'All Hubs' },
            { id: 'Certified Drop-off Locker', label: 'Smart Lockers' },
            { id: 'Repair Cafe', label: 'Repair Cafes' },
            { id: 'Industrial Recycler', label: 'Recyclers' },
            { id: 'Refurbish Center', label: 'Refurbish Labs' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterType(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                filterType === item.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by neighborhood, postal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-surface-container rounded-full text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

      </div>

      {/* Main Grid: Hubs Directory + Interactive Map View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Hubs Cards List */}
        <div className="lg:col-span-5 space-y-4">
          {filteredHubs.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className={`p-5 rounded-3xl border cursor-pointer transition-all ${
                  isSelected 
                    ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                    : 'border-outline-variant/30 hover:border-primary/40 bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-surface-container text-primary uppercase">
                      {hub.type}
                    </span>
                    <h3 className="font-extrabold text-base text-on-surface mt-1">
                      {hub.name}
                    </h3>
                  </div>
                  <span className="text-xs font-extrabold text-primary font-mono whitespace-nowrap">
                    {hub.distanceKm} km away
                  </span>
                </div>

                <p className="text-xs text-on-surface-variant mt-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-on-surface-variant flex-shrink-0" />
                  <span className="truncate">{hub.address}</span>
                </p>

                <div className="flex items-center gap-4 mt-3 text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {hub.hours}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-amber-500 font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {hub.rating} ({hub.reviewsCount})
                  </span>
                </div>

                {/* Capacity Level */}
                <div className="mt-3 pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                  <span className="text-[11px] text-on-surface-variant">Locker Capacity</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          hub.capacityPercentage > 80 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${hub.capacityPercentage}%` }}
                      />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-on-surface">
                      {hub.capacityPercentage}%
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Map View / Hub Details Panel */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Map Mockup Area */}
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 border border-outline-variant/40 shadow-lg flex items-center justify-center p-6 text-white">
            {/* Visual stylized map background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #34d399 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Simulated Map Markers */}
            <div className="absolute inset-0 pointer-events-none">
              {COMMUNITY_HUBS.map((hub, idx) => {
                const positions = [
                  { top: '35%', left: '42%' },
                  { top: '55%', left: '60%' },
                  { top: '25%', left: '75%' },
                  { top: '70%', left: '38%' },
                ];
                const pos = positions[idx % positions.length];
                const isSelected = selectedHub.id === hub.id;

                return (
                  <div 
                    key={hub.id}
                    className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
                    style={{ top: pos.top, left: pos.left }}
                    onClick={() => setSelectedHub(hub)}
                  >
                    <div className={`p-2 rounded-full shadow-xl flex items-center gap-1.5 ${
                      isSelected ? 'bg-emerald-500 text-white ring-4 ring-emerald-400/40' : 'bg-slate-800 text-emerald-400 border border-slate-700'
                    }`}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-[10px] font-bold font-mono pr-1">{hub.name.split(' ')[0]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-emerald-400">
              LIVE SATELLITE & IOT SENSORS CONNECTED
            </div>
          </div>

          {/* Selected Hub Inspector Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-outline-variant/40 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-primary font-bold uppercase">{selectedHub.type}</span>
                <h3 className="text-xl font-extrabold text-on-surface">{selectedHub.name}</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">{selectedHub.address}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => alert(`Starting GPS turn-by-turn navigation to ${selectedHub.name}`)}
                  className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-bold text-on-surface flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-primary" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => alert(`Locker Bay reserved for 2 hours at ${selectedHub.name}! Pin: 8812`)}
                  className="px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-xs font-bold text-white shadow-md transition-colors"
                >
                  Reserve Bay
                </button>
              </div>
            </div>

            {/* Accepted hardware tags */}
            <div className="pt-3 border-t border-surface-container">
              <span className="text-xs font-bold text-on-surface-variant block mb-2">Accepted Electronic Equipment:</span>
              <div className="flex flex-wrap gap-2">
                {selectedHub.acceptedItems.map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-surface-container text-on-surface text-xs font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
