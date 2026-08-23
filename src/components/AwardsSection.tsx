import React, { useState } from 'react';
import { AWARDS_DATA } from '../data/organizationData';
import { 
  Trophy, 
  Sparkles, 
  Calendar, 
  Building2,
  Filter
} from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Community Empowerment', 'Environment & Ecology', 'Media for Social Transformation', 'Public Health Outreach', 'Women & Youth Development'];

  const filteredAwards = selectedCategory === 'all'
    ? AWARDS_DATA
    : AWARDS_DATA.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()) || a.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="awards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Honors & Accolades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Awards & Recognitions
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#4A554E] font-light max-w-3xl leading-relaxed">
            Celebrating our collective journey of grassroots impact, broadcasting for public good, women empowerment, and environmental stewardship since November 2017.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-[#6B705C] font-bold uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#3A5A40] text-white shadow-xs'
                  : 'bg-white text-[#4A554E] hover:bg-[#F0F2EA] border border-[#E0E4D9]'
              }`}
              id={`filter-award-${cat.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {cat === 'all' ? 'All Recognitions' : cat}
            </button>
          ))}
        </div>

        {/* Awards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award) => (
            <div 
              key={award.id}
              className="bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9]">
                    {award.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#6B705C] font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-[#3A5A40]" />
                    <span>{award.year}</span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center mb-4">
                  <Trophy className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#1B2B1E] font-serif leading-snug">
                  {award.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3A5A40] mt-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{award.organization}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4A554E] mt-3 leading-relaxed font-light">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E0E4D9] flex items-center justify-between text-[11px] text-[#6B705C]">
                <span>Verified Recognition</span>
                <span className="font-bold text-[#3A5A40]">★ Scentwave</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
