"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
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

  // ✅ FIXED VARIANTS (ALL CONSISTENT: hidden → show)

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const listContainerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#E7E1C8] min-h-screen py-16 px-4">

      {/* HEADER */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Our Services
        </h1>
        <p className="text-green-700 mt-2 text-sm md:text-base">
          Comprehensive smart farming solutions to support your agricultural journey
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="bg-green-800 p-2 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="text-white w-5 h-5" />
                </motion.div>

                <h3 className="text-green-800 font-semibold text-md">
                  {service.title}
                </h3>
              </div>

              {/* LIST */}
              <motion.ul
                variants={listContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3 text-sm text-green-700"
              >
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    className="flex items-start gap-2"
                  >
                    <div className="w-5 h-5 flex items-center justify-center border border-green-700 rounded-full text-green-700 text-xs">
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

      {/* BUTTON */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
         <Link href="/services">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-green-800 text-white px-6 py-2 rounded-full text-sm"
    >
      View all Services
    </motion.button>
  </Link>
      </motion.div>

    </div>
  );
}