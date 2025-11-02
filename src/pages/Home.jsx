import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import PRODUCTS from "../data/products";

// Import all 10 images
import img1 from "../assets/103.jpg";
import img2 from "../assets/16.jpg";
import img3 from "../assets/14.jpg";
import img4 from "../assets/31.jpg";
import img5 from "../assets/18.jpg";
import img6 from "../assets/28.jpg";
import img7 from "../assets/19.jpg";
import img8 from "../assets/31.jpg";
import img9 from "../assets/20.jpg";
import img10 from "../assets/33.jpg";

export default function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [current, setCurrent] = useState(0);

  // Automatically change background every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Featured products — elegant luxury selection
  const featured = [
    {
      id: 1,
      name: "Oud Sora",
      image: img2,
      price: "₵85",
      description: "A deep, exotic scent that defines modern sophistication.",
    },
    {
      id: 2,
      name: "Sophia",
      image: img4,
      price: "₵120",
      description: "Timeless elegance in a bottle — soft, warm, and classy.",
    },
    {
      id: 3,
      name: "Black Mystic",
      image: img6,
      price: "₵85",
      description: "A bold, mysterious scent for those who dare to stand out.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <main className="relative min-h-screen overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="background"
              className={`absolute inset-0 w-full h-full bg-cover bg-center = transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Subtle Black + Gold Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

        {/* Hero Content */}
        <section className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-[90vh] px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-6 drop-shadow-lg">
            Discover Your Signature Style
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            From exotic oil perfumes to modest outfits and Abayas — indulge in
            timeless elegance, only at{" "}
            <span className="text-[#d4af37]">Izashub</span>.
          </p>
          <a
            href="/shop"
            className="bg-[#d4af37] hover:bg-[#c19e31] text-black px-10 py-3 rounded-lg shadow-lg hover:shadow-[#d4af37]/40 transition-all font-semibold"
          >
            Shop Now
          </a>
        </section>
      </main>

      {/* Featured Products Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 bg-black/80 backdrop-blur-sm rounded-2xl -mt-50 mb-16 shadow-2xl border border-[#d4af37]/30">
        <h2 className="text-3xl font-serif font-bold text-center text-[#d4af37] mb-10">
          Featured Selections
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div
              key={item.id}
              className="group bg-black/70 border border-[#d4af37]/20 rounded-xl overflow-hidden shadow-lg hover:shadow-[#d4af37]/30 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3 italic">
                  {item.description}
                </p>
                <p className="text-[#d4af37] font-bold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Button */}
        <div className="text-center mt-10">
          <a
            href="/shop"
            className="inline-block px-8 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#b9982d] transition-all shadow-lg"
          >
            Explore All Products
          </a>
        </div>
      </section>
    </div>
  );
}
