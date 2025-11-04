'use client';

import { useState } from 'react';

export default function ProductForm({ initialValues }: { initialValues?: { name?: string } }) {
	const [name, setName] = useState(initialValues?.name ?? '');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			// Example: POST to an API route; adjust endpoint/payload as needed.
			const res = await fetch('/api/products/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name }),
			});
			if (!res.ok) throw new Error('Request failed');
			setSuccess(true);
		} catch (err: any) {
			setError(err?.message ?? 'An error occurred');
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<label className="block text-sm font-medium text-zinc-700">Name</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1 block w-full rounded-md border px-3 py-2"
					placeholder="Enter name"
				/>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading}
					className="rounded-full bg-[#b76b80] px-4 py-2 text-white"
				>
					{loading ? 'Submitting...' : 'Submit'}
				</button>
			</div>

			{error && <p className="text-sm text-red-600">{error}</p>}
			{success && <p className="text-sm text-green-600">Submitted successfully.</p>}
		</form>
	);
}