'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    badge: '',
    badgeColor: 'bg-[#b76b80]',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to add product');
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-8">
      <div className="max-w-2xl mx-auto px-6">
        <Link href="/admin/dashboard" className="text-[#b76b80] hover:underline mb-6 block">
          ← Back to Dashboard
        </Link>

        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-zinc-800 mb-6">Add New Product</h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Product Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b76b80]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Description</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b76b80]"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Price</label>
              <input
                type="text"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b76b80]"
                placeholder="$45"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Badge</label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b76b80]"
                placeholder="e.g., New, Handmade"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">Badge Color</label>
              <select
                value={formData.badgeColor}
                onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
                className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b76b80]"
              >
                <option value="bg-[#b76b80]">Pink</option>
                <option value="bg-amber-500">Amber</option>
                <option value="bg-zinc-800">Dark</option>
                <option value="bg-green-500">Green</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#b76b80] hover:bg-[#a05a6f] text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? 'Adding...' : 'Add Product'}
              </button>
              <Link
                href="/admin/dashboard"
                className="flex-1 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold py-2 rounded-lg text-center transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
