import { useState, useEffect, useMemo } from 'react';

export function useHeaderScroll() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  const headerStyles = useMemo(() => {
    const isScrolled = scrollY > 0;
    
    return {
      logoFilter: isScrolled ? 'none' : 'invert(1)',
      headerBackground: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      headerShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      textColor: isScrolled ? 'rgb(55, 65, 81)' : 'rgb(255, 255, 255)',
    };
  }, [scrollY]);

  return headerStyles;
}