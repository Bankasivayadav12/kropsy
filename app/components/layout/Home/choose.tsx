"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

export default function ChoosePage() {

  const [activePoints, setActivePoints] = useState<{ [key: string]: boolean }>({});

const handlePointHover = (side: "left" | "right", index: number) => {
  const key = `${side}-${index}`;
  setActivePoints((prev) => ({
    ...prev,
    [key]: true,
  }));
};

  const features = [
    "Smart farming support in one place",
    "Real-time crop monitoring",
    "Better visibility into field health",
    "Easy access to labour and machinery",
    "Direct crop selling opportunities",
    "Soil recommendations for better yield",
    "Secure digital identity using QR card",
  ];

  // Split into left & right
  const leftFeatures = features.filter((_, i) => i % 2 === 0);
  const rightFeatures = features.filter((_, i) => i % 2 !== 0);

  // Container animation
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Left animation
  const leftItem: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Right animation
  const rightItem: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-[#ECECEC] py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800">
          Why Farmers Choose KROPSY
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
        {leftFeatures.map((text, index) => {
  const key = `left-${index}`;
  const isActive = activePoints[key];

  return (
    <motion.div
      key={index}
      variants={leftItem}
      onMouseEnter={() => handlePointHover("left", index)}
      className="
        flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
        bg-[#E7E1C8]
      "
    >
      {/* ICON */}
      <div
        className={`
          w-5 h-5 flex items-center justify-center rounded-full text-xs
          transition-all duration-300

          ${
            isActive
              ? "bg-green-800 text-white border-green-800"
              : "border border-green-700 text-green-700"
          }
        `}
      >
        ✓
      </div>

      {/* TEXT */}
      <p
        className={`
          text-sm transition-colors duration-300
          ${isActive ? "text-green-900 font-medium" : "text-green-800"}
        `}
      >
        {text}
      </p>
    </motion.div>
  );
})}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
       {rightFeatures.map((text, index) => {
  const key = `right-${index}`;
  const isActive = activePoints[key];

  return (
    <motion.div
      key={index}
      variants={rightItem}
      onMouseEnter={() => handlePointHover("right", index)}
      className="
        flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
        bg-[#E7E1C8]
      "
    >
      {/* ICON */}
      <div
        className={`
          w-5 h-5 flex items-center justify-center rounded-full text-xs
          transition-all duration-300

          ${
            isActive
              ? "bg-green-800 text-white border-green-800"
              : "border border-green-700 text-green-700"
          }
        `}
      >
        ✓
      </div>

      {/* TEXT */}
      <p
        className={`
          text-sm transition-colors duration-300
          ${isActive ? "text-green-900 font-medium" : "text-green-800"}
        `}
      >
        {text}
      </p>
    </motion.div>
  );
})}
        </motion.div>
      </div>
    </div>
  );
}