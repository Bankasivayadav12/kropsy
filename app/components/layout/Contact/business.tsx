"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function SupportPage() {

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

  // ✅ ACTIONS WITH LINKS
  const actions = [
    { text: "Register as New User", link: "/register" },
    { text: "View All Services", link: "/services" },
    { text: "Learn How It Works", link: "/how-it-works" },
  ];

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
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
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
              {actions.map((item, i) => (
                <Link href={item.link} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-800 text-white py-3 rounded-lg text-sm md:text-base shadow-md hover:bg-green-700 transition text-center cursor-pointer"
                  >
                    {item.text}
                  </motion.div>
                </Link>
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
              a: "You can register through our website registration form or contact our support team.",
            },
            {
              q: "What is a PVP card?",
              a: "The PVP card is your digital identity with QR-based login.",
            },
            {
              q: "When will the mobile app be available?",
              a: "The app is in development and will be launched soon.",
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