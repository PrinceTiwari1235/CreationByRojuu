export default function SunriseBasket() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Sunrise Basket</h1>
      <p className="text-lg text-zinc-700 mb-8">This is a placeholder page for the Sunrise Basket product.</p>
      <img src="/sunrise-basket.jpg" alt="Sunrise Basket" className="rounded-xl shadow-lg w-full max-w-md" />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Sunrise Basket",
            description: "A beautiful sunrise basket.",
            image: "https://creation-by-rojuu.vercel.app/_next/image?url=%2Fsunrise-basket.jpg&w=3840&q=75",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "65",
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
