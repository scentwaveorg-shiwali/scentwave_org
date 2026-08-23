import React, { useState } from 'react';
import { MEDIA_DATA } from '../data/organizationData';
import { 
  Radio, 
  Newspaper, 
  Headphones, 
  Video, 
  Play, 
  Pause, 
  Calendar
} from 'lucide-react';

export const MediaSection: React.FC = () => {
  const [activeMediaFilter, setActiveMediaFilter] = useState<'all' | 'radio' | 'press' | 'podcast' | 'video'>('all');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredMedia = activeMediaFilter === 'all'
    ? MEDIA_DATA
    : MEDIA_DATA.filter(m => m.type === activeMediaFilter);

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Outreach & Public Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Media & Broadcast Voices
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#4A554E] font-light max-w-3xl leading-relaxed">
            Harnessing the power of radio broadcasting, journalism, and digital media to spread conscious living, health alerts, and women empowerment.
          </p>
        </div>

        {/* Media Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveMediaFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeMediaFilter === 'all'
                ? 'bg-[#3A5A40] text-white shadow-xs'
                : 'bg-white text-[#4A554E] hover:bg-[#F0F2EA] border border-[#E0E4D9]'
            }`}
            id="filter-media-all"
          >
            All Media
          </button>
          <button
            onClick={() => setActiveMediaFilter('radio')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMediaFilter === 'radio'
                ? 'bg-[#3A5A40] text-white shadow-xs'
                : 'bg-white text-[#4A554E] hover:bg-[#F0F2EA] border border-[#E0E4D9]'
            }`}
            id="filter-media-radio"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Radio Shows</span>
          </button>
          <button
            onClick={() => setActiveMediaFilter('podcast')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMediaFilter === 'podcast'
                ? 'bg-[#3A5A40] text-white shadow-xs'
                : 'bg-white text-[#4A554E] hover:bg-[#F0F2EA] border border-[#E0E4D9]'
            }`}
            id="filter-media-podcast"
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Podcasts</span>
          </button>
          <button
            onClick={() => setActiveMediaFilter('press')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeMediaFilter === 'press'
                ? 'bg-[#3A5A40] text-white shadow-xs'
                : 'bg-white text-[#4A554E] hover:bg-[#F0F2EA] border border-[#E0E4D9]'
            }`}
            id="filter-media-press"
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Press & Articles</span>
          </button>
        </div>

        {/* Media Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => {
            const isPlaying = playingId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9]">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#6B705C] font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#3A5A40]" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1B2B1E] font-serif leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-[#3A5A40] uppercase tracking-wider mt-1.5">
                    {item.source}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A554E] mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Audio Player Bento Simulation */}
                  {item.durationOrRead && (
                    <div className="mt-4 p-3 rounded-2xl bg-[#F8F9F4] border border-[#E0E4D9] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => togglePlay(item.id)}
                          className="w-8 h-8 rounded-full bg-[#3A5A40] text-white flex items-center justify-center cursor-pointer hover:bg-[#2D4532] shadow-xs"
                          aria-label={isPlaying ? 'Pause broadcast' : 'Play broadcast snippet'}
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5" />
                          )}
                        </button>
                        <div>
                          <span className="text-[11px] font-bold text-[#1B2B1E] block">
                            {isPlaying ? 'Now Playing Snippet...' : 'Listen / Read'}
                          </span>
                          <span className="text-[10px] text-[#6B705C] font-medium">
                            {item.durationOrRead}
                          </span>
                        </div>
                      </div>
                      {isPlaying && (
                        <div className="flex items-center gap-0.5">
                          <span className="w-1 h-3 bg-[#3A5A40] animate-pulse rounded-full"></span>
                          <span className="w-1 h-5 bg-[#3A5A40] animate-pulse delay-75 rounded-full"></span>
                          <span className="w-1 h-2 bg-[#3A5A40] animate-pulse delay-150 rounded-full"></span>
                          <span className="w-1 h-4 bg-[#3A5A40] animate-pulse delay-100 rounded-full"></span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#E0E4D9] flex items-center justify-between text-[11px] text-[#6B705C]">
                  <span>Broadcasting Archives</span>
                  <span className="font-bold text-[#3A5A40]">Voice of Change</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
