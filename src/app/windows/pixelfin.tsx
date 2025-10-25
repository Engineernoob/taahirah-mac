"use client";

export default function PixelFinWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">
          PixelFin — Pixel-Art Finance Tracker
        </h2>
        <p className="text-[10px] text-center">
          A manual budgeting tool styled like classic 8-bit interfaces.
        </p>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Budget Management</h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- Category-based expense tracking</li>
          <li>- Monthly and yearly goals</li>
          <li>- Visual spending patterns</li>
          <li>- Savings milestone tracking</li>
          <li>- Quick expense entry</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Retro Interface</h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- 8-bit pixel art display</li>
          <li>- Sound cues for transactions</li>
          <li>- Achievement badges</li>
          <li>- CRT screen simulation</li>
          <li>- Game-like budget challenges</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Features</h3>
        <ul className="list-none text-[10px] pl-3 space-y-0.5">
          <li>- Export to CSV or PDF</li>
          <li>- Recurring expense automation</li>
          <li>- Multiple budget scenarios</li>
          <li>- Dark mode (amber phosphor look)</li>
          <li>- Local data storage (offline)</li>
        </ul>
      </div>

      <div className="border-t border-black mt-2 pt-1 text-center text-[10px]">
        <p>Tracking every pixel of your finances...</p>
      </div>
    </div>
  );
}
