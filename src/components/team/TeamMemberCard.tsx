import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export function TeamMemberCard({ name, title, image, bio }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized from -1 to 1)
    const rotateYAmount = -(e.clientX - centerX) / (rect.width / 2) * 2;
    const rotateXAmount = (e.clientY - centerY) / (rect.height / 2) * 2;
    
    // Limit rotation to a smaller range (-3 to 3 degrees)
    setRotateX(rotateXAmount * 1.5);
    setRotateY(rotateYAmount * 1.5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group perspective"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <div className="relative bg-white rounded-xl p-8 shadow-lg transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex flex-col items-center">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-primary-600/5 rounded-full blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <img
              src={image}
              alt={name}
              className="w-48 h-48 rounded-full object-cover shadow-md relative z-10"
            />
          </div>
          
          <div className="text-center max-w-md">
            <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
            <p className="text-primary-600 font-medium mt-1">{title}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}