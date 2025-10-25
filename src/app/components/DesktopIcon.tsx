"use client";

import { motion } from "framer-motion";
import { useOSStore } from "../store/useOSStore";

interface DesktopIconProps {
  id: string;
  title: string;
  iconId: string;
  position: { x: number | string; y: number | string };
  windowTitle: string;
  style?: React.CSSProperties
}

export default function DesktopIcon({
  id,
  title,
  iconId,
  position,
  windowTitle,
  style,
}: DesktopIconProps) {
  const { openWindow, activeWindow } = useOSStore();

  const handleDoubleClick = () => {
    const windowX = typeof position.x === "string" ? 100 : position.x + 20;
    const windowY = typeof position.y === "string" ? 100 : position.y + 20;
    openWindow(id, windowTitle, { x: windowX, y: windowY });
  };

  const isActive = activeWindow === id;

  return (
    <motion.div
      className={`absolute flex flex-col items-center justify-center select-none cursor-pointer transition-all ${
        isActive
          ? "bg-[#dcdcdc] border border-black"
          : "hover:bg-[#e5e5e5] hover:border hover:border-black"
      }`}
      style={{
        left: typeof position.x === "string" ? position.x : position.x + "px",
        top: typeof position.y === "string" ? position.y : position.y + "px",
        transform:
          typeof position.x === "string" ? "translate(-50%, -50%)" : "none",
        width: 80,
        height: 80,
        boxShadow: isActive ? "inset 1px 1px #000" : "1px 1px #aaa",
        backgroundColor: isActive ? "#f2f2f2" : "transparent",
        ...style,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onDoubleClick={handleDoubleClick}
    >
      {/* Monochrome pixel icon */}
      <svg
        width="28"
        height="28"
        className="mb-1"
        style={{
          imageRendering: "pixelated",
          filter: "grayscale(100%) contrast(1.2)",
        }}
      >
        <use href={`/icons/macintosh-icons.svg#${iconId}`} />
      </svg>

      {/* Title text styled like classic Mac */}
      <div
        className="text-center text-[9px] mt-1"
        style={{
          fontFamily: '"Chicago", "Geneva", "Monaco", sans-serif',
          color: isActive ? "#fff" : "#000",
          backgroundColor: isActive ? "#000" : "transparent",
          padding: "0 2px",
        }}
      >
        {title}
      </div>
    </motion.div>
  );
}
