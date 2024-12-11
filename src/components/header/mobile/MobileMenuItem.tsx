import React from 'react';
import { motion } from 'framer-motion';

interface MobileMenuItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function MobileMenuItem({ href, children, onClick }: MobileMenuItemProps) {
  return (
    <motion.a
      href={href}
      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md tracking-wider"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}