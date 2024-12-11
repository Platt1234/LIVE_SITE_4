import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParallaxConfig {
  offset?: number;
  speed?: number;
}

export function useParallax({ offset = 50, speed = 0.5 }: ParallaxConfig = {}) {
  const [elementTop, setElementTop] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const element = document.documentElement;
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    };

    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const y = useTransform(
    scrollY,
    [elementTop - offset, elementTop + offset],
    [0, offset * speed]
  );

  return { y };
}