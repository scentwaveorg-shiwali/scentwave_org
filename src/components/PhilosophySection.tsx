import React from 'react';
import { 
  Waves, 
  Recycle, 
  Users2, 
  LeafyGreen, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="philosophy-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Waves className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Guiding Principles</span>
          </div>

          {/* Exact Required Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Our Core Philosophy
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Philosophy Bento Box with Exact Required Text (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center mb-6">
                <Waves className="w-6 h-6" />
              </div>

              {/* Exact Required Text */}
              <p className="text-lg sm:text-xl md:text-2xl text-[#1B2B1E] font-serif leading-relaxed font-semibold mb-6">
                “Sometimes, change does not begin with noise, but with a gentle wave of thoughtful awareness. At Scentwave Organization, we believe that sustainable development is only possible through a holistic approach that integrates environmental stewardship with human well-being. Our work is guided by the principles of circular economy and community-led growth.”
              </p>
            </div>

            <div className="pt-6 border-t border-[#E0E4D9] flex items-center justify-between text-xs text-[#6B705C] font-semibold uppercase tracking-wider">
              <span>Scentwave Core Doctrine</span>
              <span className="text-[#3A5A40]">Holistic & Sustainable</span>
            </div>
          </div>

          {/* Right Bento Grid: 2 stacked cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            <div className="bg-[#F0F2EA]/80 border border-[#E0E4D9] rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3A5A40] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Recycle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1B2B1E] font-serif">
                  Circular Economy & Waste Wisdom
                </h3>
                <p className="text-sm text-[#4A554E] mt-2 leading-relaxed font-light">
                  Moving from linear consumption models to circular resource recovery, organic composting, and upcycled women-led crafts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E0E4D9] text-[11px] font-bold uppercase tracking-wider text-[#3A5A40]">
                Zero-Waste Living
              </div>
            </div>

            <div className="bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3A5A40] text-white flex items-center justify-center mb-4 shadow-sm">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1B2B1E] font-serif">
                  Community-Led Grassroots Growth
                </h3>
                <p className="text-sm text-[#4A554E] mt-2 leading-relaxed font-light">
                  Enabling neighborhood champions to own local green drives, wellness workshops, and digital cyber hygiene clinics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E0E4D9] text-[11px] font-bold uppercase tracking-wider text-[#3A5A40]">
                Local Leadership
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
