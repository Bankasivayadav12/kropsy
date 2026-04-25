/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
export default function WhatWeDo() {
  const [activePoints, setActivePoints] = useState<{ [key: number]: boolean }>({});

  const items = [
    "Farmer-focused platform",
    "AI-enabled agriculture support",
    "Easier service access",
    "Digital identity and trust",
    "Scalable smart farming ecosystem",
  ];

  const images = [
    "/about/a1.jpg",
    "/about/a2.jpg",
    "/about/a3.jpg",
  ];

  const handleHover = (index: number) => {
  setActivePoints((prev) => ({
    ...prev,
    [index]: true,
  }));
};

  // ✅ FIXED VARIANTS (TYPED)

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-[#F3F3F3] py-12 sm:py-16 px-4 sm:px-6">

      {/* SECTION 1 */}
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="text-center max-w-5xl mx-auto mb-10 sm:mb-12"
>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 mb-4">
    What We Do
  </h2>

  <p className="text-green-700 text-sm md:text-base leading-relaxed mb-2">
    KROPSY is a digital smart farming platform designed to support agriculture through technology.
  </p>

  <p className="text-green-700 text-sm md:text-base leading-relaxed mb-2">
    The platform brings together crop monitoring, soil intelligence, tools and manpower services, crop selling, and crop buying into one system.
  </p>

  <p className="text-green-700 text-sm md:text-base leading-relaxed">
    KROPSY simplifies farming operations and improves decision-making.
  </p>
</motion.div>

      {/* SECTION 2 */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-10"
      >
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          className="bg-[#E7E1C8] rounded-[30px] flex items-center justify-center p-10 md:p-14 shadow-sm"
        >
          <img src="/kropsyicon.svg" alt="KROPSY" className="w-32" />
        </motion.div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          {/* MISSION */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-[#E7E1C8] rounded-[30px] p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-green-800 text-3xl">🎯</div>
              <h3 className="text-green-800 text-xl md:text-2xl font-bold">
                Our Mission
              </h3>
            </div>

            <p className="text-green-700 text-sm md:text-base">
              To make farming smarter, simpler, and more connected through technology.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-[#E7E1C8] rounded-[30px] p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="text-green-800 text-3xl">🎯</div>
              <h3 className="text-green-800 text-xl md:text-2xl font-bold">
                Our Vision
              </h3>
            </div>

            <p className="text-green-700 text-sm md:text-base">
              To build a trusted digital agriculture ecosystem for farmers and rural communities.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 3 */}
      <div className="py-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-800 mb-12">
          Why KROPSY
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
       {items.map((item, index) => {
  const isActive = activePoints[index];

  return (
    <motion.div
      key={index}
      variants={fadeUp}
      onMouseEnter={() => handleHover(index)}
      className="
        bg-[#E7E1C8] rounded-2xl px-6 py-5 flex items-center gap-4 shadow-sm cursor-pointer
      "
    >
      {/* ICON */}
      <div
        className={`
          w-6 h-6 flex items-center justify-center rounded-full text-sm
          transition-all duration-300

          ${
            isActive
              ? "bg-green-800 text-white border-green-800"
              : "border-2 border-green-800 text-green-800"
          }
        `}
      >
        ✓
      </div>

      {/* TEXT */}
      <p
        className={`
          text-sm md:text-base transition-colors duration-300
          ${isActive ? "text-green-900 font-medium" : "text-green-800"}
        `}
      >
        {item}
      </p>
    </motion.div>
  );
})}
        </motion.div>
      </div>

      {/* IMAGE SECTION */}
      <div className="bg-[#E7E1C8] py-12 sm:py-16 px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt="farm"
                className="w-full h-[220px] md:h-[260px] object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}