import React from 'react';
import { 
  Radio, 
  Sparkles, 
  Heart, 
  Shield, 
  Users, 
  Mic, 
  Award,
  ArrowRight
} from 'lucide-react';

export const VisionarySection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="visionary-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Leadership & Origins</span>
          </div>
          
          {/* Exact Required Headings */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            The Visionary Behind Scentwave
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#3A5A40] font-serif mt-1">
            The Voice of Conscious Change
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Profile Bento Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#A3B18A]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white shadow-inner">
                <Mic className="w-7 h-7 text-[#DDE5B6]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Shiwali Gupta
              </h3>
              <p className="text-[#DDE5B6] font-semibold text-xs uppercase tracking-wider mt-1">
                Founder & Inspiring Force
              </p>
              
              <div className="inline-block mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/90 font-medium">
                Broadcaster • Social Changemaker
              </div>

              <p className="mt-6 text-white/80 text-sm leading-relaxed font-light">
                Channeling the power of media, grassroots presence, and empathy into structured community movements across health, environment, and gender empowerment.
              </p>
            </div>

            {/* 4 Core Tenets Mini Bento */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-2.5 text-xs">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10">
                <Heart className="w-3.5 h-3.5 text-[#DDE5B6]" />
                <span className="font-medium text-white">Sensitivity</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10">
                <Shield className="w-3.5 h-3.5 text-[#DDE5B6]" />
                <span className="font-medium text-white">Service</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#DDE5B6]" />
                <span className="font-medium text-white">Empowerment</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/10">
                <Users className="w-3.5 h-3.5 text-[#DDE5B6]" />
                <span className="font-medium text-white">Responsibility</span>
              </div>
            </div>
          </div>

          {/* Narrative Bento Card (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Catalyst of Social Transformation</span>
              </div>

              {/* Exact Required Paragraph */}
              <div className="bg-[#F8F9F4]/70 p-6 sm:p-8 rounded-2xl border border-[#E0E4D9]/80 text-[#2D332F] text-base sm:text-lg leading-relaxed font-normal">
                <p className="mb-0">
                  Shiwali Gupta is the inspiring force behind Scentwave Organization, driven by her belief that awareness leads to true social transformation. Beginning as a radio anchor, she transformed her voice into a medium of change and impact. Her vision blends sensitivity, service, empowerment, and responsibility into a unified movement. Through Scentwave, she promotes conscious living across health, environment, and social empowerment. Her work reflects the idea that awareness is not just knowledge, but a responsibility to act.
                </p>
              </div>

              {/* Bento Feature Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F0F2EA]/60 border border-[#E0E4D9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#3A5A40] text-white flex items-center justify-center shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B2B1E] uppercase tracking-wider">Broadcasting Roots</h4>
                    <p className="text-xs text-[#4A554E] mt-1 leading-relaxed">
                      Transforming audio broadcasts and journalism into awakened civic duty and dialogue.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0F2EA]/60 border border-[#E0E4D9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#3A5A40] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1B2B1E] uppercase tracking-wider">Unified Movement</h4>
                    <p className="text-xs text-[#4A554E] mt-1 leading-relaxed">
                      Uniting health, environmental renewal, and women’s economic agency into one movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Citation Line */}
            <div className="mt-8 pt-4 border-t border-[#E0E4D9] flex items-center justify-between text-xs text-[#6B705C]">
              <span>Scentwave Organization Leadership</span>
              <span className="font-semibold text-[#3A5A40]">Est. November 2017</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
