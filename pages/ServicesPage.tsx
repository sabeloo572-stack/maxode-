import React from 'react';
import { SERVICES, SERVICE_ICONS } from '../constants';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <ScrollReveal mode="fade">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-serif font-bold text-maxode-primary mb-6 leading-tight">Our Services</h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Maxode Events offers a comprehensive suite of event infrastructure and management solutions. We own our gear, ensuring quality control and reliability.
          </p>
        </ScrollReveal>
      </div>

      {/* Services List - Stacked on Mobile */}
      <div className="container mx-auto px-6 space-y-16 md:space-y-24">
        {SERVICES.map((service, idx) => {
          const Icon = SERVICE_ICONS[service.category];
          const isEven = idx % 2 === 0;

          return (
            <ScrollReveal 
              key={service.id} 
              direction="up" 
              delay={idx * 0.1}
            >
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center bg-white md:bg-transparent rounded-3xl shadow-sm md:shadow-none p-6 md:p-0`}>
                {/* Image with Zoom Effect */}
                <ScrollReveal mode="zoom" className="w-full md:w-1/2 h-[250px] md:h-[450px]">
                  <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-premium">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-maxode-light rounded-xl text-maxode-primary">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">{service.category}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-bold text-maxode-primary mb-4 md:mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">{service.description}</p>
                  
                  <div className="bg-gray-50 md:bg-white p-6 rounded-2xl mb-8 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Includes:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                          <CheckCircle size={18} className="text-maxode-accent flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="block md:inline-block w-full text-center px-8 py-4 bg-maxode-primary text-white rounded-xl font-bold hover:bg-maxode-primaryDark transition-all active:scale-95 shadow-lg shadow-maxode-primary/20"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};