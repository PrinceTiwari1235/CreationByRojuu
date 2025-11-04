import Link from "next/link";
import Image from "next/image";
// Remove: import { ArrowRight } from "lucide-react";

// Add a simple ArrowRight SVG icon component
const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M7 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const products = [
  {
    id: 1,
    name: "Wildflower Bouquet",
    price: "$45",
    href: "/products/wildflower-bouquet",
    image: "/wildflower-bouquet.jpg",
    button: "View Details",
  },
  {
    id: 2,
    name: "Cotton Whisper Dress",
    price: "$120",
    href: "/products/cotton-whisper-dress",
    image: "/cotton-whisper-cloth.jpg",
    button: "View Details",
  },
  {
    id: 3,
    name: "Sunrise Basket",
    price: "$65",
    href: "/products/sunrise-basket",
    image: "/sunrise-basket.jpg",
    button: "View Details",
  },
  {
    id: 4,
    name: "Handcraft Essentials",
    price: "From $10",
    href: "/collections/handcraft-essentials",
    image: "/handcraft-essentials.jpg",
    button: "View Details",
  },
  {
    id: 5,
    name: "Bespoke Weaves",
    price: "Custom pricing",
    href: "/customize",
    image: "/bespoke-weaves.jpg",
    button: "View Details",
  },
  {
    id: 6,
    name: "Studio Collections",
    price: "Shop unique",
    href: "/collections/studio",
    image: "/studio-collections.jpg",
    button: "View Details",
  },
];

const newLocal = (price: string) => {
  const match = price.match(/(\d+)/);
  return match ? match[0] : null;
};
// Helper function to extract numeric price for schema
const getNumericPrice = newLocal;

export default function ProductHighlight() {
  return (
    <section
      id="creations"
      className="py-20 bg-zinc-50/50"
      aria-labelledby="creations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2
            id="creations-heading"
            className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-4"
          >
            Featured Creations
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto text-balance">
            Explore our handpicked selection of unique, artisan-made products.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <li
              key={product.id}
              className="group relative flex flex-col rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out"
              itemScope
              itemType="http://schema.org/Product"
              itemProp="itemListElement"
            >
              <Link href={product.href} className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-zinc-100" style={{ minHeight: "220px", maxHeight: "260px", aspectRatio: "1 / 1" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 3} // Prioritize loading images above the fold
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-800" itemProp="name">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-bold text-[#b76b80]">
                      {product.price}
                    </p>
                    {/* Schema.org for price, only if numeric */}
                    {getNumericPrice(product.price) && (
                      <div itemProp="offers" itemScope itemType="http://schema.org/Offer" className="hidden">
                        <meta itemProp="priceCurrency" content="USD" />
                        <span itemProp="price">{getNumericPrice(product.price)}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Button - Pushed to the bottom */}
                  <div className="mt-auto pt-4 text-right">
                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-300 group-hover:bg-[#b76b80] group-hover:text-white group-hover:shadow-lg">
                      {product.button}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-[#b76b80] px-8 py-4 text-lg text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[#a05a6f] hover:shadow-xl hover:scale-105"
            aria-label="View all products"
          >
            View All Products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}