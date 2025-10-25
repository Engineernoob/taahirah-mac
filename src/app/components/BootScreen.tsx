"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useOSStore } from "../store/useOSStore";
import { useSound } from "../hooks/useSound";

export default function BootScreen() {
  const setBootState = useOSStore((state) => state.setBootState);
  const { playSound } = useSound();
  const controls = useAnimation();

  useEffect(() => {
    // Play boot sound
    playSound("boot");

    // Start flicker animation
    controls.start({
      opacity: [0, 1, 0.8, 1, 0.9, 1],
      transition: { duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
    });

    const timer = setTimeout(() => {
      setBootState("desktop");
    }, 3000);

    return () => clearTimeout(timer);
  }, [setBootState, playSound, controls]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      style={{
        backgroundColor: "#BFBFBF",
        borderTop: "2px solid white",
        borderLeft: "2px solid white",
        borderBottom: "2px solid black",
        borderRight: "2px solid black",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Scanline overlay */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 1px, transparent 1px, transparent 3px)",
          zIndex: 1,
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 64 64"
          shapeRendering="crispEdges"
          style={{ imageRendering: "pixelated" }}
        >
          <rect x="0" y="0" width="64" height="64" fill="#BFBFBF" />
          {/* Face outline with thicker stroke */}
          <rect
            x="13"
            y="13"
            width="38"
            height="38"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
          {/* Eyes */}
          <rect x="18" y="22" width="7" height="7" fill="black" />
          <rect x="39" y="22" width="7" height="7" fill="black" />
          {/* Nose */}
          <rect x="30" y="30" width="5" height="7" fill="black" />
          {/* Mouth */}
          <rect x="22" y="40" width="20" height="5" fill="black" />
        </svg>
        <h1
          style={{
            fontFamily: "Chicago, monospace, sans-serif",
            fontWeight: "bold",
            fontSize: "14px",
            color: "black",
            marginTop: "12px",
            userSelect: "none",
          }}
        >
          Welcome to Taahirah‑OS
        </h1>
        <p
          style={{
            fontFamily: "Chicago, monospace, sans-serif",
            fontSize: "12px",
            color: "black",
            marginTop: "4px",
            userSelect: "none",
          }}
        >
          © Taahirah Denmark 2025
        </p>
      </motion.div>
    </motion.div>
  );
}
