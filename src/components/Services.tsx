import React from 'react';
import { Search, ArrowUpRight, HandshakeIcon, ClipboardCheck } from 'lucide-react';
import { Card } from './Card';

const services = [
  {
    icon: Search,
    title: "Targeted Dataset Development",
    description: "We work closely with you to build a tailored dataset of businesses that align with your goals, ensuring you target only the most relevant opportunities."
  },
  {
    icon: ArrowUpRight,
    title: "Proprietary Outreach",
    description: "We use our exclusive datasets to reach out to businesses on your behalf, saving you time and connecting you with the best acquisition targets."
  },
  {
    icon: HandshakeIcon,
    title: "Capital Markets Support",
    description: "Leveraging our network, we assist in raising the right debt or equity, helping you secure the necessary funding to complete your acquisitions."
  },
  {
    icon: ClipboardCheck,
    title: "Deal Support & Advisory",
    description: "We provide expert deal support, from commercial due diligence to preparing information memorandums, using our insights to guide your acquisition decisions."
  }
];

export function Services() {
  return (
    <section id="services" className="pt-12 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}