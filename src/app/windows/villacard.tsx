'use client';

export default function VillaCardWindow() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">VillaCard – AI Concierge & Property Dashboard</h2>
      <div className="space-y-3 text-sm">
        <p className="font-bold">Next.js + Supabase platform for villa management, bookings, and AI-based concierge support</p>
        
        <div className="bg-gray-100 p-3 border border-black">
          <p className="mb-2">🏡 <span className="font-bold">Platform Features:</span></p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Property listings with rich media galleries</li>
            <li>Real-time booking calendar system</li>
            <li>Automated pricing optimization</li>
            <li>Guest communication hub</li>
            <li>Analytics and revenue tracking</li>
          </ul>
        </div>

        <div>
          <p className="font-bold mb-1">🤖 AI Concierge Services</p>
          <div className="bg-gray-100 p-2 border border-black text-xs">
            <p>• 24/7 guest assistance via chat</p>
            <p>• Local recommendations and activities</p>
            <p>• Automated check-in/check-out processes</p>
            <p>• Maintenance request triage</p>
            <p>• Multi-language support (English/Spanish)</p>
          </div>
        </div>

        <div>
          <p className="font-bold mb-1">🛠️ Technical Stack</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Frontend: Next.js 14 + Tailwind CSS</li>
            <li>Backend: Supabase (PostgreSQL + Functions)</li>
            <li>Authentication: Supabase Auth</li>
            <li>Payments: Stripe Connect integration</li>
            <li>Maps: Google Maps API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
