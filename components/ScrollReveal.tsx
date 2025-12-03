import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  mode?: 'slide' | 'fade' | 'zoom';
  className?: string;
  viewportMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  width = "auto", 
  delay = 0, 
  direction = 'up',
  mode = 'slide',
  className = "",
  viewportMargin = "-50px"
}) => {
  
  const getHiddenVariant = () => {
    const base = { opacity: 0 };
    
    if (mode === 'zoom') {
      return { ...base, scale: 0.95, y: 20 };
    }
    
    if (mode === 'fade') {
      return { ...base };
    }

    // Default Slide
    return { 
      ...base,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    };
  };

  const variants = {
    hidden: getHiddenVariant(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // "Premium" ease-out
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};