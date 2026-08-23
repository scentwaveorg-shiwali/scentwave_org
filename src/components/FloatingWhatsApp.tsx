import React, { useState } from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/organizationData';
import { Logo } from './Logo';
import { MessageCircle, X, Send, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    'Hello, I want to volunteer for Project Shirish.',
    'I want to collaborate with Scentwave Organization.',
    'Inquiry about awareness workshops in our institution.',
    'I would like to support women empowerment programs.'
  ];

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(customMsg || 'Hello Scentwave Organization, I would like to connect with you.');
    window.open(`https://wa.me/918619580554?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleQuickSend = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918619580554?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white border border-[#E0E4D9] rounded-3xl shadow-2xl p-5 text-[#2D332F] animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E0E4D9]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Logo size="md" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-2.5 h-2.5" />
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1B2B1E] font-serif">
                  WhatsApp Scentwave
                </h4>
                <p className="text-[11px] text-[#25D366] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span>+91 {WHATSAPP_NUMBER}</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-[#F0F2EA] hover:bg-[#E0E4D9] text-[#4A554E] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close WhatsApp chat dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-3">
            <p className="text-xs text-[#4A554E] leading-relaxed mb-3 font-light">
              Hi! Reach out to <strong className="font-semibold text-[#1B2B1E]">Scentwave Organization</strong> directly on WhatsApp for inquiries, volunteering, or collaborations:
            </p>

            {/* Quick Templates */}
            <div className="space-y-1.5 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B705C] block">
                Quick Messages:
              </span>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSend(msg)}
                  className="w-full text-left text-xs bg-[#F8F9F4] hover:bg-[#F0F2EA] border border-[#E0E4D9] hover:border-[#C5CDBC] p-2 rounded-xl text-[#2D332F] transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate mr-2 font-medium">{msg}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#3A5A40] opacity-60 group-hover:opacity-100 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input Form */}
            <form onSubmit={handleSendCustom} className="mt-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 text-xs bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3 py-2 text-[#2D332F] focus:ring-1 focus:ring-[#25D366] focus:border-[#25D366]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center shadow-xs"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Footer Direct Action */}
          <div className="pt-3 border-t border-[#E0E4D9] text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
            >
              <span>Open Direct Chat (+91 {WHATSAPP_NUMBER})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        id="floating-whatsapp-btn"
        aria-label="Chat with Scentwave on WhatsApp 8619580554"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full">
            <span className="block w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping opacity-75"></span>
          </span>
        </div>
        
        <span className="font-semibold text-xs sm:text-sm tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>

        {/* Floating Tooltip if closed */}
        {!isOpen && (
          <span className="hidden group-hover:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1B2B1E] text-white text-[11px] font-medium py-1.5 px-3 rounded-xl whitespace-nowrap shadow-md border border-[#2D4532]">
            Contact on +91 {WHATSAPP_NUMBER}
          </span>
        )}
      </button>
    </div>
  );
};
