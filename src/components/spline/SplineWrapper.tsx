import React, { Suspense, useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { SplineFallback } from './SplineFallback';
import { SimplifiedBackground } from './SimplifiedBackground';

interface SplineWrapperProps {
  scene: string;
  scale?: number;
  translateX?: string;
  brightness?: number;
  className?: string;
  mobileScale?: number;
  tabletScale?: number;
}

export function SplineWrapper({ 
  scene, 
  scale = 1,
  mobileScale = 1.5,
  tabletScale = 1.25,
  translateX = '0%',
  brightness = 1,
  className = ''
}: SplineWrapperProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const [shouldUseFallback, setShouldUseFallback] = useState(false);

  useEffect(() => {
    // Check device performance
    const checkPerformance = () => {
      if (isMobile || isTablet) {
        // Check if device has enough memory and cores
        if (navigator.deviceMemory && navigator.deviceMemory < 4) {
          return true;
        }
        
        // Check if device might be low-end
        if ('connection' in navigator) {
          const conn = (navigator as any).connection;
          if (conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === '3g') {
            return true;
          }
        }
      }
      return false;
    };

    setShouldUseFallback(checkPerformance());
  }, [isMobile, isTablet]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setError(true);
      }
    }, 8000); // Reduced timeout for better UX

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (error || shouldUseFallback) {
    return <SimplifiedBackground brightness={brightness} className={className} />;
  }

  const currentScale = isMobile ? mobileScale : (isTablet ? tabletScale : scale);

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{ 
        transform: `scale(${currentScale}) translateX(${translateX})`,
        transformOrigin: 'center',
        filter: `brightness(${brightness})`
      }}
    >
      <Suspense fallback={<SplineFallback />}>
        <Spline 
          scene={scene}
          style={{ width: '100%', height: '100%' }}
          onError={() => setError(true)}
          onLoad={() => setIsLoading(false)}
        />
      </Suspense>
    </div>
  );
}