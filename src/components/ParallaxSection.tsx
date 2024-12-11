import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  speed?: number;
}

export function ParallaxSection({ 
  children, 
  className = '', 
  offset = 50,
  speed = 0.5 
}: ParallaxSectionProps) {
  const { y } = useParallax({ offset, speed });

  return (
    <motion.div
      style={{ y }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}