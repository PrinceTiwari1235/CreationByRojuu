"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-[#b76b80] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xl font-serif font-bold text-[#b76b80] animate-pulse">Creation By Roju</span>
      </div>
    </div>
  );
}
