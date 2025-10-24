'use client';

export default function PixelFinWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Pixel Fin – Pixel-Art Finance Tracker</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Manual budget tracker with pixel-art interface and one-tap expense logging</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">💰 <span className="font-bold">Budget Management:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Category-based expense tracking</li>
            <li>Monthly and yearly budget goals</li>
            <li>Visual spending patterns</li>
            <li>Savings milestone tracking</li>
            <li>Quick expense entry</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🎮 Retro Gaming UX</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• 8-bit pixel art design system</p>
            <p>• Sound effects for transactions</p>
            <p>• Achievement badges</p>
            <p>• Retro CRT screen effects</p>
            <p>• Game-like budget challenges</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🛠️ Features</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Export to CSV/PDF</li>
            <li>Recurring expense automation</li>
            <li>Multiple budget scenarios</li>
            <li>Dark mode with amber phosphor glow</li>
            <li>Local data storage (no account required)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
