"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    video: "/hero1.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc1:
      "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling",
    desc2:
      "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
  },
  {
    video: "/hero2.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc1:
      "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling",
    desc2:
      "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
  },
  {
    video: "/hero3.mp4",
    title: "KROPSY – Smart Farming Made Simple",
    desc1:
      "A digital agriculture platform for crop monitoring, soil intelligence, labour and machinery support, and crop buying and selling.",
    desc2:
      "KROPSY helps farmers manage agriculture using smart technology. From AI crop monitoring and soil testing to labour booking and crop sales, KROPSY brings everything into one connected platform.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

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
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 box-border">
      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          mt-6 sm:mt-8 md:mt-10
          h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh]
          rounded-3xl
          overflow-hidden mb-10
        "
      >
        {/* 🎥 Background Video */}
        <video
          key={slides[current].video}
          src={slides[current].video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* 📄 Content */}
        <div
          className="
            absolute inset-0 z-10
            flex flex-col justify-center
            px-10 sm:px-10 md:px-16 lg:px-14
            max-w-2xl
          "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white">
            {slides[current].title}
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            {slides[current].desc1}
          </p>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
            {slides[current].desc2}
          </p>

          {/* 🔘 Buttons */}
          <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
            <Link href="/register">
              <button className="bg-yellow-400 text-black px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-yellow-500 transition-colors">
                Register Now
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
            </Link>
          </div>
        </div>

        {/* ◀️ Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* ▶️ Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ChevronRight className="text-white" size={28} />
        </button>

        {/* 🔘 Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}