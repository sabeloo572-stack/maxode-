import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Corporate' | 'Private' | 'Community'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal mode="fade">
          <div className="text-center mb-12">
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-maxode-primary mb-4">Our Gallery</h1>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              A showcase of our premium event setups across South Africa.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters - Scrollable on mobile */}
        <ScrollReveal delay={0.2} mode="slide" direction="up">
          <div className="flex overflow-x-auto pb-4 gap-3 md:justify-center md:gap-4 mb-10 scrollbar-hide snap-x">
            {['All', 'Corporate', 'Private', 'Community'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-bold transition-all snap-start ${
                  filter === cat 
                    ? 'bg-maxode-primary text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry/Grid - Single Column on Mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ScrollReveal 
                key={project.id} 
                delay={index * 0.1} 
                mode="zoom"
                className="h-full"
              >
                <motion.div
                  layout
                  className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md aspect-[4/3] md:aspect-square"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-maxode-accent text-xs font-bold tracking-widest uppercase mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex justify-between items-center text-gray-300 text-xs border-t border-white/20 pt-3">
                       <div className="flex items-center gap-1">
                         <MapPin size={12} /> {project.location}
                       </div>
                       <div className="flex items-center gap-1">
                         <Calendar size={12} /> {project.date}
                       </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};