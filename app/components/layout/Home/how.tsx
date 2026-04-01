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
      
      {/* ================= HOW IT WORKS ================= */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          How KROPSY Works
        </h2>
      </div>

      {/* TOP 3 STEPS */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {steps.slice(0, 3).map((step) => (
          <div
            key={step.id}
            className="bg-white w-48 h-40 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-4"
          >
            {/* Circle */}
            <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 border-4 border-green-200">
              {step.id}
            </div>

            <p className="text-green-800 text-sm">{step.text}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM 2 STEPS */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {steps.slice(3).map((step) => (
          <div
            key={step.id}
            className="bg-white w-48 h-40 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-4"
          >
            <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 border-4 border-green-200">
              {step.id}
            </div>

            <p className="text-green-800 text-sm">{step.text}</p>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center ">
        <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition">
          Learn More Details
        </button>
      </div>

     
    </div>
  );
}