"use client";

import { UserPlus, IdCard, Settings } from "lucide-react";

const steps = [
  {
    title: "Register",
    description: "Sign up through support or website",
    icon: UserPlus,
  },
  {
    title: "Get PVP Card",
    description: "Receive your digital identity card",
    icon: IdCard,
  },
  {
    title: "Use Services",
    description: "Access all platform features",
    icon: Settings,
  },
];

export default function RegistrationFlow() {
  return (
    <div className="w-full bg-[#e7e1d1] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-green-700 mb-10">
          Simple Registration To Service Flow
        </h2>

        {/* Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {steps.map((step, index) => {
    const Icon = step.icon;

    return (
      <div
        key={index}
        className="
          group
          bg-white rounded-2xl p-6 shadow-sm
          border border-transparent
          hover:border-green-700
          hover:-translate-y-1 hover:shadow-md
          transition-all duration-300
          cursor-pointer
        "
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon
            className="
              text-green-700
              transition-all duration-300
              group-hover:text-yellow-500
              group-hover:scale-110
            "
            size={28}
          />
        </div>

        {/* Title */}
        <h3
          className="
            text-green-700 font-semibold text-lg mb-2
            transition-all duration-300
            group-hover:text-yellow-500
          "
        >
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm">
          {step.description}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}