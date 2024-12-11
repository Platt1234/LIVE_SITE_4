import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
}