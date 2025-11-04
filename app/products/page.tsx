import ProductsSection from "../components/ProductsSection";
import Newsletter from "../components/Newsletter";
import ProductForm from "../components/ProductForm";

export default async function ProductsPage() {
  // Server data fetching (keep server-side)
  // const products = await getProducts();

  // Prepare only serializable props for the client component
  const initialValues = { name: "" }; // or derived from server data (primitive/serializable)

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
      <ProductForm initialValues={initialValues} />
    </div>
  );
}
