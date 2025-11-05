export default function BespokeWeaves() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Bespoke Weaves</h1>
      <p className="text-lg text-zinc-700 mb-8">This is a placeholder page for the Bespoke Weaves product.</p>
      <img src="/bespoke-weaves.jpg" alt="Bespoke Weaves" className="rounded-xl shadow-lg w-full max-w-md" />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Bespoke Weaves",
            description: "A unique bespoke weave.",
            image: "https://creation-by-rojuu.vercel.app/_next/image?url=%2Fbespoke-weaves.jpg&w=3840&q=75",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "75",
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
