import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenuOverlay } from './mobile/MobileMenuOverlay';
import { MobileMenuContent } from './mobile/MobileMenuContent';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onHomeClick: () => void;
  onConsultationClick?: () => void;
}

export function MobileMenu({ isOpen, onToggle, onHomeClick, onConsultationClick }: MobileMenuProps) {
  const { textColor } = useHeaderScroll();

  return (
    <>
      <button 
        onClick={onToggle}
        className="md:hidden p-2 -mr-2 z-50 relative"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        style={{ color: isOpen ? 'rgb(55, 65, 81)' : textColor }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <MobileMenuOverlay onClose={onToggle} />
            <MobileMenuContent 
              onHomeClick={onHomeClick}
              onConsultationClick={onConsultationClick}
              onClose={onToggle}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}