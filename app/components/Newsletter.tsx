export default function Newsletter() {
  return (
    <section className="py-8 border-t pt-6">
      <h3 className="text-xl font-semibold">Join our newsletter</h3>
      <p className="mt-2 text-zinc-700">Get updates on new products and special offers.</p>
      <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input className="flex-1 rounded border px-3 py-2" placeholder="Your email" aria-label="Email" />
        <button className="rounded bg-black px-4 py-2 text-white">Subscribe</button>
      </form>
    </section>
  );
}
