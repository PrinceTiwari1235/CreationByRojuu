export default function FeaturedProduct() {
  return (
    <section className="py-8">
      <h3 className="text-2xl font-semibold">Featured Product</h3>
      <div className="mt-4 rounded border p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Handmade Notebook</h4>
            <p className="text-sm text-zinc-600">Lined pages, embossed cover</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold">$12</div>
            <button className="mt-2 rounded bg-black px-3 py-1 text-white">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}
