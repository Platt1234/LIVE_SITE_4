import React from 'react';

interface TimelineDotProps {
  isLast?: boolean;
}

export function TimelineDot({ isLast = false }: TimelineDotProps) {
  return (
    <div className="relative flex-shrink-0">
      <div className="w-4 h-4 rounded-full bg-primary-600" />
      {!isLast && (
        <div className="absolute top-4 left-1/2 w-0.5 h-full -translate-x-1/2 bg-primary-200" />
      )}
    </div>
  );
}