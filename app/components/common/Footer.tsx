"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Work", path: "/how-it-works" },
    { name: "Register", path: "/register" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#F3F3F3] pt-12">

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT */}
        <div className="flex flex-col items-start">
          <Image
            src="/kropsyicon.svg"
            alt="KROPSY Logo"
            width={70}
            height={70}
            className="mb-3"
            priority
          />

          <p className="text-yellow-500 italic text-base">
            Farmer&apos;s Friend, Future of Farming
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-green-800 font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-y-3 text-green-800 text-sm">
            {links.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className={`hover:underline ${
                  pathname === item.path ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-green-800 font-semibold text-lg mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-green-800 text-sm">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-800" />
              <span>+91 94 93 11 58 13</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-800" />
              <span>business-support@kropsysupport.com</span>
            </div>

          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="border-t-3 border-green-800"></div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-6 bg-green-800 py-4">
        <p className="text-center text-white text-sm">
          © 2026 KROPSY. All rights reserved.
        </p>
      </div>

    </footer>
  );
}