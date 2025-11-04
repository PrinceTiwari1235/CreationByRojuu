import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductHighlight from "./components/ProductHighlight";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      {/* Full-bleed hero */}
      <Hero />

      {/* Centered content container for the rest of the homepage */}
      <div className="mx-auto max-w-4xl px-6">
        <About />
        <FeaturedProduct />
        <ProductHighlight />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}
