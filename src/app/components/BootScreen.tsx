'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useOSStore } from '../store/useOSStore';
import { useSound } from '../hooks/useSound';

export default function BootScreen() {
  const setBootState = useOSStore(state => state.setBootState);
  const { playSound } = useSound();

  useEffect(() => {
    // Play boot sound
    playSound('boot');
    
    const timer = setTimeout(() => {
      setBootState('desktop');
    }, 3000);

    return () => clearTimeout(timer);
  }, [setBootState, playSound]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="mb-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
            <motion.rect
              x="10"
              y="10"
              width="100"
              height="100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="35"
              cy="35"
              r="8"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            />
            <motion.circle
              cx="85"
              cy="35"
              r="8"
              fill="white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            <motion.rect
              x="42"
              y="75"
              width="36"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            />
          </svg>
        </div>
        <h1 className="text-white text-2xl mb-4 font-bold">Welcome to Taahirah-OS</h1>
        <motion.div
          className="flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
