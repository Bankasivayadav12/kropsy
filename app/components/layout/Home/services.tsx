"use client";

import { motion } from "framer-motion";
import {
  LuCamera,
  LuFlaskConical,
  LuTractor,
  LuUpload,
  LuShoppingCart,
} from "react-icons/lu";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Crop Monitoring",
      icon: LuCamera,
      points: [
        "Live camera view",
        "Crop health analysis",
        "Spray recommendations",
        "Growth stage tracking",
        "Field-wise analysis",
        "Yield estimation",
        "Manual image diagnosis",
      ],
    },
    {
      title: "Soil Intelligence",
      icon: LuFlaskConical,
      points: [
        "Sensor-based soil testing",
        "Manual soil testing through vendors",
        "Soil health reports",
        "Fertilizer recommendations",
        "Crop suitability insights",
      ],
    },
    {
      title: "Lease Tools & Manpower Supply",
      icon: LuTractor,
      points: [
        "Tools available by location",
        "Labour booking",
        "Calendar-based availability",
        "Work tracking",
        "Rating and payment system",
      ],
    },
    {
      title: "Sell Crops",
      icon: LuUpload,
      points: [
        "Add crop listing",
        "AI quality analysis",
        "Price estimation by image",
        "Vendor visibility",
        "Order tracking",
      ],
    },
    {
      title: "Buy Crops",
      icon: LuShoppingCart,
      points: [
        "Browse crops by location",
        "Send buy request",
        "Farmer approval",
        "Contact sharing after acceptance",
        "Finalize amount and payment",
      ],
    },
  ];

  // ─── Animation Variants ───────────────────────────────────────────────────

  /** Heading: fade + slide up */
  const headingVariants = {
    hidden: { y: 32, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  /**
   * Cards: staggered fade + slide-up from below.
   * All cards share the same entrance direction (up) for a clean, unified feel.
   * The parent `container` staggers children automatically.
   */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12, // delay between each card
        delayChildren: 0.1,    // small pause after heading settles
      },
    },
  };

  const cardVariants = {
    hidden: { y: 48, opacity: 0, scale: 0.97 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  /**
   * List items inside each card: staggered fade-in from the left.
   * Triggered once the card itself is visible.
   */
  const listContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const listItemVariants = {
    hidden: { x: -14, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  /** Button: subtle bounce on mount */
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="bg-[#E7E1C8] min-h-screen py-16 px-4">

      {/* Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Our Services
        </h1>
        <p className="text-green-700 mt-2 text-sm md:text-base">
          Comprehensive smart farming solutions to support your agricultural journey
        </p>
      </motion.div>

      {/* Cards Grid — parent handles stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl p-6 shadow-sm transition-shadow duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                {/* Icon wrapper: scale pulse on card hover */}
                <motion.div
                  className="bg-green-800 p-2 rounded-lg"
                  whileHover={{ scale: 1.15, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <Icon className="text-white w-5 h-5" />
                </motion.div>

                <h3 className="text-green-800 font-semibold text-md">
                  {service.title}
                </h3>
              </div>

              {/* List items — staggered once card is visible */}
              <motion.ul
                className="space-y-3 text-sm text-green-700"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    className="flex items-start gap-2"
                  >
                    <div className="w-5 h-5 shrink-0 flex items-center justify-center border border-green-700 rounded-full text-green-700 text-xs">
                      ✓
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center mt-12"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.button
          className="bg-green-800 text-white px-6 py-2 rounded-full text-sm"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#15803d", // green-700
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.96 }}
        >
          View all Services
        </motion.button>
      </motion.div>
    </div>
  );
}