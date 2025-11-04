import Link from "next/link";

// Static sample products
const products = [
  {
    id: 1,
    name: "Handcrafted Vase",
    description: "A beautiful artisan vase made from natural clay.",
    price: "$45",
  },
  {
    id: 2,
    name: "Wooden Sculpture",
    description: "Unique sculpture carved from sustainable wood.",
    price: "$120",
  },
  {
    id: 3,
    name: "Ceramic Bowl",
    description: "Hand-painted ceramic bowl for your kitchen.",
    price: "$30",
  },
];

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Products</h1>
      <section>
        <p className="mt-2 text-zinc-600">Browse our selection of sample products.</p>
      </section>

      <div className="mt-6">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((p) => (
            <li key={p.id} className="rounded border p-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-base md:text-lg">{p.name}</h3>
                <span className="text-sm text-zinc-600">{p.price}</span>
              </div>
              {p.description && <p className="mt-2 text-sm text-zinc-600">{p.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
