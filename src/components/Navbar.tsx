import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Bell, 
  CheckCircle2,
  Menu,
  X,
  LogIn,
  ArrowRight,
  User
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onQuickIntake: () => void;
  isLoggedIn: boolean;
  onSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onQuickIntake, 
  isLoggedIn, 
  onSignIn 
}) => {
  const [lang, setLang] = useState<'EN' | 'SI' | 'TA'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Internal app navigation items (shown after login) — matches Stitch dashboard
  const appNavItems = [
    { id: 'dashboard', label: 'Overview' },
    { id: 'intake', label: 'Scan & Triage' },
    { id: 'impact', label: 'Impact Intelligence' },
    { id: 'hubs', label: 'Community Network' },
  ];

  // Landing page anchor links (shown before login) — matches Stitch landing page
  const landingLinks = [
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-eclader', label: 'Why Eclader' },
    { href: '#impact', label: 'Impact' },
    { href: '#partners', label: 'For Partners' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLandingLink = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.04)] border-b border-surface-container-high/60' 
          : 'bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/40'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Left: Brand Identity + Nav (grouped like Stitch dashboard) */}
        <div className="flex items-center gap-8 min-w-0">
          {/* Brand */}
          <div 
            onClick={() => isLoggedIn ? handleNavClick('dashboard') : handleNavClick('landing')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <img 
              src="/logo.svg" 
              alt="Eclader AI Logo" 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">
                Eclader AI
              </span>
              <span className="text-[10px] font-bold text-primary tracking-wider uppercase mt-0.5 flex items-center gap-1 leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                {isLoggedIn ? 'Powered by Gemini' : 'Climate-smart e-waste'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation — conditionally rendered based on login state */}
          {isLoggedIn ? (
            /* Internal App Nav Pills — matches Stitch dashboard header exactly */
            <nav className="hidden xl:flex items-center p-1 bg-surface-container-low rounded-full border border-outline-variant/20">
              {appNavItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-primary-container text-white shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          ) : (
            /* Landing Page Links — matches Stitch landing page header exactly */
            <nav className="hidden md:flex items-center gap-8">
              {landingLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLandingLink(link.href)}
                  className="text-on-surface-variant text-sm font-semibold hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
        </div>

        {/* Right Action Group */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {isLoggedIn ? (
            /* Logged-in actions — matches Stitch dashboard */
            <>
              {/* Language Selector Pill */}
              <div className="hidden md:flex items-center p-0.5 bg-surface-container-low rounded-full border border-outline-variant/20 text-on-surface-variant">
                {(['EN', 'SI', 'TA'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                      lang === l
                        ? 'bg-white text-on-surface shadow-[0_1px_4px_rgba(0,0,0,0.04)]'
                        : 'hover:text-on-surface'
                    }`}
                  >
                    {l === 'EN' ? 'EN' : l === 'SI' ? 'සිං' : 'தம'}
                  </button>
                ))}
              </div>

              {/* Quick Scan Action Button */}
              <button
                onClick={onQuickIntake}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-xs hover:bg-primary-container transition-all shadow-[0_4px_14px_rgba(0,105,72,0.2)] hover:shadow-[0_6px_20px_rgba(0,105,72,0.3)]"
              >
                <Scan className="w-4 h-4" />
                <span className="hidden sm:inline">+ Scan Device</span>
                <span className="sm:hidden">Scan</span>
              </button>

              {/* Notifications Button */}
              <button
                onClick={() => alert("Latest: 0.082g Gold recovered from batch #4 settled successfully.")}
                aria-label="Notifications"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              {/* User Profile Chip */}
              <div 
                onClick={() => handleNavClick('dashboard')}
                className="flex items-center gap-3 pl-2 cursor-pointer p-1 rounded-full hover:bg-surface-container-low transition-colors"
                title="Ananya V. (Verified Eco Contributor)"
              >
                <img 
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UrbfprBtuADsR3vtnBKYqL-9F9s_lDl-kuZK2wF-JaeUdO8eOQn3Fv6WBllDDBswWN3tKybUc3PsyLGyuPtBj9gGCG95rlOCov_Gp4qolF6efFTuBSMpM-Ny_vhC7p3hNrPTwjx9XBp-EaRndT26diWqXsLLn_QmMPxiRaEUCvRa21qabKBBZb5FmOluZmE2d34VMxPxXQG4d7hkluhKEFYyvlLX7Tn3Ob78t1cjf3Fl-ZlG7YvorUSuTK"
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/30"
                />
                <div className="hidden 2xl:flex flex-col text-left pr-1 leading-tight">
                  <span className="text-xs font-bold text-on-surface">Ananya V.</span>
                  <span className="text-[10px] text-primary font-bold flex items-center gap-0.5 leading-none">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Verified Eco Contributor
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Pre-login actions — matches Stitch landing page: Sign In + Get Started + user icon */
            <>
              <button
                onClick={onSignIn}
                className="px-4 py-2.5 rounded-full text-xs font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200"
              >
                Sign In
              </button>
              <button
                onClick={onSignIn}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-primary text-white hover:bg-primary-container hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 shadow-[0_4px_12px_rgba(0,105,72,0.18)]"
              >
                Get Started
              </button>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-105 cursor-pointer" onClick={onSignIn}>
                <User className="w-4 h-4 text-white" />
              </div>
            </>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className={`${isLoggedIn ? 'xl:hidden' : 'md:hidden'} p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-2xl border-b border-surface-container-high px-6 py-5 space-y-3 shadow-2xl">
          {isLoggedIn ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                {appNavItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                        isActive
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-surface-container/60 text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Additional quick-access links for mobile */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {[
                  { id: 'technician', label: 'Tech Bench' },
                  { id: 'tracking', label: 'Custody Chain' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      activeTab === item.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface-container/40 text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                <span className="text-on-surface-variant font-medium">Language:</span>
                <div className="flex gap-1">
                  {(['EN', 'SI', 'TA'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 rounded-md font-bold text-xs ${
                        lang === l ? 'bg-primary text-white' : 'bg-surface-container text-on-surface'
                      }`}
                    >
                      {l === 'EN' ? 'English' : l === 'SI' ? 'සිංහල' : 'தமிழ்'}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              {landingLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLandingLink(link.href)}
                  className="p-3 rounded-xl text-sm font-semibold text-left text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-surface-container flex gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onSignIn(); }}
                  className="flex-1 py-3 rounded-xl text-xs font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onSignIn(); }}
                  className="flex-1 py-3 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary-container transition-all shadow-md"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
