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
      className="fixed inset-0 bg-white flex flex-col items-center justify-center border-4 border-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="128"
        height="128"
        viewBox="0 0 64 64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="mb-6"
      >
        <rect width="64" height="64" fill="white" />
        <g fill="black">
          {/* Sad Mac face outline */}
          <rect x="8" y="8" width="48" height="48" stroke="black" strokeWidth="2" fill="none" />
          {/* Eyes */}
          <rect x="18" y="22" width="6" height="6" />
          <rect x="40" y="22" width="6" height="6" />
          {/* Mouth */}
          <rect x="20" y="42" width="24" height="4" />
          <rect x="20" y="46" width="6" height="2" />
          <rect x="38" y="46" width="6" height="2" />
          {/* Nose */}
          <rect x="30" y="34" width="4" height="4" />
          {/* Eyebrows */}
          <rect x="16" y="18" width="10" height="2" />
          <rect x="38" y="18" width="10" height="2" />
        </g>
      </motion.svg>
      <motion.p
        className="text-black text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        Taahirah-OS is shutting down…
      </motion.p>
    </motion.div>
  );
}
