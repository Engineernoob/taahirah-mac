"use client";

import { motion, PanInfo } from "framer-motion";
import { useRef, useState } from "react";
import { useOSStore } from "../store/useOSStore";

interface WindowProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  style?: React.CSSProperties;
  preventOverlapWithMenubar?: boolean;
}

export default function Window({
  id,
  title,
  icon,
  children,
  style = {},
}: WindowProps) {
  const {
    windows,
    activeWindow,
    closeWindow,
    minimizeWindow,
    updateWindowPosition,
    setActiveWindow,
    bringToFront,
  } = useOSStore();

  const windowData = windows.find((w) => w.id === id);
  const [isResizing, setIsResizing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  if (!windowData) return null;

  const isActive = activeWindow === id;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    updateWindowPosition(
      id,
      windowData.position.x + info.offset.x,
      windowData.position.y + info.offset.y
    );
  };

  const handleWindowClick = () => {
    bringToFront(id);
    setActiveWindow(id);
  };

  const handleClose = () => closeWindow(id);
  const handleMinimize = () => minimizeWindow(id);

  return (
    <motion.div
      ref={windowRef}
      className="absolute bg-mac-gray select-none"
      style={{
        ...style,
        width: windowData.size.width,
        height: windowData.size.height,
        x: windowData.position.x,
        y: windowData.position.y,
        zIndex: windowData.zIndex,
        border: isActive ? "2px solid #000" : "2px solid #ccc",
        boxShadow: isActive
          ? `
          inset 2px 2px 5px rgba(0,0,0,0.7),
          inset -2px -2px 5px rgba(255,255,255,0.7),
          1px 1px 0 #000
        `
          : `
          inset 1px 1px 3px rgba(255,255,255,0.8),
          inset -1px -1px 3px rgba(0,0,0,0.2),
          1px 1px 0 #aaa
        `,
      }}
      drag={!isResizing}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onClick={handleWindowClick}
      initial={false}
      animate={{
        x: windowData.position.x,
        y: windowData.position.y,
        width: windowData.size.width,
        height: windowData.size.height,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {/* Title Bar */}
      <div
        className={`flex items-center justify-between h-[18px] px-1 border-b ${
          isActive
            ? "border-black bg-black text-white"
            : "border-gray-400 bg-gray-200 text-gray-600"
        }`}
        style={{
          fontFamily: "Chicago, monospace",
          fontSize: "11px",
          fontWeight: "bold",
          letterSpacing: "-0.5px",
        }}
        onMouseDown={handleWindowClick}
      >
        <div className="flex items-center gap-1">
          {/* Square control buttons */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className={
              isActive ? "w-2.5 h-2.5 bg-black" : "w-2.5 h-2.5 bg-gray-400"
            }
            style={{
              border: isActive ? "1px solid #000" : "1px solid #aaa",
              boxShadow: isActive
                ? "inset 1px 1px 0 #fff, inset -1px -1px 0 #000"
                : "inset 1px 1px 0 #ddd, inset -1px -1px 0 #888",
            }}
          ></button>
          <button
            onClick={handleMinimize}
            aria-label="Minimize"
            className={
              isActive ? "w-2.5 h-2.5 bg-white" : "w-2.5 h-2.5 bg-gray-300"
            }
            style={{
              border: isActive ? "1px solid #000" : "1px solid #aaa",
              boxShadow: isActive
                ? "inset 1px 1px 0 #fff, inset -1px -1px 0 #000"
                : "inset 1px 1px 0 #ddd, inset -1px -1px 0 #888",
            }}
          ></button>
          {icon && <span className="text-xs">{icon}</span>}
          <span>{title}</span>
        </div>
      </div>

      {/* Window Content */}
      <div
        className="bg-white overflow-auto"
        style={{
          border: isActive ? "1px inset #000" : "1px inset #ccc",
          height: "calc(100% - 18px)",
          boxShadow: isActive ? "inset 1px 1px 0 #fff" : "inset 1px 1px 0 #eee",
        }}
      >
        {children}
      </div>

      {/* Resize Handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        style={{
          borderRight: "1px solid #000",
          borderBottom: "1px solid #000",
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
      />
    </motion.div>
  );
}
