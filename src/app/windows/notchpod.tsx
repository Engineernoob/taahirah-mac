'use client';

export default function NotchPodWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">NotchPod – Retro Music Player</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Cassette-deck-style audio player built with Expo + Tauri + Zustand + Howler.js</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">📼 <span className="font-bold">Cassette Deck Features:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Realistic cassette tape animations</li>
            <li>Physical tape rotation during play</li>
            <li>Auto-reverse functionality</li>
            <li>Dubbing/mixing capabilities</li>
            <li>VU meter animations</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🎛️ Wheel-Based Controls</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Scroll wheel seeking</p>
            <p>• Rotary volume control</p>
            <p>• Pitch adjustment (+/- 10%)</p>
            <p>• Multi-band equalizer</p>
            <p>• Crossfading between tracks</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🎨 Theme System</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Multiple retro color schemes</li>
            <li>LED display customization</li>
            <li>Vintage filter overlays</li>
            <li>Physical wear-and-tear effects</li>
            <li>80s/90s aesthetic options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
