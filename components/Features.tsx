
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES, FEATURES_CONTENT } from '../constants';
import { Sparkles } from './Icons';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {FEATURES_CONTENT.title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            {FEATURES_CONTENT.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-3xl border transition-all duration-50 group
                ${feature.isPremium 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 border-transparent text-white shadow-xl' 
                  : 'bg-gray-50 dark:bg-dark-surface border-gray-100 dark:border-gray-800 hover:border-suica-green/30 hover:shadow-lg'
                }`}
            >
              {feature.isPremium && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                    <Sparkles className="w-3 h-3" /> {FEATURES_CONTENT.premiumLabel}
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-50
                ${feature.isPremium ? 'bg-white/10 backdrop-blur-sm' : 'bg-white dark:bg-gray-700 shadow-sm'}`}>
                {feature.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-3 ${feature.isPremium ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {feature.title}
              </h3>
              
              <p className={`leading-relaxed ${feature.isPremium ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
