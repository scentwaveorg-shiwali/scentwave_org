export type NavTab = 'home' | 'shirish' | 'awards' | 'media' | 'contact';

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  category: string;
  organization: string;
  description: string;
  iconName?: string;
}

export interface MediaItem {
  id: string;
  type: 'radio' | 'press' | 'video' | 'podcast';
  title: string;
  source: string;
  date: string;
  description: string;
  durationOrRead?: string;
  tags: string[];
}

export interface ShirishCampaign {
  id: string;
  title: string;
  category: string;
  tagline: string;
  impactMetric: string;
  description: string;
  initiatives: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  purpose: 'volunteer' | 'partner' | 'shirish' | 'media' | 'general';
  message: string;
}
