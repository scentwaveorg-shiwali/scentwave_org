import React from 'react';
import { 
  Eye, 
  Target, 
  Link2, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Cpu,
  CheckCircle2
} from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  const missionPoints = [
    {
      text: 'To create a continuous chain of awareness in society',
      icon: Link2,
      detail: 'Building grassroots networks where each enlightened individual inspires five others.'
    },
    {
      text: 'To promote dignity, self-reliance, and equality',
      icon: HeartHandshake,
      detail: 'Ensuring every community member, regardless of background, enjoys respected agency.'
    },
    {
      text: 'To make health, environment, and digital safety accessible to all',
      icon: ShieldCheck,
      detail: 'Democratizing essential preventive care, clean living, and cyber literacy.'
    },
    {
      text: 'To empower women through training, knowledge, and opportunities',
      icon: Sparkles,
      detail: 'Delivering vocational mastery, leadership training, and livelihood ecosystems.'
    },
    {
      text: 'To integrate modern technology for public welfare',
      icon: Cpu,
      detail: 'Harnessing digital media, mobile tools, and communications for social good.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="vision-mission-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Strategic Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Vision & Purpose
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Our Vision Bento Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#A3B18A]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-[#DDE5B6] shadow-sm">
                <Eye className="w-6 h-6" />
              </div>

              {/* Exact Required Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-4">
                Our Vision
              </h3>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light mb-6">
                To build an awakened, equitable, and conscious society where every individual understands their responsibility towards the environment, community health, and social equity — leaving a greener, more compassionate planet for future generations.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3 text-xs text-[#DDE5B6] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#DDE5B6]" />
                  <span>Conscious Citizenship Across All Ages</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#DDE5B6] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#DDE5B6]" />
                  <span>Ecological Balance & Planetary Resilience</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#DDE5B6] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#DDE5B6]" />
                  <span>Inclusive Empowerment for Women and Youth</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15 text-xs text-[#DDE5B6] font-semibold uppercase tracking-wider">
              Target Horizon: 2030 & Beyond
            </div>
          </div>

          {/* Right: Our Mission Bento Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-1">
                    <Target className="w-4 h-4" />
                    <span>Core Mandate</span>
                  </div>
                  {/* Exact Required Heading */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1B2B1E] font-serif">
                    Our Mission
                  </h3>
                </div>
                <span className="px-3 py-1 bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] rounded-full text-xs font-bold uppercase">
                  5 Commitments
                </span>
              </div>

              {/* Exact Required 5 Bullet Points in Bento Style */}
              <div className="space-y-3.5">
                {missionPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#F8F9F4] border border-[#E0E4D9]/80 flex items-start gap-3.5 hover:bg-[#F0F2EA]/60 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#3A5A40] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#1B2B1E] leading-snug">
                          {item.text}
                        </h4>
                        <p className="text-xs text-[#6B705C] mt-1 leading-relaxed font-light">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E0E4D9] flex items-center justify-between text-xs text-[#6B705C]">
              <span>Active in Urban & Rural Grassroots</span>
              <span className="font-semibold text-[#3A5A40]">Continuous Transformation</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
