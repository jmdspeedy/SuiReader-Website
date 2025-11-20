import React from 'react';
import { APP_NAME, LOGO_URL, LOGO_ALT, FOOTER_CONTENT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-dark-surface py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL}
            alt={LOGO_ALT}
            className="w-8 h-8 opacity-90 grayscale-[0.2] rounded-lg" 
          />
          <div className="text-center md:text-left">
            <div className="font-bold text-xl text-gray-900 dark:text-white">{APP_NAME}</div>
            <p className="text-sm text-gray-500">{FOOTER_CONTENT.copyright}</p>
          </div>
        </div>
        
        <div className="flex gap-8">
          {FOOTER_CONTENT.links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-sm text-gray-500 hover:text-suica-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;