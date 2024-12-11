import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="w-[300px] sm:w-[400px] h-[120px] relative">
        <img
          src="https://imgur.com/vdwqtPJ.png"
          alt="Platteneye Capital Logo"
          className="w-full h-full object-contain"
          style={{ filter: 'invert(1)' }}
        />
      </div>
    </div>
  );
}