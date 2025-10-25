"use client";

export default function FernWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">
          FERN – Full-Stack Engineering Reinforcement Navigator
        </h2>
        <p>
          An autonomous software engineering agent that plans, reviews, and
          optimizes entire systems using reinforcement learning and model
          control protocols.
        </p>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Core Capabilities</p>
        <ul className="list-disc list-inside">
          <li>Automated code generation and intelligent refactoring</li>
          <li>System-level architecture planning and dependency graphing</li>
          <li>Performance profiling and continuous optimization</li>
          <li>Static analysis for security and compliance</li>
          <li>Language-agnostic — supports JS, Python, Rust</li>
        </ul>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">AI Architecture</p>
        <ul className="list-disc list-inside">
          <li>Model Control Protocol (MCP) orchestration layer</li>
          <li>Reinforcement Learning feedback loop</li>
          <li>Code embedding and vector pattern recognition</li>
          <li>Context-aware decision engine with token-level memory</li>
        </ul>
      </div>

      <div className="border border-black p-2 bg-white">
        <p className="font-bold underline mb-1">Learning Pipeline</p>
        <ul className="list-disc list-inside">
          <li>Analyzes repositories for structural and behavioral patterns</li>
          <li>Learns from user interactions and pull request feedback</li>
          <li>Improves iteratively through reinforcement training</li>
          <li>Adapts to individual project conventions dynamically</li>
        </ul>
      </div>
    </div>
  );
}
