import { AwardItem, MediaItem, ShirishCampaign } from '../types';

export const FOUNDING_DATE = 'November 2017';
export const CONTACT_EMAIL = 'scentwaveorg@gmail.com';
export const CONTACT_PHONE = '+91-8619580554';
export const WHATSAPP_NUMBER = '8619580554';
export const WHATSAPP_LINK = 'https://wa.me/918619580554?text=Hello%20Scentwave%20Organization%2C%20I%20would%20like%20to%20connect%20with%20you.';
export const SCENTWAVE_LOGO_URL = 'https://lh3.googleusercontent.com/d/1e4rBTzFGpz7WAGZQdnjflGid5Bv78E-i';
export const SCENTWAVE_DRIVE_LOGO = 'https://drive.google.com/file/d/1e4rBTzFGpz7WAGZQdnjflGid5Bv78E-i/view?usp=drive_link';
export const SHIRISH_LOGO_URL = 'https://lh3.googleusercontent.com/d/1b3WCzCRa5LPmbQewHY6SaOdcm0-XjMEk';
export const SHIRISH_DRIVE_LOGO = 'https://drive.google.com/file/d/1b3WCzCRa5LPmbQewHY6SaOdcm0-XjMEk/view?usp=drive_link';
export const COPYRIGHT_TEXT = '© 2026 Scentwave Organization. A Non-Profit Initiative.';

export const SHIRISH_CAMPAIGNS: ShirishCampaign[] = [
  {
    id: 'plantation-drive',
    title: 'Shirish Green Canopy Drive',
    category: 'Environmental Stewardship',
    tagline: 'Planting indigenous trees for shaded, resilient and oxygen-rich community spaces',
    impactMetric: '15,000+ Native Saplings Planted',
    description: 'Inspired by the enduring resilience of the Shirish tree, which blossoms in the harshest heat, this project mobilizes students, residents, and rural youth to create bio-diverse mini forests and green corridors.',
    initiatives: [
      'Native flora afforestation in semi-arid and community lands',
      'Adopt-a-Tree school programs fostering student responsibility',
      'Organic seed ball distribution during monsoon awareness rallies',
      'Urban green terrace and medicinal herb garden workshops'
    ]
  },
  {
    id: 'eco-living',
    title: 'Conscious Living & Circular Waste',
    category: 'Circular Economy',
    tagline: 'Empowering households to transition toward zero single-use plastic',
    impactMetric: '40+ Communities Sensitized',
    description: 'Bridging the gap between environmental awareness and daily habits. We conduct grassroots sessions on home composting, cloth bag alternatives, safe e-waste disposal, and water conservation techniques.',
    initiatives: [
      'Single-use plastic substitution and cloth bag distribution',
      'Decentralized wet-waste composting modules for residential clusters',
      'Clean water conservation rallies and rainwater recharge advocacy',
      'Eco-friendly festival celebrations using natural clay and organic colors'
    ]
  },
  {
    id: 'rural-empowerment',
    title: 'Women Green Livelihoods',
    category: 'Women Empowerment',
    tagline: 'Transforming eco-initiatives into sustainable micro-enterprises for women',
    impactMetric: '1,200+ Women Trained',
    description: 'Aligning environmental action with women empowerment by providing vocational training in upcycled cloth crafts, natural incense making, eco-friendly packaging, and nursery management.',
    initiatives: [
      'Handmade cloth tote bag production clusters for self-help groups',
      'Nursery care and medicinal plant cultivation training',
      'Financial literacy and digital banking enablement for rural artisans',
      'Leadership and public speaking workshops for grassroots changemakers'
    ]
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'award-1',
    year: '2025',
    title: 'National Social Impact Leadership Citation',
    category: 'Community Empowerment',
    organization: 'Apex Council for Sustainable Development & Social Action',
    description: 'Recognized for pioneering multi-sectoral awareness in women empowerment and digital literacy across semi-urban and rural clusters.'
  },
  {
    id: 'award-2',
    year: '2024',
    title: 'Excellence in Grassroots Environmental Action',
    category: 'Environment & Ecology',
    organization: 'Green Earth Stewardship Forum',
    description: 'Awarded for Project Shirish and sustained tree canopy revival campaigns driven by citizen participation.'
  },
  {
    id: 'award-3',
    year: '2023',
    title: 'Voice of Change Media Fellowship & Honor',
    category: 'Media for Social Transformation',
    organization: 'Broadcast & Community Outreach Federation',
    description: 'Honoring Shiwali Gupta for seamlessly bridging broadcasting, radio anchor storytelling, and on-ground humanitarian action.'
  },
  {
    id: 'award-4',
    year: '2021',
    title: 'Corona Warrior & Community Health Vanguard',
    category: 'Public Health Outreach',
    organization: 'Regional Healthcare & Humanitarian Alliance',
    description: 'Conferred for rapid response health awareness, digital telemedicine assistance, and emergency relief drives during challenging times.'
  },
  {
    id: 'award-5',
    year: '2019',
    title: 'Women Changemaker & Dignity Champion',
    category: 'Women & Youth Development',
    organization: 'State Federation of Women Entrepreneurs and NGOs',
    description: 'Awarded for sustained vocational training and menstrual hygiene awareness campaigns in underserved communities.'
  },
  {
    id: 'award-6',
    year: '2018',
    title: 'Emerging Social Initiative of the Year',
    category: 'Foundational Impact',
    organization: 'Civil Society & Youth Vanguard Awards',
    description: 'Recognizing Scentwave Organization’s breakthrough launch in November 2017 and rapid grassroots community adoption.'
  }
];

export const MEDIA_DATA: MediaItem[] = [
  {
    id: 'media-1',
    type: 'radio',
    title: 'Awaaz Parivartan Ki: Radio for Grassroots Awareness',
    source: 'Community Radio & Broadcast Waves',
    date: 'February 2026',
    description: 'Shiwali Gupta shares insights on how radio storytelling acts as a powerful catalyst for health awareness, mental wellness, and gender equality in local communities.',
    durationOrRead: '24 mins broadcast',
    tags: ['Radio Anchor', 'Conscious Living', 'Voice of Change']
  },
  {
    id: 'media-2',
    type: 'press',
    title: 'How Scentwave is Redefining Environmental Action through Project Shirish',
    source: 'National Sustainable Living Chronicle',
    date: 'January 2026',
    description: 'A detailed feature profiling Scentwave Organization’s 9-year journey from November 2017 to becoming an influential beacon of conscious living and circular economy.',
    durationOrRead: '6 mins read',
    tags: ['Project Shirish', 'Environment', 'Feature Story']
  },
  {
    id: 'media-3',
    type: 'podcast',
    title: 'Conscious Living: From Information to Responsible Action',
    source: 'The Social Transformation Dialogue',
    date: 'November 2025',
    description: 'A comprehensive podcast discussion exploring why awareness is not just passive knowledge, but an active civic duty to drive societal progress.',
    durationOrRead: '38 mins listen',
    tags: ['Philosophy', 'Shiwali Gupta', 'Empowerment']
  },
  {
    id: 'media-4',
    type: 'press',
    title: 'Digital Safety & Literacy: Bringing Cyber Confidence to Women and Students',
    source: 'Daily Herald & Social Pulse',
    date: 'August 2025',
    description: 'Coverage of Scentwave’s mobile digital clinics training first-time internet users in cyber hygiene, scam prevention, and online livelihood tools.',
    durationOrRead: '4 mins read',
    tags: ['Digital Literacy', 'Public Welfare', 'Technology']
  },
  {
    id: 'media-5',
    type: 'video',
    title: 'On-Ground Documentary: A Wave of Change in Rural Workshops',
    source: 'Scentwave Media Archives',
    date: 'May 2025',
    description: 'Capturing moments from health checkup camps, eco-craft training modules, and youth leadership forums led by Scentwave volunteers.',
    durationOrRead: '12 mins video',
    tags: ['Grassroots', 'Health Camps', 'Women Empowerment']
  }
];

export const CORE_PILLARS = [
  {
    id: 'health',
    title: 'Health & Conscious Well-Being',
    subtitle: 'Preventive healthcare & nutritional dignity',
    description: 'Conducting community health sensitization, preventive screening camps, maternal and child wellness counseling, and mental health discussions.',
    icon: 'HeartPulse',
    stats: '8,500+ Individuals Reached'
  },
  {
    id: 'environment',
    title: 'Environmental Stewardship',
    subtitle: 'Project Shirish & circular sustainability',
    description: 'Promoting afforestation, organic composting, zero-plastic lifestyles, water table replenishment, and clean neighborhood drives.',
    icon: 'Trees',
    stats: '15,000+ Saplings Planted'
  },
  {
    id: 'digital',
    title: 'Digital Literacy & Cyber Safety',
    subtitle: 'Modern technology for public welfare',
    description: 'Empowering students and women with digital fluency, cyber safety awareness, digital banking protection, and accessible tech tools.',
    icon: 'ShieldCheck',
    stats: '4,000+ Learners Trained'
  },
  {
    id: 'women',
    title: 'Women Empowerment & Equality',
    subtitle: 'Dignity, self-reliance & vocational skills',
    description: 'Providing livelihood workshops, leadership grooming, legal awareness, and self-reliance ecosystems for women and young girls.',
    icon: 'Sparkles',
    stats: '1,200+ Women Upskilled'
  }
];
