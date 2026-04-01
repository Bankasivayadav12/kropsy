"use client";

export default function MobileComingSoon() {
  const features = [
    "QR login",
    "Crop monitoring dashboard",
    "Soil reports",
    "Labour and machinery booking",
    "Crop marketplace access",
    "Notifications and alerts",
  ];

  return (
    <div className="bg-green-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full text-center">
        
        {/* ICON */}
        <div className="text-white text-4xl mb-4">📱</div>

        {/* TITLE */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Mobile App Coming Soon
        </h1>

        {/* DESCRIPTION */}
        <p className="text-green-200 max-w-2xl mx-auto text-sm md:text-base mb-12">
          The KROPSY mobile app will be launching soon to provide farmers and service providers with easy digital access to all platform services.
        </p>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CARD */}
            {/* CARD */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#3E7C59] to-[#4E8A66] rounded-[40px] p-10 border border-white/20 shadow-lg">
        
        {/* TITLE */}
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-semibold text-center mb-8">
          Planned app features:
        </h2>

        {/* LIST */}
        <ul className="space-y-5">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-4 text-white text-lg">
              
              {/* TICK ICON */}
              <div className="w-6 h-6 flex items-center justify-center border-2 border-yellow-400 rounded-full text-yellow-400 text-sm">
                ✓
              </div>

              {/* TEXT */}
              <span className="tracking-wide">{item}</span>
            </li>
          ))}
        </ul>
      </div>

          {/* RIGHT SIDE */}
          <div className="text-center md:text-left">
            <p className="text-yellow-400 mb-4 text-lg font-medium">
              Register now and stay updated
            </p>

            <button className="bg-yellow-400 text-green-900 px-8 py-3 rounded-full text-sm font-semibold hover:bg-yellow-300 transition">
              Register Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}