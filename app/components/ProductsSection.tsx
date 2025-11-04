import ProductGrid from "./ProductGrid";

export default function ProductsSection() {
  return (
    <section className="py-8 px-4 md:px-0" aria-label="All Products">
      <h3 className="text-xl md:text-2xl font-semibold">All Products | Creation By Roju</h3>
      <div className="mt-4">
        <ProductGrid />
      </div>
    </section>
  );
}
