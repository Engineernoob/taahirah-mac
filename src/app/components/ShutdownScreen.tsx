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
      className="fixed inset-0 bg-[#BFBFBF] flex flex-col items-center justify-center border-t-4 border-l-4 border-white border-b-4 border-r-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <svg
        width="128"
        height="128"
        viewBox="0 0 64 64"
        className="mb-6"
        shapeRendering="crispEdges"
      >
        <rect x="0" y="0" width="64" height="64" fill="#BFBFBF" stroke="black" strokeWidth="4" />
        {/* Face outline */}
        <rect x="4" y="4" width="56" height="56" fill="#BFBFBF" stroke="black" strokeWidth="4" />
        {/* Eyes */}
        <rect x="18" y="20" width="8" height="8" fill="black" />
        <rect x="38" y="20" width="8" height="8" fill="black" />
        {/* Mouth - simple black bar */}
        <rect x="18" y="44" width="28" height="6" fill="black" />
      </svg>
      {/* Scanline overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 2px, transparent 3px)',
          zIndex: 10,
        }}
      />
      <motion.p
        className="text-black font-bold"
        style={{ fontFamily: '"Chicago", sans-serif', fontSize: '12px', zIndex: 20 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        It is now safe to turn off your computer.
      </motion.p>
    </motion.div>
  );
}
