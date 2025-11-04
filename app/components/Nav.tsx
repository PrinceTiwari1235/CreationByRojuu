"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" aria-label="CreationForYou home">
            <Logo />
          </Link>
        </div>

        {/* Center navigation - keep centered on medium+ screens */}
        <nav className="hidden md:flex md:flex-1 md:justify-center">
          <ul className="flex gap-8 items-center">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions + mobile hamburger */}
        <div className="flex items-center gap-4">
          <Link href="/customize" className="hidden sm:inline-block rounded-full bg-[#b76b80] px-5 py-2 text-white shadow-sm hover:opacity-95">
            Customize Order
          </Link>

          {/* Hamburger - visible on small screens */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t bg-white`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => {
                    setOpen(false);
                    // Always load /products for the Products link
                    if (l.label === "Products") {
                      router.push("/products");
                    } else {
                      router.push(l.href);
                    }
                  }}
                  className="block text-base text-zinc-700 w-full text-left"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/customize");
                }}
                className="inline-block rounded-full bg-[#b76b80] px-4 py-2 text-white"
              >
                Customize Order
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
