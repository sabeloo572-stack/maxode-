import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  image: string;
  alt: string;
  className?: string;
  overlayOpacity?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  image, 
  alt, 
  className = "",
  overlayOpacity = 0.4 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Map scroll progress (0 to 1) to Y translation (0% to 30%)
  // This makes the image move slower than the scroll, creating depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.15]); // Subtle zoom on scroll

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div 
        style={{ y, scale }} 
        className="w-full h-full"
      >
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-maxode-primaryDark via-maxode-primaryDark/60 to-transparent" 
        style={{ opacity: 0.8 }} 
      />
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.2 }}
      />
    </div>
  );
};