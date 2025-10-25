"use client";

import { motion, PanInfo } from "framer-motion";
import { useRef, useState } from "react";
import { useOSStore } from "../store/useOSStore";

interface WindowProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export default function Window({ id, title, icon, children }: WindowProps) {
  const {
    windows,
    activeWindow,
    closeWindow,
    minimizeWindow,
    updateWindowPosition,
    setActiveWindow,
    bringToFront,
  } = useOSStore();

  const win = windows.find((w) => w.id === id);
  const [isResizing, setIsResizing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  if (!win) return null;

  const isActive = activeWindow === id;

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const snapX = Math.round((win.position.x + info.offset.x) / 2) * 2;
    const snapY = Math.round((win.position.y + info.offset.y) / 2) * 2;
    updateWindowPosition(id, snapX, snapY);
  };

  const handleClick = () => {
    bringToFront(id);
    setActiveWindow(id);
  };

  return (
    <motion.div
      ref={windowRef}
      className="absolute select-none"
      style={{
        x: win.position.x,
        y: win.position.y,
        width: win.size.width,
        height: win.size.height,
        zIndex: win.zIndex,
      }}
      drag={!isResizing}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      onMouseDown={handleClick}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Outer CRT-style border */}
      <div
        className="relative h-full w-full bg-[#ECECEC]"
        style={{
          border: "2px solid black",
          boxShadow:
            "2px 2px 0 #000, 1px 1px 0 #000, inset -1px -1px 0 #fff, inset 1px 1px 0 #808080",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-1 h-[18px] border-b border-black"
          style={{
            backgroundColor: isActive ? "#BEBEBE" : "#D0D0D0",
            fontFamily: '"Chicago", "Geneva", sans-serif',
            fontSize: "11px",
            fontWeight: "bold",
            color: "#000",
            letterSpacing: "0.4px",
          }}
        >
          <div className="flex items-center gap-1">
            {/* Square buttons */}
            <div
              onClick={() => closeWindow(id)}
              className="w-2.5 h-2.5 bg-black hover:bg-white border border-black cursor-pointer"
              title="Close"
            ></div>
            <div
              onClick={() => minimizeWindow(id)}
              className="w-2.5 h-2.5 bg-black hover:bg-white border border-black cursor-pointer"
              title="Minimize"
            ></div>
            {icon && <span className="ml-1">{icon}</span>}
            <span className="ml-1">{title.toUpperCase()}</span>
          </div>
        </div>

        {/* Content area */}
        <div
          className="relative bg-white overflow-auto p-2"
          style={{
            height: `calc(100% - 18px)`,
            borderTop: "1px solid #000",
            boxShadow: "inset 1px 1px 0 #808080, inset -1px -1px 0 #fff",
            fontFamily: '"Chicago", "Monaco", monospace',
            fontSize: "11px",
          }}
        >
          {children}
        </div>

        {/* Resize grip */}
        <div
          onMouseDown={() => setIsResizing(true)}
          onMouseUp={() => setIsResizing(false)}
          className="absolute bottom-0 right-0 w-3 h-3 border-t border-l border-black cursor-se-resize"
          style={{
            background:
              "repeating-linear-gradient(135deg, #000 0, #000 1px, transparent 1px, transparent 2px)",
          }}
        ></div>
      </div>
    </motion.div>
  );
}
