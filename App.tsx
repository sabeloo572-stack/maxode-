import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { Portfolio } from './pages/Portfolio';
import { ContactPage } from './pages/ContactPage';
import { About } from './pages/About';
import { MessageCircle } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/27110000000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="white" className="text-white" />
  </a>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-gray-900 antialiased selection:bg-maxode-accent selection:text-white">
        <Navigation />
        
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <AIChat />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
};

export default App;