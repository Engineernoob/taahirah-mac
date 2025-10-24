'use client';

import { useEffect } from 'react';
import { useOSStore } from '../store/useOSStore';
import Window from './Window';
import DesktopIcon from './DesktopIcon';
import MenuBar from './MenuBar';
import Clock from './Clock';

// Import window content components
import AboutWindow from '../windows/about';
import CueWindow from '../windows/cue';
import FernWindow from '../windows/fern';
import VillaCardWindow from '../windows/villacard';
import CortexWindow from '../windows/cortex';
import SlowReadWindow from '../windows/slowread';
import PixelFinWindow from '../windows/pixelfin';
import QuantumWindow from '../windows/quantum';
import NotchPodWindow from '../windows/notchpod';
import AdaWindow from '../windows/ada';

export default function DesktopScreen() {
  const { windows, activeWindow } = useOSStore();

  const desktopIcons = [
    { id: 'mac', title: 'Macintosh', icon: '💾', windowTitle: 'Macintosh', position: { x: '50%', y: '50%' } },
  ];

  const getWindowContent = (id: string) => {
    switch (id) {
      case 'about':
        return <AboutWindow />;
      case 'cue':
        return <CueWindow />;
      case 'fern':
        return <FernWindow />;
      case 'villacard':
        return <VillaCardWindow />;
      case 'cortex':
        return <CortexWindow />;
      case 'slowread':
        return <SlowReadWindow />;
      case 'pixelfin':
        return <PixelFinWindow />;
      case 'quantum':
        return <QuantumWindow />;
      case 'notchpod':
        return <NotchPodWindow />;
      case 'ada':
        return <AdaWindow />;
      case 'mac':
        return <div className="p-4">Welcome to Macintosh</div>;
      default:
        return <div>Unknown window</div>;
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Menu Bar */}
      <div className="relative">
        <MenuBar />
        <Clock />
      </div>

      {/* Desktop */}
      <div className="flex-1 relative desktop-pattern">
        {/* Desktop Icons */}
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            title={icon.title}
            icon={icon.icon}
            position={icon.position}
            windowTitle={icon.windowTitle}
          />
        ))}

        {/* Windows */}
        {windows.map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
          >
            {getWindowContent(window.id)}
          </Window>
        ))}
      </div>
    </div>
  );
}
