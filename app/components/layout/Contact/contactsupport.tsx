import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className=" bg-gray-100">
      
      {/* Header */}
      <div className="bg-green-800 text-white text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact KROPSY Support
        </h1>
        <p className="mt-3 text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
          For registration support, business inquiries, onboarding help, and
          platform information, please contact us.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto px-4 mt-10 pb-10">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Phone Card */}
          <div className="bg-[#e7dcc3] rounded-2xl p-6 shadow-md flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <Phone size={22} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Phone Number
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Call Us Directly
              </p>

              <p className="text-xl font-bold text-green-900">
                8184945039
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Available During Business Hours
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-[#e7dcc3] rounded-2xl p-6 shadow-md flex items-start gap-4">
            <div className="bg-green-700 text-white p-3 rounded-full">
              <Mail size={22} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Email Address
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Send Us a Message
              </p>

              <p className="text-lg font-semibold text-green-900 break-all">
                business-support@kropsysupport.com
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Available During Business Hours
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}