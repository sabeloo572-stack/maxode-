import React from 'react';
import { QuoteForm } from '../components/QuoteForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <ScrollReveal direction="right" mode="slide">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-maxode-primary mb-6">Let's Create Something Extraordinary</h1>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We're ready to bring your vision to life. Fill out the quote form, and our team will be in touch with a customized proposal.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-maxode-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-500 text-sm mb-1">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+27110000000" className="text-lg font-semibold text-maxode-primaryDark hover:text-maxode-accent">+27 11 000 0000</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-maxode-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-500 text-sm mb-1">For general inquiries and bookings.</p>
                    <a href="mailto:events@maxode.co.za" className="text-lg font-semibold text-maxode-primaryDark hover:text-maxode-accent">events@maxode.co.za</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm text-maxode-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600 text-sm">
                      123 Event Avenue,<br />
                      Sandton, Johannesburg,<br />
                      2196
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder with Zoom Reveal */}
              <ScrollReveal mode="zoom" delay={0.2}>
                <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner group">
                  <img 
                    src="https://picsum.photos/id/122/800/400" 
                    className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    alt="Map Background"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <button className="bg-white px-6 py-2 rounded-full shadow-lg text-sm font-bold text-maxode-primary hover:scale-105 transition-transform">
                       View on Google Maps
                     </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" delay={0.2} mode="slide">
            <div>
              <QuoteForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};