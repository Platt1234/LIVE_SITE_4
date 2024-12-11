import React from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';

interface HeaderCTAProps {
  onClick?: () => void;
}

export function HeaderCTA({ onClick }: HeaderCTAProps) {
  const { textColor } = useHeaderScroll();
  const isScrolled = textColor === 'rgb(55, 65, 81)';

  return (
    <div className="hidden md:block">
      <button 
        className="px-6 py-2 rounded-md"
        style={{ 
          backgroundColor: isScrolled ? 'rgb(16, 24, 39)' : 'rgba(255, 255, 255, 0.1)',
          color: 'white'
        }}
        onClick={onClick}
      >
        Schedule Consultation
      </button>
    </div>
  );
}