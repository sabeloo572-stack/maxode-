import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, TESTIMONIALS } from '../constants';
import { ArrowRight, Star, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { ParallaxBackground } from '../components/ParallaxBackground';

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Hero Section - Mobile Priority with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white pb-16 pt-24 md:pt-0 overflow-hidden">
        
        <ParallaxBackground 
          image="https://picsum.photos/id/452/1920/1080" 
          alt="Event Atmosphere" 
        />
        
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-maxode-accent font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm inline-block border border-white/10">
              Premium Infrastructure
            </h2>
            
            {/* CSS Clamp for responsive typography */}
            <h1 className="font-serif font-bold mb-6 leading-[1.1] text-[clamp(2.5rem,8vw,5rem)] drop-shadow-lg">
              Crafting <br /> Unforgettable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Experiences</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-200 mb-10 max-w-xl mx-auto font-light leading-relaxed drop-shadow-md">
              We deliver flawless technical production and luxury marquees for South Africa's most exclusive events.
            </p>
            
            <div className="flex flex-col w-full md:w-auto md:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full md:w-auto bg-maxode-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-glow active:scale-95">
                Book Your Event
              </Link>
              <Link to="/portfolio" className="w-full md:w-auto border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-maxode-primary text-white px-8 py-4 rounded-full font-semibold transition-all active:scale-95">
                View Gallery
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="text-white/50 w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Intro / About Snapshot */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-maxode-light/50 rounded-bl-[100px] -z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="up" mode="slide">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-maxode-primary mb-6 leading-tight">
                Our Work Speaks for Itself
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                We design, build, and execute stunning event setups that combine creativity, structure, and attention to detail. Each project reflects our commitment to quality and modern event styling.
              </p>
              <Link to="/about" className="text-maxode-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                Why choose us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2} mode="zoom">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-maxode-accent rounded-3xl z-0 transform -rotate-2" />
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                  alt="The Maxode Team" 
                  className="rounded-3xl shadow-premium relative z-10 w-full h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Showcase - Mobile Stacked */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-maxode-accent font-bold uppercase tracking-widest text-xs mb-2 block">Full Infrastructure Solutions</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-maxode-primary">Our Expertise</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <ScrollReveal key={service.id} delay={idx * 0.1} mode="zoom">
                <div className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-500 transform hover:-translate-y-2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Glassmorphism Card Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-200 text-sm line-clamp-3 mb-4 leading-relaxed">{service.description}</p>
                      <Link to="/services" className="text-maxode-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Explore <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.3} mode="fade">
            <div className="mt-12 text-center">
              <Link to="/services" className="w-full md:w-auto inline-block border-2 border-maxode-primary text-maxode-primary px-8 py-3 rounded-full font-bold hover:bg-maxode-primary hover:text-white transition-all">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats - Scroll Triggered */}
      <section className="py-16 bg-maxode-primaryDark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="currentColor" />
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#dots)" />
           </svg>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: 'Events Executed', value: '500+' },
            { label: 'Corporate Clients', value: '120+' },
            { label: 'Pro Gear Items', value: '2k+' },
            { label: 'Safety Rating', value: '100%' },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up" mode="slide">
              <div className="p-2">
                <p className="text-4xl md:text-5xl font-bold text-maxode-accent mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials - Swipeable on mobile (CSS Scroll Snap) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal mode="fade">
            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-serif font-bold text-center text-maxode-primary mb-12">Client Stories</h2>
          </ScrollReveal>
          
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="min-w-[85%] md:min-w-0 snap-center">
                <ScrollReveal delay={i * 0.1} className="h-full" mode="slide">
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex gap-1 text-maxode-accent mb-4">
                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-maxode-primary/10 flex items-center justify-center text-maxode-primary font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-maxode-primary text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-maxode-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal mode="zoom">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Plan?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
              Let's discuss your vision. Whether it's a corporate gala or an intimate wedding, we have the infrastructure to make it happen.
            </p>
            <Link to="/contact" className="inline-block bg-white text-maxode-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl active:scale-95">
              Get Started
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};