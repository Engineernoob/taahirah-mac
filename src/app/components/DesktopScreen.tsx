"use client";

import { useOSStore } from "../store/useOSStore";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import MenuBar from "./MenuBar";
import Clock from "./Clock";

// Import window content components
import AboutWindow from "../windows/about";
import CueWindow from "../windows/cue";
import FernWindow from "../windows/fern";
import VillaCardWindow from "../windows/villacard";
import CortexWindow from "../windows/cortex";
import SlowReadWindow from "../windows/slowread";
import PixelFinWindow from "../windows/pixelfin";
import QuantumWindow from "../windows/quantum";
import NotchPodWindow from "../windows/notchpod";
import AdaWindow from "../windows/ada";
import GitHubWindow from "../windows/github";
import ProjectsWindow from "../windows/projects";

export default function DesktopScreen() {
  const { windows } = useOSStore();

  // 🖥 Desktop Icons (now using pixel icon IDs)
  const desktopIcons = [
    {
      id: "mac",
      title: "Macintosh HD",
      iconId: "happy_mac",
      windowTitle: "Macintosh HD",
      position: { x: "5%", y: "20%" },
    },
    {
      id: "projects",
      title: "Projects",
      iconId: "folder",
      windowTitle: "Projects Folder",
      position: { x: "20%", y: "20%" },
    },
    {
      id: "github",
      title: "GitHub",
      iconId: "globe",
      windowTitle: "GitHub Repositories",
      position: { x: "35%", y: "20%" },
    },
    {
      id: "about",
      title: "About Me",
      iconId: "system_folder",
      windowTitle: "About Me",
      position: { x: "50%", y: "20%" },
    },
    {
      id: "trash",
      title: "Trash",
      iconId: "trash",
      windowTitle: "Trash",
      position: { x: "90%", y: "70%" },
    },
  ];

  const getWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "cue":
        return <CueWindow />;
      case "fern":
        return <FernWindow />;
      case "villacard":
        return <VillaCardWindow />;
      case "cortex":
        return <CortexWindow />;
      case "slowread":
        return <SlowReadWindow />;
      case "pixelfin":
        return <PixelFinWindow />;
      case "quantum":
        return <QuantumWindow />;
      case "notchpod":
        return <NotchPodWindow />;
      case "ada":
        return <AdaWindow />;
      case "github":
        return <GitHubWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "mac":
        return <div className="p-4 text-[10px]">Welcome to Macintosh.</div>;
      default:
        return <div className="text-[10px] p-4">Unknown window</div>;
    }
  };

  return (
    <div
      className="relative h-screen w-full bg-[#E0E0E0] text-black"
      style={{ fontFamily: '"Chicago", "Geneva", sans-serif' }}
    >
      {/* 🧠 Menu Bar */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <MenuBar />
        <Clock />
      </div>

      {/* 🖥 Desktop */}
      <div
        className="absolute top-8 bottom-0 left-0 right-0 select-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #bfbfbf 1px, transparent 1px), linear-gradient(to bottom, #bfbfbf 1px, transparent 1px)',
          backgroundSize: '2px 2px',
          border: 'inset 1px #999',
        }}
      >
        {/* 🗂 Desktop Icons */}
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            title={icon.title}
            iconId={icon.iconId}
            position={icon.position}
            windowTitle={icon.windowTitle}
          />
        ))}

        {/* 🪟 Open Windows */}
        {windows
          .filter((w) => !w.isMinimized)
          .map((window) => (
            <Window key={window.id} id={window.id} title={window.title}>
              {getWindowContent(window.id)}
            </Window>
          ))}
      </div>
    </div>
  );
}
