"use client";

export default function NotchPodWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">
          NotchPod — Retro Music Player
        </h2>
        <p className="text-[10px] text-center">
          A cassette-deck-inspired audio player built with Expo, Tauri, Zustand,
          and Howler.js.
        </p>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">
          [*] Cassette Deck Features
        </h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- Realistic cassette tape animations</li>
          <li>- Physical tape rotation during playback</li>
          <li>- Auto-reverse functionality</li>
          <li>- Dubbing & mixing capabilities</li>
          <li>- VU meter movement simulation</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Wheel-Based Controls</h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- Scroll wheel seeking</li>
          <li>- Rotary volume adjustment</li>
          <li>- Pitch control (+/- 10%)</li>
          <li>- Multi-band equalizer</li>
          <li>- Smooth track crossfading</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Theme System</h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- Multiple retro color schemes</li>
          <li>- Customizable LED display text</li>
          <li>- Vintage film grain & CRT filters</li>
          <li>- Physical wear texture overlay</li>
          <li>- Authentic 80s & 90s cassette aesthetics</li>
        </ul>
      </div>

      <div className="border-t border-black mt-2 pt-1 text-center text-[10px]">
        <p>Simulating audio playback... please insert tape.</p>
      </div>
    </div>
  );
}
