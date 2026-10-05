import React, { useState, useRef } from 'react';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Image as ImageIcon,
  Zap
} from 'lucide-react';
import { SAMPLE_DEVICES } from '../data/mockData';

interface ScanIntakeViewProps {
  onStartAnalysis: (data: {
    image: string;
    deviceName: string;
    category: string;
    userIntent: string;
    notes: string;
  }) => void;
}

export const ScanIntakeView: React.FC<ScanIntakeViewProps> = ({ onStartAnalysis }) => {
  const [selectedImage, setSelectedImage] = useState<string>(SAMPLE_DEVICES[0].image);
  const [deviceName, setDeviceName] = useState<string>('Dell Inspiron 15 (2021 Model)');
  const [category, setCategory] = useState<string>('laptop');
  const [userIntent, setUserIntent] = useState<string>('repair');
  const [notes, setNotes] = useState<string>('Chassis has minor scratches, DC power plug feels wobbly, screen seems intact.');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const samplePresets = [
    {
      name: 'Dell Inspiron 15 Laptop',
      category: 'laptop',
      image: SAMPLE_DEVICES[0].image,
      notes: 'Chassis scratches, loose DC jack, powers intermittently.',
      intent: 'repair',
    },
    {
      name: 'Samsung Galaxy S21 5G',
      category: 'smartphone',
      image: SAMPLE_DEVICES[1].image,
      notes: 'Hairline front glass crack, digitizer responsive, battery drains quickly.',
      intent: 'repair',
    },
    {
      name: 'Canon PIXMA Inkjet Printer',
      category: 'printer',
      image: SAMPLE_DEVICES[2].image,
      notes: 'Dried ink head, paper feeder works, clean physical condition.',
      intent: 'reuse',
    },
    {
      name: 'RAM & Motherboard Core',
      category: 'components',
      image: SAMPLE_DEVICES[3].image,
      notes: 'Obsolete server DDR4 RAM and motherboard, gold edge connectors.',
      intent: 'recover',
    },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedImage(event.target.result as string);
          setDeviceName(file.name.replace(/\.[^/.]+$/, ""));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (preset: typeof samplePresets[0]) => {
    setSelectedImage(preset.image);
    setDeviceName(preset.name);
    setCategory(preset.category);
    setNotes(preset.notes);
    setUserIntent(preset.intent);
    setIsCameraActive(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartAnalysis({
      image: selectedImage,
      deviceName,
      category,
      userIntent,
      notes,
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Multimodal Computer Vision Intake</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
          Add Device for AI Assessment
        </h1>
        <p className="text-sm text-on-surface-variant mt-2">
          Upload a clear photo or snap with your camera. Our AI model will detect the form factor, identify physical defects, and assess circular viability.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Step 1: Image Capture / Upload Area */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-mono font-bold flex items-center justify-center">1</span>
              <span>Hardware Photograph</span>
            </h2>
            <span className="text-xs text-on-surface-variant">JPG, PNG, WebP up to 25MB</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Main Preview Box */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border-2 border-dashed border-outline-variant/60 flex items-center justify-center group">
                {selectedImage ? (
                  <>
                    <img 
                      src={selectedImage} 
                      alt="Device Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 rounded-full bg-white text-on-surface text-xs font-bold shadow-lg hover:bg-surface-container transition-all flex items-center gap-1.5"
                      >
                        <Upload className="w-4 h-4 text-primary" />
                        <span>Change Photo</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-6 text-slate-400">
                    <Camera className="w-12 h-12 mx-auto mb-2 text-slate-500" />
                    <p className="text-xs font-bold text-slate-300">No photo selected</p>
                    <p className="text-[11px] mt-1">Upload a photo or select a test preset below</p>
                  </div>
                )}

                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              {/* Upload & Camera Buttons */}
              <div className="flex gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-outline-variant/50 bg-surface-container text-xs font-bold text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4 text-primary" />
                  <span>Upload File</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsCameraActive(true);
                    alert("Camera simulation active: Using high-resolution workbench feed.");
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-outline-variant/50 bg-surface-container text-xs font-bold text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2"
                >
                  <Camera className="w-4 h-4 text-teal-600" />
                  <span>Live Webcam</span>
                </button>
              </div>
            </div>

            {/* Quick Sample Presets */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Or select a test device:
              </span>

              <div className="space-y-2">
                {samplePresets.map((preset, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectPreset(preset)}
                    className={`flex items-center gap-3 p-2.5 rounded-2xl border cursor-pointer transition-all ${
                      selectedImage === preset.image 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'border-outline-variant/30 hover:border-primary/40 bg-surface-container-lowest'
                    }`}
                  >
                    <img 
                      src={preset.image} 
                      alt={preset.name} 
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-on-surface truncate">{preset.name}</p>
                      <p className="text-[11px] text-on-surface-variant truncate">{preset.notes}</p>
                    </div>
                    {selectedImage === preset.image && (
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mr-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Step 2: Device Details & User Intent */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-on-surface flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-mono font-bold flex items-center justify-center">2</span>
              <span>Intake Context & Objective</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Device Name / Model Guess */}
            <div>
              <label className="block text-xs font-bold text-on-surface mb-2">
                Device Name or Model (Optional)
              </label>
              <input
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                placeholder="e.g. Dell Inspiron 15, iPhone 11, etc."
                className="w-full px-4 py-2.5 bg-surface-container rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 border border-outline-variant/20 font-medium"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-on-surface mb-2">
                Hardware Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-surface-container rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 border border-outline-variant/20 font-bold"
              >
                <option value="laptop">Laptop / Notebook</option>
                <option value="smartphone">Smartphone / Cellular</option>
                <option value="tablet">Tablet / E-Reader</option>
                <option value="printer">Printer / Scanner</option>
                <option value="components">PC Components / Motherboard / RAM</option>
              </select>
            </div>

          </div>

          {/* User Intent Pills */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-2">
              What is your primary goal for this device?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'repair', label: 'Fix & Keep', desc: 'Find technician & restore' },
                { id: 'reuse', label: 'Trade-In / Sell', desc: 'Recover cash or credit' },
                { id: 'donate', label: 'Donate to School', desc: 'Tax receipt & social impact' },
                { id: 'recycle', label: 'Safe Disposal', desc: 'Zero-landfill smelting' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUserIntent(item.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    userIntent === item.id
                      ? 'border-primary bg-primary/10 shadow-sm'
                      : 'border-outline-variant/30 hover:border-primary/30 bg-surface-container-lowest'
                  }`}
                >
                  <p className="text-xs font-bold text-on-surface">{item.label}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Known Defects Notes */}
          <div>
            <label className="block text-xs font-bold text-on-surface mb-2">
              Known Issues or Observations
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Battery drains in 10 minutes, screen flickers when opened halfway, missing charger..."
              className="w-full px-4 py-2.5 bg-surface-container rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 border border-outline-variant/20 font-medium"
            />
          </div>

        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold text-sm bg-primary text-white shadow-xl shadow-primary/25 hover:bg-primary-container transition-all hover:scale-[1.02] active:scale-100"
          >
            <Sparkles className="w-5 h-5 text-primary-fixed" />
            <span>Initiate Multimodal AI Scan</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </form>

    </div>
  );
};
