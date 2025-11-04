import Link from "next/link";
import { FaCheckCircle, FaLeaf, FaHeart, FaPaintBrush } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-zinc-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-4">
            Every Thread Tells a Tale
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Where tradition meets modern craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section with Decorative Elements */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#b76b80]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#b76b80]/10 rounded-full blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-7205807.jpg"
                alt="Artisan weaving"
                className="w-full h-auto object-cover aspect-square"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-[#b76b80] rounded-full p-3">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-zinc-900">100+</p>
                    <p className="text-sm text-zinc-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <p className="text-zinc-700 text-lg mb-8 leading-relaxed">
              At <span className="font-semibold text-zinc-900">Creation By Roju</span>, every bloom and every stitch carries a memory. We combine traditional techniques with contemporary sensibilities to craft one-of-a-kind pieces tailored to you.
            </p>

            {/* Feature Cards */}
            <div className="grid gap-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-50 rounded-xl p-3 flex-shrink-0">
                  <FaLeaf className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Eco Materials</h3>
                  <p className="text-zinc-600 text-sm">Sustainable fibers & natural dyes for conscious crafting</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-50 rounded-xl p-3 flex-shrink-0">
                  <FaHeart className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Local Artisans</h3>
                  <p className="text-zinc-600 text-sm">Handcrafted with care by skilled craftspeople</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-50 rounded-xl p-3 flex-shrink-0">
                  <FaPaintBrush className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">Custom Options</h3>
                  <p className="text-zinc-600 text-sm">Personalize color, size, and motif to match your vision</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/customize"
                className="group relative rounded-full bg-[#b76b80] px-8 py-4 text-white font-semibold shadow-lg text-center overflow-hidden transition-all hover:shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Customize Your Order</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a35a6f] to-[#b76b80] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link
                href="/products"
                className="rounded-full border-2 border-zinc-200 px-8 py-4 text-zinc-800 font-semibold text-center hover:border-[#b76b80] hover:text-[#b76b80] transition-all hover:scale-105"
              >
                Browse Creations
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-zinc-200">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-zinc-600">Handmade Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-zinc-600">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-zinc-600">Unique Designs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}