"use client";

export default function ChoosePage() {
  const features = [
    "Smart farming support in one place",
    "Real-time crop monitoring",
    "Better visibility into field health",
    "Easy access to labour and machinery",
    "Direct crop selling opportunities",
    "Soil recommendations for better yield",
    "Secure digital identity using QR card",
  ];

  return (
    <div className="bg-[#ECECEC] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          Why Farmers Choose KROPSY
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-[#E7E1C8] px-4 py-3 rounded-xl"
          >
            {/* Tick Icon */}
            <div className="w-5 h-5 flex items-center justify-center border border-green-700 rounded-full text-green-700 text-xs">
              ✓
            </div>

            {/* Text */}
            <p className="text-green-800 text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}