"use client";

export default function DigitalCardPage() {
  const features = [
    "Login quickly using QR + OTP",
    "Maintain secure identity",
    "Track labour work sessions",
    "Connect services to one digital profile",
  ];

  return (
    <div className="bg-green-900  flex items-center justify-center px-4 py-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CARD */}
         <div className="w-full max-w-xl bg-gradient-to-br from-[#3E7C59] to-[#4E8A66] rounded-[30px] p-8 shadow-lg border border-white/20">
        
        {/* QR ICON */}
        <div className="text-yellow-400 text-5xl mb-6">
          {/* You can replace with image */}
          ⌗
        </div>

        {/* TITLE */}
        <h2 className="text-white text-3xl font-bold mb-2">
          Digital PVP Card
        </h2>

        {/* ID */}
        <p className="text-green-100 text-lg mb-8">
          PVP ID: KPY-F/V/K-26031
        </p>

        {/* BUTTON */}
        <button className="w-full bg-[#D4AF2A] text-green-900 py-3 rounded-full text-lg font-medium hover:bg-yellow-400 transition">
          QR Code Login Enabled
        </button>
      </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
            Smart PVP Card With QR Login
          </h2>

          <p className="text-green-200 text-sm mb-5">
            Every registered user receives a KROPSY PVP card with QR code support.
          </p>

          <p className="text-yellow-400 font-semibold mb-3">
            This card helps users:
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 mb-5">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-green-200 text-sm">
                <span className="text-yellow-400 mt-[2px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* TAGLINE */}
          <p className="text-yellow-400 italic mb-6">
            One user. One identity. One farming ecosystem.
          </p>

          {/* BUTTON */}
          <button className="bg-yellow-400 text-green-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
            Learn More About PVP Card
          </button>
        </div>
      </div>
    </div>
  );
}