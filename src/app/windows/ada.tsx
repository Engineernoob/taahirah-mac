"use client";

export default function AdaWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">Ada – Local AI Assistant</h2>
        <p>
          Ada is your on-device companion designed for privacy, speed, and intelligence.
          It provides offline AI interaction and remembers your preferences without sending data anywhere.
        </p>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">AI Capabilities</p>
        <ul className="list-disc list-inside">
          <li>Offline conversation engine</li>
          <li>Voice input via Whisper.cpp</li>
          <li>Persistent contextual memory</li>
          <li>Real-time streaming responses</li>
          <li>Multi-turn dialogue handling</li>
        </ul>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Technical Stack</p>
        <ul className="list-disc list-inside">
          <li>Ollama LLM backend (LLaMA / Mistral)</li>
          <li>Next.js API middleware integration</li>
          <li>Local vector memory for recall</li>
          <li>Whisper.cpp voice transcription</li>
          <li>Lightweight UI rendered in React</li>
        </ul>
      </div>

      <div className="border border-black p-2 bg-white">
        <p className="font-bold underline mb-1">Memory System</p>
        <ul className="list-disc list-inside">
          <li>Stores personal conversation context</li>
          <li>Supports document recall and summary</li>
          <li>Adaptive learning from interaction</li>
          <li>Offline pruning and optimization</li>
        </ul>
      </div>
    </div>
  );
}
