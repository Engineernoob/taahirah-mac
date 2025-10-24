'use client';

import { useState } from 'react';
import { useOSStore } from '../store/useOSStore';

interface MenuItem {
  label: string;
  action?: () => void;
  children?: MenuItem[];
}

export default function MenuBar() {
  const { openWindow, setBootState } = useOSStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleFileClick = () => {
    setActiveMenu(activeMenu === 'File' ? null : 'File');
  };

  const handleEditClick = () => {
    setActiveMenu(activeMenu === 'Edit' ? null : 'Edit');
  };

  const handleViewClick = () => {
    setActiveMenu(activeMenu === 'View' ? null : 'View');
  };

  const handleAboutClick = () => {
    openWindow('about', 'About Me');
    setActiveMenu(null);
  };

  const handleShutdown = () => {
    setBootState('shutdown');
    setActiveMenu(null);
  };

  const fileMenuItems: MenuItem[] = [
    { label: 'New Folder', action: () => {} },
    { label: 'Open', action: () => {} },
    { label: 'Print', action: () => {} },
    { label: '-', action: () => {} },
    { label: 'Quit', action: handleShutdown },
  ];

  const editMenuItems: MenuItem[] = [
    { label: 'Undo', action: () => {} },
    { label: 'Cut', action: () => {} },
    { label: 'Copy', action: () => {} },
    { label: 'Paste', action: () => {} },
    { label: 'Clear', action: () => {} },
    { label: 'Select All', action: () => {} },
  ];

  const viewMenuItems: MenuItem[] = [
    { label: ' by Icon', action: () => {} },
    { label: ' by Name', action: () => {} },
    { label: ' by Date', action: () => {} },
    { label: ' by Size', action: () => {} },
  ];

  const renderMenu = (items: MenuItem[]) => {
    return (
      <div className="bg-white border border-black shadow-lg">
        {items.map((item, index) => (
          <div key={index}>
            {item.label === '-' ? (
              <div className="border-t border-black h-px"></div>
            ) : (
              <button
                className="block w-full text-left px-4 py-1 hover:bg-black hover:text-white text-xs"
                onClick={item.action}
              >
                {item.label}
              </button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black w-full h-6 flex items-center px-2 relative">
      <div className="flex space-x-4">
        <div className="relative">
          <button
            className={`text-white text-xs ${activeMenu === 'File' ? 'underline' : ''}`}
            onClick={handleFileClick}
          >
            File
          </button>
          {activeMenu === 'File' && (
            <div className="absolute top-full left-0 mt-1">
              {renderMenu(fileMenuItems)}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className={`text-white text-xs ${activeMenu === 'Edit' ? 'underline' : ''}`}
            onClick={handleEditClick}
          >
            Edit
          </button>
          {activeMenu === 'Edit' && (
            <div className="absolute top-full left-0 mt-1">
              {renderMenu(editMenuItems)}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className={`text-white text-xs ${activeMenu === 'View' ? 'underline' : ''}`}
            onClick={handleViewClick}
          >
            View
          </button>
          {activeMenu === 'View' && (
            <div className="absolute top-full left-0 mt-1">
              {renderMenu(viewMenuItems)}
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="text-white text-xs"
            onClick={handleAboutClick}
          >
            About
          </button>
        </div>
        <div className="relative">
          <button
            className="text-white text-xs"
            onClick={handleShutdown}
          >
            Shutdown
          </button>
        </div>
      </div>
    </div>
  );
}
