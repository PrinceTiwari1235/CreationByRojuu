import { FaShippingFast } from "react-icons/fa";
import { GiCottonFlower } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function FeaturesBar() {
  return (
    <section className="bg-[#fcf7f8] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-stretch gap-8 sm:gap-10">
        <div className="flex-1 flex flex-col items-center text-center mb-6 sm:mb-0">
          <div className="bg-[#e9d7dd] rounded-full p-5 mb-3">
            <FaShippingFast size={32} className="text-[#b76b80]" />
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-zinc-800 mb-1">Free Shipping</h3>
          <p className="text-zinc-500 text-sm sm:text-base">On orders over $75</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center mb-6 sm:mb-0">
          <div className="bg-[#e9d7dd] rounded-full p-5 mb-3">
            <GiCottonFlower size={32} className="text-[#b76b80]" />
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-zinc-800 mb-1">Eco Materials</h3>
          <p className="text-zinc-500 text-sm sm:text-base">Natural dyes &amp; fibers</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="bg-[#e9d7dd] rounded-full p-5 mb-3">
            <FaHandHoldingHeart size={32} className="text-[#b76b80]" />
          </div>
          <h3 className="font-semibold text-base sm:text-lg text-zinc-800 mb-1">Custom Orders</h3>
          <p className="text-zinc-500 text-sm sm:text-base">Made-to-measure pieces</p>
        </div>
      </div>
    </section>
  );
}
