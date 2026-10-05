import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  Cpu, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface AnalysisViewProps {
  intakeData: {
    image: string;
    deviceName: string;
    category: string;
    userIntent: string;
    notes: string;
  };
  onComplete: () => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ intakeData, onComplete }) => {
  const [progress, setProgress] = useState<number>(15);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    {
      title: 'Multimodal Vision Segmentation',
      desc: 'Identifying chassis dimensions, port layouts, and OEM manufacturer tolerances...',
      doneText: 'Detected: Dell Inspiron 15 (Chassis intact, 98.4% certainty)',
    },
    {
      title: 'Micro-Defect & Surface Stress Scan',
      desc: 'Analyzing display bezel, hinge friction stress, and DC barrel oxidation...',
      doneText: 'Found: DC input barrel loose; Bezel and digitizer 100% functional',
    },
    {
      title: 'Thermal & Lithium Degradation Analysis',
      desc: 'Inspecting keyboard curvature and bottom casing for battery cell swelling...',
      doneText: 'Passed: Zero battery bloating detected. Safe for standard handling',
    },
    {
      title: 'Circular Yield & Material Assay',
      desc: 'Calculating recoverable gold pins, copper heat pipes, and carbon offset...',
      doneText: 'Yield: 0.045g Gold, 210g Copper. 52.4 kg CO₂e avoided if refurbished',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + 5;
        if (next > 25 && next <= 50) setCurrentStep(1);
        else if (next > 50 && next <= 75) setCurrentStep(2);
        else if (next > 75) setCurrentStep(3);
        return next;
      });
    }, 280);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono mb-2">
          <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
          <span>Multimodal Inference Engine Running</span>
        </div>
        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
          AI Diagnostic in Progress
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
          Evaluating structural integrity, component salvagability, and circular routing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Device Image with Active Laser Scanner */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-950 border-2 border-primary/40 shadow-2xl p-2 group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src={intakeData.image}
                alt="Scanning Target"
                className="w-full h-full object-cover opacity-85"
              />

              {/* Laser Scanning Line */}
              <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_#10b981] animate-scanline z-20" />

              {/* Grid overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20" 
                style={{
                  backgroundImage: 'radial-gradient(circle, #34d399 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              {/* Target HUD Bounding Box */}
              <div className="absolute inset-6 border border-emerald-400/60 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                <div className="flex justify-between items-center text-[10px] font-mono text-emerald-300 font-bold bg-black/60 px-2 py-1 rounded">
                  <span>TARGET: {intakeData.deviceName || 'HARDWARE'}</span>
                  <span>PROGRESS: {progress}%</span>
                </div>

                <div className="flex justify-between items-end text-[10px] font-mono text-emerald-300 bg-black/60 px-2 py-1 rounded">
                  <span>SPECTRAL: PASSED</span>
                  <span>LATENCY: 42ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step Progress Checklist */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Progress Bar */}
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/40 shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-on-surface mb-2">
              <span>Diagnostic Completion</span>
              <span className="font-mono text-primary font-extrabold">{progress}%</span>
            </div>
            <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden p-0.5">
              <div 
                className="h-full bg-gradient-to-r from-primary to-teal-brand rounded-full transition-all duration-300 shadow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Stepper Checklist */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/40 shadow-sm space-y-4">
            {steps.map((step, idx) => {
              const isDone = currentStep > idx || progress === 100;
              const isCurrent = currentStep === idx && progress < 100;

              return (
                <div key={idx} className="flex items-start gap-3.5 pb-3 border-b border-surface-container last:border-0 last:pb-0">
                  <div className="mt-0.5 flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-outline-variant/50 flex items-center justify-center text-[10px] font-bold text-on-surface-variant font-mono">
                        {idx + 1}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold ${isDone ? 'text-emerald-900' : isCurrent ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {step.title}
                    </p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                      {isDone ? step.doneText : step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action when ready */}
          <div className="pt-2">
            {progress === 100 ? (
              <button
                onClick={onComplete}
                className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 animate-bounce"
              >
                <span>Continue to Smart Questionnaire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-center py-2 text-xs font-mono text-on-surface-variant">
                Synthesizing diagnostic report with Gemini vision models...
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
