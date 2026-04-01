"use client";

export default function WhoCanJoin() {
  const users = [
    "Farmers",
    "Labour Workers",
    "Vendors / Traders",
    "Machinery / Tool Owners",
    "Soil Testing Vendors",
  ];

  return (
    <div className="bg-[#F3F3F3] py-16 px-4">
      
      {/* ICON */}
      <div className="flex justify-center mb-3">
        <div className="text-green-800 text-3xl">👥</div>
      </div>

      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-800">
        Who Can Join KROPSY
      </h2>

      {/* SUBTEXT */}
      <p className="text-center text-green-700 text-sm mt-2 mb-10">
        KROPSY welcomes all members of the agricultural community
      </p>

      {/* BOXES */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {users.map((item, index) => (
          <div
            key={index}
            className="bg-[#E7E1C8] px-6 py-5 rounded-xl text-green-800 text-sm text-center min-w-[150px] shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}