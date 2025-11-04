'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      // Example: POST to an API route
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setError(err?.message ?? 'An error occurred');
    }
  }

  return (
    <section className="my-12 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#b76b80] text-white px-4 py-2 rounded-md"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-2 text-green-600 text-sm">Thank you for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-sm">{error}</p>
      )}
    </section>
  );
}
