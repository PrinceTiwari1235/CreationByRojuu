import Link from "next/link";
import Head from "next/head";

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
    <>
      <Head>
        <title>Handcrafted Products | Creation By Roju</title>
        <meta
          name="description"
          content="Discover artisan products by Creation By Roju. Handmade flowers, bouquets, crafts by Rojina Rai. Unique, sustainable, and custom creations."
        />
        <meta
          name="keywords"
          content="creation, creation by roju, creationbyroju, creationbyrojuu, creation by rojuu, rojina, rojina rai, flower, bouquet, handmade, artisan, crafts"
        />
      </Head>
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <header>
          <h1 className="text-xl md:text-2xl font-bold mb-6">Handcrafted Products | Creation By Roju</h1>
          <p className="mt-2 text-zinc-600">Browse our selection of artisan-made products. Unique, sustainable, and crafted with care.</p>
        </header>
        <section aria-label="Product List" className="mt-6">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <article key={p.id} className="rounded border p-4" itemScope itemType="http://schema.org/Product">
                <header className="flex items-baseline justify-between">
                  <h2 className="font-medium text-base md:text-lg" itemProp="name">{p.name}</h2>
                  <span className="text-sm text-zinc-600" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                    <meta itemProp="priceCurrency" content="USD" />
                    <span itemProp="price">{p.price.replace("$", "")}</span>
                  </span>
                </header>
                {p.description && <p className="mt-2 text-sm text-zinc-600" itemProp="description">{p.description}</p>}
              </article>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
