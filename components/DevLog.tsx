
import React, { useState, useRef, useEffect } from 'react';
import { motion, PanInfo, useMotionValue, animate, useTransform, MotionValue } from 'framer-motion';
import { DEV_LOGS, DEV_LOG_CONTENT } from '../constants';
import { Calendar, Hash, ChevronLeft, ChevronRight } from 'lucide-react';

const GAP = 24;

// Pagination Constants (px) matching Tailwind classes
const PAGINATION_VISIBLE_WIDTH = 160;
const DOT_WIDTH = 6;        // w-1.5 (0.375rem)
const DOT_ACTIVE_WIDTH = 32; // w-8 (2rem)
const DOT_GAP = 8;          // gap-2 (0.5rem)

// Helper to get card width responsive to container
const getCardWidth = (containerWidth: number) => {
  if (containerWidth === 0) return 350; 
  return Math.min(350, containerWidth * 0.85);
};

interface DevLogCardProps {
  index: number;
  data: typeof DEV_LOGS[0];
  x: MotionValue<number>;
  snapPoint: number;
  totalCardWidth: number;
  width: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const DevLogCard: React.FC<DevLogCardProps> = ({ 
  index, 
  data, 
  x, 
  snapPoint, 
  totalCardWidth, 
  width, 
  activeIndex, 
  setActiveIndex 
}) => {
  // Framer Motion requires inputRange to be in ASCENDING order for correct interpolation.
  const inputRange = [snapPoint - totalCardWidth, snapPoint, snapPoint + totalCardWidth];
  
  // Continuous interpolation for visual properties based on position
  const scale = useTransform(x, inputRange, [0.92, 1, 0.92]);
  const opacity = useTransform(x, inputRange, [0.4, 1, 0.4]);
  const y = useTransform(x, inputRange, [15, 0, 15]);
  
  // Dynamic Z-Index
  const zIndex = useTransform(x, (currentX) => {
    const distance = Math.abs(currentX - snapPoint);
    return distance < (totalCardWidth / 2) ? 10 : 1;
  });

  const isLogicallyActive = index === activeIndex;

  return (
    <motion.div
      style={{ 
        width,
        scale,
        opacity,
        y,
        zIndex,
      }}
      onClick={() => setActiveIndex(index)}
      className={`
        flex-shrink-0 
        bg-gray-50 dark:bg-[#1E1E1E] 
        border border-gray-100 dark:border-gray-800 
        p-6 rounded-2xl 
        cursor-grab active:cursor-grabbing
        h-full min-h-[280px] flex flex-col
        transition-colors duration-300
        ${isLogicallyActive ? 'shadow-xl shadow-suica-green/5 border-suica-green/30' : 'hover:bg-gray-100 dark:hover:bg-[#252525]'}
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`flex items-center gap-2 text-xs font-mono px-2 py-1 rounded transition-colors ${isLogicallyActive ? 'text-suica-green bg-suica-green/10' : 'text-gray-400 bg-gray-200 dark:bg-gray-800'}`}>
          <Hash className="w-3 h-3" /> {data.number}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3 h-3" /> {data.date}
        </div>
      </div>
      <h3 className={`text-lg font-bold mb-3 transition-colors ${isLogicallyActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
        {data.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed flex-grow">
        {data.content}
      </p>
    </motion.div>
  );
};

const DevLog: React.FC = () => {
  if (!DEV_LOGS || DEV_LOGS.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const x = useMotionValue(0);
  const paginationX = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return;
      if (e.key === 'ArrowLeft') setActiveIndex(prev => Math.max(0, prev - 1));
      else if (e.key === 'ArrowRight') setActiveIndex(prev => Math.min(DEV_LOGS.length - 1, prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cardWidth = getCardWidth(containerWidth);
  const totalCardWidth = cardWidth + GAP;
  
  const calculateTargetX = (index: number) => {
      const centerOffset = containerWidth / 2;
      const cardCenter = cardWidth / 2;
      const activeCardPos = index * totalCardWidth;
      return containerWidth > 0 ? centerOffset - (activeCardPos + cardCenter) : 0;
  };

  // Animate to the active index
  useEffect(() => {
    const targetX = calculateTargetX(activeIndex);
    animate(x, targetX, {
        type: "spring",
        stiffness: 250, 
        damping: 30, 
        mass: 1
    });
  }, [activeIndex, containerWidth, cardWidth, x]);

  // Update Pagination Strip Position
  useEffect(() => {
    // Calculate total width of the dots track (constant regardless of which one is active)
    // Logic: (N-1) * small + 1 * large + (N-1) * gap
    const totalPaginationWidth = (DEV_LOGS.length - 1) * (DOT_WIDTH + DOT_GAP) + DOT_ACTIVE_WIDTH;
    const needsScroll = totalPaginationWidth > PAGINATION_VISIBLE_WIDTH;

    if (needsScroll) {
        // Distance to the left edge of the active dot
        // Before the active dot, there are `activeIndex` small dots and gaps.
        const activeDotStart = activeIndex * (DOT_WIDTH + DOT_GAP);
        // Center of active dot
        const activeDotCenter = activeDotStart + (DOT_ACTIVE_WIDTH / 2);
        
        // We want activeDotCenter to be at PAGINATION_VISIBLE_WIDTH / 2
        let targetPaginationX = (PAGINATION_VISIBLE_WIDTH / 2) - activeDotCenter;

        // Clamp
        // Max scroll (most negative) puts the end of the strip at the end of the view
        const minX = -(totalPaginationWidth - PAGINATION_VISIBLE_WIDTH);
        // Min scroll (0) puts start at start
        const maxX = 0;

        targetPaginationX = Math.max(minX, Math.min(maxX, targetPaginationX));

        animate(paginationX, targetPaginationX, { type: "spring", stiffness: 300, damping: 30 });
    } else {
        paginationX.set(0);
    }
  }, [activeIndex, paginationX]);

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { velocity, offset }: PanInfo) => {
    const currentX = x.get();
    const centerOffset = containerWidth / 2;
    const projectedX = currentX + velocity.x * 0.2;
    const estimatedIndex = (centerOffset - (cardWidth / 2) - projectedX) / totalCardWidth;
    
    let targetIndex = Math.round(estimatedIndex);
    targetIndex = Math.max(0, Math.min(targetIndex, DEV_LOGS.length - 1));

    if (targetIndex === activeIndex) {
        const targetX = calculateTargetX(targetIndex);
        animate(x, targetX, {
            type: "spring",
            stiffness: 250, 
            damping: 30, 
            mass: 1
        });
    } else {
        setActiveIndex(targetIndex);
    }
  };

  // Pagination Logic Helpers
  const totalPaginationWidth = (DEV_LOGS.length - 1) * (DOT_WIDTH + DOT_GAP) + DOT_ACTIVE_WIDTH;
  const needsScroll = totalPaginationWidth > PAGINATION_VISIBLE_WIDTH;

  return (
    <section id="dev-log" className="py-24 bg-white dark:bg-[#121212] overflow-hidden border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-between items-end">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {DEV_LOG_CONTENT.title}
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400">
                {DEV_LOG_CONTENT.description}
                </p>
            </div>
            {/* Desktop Arrow Controls */}
            <div className="hidden md:flex gap-2 pb-1">
                 <button 
                    onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                 >
                     <ChevronLeft className="w-5 h-5" />
                 </button>
                 <button 
                    onClick={() => setActiveIndex(Math.min(DEV_LOGS.length - 1, activeIndex + 1))}
                    disabled={activeIndex === DEV_LOGS.length - 1}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                 >
                     <ChevronRight className="w-5 h-5" />
                 </button>
            </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={containerRef} 
        className="relative w-full min-h-[340px] flex items-center"
        style={{ touchAction: 'pan-y' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white dark:from-[#121212] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white dark:from-[#121212] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex absolute left-0"
          style={{ x, gap: GAP }}
          drag="x"
          dragConstraints={{ 
            left: calculateTargetX(DEV_LOGS.length - 1) - 50, 
            right: calculateTargetX(0) + 50 
          }}
          onDragStart={() => x.stop()}
          onDragEnd={handleDragEnd}
        >
          {DEV_LOGS.map((log, index) => (
             <DevLogCard
                key={`${log.number}-${index}`}
                index={index}
                data={log}
                x={x}
                snapPoint={calculateTargetX(index)}
                totalCardWidth={totalCardWidth}
                width={cardWidth}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
             />
           ))}
        </motion.div>
      </div>

      {/* Scrollable Pagination Dots Strip */}
      <div className="mt-6 flex justify-center w-full">
          <div 
            className="relative overflow-hidden"
            style={{ 
                width: needsScroll ? PAGINATION_VISIBLE_WIDTH : 'auto',
                maskImage: needsScroll ? 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' : 'none',
                WebkitMaskImage: needsScroll ? 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' : 'none'
            }}
          >
             <motion.div 
                className="flex gap-2 py-2 items-center justify-center"
                style={{ 
                    x: needsScroll ? paginationX : 0,
                    width: 'max-content',
                    marginLeft: needsScroll ? 0 : 'auto',
                    marginRight: needsScroll ? 0 : 'auto'
                }}
             >
                {DEV_LOGS.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${i === activeIndex ? 'bg-suica-green w-8' : 'bg-gray-300 dark:bg-gray-700 w-1.5 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
             </motion.div>
          </div>
      </div>
    </section>
  );
};

export default DevLog;
