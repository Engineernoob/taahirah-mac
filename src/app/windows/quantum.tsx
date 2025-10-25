"use client";

export default function QuantumWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white text-center">
        <h2 className="font-bold text-[12px] mb-1">Quantum — Randomness Simulator</h2>
        <p className="text-[9px]">Exploring randomness through quantum logic and visualization.</p>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Quantum Features</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Superposition visualization</li>
          <li>(•) Probability wave functions</li>
          <li>(•) Quantum entanglement demos</li>
          <li>(•) Schrödinger’s cat thought experiment</li>
          <li>(•) Quantum coin flipping</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Experiments</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Double-slit experiment simulation</li>
          <li>(•) Quantum tunneling probability</li>
          <li>(•) Bell inequality tests</li>
          <li>(•) Quantum teleportation concept</li>
          <li>(•) Heisenberg uncertainty visualizer</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Interactive Demos</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Real-time quantum state collapse</li>
          <li>(•) Measurement problem demonstrations</li>
          <li>(•) Quantum gate operations</li>
          <li>(•) Probability distribution graphs</li>
          <li>(•) Educational simulations</li>
        </ul>
      </div>

      <div className="border-t border-black mt-2 pt-1 text-center text-[9px]">
        <p>Simulating quantum randomness since 1984.</p>
      </div>
    </div>
  );
}
