import { ServiceCategory, ServiceItem, Project, Testimonial } from './types';
import { Tent, Mic2, Lightbulb, Sofa, Calendar, Sparkles } from 'lucide-react';

export const COMPANY_NAME = "Maxode Events";
export const COMPANY_TAGLINE = "Crafting Unforgettable Experiences";
export const SOCIAL_HANDLE = "@maxodeevents";

export const SERVICES: ServiceItem[] = [
  {
    id: 'marquee-1',
    title: 'Marquee & Structure Hire',
    category: ServiceCategory.MARQUEE,
    description: 'We provide world-class outdoor cover. From elegant glass-fronted marquees for weddings to massive aluminium frame tents for political rallies and community gatherings. Safe, waterproof, and suitable for any terrain.',
    image: 'https://picsum.photos/id/43/800/600',
    features: ['Aluminium Frame Marquees', 'Stretch & Peg and Pole Tents', 'Glass Facades & Flooring', 'Air Conditioning']
  },
  {
    id: 'tech-1',
    title: 'Stage, Sound, Lighting & Screens',
    category: ServiceCategory.AV,
    description: 'A full technical production solution. We supply certified staging, crystal-clear line array sound systems, intelligent lighting rigs, and large-format LED screens so your message is seen and heard.',
    image: 'https://picsum.photos/id/453/800/600',
    features: ['LED Video Walls', 'Line Array Audio', 'Intelligent Lighting', 'Certified Staging & Rigging']
  },
  {
    id: 'events-1',
    title: 'Major Events & Traditional Functions',
    category: ServiceCategory.PLANNING,
    description: 'We specialize in "Big Events." Whether it is a high-stakes corporate gala, a large-scale political manifesto launch, a traditional celebration, or a luxury wedding, we manage the crowd and the experience.',
    image: 'https://picsum.photos/id/201/800/600',
    features: ['Political Rallies', 'Traditional Ceremonies', 'Corporate Galas', 'Luxury Weddings']
  },
  {
    id: 'decor-1',
    title: 'Event Styling & Decor',
    category: ServiceCategory.DECOR,
    description: 'Transforming spaces with curated décor. We handle everything from draping and table settings to floral installations that match your theme perfectly.',
    image: 'https://picsum.photos/id/250/800/600',
    features: ['Custom Centerpieces', 'Draping & Linings', 'Thematic Props', 'Tableware Hire']
  },
  {
    id: 'furniture-1',
    title: 'Premium Furniture Hire',
    category: ServiceCategory.FURNITURE,
    description: 'Modern, comfortable, and stylish furniture to elevate your guest experience. From VIP lounges to banquet seating.',
    image: 'https://picsum.photos/id/339/800/600',
    features: ['Tiffany & Phoenix Chairs', 'VIP Lounge Pockets', 'Cocktail Tables', 'Bar Structures']
  },
  {
    id: 'stage-1',
    title: 'Professional Staging',
    category: ServiceCategory.STAGE,
    description: 'Safe, certified staging solutions for conferences, festivals, and fashion shows.',
    image: 'https://picsum.photos/id/158/800/600',
    features: ['Modular Stages', 'Catwalks', 'Trussing & Rigging', 'Podiums']
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