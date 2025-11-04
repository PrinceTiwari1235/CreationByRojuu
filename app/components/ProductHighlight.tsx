export default function ProductHighlight() {
  return (
    <section className="py-8 px-4 md:px-0" aria-label="Product Highlights">
      <h3 className="text-xl md:text-2xl font-semibold">Featured Product Highlights</h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded border p-4" itemScope itemType="http://schema.org/Product">
          <h4 className="font-medium text-base md:text-lg" itemProp="name">Ceramic Mug</h4>
          <p className="text-sm text-zinc-600" itemProp="description">Durable, dishwasher-safe mug.</p>
        </div>
        <div className="rounded border p-4" itemScope itemType="http://schema.org/Product">
          <h4 className="font-medium text-base md:text-lg" itemProp="name">Art Print - Sunset</h4>
          <p className="text-sm text-zinc-600" itemProp="description">High-quality giclée print.</p>
        </div>
      </div>
    </section>
  );
}
