"use client";

import {
  UserPlus,
  IdCard,
  QrCode,
  LayoutGrid,
  Settings,
  History,
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "REGISTER",
    desc: "Users can register through KROPSY support or website registration form.",
    icon: UserPlus,
  },
  {
    id: "2",
    title: "PVP CARD CREATION",
    desc: "After successful registration, a PVP ID is created and linked with a QR-enabled PVP card.",
    icon: IdCard,
  },
  {
    id: "3",
    title: "QR + OTP LOGIN",
    desc: "Users can access their account through QR scan and OTP verification.",
    icon: QrCode,
  },
  {
    id: "4",
    title: "ACCESS SERVICES",
    desc: "Based on user type, services become available: Farmer, Labour, Vendor, Tool Owner and Soil Vendor.",
    icon: LayoutGrid,
  },
  {
    id: "5",
    title: "USE PLATFORM SERVICES",
    desc: `Users can:
• Monitor crops
• Book labour
• Sell crops
• Access soil reports
• Book machinery
• Buy crops`,
    icon: Settings,
  },
  {
    id: "6",
    title: "TRACK HISTORY",
    desc: "Data such as crop analysis, bookings, listings, and reports are stored in the user dashboard/profile.",
    icon: History,
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔰 Header */}
      <div className="bg-green-800 text-white text-center py-10 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          How KROPSY Works
        </h1>
        <p className="text-sm md:text-base mt-2 max-w-2xl mx-auto">
          KROPSY connects registration, digital identity, field services, crop monitoring, and marketplace operations into one workflow.
        </p>
      </div>

      {/* 🔽 Section Title */}
      <h2 className="text-center text-yellow-600 font-semibold mt-8">
        How KROPSY Works
      </h2>

      {/* 🔗 Steps Container */}
      <div className="relative max-w-6xl mx-auto px-4 py-10">

        {/* 🟢 Dotted Path (Top Right Curve) */}
        <div className="hidden md:block absolute top-16 left-0 right-0 border-t-2 border-dotted border-green-700"></div>

        {/* 🟩 Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-green-800 text-white rounded-2xl p-6 
                transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                {/* 🔢 Number Badge */}
                <div className="absolute -top-5 left-6 bg-green-900 text-white 
                  w-10 h-10 flex items-center justify-center rounded-full font-bold border-4 border-gray-100">
                  {step.id}
                </div>

                {/* ⚪ Icon Circle */}
                <div className="w-16 h-16 bg-gray-100 text-yellow-600 
                  flex items-center justify-center rounded-full mx-auto mb-4">
                  <Icon size={28} />
                </div>

                {/* 📝 Title */}
                <h3 className="text-center font-semibold text-lg">
                  {step.title}
                </h3>

                {/* 📄 Description */}
                <p className="text-center text-sm mt-2 whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}