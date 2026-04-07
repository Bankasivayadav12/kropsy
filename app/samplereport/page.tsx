"use client";

import { useState } from "react";
import { Users } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Select", value: "" },
    { label: "Farmer", value: "Farmer" },
    { label: "Buyer", value: "Buyer" },
    { label: "Manpower Vendor", value: "Vendor" },
    { label: "Machinery Owner", value: "Business" },
  ];

  // OTP states
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [otp, setOtp] = useState<string[]>([]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 Generate OTP
  const generateOtp = () => {
    if (!/^[6-9]\d{9}$/.test(form.mobile || "")) {
      alert("Enter valid mobile number");
      return;
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setShowOtpBox(true);

    alert(`OTP: ${newOtp}`); // testing
  };

  // 🔥 Verify OTP
  const verifyOtp = () => {
    if (otp.join("") === generatedOtp) {
      setOtpVerified(true);
      alert("OTP Verified ✅");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setForm({
        ...form,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  const handleSubmit = async () => {
    setLoading(true);

    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);
    alert("Registered ✅");
  };

  return (
    <div className="w-full bg-gray-100">
      {/* HEADER */}
      <div className="bg-green-800 text-center py-10 px-4">
        <Users className="text-white mx-auto mb-2" size={32} />
        <h1 className="text-white text-2xl font-semibold">
          Register With KROPSY
        </h1>
        <p className="text-gray-200 text-sm mt-1">
          Please complete the registration form.
        </p>
      </div>

      {/* USER TYPE */}
      <div className="flex justify-center items-center gap-4 py-6">
        <p className="text-gray-700 text-sm">Select user type</p>

        <div className="relative w-48">
          {/* SELECT BOX */}
          <div
            onClick={() => setOpen(!open)}
            className="bg-yellow-500 px-6 py-2 rounded-full flex justify-between items-center cursor-pointer"
          >
            <span className="text-sm font-medium">
              {form.user_type || "Select"}
            </span>

            {/* ARROW */}
            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg overflow-hidden z-50">
              {options.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setForm({ ...form, user_type: item.value });
                    setOpen(false);
                  }}
                  className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-100 ${
                    form.user_type === item.value
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-[#d9d1b8] rounded-2xl px-10 py-8">
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
            {/* FULL NAME */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr] gap-7 items-center">
                <label className="whitespace-nowrap">
                  Full Name / Business Name *
                </label>
                <input
                  name="full_name"
                  onChange={handleChange}
                  placeholder="Enter Full Name / Business Name"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                />
              </div>
            </div>

            {/* MOBILE + OTP */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr_180px_1fr] gap-7 items-center">
                <label>Mobile Number *</label>
                <input
                  name="mobile"
                  onChange={handleChange}
                  placeholder="Enter 10-digit Mobile Number"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                  disabled={otpVerified}
                />

                <label>OTP Verification *</label>

                {!showOtpBox ? (
                  <button
                    onClick={generateOtp}
                    className="bg-green-800 text-white px-4 py-2 rounded-full"
                  >
                    OTP Verification
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      maxLength={6}
                      onChange={(e) => setOtp(e.target.value.split(""))}
                      className="bg-gray-200 px-4 py-2 rounded-xl"
                    />
                    <button
                      onClick={verifyOtp}
                      className="bg-blue-600 text-white px-3 rounded"
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>

              {otpVerified && (
                <p className="text-green-700 ml-[180px] mt-2">
                  OTP Verified ✅
                </p>
              )}
            </div>

            {/* VILLAGE + DISTRICT */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr_180px_1fr] gap-7">
                <label>Village *</label>
                <input
                  name="village"
                  onChange={handleChange}
                  placeholder="Enter Village Name"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                />

                <label>District *</label>
                <input
                  name="district"
                  onChange={handleChange}
                  placeholder="Enter District Name"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                />
              </div>
            </div>

            {/* MANDAL + STATE */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr_180px_1fr] gap-7">
                <label>Mandal / Taluk *</label>
                <input
                  name="mandal"
                  onChange={handleChange}
                  placeholder="Enter Mandal / Taluk"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                />

                <label>State *</label>
                <input
                  name="state"
                  onChange={handleChange}
                  placeholder="Enter State Name"
                  className="bg-gray-200 px-4 py-2 rounded-xl"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr] gap-7 items-start">
                <label className="pt-2">Address / Landmark</label>
                <textarea
                  name="address"
                  onChange={handleChange}
                  className="bg-gray-200 px-4 py-3 rounded-xl h-24"
                  placeholder="Enter Address / Landmark"
                />
              </div>
            </div>

            {/* LOCATION + PHOTO */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-[180px_1fr_180px_1fr] gap-7 items-center">
                <label>Location</label>
                <button
                  onClick={getLocation}
                  className="bg-gray-200 py-2 rounded-xl"
                >
                  Select Current Location
                </button>

                <label>Profile Photo</label>
                <input
                  type="file"
                  className="bg-gray-200 py-2 rounded-xl px-2"
                />
              </div>

              {form.latitude && (
                <p className="ml-[180px] text-xs mt-2">
                  {form.latitude}, {form.longitude}
                </p>
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center gap-10 mt-10">
            <button
              onClick={handleSubmit}
              disabled={!otpVerified || loading}
              className="bg-green-800 text-white px-12 py-2 rounded-full"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <button className="bg-yellow-500 px-12 py-2 rounded-full">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
