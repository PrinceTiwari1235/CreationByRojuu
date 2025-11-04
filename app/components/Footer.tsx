import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 pt-12 pb-4" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Social */}
        <div>
          <h2 className="font-serif font-bold text-2xl mb-2">Creation By Roju</h2>
          <p className="mb-6 text-zinc-300">Handmade with <span className="text-rose-400">♥</span> in Oregon</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition">
              <FaFacebookF size={22} />
            </a>
            <a href="#" aria-label="Pinterest" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition">
              <FaPinterestP size={22} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-zinc-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition">Shop</a></li>
            <li><a href="/story" className="hover:text-white transition">Story</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-3">Join our circle</h3>
          <p className="mb-4 text-zinc-300">Get updates, new drops and exclusive offers.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-5 py-3 bg-zinc-800 text-zinc-100 placeholder-zinc-400 border-none focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 bg-rose-400 text-white font-semibold hover:bg-rose-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-zinc-400 text-sm gap-2">
        <div>
          © 2025 Creation By Roju • All rights reserved
          <div className="mt-1 text-xs">
            Also known as: Creation, CreationByRoju, CreationByRojuu, Rojuu
          </div>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
