'use client';

export default function FernWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Full-Stack Engineering Reinforcement Navigator</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Autonomous coding agent that plans, reviews, and optimizes software systems using MCP + RL</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">🤖 <span className="font-bold">Core Capabilities:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Automated code generation and refactoring</li>
            <li>System architecture planning</li>
            <li>Performance optimization</li>
            <li>Security vulnerability detection</li>
            <li>Multi-language support (JavaScript, Python, Rust)</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🧠 AI Architecture</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Model Control Protocol (MCP) integration</p>
            <p>• Reinforcement Learning for self-improvement</p>
            <p>• Code vectorization and pattern matching</p>
            <p>• Context-aware decision making</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">📊 Learning Pipeline</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Analyzes code repositories for patterns</li>
            <li>Learns from user feedback and corrections</li>
            <li>Continuously improves through RL training</li>
            <li>Adapts to project-specific conventions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
