'use client';

import { AnimatePresence } from 'framer-motion';
import { useOSStore } from './store/useOSStore';
import BootScreen from './components/BootScreen';
import DesktopScreen from './components/DesktopScreen';
import ShutdownScreen from './components/ShutdownScreen';

export default function Home() {
  const bootState = useOSStore((state) => state.bootState);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#E5E5E5',
        backgroundImage: "url('/patterns/mac-pattern.png')",
        backgroundRepeat: 'repeat',
      }}
    >
      <div
        className="relative w-full h-full border border-black"
        style={{
          boxShadow: 'inset -1px -1px 0 #999, inset 1px 1px 0 #fff',
        }}
      >
        <AnimatePresence mode="wait">
          {bootState === 'booting' && <BootScreen key="boot" />}
          {bootState === 'desktop' && <DesktopScreen key="desktop" />}
          {bootState === 'shutdown' && <ShutdownScreen key="shutdown" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
