import React from 'react';
import { NavTab } from '../types';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/organizationData';
import { ShirishLogo } from './ShirishLogo';
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  HeartPulse, 
  Trees, 
  ShieldCheck, 
  Award,
  Globe2,
  Leaf,
  MessageCircle
} from 'lucide-react';

interface HeroSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActiveTab }) => {
  return (
    <section className="py-8 sm:py-12 bg-[#F8F9F4] text-[#2D332F]" id="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Big Bento Box: Hero & Mission Narrative (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between">
            <div>
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-6">
                <Calendar className="w-3.5 h-3.5 text-[#3A5A40]" />
                <span>Founded November 2017 • Conscious Movement</span>
              </div>

              {/* Exact Required Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-[#1B2B1E] font-serif leading-tight mb-6">
                Driving Sustainable Change for a Better Tomorrow
              </h1>

              {/* Exact Required Paragraph Text */}
              <div className="text-[#4A554E] text-base sm:text-lg leading-relaxed font-normal bg-[#F8F9F4]/70 p-6 sm:p-7 rounded-2xl border border-[#E0E4D9]/80 mb-8">
                <p className="mb-0">
                  Scentwave Organization was founded in November 2017 with a simple yet powerful belief that awareness is the foundation of every meaningful social transformation. What began as a vision to create a platform rooted in sensitivity, service, empowerment, and responsibility has grown into a collective movement for positive change. With its origins shaped through impactful communication and outreach, Scentwave has evolved into a symbol of conscious living, working across areas such as health, environmental awareness, digital literacy, and women empowerment. Each initiative and effort reflects a deeper purpose of inspiring individuals to not just gain knowledge, but to act with responsibility. Scentwave continues to encourage communities to embrace awareness as a way of life and invites everyone to be a part of this journey towards a more informed, responsible, and awakened society.
                </p>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3A5A40] hover:bg-[#2D4532] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                id="hero-join-mission-btn"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp ({WHATSAPP_NUMBER})</span>
              </a>

              <button
                onClick={() => setActiveTab('shirish')}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#F0F2EA] hover:bg-[#E2E8DA] text-[#3A5A40] font-semibold text-xs sm:text-sm uppercase tracking-wider border border-[#E0E4D9] transition-all cursor-pointer"
                id="hero-explore-shirish-btn"
              >
                <ShirishLogo size="xs" />
                <span>Project Shirish</span>
              </button>
            </div>
          </div>

          {/* Secondary Bento Box: Deep Green Feature Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            {/* Background gentle blur accent */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#A3B18A]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase tracking-widest font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15 text-[#DDE5B6]">
                  Framework
                </span>
                <Sparkles className="w-5 h-5 text-[#DDE5B6]" />
              </div>

              <h2 className="text-2xl font-bold font-serif tracking-tight text-white mb-2">
                Conscious Living in Action
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                Bridging individual mindset shifts with community-driven environmental resilience and social empowerment.
              </p>

              {/* 4 Pillars Mini Bento List */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs">
                  <HeartPulse className="w-4 h-4 text-[#DDE5B6] shrink-0" />
                  <span className="text-xs font-semibold text-white">Health & Well-being</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs">
                  <Trees className="w-4 h-4 text-[#DDE5B6] shrink-0" />
                  <span className="text-xs font-semibold text-white">Environmental Stewardship</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs">
                  <ShieldCheck className="w-4 h-4 text-[#DDE5B6] shrink-0" />
                  <span className="text-xs font-semibold text-white">Digital Literacy & Safety</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xs">
                  <Sparkles className="w-4 h-4 text-[#DDE5B6] shrink-0" />
                  <span className="text-xs font-semibold text-white">Women Empowerment</span>
                </div>
              </div>
            </div>

            {/* Bottom Quick Metric */}
            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#DDE5B6]">
              <span>Grassroots Reach</span>
              <span className="font-bold text-white uppercase tracking-wider">Since Nov 2017</span>
            </div>
          </div>

        </div>

        {/* Bento Stat Strip (4 Columns) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-[#E0E4D9] rounded-2xl p-4 sm:p-5 hover:border-[#C5CDBC] transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#3A5A40] font-serif">2017</div>
            <div className="text-xs text-[#6B705C] font-semibold uppercase tracking-wider mt-1">
              Founded in November
            </div>
          </div>

          <div className="bg-white border border-[#E0E4D9] rounded-2xl p-4 sm:p-5 hover:border-[#C5CDBC] transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#3A5A40] font-serif">4 Pillars</div>
            <div className="text-xs text-[#6B705C] font-semibold uppercase tracking-wider mt-1">
              Health, Eco, Digital, Women
            </div>
          </div>

          <div className="bg-white border border-[#E0E4D9] rounded-2xl p-4 sm:p-5 hover:border-[#C5CDBC] transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#3A5A40] font-serif">100%</div>
            <div className="text-xs text-[#6B705C] font-semibold uppercase tracking-wider mt-1">
              Grassroots Outreach
            </div>
          </div>

          <div className="bg-white border border-[#E0E4D9] rounded-2xl p-4 sm:p-5 hover:border-[#C5CDBC] transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#3A5A40] font-serif">Shirish</div>
            <div className="text-xs text-[#6B705C] font-semibold uppercase tracking-wider mt-1">
              Flagship Green Drive
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
