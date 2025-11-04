"use client";
import React from "react";
import Image from "next/image";

// Example static featured products
const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    description: "A beautiful artisan vase made from natural clay.",
    price: "$45",
    image: "/vase-flower.jpg", // matches the vase image
    badge: "New",
    badgeColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Wooden Sculpture",
    description: "Unique sculpture carved from sustainable wood.",
    price: "$120",
    image: "/wooden-sculpture.jpg", // matches the wooden sculpture image
    badge: "Featured",
    badgeColor: "bg-yellow-500",
  },
  {
    id: 3,
    name: "Ceramic Bowl",
    description: "Hand-painted ceramic bowl for your kitchen.",
    price: "$30",
    image: "/ceramic-bowl.jpg", // matches the ceramic bowl image
    badge: "Best Seller",
    badgeColor: "bg-green-500",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-creations" className="py-16 bg-white w-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Featured Creations
          </h2>
          <p className="text-zinc-600 text-lg">
            Discover our handpicked collection of artisan-made treasures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={288}
                  className="object-cover w-full h-full"
                  style={{ objectFit: "cover" }}
                  priority
                />
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-zinc-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-zinc-600 text-base mb-6">
                  {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#b76b80]">
                    {product.price}
                  </span>
                  <button className="rounded-full bg-[#b76b80] hover:bg-[#a05a6f] px-6 py-2 text-white font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
