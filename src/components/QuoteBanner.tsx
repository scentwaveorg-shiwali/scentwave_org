import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-[#F8F9F4]" id="quote-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Width Bento Card for the Core Quote */}
        <div className="bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-8 sm:p-12 shadow-xs relative overflow-hidden text-center">
          {/* Gentle background organic blur */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#A3B18A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 text-[#DDE5B6] shadow-sm">
              <Quote className="w-6 h-6" />
            </div>

            {/* Exact Required Quote Text */}
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug sm:leading-tight text-white mb-6">
              “Awareness is not just knowledge; it's a responsibility to act for the betterment of society.”
            </blockquote>

            <div className="flex items-center justify-center space-x-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#DDE5B6]">
              <div className="h-px w-8 bg-[#A3B18A]/60" />
              <span>Shiwali Gupta • Founder, Scentwave Organization</span>
              <div className="h-px w-8 bg-[#A3B18A]/60" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
