"use client";

import { motion, Variants } from "framer-motion";

export default function SupportPage() {

  // ✅ VARIANTS (FIXED TYPES)
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
    <section className="w-full bg-[#f3f3f3]">

      {/* TOP SECTION */}
      <div className="bg-[#e7dfc9] py-10 md:py-14">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-[1100px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* BUSINESS HOURS */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-[#f4f4f4] rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              Business Hours
            </h2>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-800">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-800">9:00 AM - 2:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-red-500 font-medium">Closed</span>
              </div>
            </div>
          </motion.div>

          {/* QUICK ACTIONS */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-[#f4f4f4] rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-col gap-4">
              {[
                "Register as New User",
                "View All Services",
                "Learn How It Works",
              ].map((text, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-800 text-white py-3 rounded-lg text-sm md:text-base shadow-md hover:bg-green-700 transition"
                >
                  {text}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* COMMON QUESTIONS */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-14">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-green-900 mb-6"
        >
          Common Questions
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >

          {[
            {
              q: "How do I register with KROPSY?",
              a: "You can register through our website registration form or contact our support team for assisted registration.",
            },
            {
              q: "What is a PVP card?",
              a: "The PVP card is your digital identity within the KROPSY ecosystem with QR-based login.",
            },
            {
              q: "When will the mobile app be available?",
              a: "The app is in development and will be launched soon. Register to stay updated.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="bg-[#e7dfc9] rounded-xl p-5 md:p-6 shadow-sm"
            >
              <h3 className="font-semibold text-green-900 mb-2">
                {item.q}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {item.a}
              </p>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}