import React, { useState } from 'react';
import { SHIRISH_CAMPAIGNS } from '../data/organizationData';
import { ShirishLogo } from './ShirishLogo';
import { 
  Leaf, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Check
} from 'lucide-react';

export const ShirishSection: React.FC = () => {
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [pledgeType, setPledgeType] = useState('plant');

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSubmitted(true);
    setTimeout(() => {
      setPledgeSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="shirish">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header with Official Shirish Logo */}
        <div className="bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
                <Leaf className="w-3.5 h-3.5 text-[#3A5A40]" />
                <span>Flagship Environmental Initiative</span>
              </div>
              
              <div className="flex items-center gap-4 mt-1">
                <ShirishLogo size="lg" className="hidden sm:flex" />
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
                    Project Shirish
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-[#3A5A40] uppercase tracking-wider mt-1">
                    Albizia lebbeck • Resilience • Canopy • Community Restoration
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#4A554E] font-light max-w-3xl leading-relaxed">
                Named after the resilient Shirish tree (<span className="italic font-serif">Albizia lebbeck</span>), which flourishes under intense desert heat while offering soothing shade, fragrant blossoms, nitrogen soil enrichment, and environmental resilience. Project Shirish is Scentwave’s signature environmental movement.
              </p>
            </div>

            {/* Visual Shirish Emblem Card */}
            <div className="sm:hidden flex items-center gap-3 p-3 rounded-2xl bg-[#F0F2EA] border border-[#E0E4D9]">
              <ShirishLogo size="md" />
              <div>
                <span className="text-xs font-bold text-[#1B2B1E] block">Official Initiative</span>
                <span className="text-[11px] text-[#3A5A40] font-medium">Project Shirish</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid: 3 Main Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHIRISH_CAMPAIGNS.map((campaign) => (
            <div 
              key={campaign.id} 
              className="bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9]">
                    {campaign.category}
                  </span>
                  <ShirishLogo size="xs" />
                </div>

                <h3 className="text-xl font-bold text-[#1B2B1E] font-serif mt-2">
                  {campaign.title}
                </h3>

                <p className="text-xs font-bold text-[#3A5A40] uppercase tracking-wider mt-1">
                  {campaign.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#4A554E] mt-3 leading-relaxed font-light">
                  {campaign.description}
                </p>

                {/* Impact Metric Pill */}
                <div className="mt-4 p-3 rounded-2xl bg-[#F0F2EA] border border-[#E0E4D9] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3A5A40] shrink-0" />
                  <span className="text-xs font-bold text-[#1B2B1E]">{campaign.impactMetric}</span>
                </div>

                <div className="mt-4 space-y-2 pt-4 border-t border-[#E0E4D9]">
                  {campaign.initiatives.map((init, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#6B705C]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A5A40] shrink-0"></span>
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E0E4D9] text-[11px] text-[#6B705C] uppercase tracking-wider font-semibold">
                Community Driven
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Shirish Green Action Bento Box */}
        <div className="mt-6 bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <ShirishLogo size="md" variant="dark" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DDE5B6] text-xs font-bold uppercase tracking-wider border border-white/15">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Take The Living Pledge</span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
                Be a Shirish Guardian
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                Commit to planting one native tree, adopting zero single-use plastics, or composting kitchen bio-waste. Join thousands of conscious citizens acting today.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white text-[#2D332F] rounded-2xl p-5 sm:p-6 border border-[#E0E4D9] shadow-sm">
              {pledgeSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#1B2B1E] font-serif">Pledge Recorded!</h4>
                  <p className="text-xs text-[#4A554E] mt-1">
                    Thank you for championing Project Shirish. Together we green the future.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePledge} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1">
                      Choose Your Action:
                    </label>
                    <select 
                      value={pledgeType}
                      onChange={(e) => setPledgeType(e.target.value)}
                      className="w-full text-xs bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3 py-2 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                    >
                      <option value="plant">Plant & Nurture a Native Shirish / Neem Tree</option>
                      <option value="plastic">Eliminate Single-Use Plastics at Home</option>
                      <option value="compost">Start Household Bio-Waste Composting</option>
                      <option value="volunteer">Volunteer for Local Clean-up Drives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1">
                      Your Name / City:
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g., Aarav Sharma, Jaipur" 
                      className="w-full text-xs bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3 py-2 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#3A5A40] hover:bg-[#2D4532] text-white font-bold py-2.5 px-4 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    Submit Conscious Pledge
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
