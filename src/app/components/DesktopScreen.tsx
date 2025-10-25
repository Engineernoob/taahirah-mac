"use client";

import { useOSStore } from "../store/useOSStore";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import MenuBar from "./MenuBar";

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
      position: { x: "4%", y: "18%" },
    },
    {
      id: "projects",
      title: "Projects",
      iconId: "folder",
      windowTitle: "Projects Folder",
      position: { x: "14%", y: "18%" },
    },
    {
      id: "github",
      title: "GitHub",
      iconId: "globe",
      windowTitle: "GitHub Repositories",
      position: { x: "24%", y: "18%" },
    },
    {
      id: "about",
      title: "About Me",
      iconId: "system_folder",
      windowTitle: "About Me",
      position: { x: "34%", y: "18%" },
    },
    {
      id: "trash",
      title: "Trash",
      iconId: "trash",
      windowTitle: "Trash",
      position: { x: "90%", y: "72%" },
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
        return <div className="p-2 text-[10px]">Welcome to Macintosh.</div>;
      default:
        return <div className="text-[10px] p-2">Unknown window</div>;
    }
  };

  return (
    <div
      className="relative h-screen w-full text-black"
      style={{
        fontFamily: '"Chicago", "Geneva", sans-serif',
        fontSize: "10px",
        backgroundImage: 'url("/patterns/mac-pattern.png")',
        backgroundRepeat: "repeat",
      }}
    >
      {/* 🧠 Menu Bar */}
      <div className="fixed top-0 left-0 right-0 z-20" style={{ height: 22, boxShadow: "inset 0 -1px 0 #777, inset 0 1px 0 #fff" }}>
        <MenuBar />
      </div>

      {/* 🖥 Desktop */}
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          top: 22,
          userSelect: "none",
          paddingLeft: "4%",
          paddingTop: "2%",
          paddingBottom: "4%",
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
            style={{ fontSize: "10px", lineHeight: "12px", marginBottom: "6px" }}
          />
        ))}

        {/* 🪟 Open Windows */}
        {windows
          .filter((w) => !w.isMinimized)
          .map((window) => (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              style={{
                boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                marginTop: "4px",
                marginBottom: "4px",
                zIndex: 15,
              }}
              preventOverlapWithMenubar={true}
            >
              {getWindowContent(window.id)}
            </Window>
          ))}
      </div>
    </div>
  );
}
