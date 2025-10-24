'use client';

import { AnimatePresence } from 'framer-motion';
import { useOSStore } from './store/useOSStore';
import BootScreen from './components/BootScreen';
import DesktopScreen from './components/DesktopScreen';
import ShutdownScreen from './components/ShutdownScreen';

export default function Home() {
  const bootState = useOSStore(state => state.bootState);

  return (
    <div className="h-screen w-screen bg-mac-beige p-8 flex items-center justify-center overflow-hidden">
      <div className="bg-mac-gray w-full h-full flex flex-col">
        <AnimatePresence mode="wait">
          {bootState === 'booting' && <BootScreen key="boot" />}
          {bootState === 'desktop' && <DesktopScreen key="desktop" />}
          {bootState === 'shutdown' && <ShutdownScreen key="shutdown" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
