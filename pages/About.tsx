import React from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal mode="fade">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-maxode-primary mb-6">Behind the Scenes</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Maxode Events was founded on a simple principle: <span className="text-maxode-primary font-semibold">Excellence in execution</span>. 
              We are South Africa's trusted partner for premium event infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <ScrollReveal direction="left" mode="zoom">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/449/800/800" 
                alt="Team at work" 
                className="rounded-2xl shadow-premium w-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-maxode-primaryDark rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl hidden md:flex animate-pulse">
                <span className="font-serif font-bold text-lg">100% Black Owned</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2} mode="slide">
            <div>
              <h2 className="text-3xl font-serif font-bold text-maxode-primary mb-6">Our Philosophy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In an industry where timing is everything, reliability is our currency. We own and maintain a vast inventory of marquees, technical gear, and furniture, giving us complete control over the quality of your event.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We do not dabble in other trades. We are event specialists. Whether it's a high-stakes corporate launch or a delicate private wedding, we bring the same level of precision and passion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Safety Certified', 'Own Fleet & Logistics', '24/7 Support', 'Eco-conscious'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Team Teaser */}
        <ScrollReveal direction="up" delay={0.3} mode="fade">
          <div className="bg-gray-50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-serif font-bold text-maxode-primary mb-4">Meet The Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                Our project managers, sound engineers, and riggers are the best in the business.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <ScrollReveal key={i} delay={i * 0.1} mode="zoom" className="h-full">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 h-full">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden border-2 border-maxode-accent">
                        <img src={`https://picsum.photos/seed/user${i}/200/200`} alt="Team Member" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-gray-900">Team Member {i}</h3>
                      <p className="text-sm text-maxode-accent font-semibold">Senior Event Specialist</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};