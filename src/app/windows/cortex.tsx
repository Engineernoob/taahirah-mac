'use client';

export default function CortexWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Cortex – Local RAG Knowledge Workspace</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Offline knowledge graph and retrieval system for AI-assisted note-taking</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">🧠 <span className="font-bold">Knowledge Management:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Document ingestion (PDF, Markdown, Web)</li>
            <li>Automatic knowledge graph construction</li>
            <li>Semantic search and retrieval</li>
            <li>Cross-document relationship mapping</li>
            <li>Interactive knowledge exploration</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🔒 Privacy & Performance</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• 100% local processing - no cloud dependencies</p>
            <p>• Vector database with DuckDB</p>
            <p>• Local LLM integration (Ollama/Llama.cpp)</p>
            <p>• Encrypted data storage</p>
            <p>• Fast retrieval with FAISS indexing</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🛠️ Architecture</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Next.js frontend with real-time updates</li>
            <li>Python backend for ML processing</li>
            <li>Embedding models for semantic search</li>
            <li>Graph visualization with D3.js</li>
            <li>WebSocket for live synchronization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
