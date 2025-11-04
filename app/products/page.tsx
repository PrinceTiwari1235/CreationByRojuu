import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";

export default function ProductsPage() {
  return (
    <div>
      <section>
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="mt-2 text-zinc-600">Browse our selection of sample products.</p>
      </section>

      <div className="mt-6">
        <ProductsSection />
      </div>

      <Newsletter />
    </div>
  );
}
