import React from 'react';
import { Container } from '../layout/Container';
import { TimelineStage } from './TimelineStage';

const stages = [
  {
    stage: "Initial Consultation",
    duration: "Week 1",
    description: "We begin by discussing your goals and determining if we're the right fit for your needs. Together, we negotiate the terms and agree on the best strategy moving forward."
  },
  {
    stage: "Dataset Development",
    duration: "Weeks 2-3",
    description: "We develop a tailored dataset of businesses that align with the goals discussed in Stage 1, ensuring that the opportunities we target are a perfect match for your acquisition strategy."
  },
  {
    stage: "Proprietary Outreach",
    duration: "Weeks 4-8",
    description: "Using our custom dataset, we initiate targeted outreach to the selected businesses, connecting you with the best acquisition prospects and saving you valuable time."
  },
  {
    stage: "Acquisition Support",
    duration: "Weeks 6+",
    description: "We provide ongoing support as you move towards closing the deal, offering expert assistance with due diligence, negotiations, and any other needs that arise during the acquisition process."
  }
];

export function TimelineSection() {
  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">A Typical Partnership Journey</h2>
          <p className="mt-4 text-lg text-gray-600">
            Most of our clients follow this structured, efficient path to success, ensuring a smooth acquisition process from start to finish.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {stages.map((stage) => (
              <TimelineStage
                key={stage.stage}
                {...stage}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}