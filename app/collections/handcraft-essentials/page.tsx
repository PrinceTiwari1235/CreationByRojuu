export default function HandcraftEssentials() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Handcraft Essentials</h1>
      <p className="text-lg text-zinc-700 mb-8">This is a placeholder page for the Handcraft Essentials collection.</p>
      <img src="/handcraft-essentials.jpg" alt="Handcraft Essentials" className="rounded-xl shadow-lg w-full max-w-md" />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Handcraft Essentials",
            description: "Essential handcrafted items.",
            image: "https://creation-by-rojuu.vercel.app/_next/image?url=%2Fhandcraft-essentials.jpg&w=3840&q=75",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "10",
              availability: "https://schema.org/InStock",
              priceValidUntil: "2025-12-31"
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5"
              },
              author: {
                "@type": "Person",
                name: "Artisan Customer"
              }
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "1"
            }
          })
        }}
      />
    </div>
  );
}
