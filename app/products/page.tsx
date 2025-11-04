import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";
import ProductForm from "../components/ProductForm";

export default function ProductsPage() {
  // Only pass serializable initial data to the client component
  const initialValues = { name: "" }; // or derived serializable data

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <section>
        <p className="mt-2 text-zinc-600">Browse our selection of sample products.</p>
      </section>

      <div className="mt-6">
        <ProductsSection />
      </div>

      <Newsletter />
      <ProductForm initialValues={initialValues} />
    </main>
  );
}
