/* eslint-disable @next/next/no-img-element */
"use client";

export default function AboutHero() {
  const images = [
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  ];

  return (
    <div className="relative bg-green-900 text-center overflow-hidden">
      
      {/* CONTENT */}
      <div className="py-20 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          About KROPSY
        </h1>

        <p className="text-green-200 text-sm md:text-lg max-w-2xl mx-auto">
          Empowering farmers with smart digital solutions for modern agriculture
        </p>
      </div>

      {/* FLOATING SHAPES */}
      <div className="absolute top-10 right-20 w-6 h-6 border-2 border-white rounded-full opacity-70"></div>
      <div className="absolute top-16 right-40 w-8 h-8 border-2 border-white rotate-45 opacity-70"></div>
      <div className="absolute top-40 right-10 w-12 h-12 border-2 border-white rounded-full opacity-70"></div>

      {/* IMAGE CARDS */}
      <div className="relative z-10 flex flex-wrap justify-center items-end gap-6 px-4 pb-20">
        {images.map((img, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg ${
              index === 1
                ? "w-95 h-60 scale-105"
                : "w-75 h-45"
            }`}
          >
            <img
              src={img}
              alt="agri"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* CURVED BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#F3F3F3] rounded-t-[100%]"></div>
    </div>
  );
}