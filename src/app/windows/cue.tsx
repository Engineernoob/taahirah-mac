'use client';

export default function CueWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Cue – AI Interview Assistant</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Privacy-focused AI copilot for coding interviews and meetings</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">🎯 <span className="font-bold">Core Features:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Runs locally - no data leaves your device</li>
            <li>Three modes: Candidate / Interviewer / Meeting</li>
            <li>Real-time transcription and analysis</li>
            <li>Contextual suggestions and feedback</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">⚙️ Technology Stack</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Frontend: Next.js + React + TypeScript</p>
            <p>• Audio Processing: Whisper API</p>
            <p>• Desktop App: Tauri (Rust backend)</p>
            <p>• AI: Custom fine-tuned models</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🛠️ Key Components</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Voice-to-text processing pipeline</li>
            <li>Real-time code analysis</li>
            <li>Smart question generation</li>
            <li>Interview structure and timing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
