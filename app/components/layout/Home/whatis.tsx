"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatIsSection() {
  const features = [
    "Crop monitoring",
    "Soil Testing",
    "Labour and machinery access",
    "Crop selling and buying",
    "Digital identity through PVP QR cards",
  ];

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
      {features.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckCircle className="text-green-700 w-5 h-5" />
          <span className="text-gray-800 text-base md:text-lg">
            {item}
          </span>
        </li>
      ))}
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