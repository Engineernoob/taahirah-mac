"use client";

export default function SlowReadWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white text-center">
        <h2 className="font-bold text-[12px] mb-1">SlowRead — Minimal Reading App</h2>
        <p className="text-[9px]">
          A focused reading experience with summaries, audio narration, and offline mode.
        </p>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Reading Features</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) 20-minute book summaries</li>
          <li>(•) Text-to-speech narration</li>
          <li>(•) Reading progress tracking</li>
          <li>(•) Personalized recommendations</li>
          <li>(•) Highlight and note-taking tools</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Audio Integration</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Hugging Face TTS models</li>
          <li>(•) Adjustable playback speed and pitch</li>
          <li>(•) Background playback support</li>
          <li>(•) Chapter-based navigation</li>
          <li>(•) Offline playback caching</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] PWA Capabilities</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Installable on all devices</li>
          <li>(•) Offline reading mode</li>
          <li>(•) Daily reading reminders</li>
          <li>(•) Cross-device synchronization</li>
          <li>(•) Responsive bookshelf interface</li>
        </ul>
      </div>

      <div className="border-t border-black mt-2 pt-1 text-center text-[9px]">
        <p>SlowRead — Read intentionally, one summary at a time.</p>
      </div>
    </div>
  );
}
