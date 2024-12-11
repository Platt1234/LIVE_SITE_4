import React from 'react';

export function SplineFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-primary-900 to-primary-800">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>
    </div>
  );
}