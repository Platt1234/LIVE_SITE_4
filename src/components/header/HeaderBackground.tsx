import React from 'react';
import { motion } from 'framer-motion';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

export function HeaderBackground() {
  const { headerBackground, headerShadow } = useHeaderScroll();

  return (
    <motion.div
      className="absolute inset-0 backdrop-blur-sm transition-all duration-200"
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        willChange: 'background-color, box-shadow'
      }}
    />
  );
}