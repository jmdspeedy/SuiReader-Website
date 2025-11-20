
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_SPECS, HOW_IT_WORKS_CONTENT } from '../constants';

// Move map outside to avoid recreation on render
const COLOR_MAP: Record<string, string> = {
    "blue": "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    "purple": "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    "green": "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-[#161616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-suica-green uppercase tracking-widest mb-2">{HOW_IT_WORKS_CONTENT.sectionTitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {HOW_IT_WORKS_CONTENT.mainTitle}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {HOW_IT_WORKS_CONTENT.description}
            </p>

            <div className="space-y-6">
              {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${COLOR_MAP[step.colorClass] || COLOR_MAP["blue"]}`}>
                    {step.icon}
                    </div>
                    <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-12 lg:mt-0"
          >
            <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transform-gpu">
              <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-gray-500">{HOW_IT_WORKS_CONTENT.techSpecsTitle}</span>
              </div>
              <div className="p-6 font-mono text-sm">
                {/* Changed from table to flex-col for better responsiveness on mobile */}
                <div className="flex flex-col gap-4">
                  {TECH_SPECS.map((spec) => (
                    <div key={spec.label} className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mb-1 sm:mb-0 font-semibold sm:font-normal shrink-0">{spec.label}</span>
                      <span className="text-gray-900 dark:text-gray-200 font-medium text-sm sm:text-right break-all sm:break-normal">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gray-900 rounded-lg text-gray-300 text-xs overflow-x-auto shadow-inner border border-gray-800">
                  {HOW_IT_WORKS_CONTENT.codeSnippet}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
