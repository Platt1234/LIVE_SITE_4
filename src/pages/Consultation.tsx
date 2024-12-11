import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { ConsultationBackground } from '../components/consultation/ConsultationBackground';

export function Consultation() {
  return (
    <div className="min-h-screen pt-20 relative">
      <ConsultationBackground />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-sans font-bold text-gray-900 mb-2">
            Schedule a Consultation
          </h1>
          <p className="text-gray-600 mb-8 font-sans">
            Fill out the form below and our team will get back to you.
          </p>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}