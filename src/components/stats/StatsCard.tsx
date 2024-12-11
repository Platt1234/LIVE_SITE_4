import React from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-primary-200">
        {label}
      </div>
    </div>
  );
}