"use client";

export default function RegisterFormExact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-[#e7e1d1] rounded-2xl p-10">

        {/* FORM */}
   <div className="space-y-8">

  {/* FULL NAME */}
  <div className="grid grid-cols-[260px_1fr] items-center gap-8">
    <p className="text-sm text-gray-700">
      Full Name / Business Name *
    </p>
    <input
      type="text"
      placeholder="Enter full name"
      className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />
  </div>

  {/* MOBILE + OTP */}
 {/* MOBILE + OTP */}
<div className="grid grid-cols-[260px_1fr] items-center gap-8">
  <p className="text-sm text-gray-700">
    Mobile Number *
  </p>

  <div className="grid grid-cols-2 gap-x-12 gap-y-3 items-center">

    {/* Mobile */}
    <input
      type="text"
      placeholder="Enter your mobile number"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />

    {/* OTP Label */}
    <p className="text-sm text-gray-700">
      OTP Verification *
    </p>

    {/* Empty space (to align) */}
    <div></div>

    {/* OTP Input */}
    <input
      type="text"
      placeholder="Enter 6-digit OTP"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />
  </div>
</div>


{/* VILLAGE + DISTRICT */}
<div className="grid grid-cols-[260px_1fr] items-center gap-8">
  <p className="text-sm text-gray-700">
    Village *
  </p>

  <div className="grid grid-cols-2 gap-x-12 gap-y-3 items-center">

    <input
      type="text"
      placeholder="Enter your village"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />

    <p className="text-sm text-gray-700">
      District *
    </p>

    <div></div>

    <input
      type="text"
      placeholder="Enter your district"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />
  </div>
</div>


{/* MANDAL + STATE */}
<div className="grid grid-cols-[260px_1fr] items-center gap-8">
  <p className="text-sm text-gray-700">
    Mandal / Taluk *
  </p>

  <div className="grid grid-cols-2 gap-x-12 gap-y-3 items-center">

    <input
      type="text"
      placeholder="Enter your mandal / taluk"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />

    <p className="text-sm text-gray-700">
      State *
    </p>

    <div></div>

    <input
      type="text"
      placeholder="Enter your state"
      className="bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
    />
  </div>
</div>

  {/* VILLAGE + DISTRICT */}
  <div className="grid grid-cols-[260px_1fr] items-center gap-8">
    <p className="text-sm text-gray-700">
      Village *
    </p>

    <div className="grid grid-cols-2 gap-10">
      <input
        type="text"
        placeholder="Enter your village"
        className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
      />

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          District *
        </span>
        <input
          type="text"
          placeholder="Enter your district"
          className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
        />
      </div>
    </div>
  </div>

  {/* MANDAL + STATE */}
  <div className="grid grid-cols-[260px_1fr] items-center gap-8">
    <p className="text-sm text-gray-700">
      Mandal / Taluk *
    </p>

    <div className="grid grid-cols-2 gap-10">
      <input
        type="text"
        placeholder="Enter your mandal / taluk"
        className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
      />

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          State *
        </span>
        <input
          type="text"
          placeholder="Enter your state"
          className="w-full bg-gray-100 px-4 py-2 rounded-xl text-sm outline-none"
        />
      </div>
    </div>
  </div>

  {/* ADDRESS */}
  <div className="flex grid grid-cols-[260px_1fr] gap-8">
    <p className="text-sm text-gray-700 pt-2">
      Address / Landmark
    </p>

    <textarea
      rows={4}
      placeholder="Enter your Address / Landmark"
      className="w-[600px] bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none resize-none"
    />
  </div>

  {/* PROFILE PHOTO */}
  <div className="grid grid-cols-[260px_1fr] items-center gap-8">
    <p className="text-sm text-gray-700">
      Profile Photo
    </p>

    <button className="w-fit bg-gray-200 px-4 py-2 rounded-xl text-sm hover:bg-gray-300 transition">
      Upload ⬆
    </button>
  </div>

</div>
      </div>
    </div>
  );
}