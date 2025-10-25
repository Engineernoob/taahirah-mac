"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useOSStore } from "../store/useOSStore";
import { useSound } from "../hooks/useSound";

export default function BootScreen() {
  const setBootState = useOSStore((state) => state.setBootState);
  const { playSound } = useSound();

  useEffect(() => {
    // Play boot sound
    playSound("boot");

    const timer = setTimeout(() => {
      setBootState("desktop");
    }, 3000);

    return () => clearTimeout(timer);
  }, [setBootState, playSound]);

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center border-8 border-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          className="mx-auto"
          shapeRendering="crispEdges"
        >
          <rect x="0" y="0" width="64" height="64" fill="white" />
          {/* Eyes */}
          <rect x="18" y="22" width="6" height="6" fill="black" />
          <rect x="40" y="22" width="6" height="6" fill="black" />
          {/* Mouth */}
          <rect x="22" y="40" width="20" height="4" fill="black" />
          {/* Face outline */}
          <rect x="14" y="14" width="36" height="36" fill="none" stroke="black" strokeWidth="2" />
          {/* Nose */}
          <rect x="30" y="30" width="4" height="6" fill="black" />
        </svg>
      </motion.div>
      <motion.h1
        className="text-black text-2xl mt-6 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.5 }}
      >
        Welcome to Taahirah‑OS
      </motion.h1>
    </motion.div>
  );
}
