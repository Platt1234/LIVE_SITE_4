import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-navy-900 h-screen">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-navy-900/75"></div>
      </motion.div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-white font-bold max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Business Through Strategic M&A
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Platteneye Capital specializes in mergers and acquisitions advisory, helping businesses navigate complex transactions and achieve their strategic goals through data-driven insights and expert guidance.
          </motion.p>
          <motion.div
            className="mt-10 flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="bg-white text-navy-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}