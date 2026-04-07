export default function QRIcon() {
  return (
    <div className="bg-green-800 p-4 rounded-md inline-block">
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 text-yellow-400"
        fill="currentColor"
      >
        {/* Top Left */}
        <rect x="5" y="5" width="20" height="20" rx="4" />
        <rect x="10" y="10" width="10" height="10" rx="2" fill="white" />

        {/* Top Right */}
        <rect x="75" y="5" width="20" height="20" rx="4" />
        <rect x="80" y="10" width="10" height="10" rx="2" fill="white" />

        {/* Bottom Left */}
        <rect x="5" y="75" width="20" height="20" rx="4" />
        <rect x="10" y="80" width="10" height="10" rx="2" fill="white" />

        {/* Bottom Right */}
        <rect x="55" y="55" width="15" height="15" rx="3" />

        {/* Dots */}
        <circle cx="40" cy="20" r="3" />
        <circle cx="60" cy="20" r="3" />
        <circle cx="40" cy="60" r="3" />
        <circle cx="70" cy="40" r="3" />
        <circle cx="20" cy="50" r="3" />
      </svg>
    </div>
  );
}