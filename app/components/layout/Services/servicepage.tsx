"use client";

import Image from "next/image";
import {
  Leaf,
  FlaskConical,
  Tractor,
  ShoppingCart,
  Store,
  Drone,
  Key,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "AI Crop Monitoring",
    desc: "KROPSY uses AI-supported monitoring tools to help farmers track crop condition and field performance.",
    icon: Leaf,
    features: [
      "Live camera view",
      "Crop health",
      "Disease alerts",
      "Spray recommendations",
      "Growth stage tracking",
      "Field analysis",
      "Yield estimation",
      "Image-based diagnosis",
    ],
    image: "/services/service1.jpg",
  },
  {
    title: "Soil Intelligence",
    desc: "KROPSY supports both automatic and manual soil testing options.",
    icon: FlaskConical,
    features: [
      "Soil testing through sensors",
      "Manual soil report upload",
      "Disease alerts",
      "Nutrient analysis",
      "Fertilizer suggestions",
      "Crop suitability guidance",
    ],
    image: "/services/service2.jpg",
  },
  {
    title: "Lease Tools & Manpower Supply",
    desc: "KROPSY helps farmers access nearby labour and machinery.",
    icon: Tractor,
    features: [
      "List of available tools by location",
      "Labour booking",
      "Calendar availability",
      "Work tracking through QR",
      "Ratings and payments",
    ],
    image: "/services/service3.jpg",
  },
  {
    title: "Sell Crops",
    desc: "KROPSY helps farmers connect and sell crops to buyers.",
    icon: Store,
    features: [
      "Crop listing",
      "Image upload",
      "AI quality analysis",
      "Price estimation",
      "Vendor market display",
      "Direct selling",
    ],
    image: "/services/service4.jpg",
  },
  {
    title: "Buy Crops",
    desc: "Buyers and vendors can discover crops ready for sale.",
    icon: ShoppingCart,
    features: [
      "Browse by location",
      "Search crops to buy",
      "Farmer connection",
      "Direct purchase after approval",
      "Payment finalization",
    ],
    image: "/services/service5.jpg",
  },
  {
    title: "Drone Monitoring",
    desc: "Drone monitoring is available for large-scale farms.",
    icon: Drone,
    features: [
      "Large farm scanning",
      "Crop condition review",
      "Area-based analysis",
      "Commercial farm support",
    ],
    image: "/services/service6.jpg",
  },
  {
    title: "Lease KROPSY Land",
    desc: "Find & lease KROPSY land vehicles with comprehensive land leasing support.",
    icon: Key,
    features: [
      "Lease",
      "Owner support",
      "Sell listing",
      "Direct leasing",
      "Security",
      "Inventory support",
      "Crop advisory",
    ],
    image: "/services/service7.jpg",
  },
];

export default function ServicesPage() {
  const [activePoints, setActivePoints] = useState<{ [key: string]: boolean }>({});

  const handleHover = (cardIndex: number, pointIndex: number) => {
    const key = `${cardIndex}-${pointIndex}`;
    setActivePoints((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  return (
    <div className="bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-800 text-white text-center py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          KROPSY Services
        </h1>
        <p className="text-sm md:text-base mt-2 max-w-2xl mx-auto">
          KROPSY provides digital and on-ground services that help farmers
          improve farm management, productivity, and market access.
        </p>
      </div>

      {/* SERVICES */}
      <div className="mt-10 space-y-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="bg-[#e9e1cf] rounded-2xl p-6 md:p-8 hover:shadow-xl transition"
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                
                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-700 text-white p-2 rounded-full">
                      <Icon size={18} />
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold text-green-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    {service.desc}
                  </p>

                  <h3 className="text-sm font-semibold mb-2 text-green-800">
                    Features:
                  </h3>

                  {/* ✅ FEATURES WITH ACTIVE STATE */}
                  <ul className="space-y-3 text-sm">
  {service.features.map((item, i) => {
    const key = `${index}-${i}`;
    const isActive = activePoints[key];

    return (
      <li
        key={i}
        onMouseEnter={() => handleHover(index, i)}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* ICON */}
        <div
          className={`
            w-5 h-5 flex items-center justify-center rounded-full text-xs
            transition-all duration-300

            ${
              isActive
                ? "bg-green-800 text-white"
                : "border-2 border-green-800 text-green-800"
            }
          `}
        >
          ✓
        </div>

        {/* TEXT */}
        <span
          className={`
            transition-all duration-300
            ${
              isActive
                ? "text-green-900 font-medium"
                : "text-green-800"
            }
          `}
        >
          {item}
        </span>
      </li>
    );
  })}
</ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-[200px] md:h-[250px] object-cover hover:scale-105 transition"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}