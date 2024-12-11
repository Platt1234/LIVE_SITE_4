import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { HeaderNav } from './header/HeaderNav';
import { HeaderCTA } from './header/HeaderCTA';
import { MobileMenu } from './header/MobileMenu';
import { useHeaderScroll } from '../hooks/useHeaderScroll';

interface HeaderProps {
  onHomeClick: () => void;
  onConsultationClick?: () => void;
}

export function Header({ onHomeClick, onConsultationClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { headerBackground, headerShadow } = useHeaderScroll();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed w-full z-50 px-2 sm:px-4 pt-2 sm:pt-4">
      <header
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden"
        style={{
          backgroundColor: headerBackground,
          boxShadow: headerShadow,
          willChange: 'background-color, box-shadow',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className="relative px-3 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Logo onHomeClick={onHomeClick} />
            <HeaderNav onHomeClick={onHomeClick} />
            <div className="flex items-center space-x-4">
              <HeaderCTA onClick={onConsultationClick} />
              <MobileMenu 
                isOpen={isMenuOpen} 
                onToggle={() => setIsMenuOpen(!isMenuOpen)}
                onHomeClick={onHomeClick}
                onConsultationClick={onConsultationClick}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}