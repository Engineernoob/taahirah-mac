"use client";

export default function CortexWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white">
        <h2 className="font-bold text-center mb-1">Cortex – Local RAG Knowledge Workspace</h2>
        <p>
          A fully offline knowledge graph and retrieval system built for intelligent note-taking and semantic research.
        </p>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Knowledge Management</p>
        <ul className="list-disc list-inside">
          <li>Document ingestion (PDF, Markdown, Web)</li>
          <li>Automatic knowledge graph generation</li>
          <li>Semantic search and vector retrieval</li>
          <li>Cross-document relationship mapping</li>
          <li>Interactive knowledge visualization</li>
        </ul>
      </div>

      <div className="border border-black p-2 mb-2 bg-white">
        <p className="font-bold underline mb-1">Privacy & Performance</p>
        <ul className="list-disc list-inside">
          <li>100% offline local processing</li>
          <li>Vector database powered by DuckDB</li>
          <li>FAISS for fast nearest-neighbor search</li>
          <li>Ollama or Llama.cpp integration</li>
          <li>Encrypted persistent data storage</li>
        </ul>
      </div>

      <div className="border border-black p-2 bg-white">
        <p className="font-bold underline mb-1">System Architecture</p>
        <ul className="list-disc list-inside">
          <li>Next.js frontend for live graph editing</li>
          <li>Python microservice for embeddings</li>
          <li>WebSocket bridge for local sync</li>
          <li>D3.js rendering for interactive graphs</li>
          <li>Offline-compatible RAG pipelines</li>
        </ul>
      </div>
    </div>
  );
}
