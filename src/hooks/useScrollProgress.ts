import { useScroll, useTransform } from 'framer-motion';

interface ScrollProgressConfig {
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export function useScrollProgress({ 
  inputRange = [0, 100],
  outputRange = [0, 1]
}: ScrollProgressConfig = {}) {
  const { scrollY } = useScroll();
  
  return useTransform(scrollY, inputRange, outputRange);
}