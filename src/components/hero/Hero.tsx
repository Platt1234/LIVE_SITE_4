import React from 'react';
import { SplineBackground } from './SplineBackground';
import { HeroContent } from './HeroContent';

interface HeroProps {
  onConsultationClick?: () => void;
}

export function Hero({ onConsultationClick }: HeroProps) {
  return (
    <div className="relative h-screen overflow-hidden bg-primary-800">
      <SplineBackground />
      <div className="absolute inset-0 z-10">
        <HeroContent onConsultationClick={onConsultationClick} />
      </div>
    </div>
  );
}