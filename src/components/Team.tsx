import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { TeamMemberCard } from './team/TeamMemberCard';

const team = [
  {
    name: "Joseph Mann",
    title: "Co-Founder",
    image: "https://imgur.com/MXf29yJ.jpg",
    bio: "Joseph brings experience in investment management, M&A, and management consultancy. He's managed portfolios, raised capital, and led transactions, applying analytical and innovative thinking to drive client value."
  },
  {
    name: "Daniel Ewart",
    title: "Co-Founder",
    image: "https://imgur.com/jUzvzwf.jpg",
    bio: "Daniel has end-to-end search fund and SME private equity expertise, covering deal sourcing, financial analysis, fundraising, and legal structuring. He uses this insight to support clients toward their goals."
  }
];

export function Team() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced professionals combining strategic insight with technical expertise
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}