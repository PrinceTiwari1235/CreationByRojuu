"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CustomizeOrder() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
    product: "",
    message: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted! We will contact you soon.");
    setForm({ name: "", number: "", address: "", email: "", product: "", message: "", image: null });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-50">
      <h1 className="text-4xl font-bold mb-4">Customize Your Order</h1>
      <p className="text-lg text-zinc-700 mb-8 text-center max-w-xl">Fill out the form below to customize your order. Add your product details, upload an image, and leave a message for our artisan team.</p>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email (optional)"
          className="w-full px-4 py-2 border rounded"
        />
        <div>
          <label className="block mb-1 font-medium">Image (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {form.image && (
            <div className="mt-2 text-sm text-zinc-700">Selected file: {form.image.name}</div>
          )}
        </div>
        <input
          type="text"
          name="product"
          value={form.product}
          onChange={handleChange}
          placeholder="Product Details (e.g. size, color)"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Additional instructions or message"
          rows={4}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-[#b76b80] hover:bg-[#a05a6f] text-white font-semibold py-2 rounded"
        >
          Submit Order
        </button>
      </form>
      <Link href="/" className="mt-8 inline-block px-6 py-2 rounded-full bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-semibold transition">Return to Home</Link>
    </div>
  );
}
