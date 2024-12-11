import React from 'react';
import { SplineWrapper } from '../spline/SplineWrapper';

export function SplineBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <SplineWrapper 
        scene="https://prod.spline.design/5NjDI3dFnV56yxy8/scene.splinecode"
        scale={2}
        mobileScale={1.75}
        tabletScale={1.85}
        translateX="-8%"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}