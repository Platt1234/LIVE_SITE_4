import React from 'react';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { scrollToElement } from '../utils/scroll';

interface LogoProps {
  onHomeClick: () => void;
}

export function Logo({ onHomeClick }: LogoProps) {
  const { logoFilter } = useHeaderScroll();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onHomeClick();
    scrollToElement('home');
  };

  return (
    <a
      href="#home"
      className="flex items-center"
      onClick={handleClick}
    >
      <div className="relative w-[180px] sm:w-[250px] h-[54px] sm:h-[75px]">
        <img
          src="https://imgur.com/vdwqtPJ.png"
          alt="Platteneye Capital Logo"
          className="w-full h-full object-contain"
          style={{ 
            filter: logoFilter,
            willChange: 'filter'
          }}
        />
      </div>
    </a>
  );
}