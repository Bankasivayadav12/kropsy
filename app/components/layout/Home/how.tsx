"use client";

export default function HowWorksPage() {
  const steps = [
    { id: 1, text: "Register with KROPSY" },
    { id: 2, text: "Receive your PVP QR card" },
    { id: 3, text: "Login using QR scan and OTP" },
    { id: 4, text: "Access your dashboard and services" },
    {
      id: 5,
      text: "Monitor, book, sell, buy, and manage farm activities",
    },
  ];

  return (
    <div className="bg-[#E7E1C8] py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          How KROPSY Works
        </h2>
      </div>

      {/* TOP 3 */}
      <div className="relative flex flex-wrap justify-center gap-16 mb-16">

  {/* 1 → 2 */}
  <div className="absolute top-[75px] left-[32%] w-[110px] h-[60px] border-b-2 border-dashed border-gray-400 rounded-b-full"></div>

  {/* 2 → 3 */}
  <div className="absolute top-[95px] left-[50%] -translate-x-1/2 w-[140px] border-t-2 border-dashed border-gray-400"></div>

  {steps.slice(0, 3).map((step) => (
    <div
      key={step.id}
      className="bg-white w-48 h-40 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-4 relative z-10"
    >
      <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 border-4 border-green-200">
        {step.id}
      </div>
      <p className="text-green-800 text-sm">{step.text}</p>
    </div>
  ))}
</div>

      {/* BOTTOM */}
      <div className="relative flex flex-wrap justify-center gap-32 mb-10">

        {/* 🔵 3 → 4 (curve down right) */}
        <div className="absolute right-[28%] -top-[120px] w-[120px] h-[120px] border-r-2 border-b-2 border-dashed border-gray-500 rounded-br-full"></div>

        {/* 🔵 5 → 4 (straight) */}
        <div className="absolute top-[40px] left-[42%] w-[140px] border-t-2 border-dashed border-gray-500"></div>

        {/* Step 5 */}
        <div className="bg-white w-48 h-40 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-4 relative z-10">
          <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 border-4 border-green-200">
            5
          </div>
          <p className="text-green-800 text-sm">
            Monitor, book, sell, buy, and manage farm activities
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white w-48 h-40 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-4 relative z-10">
          <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 border-4 border-green-200">
            4
          </div>
          <p className="text-green-800 text-sm">
            Access your dashboard and services
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition">
          Learn More Details
        </button>
      </div>
    </div>
  );
}