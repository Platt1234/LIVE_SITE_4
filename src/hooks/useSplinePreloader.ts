import { useState, useEffect } from 'react';

export function useSplinePreloader(splineUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadSpline = async () => {
      try {
        const response = await fetch(splineUrl);
        if (response.ok) {
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Failed to preload Spline scene:', error);
        setIsLoaded(true); // Continue anyway to prevent blocking
      }
    };

    preloadSpline();
  }, [splineUrl]);

  return isLoaded;
}