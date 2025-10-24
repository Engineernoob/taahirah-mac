'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useOSStore } from '../store/useOSStore';
import { useSound } from '../hooks/useSound';

export default function ShutdownScreen() {
  const setBootState = useOSStore(state => state.setBootState);
  const { playSound } = useSound();

  useEffect(() => {
    // Play shutdown sound
    playSound('shutdown');
    
    const timer = setTimeout(() => {
      // Loop back to boot state
      setBootState('booting');
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
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="mx-auto"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: 1, ease: "easeInOut" }}
          >
            <circle
              cx="40"
              cy="40"
              r="35"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <motion.path
              d="M 40 20 L 40 45 L 55 50"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.svg>
        </div>
        <h1 className="text-white text-xl mb-4 font-bold">Goodbye from Taahirah-OS</h1>
        <motion.div
          className="flex justify-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full opacity-25"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
