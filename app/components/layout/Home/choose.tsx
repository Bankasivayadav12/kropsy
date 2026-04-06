"use client";

import { motion, Variants } from "framer-motion";

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
          {leftFeatures.map((text, index) => (
            <motion.div
              key={index}
              variants={leftItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
              className="group flex items-center gap-3 bg-[#E7E1C8] px-4 py-3 rounded-xl cursor-pointer"
            >
              <motion.div
                whileHover={{
                  rotate: -15,
                  scale: 0.8,
                  backgroundColor: "#15803d",
                  color: "#fff",
                }}
                className="w-5 h-5 flex items-center justify-center border border-green-700 rounded-full text-green-700 text-xs"
              >
                ✓
              </motion.div>

              <p className="text-green-800 text-sm">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {rightFeatures.map((text, index) => (
            <motion.div
              key={index}
              variants={rightItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
              className="group flex items-center gap-3 bg-[#E7E1C8] px-4 py-3 rounded-xl cursor-pointer"
            >
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 0.8,
                  backgroundColor: "#15803d",
                  color: "#fff",
                }}
                className="w-5 h-5 flex items-center justify-center border border-green-700 rounded-full text-green-700 text-xs"
              >
                ✓
              </motion.div>

              <p className="text-green-800 text-sm">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}