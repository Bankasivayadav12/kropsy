"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "How It Works",
    "Register",
    "Contact",
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-26">

          {/* 🔰 Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // put your logo in public folder
              alt="Kropsy Logo"
              width={70}
              height={70}
            />
           
          </div>

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-700 hover:text-green-600 transition font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* 🟢 Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition">
              Register Now
            </button>
            <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full font-medium hover:bg-green-50 transition">
              Contact Support
            </button>
          </div>

          {/* 📱 Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white shadow">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-gray-700 hover:text-green-600 font-medium"
            >
              {link}
            </a>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <button className="bg-green-700 text-white px-5 py-2 rounded-full font-medium">
              Register Now
            </button>
            <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full font-medium">
              Contact Support
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;