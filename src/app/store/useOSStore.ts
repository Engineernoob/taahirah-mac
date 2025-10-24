import { create } from 'zustand';

interface Window {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface OSStore {
  bootState: 'booting' | 'desktop' | 'shutdown';
  windows: Window[];
  activeWindow: string | null;
  highestZIndex: number;
  
  // Actions
  setBootState: (state: 'booting' | 'desktop' | 'shutdown') => void;
  openWindow: (id: string, title: string, initialPosition?: { x: number; y: number }) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  setActiveWindow: (id: string | null) => void;
  bringToFront: (id: string) => void;
}

export const useOSStore = create<OSStore>((set, get) => ({
  bootState: 'booting',
  windows: [],
  activeWindow: null,
  highestZIndex: 100,

  setBootState: (state) => set({ bootState: state }),

  openWindow: (id, title, initialPosition = { x: 100, y: 100 }) => {
    const existingWindow = get().windows.find(w => w.id === id);
    if (existingWindow) {
      // Window already exists, just bring to front
      set({ activeWindow: id });
      get().bringToFront(id);
      return;
    }

    const newZIndex = get().highestZIndex + 1;
    const newWindow: Window = {
      id,
      title,
      isOpen: true,
      isMinimized: false,
      position: initialPosition,
      size: { width: 400, height: 300 },
      zIndex: newZIndex
    };

    set(state => ({
      windows: [...state.windows, newWindow],
      activeWindow: id,
      highestZIndex: newZIndex
    }));
  },

  closeWindow: (id) => {
    set(state => ({
      windows: state.windows.filter(w => w.id !== id),
      activeWindow: state.activeWindow === id ? null : state.activeWindow
    }));
  },

  minimizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id ? { ...w, isMinimized: true } : w
      )
    }));
  },

  maximizeWindow: (id) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id ? { ...w, isMinimized: false } : w
      )
    }));
  },

  updateWindowPosition: (id, x, y) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id ? { ...w, position: { x, y } } : w
      )
    }));
  },

  updateWindowSize: (id, width, height) => {
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id ? { ...w, size: { width, height } } : w
      )
    }));
  },

  setActiveWindow: (id) => set({ activeWindow: id }),

  bringToFront: (id) => {
    const newZIndex = get().highestZIndex + 1;
    set(state => ({
      windows: state.windows.map(w => 
        w.id === id ? { ...w, zIndex: newZIndex } : w
      ),
      highestZIndex: newZIndex,
      activeWindow: id
    }));
  }
}));
