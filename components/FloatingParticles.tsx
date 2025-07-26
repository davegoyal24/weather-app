'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingParticles() {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          initial={{ 
            x: Math.random() * dimensions.width, 
            y: dimensions.height + 10 
          }}
          animate={{
            y: -10,
            x: Math.random() * dimensions.width,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}