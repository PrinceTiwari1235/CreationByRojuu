"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#featured-creations", label: "Featured Product" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav({ onOpenCustomizeOrder }: { onOpenCustomizeOrder?: () => void }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Smooth scroll handler for anchor links
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <header className="w-full bg-white/80 backdrop-blur-sm animate-fade-in sticky top-0 z-50 shadow-sm">
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
                  {l.href.startsWith("/#") ? (
                    <button
                      type="button"
                      onClick={() => handleNavClick(l.href)}
                      className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-200 transform hover:scale-105 hover:underline underline-offset-4 bg-transparent border-none cursor-pointer"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <Link href={l.href} className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors duration-200 transform hover:scale-105 hover:underline underline-offset-4">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions + mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden sm:inline-block rounded-full bg-[#b76b80] px-5 py-2 text-white shadow-sm hover:opacity-95 transition duration-200 transform hover:scale-105"
              onClick={() => {
                if (onOpenCustomizeOrder) {
                  onOpenCustomizeOrder();
                } else {
                  router.push("/customize-order");
                }
              }}
            >
              Customize Order
            </button>

            {/* Hamburger - visible on small screens */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 md:hidden transition duration-200 transform hover:scale-110"
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
      </header>

      {/* Mobile menu panel - rendered outside header, overlays content */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed top-0 left-0 w-full z-50 border-t bg-white animate-fade-in"
        >
          <div className="px-4 py-4">
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("/#") ? (
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        handleNavClick(l.href);
                      }}
                      className="block text-base text-zinc-700 w-full text-left transition-colors duration-200 transform hover:scale-105 hover:text-zinc-900 bg-transparent border-none cursor-pointer"
                    >
                      {l.label}
                    </button>
                  ) : (
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
                      className="block text-base text-zinc-700 w-full text-left transition-colors duration-200 transform hover:scale-105 hover:text-zinc-900"
                    >
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    if (onOpenCustomizeOrder) {
                      onOpenCustomizeOrder();
                    } else {
                      router.push("/customize-order");
                    }
                  }}
                  className="inline-block rounded-full bg-[#b76b80] px-4 py-2 text-white transition duration-200 transform hover:scale-105 hover:bg-[#a05a6f]"
                >
                  Customize Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
