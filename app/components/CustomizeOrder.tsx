"use client";

import React, { useState } from "react";

export default function CustomizeOrder({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
    product: "",
    message: "",
    image: null as File | null,
  });

  if (!open) return null;

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
    // You can add API call logic here, including image upload
    alert("Order submitted! We will contact you soon.");
    setForm({ name: "", number: "", address: "", email: "", product: "", message: "", image: null });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative max-w-xl w-full mx-auto p-8 bg-white rounded-xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Customize Your Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </div>
  );
}
