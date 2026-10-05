import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FloatingEcoAssistant } from './components/FloatingEcoAssistant';
import { LandingView } from './views/LandingView';
import { DashboardView } from './views/DashboardView';
import { ScanIntakeView } from './views/ScanIntakeView';
import { AnalysisView } from './views/AnalysisView';
import { DiagnosticQuestionsView } from './views/DiagnosticQuestionsView';
import { AssessmentResultView } from './views/AssessmentResultView';
import { TechnicianMatchAndQuoteView } from './views/TechnicianMatchAndQuoteView';
import { TechnicianBenchView } from './views/TechnicianBenchView';
import { ChainOfCustodyView } from './views/ChainOfCustodyView';
import { ImpactCertificateView } from './views/ImpactCertificateView';
import { CommunityHubsView } from './views/CommunityHubsView';
import { ImpactIntelligenceView } from './views/ImpactIntelligenceView';
import { Device, SAMPLE_DEVICES } from './data/mockData';
import { Mail } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device>(SAMPLE_DEVICES[0]);
  
  const [intakeSession, setIntakeSession] = useState<{
    image: string;
    deviceName: string;
    category: string;
    userIntent: string;
    notes: string;
  }>({
    image: SAMPLE_DEVICES[0].image,
    deviceName: 'Dell Inspiron 15 (2021 Model)',
    category: 'laptop',
    userIntent: 'repair',
    notes: 'Chassis scratches, loose DC jack, powers intermittently.',
  });

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setActiveTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartAnalysis = (data: typeof intakeSession) => {
    setIntakeSession(data);
    setActiveTab('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalysisComplete = () => {
    setActiveTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionsComplete = () => {
    const newDev: Device = {
      ...SAMPLE_DEVICES[0],
      name: intakeSession.deviceName || 'Dell Inspiron 15 5000 Series',
      image: intakeSession.image,
      condition: intakeSession.notes || 'DC barrel wobbly, no lithium swelling, display 100% operational',
    };
    setSelectedDevice(newDev);
    setActiveTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDeviceFromList = (device: Device) => {
    setSelectedDevice(device);
    setActiveTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation handler that ensures login for internal pages
  const handleNavigate = (tab: string) => {
    if (tab !== 'landing' && !isLoggedIn) {
      setIsLoggedIn(true);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-on-surface antialiased relative">
      
      {/* Persistent Global Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavigate} 
        isLoggedIn={isLoggedIn}
        onSignIn={handleSignIn}
        onQuickIntake={() => {
          if (!isLoggedIn) setIsLoggedIn(true);
          setActiveTab('intake');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {/* Landing page is public — shown before login */}
        {activeTab === 'landing' && !isLoggedIn && (
          <LandingView 
            onStartScan={() => {
              setIsLoggedIn(true);
              setActiveTab('intake');
            }}
            onExploreDashboard={() => {
              setIsLoggedIn(true);
              setActiveTab('dashboard');
            }}
            onSelectDevice={(device) => {
              setIsLoggedIn(true);
              handleSelectDeviceFromList(device);
            }}
            onNavigate={(t) => {
              setIsLoggedIn(true);
              setActiveTab(t);
            }}
          />
        )}

        {/* All internal views — only accessible when logged in */}
        {isLoggedIn && (
          <>
            {activeTab === 'dashboard' && (
              <DashboardView 
                onSelectDevice={handleSelectDeviceFromList}
                onNewScan={() => setActiveTab('intake')}
                onNavigate={(t) => setActiveTab(t)}
              />
            )}

            {activeTab === 'intake' && (
              <ScanIntakeView onStartAnalysis={handleStartAnalysis} />
            )}

            {activeTab === 'analysis' && (
              <AnalysisView 
                intakeData={intakeSession} 
                onComplete={handleAnalysisComplete} 
              />
            )}

            {activeTab === 'questions' && (
              <DiagnosticQuestionsView onComplete={handleQuestionsComplete} />
            )}

            {activeTab === 'assessment' && (
              <AssessmentResultView 
                device={selectedDevice}
                onProceedToTechnician={() => setActiveTab('technicianMatch')}
                onViewCustody={() => setActiveTab('tracking')}
                onFindHub={() => setActiveTab('hubs')}
                onNavigate={(t) => setActiveTab(t)}
              />
            )}

            {activeTab === 'technicianMatch' && (
              <TechnicianMatchAndQuoteView 
                onQuoteApproved={() => setActiveTab('tracking')}
                onOpenBench={() => setActiveTab('technician')}
              />
            )}

            {activeTab === 'technician' && (
              <TechnicianBenchView 
                onCompleteRepair={() => setActiveTab('certificate')}
                onNavigate={(t) => setActiveTab(t)}
              />
            )}

            {activeTab === 'tracking' && (
              <ChainOfCustodyView onIssueCertificate={() => setActiveTab('certificate')} />
            )}

            {activeTab === 'certificate' && (
              <ImpactCertificateView 
                onReturnHome={() => setActiveTab('dashboard')}
                onExploreHubs={() => setActiveTab('hubs')}
              />
            )}

            {activeTab === 'hubs' && (
              <CommunityHubsView />
            )}

            {activeTab === 'impact' && (
              <ImpactIntelligenceView />
            )}
          </>
        )}
      </main>

      {/* Floating Eco Assistant AI on every screen */}
      <FloatingEcoAssistant onNavigate={(t) => handleNavigate(t)} />

      {/* Rich Footer */}
      <footer className="w-full bg-white border-t border-surface-container-high/80 pt-16 pb-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-surface-container">
            
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <img src="/logo.svg" alt="Eclader AI" className="w-8 h-8 object-contain" />
                <span className="font-extrabold text-lg text-on-surface">Eclader AI</span>
              </div>
              <p className="text-xs text-on-surface-variant max-w-sm leading-relaxed">
                Multimodal climate intelligence transforming electronic waste disposal into a regenerative circular cycle. Connecting consumers, certified micro-technicians, and metallurgical recyclers.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-primary font-bold">
                <span>R2v3 Certified</span>
                <span>•</span>
                <span>ISO 14001</span>
                <span>•</span>
                <span>Basel Convention Aligned</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
                Circular Platform
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant">
                <li><button onClick={() => { setIsLoggedIn(false); setActiveTab('landing'); }} className="hover:text-primary">Overview & Vision</button></li>
                <li><button onClick={() => handleNavigate('intake')} className="hover:text-primary">AI Device Scanner</button></li>
                <li><button onClick={() => handleNavigate('dashboard')} className="hover:text-primary">Operations Dashboard</button></li>
                <li><button onClick={() => handleNavigate('technician')} className="hover:text-primary">Technician Workbench</button></li>
                <li><button onClick={() => handleNavigate('tracking')} className="hover:text-primary">Chain-of-Custody</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
                Decentralized Network
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant">
                <li><button onClick={() => handleNavigate('hubs')} className="hover:text-primary">24/7 Smart Lockers</button></li>
                <li><button onClick={() => handleNavigate('hubs')} className="hover:text-primary">Community Repair Cafes</button></li>
                <li><button onClick={() => handleNavigate('impact')} className="hover:text-primary">ESG Compliance Audit</button></li>
                <li><button onClick={() => handleNavigate('certificate')} className="hover:text-primary">Verifiable Certificates</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
                Community & Contact
              </h4>
              <p className="text-xs text-on-surface-variant mb-2">
                Have questions about municipal e-waste drives or school donations?
              </p>
              <a 
                href="mailto:support@eclader.ai" 
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>support@eclader.ai</span>
              </a>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
            <p>© 2026 Eclader AI Platform. All rights reserved. Zero-landfill guaranteed.</p>
            <div className="flex gap-6">
              <span className="hover:text-primary cursor-pointer">Privacy & Data Sanitization</span>
              <span className="hover:text-primary cursor-pointer">Terms of Circular Service</span>
              <span className="hover:text-primary cursor-pointer">Security Ledger</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
