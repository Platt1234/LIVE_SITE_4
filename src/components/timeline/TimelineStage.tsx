import React from 'react';

interface TimelineStageProps {
  stage: string;
  description: string;
  duration: string;
}

export function TimelineStage({ stage, description, duration }: TimelineStageProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{stage}</h3>
          <span className="text-sm font-medium text-primary-600 whitespace-nowrap">{duration}</span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}