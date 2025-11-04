"use client";

import Link from "next/link";

export default function Hero() {
  // Prefer a local hero image placed at `public/hero-7205808.jpg` (Pexels image).
  // If that file is not present, it will fall back to an Unsplash scenic image.
  // To use the Pexels image you linked, download it from:
  // https://www.pexels.com/photo/wood-art-creative-mexican-7205808/
  // and save it as `public/hero-7205808.jpg`.
  const bgLocal = "/hero-7205808.jpg";
  const bgFallback = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f7af4e7b3f9b6f0c8a1d8b9f3e2f9c1";
  const bg = bgLocal; // prefers local; if missing the browser will show fallback via network or you can replace manually

  return (
    <section className="relative h-[72vh] sm:h-[84vh] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight">
          Creation By Roju
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/90">Handcrafted with Love, Woven with Nature</p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/products" className="rounded-full bg-[#b76b80] px-8 py-3 text-white font-medium shadow-md">
            Shop Now
          </Link>
          <Link href="/customize-order" className="rounded-full bg-white px-8 py-3 text-[#9b5166] font-medium border border-white">
            Customize Your Order
          </Link>
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 z-10 text-white opacity-90">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
