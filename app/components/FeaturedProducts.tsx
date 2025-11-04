export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Wildflower Bouquet",
      description: "Preserved blooms, wrapped in linen ribbon.",
      price: "$45",
      badge: "New",
      badgeColor: "bg-[#b76b80]",
      image: "/product-wildflower.jpg",
    },
    {
      id: 2,
      name: "Cotton Whisper Dress",
      description: "Breathable, naturally dyed, one-of-a-kind.",
      price: "$120",
      badge: "One-off",
      badgeColor: "bg-amber-500",
      image: "/product-cotton-dress.jpg",
    },
    {
      id: 3,
      name: "Sunrise Basket",
      description: "Perfect for gifting or home decor.",
      price: "$65",
      badge: "Handmade",
      badgeColor: "bg-zinc-800",
      image: "/product-sunrise-basket.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white w-full">
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
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
