export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Simple spool icon */}
      <svg
        aria-hidden
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <circle cx="12" cy="8" r="3" fill="#f8f0f3" stroke="#9b5166" strokeWidth="1.2" />
        <rect x="9" y="6" width="6" height="2" rx="1" fill="#9b5166" />
        <path d="M6 17c1-2 3-3 6-3s5 1 6 3" stroke="#9b5166" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 12v2" stroke="#9b5166" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 12v2" stroke="#9b5166" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      <span className="text-lg font-semibold text-[#9b5166]">CBR</span>
    </div>
  );
}
