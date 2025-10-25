"use client";

export default function VillaCardWindow() {
  return (
    <div
      className="p-3 text-[12px] leading-3.5 text-black bg-[#E5E5E5]"
      style={{ fontFamily: "Chicago, sans-serif" }}
    >
      <div className="border border-black p-2 mb-2 bg-white text-center">
        <h2 className="font-bold text-[12px] mb-1">
          VillaCard — AI Concierge & Property Dashboard
        </h2>
        <p className="text-[9px]">
          Manage villas, bookings, and guests with intelligent automation.
        </p>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Platform Features</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Property listings with media galleries</li>
          <li>(•) Real-time booking calendar system</li>
          <li>(•) Automated pricing optimization</li>
          <li>(•) Guest communication dashboard</li>
          <li>(•) Revenue and analytics tracking</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2 mb-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] AI Concierge Services</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) 24/7 guest chat assistance</li>
          <li>(•) Local recommendations and guides</li>
          <li>(•) Automated check-in and check-out</li>
          <li>(•) Maintenance request triage</li>
          <li>(•) Multi-language support system</li>
        </ul>
      </div>

      <div className="border border-black bg-white p-2">
        <h3 className="font-bold mb-1 text-[11px]">[*] Technical Stack</h3>
        <ul className="list-none text-[10px] pl-2 space-y-0.5">
          <li>(•) Frontend — Next.js + Tailwind CSS</li>
          <li>(•) Backend — Supabase (PostgreSQL + Functions)</li>
          <li>(•) Authentication — Supabase Auth</li>
          <li>(•) Payments — Stripe Connect</li>
          <li>(•) Maps — Google Maps API</li>
        </ul>
      </div>

      <div className="border-t border-black mt-2 pt-1 text-center text-[9px]">
        <p>VillaCard — Automating hospitality with elegance.</p>
      </div>
    </div>
  );
}