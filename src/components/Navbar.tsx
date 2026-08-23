import React, { useState, useEffect } from 'react';
import { NavTab } from '../types';
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/organizationData';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Leaf, 
  Award, 
  Radio, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F8F9F4]/95 backdrop-blur-md shadow-sm border-b border-[#E0E4D9]' 
          : 'bg-[#F8F9F4] border-b border-[#E0E4D9]'
      }`}
    >
      {/* Top Info Ribbon */}
      <div className="bg-[#3A5A40] text-[#F8F9F4] text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-[#2D4532]">
        <div className="flex items-center space-x-2 font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[#A3B18A] animate-pulse"></span>
          <span>Empowering Communities Since November 2017</span>
        </div>
        <div className="hidden sm:flex items-center space-x-6 text-xs text-[#DDE5B6]">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 bg-[#25D366]/20 text-[#DDE5B6] px-2.5 py-0.5 rounded-full border border-[#25D366]/40"
            id="top-whatsapp-link"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>
          <a 
            href={`mailto:${CONTACT_EMAIL}`} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
            id="top-email-link"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <a 
            href={`tel:${CONTACT_PHONE}`} 
            className="hover:text-white transition-colors flex items-center gap-1.5"
            id="top-phone-link"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{CONTACT_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Brand Identity (Official Logo + bold uppercase typography) */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
            aria-label="Scentwave Organization Home"
          >
            <Logo size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#1B2B1E] uppercase font-sans group-hover:text-[#3A5A40] transition-colors">
                  SCENTWAVE
                </span>
                <span className="px-2 py-0.5 bg-[#F0F2EA] text-[#3A5A40] text-[10px] font-bold rounded-full uppercase border border-[#E0E4D9]">
                  ORG
                </span>
              </div>
              <p className="text-[11px] text-[#6B705C] tracking-wider uppercase font-medium">
                Conscious Living & Social Impact
              </p>
            </div>
          </button>

          {/* Desktop Top Right Tabs: Shirish, Awards, Media, Contact Us */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            <button
              onClick={() => handleTabClick('home')}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer py-1 ${
                activeTab === 'home'
                  ? 'text-[#3A5A40] border-b-2 border-[#3A5A40]'
                  : 'text-[#4A554E] hover:text-[#3A5A40]'
              }`}
              id="nav-tab-home"
            >
              Home
            </button>

            <button
              onClick={() => handleTabClick('shirish')}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer py-1 ${
                activeTab === 'shirish'
                  ? 'text-[#3A5A40] border-b-2 border-[#3A5A40]'
                  : 'text-[#4A554E] hover:text-[#3A5A40]'
              }`}
              id="nav-tab-shirish"
            >
              <Leaf className="w-3.5 h-3.5 text-[#3A5A40]" />
              <span>Shirish</span>
            </button>

            <button
              onClick={() => handleTabClick('awards')}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer py-1 ${
                activeTab === 'awards'
                  ? 'text-[#3A5A40] border-b-2 border-[#3A5A40]'
                  : 'text-[#4A554E] hover:text-[#3A5A40]'
              }`}
              id="nav-tab-awards"
            >
              <Award className="w-3.5 h-3.5 text-[#3A5A40]" />
              <span>Awards</span>
            </button>

            <button
              onClick={() => handleTabClick('media')}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer py-1 ${
                activeTab === 'media'
                  ? 'text-[#3A5A40] border-b-2 border-[#3A5A40]'
                  : 'text-[#4A554E] hover:text-[#3A5A40]'
              }`}
              id="nav-tab-media"
            >
              <Radio className="w-3.5 h-3.5 text-[#3A5A40]" />
              <span>Media</span>
            </button>

            <button
              onClick={() => handleTabClick('contact')}
              className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all uppercase tracking-wider shadow-sm flex items-center gap-2 cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-[#2D4532] text-white ring-2 ring-[#3A5A40] ring-offset-2'
                  : 'bg-[#3A5A40] text-white hover:bg-[#2D4532]'
              }`}
              id="nav-tab-contact"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3A5A40] hover:bg-[#F0F2EA] border border-[#E0E4D9] focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-[#F8F9F4] border-t border-[#E0E4D9] px-4 pt-3 pb-6 space-y-2 shadow-xl"
          id="mobile-nav-drawer"
        >
          <div className="py-2 border-b border-[#E0E4D9] text-xs text-[#6B705C] flex items-center justify-between">
            <span className="font-semibold uppercase tracking-wider">Quick Navigation</span>
            <span className="px-2 py-0.5 bg-[#F0F2EA] text-[#3A5A40] rounded-full text-[10px] font-bold uppercase">
              Est. Nov 2017
            </span>
          </div>

          <button
            onClick={() => handleTabClick('home')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'home'
                ? 'bg-[#3A5A40] text-white'
                : 'text-[#2D332F] hover:bg-[#F0F2EA]'
            }`}
            id="mobile-nav-home"
          >
            <span>Home Overview</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>

          <button
            onClick={() => handleTabClick('shirish')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'shirish'
                ? 'bg-[#3A5A40] text-white'
                : 'text-[#2D332F] hover:bg-[#F0F2EA]'
            }`}
            id="mobile-nav-shirish"
          >
            <div className="flex items-center gap-2.5">
              <Leaf className="w-4 h-4 text-[#A3B18A]" />
              <span>Shirish</span>
            </div>
            <span className="text-[10px] bg-[#F0F2EA] text-[#3A5A40] px-2 py-0.5 rounded-full font-bold">
              Flagship
            </span>
          </button>

          <button
            onClick={() => handleTabClick('awards')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'awards'
                ? 'bg-[#3A5A40] text-white'
                : 'text-[#2D332F] hover:bg-[#F0F2EA]'
            }`}
            id="mobile-nav-awards"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#A3B18A]" />
              <span>Awards</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>

          <button
            onClick={() => handleTabClick('media')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'media'
                ? 'bg-[#3A5A40] text-white'
                : 'text-[#2D332F] hover:bg-[#F0F2EA]'
            }`}
            id="mobile-nav-media"
          >
            <div className="flex items-center gap-2.5">
              <Radio className="w-4 h-4 text-[#A3B18A]" />
              <span>Media</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>

          <button
            onClick={() => handleTabClick('contact')}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-sm mt-2 ${
              activeTab === 'contact'
                ? 'bg-[#1B2B1E] text-white'
                : 'bg-[#3A5A40] text-white'
            }`}
            id="mobile-nav-contact"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Contact Inside Mobile Drawer */}
          <div className="pt-4 mt-4 border-t border-[#E0E4D9] space-y-2 text-xs">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1B2B1E] bg-[#25D366]/15 hover:bg-[#25D366]/25 px-3 py-2 rounded-xl font-semibold border border-[#25D366]/30 transition-colors"
              id="mobile-drawer-whatsapp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +91 {WHATSAPP_NUMBER}</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 text-[#4A554E] hover:text-[#3A5A40] py-1"
              id="mobile-drawer-email"
            >
              <Mail className="w-4 h-4 text-[#3A5A40]" />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-2 text-[#4A554E] hover:text-[#3A5A40] py-1"
              id="mobile-drawer-phone"
            >
              <Phone className="w-4 h-4 text-[#3A5A40]" />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
