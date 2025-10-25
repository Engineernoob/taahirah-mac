"use client";

export default function CueWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">
          Cue – AI Interview Assistant
        </h2>
        <p>
          Cue is a local AI-powered assistant for coding interviews and
          meetings. It provides real-time feedback, transcription, and
          contextual insights — all processed entirely on your device.
        </p>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Core Features</p>
        <ul className="list-disc list-inside">
          <li>Fully offline — no data leaves your device</li>
          <li>Three distinct modes: Candidate, Interviewer, and Meeting</li>
          <li>Real-time speech transcription and summarization</li>
          <li>Instant technical feedback and question generation</li>
        </ul>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Technology Stack</p>
        <ul className="list-disc list-inside">
          <li>Frontend: Next.js + React + TypeScript</li>
          <li>Audio Pipeline: Whisper.cpp for local transcription</li>
          <li>Desktop Runtime: Tauri with Rust backend</li>
          <li>AI Layer: Fine-tuned local LLMs (Ollama models)</li>
        </ul>
      </div>

      <div className="border border-black p-2 bg-white">
        <p className="font-bold underline mb-1">System Components</p>
        <ul className="list-disc list-inside">
          <li>Voice-to-text processing loop</li>
          <li>Real-time code evaluation module</li>
          <li>Question generation and contextual hints</li>
          <li>Interview analytics dashboard</li>
        </ul>
      </div>
    </div>
  );
}
