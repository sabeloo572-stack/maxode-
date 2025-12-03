import { ServiceCategory, ServiceItem, Project, Testimonial } from './types';
import { Tent, Mic2, Lightbulb, Sofa, Calendar, Sparkles } from 'lucide-react';

export const COMPANY_NAME = "Maxode Events";
export const COMPANY_TAGLINE = "Crafting Unforgettable Experiences";
export const SOCIAL_HANDLE = "@maxodeevents";

export const SERVICES: ServiceItem[] = [
  {
    id: 'marquee-1',
    title: 'Luxury Marquee Structures',
    category: ServiceCategory.MARQUEE,
    description: 'Premium aluminium frame marquees, stretch tents, and glass-sided structures for any weather condition.',
    image: 'https://picsum.photos/id/43/800/600',
    features: ['Clear-span structures', 'Flooring & carpeting', 'Air conditioning', 'Glass facades']
  },
  {
    id: 'tech-1',
    title: 'Concert-Grade Audio Visual',
    category: ServiceCategory.AV,
    description: 'Immersive soundscapes and intelligent lighting design to transform venues.',
    image: 'https://picsum.photos/id/453/800/600',
    features: ['Line array sound systems', 'Intelligent moving heads', 'LED video walls', 'Live streaming rigs']
  },
  {
    id: 'decor-1',
    title: 'Bespoke Event Styling',
    category: ServiceCategory.DECOR,
    description: 'Curated décor themes, floral installations, and tablescaping that tells a story.',
    image: 'https://picsum.photos/id/250/800/600',
    features: ['Custom centerpieces', 'Draping & linings', 'Thematic props', 'Tableware hire']
  },
  {
    id: 'stage-1',
    title: 'Professional Staging',
    category: ServiceCategory.STAGE,
    description: 'Safe, certified staging solutions for conferences, festivals, and fashion shows.',
    image: 'https://picsum.photos/id/158/800/600',
    features: ['Modular stages', 'Catwalks', 'Trussing & rigging', 'Podiums']
  },
  {
    id: 'furniture-1',
    title: 'Premium Furniture Hire',
    category: ServiceCategory.FURNITURE,
    description: 'Modern, comfortable, and stylish furniture to elevate your guest experience.',
    image: 'https://picsum.photos/id/339/800/600',
    features: ['Tiffany & Phoenix chairs', 'Lounge pockets', 'Cocktail tables', 'VIP seating']
  },
  {
    id: 'planning-1',
    title: 'End-to-End Management',
    category: ServiceCategory.PLANNING,
    description: 'Meticulous coordination from concept to cleanup. We handle the stress so you can host.',
    image: 'https://picsum.photos/id/201/800/600',
    features: ['Timeline management', 'Vendor coordination', 'Safety compliance', 'On-site management']
  }
];

export const SERVICE_ICONS = {
  [ServiceCategory.MARQUEE]: Tent,
  [ServiceCategory.AV]: Mic2,
  [ServiceCategory.DECOR]: Sparkles,
  [ServiceCategory.STAGE]: Lightbulb,
  [ServiceCategory.FURNITURE]: Sofa,
  [ServiceCategory.PLANNING]: Calendar,
};

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Annual Tech Gala',
    client: 'Innovate SA',
    category: 'Corporate',
    description: 'Full technical production and styling for 500 guests.',
    location: 'Sandton Convention Centre',
    date: 'Nov 2024',
    image: 'https://picsum.photos/id/381/600/400'
  },
  {
    id: 'p2',
    title: 'Summer Music Festival',
    client: 'Vibe Productions',
    category: 'Community',
    description: 'Main stage rigging, sound, and crowd control infrastructure.',
    location: 'Cape Town Stadium',
    date: 'Dec 2024',
    image: 'https://picsum.photos/id/158/600/400'
  },
  {
    id: 'p3',
    title: 'Matthews Wedding',
    client: 'Private Client',
    category: 'Private',
    description: 'Luxury glass marquee setup on a private estate.',
    location: 'Franschhoek',
    date: 'Jan 2025',
    image: 'https://picsum.photos/id/42/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'FinTech Corp',
    content: 'Maxode transformed our year-end function. The lighting design was world-class, and the team was incredibly professional.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Thabo Mokoena',
    role: 'Event Organizer',
    content: 'Reliable, on time, and high-quality gear. The marquee structure withstood the wind perfectly.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rossi',
    role: 'Bride',
    content: 'Our wedding looked exactly like the mood board. Thank you for making our dream day a reality.',
    rating: 5
  }
];