"use client";

export default function SlowReadWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">SlowRead – Minimal Reading App</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">
          Blinkist-inspired Next.js PWA with Hugging Face TTS summaries and
          bookshelf UI
        </p>

        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">
            📚 <span className="font-bold">Reading Features:</span>
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>20-minute book summaries</li>
            <li>Text-to-speech with natural voice synthesis</li>
            <li>Reading progress tracking</li>
            <li>Personalized recommendations</li>
            <li>Highlight and note-taking</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🎙️ Audio Integration</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Hugging Face TTS models</p>
            <p>• Adjustable speech speed and pitch</p>
            <p>• Background audio support</p>
            <p>• Chapter-based navigation</p>
            <p>• Offline playback caching</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🛠️ PWA Capabilities</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Installable on all devices</li>
            <li>Offline reading mode</li>
            <li>Push notifications for daily reads</li>
            <li>Cross-device synchronization</li>
            <li>Responsive bookshelf UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
