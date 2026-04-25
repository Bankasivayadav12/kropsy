"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatIsSection() {
  const [activePoints, setActivePoints] = useState<{ [key: number]: boolean }>({});
  const features = [
    "Crop monitoring",
    "Soil Testing",
    "Labour and machinery access",
    "Crop selling and buying",
    "Digital identity through PVP QR cards",
  ];

  const handleHover = (index: number) => {
  setActivePoints((prev) => ({
    ...prev,
    [index]: true,
  }));
}; 
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4 md:px-10 lg:px-20">
      
      {/* 🔷 Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-green-800">
          What Is KROPSY?
        </h2>

        <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          KROPSY is a smart agriculture platform built to support farmers with
          modern digital solutions. It connects farmers, labour workers,
          vendors, machinery owners, and buyers through one ecosystem.
        </p>
      </div>

      {/* 🔶 Content */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 items-stretch">

  {/* 🟫 LEFT CARD */}
  <motion.div
    initial={{ x: -150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-[#ded6c3] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-center h-full"
  >
    <h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-6 text-center">
      KROPSY helps in:
    </h3>

    <ul className="space-y-5">
  {features.map((item, index) => {
    const isActive = activePoints[index];

    return (
      <li
        key={index}
        onMouseEnter={() => handleHover(index)}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* ICON */}
        <div
          className={`
            w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300

            ${
              isActive
                ? "bg-green-800 text-white"
                : "text-green-700"
            }
          `}
        >
          <CheckCircle className="w-5 h-5" />
        </div>

        {/* TEXT */}
        <span
          className={`
            text-base md:text-lg transition-colors duration-300
            ${
              isActive
                ? "text-green-900 font-medium"
                : "text-gray-800"
            }
          `}
        >
          {item}
        </span>
      </li>
    );
  })}
</ul>
  </motion.div>

  {/* 🖼️ RIGHT IMAGE */}
  <motion.div
    initial={{ x: 150, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="w-full h-full"
  >
    <div className="rounded-3xl overflow-hidden h-full">
      <Image
        src="/what1.jpg"
        alt="Smart Farming"
        width={600}
        height={900}
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>

</div>
    </section>
  );
}