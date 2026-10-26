export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  startingPrice?: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Logos' | 'Posters' | 'Websites' | 'Mobile Apps' | 'Branding';
  styleTag: string;
  clientPlaceholder: string;
  description: string;
  aspect: 'poster' | 'landscape' | 'square' | 'mobile';
  accentColor: string;
  // Specific styling properties for custom HTML/CSS/SVG compositions
  posterConfig?: {
    theme: 'church' | 'concert' | 'business' | 'product' | 'realestate' | 'restaurant' | 'education' | 'motivational' | 'neon' | 'minimal' | 'retro' | 'luxury';
    subtitle?: string;
    dateOrTag?: string;
    badgeText?: string;
    details?: string[];
  };
  mockupConfig?: {
    type: 'website-laptop' | 'mobile-screen' | 'brand-guideline' | 'logo-minimal';
    headline?: string;
    metric?: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  verified: boolean;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceKes: string;
  period?: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
  keyTakeaways: string[];
}
