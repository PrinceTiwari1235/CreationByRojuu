import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import FeaturedProduct from "./components/FeaturedProduct";
import ProductHighlight from "./components/ProductHighlight";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div>
      {/* Full-bleed hero */}
      {/* Centered content container for the rest of the homepage */}
      <div>
      <Hero />
      <FeaturesBar />
        <AboutSection />
        <FeaturedProduct />
        <ProductHighlight />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}
