"use client";

export default function SupportPage() {
  return (
    <section className="w-full bg-[#f3f3f3]">
      
      {/* TOP SECTION */}
      <div className="bg-[#e7dfc9] py-10 md:py-14">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* BUSINESS HOURS */}
          <div className="bg-[#f4f4f4] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              Business Hours
            </h2>

            <div className="space-y-4 text-sm md:text-base">
              
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-800">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-800">9:00 AM - 2:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-700">Sunday</span>
                <span className="text-red-500 font-medium">Closed</span>
              </div>

            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-[#f4f4f4] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-green-900 mb-4">
              Quick Actions
            </h2>

            <div className="flex flex-col gap-4">
              <button className="bg-green-800 text-white py-3 rounded-lg text-sm md:text-base">
                Register as New User
              </button>

              <button className="bg-green-800 text-white py-3 rounded-lg text-sm md:text-base">
                View All Services
              </button>

              <button className="bg-green-800 text-white py-3 rounded-lg text-sm md:text-base">
                Learn How It Works
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* COMMON QUESTIONS */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10 md:py-14">
        
        <h2 className="text-xl md:text-2xl font-semibold text-green-900 mb-6">
          Common Questions
        </h2>

        <div className="space-y-6">
          
          {/* Q1 */}
          <div className="bg-[#e7dfc9] rounded-xl p-5 md:p-6">
            <h3 className="font-semibold text-green-900 mb-2">
              How do I register with KROPSY?
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              You can register through our website registration form or contact our support team for assisted registration.
            </p>
          </div>

          {/* Q2 */}
          <div className="bg-[#e7dfc9] rounded-xl p-5 md:p-6">
            <h3 className="font-semibold text-green-900 mb-2">
              What is a PVP card?
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              The PVP (Personal Verification Profile) card is your digital identity within the KROPSY ecosystem, featuring QR-based login and secure authentication.
            </p>
          </div>

          {/* Q3 */}
          <div className="bg-[#e7dfc9] rounded-xl p-5 md:p-6">
            <h3 className="font-semibold text-green-900 mb-2">
              When will the mobile app be available?
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              The KROPSY mobile app is currently in development and will be launched soon. Register now to stay updated.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}