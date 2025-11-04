"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  description?: string;
};

const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, title: "Handmade Notebook", price: "$12", description: "Small lined notebook" },
  { id: 2, title: "Art Print - Sunset", price: "$25", description: "A4 print" },
  { id: 3, title: "Ceramic Mug", price: "$18", description: "12oz mug" },
  { id: 4, title: "Sticker Pack", price: "$5", description: "5 stickers" },
];

export default function ProductGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_PRODUCTS;
    return SAMPLE_PRODUCTS.filter(
      (p) => p.title.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          aria-label="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 rounded border px-3 py-2"
        />
        <button onClick={() => setQuery("")} className="rounded border px-3 py-2">
          Clear
        </button>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <li key={p.id} className="rounded border p-4">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">{p.title}</h3>
              <span className="text-sm text-zinc-600">{p.price}</span>
            </div>
            {p.description && <p className="mt-2 text-sm text-zinc-600">{p.description}</p>}
            <div className="mt-4">
              <button className="rounded bg-black px-3 py-1 text-white">Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
