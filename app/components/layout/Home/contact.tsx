"use client";

import Link from "next/link";

export default function RegisterContactPage() {
  return (
    <div className="w-full">

      {/* ================= REGISTER SECTION ================= */}
      <div className="bg-[#E7E1C8] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
          Register With KROPSY Today
        </h2>

        <p className="text-green-700 text-sm md:text-base mb-6">
          Join the KROPSY smart farming ecosystem and start your digital agriculture journey.
        </p>

        <div className="flex justify-center gap-4">

          {/* REGISTER */}
          <Link href="/register">
            <span className="
              bg-green-800 text-white px-6 py-2 rounded-full text-sm
              hover:bg-green-700
              border border-transparent hover:border-green-800
              transition-all duration-300
              hover:scale-105 shadow-md cursor-pointer inline-block
            ">
              Register Now
            </span>
          </Link>

          {/* CONTACT */}
          <Link href="/contact">
            <span className="
              bg-white text-green-800 px-6 py-2 rounded-full text-sm border border-gray-300
              hover:border-green-800 hover:bg-gray-100
              transition-all duration-300
              hover:scale-105 shadow-md cursor-pointer inline-block
            ">
              Contact Support
            </span>
          </Link>

        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div className="bg-[#EFEFEF] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-10">
          Contact Us
        </h2>

        {/* CONTACT CARDS */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">

          {/* MOBILE */}
          <a href="tel:+918184945039">
            <div className="
              bg-[#E7E1C8] px-10 py-6 rounded-2xl min-w-[260px] shadow-sm
              border border-transparent hover:border-green-800
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
              cursor-pointer
            ">
              <p className="text-green-800 font-medium mb-2">Mobile</p>
              <p className="text-green-700 text-sm hover:underline">
                +91 9493115813
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a href="mailto:business-support@kropsysupport.com">
            <div className="
              bg-[#E7E1C8] px-10 py-6 rounded-2xl min-w-[260px] shadow-sm
              border border-transparent hover:border-green-800
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
              cursor-pointer
            ">
              <p className="text-green-800 font-medium mb-2">Email</p>
              <p className="text-green-700 text-sm break-all hover:underline">
                business-support@kropsysupport.com
              </p>
            </div>
          </a>

        </div>

        {/* FOOT TEXT */}
        <p className="text-green-700 text-sm">
          For registration, service support, and onboarding assistance, contact our support team.
        </p>
      </div>
    </div>
  );
}