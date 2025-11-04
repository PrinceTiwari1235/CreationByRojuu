import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import FeaturedProduct from "./components/FeaturedProducts";
import ProductHighlight from "./components/ProductHighlight";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import AboutSection from "./components/AboutSection";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <div>
        {/* Full-bleed hero */}
        <Hero />
        {/* Centered content container for the rest of the homepage */}
        <div>
          <FeaturesBar />
          <AboutSection />
          <FeaturedProduct />
          <ProductHighlight />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </>
  );
}
