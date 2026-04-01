"use client";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const links = [
    ["Home", "About"],
    ["Services", "How It Work"],
    ["Register", "Contact"],
  ];

  return (
    <footer className="bg-[#F3F3F3] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        
        {/* LEFT - LOGO & TAGLINE */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Replace with your logo */}
            <Image
                src="/logo.png"
                alt="KROPSY Logo"
                width={70}
                height={70}
                className="object-contain"
            />
          </div>

          <p className="text-yellow-500 italic text-lg">
            Farmer's Friend, Future of Farming
          </p>
        </div>

        {/* CENTER - QUICK LINKS */}
        <div>
          <h3 className="text-green-800 font-semibold text-xl mb-4">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-y-4 text-green-800 text-lg">
            {links.map((row, i) =>
              row.map((item, index) => (
                <span key={`${i}-${index}`} className="cursor-pointer hover:underline">
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <h3 className="text-green-800 font-semibold text-xl mb-4">
            Contact
          </h3>

          <div className="space-y-4 text-green-800 text-lg">
            
            {/* PHONE */}
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 94 93 11 58 13</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>business-support@kropsysupport.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="mt-10 border-t border-green-800/40"></div>
    </footer>
  );
}