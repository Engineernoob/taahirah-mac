"use client";

export default function AboutWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">About Me</h2>
      <div className="space-y-3 text-sm">
        <p>
          Hi I&apos;m Taahirah Denmark — a software engineer and AI builder
          crafting elegant, intelligent systems that blend design and
          technology.
        </p>
        <div className="border-t border-b border-gray-300 py-2">
          <p className="font-bold">Expertise</p>
          <ul className="list-disc list-inside mt-1">
            <li>Full-stack development with Next.js & TypeScript</li>
            <li>AI/ML integration and LLM applications</li>
            <li>React, Node.js, and modern web technologies</li>
            <li>UI/UX design with attention to user experience</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-1">Portfolio Highlights</p>
          <p className="text-xs">
            Each icon on this desktop represents a real project I&apos;ve built.
            Double-click any icon to explore that project in detail.
          </p>
        </div>
      </div>
    </div>
  );
}
