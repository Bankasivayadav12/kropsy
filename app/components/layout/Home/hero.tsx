"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
const slides = [
  {
  video: "/hero1.mp4",
  title: "KROPSY – Smart Farming Made Simple",
  desc1: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling",
  desc2: "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
},
  {
    video: "/hero2.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc1: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling",
    desc2: "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
  },
  {
    video: "/hero3.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc1: "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling.",
    desc2: "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
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
  h-[60vh] sm:h-[60vh] md:h-[80vh] lg:h-[80vh] 
  rounded-2xl overflow-hidden 
  mt-6 sm:mt-10 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3
  max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-6xl xl:max-w-350 
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
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-26 text-white max-w-3xl mt-25 md:mt-10">
        <h1 className="text-2xl md:text-3xl  font-bold leading-snug">
          {slides[current].title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {slides[current].desc1}
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {slides[current].desc2}
        </p>

        {/* 🔘 Buttons */}
        <div className="flex gap-4 mt-6">
  <Link href="/register">
    <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
      Register Now
    </button>
  </Link>

  <Link href="/contact">
    <button className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition">
      Contact Support
    </button>
  </Link>
</div>
      </div>

      {/* ◀️ Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20  hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" size={42} />
      </button>

      {/* ▶️ Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20  hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="text-white" size={42} />
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