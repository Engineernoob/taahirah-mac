'use client';

export default function AdaWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Ada – Local AI Assistant</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Personal LLM assistant with offline voice input and contextual memory</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">🤖 <span className="font-bold">AI Capabilities:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>100% offline processing</li>
            <li>Voice input with Whisper.cpp</li>
            <li>Contextual conversation memory</li>
            <li>Multi-turn dialogues</li>
            <li>Personal knowledge integration</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🔧 Technical Stack</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Speech: Whisper.cpp for offline transcription</p>
            <p>• Models: Ollama integration (LLaMA, Mistral)</p>
            <p>• Memory: Vector database with Pinecone local</p>
            <p>• API: Next.js API routes middleware</p>
            <p>• Streaming: Real-time response generation</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">💾 Memory System</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Long-term conversation history</li>
            <li>Document context retention</li>
            <li>Personal preferences learning</li>
            <li>Conversation summarization</li>
            <li>Memory pruning and optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
