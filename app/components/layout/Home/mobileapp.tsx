"use client";
import { useState } from "react";
import { Smartphone } from "lucide-react";
import Link from "next/link";
export default function MobileComingSoon() {
  const [activePoints, setActivePoints] = useState<{ [key: number]: boolean }>({});
  const features = [
    "QR login",
    "Crop monitoring dashboard",
    "Soil reports",
    "Labour and machinery booking",
    "Crop marketplace access",
    "Notifications and alerts",
  ];

  const handleHover = (index: number) => {
  setActivePoints((prev) => ({
    ...prev,
    [index]: true,
  }));
};

  return (
    <div className="bg-green-900 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full text-center">

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <Smartphone className="text-white w-10 h-10 stroke-[2.5]" />
        </div>

        {/* TITLE */}
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Mobile App Coming Soon
        </h1>

        {/* DESCRIPTION */}
        <p className="text-green-200 max-w-2xl mx-auto text-sm md:text-base mb-14 leading-relaxed">
          The KROPSY mobile app will be launching soon to provide farmers and service providers with easy digital access to all platform services.
        </p>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center">

          {/* LEFT CARD */}
          <div className="mx-auto w-full max-w-md bg-gradient-to-br from-[#3E7C59] to-[#4E8A66] rounded-[28px] p-8 border border-white/20 shadow-lg text-left">
            
            <h2 className="text-yellow-400 text-lg font-semibold text-center mb-5">
              Planned app features:
            </h2>

            <ul className="space-y-3">
  {features.map((item, index) => {
    const isActive = activePoints[index];

    return (
      <li
        key={index}
        onMouseEnter={() => handleHover(index)}
        className="flex items-center gap-3 text-sm cursor-pointer"
      >
        {/* ICON */}
        <div
          className={`
            w-5 h-5 flex items-center justify-center rounded-full text-xs
            transition-all duration-300

            ${
              isActive
                ? "bg-yellow-400 text-green-900 border-yellow-400"
                : "border border-yellow-400 text-yellow-400"
            }
          `}
        >
          ✓
        </div>

        {/* TEXT */}
        <span
          className={`
            transition-colors duration-300
            ${
              isActive
                ? "text-white font-medium"
                : "text-white/90"
            }
          `}
        >
          {item}
        </span>
      </li>
    );
  })}
</ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
            
            <p className="text-yellow-400 mb-4 text-base font-medium">
              Register now and stay updated
            </p>

            <Link href="/register">
  <span className="bg-yellow-400 text-green-900 px-7 py-3 rounded-full text-sm font-semibold hover:bg-yellow-300 transition shadow-md cursor-pointer inline-block">
    Register Today
  </span>
</Link>
          </div>

        </div>
      </div>
    </div>
  );
}