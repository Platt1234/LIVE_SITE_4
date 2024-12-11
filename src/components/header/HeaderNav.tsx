import React, { memo } from 'react';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { scrollToElement } from '../../utils/scroll';

interface HeaderNavProps {
  onHomeClick: () => void;
}

const navItems = ['HOME', 'SERVICES', 'ABOUT US'];

export const HeaderNav = memo(function HeaderNav({ onHomeClick }: HeaderNavProps) {
  const { textColor } = useHeaderScroll();

  const handleClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    if (item === 'HOME') {
      onHomeClick();
      scrollToElement('home');
    } else {
      scrollToElement(item.toLowerCase().replace(' ', '-'));
    }
  };

  return (
    <nav className="hidden md:flex space-x-20">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(' ', '-')}`}
          className="text-sm tracking-widest"
          style={{ color: textColor }}
          onClick={(e) => handleClick(e, item)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
});