/* eslint-disable @next/next/no-img-element */
"use client";

export default function WhatWeDo() {
  const items = [
  "Farmer-focused platform",
  "AI-enabled agriculture support",
  "Easier service access",
  "Digital identity and trust",
  "Scalable smart farming ecosystem",
];

  const images = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1560493676-04071c5f467b",
  ];

  return (
    <div className="bg-[#F3F3F3] py-12 sm:py-16 px-4 sm:px-6">

      {/* ================= SECTION 1 ================= */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-4">
          What We Do
        </h2>

        <p className="text-green-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
          KROPSY is a digital smart farming platform designed to support agriculture
          through technology.
        </p>
        <p className="text-green-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
          The platform brings together crop monitoring, soil intelligence, tools and manpower
          services, crop selling, and crop buying into one connected system.
        </p>
        <p className="text-green-700 text-xs sm:text-sm md:text-base leading-relaxed">
          KROPSY aims to simplify farming operations and improve decision-making through better access to information and services.
        </p>
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-4">

  {/* LEFT LOGO CARD */}
  <div className="bg-[#E7E1C8] rounded-[30px] flex items-center justify-center p-10 md:p-14">
    <div className="text-center">
      {/* Replace with actual logo */}
      <img
        src="/logo.png"
        alt="KROPSY"
        className="w-32 mx-auto mb-4"
      />
      <h2 className="text-green-800 font-bold text-3xl tracking-wide">
        KROPSY
      </h2>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col gap-6">

    {/* MISSION */}
    <div className="bg-[#E7E1C8] rounded-[30px] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-green-800 text-3xl">🎯</div>
        <h3 className="text-green-800 text-xl md:text-2xl font-bold">
          Our Mission
        </h3>
      </div>

      <p className="text-green-700 text-sm md:text-base leading-relaxed">
        To make farming smarter, simpler, and more connected through technology.
      </p>
    </div>

    {/* VISION */}
    <div className="bg-[#E7E1C8] rounded-[30px] p-6 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-green-800 text-3xl">🎯</div>
        <h3 className="text-green-800 text-xl md:text-2xl font-bold">
          Our Vision
        </h3>
      </div>

      <p className="text-green-700 text-sm md:text-base leading-relaxed">
        To build a trusted digital agriculture ecosystem for farmers and rural communities.
      </p>
    </div>

  </div>
</div>

      {/* ================= SECTION 3 ================= */}
      <div className="bg-[#F3F3F3] py-16 px-4">
      
      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-800 mb-12">
        Why KROPSY
      </h2>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#E7E1C8] rounded-2xl px-6 py-5 flex items-center gap-4"
          >
            {/* ICON */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                index === items.length - 1
                  ? "bg-green-800 text-white border-green-800"
                  : "border-green-800 text-green-800"
              }`}
            >
              ✓
            </div>

            {/* TEXT */}
            <p className="text-green-800 text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}

      </div>
    </div>

      {/* ================= IMAGE SECTION ================= */}
       <div className="bg-[#E7E1C8] py-12 sm:py-16 px-4">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-55 sm:h-65 md:h-75 rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={img}
              alt={`farm-${index}`}
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        ))}

      </div>
    </div>
    </div>
  );
}