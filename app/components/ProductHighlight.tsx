export default function ProductHighlight() {
  return (
    <section className="py-8 px-4 md:px-0">
      <h3 className="text-xl md:text-2xl font-semibold">Product Highlights</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded border p-4">
          <h4 className="font-medium text-base md:text-lg">Ceramic Mug</h4>
          <p className="text-sm text-zinc-600">Durable, dishwasher-safe mug.</p>
        </div>
        <div className="rounded border p-4">
          <h4 className="font-medium text-base md:text-lg">Art Print - Sunset</h4>
          <p className="text-sm text-zinc-600">High-quality giclée print.</p>
        </div>
      </div>
    </section>
  );
}
