/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const images = [
    "/about/i1.jpg",
    "/about/i3.jpg",
    "/about/i2.jpg",
  ];

  return (
    <div className="relative bg-green-900 text-center overflow-hidden">

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 px-4"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          About KROPSY
        </h1>

        <p className="text-green-200 text-sm md:text-lg max-w-2xl mx-auto">
          Empowering farmers with smart digital solutions for modern agriculture
        </p>
      </motion.div>

      {/* FLOATING SHAPES (ANIMATED) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 right-20 w-6 h-6 border-2 border-white rounded-full opacity-70"
      />

      <motion.div
        animate={{ rotate: [45, 60, 45] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-16 right-40 w-8 h-8 border-2 border-white rotate-45 opacity-70"
      />

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-40 right-10 w-12 h-12 border-2 border-white rounded-full opacity-70"
      />

      {/* IMAGE CARDS */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
        className="relative z-10 flex flex-wrap justify-center items-end gap-6 px-4 pb-20"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 80, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.08 }}
            className={`rounded-2xl overflow-hidden shadow-xl transition ${
              index === 1
                ? "w-[380px] h-[240px] md:w-[420px] md:h-[260px] z-10"
                : "w-[300px] h-[180px] md:w-[340px] md:h-[200px]"
            }`}
          >
            <img
              src={img}
              alt="agri"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CURVED BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#F3F3F3] rounded-t-[100%]"></div>
    </div>
  );
}