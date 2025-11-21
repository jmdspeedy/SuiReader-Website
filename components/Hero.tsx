
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Wallet } from './Icons';
import { HERO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-surface">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-suica-green/20 rounded-full blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-suica-green/10 text-suica-green text-sm font-medium mb-6 border border-suica-green/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-suica-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-suica-green"></span>
              </span>
              {HERO_CONTENT.badge}
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {HERO_CONTENT.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-justify">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(0, 194, 101, 0)", "0 0 0 10px rgba(0, 194, 101, 0)"] 
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                className="relative flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-transform overflow-hidden group"
              >
                 {/* Shine Effect */}
                 <motion.div
                  className="absolute top-0 left-0 w-12 h-full bg-white/30 -skew-x-12 z-0"
                  initial={{ x: -150 }}
                  animate={{ x: 400 }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 3,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10 flex items-center gap-3">
                    <Download className="w-5 h-5" />
                    {HERO_CONTENT.googlePlayBtn}
                </div>
              </motion.button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 dark:text-gray-500 text-sm font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div>{HERO_CONTENT.features[0]}</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div>{HERO_CONTENT.features[1]}</div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              <div>{HERO_CONTENT.features[2]}</div>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-[280px] sm:w-[300px] mx-auto perspective-1000">
              {/* Card floating effect */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 bg-black rounded-[3rem] border-[8px] border-gray-900 dark:border-gray-800 shadow-2xl overflow-hidden aspect-[9/19]"
              >
                {/* Mockup Screen - Dark App Theme */}
                <div className="h-full w-full bg-[#0B1026] flex flex-col relative font-sans">
                   
                   {/* Status Bar */}
                   <div className="h-8 w-full flex justify-between items-center px-6 pt-3 z-20">
                     <div className="text-[10px] font-bold text-white/80">{HERO_CONTENT.mockup.time}</div>
                     <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-white/80"></div>
                        <div className="w-3 h-3 rounded-full bg-white/80"></div>
                     </div>
                   </div>

                   {/* Content Container */}
                   <div className="flex-1 p-5 flex flex-col gap-6">
                      
                      {/* Suica Card Visual - Clean Version */}
                      <div className="w-full aspect-[1.58/1] rounded-2xl bg-gradient-to-br from-[#a3e635] to-[#10b981] p-5 relative shadow-lg overflow-hidden group">
                          <div className="relative z-10 h-full flex flex-col justify-between">
                              <div className="text-white/90 font-medium text-sm drop-shadow-md">{HERO_CONTENT.mockup.cardName}</div>
                              <div className="flex flex-col">
                                <div className="text-white font-bold text-4xl tracking-tight drop-shadow-md">{HERO_CONTENT.mockup.balance}</div>
                              </div>
                          </div>
                      </div>

                      {/* History Section */}
                      <div className="flex-1 flex flex-col gap-4">
                          <div className="flex justify-between items-end px-1">
                              <h3 className="text-xl font-medium text-gray-100">{HERO_CONTENT.mockup.historyTitle}</h3>
                              <div className="flex gap-4 opacity-70 text-gray-300">
                                  <Wallet className="w-5 h-5 cursor-pointer hover:text-white" />
                                  <Download className="w-5 h-5 cursor-pointer hover:text-white" />
                              </div>
                          </div>

                          {/* List Items */}
                          <div className="flex flex-col gap-3 overflow-hidden relative mask-linear-fade">
                              {HERO_CONTENT.mockup.transactions.map((item, i) => (
                                  <div key={i} className="bg-[#1C2337] p-3.5 rounded-2xl flex items-center justify-between border border-white/5 shadow-sm">
                                      <div className="flex items-center gap-3">
                                          <div className="text-gray-400">
                                              <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10">
                                                  <span className="text-lg">🚇</span>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="text-[10px] text-gray-400 mb-0.5">{item.date}</div>
                                              <div className="text-[10px] sm:text-xs font-bold text-white tracking-wide">{item.from} → {item.to}</div>
                                          </div>
                                      </div>
                                      <div className="text-right">
                                          <div className="text-[10px] text-gray-400">¥ {item.bal.toLocaleString()}</div>
                                          <div className="font-bold text-white text-sm">- ¥ {item.cost}</div>
                                      </div>
                                  </div>
                              ))}
                               {/* Gradient fade at bottom of list */}
                               <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0B1026] to-transparent pointer-events-none"></div>
                          </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[60%] border border-suica-green/20 rounded-full -rotate-6 z-10 pointer-events-none" />
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-emerald-500/30 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
