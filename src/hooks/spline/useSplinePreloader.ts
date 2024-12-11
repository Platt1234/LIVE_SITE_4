import { useState, useEffect } from 'react';
import { preloadSplineScene } from '../../utils/spline/preloader';

export function useSplinePreloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadSpline = async () => {
      const success = await preloadSplineScene();
      setIsLoaded(success);
    };

    loadSpline();
  }, []);

  return isLoaded;
}