import React from 'react';
import { motion } from 'framer-motion';

interface MobileMenuOverlayProps {
  onClose: () => void;
}

export function MobileMenuOverlay({ onClose }: MobileMenuOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      onClick={onClose}
    />
  );
}