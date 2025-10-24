"use client";

export default function QuantumWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Quantum – Randomness Simulator</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">
          Fun experiment generating pseudo-random events using quantum logic
          models
        </p>

        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">
            ⚛️ <span className="font-bold">Quantum Features:</span>
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Quantum superposition visualization</li>
            <li>Probability wave functions</li>
            <li>Quantum entanglement demos</li>
            <li>Schrödinger&apos;s cat thought experiment</li>
            <li>Quantum coin flipping</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🔬 Experiments</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• Double-slit experiment simulation</p>
            <p>• Quantum tunneling probability</p>
            <p>• Bell inequality tests</p>
            <p>• Quantum teleportation concept</p>
            <p>• Heisenberg uncertainty visualizer</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🎮 Interactive Demos</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Real-time quantum state collapse</li>
            <li>Measurement problem demonstrations</li>
            <li>Quantum gate operations</li>
            <li>Probability distribution graphs</li>
            <li>Educational mini-games</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
