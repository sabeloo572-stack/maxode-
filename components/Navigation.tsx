import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Logo Component based on the uploaded image
const MaxodeLogo = ({ lightMode }: { lightMode: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="relative h-10 w-10 md:h-12 md:w-12 bg-maxode-primary flex items-center justify-center shadow-sm overflow-hidden rounded-lg transition-transform hover:scale-105">
      {/* The abstract 'M' */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-75 md:scale-100">
        <path d="M4 20L9 4L12 14L15 4L20 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* The Orange Stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-maxode-accent h-full"></div>
    </div>
    <div className="flex flex-col">
      <span className={`text-lg md:text-xl font-serif font-bold tracking-tight leading-none ${lightMode ? 'text-maxode-primary' : 'text-white'}`}>
        MAXODE
      </span>
      <span className={`text-[0.55rem] md:text-[0.6rem] tracking-widest font-sans font-semibold ${lightMode ? 'text-maxode-accent' : 'text-gray-300'}`}>
        TRADING & PROJECTS
      </span>
    </div>
  </div>
);

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Events', path: '/services' }, // Renamed per prompt
    { name: 'Gallery', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 relative hover:opacity-90 transition-opacity">
            <MaxodeLogo lightMode={isScrolled || mobileMenuOpen} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-maxode-accent ${
                  isScrolled ? 'text-gray-800' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-maxode-accent text-white font-semibold text-sm hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20"
            >
              Book Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 relative p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
               <X className="text-maxode-primary w-8 h-8" />
            ) : (
               <Menu className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                >
                  <Link 
                    to={link.path}
                    className="text-3xl font-serif font-bold text-gray-800 hover:text-maxode-primary flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-maxode-accent" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 border-t border-gray-100 mt-4"
              >
                <Link to="/contact" className="block w-full bg-maxode-primary text-white text-center py-4 rounded-2xl font-bold text-lg shadow-premium active:scale-95 transition-transform">
                  Book Your Event
                </Link>
                <div className="mt-8 text-center text-gray-500 text-sm">
                  <p>Contact us directly</p>
                  <a href="tel:+27110000000" className="text-maxode-primary font-bold text-lg">+27 11 000 0000</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};