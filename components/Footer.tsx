import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-maxode-primaryDark text-white pt-16 pb-24 md:pb-10 border-t border-maxode-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10 bg-maxode-primary flex items-center justify-center shadow-sm overflow-hidden rounded-lg border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20L9 4L12 14L15 4L20 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-maxode-accent h-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold tracking-tight leading-none text-white">MAXODE</span>
                <span className="text-[0.5rem] tracking-widest font-sans font-semibold text-maxode-accent">TRADING & PROJECTS</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              South Africa's premier event infrastructure and management company. We turn empty spaces into unforgettable experiences.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-2 bg-white/5 rounded-full text-gray-300 hover:text-maxode-accent hover:bg-white/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-gray-300 hover:text-maxode-accent hover:bg-white/10 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-gray-300 hover:text-maxode-accent hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-0">
             <div>
                <h3 className="font-bold text-lg mb-6 text-maxode-accent">Services</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li><Link to="/services" className="hover:text-white transition-colors block py-1">Marquee Hire</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors block py-1">Technical Prod.</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors block py-1">Event Styling</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors block py-1">Furniture</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-6 text-maxode-accent">Company</h3>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li><Link to="/about" className="hover:text-white transition-colors block py-1">About Us</Link></li>
                  <li><Link to="/portfolio" className="hover:text-white transition-colors block py-1">Gallery</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors block py-1">Contact</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors block py-1">Careers</Link></li>
                </ul>
              </div>
          </div>

          {/* Contact - Stacked for mobile */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-maxode-accent">Contact</h3>
            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-maxode-accent flex-shrink-0 mt-0.5" />
                <span>123 Event Avenue, Sandton,<br/>Johannesburg, 2196</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-maxode-accent" />
                <a href="tel:+27110000000" className="py-1 block">+27 11 000 0000</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-maxode-accent" />
                <a href="mailto:events@maxode.co.za" className="py-1 block">events@maxode.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 text-center">
          <p>© 2025 Maxode Events. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white py-2">Privacy Policy</a>
            <a href="#" className="hover:text-white py-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};