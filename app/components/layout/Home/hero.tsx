"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    video: "/hero1.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling.",
  },
  {
    video: "/hero2.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling.",
  },
  {
    video: "/hero3.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // ⏱ Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative 
  h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] 
  rounded-2xl overflow-hidden 
  mt-6 sm:mt-8 md:mt-10 
  max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1400px] 
  mx-auto 
  ">
      {/* 🎥 Background Video */}
      <video
        key={slides[current].video}
        src={slides[current].video}
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 📄 Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 text-white max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          {slides[current].title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {slides[current].desc}
        </p>

        {/* 🔘 Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
            Register Now
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            Contact Support
          </button>
        </div>
      </div>

      {/* ◀️ Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* ▶️ Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* 🔘 Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}