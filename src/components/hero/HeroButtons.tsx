import React from 'react';
import { motion } from 'framer-motion';

export function HeroButtons() {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="mt-10 flex gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <motion.button
        className="bg-white text-navy-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Schedule Consultation
      </motion.button>
      
      <motion.button
        className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
}