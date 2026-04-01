"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* 🔰 Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Kropsy Logo"
              width={70}
              height={70}
            />
          </Link>

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-green-600 transition font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 🟢 Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/register">
              <button className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition">
                Register Now
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full font-medium hover:bg-green-50 transition">
                Contact Support
              </button>
            </Link>
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
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-green-600 font-medium"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <Link href="/register">
              <button className="bg-green-700 text-white px-5 py-2 rounded-full font-medium">
                Register Now
              </button>
            </Link>

            <Link href="/contact">
              <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full font-medium">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;