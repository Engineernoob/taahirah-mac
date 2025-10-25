"use client";

import { useState, useEffect } from "react";
import { useOSStore } from "../store/useOSStore";

interface MenuItem {
  label: string;
  action?: () => void;
  children?: MenuItem[];
}

export default function MenuBar() {
  const { openWindow, setBootState } = useOSStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString(undefined, options));
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

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

  const specialMenuItems: MenuItem[] = [
    { label: "About This Mac", action: handleAboutClick },
    { label: "-" },
    { label: "Shutdown", action: handleShutdown },
  ];

  const renderMenu = (items: MenuItem[]) => (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "#fff",
        border: "1px solid black",
        color: "black",
        fontFamily: "'Chicago', 'W95', sans-serif",
        fontSize: 11,
        minWidth: 120,
        zIndex: 50,
      }}
    >
      {items.map((item, index) =>
        item.label === "-" ? (
          <div
            key={index}
            style={{
              borderTop: "1px solid black",
              margin: "2px 0",
            }}
          />
        ) : (
          <button
            key={index}
            onClick={() => {
              if (item.action) item.action();
              setActiveMenu(null);
            }}
            style={{
              width: "100%",
              backgroundColor: "white",
              border: "none",
              padding: "2px 8px",
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "'Chicago', 'W95', sans-serif",
              fontSize: 11,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "black";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
              (e.currentTarget as HTMLButtonElement).style.color = "black";
            }}
            type="button"
          >
            {item.label}
          </button>
        )
      )}
    </div>
  );

  const menuButtonStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? "black" : "white",
    color: isActive ? "white" : "black",
    border: "1px solid black",
    borderBottom: isActive ? "none" : "1px solid black",
    padding: "2px 8px",
    fontWeight: "bold",
    fontFamily: "'Chicago', 'W95', sans-serif",
    fontSize: 11,
    cursor: "pointer",
    userSelect: "none" as const,
    lineHeight: 1.2,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 22,
        backgroundColor: "white",
        borderBottom: "1px solid black",
        color: "black",
        fontFamily: "'Chicago', 'W95', sans-serif",
        fontWeight: "bold",
        userSelect: "none",
        paddingLeft: 4,
        paddingRight: 8,
        position: "relative",
      }}
    >
      {/* Apple Menu */}
      <div
        style={{ position: "relative", marginRight: 8, cursor: "pointer" }}
        onClick={() => toggleMenu("Apple")}
      >
        <span
          style={{
            fontFamily: "Chicago, W95, sans-serif",
            fontSize: 14,
            lineHeight: "22px",
            padding: "0 6px",
            display: "inline-block",
            border: activeMenu === "Apple" ? "1px solid black" : "1px solid transparent",
            borderBottom: activeMenu === "Apple" ? "none" : "1px solid black",
            backgroundColor: activeMenu === "Apple" ? "black" : "white",
            color: activeMenu === "Apple" ? "white" : "black",
            userSelect: "none",
          }}
        >
          
        </span>
        {activeMenu === "Apple" && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            {renderMenu(specialMenuItems)}
          </div>
        )}
      </div>

      {/* File */}
      <div style={{ position: "relative", marginRight: 8 }}>
        <button
          type="button"
          style={menuButtonStyle(activeMenu === "File")}
          onClick={() => toggleMenu("File")}
          onMouseEnter={(e) => {
            if (activeMenu !== "File") {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "File") {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }
          }}
        >
          File
        </button>
        {activeMenu === "File" && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            {renderMenu(fileMenuItems)}
          </div>
        )}
      </div>

      {/* Edit */}
      <div style={{ position: "relative", marginRight: 8 }}>
        <button
          type="button"
          style={menuButtonStyle(activeMenu === "Edit")}
          onClick={() => toggleMenu("Edit")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Edit") {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Edit") {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }
          }}
        >
          Edit
        </button>
        {activeMenu === "Edit" && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            {renderMenu(editMenuItems)}
          </div>
        )}
      </div>

      {/* View */}
      <div style={{ position: "relative", marginRight: 8 }}>
        <button
          type="button"
          style={menuButtonStyle(activeMenu === "View")}
          onClick={() => toggleMenu("View")}
          onMouseEnter={(e) => {
            if (activeMenu !== "View") {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "View") {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }
          }}
        >
          View
        </button>
        {activeMenu === "View" && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            {renderMenu(viewMenuItems)}
          </div>
        )}
      </div>

      {/* Special */}
      <div style={{ position: "relative", marginRight: 8 }}>
        <button
          type="button"
          style={menuButtonStyle(activeMenu === "Special")}
          onClick={() => toggleMenu("Special")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Special") {
              e.currentTarget.style.backgroundColor = "black";
              e.currentTarget.style.color = "white";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Special") {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }
          }}
        >
          Special
        </button>
        {activeMenu === "Special" && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            {renderMenu(specialMenuItems)}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div style={{ flexGrow: 1 }} />

      {/* Clock */}
      <div
        style={{
          fontFamily: "'Chicago', 'W95', sans-serif",
          fontWeight: "bold",
          fontSize: 11,
          userSelect: "none",
          lineHeight: "22px",
        }}
      >
        {currentTime}
      </div>
    </div>
  );
}
