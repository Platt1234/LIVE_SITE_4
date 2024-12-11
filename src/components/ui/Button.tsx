import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-md transition-all duration-200 font-medium';
  const variants = {
    primary: 'bg-navy-600 text-white hover:bg-navy-700 shadow-sm hover:shadow-md',
    secondary: 'border-2 border-navy-600 text-navy-600 hover:bg-navy-50'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}