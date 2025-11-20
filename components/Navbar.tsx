
import React, { useState, useEffect } from 'react';
import { Menu, X } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, APP_NAME, LOGO_URL, LOGO_ALT, NAV_CONTENT } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    
    // Calculate scroll position before state updates to ensure accurate DOM reading
    let offsetPosition = 0;
    if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80; // Header height + buffer
            const elementPosition = element.getBoundingClientRect().top;
            offsetPosition = elementPosition + window.scrollY - headerOffset;
        }
    }

    // Close the menu
    setIsOpen(false);

    // Execute scroll with a tiny delay to ensure the menu close action doesn't interrupt the scroll on mobile
    setTimeout(() => {
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }, 10);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-dark-surface/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div 
              className="relative group cursor-pointer" 
              onClick={(e) => scrollToSection(e, '#')}
            >
              <div className="absolute -inset-1 bg-suica-green/30 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <img 
                src={LOGO_URL}
                alt={LOGO_ALT}
                className="w-10 h-10 relative rounded-xl object-cover shadow-sm" 
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-suica-green dark:hover:text-suica-green transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#download"
              onClick={(e) => scrollToSection(e, '#download')}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-transform active:scale-95 shadow-md"
            >
              {NAV_CONTENT.downloadBtn}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#download"
                  onClick={(e) => scrollToSection(e, '#download')}
                  className="block w-full text-center bg-suica-green text-white px-5 py-3 rounded-lg text-base font-semibold shadow-md active:scale-95 transition-transform"
                >
                  {NAV_CONTENT.mobileDownloadBtn}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
