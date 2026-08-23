import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MapPin, 
  Clock,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  MessageCircle
} from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, COPYRIGHT_TEXT, WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/organizationData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    purpose: 'volunteer',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      purpose: 'volunteer',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9F4] text-[#2D332F]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F2EA] border border-[#E0E4D9] text-[#3A5A40] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#3A5A40]" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2B1E] font-serif tracking-tight">
            Get in Touch With Scentwave
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#4A554E] font-light max-w-3xl leading-relaxed">
            Whether you want to volunteer for Project Shirish, invite us for a workshop, or support our women empowerment initiatives, we welcome your voice and partnership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Contact Channels Bento (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Bento Card */}
            <div className="bg-white border border-[#E0E4D9] rounded-3xl p-6 shadow-xs hover:border-[#C5CDBC] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40]">
                  Official Email
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-[#1B2B1E] uppercase tracking-wider">
                Direct Email Inbox
              </h3>
              <p className="text-xs text-[#6B705C] mt-1 font-light">
                For partnerships, media inquiries, and official communications:
              </p>
              
              <div className="mt-4 p-3 rounded-2xl bg-[#F8F9F4] border border-[#E0E4D9] flex items-center justify-between">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xs sm:text-sm font-bold text-[#3A5A40] hover:underline truncate mr-2"
                >
                  {CONTACT_EMAIL}
                </a>
                <button
                  onClick={() => handleCopy(CONTACT_EMAIL, 'email')}
                  className="p-1.5 rounded-xl bg-white border border-[#E0E4D9] text-[#4A554E] hover:text-[#1B2B1E] cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#3A5A40]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* WhatsApp Dedicated Bento Card */}
            <div className="bg-[#128C7E]/10 border border-[#25D366]/30 rounded-3xl p-6 shadow-xs hover:border-[#25D366] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#25D366]/20 text-[#1B2B1E] border border-[#25D366]/40">
                  Instant WhatsApp Chat
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-[#1B2B1E] uppercase tracking-wider">
                WhatsApp Direct Helpline
              </h3>
              <p className="text-xs text-[#4A554E] mt-1 font-light">
                Connect instantly with our coordination team on <strong className="font-semibold text-[#1B2B1E]">+91 {WHATSAPP_NUMBER}</strong>:
              </p>
              
              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-2xl transition-all shadow-xs cursor-pointer"
                  id="contact-whatsapp-direct-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({WHATSAPP_NUMBER})</span>
                </a>
              </div>
            </div>

            {/* Phone Bento Card */}
            <div className="bg-white border border-[#E0E4D9] rounded-3xl p-6 shadow-xs hover:border-[#C5CDBC] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F0F2EA] text-[#3A5A40]">
                  Direct Phone & WhatsApp
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-[#1B2B1E] uppercase tracking-wider">
                Helpline & Outreach
              </h3>
              <p className="text-xs text-[#6B705C] mt-1 font-light">
                Call or WhatsApp our team for grassroots campaign support:
              </p>
              
              <div className="mt-4 p-3 rounded-2xl bg-[#F8F9F4] border border-[#E0E4D9] flex items-center justify-between">
                <a 
                  href={`tel:${CONTACT_PHONE}`}
                  className="text-xs sm:text-sm font-bold text-[#3A5A40] hover:underline"
                >
                  {CONTACT_PHONE}
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/918619580554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#3A5A40] bg-[#F0F2EA] px-2.5 py-1 rounded-xl border border-[#E0E4D9] hover:bg-[#E2E8DA]"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => handleCopy(CONTACT_PHONE, 'phone')}
                    className="p-1.5 rounded-xl bg-white border border-[#E0E4D9] text-[#4A554E] hover:text-[#1B2B1E] cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#3A5A40]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Info Bento Card */}
            <div className="bg-[#3A5A40] text-white border border-[#2D4532] rounded-3xl p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DDE5B6] mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Non-Profit Integrity</span>
              </div>
              <h4 className="text-base font-bold font-serif text-white">
                Scentwave Organization
              </h4>
              <p className="text-xs text-white/80 mt-1 leading-relaxed font-light">
                Founded November 2017. All contributions and community efforts directly power grassroots educational campaigns, tree planting, and women’s self-reliance.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form Bento Box (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E0E4D9] rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#C5CDBC] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#1B2B1E] font-serif">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#6B705C] mt-1">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#F0F2EA] text-[#3A5A40] rounded-full text-xs font-bold uppercase border border-[#E0E4D9]">
                  Responsive Team
                </span>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[#F0F2EA] text-[#3A5A40] border border-[#E0E4D9] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1B2B1E] font-serif">Thank You for Connecting!</h4>
                  <p className="text-sm text-[#4A554E] max-w-md mx-auto mt-2 leading-relaxed font-light">
                    We have received your message. A Scentwave coordinator will contact you at <span className="font-semibold text-[#3A5A40]">{formData.email || 'your email'}</span>.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#3A5A40] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D4532] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g., Priya Sharma"
                        className="w-full text-xs sm:text-sm bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3.5 py-2.5 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@example.com"
                        className="w-full text-xs sm:text-sm bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3.5 py-2.5 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91-XXXXXXXXXX"
                        className="w-full text-xs sm:text-sm bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3.5 py-2.5 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select 
                        value={formData.purpose}
                        onChange={(e) => setFormData({...formData, purpose: e.target.value as any})}
                        className="w-full text-xs sm:text-sm bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl px-3.5 py-2.5 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                      >
                        <option value="volunteer">Volunteer with Scentwave / Project Shirish</option>
                        <option value="partner">Corporate / Institutional Partnership</option>
                        <option value="workshop">Organize Awareness Workshop in my City</option>
                        <option value="media">Media Interview / Broadcast Collaboration</option>
                        <option value="general">General Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1B2B1E] uppercase tracking-wider mb-1.5">
                      Your Message / How you'd like to collaborate *
                    </label>
                    <textarea 
                      required 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Share your ideas, location, or how you would like to participate in Scentwave's conscious movements..."
                      className="w-full text-xs sm:text-sm bg-[#F8F9F4] border border-[#E0E4D9] rounded-xl p-3.5 text-[#2D332F] focus:ring-1 focus:ring-[#3A5A40] focus:border-[#3A5A40]"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3A5A40] hover:bg-[#2D4532] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#E0E4D9] flex items-center justify-between text-xs text-[#6B705C]">
              <span>Direct Communication Channel</span>
              <span className="font-semibold text-[#3A5A40]">Prompt Support</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
