import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa"; // npm install react-icons

const testimonials = [
  {
    id: "riya-s",
    name: "Riya S.",
    location: "Mumbai, IN",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "I gifted their bouquet for Mother’s Day — the craftsmanship was breathtaking! Absolutely stunning work.",
  },
  {
    id: "marcus-t",
    name: "Marcus T.",
    location: "Austin, TX",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "Wore the dress to my sister’s wedding. It felt like poetry. So many compliments.",
  },
  {
    id: "lena-k",
    name: "Lena K.",
    location: "Berlin, DE",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "Their baskets hold more than things — they hold memories. A centerpiece in my home now.",
  },
  {
    id: "amira-p",
    name: "Amira P.",
    location: "Dubai, UAE",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "Beautifully made and arrived faster than expected. I love the attention to detail in every stitch.",
  },
  {
    id: "diego-r",
    name: "Diego R.",
    location: "Mexico City, MX",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "The custom sizing was perfect and the communication was excellent. I will be ordering again for gifts.",
  },
  {
    id: "sofia-l",
    name: "Sofia L.",
    location: "Lisbon, PT",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&w=128&h=128&facepad=2&q=80",
    quote: "Such warm, thoughtful packaging and the product quality is simply outstanding. Highly recommended!",
  },
];

interface StarRatingProps {
  rating?: number;
}

function StarRating({ rating = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="h-5 w-5 text-amber-400" />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  id: string;
  name: string;
  location: string;
  img: string;
  quote: string;
}

function TestimonialCard({ name, location, img, quote, id }: TestimonialCardProps) {
  return (
    <figure
      className="relative flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
      itemScope
      itemType="http://schema.org/Review"
    >
      <FaQuoteRight className="absolute top-6 right-6 h-8 w-8 text-zinc-100" />
      <div className="flex items-center gap-4">
        <Image
          src={img}
          alt={name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover shadow-md"
        />
        <div className="flex-1">
          <figcaption className="text-lg font-semibold text-zinc-900" itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name">{name}</span>
          </figcaption>
          <p className="text-sm text-zinc-500">{location}</p>
        </div>
      </div>
      <StarRating />
      <blockquote className="mt-2 text-zinc-700 leading-relaxed text-balance" itemProp="reviewBody">
        <p>"{quote}"</p>
      </blockquote>
    </figure>
  );
}

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-zinc-50 to-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-4">
            Loved by Craft Lovers
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            See what our cherished customers have to say about their creations.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}