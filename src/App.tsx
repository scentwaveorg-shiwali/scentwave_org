/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavTab } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionarySection } from './components/VisionarySection';
import { QuoteBanner } from './components/QuoteBanner';
import { PhilosophySection } from './components/PhilosophySection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { PillarsSection } from './components/PillarsSection';
import { ShirishSection } from './components/ShirishSection';
import { AwardsSection } from './components/AwardsSection';
import { MediaSection } from './components/MediaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F4] text-[#2D332F] font-sans selection:bg-[#3A5A40] selection:text-white">
      {/* Responsive Top Navigation with Shirish, Awards, Media, Contact Us */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <main className="flex-grow space-y-2">
        {/* Main Flow in Bento Grid Theme */}
        
        {/* 1. Main Page Start: Driving Sustainable Change */}
        <HeroSection setActiveTab={setActiveTab} />

        {/* 2. Below Hero: The Visionary Behind Scentwave (Shiwali Gupta) */}
        <VisionarySection />

        {/* 3. Core Quote Banner */}
        <QuoteBanner />

        {/* 4. Guiding Principles: Our Core Philosophy */}
        <PhilosophySection />

        {/* 5. Strategic Direction: Vision & Mission */}
        <VisionMissionSection />

        {/* 6. Four Pillars */}
        <PillarsSection setActiveTab={setActiveTab} />

        {/* Dedicated Tab Section: Shirish */}
        <ShirishSection />

        {/* Dedicated Tab Section: Awards */}
        <AwardsSection />

        {/* Dedicated Tab Section: Media */}
        <MediaSection />

        {/* Dedicated Tab Section: Contact Us / Get In Touch */}
        <ContactSection />
      </main>

      {/* Footer with Exact Required Copyright Notice */}
      <Footer setActiveTab={setActiveTab} />

      {/* Quick Access Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
