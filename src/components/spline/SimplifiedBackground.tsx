import React from 'react';
import { motion } from 'framer-motion';

interface SimplifiedBackgroundProps {
  brightness?: number;
  className?: string;
}

export function SimplifiedBackground({ brightness = 1, className = '' }: SimplifiedBackgroundProps) {
  return (
    <motion.div 
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ filter: `brightness(${brightness})` }}
    >
      <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-full h-full"
            animate={{
              background: [
                'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 25% 35%, rgba(255,255,255,0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-full h-full"
            animate={{
              background: [
                'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 75% 65%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}