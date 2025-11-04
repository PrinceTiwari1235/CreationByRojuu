import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 pt-10 pb-4 animate-fade-in" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Brand & Social */}
  <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-serif font-bold text-2xl mb-2">Creation By Roju</h2>
          <p className="mb-6 text-zinc-300">Handmade with <span className="text-rose-400">♥</span> in Oregon</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition-colors duration-300 transform hover:scale-110">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition-colors duration-300 transform hover:scale-110">
              <FaFacebookF size={22} />
            </a>
            <a href="#" aria-label="Pinterest" className="bg-zinc-800 rounded-full p-3 hover:bg-rose-400 transition-colors duration-300 transform hover:scale-110">
              <FaPinterestP size={22} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
  <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-zinc-300">
            <li><a href="/" className="hover:text-white transition-colors duration-200">Home</a></li>
            <li><a href="/shop" className="hover:text-white transition-colors duration-200">Shop</a></li>
            <li><a href="/story" className="hover:text-white transition-colors duration-200">Story</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
        {/* Newsletter */}
  <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-lg mb-3">Join our circle</h3>
          <p className="mb-4 text-zinc-300">Get updates, new drops and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full items-center">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-full px-5 py-3 bg-zinc-800 text-zinc-100 placeholder-zinc-400 border-none focus:outline-none w-full sm:w-auto"
            />
            <button
              type="submit"
              className="rounded-full px-6 py-3 bg-rose-400 text-white font-semibold hover:bg-rose-500 transition-colors duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Bottom bar */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between text-zinc-400 text-sm gap-4 animate-fade-in delay-100">
        <div>
          © 2025 Creation By Roju • All rights reserved
          <div className="mt-1 text-xs">
            Also known as: Creation, CreationByRoju, CreationByRojuu, Rojuu
          </div>
        </div>
  <div className="flex gap-6 mt-4 md:mt-0 flex-wrap justify-center md:justify-end w-full md:w-auto">
          <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
