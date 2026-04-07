"use client";

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
          <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm hover:bg-green-700 transition">
            Register Now
          </button>

          <button className="bg-white text-green-800 px-6 py-2 rounded-full text-sm border border-gray-300 hover:bg-gray-100 transition">
            Contact Support
          </button>
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
          <div className="bg-[#E7E1C8] px-10 py-6 rounded-2xl min-w-70 shadow-sm">
            <p className="text-green-800 font-medium mb-2">Mobile</p>
            <p className="text-green-700 text-sm">
              +91 8184945039
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-[#E7E1C8] px-10 py-6 rounded-2xl min-w-70 shadow-sm">
            <p className="text-green-800 font-medium mb-2">Email</p>
            <p className="text-green-700 text-sm">
              business-support@kropsysupport.com
            </p>
          </div>
        </div>

        {/* FOOT TEXT */}
        <p className="text-green-700 text-sm">
          For registration, service support, and onboarding assistance, contact our support team.
        </p>
      </div>
    </div>
  );
}