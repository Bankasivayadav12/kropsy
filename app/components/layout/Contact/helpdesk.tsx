"use client";

import Image from "next/image";

export default function MapHelpDesk() {
  const supportItems = [
    "Registration",
    "Onboarding",
    "Account support",
    "Service information",
  ];

  return (
    <section className="w-full bg-white">
      
      {/* MAP SECTION */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
        <iframe
          src="https://www.google.com/maps?q=Udupi,Karnataka&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* HELP DESK SECTION */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 md:py-14">
        
        <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-6">
          Our Support Team Will Assist You With:
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* LEFT LIST */}
          <div className="space-y-4">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#f2efe7] px-4 py-3 rounded-lg flex items-center gap-3"
              >
                <span className="text-green-600">✔</span>
                <p className="text-sm md:text-base text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/contact/hd1.jpg"
                alt="help"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden">
              <Image
                src="/contact/hd2.jpg"
                alt="registration"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden col-span-2">
              <Image
                src="/contact/hd3.jpg"
                alt="help desk"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}