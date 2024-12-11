import React from 'react';

interface TimelineItemProps {
  stage: string;
  description: string;
  duration: string;
}

export function TimelineItem({ stage, description, duration }: TimelineItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">{stage}</h3>
          <span className="text-sm font-medium text-primary-600 ml-4 whitespace-nowrap">{duration}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}