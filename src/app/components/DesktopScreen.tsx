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
    { id: 'about', title: 'About Me', icon: '👤', windowTitle: 'About Me', position: { x: 50, y: 100 } },
    { id: 'cue', title: 'Cue', icon: '🎙️', windowTitle: 'Cue – AI Interview Assistant', position: { x: 150, y: 100 } },
    { id: 'fern', title: 'FERN', icon: '🌿', windowTitle: 'Full-Stack Engineering Reinforcement Navigator', position: { x: 250, y: 100 } },
    { id: 'villacard', title: 'VillaCard', icon: '🏠', windowTitle: 'VillaCard – AI Concierge & Property Dashboard', position: { x: 350, y: 100 } },
    { id: 'cortex', title: 'Cortex', icon: '🧠', windowTitle: 'Cortex – Local RAG Knowledge Workspace', position: { x: 450, y: 100 } },
    { id: 'slowread', title: 'SlowRead', icon: '📖', windowTitle: 'SlowRead – Minimal Reading App', position: { x: 50, y: 200 } },
    { id: 'pixelfin', title: 'Pixel Fin', icon: '💲', windowTitle: 'Pixel Fin – Pixel-Art Finance Tracker', position: { x: 150, y: 200 } },
    { id: 'quantum', title: 'Quantum', icon: '⚛️', windowTitle: 'Quantum – Randomness Simulator', position: { x: 250, y: 200 } },
    { id: 'notchpod', title: 'NotchPod', icon: '📼', windowTitle: 'NotchPod – Retro Music Player', position: { x: 350, y: 200 } },
    { id: 'ada', title: 'Ada', icon: '🤖', windowTitle: 'Ada – Local AI Assistant', position: { x: 450, y: 200 } },
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
