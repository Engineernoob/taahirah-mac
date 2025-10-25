"use client";

import { useState } from "react";
import { useOSStore } from "../store/useOSStore";
import Image from "next/image";

interface MenuItem {
  label: string;
  action?: () => void;
  children?: MenuItem[];
}

export default function MenuBar() {
  const { openWindow, setBootState } = useOSStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleAboutClick = () => {
    openWindow("about", "About Me");
    setActiveMenu(null);
  };

  const handleShutdown = () => {
    setBootState("shutdown");
    setActiveMenu(null);
  };

  const fileMenuItems: MenuItem[] = [
    { label: "New Folder" },
    { label: "Open" },
    { label: "Print" },
    { label: "-" },
    { label: "Quit", action: handleShutdown },
  ];

  const editMenuItems: MenuItem[] = [
    { label: "Undo" },
    { label: "Cut" },
    { label: "Copy" },
    { label: "Paste" },
    { label: "Clear" },
    { label: "Select All" },
  ];

  const viewMenuItems: MenuItem[] = [
    { label: "by Icon" },
    { label: "by Name" },
    { label: "by Date" },
    { label: "by Size" },
  ];

  const renderMenu = (items: MenuItem[]) => (
    <div
      className="absolute top-full left-0 bg-white border border-black text-black z-50"
      style={{
        minWidth: "120px",
      }}
    >
      {items.map((item, index) =>
        item.label === "-" ? (
          <div key={index} className="border-t border-black my-px" />
        ) : (
          <button
            key={index}
            onClick={item.action}
            className="block w-full text-left px-2 py-0.5 text-[11px] font-bold font-[Chicago,W95] tracking-tight hover:bg-black hover:text-white"
            style={{ lineHeight: "1.2" }}
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );

  return (
    <div
      className="w-full h-6 flex items-center border-b border-black text-black font-bold select-none relative"
      style={{
        backgroundColor: "#e0e0e0",
        fontFamily: "'Chicago', 'W95', sans-serif",
        letterSpacing: "-0.5px",
        boxShadow:
          "inset 0 1px 0 #ffffff, inset 0 -1px 0 #b0b0b0",
      }}
    >
      {/* Apple Logo */}
      <div
        className="ml-2 mr-4 cursor-pointer flex items-center"
        onClick={() => toggleMenu("Apple")}
        style={{ width: 18, height: 18 }}
      >
        <Image
          src="/icons/apple-icon.png"
          alt="Apple"
          className="block"
          style={{ width: 18, height: 18 }}
          draggable={false}
        />
        {activeMenu === "Apple" && (
          <div className="absolute top-full left-2 mt-px">
            {renderMenu([
              { label: "About This Mac", action: handleAboutClick },
              { label: "-" },
              { label: "Shutdown", action: handleShutdown },
            ])}
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="border-r border-black h-4 mr-3" />

      {/* File */}
      <div className="relative mr-3 flex items-center">
        <button
          className={`px-2 py-0.5 font-bold font-[Chicago,W95] tracking-tight ${
            activeMenu === "File"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => toggleMenu("File")}
          style={{ lineHeight: "1.2" }}
        >
          File
        </button>
        {activeMenu === "File" && (
          <div className="absolute top-full left-0">
            {renderMenu(fileMenuItems)}
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="border-r border-black h-4 mr-3" />

      {/* Edit */}
      <div className="relative mr-3 flex items-center">
        <button
          className={`px-2 py-0.5 font-bold font-[Chicago,W95] tracking-tight ${
            activeMenu === "Edit"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => toggleMenu("Edit")}
          style={{ lineHeight: "1.2" }}
        >
          Edit
        </button>
        {activeMenu === "Edit" && (
          <div className="absolute top-full left-0">
            {renderMenu(editMenuItems)}
          </div>
        )}
      </div>

      {/* Separator */}
      <div className="border-r border-black h-4 mr-3" />

      {/* View */}
      <div className="relative mr-3 flex items-center">
        <button
          className={`px-2 py-0.5 font-bold font-[Chicago,W95] tracking-tight ${
            activeMenu === "View"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => toggleMenu("View")}
          style={{ lineHeight: "1.2" }}
        >
          View
        </button>
        {activeMenu === "View" && (
          <div className="absolute top-full left-0">
            {renderMenu(viewMenuItems)}
          </div>
        )}
      </div>

      {/* Clock Placeholder */}
      <div className="ml-auto mr-3 text-[10px] tracking-tight font-bold font-[Chicago,W95]">
        9:41 AM
      </div>
    </div>
  );
}
