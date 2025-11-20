
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CTA_CONTENT } from '../constants';

const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-suica-green text-white shadow-2xl"
        >
            {/* Background patterns */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl"></div>

            <div className="relative z-10 px-8 py-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{CTA_CONTENT.title}</h2>
              <p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                {CTA_CONTENT.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-suica-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                  {CTA_CONTENT.googlePlayBtn}
                </button>

                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
                  {CTA_CONTENT.donateBtn}
                </button>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;
