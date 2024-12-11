import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
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