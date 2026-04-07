"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function MapHelpDesk() {
  const supportItems = [
    "Registration",
    "Onboarding",
    "Account support",
    "Service information",
  ];

  // ✅ SAFE VARIANTS
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
    <section className="w-full bg-white">

      {/* MAP SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden"
      >
        <iframe
          src="https://www.google.com/maps?q=Udupi,Karnataka&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </motion.div>

      {/* HELP DESK SECTION */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10 md:py-14">

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg md:text-xl font-semibold text-green-800 mb-6"
        >
          Our Support Team Will Assist You With:
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* LEFT LIST */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {supportItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ x: 5 }}
                className="bg-[#f2efe7] px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm"
              >
                <span className="text-green-600">✔</span>
                <p className="text-sm md:text-base text-gray-800">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >

            {/* IMAGE 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden"
            >
              <Image
                src="/contact/hd1.jpg"
                alt="help"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden"
            >
              <Image
                src="/contact/hd2.jpg"
                alt="registration"
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>

            {/* IMAGE 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative h-[120px] md:h-[150px] rounded-lg overflow-hidden col-span-2"
            >
              <Image
                src="/contact/hd3.jpg"
                alt="help desk"
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}