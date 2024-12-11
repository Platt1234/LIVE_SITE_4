import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgressLine() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed left-0 w-full h-[100px] z-40 pointer-events-none"
      style={{
        top: '50%',
        y: '-50%'
      }}
    >
      <svg
        className="absolute h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,50 Q 400,0 800,50 Q 1200,100 1600,50 Q 2000,0 2400,50"
          fill="none"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="2"
          className="absolute"
          style={{
            pathLength: scaleX,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            transform: 'translateZ(0)',
          }}
        />
      </svg>
    </motion.div>
  );
}