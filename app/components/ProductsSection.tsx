import ProductGrid from "./ProductGrid";

export default function ProductsSection() {
  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold">All Products</h3>
      <div className="mt-4">
        <ProductGrid />
      </div>
    </section>
  );
}
