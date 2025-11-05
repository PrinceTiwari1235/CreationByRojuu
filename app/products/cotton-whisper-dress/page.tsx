export default function CottonWhisperDress() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Cotton Whisper Dress</h1>
      <p className="text-lg text-zinc-700 mb-8">This is a placeholder page for the Cotton Whisper Dress product.</p>
      <img src="/cotton-whisper-cloth.jpg" alt="Cotton Whisper Dress" className="rounded-xl shadow-lg w-full max-w-md" />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Cotton Whisper Dress",
            description: "A soft cotton whisper dress.",
            image: "https://creation-by-rojuu.vercel.app/_next/image?url=%2Fcotton-whisper-cloth.jpg&w=3840&q=75",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "120",
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
