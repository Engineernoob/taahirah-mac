"use client";

import { motion } from "framer-motion";
import { useOSStore } from "../store/useOSStore";
import { useSound } from "../hooks/useSound";

interface DesktopIconProps {
  id: string;
  title: string;
  iconId: string;
  position: { x: number | string; y: number | string };
  windowTitle: string;
}

export default function DesktopIcon({
  id,
  title,
  iconId,
  position,
  windowTitle,
}: DesktopIconProps) {
  const { openWindow, activeWindow } = useOSStore();
  const { playSound } = useSound();

  const handleDoubleClick = () => {
    playSound("click");
    const windowX = typeof position.x === "string" ? 100 : position.x + 20;
    const windowY = typeof position.y === "string" ? 100 : position.y + 20;
    openWindow(id, windowTitle, { x: windowX, y: windowY });
  };

  const isActive = activeWindow === id;

  return (
    <motion.div
      className={`absolute flex flex-col items-center cursor-pointer select-none ${
        isActive ? "bg-black bg-opacity-10" : "hover:bg-black hover:bg-opacity-5"
      }`}
      style={{
        left: typeof position.x === "string" ? position.x : position.x + "px",
        top: typeof position.y === "string" ? position.y : position.y + "px",
        transform:
          typeof position.x === "string" ? "translate(-50%, -50%)" : "none",
        width: 80,
        height: 80,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onDoubleClick={handleDoubleClick}
    >
      <svg
        width="32"
        height="32"
        className="mb-1"
        style={{
          imageRendering: "pixelated",
        }}
      >
        <use href={`/icons/macintosh-icons.svg#${iconId}`} />
      </svg>
      <div className="text-[10px] leading-tight text-center font-[w95font] text-black">
        {title}
      </div>
    </motion.div>
  );
}
