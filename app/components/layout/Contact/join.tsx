export default function ReadyToJoin() {
  return (
    <section className="w-full bg-[#145c2c] py-6 md:py-10 text-center">
      
      {/* Container */}
      <div className="max-w-[900px] mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Ready To Join KROPSY?
        </h2>

        {/* Subtext */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6">
          Start your smart farming journey today with KROPSY's digital agriculture platform.
        </p>

        {/* Button */}
        <button className="bg-[#d4a62a] hover:bg-[#c29522] text-black px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition">
          Register Now
        </button>

      </div>
    </section>
  );
}