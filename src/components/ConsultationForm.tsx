import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  type: string;
  otherType: string;
  query: string;
}

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    type: '',
    otherType: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      toast.success('Your consultation request has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        type: '',
        otherType: '',
        query: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again later.';
      toast.error(errorMessage);
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 font-sans";
  const labelClasses = "block text-sm font-medium text-gray-700 font-sans";

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6 font-sans">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="type" className={labelClasses}>
            Type
          </label>
          <select
            id="type"
            required
            className={inputClasses}
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="">Select type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formData.type === 'other' && (
          <div>
            <label htmlFor="otherType" className={labelClasses}>
              Please specify
            </label>
            <input
              type="text"
              id="otherType"
              required
              className={inputClasses}
              value={formData.otherType}
              onChange={(e) => setFormData({ ...formData, otherType: e.target.value })}
            />
          </div>
        )}

        <div>
          <label htmlFor="query" className={labelClasses}>
            Query
          </label>
          <textarea
            id="query"
            required
            rows={4}
            className={inputClasses}
            value={formData.query}
            onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-semibold font-sans transition-all duration-200 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
        </button>
      </form>
    </>
  );
}