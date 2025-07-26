'use client';

import { motion } from 'framer-motion';

export default function LoadingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl shadow-2xl p-8 bg-gradient-to-br from-gray-200 to-gray-300"
    >
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-400/30 rounded mb-2"></div>
          <div className="h-5 w-24 bg-gray-400/30 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-400/30 rounded-full animate-pulse"></div>
            <div className="mt-4 space-y-2">
              <div className="h-12 w-24 bg-gray-400/30 rounded mx-auto"></div>
              <div className="h-5 w-32 bg-gray-400/30 rounded"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-400/20 rounded-xl p-4 animate-pulse">
                <div className="h-4 w-16 bg-gray-400/30 rounded mb-2"></div>
                <div className="h-6 w-12 bg-gray-400/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}