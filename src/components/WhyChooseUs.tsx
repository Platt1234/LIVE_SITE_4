import React from 'react';
import { Scale, Target, Lightbulb, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Scale,
    title: "Data-Driven Approach",
    description: "Our decisions are backed by comprehensive market analysis and advanced analytics, ensuring optimal outcomes for every transaction."
  },
  {
    icon: Target,
    title: "Strategic Precision",
    description: "We combine industry expertise with tactical execution to maximize value and minimize risks in every deal."
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Our team develops creative strategies to overcome complex challenges and capture unique opportunities."
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description: "We maintain the highest standards of confidentiality and professional integrity throughout every engagement."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Expertise that delivers exceptional results in M&A advisory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-white p-6 rounded-lg shadow-sm">
                <Icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}