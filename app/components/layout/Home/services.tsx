"use client";
import Image from "next/image";
export default function ServicesPage() {

    
  const services = [
    {
      title: "AI Crop Monitoring",
      icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
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
      icon: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
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
      icon: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
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
      icon: "https://cdn-icons-png.flaticon.com/512/2331/2331966.png",
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
      icon: "https://cdn-icons-png.flaticon.com/512/891/891419.png",
      points: [
        "Browse crops by location",
        "Send buy request",
        "Farmer approval",
        "Contact sharing after acceptance",
        "Finalize amount and payment",
      ],
    },
  ];

  return (
    <div className="bg-[#E7E1C8] min-h-screen py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
          Our Services
        </h1>
        <p className="text-green-700 mt-2 text-sm md:text-base">
          Comprehensive smart farming solutions to support your agricultural journey
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-800 p-2 rounded-lg">
                <div className="bg-green-800 p-2 rounded-lg">
  <Image
    src={service.icon}
    alt={service.title}
    width={20}
    height={20}
    className="invert"
  />
</div>
              </div>
              <h3 className="text-green-800 font-semibold text-md">
                {service.title}
              </h3>
            </div>

            {/* Points */}
            <ul className="space-y-2 text-sm text-green-700">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition">
          View all Services
        </button>
      </div>
    </div>
  );
}