import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    quote: "Platteneye's approach to sourcing opportunities was exceptional. Their team's dedication and expertise helped us find the perfect acquisition target.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechVentures Global"
  },
  {
    quote: "The team's deep understanding of the market and their data-driven approach gave us confidence throughout the entire acquisition process.",
    author: "Sarah Thompson",
    role: "Managing Director",
    company: "Thompson Capital Partners"
  },
  {
    quote: "Their proprietary dataset and high-touch approach saved us valuable time and connected us with opportunities we wouldn't have found otherwise.",
    author: "James Wilson",
    role: "Partner",
    company: "Wilson & Associates"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our satisfied clients about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}