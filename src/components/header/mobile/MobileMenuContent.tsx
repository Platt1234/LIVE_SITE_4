import React from 'react';
import { motion } from 'framer-motion';
import { MobileMenuItem } from './MobileMenuItem';

interface MobileMenuContentProps {
  onHomeClick: () => void;
  onConsultationClick?: () => void;
  onClose: () => void;
}

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT US', href: '#about-us' }
];

export function MobileMenuContent({ onHomeClick, onConsultationClick, onClose }: MobileMenuContentProps) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 md:hidden"
    >
      <nav className="flex flex-col h-full">
        <div className="px-4 py-6 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <MobileMenuItem
              key={item.label}
              href={item.href}
              onClick={() => {
                if (item.label === 'HOME') {
                  onHomeClick();
                }
                onClose();
              }}
            >
              {item.label}
            </MobileMenuItem>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <button 
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium tracking-wider"
            onClick={() => {
              onConsultationClick?.();
              onClose();
            }}
          >
            SCHEDULE CONSULTATION
          </button>
        </div>
      </nav>
    </motion.div>
  );
}