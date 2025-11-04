'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch('/api/admin/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id: string) {
    if (!confirm('Are you sure?')) return;

    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      setProducts(products.filter((p: any) => p.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-zinc-800">Admin Dashboard</h1>
          <button
            onClick={() => router.push('/admin/login')}
            className="text-zinc-600 hover:text-zinc-900 font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <div className="mb-8 flex gap-4">
          <Link
            href="/admin/dashboard"
            className="px-4 py-2 bg-[#b76b80] text-white rounded-lg font-medium"
          >
            Products
          </Link>
          <Link
            href="/admin/featured-products"
            className="px-4 py-2 bg-zinc-200 text-zinc-800 rounded-lg font-medium hover:bg-zinc-300"
          >
            Featured Products
          </Link>
          <Link
            href="/admin/media"
            className="px-4 py-2 bg-zinc-200 text-zinc-800 rounded-lg font-medium hover:bg-zinc-300"
          >
            Media
          </Link>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-zinc-800">All Products</h2>
            <Link
              href="/admin/dashboard/add-product"
              className="px-4 py-2 bg-[#b76b80] text-white rounded-lg font-medium hover:bg-[#a05a6f]"
            >
              Add Product
            </Link>
          </div>

          {loading ? (
            <p className="text-zinc-600">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-zinc-600">No products found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-zinc-50">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Name</th>
                    <th className="px-4 py-2 font-semibold">Price</th>
                    <th className="px-4 py-2 font-semibold">Description</th>
                    <th className="px-4 py-2 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: any) => (
                    <tr key={product.id} className="border-b hover:bg-zinc-50">
                      <td className="px-4 py-2 font-medium">{product.name}</td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2 text-zinc-600">{product.description}</td>
                      <td className="px-4 py-2 flex gap-2">
                        <Link
                          href={`/admin/dashboard/edit-product/${product.id}`}
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
