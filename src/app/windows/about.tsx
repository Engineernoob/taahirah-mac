"use client";

export default function AboutWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">About Taahirah Denmark</h2>
        <p>
          Software Engineer & AI Builder crafting intelligent systems that merge
          art, design, and technology.
        </p>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Expertise</p>
        <ul className="list-disc list-inside">
          <li>Full-stack development with Next.js & TypeScript</li>
          <li>AI/ML & LLM-powered applications</li>
          <li>React, Node.js, and modern web architecture</li>
          <li>Pixel-perfect UI/UX with attention to interaction design</li>
        </ul>
      </div>

      <div className="border border-black p-2 bg-white">
        <p className="font-bold underline mb-1">Portfolio Highlights</p>
        <p>
          Each icon on the desktop represents a real project I’ve built.
          Double-click an icon to explore that project in detail.
        </p>
      </div>
    </div>
  );
}
