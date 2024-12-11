import React from 'react';
import { StatsCard } from './stats/StatsCard';

const stats = [
  { value: "$100M+", label: "Transaction Experience" },
  { value: "40 Days", label: "Average Source Time" },
  { value: "100%", label: "Client Satisfaction" }
];

export function Stats() {
  return (
    <section className="relative bg-primary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}