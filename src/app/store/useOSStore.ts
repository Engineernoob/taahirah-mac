import { create } from 'zustand';

interface Window {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  prevPosition?: { x: number; y: number };
  prevSize?: { width: number; height: number };
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

  openWindow: (id, title, initialPosition) => {
    const { windows, highestZIndex } = get();
    const existing = windows.find((w) => w.id === id);

    // Center new window if no position provided
    const centeredPosition = {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 200 : 100,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 - 150 : 100,
    };

    if (existing) {
      // Restore if minimized
      if (existing.isMinimized) {
        set({
          windows: windows.map((w) =>
            w.id === id ? { ...w, isMinimized: false, position: w.prevPosition || w.position } : w
          ),
          activeWindow: id,
        });
      }
      get().bringToFront(id);
      return;
    }

    const newZ = highestZIndex + 1;
    const newWindow: Window = {
      id,
      title,
      isOpen: true,
      isMinimized: false,
      position: initialPosition || centeredPosition,
      size: { width: 420, height: 320 },
      zIndex: newZ,
    };

    set({
      windows: [...windows, newWindow],
      activeWindow: id,
      highestZIndex: newZ,
    });
  },

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id
          ? {
              ...w,
              isMinimized: true,
              prevPosition: w.position,
              prevSize: w.size,
            }
          : w
      ),
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: false } : w
      ),
    })),

  updateWindowPosition: (id, x, y) =>
    set((state) => {
      const maxX = typeof window !== 'undefined' ? window.innerWidth - 100 : 1200;
      const maxY = typeof window !== 'undefined' ? window.innerHeight - 100 : 800;
      const clampedX = Math.max(0, Math.min(x, maxX));
      const clampedY = Math.max(0, Math.min(y, maxY));

      return {
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, position: { x: clampedX, y: clampedY } } : w
        ),
      };
    }),

  updateWindowSize: (id, width, height) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, size: { width, height } } : w
      ),
    })),

  setActiveWindow: (id) => set({ activeWindow: id }),

  bringToFront: (id) => {
    const { highestZIndex } = get();
    const newZ = highestZIndex + 1;

    // Play retro focus sound
    if (typeof Audio !== 'undefined') {
      const audio = new Audio('/sounds/window-focus.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }

    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: newZ } : w
      ),
      highestZIndex: newZ,
      activeWindow: id,
    }));
  },
}));
