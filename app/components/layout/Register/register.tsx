"use client";

import { Users } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HEADER ================= */}
      <div className="bg-green-800 text-center py-10 px-4">
        <div className="flex flex-col items-center justify-center">
          <Users className="text-white mb-2" size={32} />

          <h1 className="text-white text-2xl font-semibold">
            Register With KROPSY
          </h1>

          <p className="text-gray-200 text-sm mt-1">
            Please choose your user type and complete the registration form.
          </p>
        </div>
      </div>

      {/* ================= USER TYPE ================= */}
      <div className="flex items-center justify-center gap-3 py-6">
        <p className="text-gray-700 text-sm">Select user type</p>

        <select className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm outline-none">
          <option>Select</option>
          <option>Farmer</option>
          <option>Vendor</option>
          <option>Business</option>
        </select>
      </div>

      {/* ================= FORM CARD ================= */}
      <div className="max-w-5xl mx-auto px-4 pb-10">
        <div className="bg-[#e7e1d1] rounded-2xl p-8 md:p-10">

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FULL NAME */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">
                Full Name / Business Name *
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* MOBILE */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Mobile Number *
              </label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* OTP */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                OTP Verification *
              </label>
              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* VILLAGE */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Village *
              </label>
              <input
                type="text"
                placeholder="Enter your village"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* DISTRICT */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                District *
              </label>
              <input
                type="text"
                placeholder="Enter your district"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* MANDAL */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Mandal / Taluk *
              </label>
              <input
                type="text"
                placeholder="Enter your mandal / taluk"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* STATE */}
            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                State *
              </label>
              <input
                type="text"
                placeholder="Enter your state"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm"
              />
            </div>

            {/* ADDRESS */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700 mb-1 block">
                Address / Landmark
              </label>
              <textarea
                placeholder="Enter your Address / Landmark"
                rows={3}
                className="w-full bg-gray-100 px-4 py-3 rounded-lg outline-none text-sm resize-none"
              ></textarea>
            </div>

            {/* PROFILE PHOTO */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700 mb-2 block">
                Profile Photo
              </label>

              <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition">
                Upload ⬆
              </button>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">

            <button className="bg-green-800 text-white px-8 py-2 rounded-full text-sm hover:bg-green-900 transition">
              Register
            </button>

            <button className="bg-yellow-500 text-black px-8 py-2 rounded-full text-sm hover:bg-yellow-600 transition">
              Generate Report
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}