"use client";


import { motion, Variants } from "framer-motion";

type Step = {
  id: number;
  label: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    label: "Register with KROPSY",
    description: "Create your farmer profile and join the KROPSY network in minutes.",
    icon: "👤",
  },
  {
    id: 2,
    label: "Receive your PVP QR card",
    description: "Get your unique physical QR identity card for secure platform access.",
    icon: "🪪",
  },
  {
    id: 3,
    label: "Login via QR scan & OTP",
    description: "Scan your QR card and verify with a one-time password for secure login.",
    icon: "📱",
  },
  {
    id: 4,
    label: "Access your dashboard",
    description: "View all your services, stats, and tools in one clean dashboard view.",
    icon: "📊",
  },
  {
    id: 5,
    label: "Monitor, book, sell & manage",
    description:
      "Track crops, trade produce, book services, and grow your agricultural business.",
    icon: "🌱",
  },
];


// 🔥 Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function StepCard({ step }: { step: Step }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-green-300 overflow-hidden"
    >

      {/* STEP NUMBER */}
      <div className="absolute top-4 right-4 text-xs font-semibold text-green-900 bg-green-100 px-2 py-1 rounded-full shadow-sm group-hover:bg-green-200 transition">
        {String(step.id).padStart(2, "0")}
      </div>

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-100/40 to-transparent rounded-2xl" />

      {/* Accent */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-600 to-green-400" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {step.icon}
      </div>

      {/* Label */}
      <p className="text-[11px] uppercase tracking-widest text-green-600 font-semibold mb-1">
        Step {String(step.id).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3 className="text-base font-semibold text-green-950 mb-2">
        {step.label}
      </h3>

      <div className="h-px bg-green-100 my-3" />

      <p className="text-sm text-green-800">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowWorksPage() {
  return (
    <section className="bg-gradient-to-b from-[#f7f3df] to-[#eef5ea] py-16 px-4">

      {/* HEADER */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="show"
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-3">
          How KROPSY Works
        </h2>

        <p className="text-green-700 text-sm md:text-base">
          From registration to full farm management in simple steps
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-5"
      >

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {steps.slice(0, 3).map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.slice(3).map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        <button className="bg-green-900 text-white text-sm px-6 py-3 rounded-full shadow-md hover:bg-green-800 hover:scale-105 transition-all duration-300">
          Explore Features
        </button>

        <button className="text-green-900 border border-green-400 text-sm px-6 py-3 rounded-full hover:bg-green-100 hover:scale-105 transition-all duration-300">
          Learn More
        </button>
      </motion.div>

    </section>
  );
}