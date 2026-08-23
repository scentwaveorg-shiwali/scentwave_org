import React from 'react';
import { NavTab } from '../types';
import { CONTACT_EMAIL, CONTACT_PHONE, COPYRIGHT_TEXT, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/organizationData';
import { Logo } from './Logo';
import { 
  Leaf, 
  Mail, 
  Phone, 
  ArrowUp, 
  Award, 
  Radio, 
  ShieldCheck,
  MessageCircle
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(tab);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1B2B1E] text-[#DDE5B6] border-t border-[#2D4532]" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Bento Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" variant="dark" />
              <div>
                <span className="font-sans text-xl font-bold tracking-tight text-white uppercase">
                  SCENTWAVE ORGANIZATION
                </span>
                <p className="text-[11px] text-[#A3B18A] tracking-wider uppercase font-semibold">
                  Empowering Communities Since November 2017
                </p>
              </div>
            </div>

            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Founded on the belief that awareness is the foundation of every meaningful social transformation. Rooted in sensitivity, service, empowerment, and responsibility.
            </p>

            <div className="pt-2 text-xs text-[#A3B18A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A3B18A] animate-pulse"></span>
              <span>Founder: Shiwali Gupta • Jaipur & Nationwide Outreach</span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('shirish')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <Leaf className="w-3 h-3 text-[#A3B18A]" />
                  <span>Project Shirish</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('awards')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <Award className="w-3 h-3 text-[#A3B18A]" />
                  <span>Awards & Honors</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('media')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <Radio className="w-3 h-3 text-[#A3B18A]" />
                  <span>Media & Broadcasts</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-[#A3B18A]" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* 4 Pillars (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Focus Areas
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>Health & Well-being</li>
              <li>Project Shirish (Ecology)</li>
              <li>Digital Literacy</li>
              <li>Women Empowerment</li>
              <li>Circular Living</li>
            </ul>
          </div>

          {/* Direct Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact Channels
            </h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-medium hover:text-white transition-colors p-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40"
                id="footer-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>

              <a 
                href={`mailto:${CONTACT_EMAIL}`} 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors p-2 rounded-xl bg-white/5 border border-white/10"
              >
                <Mail className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <span className="truncate">{CONTACT_EMAIL}</span>
              </a>

              <a 
                href={`tel:${CONTACT_PHONE}`} 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors p-2 rounded-xl bg-white/5 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#A3B18A] shrink-0" />
                <span>{CONTACT_PHONE}</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-[#A3B18A] hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Exact Required Copyright Text */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            <p className="font-medium text-white/90">
              {COPYRIGHT_TEXT}
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <span>Sensitivity</span>
            <span>•</span>
            <span>Service</span>
            <span>•</span>
            <span>Empowerment</span>
            <span>•</span>
            <span>Responsibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
