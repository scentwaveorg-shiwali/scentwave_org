import React from 'react';
import { CORE_PILLARS } from '../data/organizationData';
import { ShirishLogo } from './ShirishLogo';
import { 
  HeartPulse, 
  Trees, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { NavTab } from '../types';

interface PillarsSectionProps {
  setActiveTab: (tab: NavTab) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ setActiveTab }) => {
  const iconMap: Record<string, React.ElementType> = {
    HeartPulse,
    Trees,
    ShieldCheck,
    Sparkles
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="pillars-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Key Focus Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Four Pillars of Conscious Living
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#4A554E] font-light max-w-3xl leading-relaxed">
            Scentwave addresses the interdependent layers of human and planetary flourishing through comprehensive community-rooted initiatives.
          </p>
        </div>

        {/* Bento Grid: 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            const isEnvironment = pillar.id === 'environment';

            return (
              <div 
                key={pillar.id}
                className={`bg-white border ${isEnvironment ? 'border-[#3A5A40]/40' : 'border-[#E0E4D9]'} rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {isEnvironment ? (
                      <ShirishLogo size="md" />
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    {isEnvironment && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9]">
                        Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#1B2B1E] font-serif">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#3A5A40] mt-1">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A554E] mt-3 leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  {/* Stats badge */}
                  <div className="mt-4 p-3 rounded-2xl bg-[#F8F9F4] border border-[#E0E4D9] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3A5A40] shrink-0" />
                    <span className="text-xs font-bold text-[#1B2B1E]">{pillar.stats}</span>
                  </div>
                </div>

                {isEnvironment && (
                  <div className="mt-6 pt-4 border-t border-[#E0E4D9]">
                    <button
                      onClick={() => setActiveTab('shirish')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3A5A40] hover:text-[#1B2B1E] transition-colors cursor-pointer"
                    >
                      <span>Explore Project Shirish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
