export enum ServiceCategory {
  MARQUEE = "Marquee & Tent Hire",
  STAGE = "Stage & Rigging",
  AV = "Sound, Lighting & AV",
  DECOR = "Décor & Styling",
  FURNITURE = "Event Furniture",
  PLANNING = "Planning & Coordination"
}

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Corporate' | 'Private' | 'Community';
  description: string;
  image: string;
  location: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guestCount: number;
  services: ServiceCategory[];
  message: string;
  files: File[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}