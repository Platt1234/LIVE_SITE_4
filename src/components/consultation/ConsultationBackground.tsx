import React from 'react';
import { SplineWrapper } from '../spline/SplineWrapper';

export function ConsultationBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black">
      <SplineWrapper 
        scene="https://prod.spline.design/k-TN5Um7zLIgezS7/scene.splinecode"
        scale={1.15}
        brightness={1.2}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}