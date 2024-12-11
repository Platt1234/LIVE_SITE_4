import React from 'react';
import { scrollToElement } from '../../utils/scroll';

interface HeroContentProps {
  onConsultationClick?: () => void;
}

export function HeroContent({ onConsultationClick }: HeroContentProps) {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full">
      <div className="flex flex-col justify-center h-full pt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-xl pl-0 sm:pl-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
          Where Ambition,<br />
          Meets Opportunity
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-lg pl-0 sm:pl-4 [text-shadow:_0_1px_12px_rgb(0_0_0_/_20%)]">
          Platteneye specialises in the proprietary sourcing of acquisition opportunities. 
          Utilising a high-touch approach for both buyers and sellers, we save time whilst uncovering exceptional opportunities.
        </p>

        <div className="mt-10 flex gap-4">
          <button 
            className="bg-white text-navy-900 px-8 py-3 rounded-md text-lg font-semibold"
            onClick={onConsultationClick}
          >
            Schedule Consultation
          </button>
          
          <button 
            className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold"
            onClick={() => scrollToElement('services')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}