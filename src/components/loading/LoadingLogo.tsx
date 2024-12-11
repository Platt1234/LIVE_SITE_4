import React from 'react';

export function LoadingLogo() {
  return (
    <div className="w-[300px] sm:w-[400px] h-[120px] relative">
      <img
        src="https://imgur.com/vdwqtPJ.png"
        alt="Platteneye Capital Logo"
        className="w-full h-full object-contain"
        style={{ filter: 'invert(1)' }}
      />
    </div>
  );
}