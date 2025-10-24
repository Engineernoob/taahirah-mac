'use client';

import { motion, PanInfo } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useOSStore } from '../store/useOSStore';

interface WindowProps {
  id: string;
  title: string;
  icon?: string;
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
}

export default function Window({ 
  id, 
  title, 
  icon, 
  children, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 400, height: 300 }
}: WindowProps) {
  const {
    windows,
    activeWindow,
    closeWindow,
    updateWindowPosition,
    updateWindowSize,
    setActiveWindow,
    bringToFront
  } = useOSStore();

  const window = windows.find(w => w.id === id);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const windowRef = useRef<HTMLDivElement>(null);

  if (!window) return null;

  const isActive = activeWindow === id;

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    updateWindowPosition(id, window.position.x + info.offset.x, window.position.y + info.offset.y);
  };

  const handleWindowClick = () => {
    bringToFront(id);
    setActiveWindow(id);
  };

  const handleClose = () => {
    closeWindow(id);
  };

  const handleMinimize = () => {
    // Implement minimize functionality
    closeWindow(id);
  };

  const handleResizeStart = (direction: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
  };

  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e: MouseEvent) => {
        if (!windowRef.current) return;
        
        const rect = windowRef.current.getBoundingClientRect();
        let newWidth = window.size.width;
        let newHeight = window.size.height;
        let newX = window.position.x;
        let newY = window.position.y;

        if (resizeDirection.includes('right')) {
          newWidth = e.clientX - rect.left;
        }
        if (resizeDirection.includes('left')) {
          const delta = rect.right - e.clientX;
          newWidth = rect.right - e.clientX;
          newX = window.position.x + (rect.width - newWidth);
        }
        if (resizeDirection.includes('bottom')) {
          newHeight = e.clientY - rect.top;
        }
        if (resizeDirection.includes('top')) {
          const delta = rect.bottom - e.clientY;
          newHeight = rect.bottom - e.clientY;
          newY = window.position.y + (rect.height - newHeight);
        }

        updateWindowSize(id, Math.max(200, newWidth), Math.max(150, newHeight));
        if (newX !== window.position.x || newY !== window.position.y) {
          updateWindowPosition(id, newX, newY);
        }
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        setResizeDirection('');
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, resizeDirection, id, window.size.width, window.size.height, window.position.x, window.position.y, updateWindowSize, updateWindowPosition]);

  return (
    <motion.div
      ref={windowRef}
      className={`window absolute ${isActive ? 'ring-2 ring-blue-600' : ''}`}
      style={{
        width: window.size.width,
        height: window.size.height,
        x: window.position.x,
        y: window.position.y,
        zIndex: window.zIndex,
      }}
      drag={!isResizing}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={handleDragEnd}
      onClick={handleWindowClick}
      initial={false}
      animate={{
        x: window.position.x,
        y: window.position.y,
        width: window.size.width,
        height: window.size.height,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Window Title Bar */}
      <div className="bg-black text-white px-2 py-1 flex items-center justify-between cursor-move">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-xs">{icon}</span>}
          <span className="text-white font-bold text-xs">{title}</span>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={handleMinimize}
            className="w-4 h-4 bg-black border border-white text-white text-xs flex items-center justify-center hover:bg-gray-800"
          >
            ▼
          </button>
          <button
            onClick={handleClose}
            className="w-4 h-4 bg-black border border-white text-white text-xs flex items-center justify-center hover:bg-gray-800"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="bg-white border-t border-black h-full overflow-auto">
        {children}
      </div>

      {/* Resize Handles */}
      <div
        className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
        onMouseDown={handleResizeStart('top-left')}
      />
      <div
        className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
        onMouseDown={handleResizeStart('top-right')}
      />
      <div
        className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
        onMouseDown={handleResizeStart('bottom-left')}
      />
      <div
        className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
        onMouseDown={handleResizeStart('bottom-right')}
      />
      <div
        className="absolute top-0 left-2 right-2 h-1 cursor-n-resize"
        onMouseDown={handleResizeStart('top')}
      />
      <div
        className="absolute bottom-0 left-2 right-2 h-1 cursor-s-resize"
        onMouseDown={handleResizeStart('bottom')}
      />
      <div
        className="absolute top-2 left-0 bottom-2 w-1 cursor-w-resize"
        onMouseDown={handleResizeStart('left')}
      />
      <div
        className="absolute top-2 right-0 bottom-2 w-1 cursor-e-resize"
        onMouseDown={handleResizeStart('right')}
      />
    </motion.div>
  );
}
